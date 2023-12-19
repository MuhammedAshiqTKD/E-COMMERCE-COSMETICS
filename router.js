import { Router } from "express";
import * as controller from "./controller.js"
import Auth from "./Auth.js";
const router=Router();
router.route("/addadmin").post(controller.adminReg);

router.route("/home").get(Auth,controller.home);

router.route("/addcategory").post(controller.AddCategory);
router.route("/deletecategory/:id").delete(controller.deleteCategory);
router.route("/categorygetdata").get(controller.Category_getdata);
router.route("/editCategory/:id").patch(controller.editCategory);
router.route("/getCatDetails/:id").post(controller.getCatDetails);
router.route("/adminlogin").post(controller.adminLogin);


export default router;