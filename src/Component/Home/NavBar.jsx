import React, { Component, Fragment } from 'react'
import { Button, Container, Form, Nav, NavDropdown, Navbar } from 'react-bootstrap'


class NavBar extends Component {
  render() {
    return (
      <Fragment>
        <Container className='NavContent' fluid>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid={true}>
                    <Navbar.Brand href="/">My Blog</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav className="Navitem me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                                <Nav.Link href="/">Home</Nav.Link>
                                <NavDropdown title="Blog">
                                    <NavDropdown.Item href="/allblog">All Blog</NavDropdown.Item>
                                    <NavDropdown.Item href="/popular">Popular</NavDropdown.Item>
                                    <NavDropdown.Item href="/tranding">Tranding</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="/about">About</Nav.Link> 
                                <Nav.Link href="/portfolio">Developer</Nav.Link>
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