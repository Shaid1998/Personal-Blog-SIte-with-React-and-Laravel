import React, { Component, Fragment } from 'react'
import { Container, Row } from 'react-bootstrap'

export class DevelopersIntroduction extends Component {
    render() {
      return (
        <Fragment>
          <Container className='IntroStart' fluid={true}>
            <h1 className='TitleTopic'>Introduction</h1>
            <Row className='Intro'>
              <img className='DevImg' src='https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=996&t=st=1693726450~exp=1693727050~hmac=2a44d7d862e6ff2fb35602a96fc2475eca531d45a1db770a9600e4cfd042b403' />
              <h4 className='PortDTitle'>Md. Shaidur Rahman</h4>
              <h4 className='PortDSub'>B.Sc in Software Engineering , 2022</h4>
              <h4 className='PortDSub'>Daffodil International University</h4>
              <h4 className='PortDSub'>Dhaka, Bangladesh</h4>
            </Row>
          </Container>
        </Fragment>
      )
    }
}

export default DevelopersIntroduction