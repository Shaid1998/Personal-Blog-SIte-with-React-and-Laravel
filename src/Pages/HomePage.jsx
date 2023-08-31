import React, { Component, Fragment } from 'react'
import HomeTop from '../Component/Home/HomeTop'
import NavBar from '../Component/Home/NavBar'
import Footer from '../Component/Footer/Footer'
import Blog from '../Component/Home/Blog'

class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <NavBar />
                <HomeTop />
                <Blog />
                <Footer />
            </Fragment>
        )
    }
}

export default HomePage