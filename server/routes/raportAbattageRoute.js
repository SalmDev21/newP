const express = require("express");
const connection = require("../database");
const abattageController = require("../controllers/raportAbattageController");

const router = express.Router();

router.get("/all",abattageController.getAllCategories );
router.get("/:date",abattageController.getByid );

router.post("/create",abattageController.createCategory);




module.exports = router;



