import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const d=new Date();
const year=d.getFullYear();
const Footer = () => {

    return(
        <>
            <div className="footer">
            <Container fluid>
                <Row>
                    <Col md={12} id="footerId">
                        Ⓒ Developed By Aditya Sinha  {year}
                    </Col>
                </Row>
            </Container>
                
            </div>
        </>
    )
}
export default Footer;