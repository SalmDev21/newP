const connection = require("../database")

const getAllCategories =  (req, res) => {
    let query = "SELECT * FROM `controle`";
    connection.query(query, (err, data)=> {
      if(err) return res.status(500).json(err);
     // res.status(200).json(res)
      
      return res.status(200).json(data);
  
    })
  } 


  const getByiid = (req, res) => { 
    const date = req.params.date;
    const query = "SELECT * FROM `controle`  WHERE date = ?";
    connection.query(query, [date], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    });
  };

  const getByid = (req, res) => { 
    const date = req.params.date;
    const query = "SELECT * FROM `controle` WHERE DATE_FORMAT(date, '%d-%m-%Y') = ?";
    connection.query(query, [date], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    });
  };
  
  


  const createCategory = (req, res) => {
  

 
    const data = req.body;
      // Extract checkbox values from req.body
      const c1Value = data.c1 === 'on' ? 1 : 0;
      const c2Value = data.c2 === 'on' ? 1 : 0;
      const c3Value = data.c3 === 'on' ? 1 : 0;
      const c4Value = data.c4 === 'on' ? 1 : 0;
      const nc1Value = data.nc1 === 'on' ? 1 : 0;
      const nc2Value = data.nc2 === 'on' ? 1 : 0;
      const nc3Value = data.nc3 === 'on' ? 1 : 0;
      const nc4Value = data.nc4 === 'on' ? 1 : 0;
      const accepSousvalue = data.accepSous=== 'on' ? 1 : 0;
      const accepvalue = data.accep === 'on' ? 1 : 0;
      const refusvalue = data.refus === 'on' ? 1 : 0;
    const q = "INSERT INTO controle (`date`, `fourni`, `dateHeur`, `pro`, `numfich`, `numplom`, `lot`, `duree`, `qtep`, `qtekg`, `numfac`, `numcamion`, `origine`, `c1`, `c2`, `c3`, `c4`, `nc1`, `nc2`, `nc3`, `nc4`, `obs1`, `obs2`, `obs3`, `obs4`, `accepSous`, `accep`, `refus`, `obsAccS`, `obsAcc`, `obsRefus`, `sig`, `sigChef`,`age`, `nom`, `ref`, `refb`) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?,?,?,?)";

    const values = [
      data.date,
      data.fourni,
      data.dateHeur,
      data.pro,
      data.numfich,
      data.numplom,
      data.lot,
      data.duree,
      data.qtep,
      data.qtekg,

      data.numfac,
      data.numcamion,
      data.origine,

      c1Value,
      c2Value,
      c3Value,
      c4Value,
      nc1Value,
      nc2Value,
      nc3Value,
      nc4Value,


     


















      data.obs1,
      data.obs2,
      data.obs3,
      data.obs4,
      accepSousvalue,
      accepvalue,
      refusvalue,
      data.obsAccS,
      data.obsAcc,

      data.obsRefus,
      data.sig,
      data.sigChef,



      data.age,

      data.nom,
      data.ref,
      data.refb,
    
     
    ];

    connection.query(q, values, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("category has been created.");
    });
};






 
const updateSig = (req, res) => {
  const categoryId = req.params.id; 
  const { sigChef } = req.body; // Uniquement le champ que vous voulez mettre à jour

  const q = "UPDATE controle SET `sigChef` = ? WHERE `id` = ?";
  const values = [sigChef, categoryId];

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