import React, { Component, Fragment } from 'react'
import DevelopersIntroduction from './DevelopersIntroduction'
import DeveloperEducation from './DeveloperEducation'
import DeveloperAchivments from './DeveloperAchivments'
import CompletedWorks from './CompletedWorks'
import PreviousEmployment from './PreviousEmployment'
import UsefllLinks from './UsefllLinks'

class PortfolioHome extends Component {
    render() {
        return (
            <Fragment>
                <DevelopersIntroduction />
                <DeveloperEducation />
                <DeveloperAchivments />
                <CompletedWorks />
                <PreviousEmployment />
                <UsefllLinks />
            </Fragment>
        )
    }
}

export default PortfolioHome