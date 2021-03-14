import React from 'react'
import './PostRegister.scss'
import { Dropdown, Button } from 'react-bootstrap'

const days = Array.from(new Array(31), (x, i) => i + 1);
const months = Array.from(new Array(12), (x, i) => i + 1);
const years = Array.from(new Array(30), (x, i) => i + 1980).reverse();
const cities = ['Bengaluru', 'Hyderabad', 'Kolkata', 'Gurgaon', 'Pune', 'Mumbai', 'Chennai'];
const states = ['Karnataka', 'Telengana', 'West Bengal', 'Delhi/NCR', 'Maharashtra'];

const PostRegister = () => {
    return (
        <div className="col-md-12">
            <div className="row pb-4">
                <div className="col-md-6 mx-auto">
                    <h4 className="text-center h2 pt-2 pb-2">Welcome to UDEN, Rohit !</h4>
                    <p className="text-center">Congratulations! You have registered to a platform of great opportunities. At UDEN we help you grow in your endavours. Please answer some of the questions about yourself to help us know you better.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <div className="row pb-4">
                        <div className="col-md-12 font-weight-bold pb-2">
                            Identity
                        </div>
                        <div className="col-md-4">
                            <Button className="btn btn-block" variant="light">Individual</Button>
                        </div>
                        <div className="col-md-4">
                            <Button className="btn btn-block" variant="light">Organization</Button>
                        </div>
                    </div>
                    <div className="row pb-4">
                        <div className="col-md-6 font-weight-bold pb-2">
                            Date of Birth
                        </div>
                        <div className="col-md-6 font-weight-bold pb-2">
                            Gender
                        </div>
                        <div className="col-md-2">
                            <Dropdown >
                                <Dropdown.Toggle className="btn btn-block" variant="light" id="dropdown-basic">
                                    Day
                                    </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {days.map((day) => {
                                        return <Dropdown.Item value={day}>{day}</Dropdown.Item>
                                    })}
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className="col-md-2">
                            <Dropdown >
                                <Dropdown.Toggle className="btn btn-block" variant="light" id="dropdown-basic">
                                    Month
                                    </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {months.map((month) => {
                                        return <Dropdown.Item value={month}>{month}</Dropdown.Item>
                                    })}
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className="col-md-2">
                            <Dropdown >
                                <Dropdown.Toggle className="btn btn-block" variant="light" id="dropdown-basic">
                                    Year
                                    </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {years.map((year) => {
                                        return <Dropdown.Item value={year}>{year}</Dropdown.Item>
                                    })}
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className="col-md-2">
                            <Button className="btn btn-block" variant="light">Male</Button>
                        </div>
                        <div className="col-md-2">
                            <Button className="btn btn-block" variant="light">Female</Button>
                        </div>
                        <div className="col-md-2">
                            <Button className="btn btn-block" variant="light">Others</Button>
                        </div>
                    </div>
                    <div className="row pb-4">
                        <div className="col-md-6 font-weight-bold pb-2">
                            City
                        </div>
                        <div className="col-md-6 font-weight-bold pb-2">
                            State
                        </div>
                        <div className="col-md-6">
                            <Dropdown >
                                <Dropdown.Toggle className="btn btn-block" variant="light" id="dropdown-basic">
                                    City
                                    </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {cities.map((city) => {
                                        return <Dropdown.Item value={city}>{city}</Dropdown.Item>
                                    })}
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className="col-md-6">
                            <Dropdown >
                                <Dropdown.Toggle className="btn btn-block" variant="light" id="dropdown-basic">
                                    State
                                    </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {states.map((state) => {
                                        return <Dropdown.Item value={state}>{state}</Dropdown.Item>
                                    })}
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default PostRegister;
