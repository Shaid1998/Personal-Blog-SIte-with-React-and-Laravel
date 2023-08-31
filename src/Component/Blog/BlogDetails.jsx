import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

class BlogDetails extends Component {
  render() {
    return (
      <Fragment>
        <Container className='FooterPosition' fluid={true}>
            <Row>
                <div>
                  <h1 className='BlogDetailsTitle'>Computer Virus</h1>
                  <p className='BlogDetails'>
                    A computer virus is a type of malware that attaches to another program (like a document), which can replicate and spread after a person first runs it on their system. For instance, you could receive an email with a malicious attachment, open the file unknowingly, and then the computer virus runs on your computer. Viruses are harmful and can destroy data, slow down system resources, and log keystrokes.
                    <br></br><br></br>
                    Cybercriminals aren’t creating new viruses all the time, instead they focus their efforts on more sophisticated and lucrative threats. When people talk about “getting a virus” on their computer, they usually mean some form of malware—it could be a virus, computer worm, Trojan, ransomware or some other harmful thing. Viruses and malware continue to evolve, and often cybercriminals use the type that gives them the best return at that particular time. 
                    <br></br><br></br>
                    “When people talk about “getting a virus” on their computer, they usually mean some form of malware—it could be a virus, computer worm, Trojan, ransomware or some other harmful thing.”
                  </p>
                </div>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default BlogDetails