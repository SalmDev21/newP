const connection = require("../database")

const getAllCategories =  (req, res) => {
    let query = "SELECT * FROM `dine`";
    connection.query(query, (err, data)=> {
      if(err) return res.status(500).json(err);
     // res.status(200).json(res)
      
      return res.status(200).json(data);
  
    })
  }


  const getByid = (req, res) => { 
    const id = req.params.id;
    const query = "SELECT * FROM `dine`  WHERE id = ?";
    connection.query(query, [id], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    });
  };


 



  const createCategory = (req, res) => {
    const data = req.body;
    const q = "INSERT INTO dine   (`date`, `chef`, `nature1`, `qte1`, `date1`, `lot1`, `nature2`, `poi1`, `ren`, `lot2`, `quali1`, `corr1`, `nature3`, `qte2`, `date3`, `lot3`, `nature4`, `poi2`, `ren0`, `lot4`, `quali2`, `corr2`, `nom1`, `nom2`, `nom3`, `nom4`, `nom5`, `nom6`, `nom7`, `nom8`, `nom9`, `nom10`, `nom11`, `nom12`, `nom13`, `nom14`, `ren1`, `ren2`, `ren3`, `ren4`, `ren5`, `ren6`, `ren7`, `ren8`, `ren9`, `ren10`, `ren11`, `ren12`, `ren13`, `ren14`, `sig1`, `sig2`, `sigchef`) VALUES ( ?,?,?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?,      ?, ?, ?, ?, ?, ?, ?, ?, ?, ?       , ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,                      ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,     ?, ?, ?, ?, ?, ?, ?, ?, ?, ?           )";

    const values = [
      data.date,
      data.chef,
      data.nature1,
      data.qte1, 
      data.date1,
      data.lot1,
      data.nature2,
      data.poi1,
      data.ren,
      data.lot2,
      data.quali1,
      data.corr1,
      data.nature3,
      data.qte2,
      data.date3,
      data.lot3,



      data.nature4,
      data.poi2,
      data.ren0,
      data.lot4,
      data.quali2,
      data.corr2,
      data.nom1,
      data.nom2,
      data.nom3,

      data.nom4,
      data.nom5,
      data.nom6,
      data.nom7,
      data.nom8,
      data.nom9,
      data.nom10,
      data.nom11,

      data.nom12,
      data.nom13,
      data.nom14,
      data.ren1,
      data.ren2,
      data.ren3,
      data.ren4,
      data.ren5,
      data.ren6,

      data.ren7,
      data.ren8,
      data.ren9,
      data.ren10,
      data.ren11,
     data.ren12,
      data.ren13,
      data.ren14,
     
      data.sig1,
      data.sig2,
      data.sigchef,
    ];

    connection.query(q, values, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("category has been created.");
    });
};




const updateSig = (req, res) => {
  const categoryId = req.params.id; 
  const { sig1, sigchef } = req.body; // Uniquement le champ que vous voulez mettre à jour

  const q = "UPDATE dine SET `sig1` = ?, `sigchef` = ? WHERE `id` = ?";
  const values = [sig1, sigchef, categoryId];

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
    getAllCategories , getByid  , createCategory , updateSig
} 