import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./DataTable.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const DataTable = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        async function fetchData() {
            const res = await fetch("http://localhost:8080/request");
            const record = await res.json();
            setData(record)
        }
        fetchData();
    }, [])

    const handleRequestStatus = (e) => {
        const url = `http://localhost:8080/request/${e}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
            .then(response => response.json())
            .then(result => {
                if (result.modifiedCount > 0) {
                    toast(`STATUS UPDATED`)
                }
            })
    }

    return (
        <div className='pb-5'>
            <div>
                <p className="pt-3">the number of <span className="text-danger">TABLE DATA</span> : {data.length}</p>
                <table>
                    <thead>
                        <tr>
                            <th>#no</th>
                            <th>Patient</th>
                            <th>Contact</th>
                            <th>bloodGroup</th>
                            <th>status</th>
                        </tr>
                    </thead>

                    {
                        data.map((data, i) => {
                            const { you, patient, contact, reason, bloodGroup, status, _id } = data
                            return (
                                <tbody key={i}>
                                    <tr>
                                        <td>{i + 1}</td>
                                        <td>{patient}</td>
                                        <td>{contact}</td>
                                        <td>{bloodGroup}</td>
                                        <td>
                                            <select className='w-100' onChange={(e) => handleRequestStatus(_id)}>
                                                <option hidden value={status}>{status}</option>

                                                {
                                                    status === 'done' ? <option hidden value="done">done</option> : <option value="done">done</option>
                                                }
                                            </select>
                                            <ToastContainer
                                                position="top-center"
                                                autoClose={5000}
                                                hideProgressBar={false}
                                                newestOnTop={false}
                                                closeOnClick
                                                rtl={false}
                                                pauseOnFocusLoss
                                                draggable
                                                pauseOnHover
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            )
                        }).reverse()
                    }
                </table>
            </div>
        </div>
    );
};

export default DataTable;