const express = require("express");
const connection = require("../database");
const decoupeController = require("../controllers/decoupeController");

const router = express.Router();

router.get("/all",decoupeController.getAllCategories );
router.get("/:id",decoupeController.getByid );
router.put("/update/:id", decoupeController.updateSig);

router.post("/create",decoupeController.createCategory);




module.exports = router;



