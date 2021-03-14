import React from 'react'
import './Register.scss'
import facebook from '../../assets/facebook.svg'
import google from '../../assets/google.svg'
import linkedin from '../../assets/linkedin.svg'

const { useState } = React

const Register = () => {

    const [changeType, setchangeType] = useState('Individual')

    return (
        <div className="col-md-12">
            <div className="row">
                <div className="col-md-12">
                    <h4 className="text-center pt-2 pb-2">Create an Account</h4>
                </div>
                <div className="col-md-12 text-center">
                    <div className="row">
                        <div className="col-md-4">
                            <button className={`btn btn-block font-weight-bold ${changeType === 'Individual' ? 'btn-warning' : ''} `} onClick={() => {
                                setchangeType('Individual')
                            }}>Individual</button>
                        </div>
                        <div className="col-md-4">
                            <button className={`btn btn-block font-weight-bold ${changeType === 'Corporate' ? 'btn-primary' : ''} `} onClick={() => {
                                setchangeType('Corporate')
                            }} >Corporate</button>
                        </div>
                        <div className="col-md-4">
                            <button className={`btn btn-block font-weight-bold ${changeType === 'Educator' ? 'btn-danger' : ''} `} onClick={() => {
                                setchangeType('Educator')
                            }} >Educator</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 text-center">
                    <img src={facebook} alt="facebook" className="social-icon" />
                    <img src={google} alt="google" className="social-icon" />
                    <img src={linkedin} alt="linkedin" className="social-icon" />
                </div>
                <div className="col-md-12 text-center">
                    <a className="email-link" href="/">Or use your Email instead</a>
                </div>
                <div className="col-md-4 mx-auto">
                    <form>
                        <div className="form-group">
                            <label htmlFor="name" className="font-weight-bold">Name</label>
                            <input type="text" className="form-control" id="name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="font-weight-bold">Email</label>
                            <input type="email" className="form-control" id="email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="username" className="font-weight-bold">Username</label>
                            <input type="text" className="form-control" id="username" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className="font-weight-bold">Password</label>
                            <input type="password" className="form-control" id="password" />
                        </div>
                        <div className="form-group">
                            <p className="small">Make sure it’s <span className={`${changeType === 'Individual' ? 'text-warning' : changeType === 'Corporate' ? 'text-primary' : 'text-danger'}`}>at least 15 characters</span> OR at least 8 characters including a number and a lowercase letter. <a href="/">Learn More</a></p>
                        </div>
                    </form>

                </div>

                <div className="col-md-12 mx-auto">
                    <div className="row">
                        <div className="col-md-4 mx-auto">
                            <button className={`btn btn-block ${changeType === 'Individual' ? 'btn-warning' : changeType === 'Corporate' ? 'btn-primary' : 'btn-danger'}`} >Create Account!</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 mx-auto">
                    <div className="row">
                        <div className="col-md-4 mx-auto text-center pt-2 small">
                            <a href="/">Already a user? Sign In</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 mx-auto">
                    <div className="row">
                        <div className="col-md-4 mx-auto pt-2 small">
                            By creating an account, you agree to the <a href="/">Terms of Service</a>. For more
                                information about GitHub’s privacy practices, see the <a href="/">UDEN Privacy
                                Statement</a>. We’ll occasionally send you account-related emails.
                            </div>
                    </div>
                </div>

            </div>
        </div>
    )
}


export default Register;
