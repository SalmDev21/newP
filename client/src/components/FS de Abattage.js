import React, { useState, useEffect } from 'react';
import Logoo from "./logoo.png";
import ajouter from "./img/ajouter.png";
import voir from "./img/voir.jpg"; 
import imprimer from "./img/imprimer.jpg";
import { format } from 'date-fns';
import axios from 'axios';


const FS = () => {
  const [categories, setCategories] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [formData, setFormData] = useState({
    date:"",
    delai:"",
    delaiD:"",
    elec:"",
    elecD:"", 
    test:"",
    testD:"",
    temp:"",
    tempD:"",
    plu:"",
    pluD:"",
    evi:"",
    eviD:"",
    carcase:"",
    carcaseD:"",
    vitesse:"",
    vitesseD:"",
    observation:"",
    accrochage:"",
    accrochageD:"",
    Saigne:"",
    SaigneD:"",
    evisceration:"",
    eviscerationD:"",
    manuelle:"",
    manuelleD:"",
    finition:"",
    finitionD:"",
    nettoyage:"",
    nettoyageD:"",
    pompe:"",
    pompeD:"",
    ressuage:"",
    ressuageD:"",
    dechet:"",
    dechetD:"",
    lavage:"",
    lavageD:"",
    autre:"",
    autreD:"",
    signature:""
  });
  
  
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:4000/abattage/all");
      setCategories(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des catégories:", error);
    }
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
    if (e.target.value === "") {
      fetchCategories(); 
    }
  };

  const handleFilter = () => {
    const filtered = categories.filter(item =>
      format(new Date(item.date), 'dd-MM-yyyy').includes(searchValue)
    );
    setCategories(filtered);
  };

  

  const handleView = (date) => {
    window.location.href = `/voir?date=${date}`;
  };
  

  return (  
    <div>
   
      <table style={{ width: '100%', borderCollapse: "collapse" }}>
        <tbody>
          <tr>
            <td style={{ display: 'flex', justifyContent: 'space-between' }}> 
              <img src={Logoo} alt="Logoo" style={{ width: "120px", height: "60px" }} />   
              <h4 style={{ textAlign: 'center', margin: '0', flexGrow: '1', marginTop: '16px' }}> Toute les Rapports Abattage</h4>

              <input type="text" className="search-input"   style={{ marginTop: '11px' }}value={searchValue} onChange={handleSearchChange} placeholder="Rechercher Par Date..." />
            
             <button className="search-btn" onClick={handleFilter}>Rechercher</button>  

             

            </td> 
          </tr>
        </tbody>
      </table>
      <br/>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', marginBottom: '10px' }}>
        <div style={{ marginBottom: '10px', fontSize: '14px', padding: '5px', width: '150px' }} onClick={() => { window.location.href = "/rapportA"; }}>
          <img src={ajouter} alt="add" style={{ width: "40px", height: "40px", marginRight: "100px" }} /> 
         
        </div>   
      </div>
      <table style={{ borderCollapse: "collapse", padding: "80px", margin: "auto", width: "999px", marginTop: '40px' }}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>Date</th>
            <th style={tableHeaderStyle}>Delai d'attente sur quai de reception</th>
            <th style={tableHeaderStyle}>Electronarcose :</th>
            <th style={tableHeaderStyle}>test de reveille</th>
            <th style={tableHeaderStyle}>temperature d'echaudage</th>
            <th style={tableHeaderStyle}>voir</th>
            <th style={tableHeaderStyle}>imprimer</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((vente, index) => (
            <tr key={index}>
               <td style={tableCellStyle}>{format(new Date(vente.date), 'dd-MM-yyyy')}</td>

              <td style={tableCellStyle}>{vente.elec}</td>
              <td style={tableCellStyle}>{vente.test}</td>
              <td style={tableCellStyle}>{vente.temp}</td>
              <td style={tableCellStyle}>{vente.plu}</td>
              <td style={tableCellStyle}>
                <div onClick={() => handleView(format(new Date(vente.date), 'dd-MM-yyyy'))}>
                  <img src={voir} alt="voir" style={{ width: "20px", height: "20px", marginRight: "5px" }} /> 
                 
                </div>
              </td>
              
              <td style={tableCellStyle}>
  <img
    src={imprimer}
    alt="add"
    style={{ width: "20px", height: "20px", marginRight: "5px" }}
    onClick={() => {
      const formattedDate = format(new Date(vente.date), 'dd-MM-yyyy');
      window.open(`/abattage/print?date=${formattedDate}`, '_blank');
    }}
  />
</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div> 
  );
}

const tableHeaderStyle = {
  border: "1px solid #dddddd",
  textAlign: "left",
  padding: "8px",
  fontSize: "10px",
};

const tableCellStyle = {
  border: "1px solid #dddddd",
  textAlign: "left",
  padding: "8px",
};

export default FS;
