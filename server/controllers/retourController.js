const connection = require("../database")

const getAllCategories =  (req, res) => {
    let query = "SELECT * FROM `retour`";
    connection.query(query, (err, data)=> {
      if(err) return res.status(500).json(err);
     // res.status(200).json(res)
      
      return res.status(200).json(data);
  
    })
  }


  const getByid = (req, res) => { 
    const id = req.params.id;
    const query = "SELECT * FROM `retour`  WHERE id = ?";
    connection.query(query, [id], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    });
  };
  const getByiid = (req, res) => { //ce route :  router.get("/:datee",abattageController.getByiid );

    const date = req.params.date;
    const query = "SELECT * FROM `retour`  WHERE date = ?";
    connection.query(query, [date], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    });
  };

 



  const createCategory = (req, res) => {
    const data = req.body;
    const q = "INSERT INTO retour  ( `date`, `nomli`, `nomcli`, `art1`, `art2`, `art3`, `art4`, `art5`, `qte1`, `qte2`, `qte3`, `qte4`, `qte5`, `cause1`, `cause2`, `cause3`, `cause4`, `cause5`, `lot1`, `lot2`, `lot3`, `lot4`, `lot5`, `asp1`, `asp2`, `asp3`, `asp4`, `asp5`, `acrion1`, `acrion2`, `acrion3`, `acrion4`, `acrion5`, `sigRq`, `sigRp`) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

    const values = [
      data.date,
      data.nomli,
      data.nomcli,
      data.art1, 
      data.art2,
      data.art3,
      data.art4,
      data.art5,
      data.qte1,
      data.qte2,
      data.qte3,
      data.qte4,
      data.qte5,
      data.cause1,
      data.cause2,
      data.cause3,
      data.cause4,
      data.cause5,
      data.lot1,
      data.lot2,
      data.lot3,
      data.lot4,
      data.lot5,
      data.asp1,
      data.asp2,
      data.asp3,
      data.asp4,
      data.asp5,
      data.acrion1,
      data.acrion2,
      data.acrion3,
      data.acrion4,
      data.acrion5,

      data.sigRq,
      data.sigRp,
      
     
    ];

    connection.query(q, values, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("category has been created.");
    });
};





 
 
const updateSig = (req, res) => {
  const categoryId = req.params.id; 
  const { sigRp } = req.body; // Uniquement le champ que vous voulez mettre à jour

  const q = "UPDATE retour SET `sigRp` = ? WHERE `id` = ?";
  const values = [sigRp, categoryId];

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
    getAllCategories , getByid  , createCategory ,getByiid , updateSig
} 