import React, { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Sign.css"
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import initialAuth from '../../Firebase/InitializeFirebase';
import { userContext } from '../../Context/Context';
import { useLocation, useNavigate } from "react-router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SignIn = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [loggedInUser, setLoggedInUser] = useContext(userContext)

    const [userData, setUserData] = useState({});
    initialAuth()
    const auth = getAuth();
    const userEmail = useRef("");
    const userPassword = useRef("");
    const handleSignIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, userEmail.current.value, userPassword.current.value)
            .then((userCredential) => {
                // Signed in 
                const { email, displayName } = userCredential.user;
                setUserData({ email, displayName });
                setLoggedInUser({ email, displayName })
                // ...
                toast("signIn successful")
                if (location.state?.from) {
                    navigate(location.state.from);
                  }
            })
            .catch((error) => {
                alert(error.message)
            });
    }

    const handleForgetPassword = () => {
        sendPasswordResetEmail(auth, userEmail.current.value)
            .then(() => {
                alert("Password reset email sent!")
            })
            .catch((error) => {
                alert(error.message)
            });
    }


    return (
        <>
            <div className=" m-auto w-100">

                <form className="form-box m-auto d-flex flex-column justify-content-center w-25 " onSubmit={handleSignIn}>
                    <h5>
                        <p><Link to="/">Home</Link> / <Link to="/sign-in">signIn</Link> </p>
                    </h5>
                    <h3>Sign In</h3>
                    <div className="form-group">
                        <label>Email address</label>
                        <input ref={userEmail} type="email" className="form-control" placeholder="Enter email" />
                    </div>
                    <div className="form-group mb-2">
                        <label>Password</label>
                        <input ref={userPassword} type="password" className="form-control" placeholder="Enter password" />
                    </div>
                    <button className="btn btn-primary btn-block">Sign-In</button>
                    <p onClick={handleForgetPassword} className="forgot-password text-right py-1 text-danger" style={{ cursor: 'pointer', textDecoration: "underLine" }}>Forgot password?</p>
                    <p>New there ? sign up first  <Link to="/sign-up">Sign Up</Link> </p>
                </form>
                <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            </div>
        </>
    );
};

export default SignIn;