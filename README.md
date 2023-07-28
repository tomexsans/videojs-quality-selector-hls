# videojs-quality-selector-hls

[![ci](https://github.com/tomexsans/videojs-quality-selector-hls/actions/workflows/ci.yml/badge.svg)](https://github.com/tomexsans/videojs-quality-selector-hls/actions/workflows/ci.yml)


[![codecov](https://codecov.io/gh/tomexsans/videojs-quality-selector-hls/branch/main/graph/badge.svg?token=OJXK9JBESI)](https://codecov.io/gh/tomexsans/videojs-quality-selector-hls)

This is a Plugin For VideoJS 8+ To select Quality on the Video if available

This is a complete FORK by https://github.com/chrisboustead from https://github.com/chrisboustead/videojs-hls-quality-selector


Changelog

- updated to work for VideoJS 8
- pulled plugin source code from https://github.com/videojs/generator-videojs-plugin

## Table of Contents

## Dependencies

`videojs-contrib-quality-levels ^4`

```sh
npm i videojs-contrib-quality-levels
```

<!-- START doctoc -->
<!-- END doctoc -->
## Installation

```sh
npm install --save videojs-quality-selector-hls
```

## Usage

To include videojs-quality-selector-hls on your website or web application, use any of the following methods.

### `<script>` Tag

This is the simplest case. Get the script in whatever way you prefer and include the plugin _after_ you include [video.js][videojs], so that the `videojs` global is available.

```html
<script src="//path/to/video.min.js"></script>
<script src="//path/to/videojs-quality-selector-hls.min.js"></script>
<script>
  var player = videojs('my-video');

  player.qualitySelectorHls();
</script>
```

### Browserify/CommonJS

When using with Browserify, install videojs-quality-selector-hls via npm and `require` the plugin as you would any other module.

```js
var videojs = require('video.js');

// The actual plugin function is exported by this module, but it is also
// attached to the `Player.prototype`; so, there is no need to assign it
// to a variable.
require('videojs-quality-selector-hls');

var player = videojs('my-video');

player.qualitySelectorHls();
```

### RequireJS/AMD

When using with RequireJS (or another AMD library), get the script in whatever way you prefer and `require` the plugin as you normally would:

```js
require(['video.js', 'videojs-quality-selector-hls'], function(videojs) {
  var player = videojs('my-video');

  player.qualitySelectorHls();
});
```

## Options

### displayCurrentQuality - `boolean` - _false_

Set to true to display the currently selected resolution in the menu button.  When not enabled, displayed an included VJS "HD" icon.

### placementIndex - `integer`

Set this to override the default positioning of the menu button in the control bar relative to the other components in the control bar.

### vjsIconClass `string` - _"vjs-icon-hd"_

Set this to one of the custom VJS icons ([https://videojs.github.io/font/](https://videojs.github.io/font/)) to override the icon for the menu button.


```js
  var player = videojs('my-video');

  player.qualitySelectorHls({
    displayCurrentQuality: true,
    placementIndex: 2,
    vjsIconClass: 'vjs-icon-hd'
  });
```


## License

MIT. Copyright (c) Tomexsans Evaristo &lt;t2t.exe@gmail.com&gt;


[videojs]: http://videojs.com/
