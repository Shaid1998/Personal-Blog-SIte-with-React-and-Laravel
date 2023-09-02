import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export class DevelopersIntroduction extends Component {
    render() {
      return (
        <Fragment>
          <Container>
            <Row>
              <Col lg={6} md={6} sm={12}>
                <h4>Full Name: Md.Shaidur Rahman</h4>
                <h4></h4>
              </Col>
              
            </Row>
          </Container>
        </Fragment>
      )
    }
}

export default DevelopersIntroduction