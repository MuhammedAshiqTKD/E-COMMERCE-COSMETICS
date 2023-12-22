import React, { useEffect, useState } from 'react'
import './AdminHome.css'
import maclogo from './maclogo.png'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { FiTrash } from "react-icons/fi";
import { FiEdit2 } from "react-icons/fi";

const AdminHome = () => {











    
    const navigate = useNavigate()
    const [msg, setMsg] = useState("")
    const [count, setCount] = useState(0)
    const value = JSON.parse(localStorage.getItem('admintoken'));
    const getName = async () => { 
        const res = await axios.get("http://localhost:3333/eco/home", {
            headers: { Authorization: `Bearer ${value}` },
        })
        setMsg(res.data.msg)
        console.log(res);
    }

    useEffect(() => {
        getName()
    }, [])



    const Logout = (e) => {
        e.preventDefault();
        const confirmed = window.confirm("Are you sure you want to logout?");
        if (confirmed) {
            localStorage.clear();
            navigate("/Adminlogin")
        }
    }




    const [getEmp, setEmp] = useState([])
    const getEmployee = async () => {
        const res = await axios.get("http://localhost:3333/eco/categorygetdata")
        setEmp(res.data)
    }

    useEffect(() => {
        getEmployee()
    })




    ////delete
    const deleteCategory = async (id) => {
        const isConfirmed = window.confirm("Are you sure you want to delete this Category?");

        if (isConfirmed) {
            try {
                const res = await axios.delete(`http://localhost:3333/eco/deletecategory/${id}`);
                console.log('Category deleted:', res.data);
                setTimeout(() => {
                    navigate("/home");
                }, 1000);

            } catch (error) {
                console.error('Error deleting Category:', error);
            }
        } else {
            console.log('Deletion cancelled.');
        }
        setCount(count + 1)
    }

    useEffect(() => {
    }, [count])

    return (
        <div>

            <div className="navitem">
                <div className="maclogo">
                    <img src={maclogo} alt="" />

                </div>
                <div className="centernav">
                    <h4></h4>
                </div>






                <div className="serachbox" >
                    <h1><i className="fa fa-user" aria-hidden="true"><span>{msg}</span></i></h1>

                </div>





            </div>



            <div className="itemlist">
                <div className="item11">NEW! STUDIO RADIANCE FOUNDATION</div>
                <div className="item1">BEST-SELLERS</div>
                <div className="item1">NEW</div>
                <div className="item1">LOPS</div>
                <div className="item1">FACE</div>
                <div className="item1">EYES</div>
                <div className="item1">SKIN CARE</div>
                <div className="item1">OFFER</div>
                <div className="item1">EXPLORE</div>
            </div>


            <div className="bottomline">

            </div>




            <div className="display-username">
                <span className='admin-home-btn-user'>   
                    <button onClick={Logout}>Logout </button></span>
            </div>
            <div className="header-left">
                <Link to='/Adminlogin' className='back-btn'>BACK</Link>
            </div>



            <div className='mainm'>


                <div className='bordertop'>
                    <div className='bordertop2'>
                        <img src="#" alt="" />
                    </div>
                </div>
                <div className='main1'>
                    <div className='borderleft'>




                        <div className='catogories'>
                            CATEGORIES
                        </div>




                        {getEmp.map((data, index) =>
                            <div key={index} className='catogoryname'>
                                <div className='categorynames-only'>
                                    {data.category_name}

                                </div>

                                <div onClick={() => deleteCategory(data._id)} className='delete-btn'>
                                <FiTrash />
                                </div>
                               <Link    to={`/editCategory/${data._id}`}> <div  className='edit-btn'>
                                <FiEdit2 />
                                </div></Link>
                              
                             
                            </div>
                        )
                        }







                    </div>
                    <div className='main1content'>
                        <div className='main1content2'>

                            <Link to={'/Category'} className='link3'>
                                <div className='cardsm'>
                                    <div className='catogory'></div>
                                    <div className='addprocato'>ADD CATEGORY</div>
                                </div>
                            </Link>
                            <Link to={'/addproduct'} className='link3'>
                                <div className='cardsm'>
                                    <div className='products'></div>
                                    <div className='addprocato'>ADD PRODUCT</div>
                                </div>
                            </Link>

                        </div>
                        <div className='main1contentborder1 '>

                        </div>
                    </div>
                </div>
            </div>













        </div>
    )
}

export default AdminHome