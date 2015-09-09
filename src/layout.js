import React from 'react'
import NavHelper from './components/nav-helper'
import ampersandMixin from 'ampersand-react-mixin'

export default React.createClass({
  mixins: [ampersandMixin],

  displayName: 'Layout',

  propTypes: {
    children: React.PropTypes.element.isRequired
  },

  render () {
    return (
      <NavHelper>
        <header>
          <h1><a href='/'>NoCSS</a></h1>
          <p>less is more</p>
          <nav>
            <p><a href='/'>Welcome</a></p>
            <p><a href='/about'>About</a></p>
          </nav>
        </header>
        <section>
          {this.props.children}
        </section>
        <footer>
          © 2015 openwebcraft
        </footer>
      </NavHelper>
    )
  }
})
