const connection = require("../database")

const getAllachats =  (req, res) => {
    let query = "SELECT * FROM `achats`";
    connection.query(query, (err, data)=> {
      if(err) return res.status(500).json(err);
      
      return res.status(200).json(data);
  
    })
  }

const getByid = (req, res) => {
    const id = req.params.id
    let query = "SELECT * FROM `achats` WHERE achat_id = ?";
    connection.query(query,id, (err, data)=> {
      if(err) return res.status(500).json(err);
      
      return res.status(200).json(data); 

    })
  }


const createachat = (req, res) => {
    const data = req.body

    const q = "INSERT INTO achats(`nom`,`Ref`,`date_achat`, `quantite` , `montant_total` , img) VALUES (?)";
    
    const values = [
        req.body.nom,
        req.body.Ref,
        req.body.date_achat,
       
        req.body.quantite,
        req.body.montant_total,
        req.body.img
      ];
 

      connection.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("achat has been created.");
      });
}


const deleteachat = (req, res) => {
      const categoryId = req.params.id; 
      const q = "DELETE FROM achats WHERE `achat_id` = ?"; 

      connection.query(q, [categoryId], (err, result) => { 
        if (err) { // Gérer les erreurs lors de l'exécution de la requête
          console.error("Error deleting ventes:", err);
          return res.status(500).json("An error occurred while deleting the achat.");
        }

        if (result.affectedRows === 0) { // Vérifier si aucune catégorie n'a été supprimée
          return res.status(404).json("achat not found."); 
        }

        return res.status(200).json("achat has been deleted successfully."); 
      });
};



const updateachat = (req, res) => {
  const categoryId = req.params.id; 
  const { nom,Ref,date_achat,  quantite , montant_total , img } = req.body;

 
  const q = "UPDATE achats SET `nom`=?,`Ref`=? ,`date_achat` = ? , `quantite`=? , `montant_total`=? `img`=?  WHERE `achat_id` = ?";
  
  
  const values = [nom,Ref,date_achat, quantite ,montant_total, img,  categoryId];

  
  connection.query(q, values, (err, result) => {
    if (err) { 
      console.error("Error updating achat:", err);
      return res.status(500).json("An error occurred while updating the achat .");
    }

    if (result.affectedRows === 0) { 
      return res.status(404).json("achat not found."); 
    }

    return res.status(200).json("achat has been updated successfully."); 
  });
};





module.exports = {
    getAllachats , getByid  , createachat , deleteachat , updateachat
}