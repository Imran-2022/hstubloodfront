import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./log.css"
const Register = () => {
   
    return (
        <div className="w-50 m-auto d-flex justify-content-center vh ">
            
            <Form className="w-50 m-auto">
           
            <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter your name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email"  type="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control  type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <input className="btn btn-primary w-100 mt-3" type="submit" value="Register" />
                
                
               <div className="mt-3">
               or <Link to="/log-in">Log In</Link>
               </div>
            </Form>
        </div>
    );
};

export default Register;