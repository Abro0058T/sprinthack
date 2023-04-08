const express=require("express");
const { addHospitals, allHospitals, singlehospital, requestHospitals, requestAllHospitals, requestOrganAll, requestOrgan } = require("../Controller/hospitalController");
// const {registerUser}=require("../Controller/userControler")
const router= express.Router();

router.route("/addhospitals").post(addHospitals)
router.route("/allHospitals").get(allHospitals);
router.route("/hospital/:id").get(singlehospital)
router.route("/requestHospital/:email").post(requestHospitals);
router.route("/requestallhospitals").post(requestAllHospitals)
router.route("/requestOrganAll").post(requestOrganAll)
router.route("/requestOrgan/:email").post(requestOrgan)
module.exports=router;