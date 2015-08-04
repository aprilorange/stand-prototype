var menubar = require('menubar')

var mb = menubar({
  dir: './',
  preloadWindow: true,
  icon: 'icon.png'
})

mb.on('ready', function ready () {
  console.log('app is ready')
  // your app code here
})