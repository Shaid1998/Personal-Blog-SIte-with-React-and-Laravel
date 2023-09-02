import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container className='footerback m-0 mt-5 pt-3 shadow-sm' fluid={true}>
                    <Row>
                        <Col lg={3} md={3} sm={3}>
                            <h1 className='footer-menu-title'>ADDRESS</h1>
                            <h4 className='footer-text'>Dhaka, Bangladesh</h4>
                        </Col>
                        <Col lg={3} md={3} sm={3}>
                            <h1 className='footer-menu-title'>ABOUT</h1>
                            <a className='footer-link' href='/about'>About Us</a><br></br>
                            <a className='footer-link' href='/portfolio'>About Developer</a>
                        </Col>
                        <Col lg={3} md={3} sm={3}>
                            <h1 className='footer-menu-title'>CONTACT US</h1>
                            <h4 className='footer-text'>Gmail: shaidurrahman225@gmail.com</h4>
                            <h4 className='footer-text'>Phone: +8801928-466221</h4>
                        </Col>
                        <Col lg={3} md={3} sm={3}>
                            <h1 className='footer-menu-title'>LANGUAGE</h1>
                            Chose Your Language <br></br>
                            <div id='google_translate_element'></div>
                        </Col>
                    </Row>
                </Container>
                <Container fluid={true} className="text-center m-0 pt-3 pb-1 bg-dark">
                    <Container className='copyright'>
                    <Row>
                        <h6 className="text-white">© Copyright 2021 by MyBlog, All Rights Reserved</h6>
                    </Row>
                    </Container>
                </Container> 
            </Fragment>
        )
    }
}

export default Footer