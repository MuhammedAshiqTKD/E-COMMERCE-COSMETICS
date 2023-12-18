
import './App.css'
import Adminlogin from './Component/AdminLogin/Adminlogin'
import Adminregister from './Component/Adminregister/Adminregister'
import Forgotpassword from './Component/Forgotpassword/Forgotpassword'
import HomeProduct from './Component/HomeProduct/HomeProduct'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {


  return (
    <>
    <BrowserRouter>
    
    <Routes>
    
      <Route path='/' Component={HomeProduct}/>
      <Route path='/adminlogin' Component={Adminlogin}/> 
      <Route path='/adminregister' Component={Adminregister}/> 
      <Route path='/forgotpassword' Component={Forgotpassword}/> 

    </Routes>
    
    </BrowserRouter>
   
   
    </>
  )
}

export default App
