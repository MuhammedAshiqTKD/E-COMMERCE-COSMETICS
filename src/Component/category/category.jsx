import axios from 'axios';
import "./category.css";
import maclogo from './maclogo.png';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Category = () => {
    const navigate = useNavigate()
    const [val, setVal] = useState({
        category_name: "",
        Description: ""

    })
    const GetData = (e) => {
        setVal((pre) => ({ ...pre, [e.target.name]: e.target.value }))
    }
    const AddCat = async (e) => {
        e.preventDefault()
        const res = await axios.post("http://localhost:3333/eco/addcategory", { ...val })
        if (res.status != 404) {
            alert("Category Added Successfully")
            navigate("/home")

        }
    }




    return (
        <div>


            <div className="navitem">
                <div className="maclogo">
                    <img src={maclogo} alt="" />

                </div>
                <div className="centernav">
                    <h4></h4>
                </div>






                <div className="serachbox">

                    <input type="text" placeholder='Search here' />
                </div>




                <div className="addtocart">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                    </svg>
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





            <div className="fulll">
                <div className="container-login" id="container">
                    <div className="form-container sign-up-container">

                    </div>
                    <div className="form-container sign-in-container">
                        <div className="forms12"><h1 className='headingg'> ADD CATEGORY NOW </h1></div>
                        <form action="#" className='forms1' onSubmit={AddCat}  >



                            <input type="text" placeholder="Category Name" name='category_name' onChange={GetData} />
                            <input type="text" placeholder="Description" name="Description" onChange={GetData} /><br></br>
                            <p>* ADMINISTRATORS OFTEN MANAGE USER ACCESS AND PERMISSIONS WITHIN A SOFTWARE SYSTEM.<br></br>
                                *THEY SET UP AND MAINTAIN SECURITY MEASURES TO PROTECT SENSITIVE*<br></br>
                                DATA AND ENSURE THAT ONLY AUTHORIZED INDIVIDUALS HAVE ACCESS TO CERTAIN FUNCTIONALITIES.</p>
                            <button className='signin'>ADD CATEGORY</button>
                        </form>
                    </div>

                </div>
            </div>












        </div>
    )
}

export default Category;