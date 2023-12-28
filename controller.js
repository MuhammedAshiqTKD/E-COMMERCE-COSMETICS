import admin_schema from './admin.model.js'
import category_schema from './category.model.js'
import product_schema from './product.model.js'
import path from 'path'
import bcrypt from 'bcrypt'
import pkg from "jsonwebtoken";
const { sign } = pkg




export async function adminReg(req, res) {
  try {
    const { username, email, password } = req.body;
    console.log(username, email, password);
    if (!(username && email && password))
      return res.status(404).send("fields are empty")

    bcrypt.hash(password, 10)
      .then((hashedPwd) => {
        admin_schema.create({ username, email, password: hashedPwd });
      })
      .then(() => {
        res.status(201).send("sucessfully registered")
      })
      .catch((error) => {
        res.status(500).send(error)
      })

  } catch (error) {
    console.log(error);

  }

}





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






export async function forgotUsername(req, res) {
  const { username } = req.params;
  console.log(username);
  let task = await admin_schema.findOne({ username })
  console.log(task);
  res.status(200).send(task)
}





export async function forgotAdminpwd(req, res) {

  const { email, password } = req.body;
  console.log(email);
  const hashedPassword = await bcrypt.hash(password, 10);
  let task = await admin_schema.updateOne({ email }, { $set: { password: hashedPassword } });
  console.log(task);

  res.status(200).send(task);
}





export async function home(req, res) {
  try {
    console.log(req.user);
    const { username } = req.user;
    res.status(200).send({ msg: `${username}` })
    res.end()
  } catch (error) {
    res.status(404).send(error);
  }

}






export async function Category_getdata(req, res) {
  let task = await category_schema.find()
  res.status(200).send(task)


}






export async function AddCategory(req, res) {
  try {
    const { category_name, Description } = req.body;
    console.log(category_name, Description);
    if (!(category_name && Description)) {
      return res.status(400).send("Fields are empty");
    }
    const task = await category_schema.create({ category_name, Description });

    res.status(200).send(task);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
}





export function deleteCategory(req, res) {
  const { id } = req.params;
  const data = category_schema.deleteOne({ _id: id })
  data.then((resp) => {
    res.status(200).send(resp)
  }).catch((error) => {
    res.status(404).send(error)
  })
}


export async function getCatDetails(req, res) {
  const { id } = req.params;
  let task = await category_schema.findOne({ _id: id })
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







export async function AddProducts(req, res) {
  try {
    // console.log(req.files);
    // const images=req.files;
    // console.log(req.files);
     const { ...productdetails } = req.body;
    const task=await product_schema.create({ ...productdetails });
    console.log(task);
    res.status(200).send({result : task});
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
}





export async function getCategoryWisedProduct(req, res) {
  try {
    const { category_name } = req.params;
    const products = await product_schema.find({ category_name: category_name });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}