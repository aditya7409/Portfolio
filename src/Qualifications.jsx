import React from 'react'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import photo from './photo.jpg'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NavDropdown from 'react-bootstrap/NavDropdown'
import resumeLogo from './resumeLogo.png'
import Footer from './Footer'


const Qualifications = () => {
    return (
        <>
               <Navbar bg="dark" expand="lg">
               <img src={photo} alt="img" id="headerImage" />
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                   <Nav className="mr-auto">
                       <Nav.Link  href="/" className="navElements">Home</Nav.Link>
                       <Nav.Link  href="/qualifications" className="navElements">Qualifications</Nav.Link>
                       <NavDropdown title="Technical Skills" id="basic-nav-dropdown">
                           <NavDropdown.Item to="/coreJava" className="navelements">Core Java</NavDropdown.Item>
                           <NavDropdown.Item to="/WebDev" className="navelements">Web Development</NavDropdown.Item>
                           <NavDropdown.Item to="OS" className="navelements">Operating System</NavDropdown.Item>
                           <NavDropdown.Item to="DsAlgo" className="navelements">Data Structures & Algorithms</NavDropdown.Item>
                           <NavDropdown.Item to="Cp" className="navelements">Competitive Programming</NavDropdown.Item>
                       </NavDropdown>
                       <Nav.Link  href="/experience" className="navElements">Experience</Nav.Link>
                       <Nav.Link  href="/hobbies" className="navElements">Hobbies</Nav.Link>
                       <Nav.Link  href="/achievments" className="navElements">Achievements</Nav.Link>
                       <Nav.Link  href="/socials" className="navElements">Socials</Nav.Link>
                   </Nav>
                   <Form inline>
                       <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                       <Button variant="outline-success">Search</Button>
                   </Form>
               </Navbar.Collapse>
           </Navbar>
           <br />
           <div className="sideNav">
               <Container fluid>
                   <Row>
                       <Col md={2} id="sidebar">
                           <p id="sideContent">
                               Hii,I am Aditya Sinha currently pursuing Bachelor of Technology
                               in Information Technology from <a style={{ color: "red" }} href="http://www.aecwb.edu.in/">Asansol Engineering College</a>
                               .I love Competitive Programming and Web Development.Have a look at My resume
                               <br></br>
                               <img src={resumeLogo} id="resume" alt="resume"></img>
                               <br/>
                <Button style={{marginTop:"2vh",marginLeft:"4vw"}} variant="outline-danger" href="https://drive.google.com/file/d/1GHtDJvcJQY2LzNN8cADMoZ22PiQHE3-a/view">resume</Button>{' '}
                           </p>
                       </Col>
                       <Col md={9} id="rightsideBar">
                           <div className="qualificationsList">
                               <Row>
                                   <Col md={12}>
                                       <h4 style={{ color: "wheat" }}>
                                           Education
                                   </h4>
                                   </Col>
                               </Row>
                               <hr style={{background:"wheat"}}></hr>
                               <Row className="eduList">
                                   <Col md={3}>
                                   <h4>
                                   <strong>Bachelor of Technology</strong> <br />
                                   </h4>
                                   </Col>
                                   <Col md={2}>

                                   </Col>
                                   <Row>
                                       <Col md={6}>
                                           Information Technology <br />
                                           Asansol Engineering College,Asansol,IND<br/>
                                           CGPA:7.91(upto 4th sem)
                                       </Col>
                                       <Col md={6}>
                                           
                                           Batch<br />
                                           2018-2022
                                       </Col>
                                   </Row>
                               </Row>
                               <Row className="eduList">
                                   <Col md={3}>
                                   <h4>
                                   <strong>AISSCE</strong><br />
                                   </h4>
                                   </Col>
                                   <Col md={2}>
                                       
                                   </Col>
                                   <Row>
                                       <Col md={6}>
                                           Science (PCM) <br />
                                           S.K.S Public School<br/>
                                           Raniganj,IND
                                           Aggregate :78%
                                       </Col>
                                       <Col md={6}>
                                           Batch<br />
                                           2016-2018   
                                       </Col>
                                   </Row>
                               </Row>
                               <Row className="eduList">
                                   <Col md={3}>
                                   <h4>
                                   <strong>AISSE</strong> <br />
                                   </h4>
                                   </Col>
                                   <Col md={2}>
                                       
                                   </Col>
                                   <Row>
                                       <Col md={6}>
                                           S.K.S Public School
                                           Raniganj,IND<br/>
                                           CGPA: 9
                                       </Col>
                                       <Col md={6}>
                                       Passout<br />
                                       2016
                                       </Col>
                                   </Row>
                               </Row>
                           </div>
                       </Col>
                   </Row>
               </Container>
            <Footer />
           </div>
        </>
    )
}
export default Qualifications;