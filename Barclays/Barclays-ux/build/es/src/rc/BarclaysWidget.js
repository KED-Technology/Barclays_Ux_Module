/** @jsx spandrel.jsx */

/**
 * A module defining `BarclaysWidget`.
 *
 * @module nmodule/Barclays/rc/BarclaysWidget
 */
define(['bajaux/spandrel', 'bajaux/mixin/subscriberMixIn', 'jquery', 'Promise'], function (spandrel, subscriberMixIn, $, Promise) {
  'use strict';

  const SELECTED_CLASS = 'active';
  const BUTTON_CLASS = 'BarclaysWidget-button';
  const TITLE_TEXT = 'These are the slots on your component.';
  const SELECTED_SLOT_TEXT = "You've selected slot: ";
  const widgetDefaults = () => ({
    properties: {
      selectedSlot: ' '
    }
  });

  /**
   * A demonstration Widget. This builds a list of buttons from the slots of a
   * Complex value, allowing the user to select a slot.
   *
   * @class
   * @extends module:nmodule/webEditors/rc/fe/baja/BaseEditor
   * @alias module:nmodule/Barclays/rc/BarclaysWidget
   */
  class BarclaysWidget extends spandrel((comp, {
    properties
  }) => {
    const {
      selectedSlot
    } = properties;
    return spandrel.jsx("div", {
      class: "BarclaysWidget"
    }, spandrel.jsx("div", {
      class: "BarclaysWidget-header"
    }, spandrel.jsx("p", null, TITLE_TEXT), spandrel.jsx("p", null, spandrel.jsx("span", {
      className: "BarclaysWidget-selected-slot-text"
    }, SELECTED_SLOT_TEXT), spandrel.jsx("span", {
      className: "BarclaysWidget-selected-slot"
    }, selectedSlot))), spandrel.jsx("div", {
      class: "BarclaysWidget-content"
    }, spandrel.jsx("div", {
      className: "BarclaysWidget-button-container"
    }, comp.getSlots().toArray().map(slot => spandrel.jsx("button", {
      className: "BarclaysWidget-button",
      type: "button",
      "data-slot": slot.getName()
    }, comp.getDisplayName(slot))))));
  }) {
    constructor(params) {
      super({
        params,
        defaults: widgetDefaults()
      });
      subscriberMixIn(this);
      this.getSubscriber().attach('added removed renamed', () => this.rerender());
    }

    /**
     * Arm event handlers for the Widget.
     *
     * @param {jQuery} element the DOM element into which to load this widget
     */
    doInitialize(dom) {
      dom.on('click', '.BarclaysWidget-content button', e => {
        const target = $(e.target);
        target.siblings().removeClass(SELECTED_CLASS);
        target.addClass(SELECTED_CLASS);
        this.$updateSlotText();
        this.setModified(true);
      });
    }

    /**
     * @returns {string} the name of the currently selected slot
     */
    getSelectedSlotName() {
      const selectedButton = this.jq().find('.BarclaysWidget-content .' + BUTTON_CLASS + '.' + SELECTED_CLASS);
      return selectedButton.data('slot');
    }

    /**
     * Reads the currently selected slot and update the display accordingly.
     *
     * @private
     */
    $updateSlotText() {
      const selectedSlot = this.getSelectedSlotName();
      this.properties().setValue('selectedSlot', selectedSlot + '!');
    }
  }
  return BarclaysWidget;
});
