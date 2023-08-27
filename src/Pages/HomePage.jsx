import React, { Component, Fragment } from 'react'
import HomeTop from '../Component/Home/HomeTop'
import NavBar from '../Component/Home/NavBar'
import Footer from '../Component/Footer/Footer'

class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <NavBar />
                <HomeTop />
                <Footer />
            </Fragment>
        )
    }
}

export default HomePage