const express = require("express");
const connection = require("../database");
const tempController = require("../controllers/tempController");

const router = express.Router();

router.get("/allA", tempController.getAllCategories );
router.get("/:id", tempController.getByid );
router.post("/createA", tempController.createCategory);
router.put("/updateA/:id", tempController.updateSig);




module.exports = router;


 
