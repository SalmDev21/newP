const connection = require("../database")

const getAllCategories =  (req, res) => {
    let query = "SELECT * FROM `nonpropre`";
    connection.query(query, (err, data)=> {
      if(err) return res.status(500).json(err);
     // res.status(200).json(res)
      
      return res.status(200).json(data);
  
    })
  }


  const getByid = (req, res) => { 
    const id = req.params.id;
    const query = "SELECT * FROM `nonpropre`  WHERE id = ?";
    connection.query(query, [id], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    });
  };
  const getByiid = (req, res) => { //ce route :  router.get("/:datee",abattageController.getByiid );

    const date = req.params.date;
    const query = "SELECT * FROM `nonpropre`  WHERE date = ?";
    connection.query(query, [date], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    });
  };

 



  const createCategory = (req, res) => {
    const data = req.body;
    const q = "INSERT INTO nonpropre    ( `date`, `tem1`, `tem2`, `tem3`, `tem4`, `tem5`, `tem6`, `tem7`, `tem8`, `tem9`, `tem10`, `tem11`, `tem12`, `tem13`, `tem14`, `tem15`, `tem16`, `tem17`, `tem18`, `tem19`, `tem20`, `tem21`, `tem22`, `tem23`, `tem24`, `tem25`, `tem26`, `tem27`, `tem28`, `tem29`, `tem30`, `tem31`, `tem32`, `tem33`, `tem34`, `tem35`, `tem36`, `tem37`, `tem38`, `heure`, `ano`, `cause`, `corr`, `eche`, `sig`, `sigchef`) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?,?,?,?,?,?,?,?,?,?,?)";

    const values = [
      data.date,
      data.tem1,
      data.tem2,
      data.tem3,
      data.tem4,
      data.tem5,
      data.tem6,
      data.tem7,
      data.tem8,
      data.tem9,
      data.tem10,
      data.tem11,
      data.tem12,
      data.tem13,
      data.tem14,
      data.tem15,
      data.tem16,
      data.tem17,
      data.tem18,
      data.tem19,
      data.tem20,
      data.tem21,
      data.tem22,
      data.tem23,
      data.tem24,
      data.tem25,
      data.tem26,
      data.tem27,
      data.tem28,
      data.tem29,
      data.tem30,
      data.tem31,
      data.tem32,
      data.tem33,
      data.tem34,
      data.tem35,
      data.tem36,
      data.tem37,
      data.tem38,
      data.heure,
      data.ano,
      data.cause,
      data.corr,
      data.eche,
      data.sig,
      data.sigchef, 
     
      
     
    ];

    connection.query(q, values, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("category has been created.");
    });
};






const updateSig = (req, res) => {
  const categoryId = req.params.id; 
  const {sigchef } = req.body; // Uniquement le champ que vous voulez mettre à jour

  const q = "UPDATE nonpropre SET `sigchef` = ? WHERE `id` = ?";
  const values = [sigchef, categoryId];

  connection.query(q, values, (err, result) => {
    if (err) { 
      console.error("Error updating expedition:", err);
      return res.status(500).json("An error occurred while updating the expedition.");
    }

    if (result.affectedRows === 0) { 
      return res.status(404).json("Expedition not found."); 
    }

    return res.status(200).json("Expedition has been updated successfully."); 
  });
};








module.exports = {
    getAllCategories , getByid  , createCategory ,getByiid ,updateSig
} 