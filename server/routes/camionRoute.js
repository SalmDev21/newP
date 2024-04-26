const express = require("express");
const connection = require("../database");
const camionController = require("../controllers/camionController");

const router = express.Router();

router.get("/all",camionController.getAllCategories );
router.get("/:id",camionController.getByid );

router.post("/create",camionController.createCategory);

router.put("/update/:id", camionController.updateSig);



module.exports = router;



 