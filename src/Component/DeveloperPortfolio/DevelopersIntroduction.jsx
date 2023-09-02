import React, { Component, Fragment } from 'react'
import { Col, Container, Form, Row, Table } from 'react-bootstrap'

export class DevelopersIntroduction extends Component {
    render() {
      return (
        <Fragment>
          <Container fluid={true}>
            <Row>
                <h4>Full Name: Md.Shaidur Rahman</h4>
                <h4>Education: Bsc in Software Engineering</h4>
                <h4>Graduate Status: Completed (2022) </h4>
                <h4>University: Daffodil International University</h4>
                <h4>Completed Course: </h4>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Serial</th>
                      <th>1st Year</th>
                      <th>2nd Year</th>
                      <th>3rd Year</th>
                      <th>4th Year</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Introduction to Software Engineering</td>
                      <td>Digital Electronics & Logic Design</td>
                      <td>Design Pattern</td>
                      <td>Introduction to Machine Learning</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>English I</td>
                      <td>Algorithms Design & Analysis</td>
                      <td>Software Quality Assurance & Testing Lab</td>
                      <td>Business Analysis & Communication</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Art of Living</td>
                      <td>Algorithms Design & Analysis Lab</td>
                      <td>Software Quality Assurance & Testing</td>
                      <td>Software Project Management & Documentation</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Computer Fundamentals</td>
                      <td>Software Requirement Specifications & Analysis</td>
                      <td>Data Communication & Computer Networking Lab</td>
                      <td>Compiler Design</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Computer Fundamentals Lab</td>
                      <td>Object Oriented Concepts</td>
                      <td>Data Communication & Computer Networking</td>
                      <td>Data Warehouse & Data Mining</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Discrete Mathematics</td>
                      <td>Database System</td>
                      <td>Employability Skills 360Â°</td>
                      <td>Bangladesh Studies</td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>Physics I</td>
                      <td>Database System Lab</td>
                      <td>Management Information System</td>
                      <td>Human Computer Interaction</td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>Structured Programming</td>
                      <td>Computer Architecture</td>
                      <td>Software Architecture & Design</td>
                      <td>Final Year Project/ Thesis/ Internship</td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td>Structured Programming Lab</td>
                      <td>Object Oriented Design</td>
                      <td>Software Engineering Web Application Lab</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>Mathematics I</td>
                      <td>Introduction to Robotics</td>
                      <td>Software Engineering Web Application</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>11</td>
                      <td>Software Development Capstone Project</td>
                      <td>Theory of Computing</td>
                      <td>Numerical Analysis</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>12</td>
                      <td>Data Structure Lab</td>
                      <td>Operating System & System Programming</td>
                      <td>Software Engineering Professional Ethics</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>13</td>
                      <td>Data Structure</td>
                      <td>Operating System & System Programming Lab</td>
                      <td>Information System Security</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>14</td>
                      <td>Mathematics II</td>
                      <td>Principles of Accounting, Business & Economics</td>
                      <td>Software Engineering Design Capstone Project</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>15</td>
                      <td>Statistics I</td>
                      <td>System Analysis & Design Capstone Project</td>
                      <td>Artificial Intelligence</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>16</td>
                      <td></td>
                      <td></td>
                      <td>Artificial Intelligence Lab</td>
                      <td></td>
                    </tr>
                  </tbody>
                </Table>
            </Row>
          </Container>
        </Fragment>
      )
    }
}

export default DevelopersIntroduction