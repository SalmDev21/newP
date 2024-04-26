const express = require("express");
const connection = require("../database");
const NonpropreController = require("../controllers/nonpropreController");

const router = express.Router();

router.get("/all",NonpropreController.getAllCategories );
router.get("/:id",NonpropreController.getByid );

router.post("/create",NonpropreController.createCategory);
router.put("/update/:id",NonpropreController.updateSig);




module.exports = router;



 