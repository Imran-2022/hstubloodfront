import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {

    return (
        <div className="w-50 m-auto d-flex justify-content-center vh  ">
            
            <Form className="w-50 m-auto">

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email"  type="email" placeholder="Enter email"required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control  type="password" name="password"  placeholder="Password" required/>
                </Form.Group>
                <input className="btn btn-primary mt-3 w-100" type="submit" value="Log In" />
                <div class="w-100 mt-3"><a onClick={()=>alert("forget password is not working right now")} href="/sign-in">Forgot Password?</a></div>

                <div className="mt-3">
                or <Link to="/register">Register</Link>
               </div>
                
            </Form>
        </div>
    );
};

export default Login;