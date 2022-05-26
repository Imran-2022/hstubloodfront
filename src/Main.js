import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Donate from './components/Donate/Donate';
import Donors from './components/Donors/Donors';
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import JsonData from "./components/Donors/FakeData.json";
import SignIn from './components/Login/SignIn';
import SignUp from './components/Login/SignUp';
import Navbar from "../src/components/Navs/Navbar/Navbar"
import Sidebar from './components/Navs/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import OurTeam from './components/OurTeam/OurTeam';
import Contact from './components/Contact/Contact';
import UserProfile from './components/UserProfile/UserProfile';
import Admin from './components/DonarManageMent/Admin/Admin';
import Request from './components/Request/Request';
import PrivateRoute from './PrivateRoute';
const Main = () => {
  const [len, setLen] = useState(0);
  const [users, setUsers] = useState(JsonData.slice(0, 200));
  useEffect(() => {
    setLen(users.length);
  }, [users.length])

  const [isopen, setisopen] = useState(false)
  const toggle = () => {
    setisopen(!isopen)
  }


  // scroll to top 

  return (
    <>
      {/* <Navigation len={len}/> */}
      <Navbar toggle={toggle} />
      <Sidebar isopen={isopen} toggle={toggle} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NoMatch />} />
        <Route path="/donors" element={<Donors />} />
        {/* <Route path="/donate" element={<Donate />} /> */}
        <Route path="/donate" element={<PrivateRoute><Donate /></PrivateRoute>} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/donors-request" element={<Request />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/managing-team" element={<Admin />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Main;