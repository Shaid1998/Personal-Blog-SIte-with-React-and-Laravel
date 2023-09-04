import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BaseUrl from '../../BaseUrl/BaseUrl';
import RestClient from '../../BaseUrl/RestClient';

class Footer extends Component {
    constructor(){
        super();
        this.state={
          FooterD:[]
        }
      }
      componentDidMount(){
        RestClient.GetRequest(BaseUrl.FooterData).then(result=>{
          this.setState({FooterD:result});
        }).catch(error=>{
          this.setState({address:'???',gmail:'???',phone:'???',copyright:'???'})
        })
      }
    render() {
        const MyList = this.state.FooterD;
        const MyView = MyList.map(MyList=>{
            return <Row>
                        <Col lg={3} md={3} sm={3}>
                            <h1 className='footer-menu-title'>ADDRESS</h1>
                            <h4 className='footer-text'>{MyList.address}</h4>
                        </Col>
                        <Col lg={3} md={3} sm={3}>
                            <h1 className='footer-menu-title'>ABOUT</h1>
                            <a className='footer-link' href='/about'>About Us</a><br></br>
                            <a className='footer-link' href='/portfolio'>About Developer</a>
                        </Col>
                        <Col lg={3} md={3} sm={3}>
                            <h1 className='footer-menu-title'>CONTACT US</h1>
                            <h4 className='footer-text'>Gmail: {MyList.gmail}</h4>
                            <h4 className='footer-text'>Phone: {MyList.phone}</h4>
                        </Col>
                        <Col lg={3} md={3} sm={3}>
                            <h1 className='footer-menu-title'>LANGUAGE</h1>
                            Chose Your Language <br></br>
                            <div id='google_translate_element'></div>
                        </Col>
                    </Row>
                })
        const MyCopyRight = MyList.map(MyList=>{
            return <Row>
                        <h6 className="text-white">{MyList.copyright}</h6>
                    </Row>
                })
        return (
            <Fragment>
                <div>
                <Container className='footerback m-0 mt-5 pt-3 shadow-sm' fluid={true}>
                    {MyView}
                </Container>
                <Container fluid={true} className="text-center m-0 pt-3 pb-1 bg-dark">
                    <Container className='copyright'>
                        {MyCopyRight}
                    </Container>
                </Container> 
                </div>
            </Fragment>
        )
    }
}

export default Footer