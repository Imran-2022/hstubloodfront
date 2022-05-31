import React, { useContext, useEffect, useState } from "react";
// import JsonData from "./MOCK_DATA.json";
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs';
import JsonData from "./FakeData.json";
import ReactPaginate from "react-paginate";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Donors.css"
import { userContext } from "../../Context/Context";

const Donors = () => {

    const [donors, setDonors] = useState([]);
    const [filterblood, setFilterBlood] = useState([])
    // data from backend 
    useEffect(() => {
        async function fetchData() {
            const res = await fetch("https://hstu-blood-share.herokuapp.com/donors");
            const record = await res.json();
            // setDonors(record.reverse())

            // filter only eligible donar -->

            const filterValidDonars = record.filter((x) => {
                // lastDonateDate
                if (x.lastDonateDate) {
                    const date1 = new Date(x.lastDonateDate);
                    const date2 = new Date();
                    const diffTime = Math.abs(date2 - date1);
                    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                    if (diffDays > 90) {
                        return x;
                    }
                }
                else {
                    return x;
                }
            })
            setDonors(filterValidDonars)
            setFilterBlood(filterValidDonars)

            // setDonors(record)
            // setFilterBlood(record)
        }
        fetchData();
    }, [])

    // const allCatagories =["A+","A-","B+","B-","AB+","AB-","O+","O-","ALL"];

    const [pageNumber, setPageNumber] = useState(0);
    const [group, setGroup] = useState("ALL")
    const filterImage = (fimage) => {
        setPageNumber(0)
        setFilterBlood(donors)
        setGroup(fimage)
        if (fimage === "ALL") {
            setFilterBlood(donors)
        }
        else {
            const filterImages = donors.filter((x) => {
                // lastDonateDate
                if (x.lastDonateDate) {
                    const date1 = new Date(x.lastDonateDate);
                    const date2 = new Date();
                    const diffTime = Math.abs(date2 - date1);
                    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                    if (diffDays > 90) {
                        return x.bloodGroup === fimage;
                    }
                }
                else {
                    return x.bloodGroup === fimage;
                }
            })
            setFilterBlood(filterImages)
        }
    }

    const usersPerPage = 6;
    const pagesVisited = pageNumber * usersPerPage;

    // copy to clipboard :
    const notify = (num) => {
        navigator.clipboard.writeText(num.innerText);
        toast(`copied to clipboard`)
    };
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const [validManage, setValidManage] = useState(false)
    // const [admin, setAdmin] = useState([])
    useEffect(() => {
        setValidManage(false)
        fetch('https://hstu-blood-share.herokuapp.com/managingTeam')
            .then(response => response.json())
            .then(data => {
                for (var i = 0; i < data.length; ++i) {
                    // data[i].email
                    console.log(data[i].email)
                    if (data[i].email == loggedInUser.email) {
                        setValidManage(true)
                        console.log(data[i].email, "included", loggedInUser.email)
                    }
                }
            });
    }, [loggedInUser])
    console.log(validManage)
    const displayUsers = filterblood
        .slice(pagesVisited, pagesVisited + usersPerPage)
        .map((user) => {
            const { Name, age, bloodGroup, department, email, gender, label, mobile, semester, _id, lastDonateDate } = user
            return (
                <div className="user" onClick={(e) => notify(e.target)} style={{ cursor: 'pointer' }}>
                    {
                        user.gender === 'male' ? <img className="user-img m-3" src="https://monstar-lab.com/global/wp-content/uploads/sites/11/2019/04/male-placeholder-image.jpeg" alt="" /> :
                            <img className="user-img m-3" src="https://images.squarespace-cdn.com/content/v1/5fcb3cc52842004a669af981/1645140221610-471VVD9CDBEI8PNO6A5Q/avatar-F-White.jpg" alt="" />
                    }
                    <div>
                        <p>Name : {Name}</p>
                        {
                            validManage && <p>Phone Number : <span style={{ padding: "5px", background: "#ddd" }} >{mobile}</span></p>
                        }
                        
                        <ToastContainer
                            position="bottom-right"
                            autoClose={1000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                        />
                        <p>age : {age}</p>
                        <p>blood-Group : {bloodGroup}</p>

                        {
                            validManage &&<p>Depertment : {department}</p>
                        }
                        {
                            validManage &&<p>Label : {label} & Semester : {semester}</p>
                        }
                        {
                            <p>lastDonateDate : {lastDonateDate ? lastDonateDate : "no"}</p>
                        }
                        
                    </div>
                </div>
            );
        });

    const pageCount = Math.ceil(donors.length / usersPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    const handlePagination = () => {
        window.scrollTo(0, 0);
    }
    return (
        <>
            <div className="catagories py-5 ms-5">
                <label for="blood">Choose a BLOOD GROUP : &nbsp;</label>
                <select id="blood" name="bloodlist" onChange={(e) => filterImage(e.target.value)}>
                    <option selected="selected" value="ALL">ALL</option>
                    <option value="A+">A+</option>
                    <option value="B+">B+</option>
                    <option value="AB+">AB+</option>
                    <option value="O+">O+</option>
                    <option value="A-">A-</option>
                    <option value="B-">B-</option>
                    <option value="AB-">AB-</option>
                    <option value="O-">O-</option>
                </select>
                &nbsp; available donar for {group} : {filterblood.length}
            </div>
            <div className="App container py-5">
                {displayUsers}
            </div>
            <div className="App-pagination" onClick={() => handlePagination()}>
                {
                    filterblood.length > 6 && <ReactPaginate
                        previousLabel={<BsFillArrowLeftCircleFill />}
                        nextLabel={<BsFillArrowRightCircleFill />}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={"paginationBttns"}
                        previousLinkClassName={"previousBttn"}
                        nextLinkClassName={"nextBttn"}
                        disabledClassName={"paginationDisabled"}
                        activeClassName={"paginationActive"}
                    />
                }
            </div>
        </>
    );
};

export default Donors;
