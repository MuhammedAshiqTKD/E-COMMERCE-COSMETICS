
import './App.css'
import AdminHome from './Component/AdminHome/AdminHome'
import Adminlogin from './Component/AdminLogin/Adminlogin'
import Adminregister from './Component/Adminregister/Adminregister'
import Forgotpassword from './Component/Forgotpassword/Forgotpassword'
import Category from './Component/category/category'
import HomeProduct from './Component/HomeProduct/HomeProduct'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Editcategory from './Component/Editcategory/Editcategory'
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
      {/* <Route path='/ashiq' Component={aaaaaaaaaaa}/> */}

    </Routes>
    
    </BrowserRouter>
   
   
    </>
  )
}

export default App
