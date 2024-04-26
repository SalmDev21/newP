const connection = require("../database")

const getAllCategories =  (req, res) => {
    let query = "SELECT * FROM `rapa`";
    connection.query(query, (err, data)=> {
      if(err) return res.status(500).json(err);
     // res.status(200).json(res)
      
      return res.status(200).json(data);
  
    })
  }


  const getByiid = (req, res) => { //ce route :  router.get("/:datee",abattageController.getByiid );

    const date = req.params.date;
    const query = "SELECT * FROM `rapa`  WHERE date = ?";
    connection.query(query, [date], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    });
  };

  const getByid = (req, res) => { // ce route : router.get("/:date",abattageController.getByid );
    const date = req.params.date;
    const query = "SELECT * FROM `rapa` WHERE DATE_FORMAT(date, '%d-%m-%Y') = ?";
    connection.query(query, [date], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    });
  };
  



  const createCategory = (req, res) => {
    const data = req.body;
    const q = "INSERT INTO rapa (`date`, `delai`, `delaiD`, `elec`, `elecD`, `test`, `testD`, `temp`, `tempD`, `plu`, `pluD`, `evi`, `eviD`, `carcase`, `carcaseD`, `vitesse`, `vitesseD`, `observation`, `accrochage`, `accrochageD`, `Saigne`, `SaigneD`, `evisceration`, `eviscerationD`, `manuelle`, `manuelleD`, `finition`, `finitionD`, `nettoyage`, `nettoyageD`, `pompe`, `pompeD`, `ressuage`, `ressuageD`, `dechet`, `dechetD`, `lavage`, `lavageD`, `autre`, `autreD`, `signature`) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?)";

    const values = [
      data.date,
      data.delai,
      data.delaiD,
      data.elec,
      data.elecD,
      data.test,
      data.testD,
      data.temp,
      data.tempD,
      data.plu,
      data.pluD,
      data.evi,
      data.eviD,
      data.carcase,
      data.carcaseD,
      data.vitesse,
      data.vitesseD,
      data.observation,
      data.accrochage,
      data.accrochageD,
      data.Saigne,
      data.SaigneD,
      data.evisceration,
      data.eviscerationD,
      data.manuelle,
      data.manuelleD,
      data.finition,
      data.finitionD,
      data.nettoyage,
      data.nettoyageD,
      data.pompe,
      data.pompeD,
      data.ressuage,
      data.ressuageD,
      data.dechet,
      data.dechetD,
      data.lavage,
      data.lavageD,
      data.autre,
      data.autreD,
      data.signature,
     
    ];

    connection.query(q, values, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("category has been created.");
    });
};












module.exports = {
    getAllCategories , getByid  , createCategory ,getByiid 
} 