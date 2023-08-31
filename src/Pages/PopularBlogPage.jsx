import React, { Component, Fragment } from 'react'
import NavBar from '../Component/Home/NavBar'
import PopularBlog from '../Component/Blog/PopularBlog'
import Footer from '../Component/Footer/Footer'

class PopularBlogPage extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <PopularBlog />
        <Footer />
      </Fragment>
    )
  }
}

export default PopularBlogPage