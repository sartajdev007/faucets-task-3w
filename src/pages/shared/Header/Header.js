import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import './Header.css'
import Button from 'react-bootstrap/Button';
import WalletModal from './WalletModal';
import { IoWallet } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = () => {
    const [showModal, setShowModal] = useState(false)


    return (
        <Navbar bg="light" expand="lg">
            <Container className='d-flex justify-content-between'>
                <div>
                    <Navbar.Brand href="/" className='color1 fw-bold' >Faucets</Navbar.Brand>
                </div>
                <div>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Dropdown id="basic-nav-dropdown">
                                <Dropdown.Toggle className='border border-1 border-secondary rounded-1 px-3' variant="" id="dropdown-basic">
                                    Ethereum Kovan
                                </Dropdown.Toggle>
                                <Dropdown.Menu className='rounded-0'>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Button className='rounded-1 ms-2 color1 border1 modalbtn px-3' variant='outline' onClick={() => setShowModal(true)}>
                                <IoWallet></IoWallet> Connect Wallet
                            </Button>
                            <WalletModal
                                show={showModal}
                                onHide={() => setShowModal(false)}
                            />
                            <Dropdown>
                                <Dropdown.Toggle className='border-0 rounded-5 ms-2 bg-transparent' id="dropdown-basic">
                                    <FaRegUserCircle className='fs-4 text-secondary'></FaRegUserCircle>
                                </Dropdown.Toggle>

                                <Dropdown.Menu className='p-2 rounded-0'>
                                    <Dropdown.Item><Link to='/login' className='text-decoration-none text-body'>Log In</Link></Dropdown.Item>
                                    <Dropdown.Item><Link to='/register' className='text-decoration-none text-body'>Sign Up</Link></Dropdown.Item>
                                    <Dropdown.Item><Link to='/faq' className='text-decoration-none text-body'>FAQ</Link></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Container>
        </Navbar>
    );
};

export default Header;