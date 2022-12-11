import React from 'react';
import Modal from 'react-bootstrap/Modal';



const WalletModal = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className='modal'
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Connect Your Wallet
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='row mt-3'>
                    <div className="col modal-img">
                        <img src="https://faucets.netlify.app/static/media/MetaMask.551edf10.svg" alt="" />
                        <h3>MetaMask</h3>
                    </div>
                    <div className="col modal-img">
                        <img src="https://faucets.netlify.app/static/media/WalletConnect.d0b10794.svg" alt="" />
                        <h3>WalletConnect</h3>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );;
};

export default WalletModal;