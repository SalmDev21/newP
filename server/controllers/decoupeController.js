const connection = require("../database")

const getAllCategories =  (req, res) => {
    let query = "SELECT * FROM `decoupe`";
    connection.query(query, (err, data)=> {
      if(err) return res.status(500).json(err);
     // res.status(200).json(res)
      
      return res.status(200).json(data);
  
    })
  }


  const getByid = (req, res) => { 
    const id = req.params.id;
    const query = "SELECT * FROM `decoupe`  WHERE id = ?";
    connection.query(query, [id], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    });
  };


 



  const createCategory = (req, res) => {
    const data = req.body;
    const q = "INSERT INTO decoupe  ( `date`, `chef`, `art`, `qte`, `date1`, `lot`, `nb1`, `nb2`, `nb3`, `nb4`, `nb5`, `nb6`, `nb7`, `poi1`, `poi2`, `poi3`, `poi4`, `poi5`, `poi6`, `poi7`, `lot1`, `lot2`, `lot3`, `lot4`, `lot5`, `lot6`, `lot7`, `qte1`, `qte2`, `qte3`, `qte4`, `qte5`, `qte6`, `qte7`, `quali1`, `quali2`, `quali3`, `quali4`, `quali5`, `quali6`, `quali7`, `corr1`, `corr2`, `corr3`, `corr4`, `corr5`, `corr6`, `corr7`, `nom1`, `nom2`, `nom3`, `nom4`, `nom5`, `nom6`, `nom7`, `nom8`, `nom9`, `nom10`, `nom11`, `nom12`, `ren1`, `ren2`, `ren3`, `ren4`, `ren5`, `ren6`, `ren7`, `ren8`, `ren9`, `ren10`, `ren11`, `ren12`, `sig1`, `sig2`, `sigchef`) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,    ?, ?, ?, ?, ?, ?, ?, ?, ?, ?     , ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,                      ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,    ?, ?, ?, ?, ?, ?, ?, ?, ?, ?     , ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? , ?, ?, ?, ?, ?, ?, ?, ?, ?, ?     )";

    const values = [
      data.date,
      data.chef,
      data.art,
      data.qte, 
      data.date1,
      data.lot,
      data.nb1,
      data.nb2,
      data.nb3,
      data.nb4,
      data.nb5,
      data.nb6,
      data.nb7,
      data.poi1,
      data.poi2,
      data.poi3,
      data.poi4,
      data.poi5,
      data.poi6,
      data.poi7,
      data.lot1,
      data.lot2,
      data.lot3,
      data.lot4,
      data.lot5,
      data.lot6,
      data.lot7,
      data.qte1,
      data.qte2,
      data.qte3,
      data.qte4,
      data.qte5,
      data.qte6,

      data.qte7,
      data.quali1,
      data.quali2,
      data.quali3,
      data.quali4,
      data.quali5,
      data.quali6,
      data.quali7,
      data.corr1,
      data.corr2,
      data.corr3,
      data.corr4,
      data.corr5,
      data.corr6,
     data.corr7,




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
     data.sig1,
     data.sig2,
     data.sigchef
    ];

    connection.query(q, values, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("category has been created.");
    });
};




const updateSig = (req, res) => {
  const categoryId = req.params.id; 
  const { sig1, sigchef } = req.body; // Uniquement le champ que vous voulez mettre à jour

  const q = "UPDATE decoupe SET `sig1` = ?, `sigchef` = ? WHERE `id` = ?";
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