const express = require("express");
const connection = require("../database");
const controleController = require("../controllers/ControleController");

const router = express.Router();

router.get("/all",controleController.getAllCategories );
router.get("/:date",controleController.getByid );

router.post("/create",controleController.createCategory);
router.put("/update/:id",controleController.updateSig);




module.exports = router;



