import React, { Component, Fragment } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

class CompletedWorks extends Component {
    render() {
      return (
        <Fragment>
          <Container className='IntroStart' fluid={true}>
            <h1 className='TitleTopic'>Resent Work</h1>
            <Row className='Project'>
              <Col lg={3} md={3} sm={4}>
                <Card className='Card'>
                    <Card.Img className='ProjectImg'  variant="top" src="https://img.freepik.com/free-photo/html-css-collage-concept-with-person_23-2150062008.jpg?size=626&ext=jpg&ga=GA1.1.1518368440.1693339421&semt=sph" />
                    <Card.Body>
                        <Card.Title className='ProjectTitle'>Project 1</Card.Title>
                        <Card.Text className='ProjectDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer diam orci, mollis a mi in, ullamcorper pretium nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo turpis et lacus accumsan, vel hendrerit odio sodales. Duis tortor mauris, suscipit sit amet mauris ut, pellentesque pulvinar dolor. Morbi eu magna vitae ipsum bibendum ornare ac id elit. Vivamus id volutpat metus, varius fringilla risus. Nulla ullamcorper, lorem quis viverra tincidunt, nulla dui faucibus leo, et vulputate libero dui vel ante. Phasellus euismod, nunc eget molestie dapibus, augue turpis condimentum magna, commodo eleifend orci enim eu erat. Praesent quis auctor leo. Donec congue, eros sed vehicula commodo, est mi hendrerit massa, non sodales nisl magna vel tellus.</Card.Text>
                        <Button className='ProjectButton' href='/viewProject' variant="primary">Details</Button>
                    </Card.Body>
                </Card>
              </Col>
              <Col lg={3} md={3} sm={4}>
                <Card className='Card'>
                    <Card.Img className='ProjectImg'  variant="top" src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?size=626&ext=jpg&ga=GA1.1.1518368440.1693339421&semt=sph" />
                    <Card.Body>
                        <Card.Title className='ProjectTitle'>Project 2</Card.Title>
                        <Card.Text className='ProjectDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer diam orci, mollis a mi in, ullamcorper pretium nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo turpis et lacus accumsan, vel hendrerit odio sodales. Duis tortor mauris, suscipit sit amet mauris ut, pellentesque pulvinar dolor. Morbi eu magna vitae ipsum bibendum ornare ac id elit. Vivamus id volutpat metus, varius fringilla risus. Nulla ullamcorper, lorem quis viverra tincidunt, nulla dui faucibus leo, et vulputate libero dui vel ante. Phasellus euismod, nunc eget molestie dapibus, augue turpis condimentum magna, commodo eleifend orci enim eu erat. Praesent quis auctor leo. Donec congue, eros sed vehicula commodo, est mi hendrerit massa, non sodales nisl magna vel tellus.</Card.Text>
                        <Button className='ProjectButton' href='/viewProject' variant="primary">Details</Button>
                    </Card.Body>
                </Card>
              </Col>
              <Col lg={3} md={3} sm={4}>
                <Card className='Card'>
                    <Card.Img className='ProjectImg'  variant="top" src="https://img.freepik.com/premium-photo/cybersecurity-digital-information-technology-concept-polygon-binary-code-connected_371307-161.jpg?size=626&ext=jpg&ga=GA1.1.1518368440.1693339421&semt=sph" />
                    <Card.Body>
                        <Card.Title className='ProjectTitle'>Project 3</Card.Title>
                        <Card.Text className='ProjectDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer diam orci, mollis a mi in, ullamcorper pretium nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo turpis et lacus accumsan, vel hendrerit odio sodales. Duis tortor mauris, suscipit sit amet mauris ut, pellentesque pulvinar dolor. Morbi eu magna vitae ipsum bibendum ornare ac id elit. Vivamus id volutpat metus, varius fringilla risus. Nulla ullamcorper, lorem quis viverra tincidunt, nulla dui faucibus leo, et vulputate libero dui vel ante. Phasellus euismod, nunc eget molestie dapibus, augue turpis condimentum magna, commodo eleifend orci enim eu erat. Praesent quis auctor leo. Donec congue, eros sed vehicula commodo, est mi hendrerit massa, non sodales nisl magna vel tellus.</Card.Text>
                        <Button className='ProjectButton' href='/viewProject' variant="primary">Details</Button>
                    </Card.Body>
                </Card>
              </Col>
              <Col lg={3} md={3} sm={4}>
                <Card className='Card'>
                    <Card.Img className='ProjectImg'  variant="top" src="https://img.freepik.com/free-photo/html-css-collage-concept_23-2150061955.jpg?size=626&ext=jpg&ga=GA1.1.1518368440.1693339421&semt=sph" />
                    <Card.Body>
                        <Card.Title className='ProjectTitle'>Project 4</Card.Title>
                        <Card.Text className='ProjectDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer diam orci, mollis a mi in, ullamcorper pretium nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo turpis et lacus accumsan, vel hendrerit odio sodales. Duis tortor mauris, suscipit sit amet mauris ut, pellentesque pulvinar dolor. Morbi eu magna vitae ipsum bibendum ornare ac id elit. Vivamus id volutpat metus, varius fringilla risus. Nulla ullamcorper, lorem quis viverra tincidunt, nulla dui faucibus leo, et vulputate libero dui vel ante. Phasellus euismod, nunc eget molestie dapibus, augue turpis condimentum magna, commodo eleifend orci enim eu erat. Praesent quis auctor leo. Donec congue, eros sed vehicula commodo, est mi hendrerit massa, non sodales nisl magna vel tellus.</Card.Text>
                        <Button className='ProjectButton' href='/viewProject' variant="primary">Details</Button>
                    </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </Fragment>
      )
    }
}

export default CompletedWorks