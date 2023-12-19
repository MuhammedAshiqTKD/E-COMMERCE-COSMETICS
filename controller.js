import admin_schema from './admin.model.js'
import category_schema from './category.model.js'
// import student_schema from './student.model.js'
import bcrypt from 'bcrypt'

import pkg from "jsonwebtoken";
const { sign } = pkg

// export async function addAdmin(req, res) {
//     try {
//         const { name, username, password } = req.body;
//         console.log(name, username, password);
//         if (!(name && username && password))
//             return res.status(404).send("fields are empty")

//         bcrypt.hash(password, 10)
//             .then((hashedPwd) => {
//                 admin_schema.create({ name, username, password: hashedPwd });
//             })
//             .then(() => {
//                 res.status(201).send("sucessfully registered")
//             })
//             .catch((error) => {
//                 res.status(500).send(error)
//             })

//     } catch (error) {
//         console.log(error);

//     }

// }



export async function adminReg(req,res){
    try {
        const {username,email,password}=req.body;
        console.log(username,email,password);
        if(!(username&&email&&password))
        return res.status(404).send("fields are empty")
    
        bcrypt.hash(password,10)    
        .then((hashedPwd)=>{
            admin_schema.create({username,email,password:hashedPwd});
        })
        .then(()=>{
            res.status(201).send("sucessfully registered") 
        })
      .catch((error)=>{
        res.status(500).send(error)
       })
        
       } catch (error) {
        console.log(error);
    
    }
    
}


// export async function AdminLogin(req, res) {
//     try {
//      console.log(req.body);
//      const { email, password } = req.body;
//      const usr = await admin_schema.findOne({ email,password })
//      console.log(usr);
//      if (usr === null) return res.status(200).send("email or password doesnot exist");
//      const success =await bcrypt.compare(password, usr.password)
//      console.log(success);
//      if (success === true) return res.status(200).send("email or password doesnot exist");
//      const token = await sign({ email }, process.env.JWT_KEY, { expiresIn: "24h" })
//      console.log(token);
//      res.status(201).send({ msg: "successfullly login", token })
//      res.end();
     
//     } catch (error) {
//      console.log(error);
// }
// }


export async function adminLogin(req, res) {
  try {
    const { username, password } = req.body;
    console.log(req.body);
    const user = await admin_schema.findOne({ username });
    console.log(user);
    if (!user) {
      return res.status(404).send("Username or password does not exist");
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log(isPasswordValid);
    if (!isPasswordValid) {
      return res.status(404).send("Username or password does not exist");
    }
    const token = sign({ username }, process.env.JWT_KEY, { expiresIn: "24h" });
    console.log(token);
    res.status(200).send({ msg: "Successfully logged in", token });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
}







export async function forgotUsername(req,res){
    const {username}=req.params;
    console.log(username);
    let task=await admin_schema.findOne({username})
    console.log(task);
    res.status(200).send(task)
  }
  
  
  export async function forgotAdminpwd(req, res) {
    // const {email} = req.params;
    // const updatedPassword = req.body.password;
    const {email,password}=req.body;
    console.log(email);
    const hashedPassword = await bcrypt.hash(password,10);
    let task = await admin_schema.updateOne( {email} , { $set: { password: hashedPassword } });
    console.log(task);
    // if (task.modifiedCount === 0) {
    //   return res.status(404).json({ error: 'Admin not found or password unchanged' });
    // }
    res.status(200).send(task);
  }









  // export async function home(req,res)
  // {
   
  //   try {
      
  //      const{username}=req.user;
  //     res.status(200).send({msg:`${username}`})
  //    } 
  //    catch (error) {
  //     res.status(404).send(error)
  //   }
  // }



  export async function home(req, res) {
    try {
      console.log(req.user);
        const {username}=req.user;
        res.status(200).send({msg:`${username}`})
        res.end()
      } catch (error) {
        res.status(404).send(error);
      }
     
}




export async function Category_getdata(req,res){
  let task=await category_schema.find()
      res.status(200).send(task)
  

}
  
  export async function AddCategory(req, res) {
    try {
      const { category_name, Description } = req.body;
      console.log(category_name, Description);
      if (!(category_name && Description)) {
        return res.status(400).send("Fields are empty");
      }
      const task=await category_schema.create({ category_name, Description });
  
      res.status(200).send(task);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }
  
  export function deleteCategory(req,res)
  {
      const{id}=req.params;
      const data= category_schema.deleteOne({_id:id})
      data.then((resp)=>{
          res.status(200).send(resp)
      }).catch((error)=>{
          res.status(404).send(error)
      })
  }








  export async function getCatDetails(req,res){
    const{id}=req.params;
    // console.log(id);
    let task=await category_schema.findOne({_id:id})
    console.log(task);
    res.status(200).send(task)
  }
  
  
  export async function editCategory(req, res) {
    const { id } = req.params;
    try {
        const updatedData = req.body;
        const value = await category_schema.updateOne({ _id: id }, { $set: updatedData });
        res.status(200).send(value);
    } catch (error) {
        res.status(404).send(error);
    }
  }