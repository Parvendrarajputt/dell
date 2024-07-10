import express from "express";
import { getAllEmp, addEmp, homePage ,updateEmp , deleteEmp} from "../controller/userControler.js";


const router = express.Router();
router.get("/", homePage);
router.get("/getAll", getAllEmp);

router.put("/emp/:empId" ,updateEmp )

router.post('/addEmp', addEmp);// not woring as expected 

router.delete("/emp/:empId",deleteEmp )


export default router;
