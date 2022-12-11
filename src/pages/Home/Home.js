import React from 'react';
import { Container } from 'react-bootstrap';
import './Home.css'

const Home = () => {
    return (
        <Container className='pt-5'>
            <div>
                <h1 className='fw-bold color1'>Request Testnet LINK</h1>
                <p className='w-50 pt-2'>
                    Get testnet LINK for an account on one of the supported blockchain testnets so you can create and test your own oracle and Chainlinked smart contract
                </p>
            </div>
            <div className='form-container mt-5'>
                <div className='warning'>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M12.866 3l9.526 16.5a1 1 0 0 1-.866 1.5H2.474a1 1 0 0 1-.866-1.5L11.134 3a1 1 0 0 1 1.732 0zM11 16v2h2v-2h-2zm0-7v5h2V9h-2z"></path></g></svg>
                    <p>Your wallet is connected to <span className='fw-bold'>Ethereum Kovan</span>, so you are requesting <span className='fw-bold'>Ethereum Kovan</span> Link/ETH.</p>
                </div>
                <div className='w-50 pt-2'>
                    <div class="mb-3">
                        <label for="" class="form-label" className='color1 fs-6 fw-bold'>Wallet Address</label>
                        <input type="text" class="form-control" id="" placeholder="Wallet Address..." />
                    </div>
                    <div class="row g-3 mb-3">
                        <div class="col">
                            <label htmlFor="" className='color1 fs-6 fw-bold'>Request Type</label>
                            <input type="text" class="form-control" placeholder="First name" aria-label="First name" />
                        </div>
                        <div class="col">
                            <label htmlFor="">{' '}</label>
                            <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Home;