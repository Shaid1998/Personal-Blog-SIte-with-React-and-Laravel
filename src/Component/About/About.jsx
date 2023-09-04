import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import RestClient from '../../BaseUrl/RestClient'
import BaseUrl from '../../BaseUrl/BaseUrl'


class About extends Component {


    sendContact(){
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;

        let JsonObject = {name:name,email:email,message:message}
        RestClient.PostRequest(BaseUrl.ContactSent,JSON.stringify(JsonObject)).then(result=>{
            alert(result);
        }).catch(error=>{
            alert('Error');
        })
    }
    render() {
        return (
            <Fragment>
                <Container className='FooterPosition' fluid={true}>
                    <h1 className='About'>ABOUT US</h1>
                    <Row>
                        <Col>
                            <h4 className='MotivationTitle'>Our Motivation</h4>
                            <p className='MotivationDetails'>
                                A motivational speech can come from anywhere or anyone, but it usually has a specific audience in mind. Whether it's a graduation speech, an all-company meeting, a championship sporting event, or a conference keynote, these speeches are designed to change how their listeners see the challenges facing them in the future.
                                <br></br> 
                                Like in sports, being motivated at work is crucial for your performance. This rings especially true when you have a looming deadline, an important meeting, or colleagues or customers depending on your performance. Think about the last time you felt generally unmotivated. What brought you out of that feeling? Sometimes all it takes to get you going is a good night's sleep or witnessing the benefits of your labor.
                                <br></br> <br></br>
                                Still, other times, you might listen to someone say something that resonates with you — that alters how you've been looking at a particular task or problem. Motivational speeches and speakers can come in all different forms, but this is the one thing they have in common — resonance. They resonate with the right listener at the right time and in the right way.
                                <br></br>
                                Who knows, this article is doing some for you right now. (I can dream, can't I?)
                                <br></br> <br></br>
                                We selected 24 of the best motivational speeches from business, sports, entertainment, and other fields to help you stay motivated no matter what your work throws at you. Watch these videos if you want to feel inspired by a project. Trust me, I was wiping my eyes after I saw them. And while the messages vary from speech to speech, they can put you in the optimal frame of mind for tackling and crushing your next big challenge.
                                <br></br>
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h4 className='GoalTitle'>Our Goal</h4>
                            <p className='GoalDetails'>
                                A motivational speech can come from anywhere or anyone, but it usually has a specific audience in mind. Whether it's a graduation speech, an all-company meeting, a championship sporting event, or a conference keynote, these speeches are designed to change how their listeners see the challenges facing them in the future.
                                <br></br> 
                                Like in sports, being motivated at work is crucial for your performance. This rings especially true when you have a looming deadline, an important meeting, or colleagues or customers depending on your performance. Think about the last time you felt generally unmotivated. What brought you out of that feeling? Sometimes all it takes to get you going is a good night's sleep or witnessing the benefits of your labor.
                                <br></br> <br></br>
                                Still, other times, you might listen to someone say something that resonates with you — that alters how you've been looking at a particular task or problem. Motivational speeches and speakers can come in all different forms, but this is the one thing they have in common — resonance. They resonate with the right listener at the right time and in the right way.
                                <br></br>
                                Who knows, this article is doing some for you right now. (I can dream, can't I?)
                                <br></br> <br></br>
                                We selected 24 of the best motivational speeches from business, sports, entertainment, and other fields to help you stay motivated no matter what your work throws at you. Watch these videos if you want to feel inspired by a project. Trust me, I was wiping my eyes after I saw them. And while the messages vary from speech to speech, they can put you in the optimal frame of mind for tackling and crushing your next big challenge.
                                <br></br>
                            </p>
                        </Col>
                    </Row>
                </Container>
                <Container fluid={true}>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <h1 className="serviceName">Quick Connect</h1>
                            <Form>
                                <Form.Group  >
                                    <Form.Label>Your Name </Form.Label>
                                    <Form.Control id="name" type="text" placeholder="Enter Your Name" /> 
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Your Email </Form.Label>
                                    <Form.Control id="email" type="email" placeholder="Enter Your email" /> 
                                </Form.Group>
                                <Form.Group  >
                                    <Form.Label>Message  </Form.Label>
                                    <Form.Control id='message' as="textarea" rows={3} />
                                </Form.Group>
                                <Button onClick={this.sendContact} variant="primary">Submit</Button>
                            </Form>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <h1 className="serviceName">Discuss Now</h1>
                            <p className="serviceDescription">
                                 Dhaka, Bangladesh<br></br>
                                <FontAwesomeIcon icon={faEnvelope}  /> Email : shaidurrahman225@gmail.com<br></br>
                                <FontAwesomeIcon icon={faPhone}  /> Phone : +8801928466221<br></br>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default About