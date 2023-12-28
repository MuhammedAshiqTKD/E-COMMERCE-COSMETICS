import { Router } from "express";
// import path from "path";
import * as controller from "./controller.js"
import Auth from "./Auth.js";
// import multer from "multer";
const router=Router();
// const storage = multer.diskStorage({
//     destination: "./images",
//     filename: (req, file, cb) => {
//         cb(null, file.originalname);
//     },
// });
// const upload = multer({ storage: storage });
router.route("/addadmin").post(controller.adminReg);
router.route("/home").get(Auth,controller.home);
router.route("/addcategory").post(controller.AddCategory);
router.route("/deletecategory/:id").delete(controller.deleteCategory);
router.route("/categorygetdata").get(controller.Category_getdata);
router.route("/editCategory/:id").patch(controller.editCategory);
router.route("/getCatDetails/:id").post(controller.getCatDetails);
router.route("/adminlogin").post(controller.adminLogin);
router.route('/addProduct').post(controller.AddProducts);
// router.route("/image/:filename").get(controller.SetPath);


router.route("/getCatWiseProducts/:category_name").get(controller.getCategoryWisedProduct);



export default router;