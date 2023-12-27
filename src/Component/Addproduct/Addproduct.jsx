import React, { useEffect,useState,useNavigate} from 'react'
import axios from "axios"
import maclogo from './maclogo.png'

import { Link } from 'react-router-dom'
import "./Addproduct.scss"
const Addproduct = () => {
  const navigate=useNavigate()
  const [getCat,setCat]=useState([])
  const [val,setVal]=useState({
    product_name:"",
    category_name:"",
    Description:"",
    price:"",
    stoke:"",
    images:""
  })
  const GetData=(e)=>{ 
    setVal((pre)=>({...pre,[e.target.name]:e.target.value}))
    console.log(val);
  }

  const getCategory=async()=>{
    const res=await axios.get("http://localhost:3333/eco/categorygetdata")
    setCat(res.data)
    console.log(getCat);
  }
  useEffect(()=>{
    getCategory()
  },[])

  const addProduct=async(e)=>{
   try {
    e.preventDefault()
    let formData = new FormData();
    console.log(Object.entries(val));
    Object.entries(val).forEach(item => formData.append(item[0],item[1]));
    if (val.images && val.images.length > 0) {
      for (const image of val.images) {
        formData.append('images', image);
      }
    }
    const res = await axios.post("http://localhost:3333/eco/addProduct", formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    if(res.status!==404){
      alert("Product Added")
      navigate("")
    }
   } catch (error) {
      alert("error",error)
   }
  }


  return (
    <div>
      

      <div className="mainadmin">
        <div className="navitem">
          <div className="maclogo">
            <img src={maclogo} alt="" />

          </div>
          <div className="centernav">
            <h4></h4>
          </div>






          <div className="serachbox">

            <input type="text" value="{Admin name}" />
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


      </div>

      <div className="adminbar">
        <h1>ADD PRODUCT</h1>
      </div>
    <form   onSubmit={addProduct}>
    <div className="adminloginbutton">
        <button>ADD PRODUCT</button>
      </div>

      <div className="inputfield">
        <input type="text" placeholder='Product name'   name="product_name" onChange={GetData} />
        <input type="text" placeholder='Description' name="Description"  onChange={GetData} />

      </div>
      
      {/* <select name="category" id="category"  className="input-field" onChange={GetData}>
     {
      getCat.map((data,index)=>
        <option value={data.category} key={index}>{data.category}</option>
     )
     }
      </select> */}
      <div className="infield2">
        <input type="text" placeholder='Price' name='price' onChange={GetData}  />
        <input type="text" placeholder='Number of stock'  name="stoke" onChange={GetData}  />
        
      </div>
      <div className="infield2">
        
        <input type="file" name='images'    onChange={e => setVal(p => ({...p,[e.target.name]: e.target.files}))}  multiple/>
        <div className="select">      
        <select name="category_name" id="category" className="input-field" onChange={GetData}>
  <option id='optionaaa' value=""  selected >Select Category</option>
  {getCat.map((data, index) => (
    <option value={data.category_name} key={index}>{data.category_name}</option>
  ))}
</select>

  </div>
       
      </div>
   


      <div className="adminregister">
        <Link to="">
          
          <button onClick={addProduct} type='submit'>ADD PRODUCT</button>
        </Link>
        <div className="admintext23">
        <h1>* Administrators often manage user access and permissions b a software <br></br> *They set up and m aaaaaaaaintain security measures to protect sensitive<br></br>* data and ensure     d only authorized individuals access to  functionalities.   </h1>
      </div>
      </div>
      
</form>    

      {/* <!-- Site footer --> */}
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>About</h6>
              <p className="text-justify">M·A·C (Make-up Art Cosmetics) is the pioneering makeup authority for all. Since its creation in Toronto, Canada, over 30 years ago, the brands popularity has grown through a tradition of world-of-mouth endorsement from makeup artists, models, photographers and journalists around the world.</p>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Categories</h6>
              <ul className="footer-links">
                <li><a href="http://scanfcode.com/category/c-language/">C</a></li>
                <li><a href="http://scanfcode.com/category/front-end-development/">UI Design</a></li>
                <li><a href="http://scanfcode.com/category/back-end-development/">PHP</a></li>
                <li><a href="http://scanfcode.com/category/java-programming-language/">Java</a></li>
                <li><a href="http://scanfcode.com/category/android/">Android</a></li>
                <li><a href="http://scanfcode.com/category/templates/">Templates</a></li>
              </ul>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul className="footer-links">



                <li><a href="http://scanfcode.com/about/">MAKEUP SERVICES</a></li>
                <li><a href="http://scanfcode.com/contact/">CONTACT US</a></li>
                <li><a href="http://scanfcode.com/contribute-at-scanfcode/">
                  18002672666</a></li>
                <li><a href="http://scanfcode.com/privacy-policy/">SHIPPING INFO</a></li>
                <li><a href="http://scanfcode.com/sitemap/">RETURN POLICY</a></li>
              </ul>
            </div>
          </div>

        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">Copyright &copy; 2017 All Rights Reserved by
                <a href="#"> Mac</a>.
              </p>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
                <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default Addproduct
