import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { HiEye } from "react-icons/hi2"
import { HiEyeSlash } from "react-icons/hi2"
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';



const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const clientId = '192551751924-n548lf747lic0q13vcj27olnb8vi4j8m.apps.googleusercontent.com'


    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clientId: clientId,
                scope: ''
            });
        };
        gapi.load('client:auth2', initClient);
    });

    const onSuccess = (res) => {
        console.log('success:', res);
    };
    const onFailure = (err) => {
        console.log('failed:', err);
    };

    return (
        <div className='login-page home'>
            <div className="login-container">
                <div className="login-form">
                    <div className="login-title">
                        <h2>Login</h2>
                    </div>
                    <form>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name='email' placeholder='Enter Your Email' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name='password'
                                placeholder='Enter Your Password'
                            />
                            <span onClick={() => setShowPassword(!showPassword)}>{showPassword ? <HiEye></HiEye> : <HiEyeSlash></HiEyeSlash>}</span>
                        </div>
                        <div className="form-group">
                            <button type="submit">login</button>
                        </div>
                    </form>
                    <div className='login-footer'>
                        <p>Don't have an account? <Link to='/register' className='text-decoration-none link-btn'>Signup</Link></p>
                        <div className='social'>
                            <p>Or</p>
                            <div className="logos">
                                <GoogleLogin
                                    clientId={clientId}
                                    buttonText="Sign in with Google"
                                    onSuccess={onSuccess}
                                    onFailure={onFailure}
                                    cookiePolicy={'single_host_origin'}
                                    isSignedIn={true}
                                />
                                <FaFacebook className='logo'></FaFacebook>
                                <FaInstagram className='logo'></FaInstagram>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;