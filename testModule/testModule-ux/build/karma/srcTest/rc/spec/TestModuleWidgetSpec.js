define(['baja!', 'jquery', 'Promise', 'nmodule/js/rc/jasmine/promiseUtils', 'nmodule/testModule/rc/TestModuleWidget'], function (baja, $, Promise, promiseUtils, TestModuleWidget) {
  'use strict';

  var waitForTrue = promiseUtils.waitForTrue;
  describe('nmodule/testModule/rc/TestModuleWidget', function () {
    var stooges, widget, elem;
    function addStoogesComponent() {
      return baja.Ord.make('station:|slot:').get({
        lease: true
      }).then(function (station) {
        return station.add({
          slot: 'stooges?',
          value: baja.$('baja:Component', {
            moe: true,
            larry: true,
            curly: true
          })
        });
      }).then(function (prop) {
        return baja.Ord.make('station:|slot:/' + prop).get({
          lease: true
        });
      }).then(function (s) {
        stooges = s;
      });
    }
    function removeStoogesComponent() {
      return baja.Ord.make('station:|slot:').get({
        lease: true
      }).then(function (station) {
        return station.remove({
          slot: stooges.getName()
        });
      });
    }
    function initializeWidget() {
      widget = new TestModuleWidget();
      elem = $('<div/>');
      return widget.initialize(elem);
    }
    beforeEach(function () {
      //for each spec, we want an initialized widget, and a mounted
      //component to work with.
      //the use of promiseUtils in allSpecs.js gets us some custom matcher
      //functions and the ability to simply return a Promise from
      //beforeEach()/afterEach()/it() to do an async test.
      return Promise.all([addStoogesComponent(), initializeWidget()]).then(function () {
        return widget.load(stooges);
      });
    });
    afterEach(function () {
      //after each spec, we clean up after ourselves.
      return removeStoogesComponent();
    });
    describe('#doInitialize()', function () {
      it('creates the structure to load buttons into', function () {
        expect(elem.find('.TestModuleWidget-header').length).toBe(1);
        expect(elem.find('.TestModuleWidget-content').length).toBe(1);
      });
      it('arms a handler to set active class on button click', function () {
        var contentDom = elem.find('.TestModuleWidget-content'),
          button = $('<button></button>');
        button.appendTo(contentDom).click();
        expect(button).toHaveClass('active');
      });
      it("removes active class from other buttons when one is clicked", function () {
        var contentDom = elem.find('.TestModuleWidget-content');
        var button1 = $('<button></button>').appendTo(contentDom);
        var button2 = $('<button></button>').appendTo(contentDom);
        var button3 = $('<button></button>').appendTo(contentDom);
        button1.click();
        expect(button1).toHaveClass('active');
        button2.click();
        expect(button1).not.toHaveClass('active');
        expect(button2).toHaveClass('active');
        button3.click();
        expect(button3).toHaveClass('active');
        expect(contentDom.find('button.active').length).toBe(1);
      });
      it('arms a handler to display selected slot name', function () {
        return widget.load(stooges).then(function () {
          var slotDom = elem.find('.TestModuleWidget-selected-slot');
          var contentDom = elem.find('.TestModuleWidget-content');
          var button = contentDom.find('[data-slot=larry]');
          button.click();
          return waitForTrue(function () {
            return slotDom.text() === 'larry';
          }, 'slot name to match the expected name');
        });
      });
    });
    describe('#doLoad()', function () {
      it('creates a button for each slot', function () {
        var slots = stooges.getSlots().toArray();
        var buttons = elem.find('button');
        expect(buttons.length).toBe(slots.length);
        buttons.each(function (i, elem) {
          expect($(elem).data('slot')).toBe(slots[i].getName());
        });
      });
      it("updates buttons when component adds slots", function () {
        return stooges.add({
          slot: 'shemp',
          value: true
        }).then(function () {
          return waitForTrue(function () {
            var buttons = elem.find('button');
            return buttons.eq(3).data('slot') === 'shemp';
          });
        });
      });
    });
    describe('#getSelectedSlotName()', function () {
      beforeEach(function () {
        return widget.load(stooges);
      });
      it('returns the value of the currently active button', function () {
        elem.find('button:contains(curly)').addClass('active');
        expect(widget.getSelectedSlotName()).toBe('curly');
      });
      it('returns undefined if no button selected', function () {
        expect(widget.getSelectedSlotName()).toBe(undefined);
      });
    });
  });
});
