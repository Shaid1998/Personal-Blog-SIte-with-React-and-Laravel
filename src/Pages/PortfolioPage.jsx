import React, { Component, Fragment } from 'react'
import NavBar from '../Component/Home/NavBar'
import HomeTop from '../Component/Home/HomeTop'
import PortfolioHome from '../Component/DeveloperPortfolio/PortfolioHome'
import Footer from '../Component/Footer/Footer'

class PortfolioPage extends Component {
    render() {
        return (
            <Fragment>
                <NavBar />
                <HomeTop />
                <PortfolioHome />
                <Footer />
            </Fragment>
        )
    }
}

export default PortfolioPage