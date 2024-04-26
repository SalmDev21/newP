const connection = require("../database")

const getAllCategories =  (req, res) => {
    let query = "SELECT * FROM `categorie`";
    connection.query(query, (err, data)=> {
      if(err) return res.status(500).json(err);
     // res.status(200).json(res)
      
      return res.status(200).json(data);
  
    })
  }

const getByid = (req, res) => {
    const id = req.params.id
    let query = "SELECT * FROM `categorie` WHERE id = ?";
    connection.query(query,id, (err, data)=> {
      if(err) return res.status(500).json(err);
      //res.status(200).json(res)
      return res.status(200).json(data); // Renvoyer les données, pas l'objet de réponse

    })
  }


const createCategory = (req, res) => {
    const data = req.body
    const q = "INSERT INTO categorie(`nom`, `discription`, `prix`) VALUES (?)";
    const values = [
        req.body.nom,
        req.body.discription,
        req.body.prix,

        
        
      ];


      connection.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("category has been created.");
      });
}


const deletecategory = (req, res) => {
      const categoryId = req.params.id; 
      const q = "DELETE FROM categorie WHERE `id` = ?"; 

      connection.query(q, [categoryId], (err, result) => { 
        if (err) { // Gérer les erreurs lors de l'exécution de la requête
          console.error("Error deleting category:", err);
          return res.status(500).json("An error occurred while deleting the category.");
        }

        if (result.affectedRows === 0) { // Vérifier si aucune catégorie n'a été supprimée
          return res.status(404).json("Category not found."); 
        }

        return res.status(200).json("Category has been deleted successfully."); 
      });
};




const updateCategory = (req, res) => {
  const categoryId = req.params.id; 
  const { nom, discription, prix } = req.body;
    

 
  const q = "UPDATE categorie SET `nom` = ?, `discription` = ?, `prix` = ?  WHERE `id` = ?";
  
  
  const values = [nom, discription,prix , categoryId];
    
  
  connection.query(q, values, (err, result) => {
    if (err) { 
      console.error("Error updating category:", err);
      return res.status(500).json("An error occurred while updating the category.");
    }

    if (result.affectedRows === 0) { 
      return res.status(404).json("Category not found."); 
    }

    return res.status(200).json("Category has been updated successfully."); 
  });
};





module.exports = {
    getAllCategories , getByid  , createCategory , deletecategory , updateCategory
} 