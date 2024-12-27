# Barclays

A remarkable Niagara module brought to you by vaishnavi.

#### New Module Created Without adding Skeleton files



```javascript
  require(['/nmodule/Barclays/rc/BarclaysWidget'], function (BarclaysWidget) {
    var widget = new BarclaysWidget();
    widget.initialize($('#myWidgetGoesHere')).then(function () {
      return widget.load('my value');
    });
  });
```



## Building

This module builds with Gradle. The Gradle build will perform r.js optimization,
minification, and JSDoc generation. Just type: `gradlew :Barclays:build`

## Development

You can do development on this module with the help of Grunt. Just cd into
the module directory and type `grunt watch` to begin; JSHint and Karma tests
will be run on every file save. You can also type `grunt jshint:src` and
`grunt karma` just to run them once.

Just type `grunt` for a listing of all options.