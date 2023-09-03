import React, { Component, Fragment } from 'react'
import PopularBlog from '../Blog/PopularBlog'
import TrandingBlog from '../Blog/TrandingBlog'
import HomeTop from '../Home/HomeTop'

class AllBlog extends Component {
  render() {
    return (
      <Fragment>
          <HomeTop />
          <PopularBlog />
          <TrandingBlog />
      </Fragment>
    )
  }
}

export default AllBlog