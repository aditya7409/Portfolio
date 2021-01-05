import React from 'react'
import  Button from 'react-bootstrap/Button'
import  Nav from 'react-bootstrap/Nav'
import  Navbar from 'react-bootstrap/Navbar'
import  Form from 'react-bootstrap/Form'
import  FormControl from 'react-bootstrap/FormControl'
import photo from './photo.jpg'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NavDropdown from 'react-bootstrap/NavDropdown'
import resumeLogo from './resumeLogo.png'
import Footer from './Footer'

const Achievements = () => {
    return (
        <>
            <Navbar bg="dark" expand="lg">
                <img src={photo} alt="img" id="headerImage" />
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/" className="navElements">Home</Nav.Link>
                        <Nav.Link href="/qualifications" className="navElements">Qualifications</Nav.Link>
                        <NavDropdown title="Technical Skills" id="basic-nav-dropdown">
                            <NavDropdown.Item to="/coreJava" className="navelements">Core Java</NavDropdown.Item>
                            <NavDropdown.Item to="/WebDev" className="navelements">Web Development</NavDropdown.Item>
                            <NavDropdown.Item to="OS" className="navelements">Operating System</NavDropdown.Item>
                            <NavDropdown.Item to="DsAlgo" className="navelements">Data Structures & Algorithms</NavDropdown.Item>
                            <NavDropdown.Item to="Cp" className="navelements">Competitive Programming</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/experience" className="navElements">Experience</Nav.Link>
                        <Nav.Link href="/hobbies" className="navElements">Hobbies</Nav.Link>
                        <Nav.Link href="/achievments" className="navElements">Achievements</Nav.Link>
                        <Nav.Link href="/socials" className="navElements">Socials</Nav.Link>
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
                                        Achievements
                                        </h4>
                                   </Col>
                               </Row>
                               <hr style={{background:"wheat"}}></hr>
                               <Row className="eduList">
                                   <Row>
                                        <Col md={12}>
                                        <h4>
                                        <strong>Competitive Programming</strong> <br />
                                        </h4>
                                        </Col>
                                   </Row>
                                   <Row className="achType">
                                       <Col md={2} >
                                            Codechef <br/>
                                            Ranked 390 among 6500 participants in Codechef September Lunctime 2020 
                                       </Col>
                                       <Col md={2}>
                                           Codeforces <br />
                                           Ranked 847 among 18300 participants in <br/> CodeForces Educational Round 99(2hr Coding Contest) 2020
                                       </Col>
                                       <Col md={2}>
                                           Codechef <br/>
                                           Ranked 501 among 5000 participants in <br/> Coddechef Sepetember Cookoff(2.5hrs Coding Contest) 2020
                                       </Col>
                                       <Col md={2}>
                                           Codechef <br/>
                                           Ranked 469 among 30,000 participants in Codechef July Challenge 2020(3hrs Coding contest) 2020
                                       </Col>
                                   </Row>
                               </Row>
                                <Row>
                                <Col md={12}>
                                    <h4>
                                    <strong>TCS</strong> <br />
                                    </h4>
                                    </Col>
                                </Row>
                                <Row className="tcsAch">
                                <Col md={3}>
                                    Codevita S9 <br />
                                    Ranked 9600 among <br/> 2 lakh 30 thousand participants
                                </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer/>
        </>
    )
}
export default Achievements;