import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

class HomeTop extends Component {
    render() {
      return (
        <Fragment>
          <Container>
            <Row>
              <Col>
                <div class="text-center"><h1>Welcome on best blog site</h1></div>
              </Col>
            </Row>
          </Container>
        </Fragment>
      )
    }
}

export default HomeTop