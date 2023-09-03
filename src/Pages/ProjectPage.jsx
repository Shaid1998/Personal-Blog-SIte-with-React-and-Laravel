import React, { Component, Fragment } from 'react'
import ProjectDetails from '../Component/Project/ProjectDetails'
import NavBar from '../Component/Home/NavBar'
import HomeTop from '../Component/Home/HomeTop'
import Footer from '../Component/Footer/Footer'

class ProjectPage extends Component {
    render() {
        return (
            <Fragment>
                <NavBar />
                <HomeTop />
                <ProjectDetails />
                <Footer />
            </Fragment>
        )
    }
}

export default ProjectPage