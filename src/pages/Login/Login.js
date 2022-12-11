import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { HiEye } from "react-icons/hi2"
import { HiEyeSlash } from "react-icons/hi2"
import { FaFacebook, FaGoogle, FaInstagram } from 'react-icons/fa';



const Login = () => {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className='login-page'>
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
                                <FaGoogle className='logo'></FaGoogle>
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