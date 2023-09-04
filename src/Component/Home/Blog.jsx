import React, { Component, Fragment } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import BaseUrl from '../../BaseUrl/BaseUrl';
import RestClient from '../../BaseUrl/RestClient';

class Blog extends Component {
    constructor(){
        super();
        this.state={
          BlogData:[]
        }
      }
      componentDidMount(){
        RestClient.GetRequest(BaseUrl.AllBlog).then(result=>{
          this.setState({BlogData:result});
        }).catch(error=>{
          this.setState({short_title:'???',short_description:'???'})
        })
      }
    render() { 
        const MyList = this.state.BlogData;
        const MyView = MyList.map(MyList=>{
            return <Col lg={3} md={3} sm={4}>
                        <Card className='Card'>
                            <Card.Img className='BlogImg'  variant="top" src={MyList.image} />
                            <Card.Body>
                                <Card.Title className='BlogTitle'>{MyList.short_title}</Card.Title>
                                <Card.Text className='BlogDescription'>{MyList.short_description}</Card.Text>
                                <Button className='BlogButton' href='/viewblog' variant="primary">read more</Button>
                            </Card.Body>
                        </Card>
                    </Col>
        })
        return (
            <Fragment> 
                <Container>
                    <Row>
                        {MyView}
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default Blog