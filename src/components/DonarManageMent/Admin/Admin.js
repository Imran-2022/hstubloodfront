import React, { useEffect, useState } from 'react';
import "./Admin.css"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import DataTable from '../DataTable/DataTable';
import AddData from '../AddData/AddData';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AllAdmin from '../AllAdmin/AllAdmin';
const Admin = () => {


    return (
        <>

            <Tabs>
                <div>
                    <div className="Admin-header d-flex flex-column justify-content-center align-items-center">
                        <h1> MANAGING-TEAM 🚀 </h1>
                        <TabList id="myDIV" className="d-flex w-50 pt-5 justify-content-between">
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
                            <AllAdmin/>
                        </TabPanel>
                        <TabPanel>
                            <MakeAdmin />
                        </TabPanel>
                    </div>
                </div>
            </Tabs>
        </>
    );
};

export default Admin;