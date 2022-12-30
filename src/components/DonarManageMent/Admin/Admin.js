import React, { useContext, useEffect, useState } from 'react';
import "./Admin.css"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import DataTable from '../DataTable/DataTable';
import AddData from '../AddData/AddData';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AllAdmin from '../AllAdmin/AllAdmin';
import { userContext } from '../../../Context/Context';
import { Button, Spinner } from 'react-bootstrap';
const Admin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const [validManage, setValidManage] = useState(false)
    // const [admin, setAdmin] = useState([])
    useEffect(() => {
        fetch('https://hstu-blood-share-backend.onrender.com/managingTeam')
            .then(response => response.json())
            .then(data => {
                for (var i = 0; i < data.length; ++i) {
                    if (data[i].email == loggedInUser.email) {
                        setValidManage(true)
                    }
                }
            });
    }, [loggedInUser])

    return (
        <>
            {
                validManage ? <Tabs>
                    <div>
                        <div className="Admin-header d-flex flex-column justify-content-center align-items-center">
                            <h1> MANAGING-TEAM 🚀 </h1>
                            <TabList id="myDIV" className="d-flex w-50 pt-5 justify-content-between flex-wrap gap-3">
                                <Tab className="btn btn-outline-danger text-light active">ALL BLOOD REQUEST</Tab>
                                <Tab className="btn btn-outline-danger text-light ">MANAGEMENT TEAM</Tab>
                                <Tab className="btn btn-outline-danger text-light">MAKE A PART</Tab>
                            </TabList>
                        </div>
                        <div className="container">
                            <TabPanel>
                                <DataTable />
                            </TabPanel>
                            <TabPanel>
                                <AllAdmin />
                            </TabPanel>
                            <TabPanel>
                                <MakeAdmin />
                            </TabPanel>
                        </div>
                    </div>
                </Tabs> : <div className="loader">
                    <Button variant="primary" disabled>
                        <Spinner
                            as="span"
                            animation="grow"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />
                        Loading...
                    </Button>
                </div>
            }
        </>
    );
};

export default Admin;