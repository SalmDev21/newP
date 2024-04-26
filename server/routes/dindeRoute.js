const express = require("express");
const connection = require("../database");
const dindeController = require("../controllers/dindeController");

const router = express.Router();

router.get("/all",dindeController.getAllCategories );
router.get("/:id",dindeController.getByid );
router.put("/update/:id", dindeController.updateSig);

router.post("/create",dindeController.createCategory);




module.exports = router;



