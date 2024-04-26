const connection = require("../database")

const getAllexpedition =  (req, res) => {
    let query = "SELECT * FROM `expedition`";
    connection.query(query, (err, data)=> {
      if(err) return res.status(500).json(err);
      
      return res.status(200).json(data);
  
    }) 
  }










const getByid = (req, res) => {
    const id = req.params.id
    let query = "SELECT * FROM `expedition` WHERE id = ?";
    connection.query(query,id, (err, data)=> {
      if(err) return res.status(500).json(err);
      
      return res.status(200).json(data); 

    })
  }


const createexpedition = (req, res) => {
    const data = req.body

    const q = "INSERT INTO expedition( `date`, `numcamion`, `nomchaufeur`, `externe`, `interne`, `client`, `article`, `qte`, `datepro`, `lot`, `aspect`, `EHygiene`, `CHygiene`, `Elivreur`, `Clivreur`, `ETemProduit`, `CTemProduit`, `EtempFrigo`, `CtempFrigo`, `Eqte`, `Cqte`, `sigCQH`, `sigChefEquipe`) VALUES (?)";
    const values = [
        req.body.date,
        req.body.numcamion,
        req.body.nomchaufeur,
       
        req.body.externe,
        req.body.interne,
        req.body.client,
        req.body.article,
        req.body.qte,
        req.body.datepro,
        req.body.lot,
        req.body.aspect,
        req.body.EHygiene,
        req.body.CHygiene,
        req.body.Elivreur,
        req.body.Clivreur,
        req.body.ETemProduit,
        req.body.CTemProduit,
        req.body.EtempFrigo,
        req.body.CtempFrigo,
        req.body.Eqte,
        req.body.Cqte,
        req.body.sigCQH,
        req.body.sigChefEquipe,
     
       
      ];
 

      connection.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("achat has been created.");
      });
}


const deleteexpedition = (req, res) => {
      const categoryId = req.params.id; 
      const q = "DELETE FROM expedition WHERE `id` = ?"; 

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



const updateexpedition = (req, res) => {
  const categoryId = req.params.id; 
  const {  date, numcamion, nomchaufeur, externe, interne, client, article, qte, datepro, lot, aspect, EHygiene, CHygiene, Elivreur, Clivreur, ETemProduit, CTemProduit, EtempFrigo, CtempFrigo, Eqte, Cqte, sigCQH, sigChefEquipe  } = req.body;

 
  const q = "UPDATE expedition SET `date`=? , `numcamion`=?, `nomchaufeur`=? ,`externe`=?, `interne`=?, `client`=?, `article`=? ,`qte`=?,`datepro`=?,`lot`=?,`aspect`=?,`EHygiene`=?,`CHygiene`=?,`Elivreur`=?,`Clivreur`=?,`ETemProduit`=?,`CTemProduit`=?,`EtempFrigo`=?,`CtempFrigo`=?,`Eqte`=?,`Cqte`=?,`sigCQH`=?,`sigChefEquipe`= ? WHERE `id` = ?";
  
  
  const values = [date, numcamion, nomchaufeur, externe, interne, client, article, qte, datepro, lot, aspect, EHygiene, CHygiene, Elivreur, Clivreur, ETemProduit, CTemProduit, EtempFrigo, CtempFrigo, Eqte, Cqte, sigCQH, sigChefEquipe ,  categoryId];

  
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




const updateSig = (req, res) => {
  const categoryId = req.params.id; 
  const { sigChefEquipe } = req.body; // Uniquement le champ que vous voulez mettre à jour

  const q = "UPDATE expedition SET `sigChefEquipe` = ? WHERE `id` = ?";
  const values = [sigChefEquipe, categoryId];

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
    getAllexpedition , getByid  , createexpedition , deleteexpedition , updateexpedition ,  updateSig
}