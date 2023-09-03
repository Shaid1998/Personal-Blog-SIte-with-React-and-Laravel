import React, { Component, Fragment } from 'react'
import { Container } from 'react-bootstrap'

class PreviousEmployment extends Component {
  render() {
    return (
      <Fragment>
        <Container className='IntroStart' fluid={true}>
          <h1 className='TitleTopic'>Previous Employment</h1>
          <div className='Employment'>
            <div>
              <h4 className='JobTitle'>Job 1 Title</h4>
              <h6 className='JobCompany'>Institution Name</h6>
              <p className='JobDetails'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer diam orci, mollis a mi in, ullamcorper pretium nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo turpis et lacus accumsan, vel hendrerit odio sodales. Duis tortor mauris, suscipit sit amet mauris ut, pellentesque pulvinar dolor.</p>
            </div>
            <div>
              <h4 className='JobTitle'>Job 2 Title</h4>
              <h6 className='JobCompany'>Institution Name</h6>
              <p className='JobDetails'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer diam orci, mollis a mi in, ullamcorper pretium nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo turpis et lacus accumsan, vel hendrerit odio sodales. Duis tortor mauris, suscipit sit amet mauris ut, pellentesque pulvinar dolor.</p>
            </div>
            <div>
              <h4 className='JobTitle'>Job 3 Title</h4>
              <h6 className='JobCompany'>Institution Name</h6>
              <p className='JobDetails'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer diam orci, mollis a mi in, ullamcorper pretium nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo turpis et lacus accumsan, vel hendrerit odio sodales. Duis tortor mauris, suscipit sit amet mauris ut, pellentesque pulvinar dolor.</p>
            </div>
          </div>
        </Container>
      </Fragment>
    )
  }
}

export default PreviousEmployment