import React, { Component, Fragment } from 'react'
import { Container } from 'react-bootstrap'

class DeveloperEducation extends Component {
    render() {
        return (
            <Fragment>
                <Container className='IntroStart' fluid={true}>
                    <h1 className='TitleTopic'>Education</h1>
                    <div className='Education'>
                        <div>
                            <h4 className='DegreeTitle'>Bachelor Of Science (BSC)</h4>
                            <h6 className='Intitution'>Daffodil International University</h6>
                            <h6 className='YearAndStatus'>2022 (Completed)</h6>
                            <p className='DegreeDetails'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer diam orci, mollis a mi in, ullamcorper pretium nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo turpis et lacus accumsan, vel hendrerit odio sodales. Duis tortor mauris, suscipit sit amet mauris ut, pellentesque pulvinar dolor.</p>
                        </div>
                        <div>
                            <h4 className='DegreeTitle'>Higher Secondary School Certificate (HSC)</h4>
                            <h6 className='Intitution'>Govt. K.C. College</h6>
                            <h6 className='YearAndStatus'>22017 (Completed)</h6>
                            <p className='DegreeDetails'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer diam orci, mollis a mi in, ullamcorper pretium nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo turpis et lacus accumsan, vel hendrerit odio sodales. Duis tortor mauris, suscipit sit amet mauris ut, pellentesque pulvinar dolor.</p>
                        </div>
                        <div>
                            <h4 className='DegreeTitle'>Secondary School Certificate (SSC)</h4>
                            <h6 className='Intitution'>Doribinni Secondary School</h6>
                            <h6 className='YearAndStatus'>2014 (Completed)</h6>
                            <p className='DegreeDetails'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer diam orci, mollis a mi in, ullamcorper pretium nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo turpis et lacus accumsan, vel hendrerit odio sodales. Duis tortor mauris, suscipit sit amet mauris ut, pellentesque pulvinar dolor.</p>
                        </div>
                        <div>
                            <h4 className='DegreeTitle'>Junior School Certificate (JSC)</h4>
                            <h6 className='Intitution'>Doribinni Secondary School</h6>
                            <h6 className='YearAndStatus'>2011 (Completed)</h6>
                            <p className='DegreeDetails'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer diam orci, mollis a mi in, ullamcorper pretium nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo turpis et lacus accumsan, vel hendrerit odio sodales. Duis tortor mauris, suscipit sit amet mauris ut, pellentesque pulvinar dolor.</p>
                        </div>
                    </div>
                </Container>
            </Fragment>
        )
    }
}

export default DeveloperEducation