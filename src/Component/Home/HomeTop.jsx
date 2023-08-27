import React, { Component, Fragment } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

class HomeTop extends Component {
    render() {
      return (
        <Fragment>
          <Container fluid={true} className="topFixedBanner p-0">
            <div className='topBannerOverLay'>
                <Container className='TopContent'>
                    <Row>
                        <Col className='text-center'>
                            <h4 className='topTitle'>Welcome Here</h4>
                            <h6 className='topShbTitle'>Enjoy the blog</h6>
                        </Col>
                    </Row>
                </Container>
            </div> 
          </Container>
        </Fragment>
      )
    }
}

export default HomeTop