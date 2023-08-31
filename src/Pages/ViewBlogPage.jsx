import React, { Component, Fragment } from 'react'
import NavBar from '../Component/Home/NavBar'
import BlogDetails from '../Component/Blog/BlogDetails'
import Footer from '../Component/Footer/Footer'

class ViewBlogPage extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <BlogDetails />
        <Footer />
      </Fragment>
    )
  }
}

export default ViewBlogPage