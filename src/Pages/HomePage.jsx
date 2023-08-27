import React, { Component, Fragment } from 'react'
import HomeTop from '../Component/Home/HomeTop'
import NavBar from '../Component/Home/NavBar'

class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <NavBar />
                <HomeTop />
            </Fragment>
        )
    }
}

export default HomePage