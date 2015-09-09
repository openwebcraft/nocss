require('babel/register')
var getConfig = require('hjs-webpack')
var Layout = require('./src/layout')
var Index = require('./src/pages/index')
var Message = require('./src/pages/message')
var React = require('react')

function renderPageToString(page, props) {
  props = props || null
  return React.renderToString(
    React.createElement(Layout, {},
      React.createElement(page, props)
    )
  )
}

module.exports = getConfig({
  in: 'src/app.js',
  out: 'public',
  isDev: process.env.NODE_ENV !== 'production',
  // here you can configure your local machine hostname
  // and share it with other devices on your network
  // hostname: 'mbp-mg.local',
  html: function (context) {
    var layoutHtml = React.renderToString(React.createElement(Layout))
    var indexHtml = renderPageToString(Index)
    var fourOhFourHtml = renderPageToString(Message, {title: 'Page not found'})
    console.log('indexHtml', fourOhFourHtml)

    return {
      '404.html': context.defaultTemplate({html: fourOhFourHtml, title: 'Error 404 (Not Found)'}),
      // '200.html': context.defaultTemplate({html: layoutHtml, title: 'NoCSS'}),
      'index.html': context.defaultTemplate({html: indexHtml, title: 'NoCSS'})
    }
  },
  clearBeforeBuild: true
})
