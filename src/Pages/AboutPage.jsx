import React, { Component, Fragment } from 'react'
import NavBar from '../Component/Home/NavBar'
import About from '../Component/About/About'
import Footer from '../Component/Footer/Footer'
import HomeTop from '../Component/Home/HomeTop'

class AboutPage extends Component {
    render() {
        return (
            <Fragment>
                <NavBar />
                <HomeTop />
                <About />
                <Footer />
            </Fragment>
        )
    }
}

export default AboutPage