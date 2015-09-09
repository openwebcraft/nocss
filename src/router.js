import app from 'ampersand-app'
import React from 'react'
import Router from 'ampersand-router'
import IndexPage from './pages/index'
import AboutPage from './pages/about'
import MessagePage from './pages/message'
import Layout from './layout'

export default Router.extend({
  renderPage (page, opts = {layout: true}) {
    if (opts.layout) {
      page = (
        <Layout>
          {page}
        </Layout>
      )
    }

    React.render(page, document.body)
  },

  routes: {
    '': 'index',
    'about': 'about',
    '*fourohfour': 'fourOhFour'
  },

  index () {
    this.renderPage(<IndexPage/>)
  },

  about () {
    this.renderPage(<AboutPage/>)
  },

  fourOhFour () {
    this.renderPage(<MessagePage title='Page not found'/>)
  }
})
