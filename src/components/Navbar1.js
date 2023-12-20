import React from 'react'
import logo from "../img/Logo.png";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navbar1 = () => {
    return (
        <>
            <div className="container container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col col-md-4 col-lg-4 col-sm-6">
                            <img src={logo} alt="logo" className='img img-responsive' />
                        </div>

                        <div className="col col-md-8 col-lg-8 col-sm-6 mt-3">

                            <Navbar expand="lg" className="bg-body-tertiary bg-black">
                                <Container fluid>
                                    {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
                                    <Navbar.Toggle aria-controls="navbarScroll" />
                                    <Navbar.Collapse id="navbarScroll">
                                        <Nav
                                            className="me-auto my-2 my-lg-0"
                                            style={{ maxHeight: '100px' }}
                                            navbarScroll
                                        >
                                            <Nav.Link href="#action1" style={{color: "white", marginLeft: '3rem'}}>Web3Makr</Nav.Link>
                                            <Nav.Link href="#action2" style={{color: "white", marginLeft: '3rem'}}>White Paper</Nav.Link>
                                            <Nav.Link href="#action2" style={{color: "white", marginLeft: '3rem'}}>Services</Nav.Link>
                                            <Nav.Link href="#action2" style={{color: "white", marginLeft: '3rem'}}>Tool</Nav.Link>
                                            <Nav.Link href="#action2" style={{color: "white", marginLeft: '3rem'}}>Contact US</Nav.Link>
                                            <Button variant="outline-success" style={{color: "white", marginLeft: '3rem'}}>Start for free</Button>
                                        </Nav>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar1
