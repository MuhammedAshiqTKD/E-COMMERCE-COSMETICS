
import './App.css'
import AdminHome from './Component/AdminHome/AdminHome'
import Adminlogin from './Component/AdminLogin/Adminlogin'
import Adminregister from './Component/Adminregister/Adminregister'
import Forgotpassword from './Component/Forgotpassword/Forgotpassword'
import Category from './Component/category/category'
import HomeProduct from './Component/HomeProduct/HomeProduct'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Editcategory from './Component/Editcategory/Editcategory'
import Addproduct from './Component/Addproduct/Addproduct'
import viewproduct from './Component/ViewProduct/ViewProduct'
import ProductFullDetails from "./Component/productfulldetails/productfulldetails"
import Editproductpage from './Component/Editproductpage/Ediproductpage'
import Cusetomerreg from './Component/Customer/Cusetomerregistration/Cusetomerreg'
import Customerlogin from "./Component/customerlogin/Customerlogin"
import Eyeproduct from './Component/Eyeproduct/Eyeproduct'

import Lipproduct from './Component/Liproduct/Liproduct'
import Faceproduct from './Component/Faceproduct/Faceproduct'
import Skinproduct from './Component/Skinproduct/Skinproduct'
import productdatafullincustomer from './Component/productdatafullincustomer/productdatafullincustomer'
import Cart from './Component/Cart/Cart'
import Whishlist from './Component/Whishlist/Whishlist'




// import multer from 'multer'
// import aaaaaaaaaaa from './Component/adminjbjhbjhvhjvu/adminaaaaaaaaa'

function App() {


  return (
    <>
    <BrowserRouter>
    
    <Routes>
    
      <Route path='/' Component={HomeProduct}/>
      <Route path='/adminlogin' Component={Adminlogin}/> 
      <Route path='/adminregister' Component={Adminregister}/> 
      <Route path='/forgotpassword' Component={Forgotpassword}/> 
      <Route path='/home' Component={AdminHome}/> 
      <Route path='/Category' Component={Category}/>
      <Route path='/editCategory/:id' Component={Editcategory}/>
      <Route path='/addproduct' Component={Addproduct}/>
      <Route path='/viewproduct/:category_name' Component={viewproduct}/>
      <Route path='/productfulldetails/:id' Component={ProductFullDetails}/>
      <Route path='/ediproduct/:id' Component={Editproductpage}/>
      <Route path='/CustomerReg' Component={Cusetomerreg}/>
      <Route path='/Customerlogin' Component={Customerlogin}/>
      <Route path='/Eyeproduct' Component={Eyeproduct}/>
      <Route path='/Faceproduct' Component={Faceproduct}/>
      <Route path='/Lipproduct' Component={Lipproduct}/>
      <Route path='/Skinproduct' Component={Skinproduct}/>
      <Route path='/productdatafullincustomer/:id' Component={productdatafullincustomer}/>
      <Route path='/cart/:id' Component={Cart}/>
      <Route path='/whishlist/:id' Component={Whishlist}/>

      

    </Routes>
    
    </BrowserRouter>
   
   
    </>
  )
}

export default App
