const express = require("express");
const connection = require("../database");
const retourController = require("../controllers/retourController");

const router = express.Router();

router.get("/all",retourController.getAllCategories );
router.get("/:id",retourController.getByid );
router.put("/update/:id", retourController.updateSig);

router.post("/create",retourController.createCategory);




module.exports = router;



