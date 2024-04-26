const connection = require("../database")

const getAllCategories =  (req, res) => {
    let query = "SELECT * FROM `temp`";
    connection.query(query, (err, data)=> {
      if(err) return res.status(500).json(err);
     // res.status(200).json(res)
      
      return res.status(200).json(data);
  
    })
  }


  const getByid = (req, res) => { 
    const id = req.params.id;
    const query = "SELECT * FROM `temp`  WHERE id = ?";
    connection.query(query, [id], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    });
  };

  const getByiid = (req, res) => { 
    const date = req.params.date;
    const query = "SELECT * FROM `temp` WHERE DATE_FORMAT(date, '%d-%m-%Y') = ?";
    connection.query(query, [date], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    });
  };
  
  



  const createCategory = (req, res) => {
    const data = req.body;
    const q = "INSERT INTO temp(`date`, `val1`, `obs1`, `val2`, `obs2`, `val3`, `obs3`, `val4`, `obs4`, `val5`, `obs5`, `val6`, `obs6`, `val7`, `obs7`, `val8`, `obs8`, `val9`, `obs9`, `val10`, `obs10`, `val11`, `obs11`, `val12`, `obs12`, `val13`, `obs13`, `val14`, `obs14`, `val15`, `obs15`, `val16`, `obs16`, `val17`, `obs17`, `val18`, `obs18`, `val19`, `obs19`, `val20`, `obs20`, `val21`, `obs21`, `val22`, `obs22`, `val23`, `obs23`, `val24`, `obs24`, `sig1`, `sig2`, `sig3`, `sig4`, `sig5`, `sig6`, `sig7`, `sig8`, `sig9`, `sig10`, `sig11`, `sig12`, `sig13`, `sig14`, `sig15`, `sig16`, `sig17`, `sig18`, `sig19`, `sig20`, `sig21`, `sig22`, `sig23`, `sig24`, `heure`, `anomalie`, `cause`, `corr`, `echeance`, `sig`) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?,      ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,        ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,       ?, ?, ?, ?, ?, ?, ?, ?,?,? , ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?, ?, ?, ?, ?, ?, ?, ?, ?,?)";

    const values = [
      data.date,
      data.val1,
      data.obs1,
      data.val2,
      data.obs2,
      data.val3,
      data.obs3,
      data.val4,
      data.obs4,
      data.val5,
      data.obs5,
      data.val6,
      data.obs6,
      data.val7,
      data.obs7,
      data.val8,
      data.obs8,
      data.val9,
      data.obs9,
      data.val10,
      data.obs10,
      data.val11,
      data.obs11,
      data.val12,
      data.obs12,
      data.val13,
      data.obs13,
      data.val14,
      data.obs14,
      data.val15,
      data.obs15,
      data.val16,
      data.obs16,
      data.val17,
      data.obs17,
      data.val18,
      data.obs18,
      data.val19,
      data.obs19,
      data.val20,
      data.obs20,
      data.val21,
      data.obs21,
      data.val22,
      data.obs22,
      data.val23,
      data.obs23,
      data.val24,
      data.obs24,
      data.sig1,
      data.sig2,
      data.sig3,
      data.sig4,
      data.sig5,
      data.sig6,
      data.sig7,
      data.sig8,
      data.sig9,
      data.sig10,
      data.sig11,
      data.sig12,
      data.sig13,
      data.sig14,
      data.sig15,
      data.sig16,
      data.sig17,
      data.sig18,
      data.sig19,
      data.sig20,
      data.sig21,
      data.sig22,
      data.sig23,
      data.sig24,
      data.heure,
      data.anomalie,
      data.cause,
      data.corr,
      data.echeance,
      data.sig,
     
    ];

    connection.query(q, values, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("category has been created.");
    });
};









      
    

const updateSig = (req, res) => {
    const categoryId = req.params.id; 
    const { sig } = req.body; // Uniquement le champ que vous voulez mettre à jour
  
    const q = "UPDATE temp SET `sig` = ? WHERE `id` = ?";
    const values = [sig, categoryId];
  
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
  getAllCategories , getByid  , createCategory ,getByiid  , updateSig
}