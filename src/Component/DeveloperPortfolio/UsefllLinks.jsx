import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

class UsefllLinks extends Component {
  render() {
    return (
      <Fragment>
        <Container className='IntroStart' fluid={true}>
          <h1 className='TitleTopic'>Releted Links</h1>
          <Row className='Links'>
            <Col className='Icon' lg={2} md={6} sm={4}>
                <a href="https://www.facebook.com/"><i className="Icone fab m-1 h4 fa-facebook"></i></a>
            </Col>
            <Col className='Icon' lg={2} md={6} sm={4}>
                <a href="https://www.instagram.com"><i className="Icone fab m-1 h4 fa-instagram"></i></a>
            </Col>
            <Col className='Icon' lg={2} md={6} sm={4}>
                <a href="https://twitter.com"><i className="Icone fab m-1 h4 fa-twitter"></i></a>
            </Col>
            <Col className='Icon' lg={2} md={6} sm={4}>
                <a href="https://github.com"><i className="Icone fab m-1 h4 fa-github"></i></a>
            </Col>
            <Col className='Icon' lg={2} md={6} sm={4}>
                <a href="https://www.hackerrank.com"><i className="Icone fab m-1 h4 fa-hackerrank"></i></a>
            </Col>
            <Col className='Icon' lg={2} md={6} sm={4}>
                <a href="https://www.behance.net"><i className="Icone fab m-1 h4 fa-behance"></i></a>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default UsefllLinks