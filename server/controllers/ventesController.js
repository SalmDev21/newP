const connection = require("../database")

const getAllVentes =  (req, res) => {
    let query = "SELECT * FROM `ventes`";
    connection.query(query, (err, data)=> {
      if(err) return res.status(500).json(err);
     // res.status(200).json(res)
      
      return res.status(200).json(data);
  
    })
  }

const getByid = (req, res) => {
    const id = req.params.id
    let query = "SELECT * FROM `ventes` WHERE vente_id = ?";
    connection.query(query,id, (err, data)=> {
      if(err) return res.status(500).json(err);
      //res.status(200).json(res)
      return res.status(200).json(data); // Renvoyer les données, pas l'objet de réponse

    })
  }


const createVentes = (req, res) => {
    const data = req.body
    const q = "INSERT INTO ventes(`date_vente`, `nom`, `id`, `quantite` , `montant_total`) VALUES (?)";
    
    const values = [
        req.body.date_vente,
        req.body.nom,
        req.body.id,
        req.body.quantite,
        req.body.montant_total,

       
        
      ];


      connection.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("ventes has been created.");
      });
}


const deleteVentes = (req, res) => {
      const categoryId = req.params.id; 
      const q = "DELETE FROM ventes WHERE `vente_id` = ?"; 

      connection.query(q, [categoryId], (err, result) => { 
        if (err) { // Gérer les erreurs lors de l'exécution de la requête
          console.error("Error deleting ventes:", err);
          return res.status(500).json("An error occurred while deleting the ventes.");
        }

        if (result.affectedRows === 0) { // Vérifier si aucune catégorie n'a été supprimée
          return res.status(404).json("Category not found."); 
        }

        return res.status(200).json("Category has been deleted successfully."); 
      });
};




const updateVentes = (req, res) => {
  const categoryId = req.params.id; 
  const { date_vente, nom, id , quantite , montant_total } = req.body;
    // stock_initiale, entrees, sortie, stock_final, alerte, img } = req.body;

 
  const q = "UPDATE ventes SET `date_vente` = ?, `nom` = ?, `id` = ? , `quantite`=? , `montant_total`=?   WHERE `vente_id` = ?";
  // `stock_initiale` = ?, `entrees` = ?, `sortie` = ?, `stock_final` = ?, `alerte` = ?, `img` = ? WHERE `id` = ?";

  
  const values = [date_vente, nom,id , quantite ,montant_total,  categoryId];
    // stock_initiale, entrees, sortie, stock_final, alerte, img, categoryId];

  
  connection.query(q, values, (err, result) => {
    if (err) { 
      console.error("Error updating category:", err);
      return res.status(500).json("An error occurred while updating the ventes .");
    }

    if (result.affectedRows === 0) { 
      return res.status(404).json("ventes not found."); 
    }

    return res.status(200).json("ventes has been updated successfully."); 
  });
};





module.exports = {
    getAllVentes , getByid  , createVentes , deleteVentes , updateVentes
}