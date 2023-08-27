import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true}>
                    <Row>
                        <Col lg={3} md={3} sm={3}>
                            <h1 className='FooterTitle'>Address</h1>
                            <h4 className='FooterShbTitle'>Dhaka, Bangladesh</h4>
                        </Col>
                        <Col lg={3} md={3} sm={3}>
                            <h1 className='FooterTitle'>About Me</h1>
                            <h4 className='FooterShbTitle'>Portfolio</h4>
                        </Col>
                        <Col lg={3} md={3} sm={3}>
                            <h1 className='FooterTitle'>Contact Me</h1>
                            <h4 className='FooterShbTitle'>Gmail: shaidurrahman225@gmail.com</h4>
                            <h4 className='FooterShbTitle'>Phone: +8801928-466221</h4>
                        </Col>
                        <Col lg={3} md={3} sm={3}>
                            <h1 className='FooterTitle'>Language Change</h1>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default Footer