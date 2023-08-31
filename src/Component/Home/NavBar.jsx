import React, { Component, Fragment } from 'react'
import { Button, Container, Form, Nav, NavDropdown, Navbar } from 'react-bootstrap'


class NavBar extends Component {
  render() {
    return (
      <Fragment>
        <Container className='NavContent' fluid={true}>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="#">My Blog</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav className="Navitem me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                                <Nav.Link href="#action1">Home</Nav.Link>
                                <NavDropdown title="Blog">
                                    <NavDropdown.Item href="#action3">Popular</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">Tranding</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#action1">About</Nav.Link>
                            </Nav>
                            <Form className="d-flex">
                                <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search"/>
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
      </Fragment>
    )
  }
}

export default NavBar