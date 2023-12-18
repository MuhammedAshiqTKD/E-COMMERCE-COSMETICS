import React from 'react'
import maclogo from './maclogo.png'
import { Link } from 'react-router-dom';
import "./Adminlogin.css"
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';


const Adminlogin = () => {


  const success = () =>
    toast.success("Login succesful",{
       position: "top-right",
       autoClose:2500 ,
       hideProgressBar: false,
       closeOnClick: true,
       pauseOnHover: true, 
       draggable: true,
       progress: undefined, 
       theme: "dark",
    })

  const navigate=useNavigate()
   const [username,setUser]=useState("");
   const [password,setPassword]=useState("");
   
   const handleLogin = async (e) => {
     e.preventDefault()
     try {
       const response = await axios.post("http://localhost:3333/eco/adminlogin", {
   
       username: username,
       password: password
       });
   
       const data = response.data;
       console.log(data);
   
       if (response.status !== 404) {
       const token = data.token;
       localStorage.setItem("admintoken", JSON.stringify(token));
       success(setTimeout(()=>{
           navigate("/");
       },3000),{ state: { username } });
       } else {
       alert(data.msg);
       }
     } catch (error) {
       alert("Server not connected");
     }
   };

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

            <input type="text" value="Admin name" />
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
        <h1>ADMIN LOGIN</h1>
      </div>
      <div className="adminloginbutton">
        <button>LOG IN NOW</button>
      </div>

      <div className="inputfield">
        <input type="text" placeholder='Enter the email' name='email'  onChange={(e) => setUser(e.target.value)} />
       
        <input type="password" placeholder='Enter the password' name='password'    onChange={(e) => setPassword(e.target.value)}/>
      </div>
      <div className="forgot">

      <Link to="/forgotpassword" className='upass'><button>forgot password</button></Link>
      </div>
      <div className="admintext">
        <h1>    * Administrators often manage user access and permissions within a software system.<br></br> *They set up and maintain security measures to protect sensitive* <br></br>data and ensure that only authorized individuals have access to certain functionalities.   </h1>
      </div>


      <div className="adminregister">
        <Link to="/adminregister">   <button type="submit" onClick={handleLogin}>LOG IN NOW</button>
        <ToastContainer 
				
				position="top-right" 
				autoClose={2500}
				hideProgressBar={false} 
				newestOnTop={false} 
				closeOnClick 
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
				
				/></Link>
      </div>
      <div className="adminrview">
        <Link to="/adminregister" className='abc'><h1>ADMIN REGISTER</h1></Link>
      </div>

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

export default Adminlogin
