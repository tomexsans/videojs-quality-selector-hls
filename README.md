# videojs-quality-selector-hls

This is a Plugin For VideoJS 8+ To select Quality on the Video if available

This is a FORK FROM https://github.com/chrisboustead/videojs-hls-quality-selector

Updated Dependencies and made it to work for `Videojs 8`

## Table of Contents

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

## License

MIT. Copyright (c) Tomexsans Evaristo &lt;t2t.exe@gmail.com&gt;


[videojs]: http://videojs.com/
