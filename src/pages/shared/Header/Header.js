import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import './Header.css'
import WalletModal from './WalletModal';
import { IoWallet } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = () => {
    const [showModal, setShowModal] = useState(false)


    return (
        <div className='home'>
            <Navbar bg="white" className=' py-3'>
                <Container className='d-flex justify-content-between'>
                    <div>
                        <Navbar.Brand href="/" className='color1 fw-bold brand-name' >Faucets</Navbar.Brand>
                    </div>
                    <div>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Dropdown id="basic-nav-dropdown">
                                    <Dropdown.Toggle className='eth-heading' variant="" id="dropdown-basic">
                                        <img className='eth-logo' src="https://faucets.netlify.app/static/media/ethereum.42dac5dc.svg" height='15px' weight='15px' alt="" />
                                        <span className='d-sm-none d-md-inline'>Ethereum Kovan</span>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className='rounded-0 list'>
                                        <Dropdown.Item className='list-item'>
                                            <img src="https://faucets.netlify.app/static/media/arbitrum.79164059.svg" alt="" />
                                            <p>Arbitrum Rinkeby</p>
                                        </Dropdown.Item>
                                        <Dropdown.Item className='list-item'>
                                            <img src="https://faucets.netlify.app/static/media/avalanche.234db155.svg" alt="" />
                                            <p>Avalanche Fuji</p>
                                        </Dropdown.Item>
                                        <Dropdown.Item className='list-item'>
                                            <img src="https://faucets.netlify.app/static/media/bsc.d8c61230.svg" alt="" />
                                            <p>BNB Chain Testnet</p>
                                        </Dropdown.Item>
                                        <Dropdown.Item className='list-item'>
                                            <img src="https://faucets.netlify.app/static/media/ethereum.42dac5dc.svg" alt="" />
                                            <p>Ethereum Rinkeby</p>
                                        </Dropdown.Item>
                                        <Dropdown.Item className='list-item'>
                                            <img src="https://faucets.netlify.app/static/media/fantom.3f8c71bb.svg" alt="" />
                                            <p>Fantom Testnet</p>
                                        </Dropdown.Item>
                                        <Dropdown.Item className='list-item'>
                                            <img src="https://faucets.netlify.app/static/media/harmony.02c2e3ba.svg" alt="" />
                                            <p>Harmony Testnet</p>
                                        </Dropdown.Item>
                                        <Dropdown.Item className='list-item'>
                                            <img src="https://faucets.netlify.app/static/media/poa.90512ab9.svg" alt="" />
                                            <p>POA Network Sokol</p>
                                        </Dropdown.Item>
                                        <Dropdown.Item className='list-item'>
                                            <img src="https://faucets.netlify.app/static/media/polygon.97ff139c.svg" alt="" />
                                            <p>Polygon Mumbai</p>
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <div className='connect'>
                                    <button className='modalbtn' onClick={() => setShowModal(true)}>
                                        <IoWallet className='wallet'></IoWallet> <span className='d-sm-none d-md-block'>Connect Wallet</span>
                                    </button>
                                </div>
                                <WalletModal
                                    show={showModal}
                                    onHide={() => setShowModal(false)}
                                />
                                <div class="dropdown">
                                    <button className='border-0 rounded-5 ms-0 bg-transparent user-menu' data-bs-toggle="dropdown" aria-expanded="false">
                                        <FaRegUserCircle className='fs-2 text-secondary ms-1 mt-1'></FaRegUserCircle>
                                    </button>
                                    <ul class="dropdown-menu p-2 rounded-0 user-list">
                                        <li><Link to='/login' className='text-decoration-none menu-link'>Log In</Link></li>
                                        <li><Link to='/register' className='text-decoration-none menu-link'>Sign Up</Link></li>
                                        <li><Link to='/faq' className='text-decoration-none menu-link'>FAQ</Link></li>
                                    </ul>
                                </div>

                                {/* <Dropdown className='ms-0'>
                                    <Dropdown.Toggle className='border-0 rounded-5 ms-0 bg-transparent user-menu' id="dropdown-basic">
                                        <FaRegUserCircle className='fs-3 text-secondary ms-0'></FaRegUserCircle>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className='p-2 rounded-0'>
                                        <Dropdown.Item></Dropdown.Item>
                                        <Dropdown.Item></Dropdown.Item>
                                        <Dropdown.Item></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown> */}
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;