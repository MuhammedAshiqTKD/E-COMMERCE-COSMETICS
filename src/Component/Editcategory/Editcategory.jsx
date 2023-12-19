import React, { useEffect, useState } from 'react'
import maclogo from './maclogo.png'
import { useNavigate,useParams } from 'react-router-dom'

import axios from "axios"
import "./Editcategory.css"
const Editcategory = () => {
    const navigate=useNavigate()
    const {id}=useParams()
    // console.log(id);
    // const [getData,setData]=useState([])
    const [val,setVal]=useState({
      category_name:"",
      Description:""
       
    })
    const GetData=(e)=>{
        setVal((pre)=>({...pre,[e.target.name]:e.target.value}))
        // console.log(val);
    }

    const getfullData = async () => {
        try {
            const res = await axios.post(`http://localhost:3333/eco/getCatDetails/${id}`);
            // console.log(res);
            setVal(res.data);
            // console.log(val);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getfullData(id);
    }, [id]);


    const EditCat=async(e)=>{
        e.preventDefault()
      try {
        const res=await axios.patch(`http://localhost:3333/eco/editCategory/${id}`,{...val})
        console.log(res.data);
        if(res.status!=404){
            alert("Edited")
            navigate("/home")
        }
      } catch (error) {
        console.log(error);
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





        <form action="" onSubmit={EditCat}>
        <div className="fulll">
                <div className="container-login" id="container">
                    <div className="form-container sign-up-container">

                    </div>
                    <div className="form-container sign-in-container">
                        <div className="forms12"><h1 className='headingg'> EDIT CATEGORY NOW </h1></div>
                        <form action="#" className='forms1'   >



                            <input type="text" placeholder="Category Name" name='category_name'   value={val.category_name}  className="input-field-about"  onChange={GetData}  />
                            <input type="text" placeholder="Description" name="Description"  value={val.Description}   onChange={GetData}/><br></br>
                            <p>* ADMINISTRATORS OFTEN MANAGE USER ACCESS AND PERMISSIONS WITHIN A SOFTWARE SYSTEM.<br></br>
                                *THEY SET UP AND MAINTAIN SECURITY MEASURES TO PROTECT SENSITIVE*<br></br>
                                DATA AND ENSURE THAT ONLY AUTHORIZED INDIVIDUALS HAVE ACCESS TO CERTAIN FUNCTIONALITIES.</p>
                            <button onClick={EditCat} className='signin'>Submit</button>
                        </form>
                    </div>

                </div>
            </div>
        </form>










    </div>
  )
}

export default Editcategory
