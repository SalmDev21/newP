const connection = require("../database")

const getAllCategories =  (req, res) => {
    let query = "SELECT * FROM `camion`";
    connection.query(query, (err, data)=> {
      if(err) return res.status(500).json(err);
     // res.status(200).json(res)
      
      return res.status(200).json(data);
  
    })
  }


  const getByid = (req, res) => { 
    const id = req.params.id;
    const query = "SELECT * FROM `camion`  WHERE id = ?";
    connection.query(query, [id], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    });
  };
  const getByiid = (req, res) => { //ce route :  router.get("/:datee",abattageController.getByiid );

    const date = req.params.date;
    const query = "SELECT * FROM `camion`  WHERE date = ?";
    connection.query(query, [date], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    });
  };

 



  const createCategory = (req, res) => {
    const data = req.body;
    const q = "INSERT INTO camion  (`date`, `numc1`, `numc2`, `numc3`, `numc4`, `numc5`, `liv1`, `liv2`, `liv3`, `liv4`, `liv5`, `c1`, `c2`, `c3`, `c4`, `c5`, `c6`, `c7`, `c8`, `c9`, `c10`, `c11`, `c12`, `c13`, `c14`, `c15`, `c16`, `c17`, `c18`, `c19`, `c20`, `c21`, `c22`, `c23`, `c24`, `c25`, `nc1`, `nc2`, `nc3`, `nc4`, `nc6`, `nc7`, `nc8`, `nc9`, `nc10`, `nc11`, `nc12`, `nc13`, `nc14`, `nc15`, `nc16`, `nc17`, `nc18`, `nc19`, `nc20`, `nc21`, `nc22`, `nc23`, `nc24`, `nc25`, `obs1`, `obs2`, `obs3`, `obs4`, `obs5`, `obs6`, `obs7`, `obs8`, `obs9`, `obs10`, `obs11`, `obs12`, `obs13`, `obs14`, `obs15`, `obs16`, `obs17`, `obs18`, `obs19`, `obs20`, `obs21`, `obs22`, `obs23`, `obs24`, `obs25`, `sig1`, `sig2`, `sig3`, `sig4`, `sig5`, `sigchef`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

    const values = [
        
        data.date,
        data.numc1,
        data.numc2,
        data.numc3,
        data.numc4,
        data.numc5,
        data.liv1,
        data.liv2,
        data.liv3,
        data.liv4,
        data.liv5,
        0,
       0,
       0,
        0,
       0,
        0,
        0,
        0,
        0,
        0,
        0,
       0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
       0,
        0,
        0,
        0,
        0,
       0,
       0,
        0,
        0,
        0,
       0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
       0,
       0,
        0,
        0,
        0,
        data.obs1,
        data.obs2,
        data.obs3,
        data.obs4,
        data.obs5,
        data.obs6,
        data.obs7,
        data.obs8,
        data.obs9,
        data.obs10,
        data.obs11,
        data.obs12,
        data.obs13,
        data.obs14,
        data.obs15,
        data.obs16,
        data.obs17,
        data.obs18,
        data.obs19,
        data.obs20,
        data.obs21,
        data.obs22,
        data.obs23,
        data.obs24,
        data.obs25,
        data.sig1,
        data.sig2,
        data.sig3,
        data.sig4,
        data.sig5,
        data.sigchef,
     
    ];

    connection.query(q, values, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("category has been created.");
    });
};



const updateSig = (req, res) => {
  const categoryId = req.params.id; 
  const { sigchef } = req.body; // Uniquement le champ que vous voulez mettre à jour

  const q = "UPDATE camion SET `sigchef` = ? WHERE `id` = ?";
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
    getAllCategories , getByid  , createCategory ,getByiid , updateSig
} 