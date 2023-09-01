import React, { Component, Fragment } from 'react'
import { Route, Routes } from 'react-router'
import HomePage from '../Pages/HomePage'
import AboutPage from '../Pages/AboutPage'
import BlogPage from '../Pages/BlogPage'
import TrandingBlogPage from '../Pages/TrandingBlogPage'
import PopularBlogPage from '../Pages/PopularBlogPage'
import ViewBlogPage from '../Pages/ViewBlogPage'
import PortfolioPage from '../Pages/PortfolioPage'

class AppRoute extends Component {
  render() {
        return (
        <Fragment>
            <Routes>
                <Route exact path="/" element={<HomePage />}></Route>
                <Route exact path="/about" element={<AboutPage />}></Route>
                <Route exact path="/allblog" element={<BlogPage />}></Route>
                <Route exact path="/tranding" element={<TrandingBlogPage />}></Route>
                <Route exact path="/popular" element={<PopularBlogPage />}></Route>
                <Route exact path="/viewblog" element={<ViewBlogPage />}></Route>
                <Route exact path="/portfolio" element={<PortfolioPage />}></Route>
            </Routes>
        </Fragment>
        )
    }
}

export default AppRoute