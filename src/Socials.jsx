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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons' 
import { Icon } from '@iconify/react';
import codeforcesIcon from '@iconify-icons/simple-icons/codeforces';
import codechefIcon from '@iconify-icons/simple-icons/codechef';
import Footer from './Footer'


const Socials = () => {
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
                            <div className="socialIDs" >
                                FaceBook  :<a href="https://www.facebook.com/aaditya.sinha.313" style={{marginLeft:"10px"}}><FontAwesomeIcon icon={faFacebookF} size="2x" style={{color:"blue",fontSize:"3rem"}}/></a>
                                <br/>
                                <br/>
                                GitHub  :<a href="https://github.com/aditya7409" style={{marginLeft:"10px"}}><FontAwesomeIcon icon={faGithub} size="2x" style={{color:"white",fontSize:"3rem"}}/></a>
                                <br/>
                                <br/>
                                Linkedin  :<a href="https://www.linkedin.com/in/aditya-sinha-0b21a61a0/?challengeId=AQE80kIrUmGc6QAAAXV5Tce2CoX4jPPTKF1QoBZj6XkxXR9De5d3_JGSDH6gB0ZiQ5NEg3BtbCXX3f2ZtFmugFXX8JU-EG1sLA&submissionId=3eeb9603-33c2-4216-1041-f52c21873535&originalSubdomain=in" style={{marginLeft:"10px"}}><FontAwesomeIcon icon={faLinkedin} size="2x" style={{color:"skyblue",fontSize:"3rem"}}/></a>
                                <br/>
                                <br/>
                                Codechef  :<a href="https://www.codechef.com/users/aditya7409" style={{marginLeft:"10px"}}><Icon icon={codechefIcon} size="2x" style={{color:"white",fontSize:"3rem"}} /></a>
                                <br/>
                                <br/>
                                Codeforces  :<a href="https://codeforces.com/profile/aditya7409" style={{marginLeft:"10px"}}><Icon icon={codeforcesIcon} size="2x" style={{color:"red",fontSize:"3rem"}} /></a>
                                <br/>
                                <br/>
                            </div>
                        </div>    
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer/>
        </>
    )
}
export default Socials;