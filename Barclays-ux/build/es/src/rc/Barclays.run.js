require(['baja!', 'bajaux/events', 'nmodule/Barclays/rc/Barclays', 'jquery', 'nmodule/Barclays/rc/BarclaysWidget', 'hbs!nmodule/Barclays/rc/template/Barclays'], function (baja, events, Barclays, $, BarclaysWidget, template) {
  'use strict';

  $("#template").html(template({
    virtues: Barclays.extolVirtues()
  }));
  var widget = new BarclaysWidget(),
    comp = baja.$('baja:Component', {
      'whimsical': true,
      'meritorious': true,
      'distinguished': true,
      'sublime': true,
      'resplendent': true
    });
  var widgetDiv = $('#widget'),
    description = $('#description');
  widget.initialize(widgetDiv).then(function () {
    widgetDiv.on(events.MODIFY_EVENT, function () {
      widget.read().then(function (value) {
        description.text(value);
      }).catch(baja.error);
    });
    return widget.load(comp);
  }).catch(baja.error);
});
