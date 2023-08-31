import React, { Component, Fragment } from 'react'
import NavBar from '../Component/Home/NavBar'
import TrandingBlog from '../Component/Blog/TrandingBlog'
import Footer from '../Component/Footer/Footer'

class TrandingBlogPage extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <TrandingBlog />
        <Footer/>
      </Fragment>
    )
  }
}

export default TrandingBlogPage