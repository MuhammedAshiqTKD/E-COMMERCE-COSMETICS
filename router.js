import { Router } from "express";
import * as controller from "./controller.js"
// import Auth from "./Auth.js";
const router=Router();
router.route("/addadmin").post(controller.adminReg);
router.route("/adminlogin").post(controller.adminLogin);
router.route("/getemail/:username").get(controller.forgotUsername);
router.route("/adminpassword").patch(controller.forgotAdminpwd)
// router.route("/home").get(Auth,controller.home);

// router.route("/eco/adminlogin").post(controller.AdminLogin);

// router.route("/adminlogin").post(controller.adminLogin);
// router.route("/home").get(Auth,controller.home);
// router.route("/getemail/:username").get(controller.forgotUsername);
// router.route("/adminpassword").patch(controller.forgotAdminpwd)

export default router;