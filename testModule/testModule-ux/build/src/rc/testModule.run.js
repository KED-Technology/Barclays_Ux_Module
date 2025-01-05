require(['baja!', 'bajaux/events', 'nmodule/testModule/rc/testModule', 'jquery', 'nmodule/testModule/rc/TestModuleWidget', 'hbs!nmodule/testModule/rc/template/testModule'], function (baja, events, testModule, $, TestModuleWidget, template) {
  'use strict';

  $("#template").html(template({
    virtues: testModule.extolVirtues()
  }));
  var widget = new TestModuleWidget(),
    comp = baja.$('baja:Component', {
      'remarkable': true,
      'resplendent': true,
      'superb': true,
      'distinguished': true,
      'splendid': true
    });
  var widgetDiv = $('#widget'),
    description = $('#description');
  widget.initialize(widgetDiv).then(function () {
    widgetDiv.on(events.MODIFY_EVENT, function () {
      widget.read().then(function (value) {
        description.text(value);
      })["catch"](baja.error);
    });
    return widget.load(comp);
  })["catch"](baja.error);
});
