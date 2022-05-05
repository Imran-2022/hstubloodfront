import React, { useEffect, useState } from "react";
// import JsonData from "./MOCK_DATA.json";
import JsonData from "./FakeData.json";
import ReactPaginate from "react-paginate";
import "./Donors.css"
const Donors = ({setLen} ) => {
    const [users, setUsers] = useState(JsonData.slice(0, 200));
    const [filterblood,setFilterBlood]=useState(users)
    const allCatagories =["A+","A-","B+","B-","AB+","AB-","O+","O-","ALL"];
    const [pageNumber, setPageNumber] = useState(0);
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/photos')
    //         .then(response => response.json())
    //         .then(data => {
    //             setUsers(data.slice(0, 200))
    //         })
    // }, [])
    useEffect(() => {
        setLen(users.length);
    },[users.length])
    const [group,setGroup]=useState("ALL")
    const filterImage=(fimage)=>{
        setFilterBlood(users)
        console.log("fimage",fimage);
        setGroup(fimage)
        if(fimage==="ALL")
        {
            setFilterBlood(users)
        }
        else{
            const filterImages = users.filter((x)=>{
                
                return x.blood_Group===fimage;
        })
        setFilterBlood(filterImages)

        }
    }
    console.log(filterblood)
    const usersPerPage = 6;
    const pagesVisited = pageNumber * usersPerPage;

    const displayUsers = filterblood
        .slice(pagesVisited, pagesVisited + usersPerPage)
        .map((user) => {
            return (
                <div className="user">
                    {
                        user.gender==='male' ? <img className="user-img m-3" src="https://monstar-lab.com/global/wp-content/uploads/sites/11/2019/04/male-placeholder-image.jpeg" alt="" /> :
                        <img className="user-img m-3" src="https://images.squarespace-cdn.com/content/v1/5fcb3cc52842004a669af981/1645140221610-471VVD9CDBEI8PNO6A5Q/avatar-F-White.jpg" alt="" />
                    }
                    <div>
                    <p>Name : {user.name}</p>
                    <p>Phone Number : {user.phone_Number}</p>
                    <p>age : {user.age}</p>
                    <p>blood-Group : {user.blood_Group}</p>
                    <p>Depertment : {user.Depertment}</p>
                    <p>Label : {user.label} & Semester : {user.Semester}</p>
                    </div>
                </div>
            );
        });

    const pageCount = Math.ceil(users.length / usersPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <>
            <div className="catagories py-5 ms-5">
                <label for="blood">Choose a BLOOD GROUP : &nbsp;</label>
                <select id="blood" name="bloodlist" onChange={(e)=>filterImage(e.target.value)}>
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
            <div className="App-pagination">
               {
                   filterblood.length>6 &&  <ReactPaginate
                   previousLabel={"Previous"}
                   nextLabel={"Next"}
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
