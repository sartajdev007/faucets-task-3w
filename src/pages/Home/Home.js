import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import ReCAPTCHA from 'react-google-recaptcha';
import EthTable from './EthTable/EthTable';

import './Home.css'
import TestTable from './TestTable/TestTable';




const Home = () => {
    const [active, setActive] = useState(1)

    function onChange(value) {
        console.log('Captcha value:', value);
    }

    return (
        <div className='home'>
            <div className='notifysection py-2'>
                <div className='notice-container'>
                    <div className='text-white'>
                        <p className='notice-text text-center'>Notice Here</p>
                    </div>
                </div>
            </div>
            <Container className='py-5'>
                <div>
                    <p className='fw-bold color1 heading mb-3'>Request Testnet LINK</p>
                    <p className='w-50 para'>
                        Get testnet LINK for an account on one of the supported blockchain testnets so you can create and test your own oracle and Chainlinked smart contract
                    </p>
                </div>
                <div className='form-container mt-5'>
                    <div className='warning'>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M12.866 3l9.526 16.5a1 1 0 0 1-.866 1.5H2.474a1 1 0 0 1-.866-1.5L11.134 3a1 1 0 0 1 1.732 0zM11 16v2h2v-2h-2zm0-7v5h2V9h-2z"></path></g></svg>
                        <p>Your wallet is connected to <span className='fw-bold'>Ethereum Kovan</span>, so you are requesting <span className='fw-bold'>Ethereum Kovan</span> Link/ETH.</p>
                    </div>
                    <form className='w-50 pt-2'>
                        <div class="mb-3">
                            <label for="" class="form-label" className='color1 fw-bold labeltext'>Wallet Address</label>
                            <input type="text" class="form-control" id="" placeholder="Wallet Address..." />
                        </div>
                        <div class="row g-3 mb-3">
                            <div class="col">
                                <label htmlFor="" className='color1 fw-bold labeltext'>Request Type</label>
                                <input type="text" class="form-control" aria-label="First name" defaultValue='20 Test Link' disabled />
                            </div>
                            <div class="col">
                                <label htmlFor="">{' '}</label>
                                <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" defaultValue='0.5 ETH' disabled />
                            </div>
                        </div>
                        <ReCAPTCHA
                            sitekey={process.env.REACT_APP_SITE_KEY}
                            onChange={onChange}
                        />
                        <button type="submit" className='submitbtn mt-3'>Send Request</button>
                    </form>
                    <div className='mt-4'>
                        <p className='req-text fw-bold'>Request History</p>
                    </div>
                    <div>
                        <button onClick={() => setActive(1)} className={active === 1 ? 'active-btn' : 'trx-btn'}>ETH Transaction History</button>
                        <button onClick={() => setActive(2)} className={active === 2 ? 'active-btn' : 'trx-btn'}>TestLink Transaction History</button>
                    </div>
                    <div className='mt-4'>
                        {active === 1 && <EthTable></EthTable>}
                        {active === 2 && <TestTable></TestTable>}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Home;