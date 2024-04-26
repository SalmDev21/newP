import React, { useState, useEffect } from 'react';
import Logoo from "./logoo.png";
import ajouter from "./img/ajouter.png";
import voir from "./img/voir.jpg"; 
import imprimer from "./img/imprimer.jpg";
import { format } from 'date-fns';
import axios from 'axios';
import tik from "./img/tik.jpg";


const FSControle = () => {
  const [categories, setCategories] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [formData, setFormData] = useState({
     date :"",
     fourni :"",
     dateHeur :"",
     pro :"",
     numfich :"",
     numplom :"",
     lot :"",
     duree :"",
     qtep :"",
     qtekg :"",
     numfac :"",
     numcamion :"",
     origine :"",
     c1 :"",
     c2 :"",
     c3 :"",
     c4 :"",
     nc1 :"",
     nc2 :"",
     nc3 :"",

     nc4 :"",
     obs1 :"",
     obs2 :"",
     obs3 :"",
     obs4 :"",
     accepSous :"",
     accep :"",
     refus :"",
     obsAccS :"",
     obsAcc :"",

     obsRefus :"",
     sig :"",
     sigChef :"",
      age:"",
       nom:"", 
       ref:"",
        refb:""
  
  });
  
  
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:4000/controle/all");
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
    window.location.href = `/voircontrole?date=${date}`;
  };
  
  const handleVieww = (date) => {
    window.location.href = `/UpdateControle?date=${date}`;
  };

  return (  
    <div>
   
      <table style={{ width: '100%', borderCollapse: "collapse" }}>
        <tbody>
          <tr>
            <td style={{ display: 'flex', justifyContent: 'space-between' }}> 
              <img src={Logoo} alt="Logoo" style={{ width: "120px", height: "60px" }} />   
              <h4 style={{ textAlign: 'center', margin: '0', flexGrow: '1', marginTop: '16px' }}> Toute les fich de suivi de controle lors de la reception </h4>

              <input type="text" className="search-input"   style={{ marginTop: '11px' }}value={searchValue} onChange={handleSearchChange} placeholder="Rechercher Par Date..." />
            
             <button className="search-btn" onClick={handleFilter}>Rechercher</button>  

             

            </td> 
          </tr>
        </tbody>
      </table>
      <br/>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', marginBottom: '10px' }}>
        <div style={{ marginBottom: '10px', fontSize: '14px', padding: '5px', width: '150px' }} onClick={() => { window.location.href = "/rapportControle"; }}>
          <img src={ajouter} alt="add" style={{ width: "40px", height: "40px", marginRight: "100px" }} /> 
         
        </div>   
      </div>
      <table style={{ borderCollapse: "collapse", padding: "80px", margin: "auto", width: "999px", marginTop: '40px' }}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>Date</th>
            <th style={tableHeaderStyle}>Fournisseur</th>
            <th style={tableHeaderStyle}>Date et Heur de livraison:</th>
            <th style={tableHeaderStyle}>Designation du produit</th>
            <th style={tableHeaderStyle}>Num</th>
            <th style={tableHeaderStyle}>Action </th>
            
          </tr>
        </thead>
        <tbody>
          {categories.map((vente, index) => (
            <tr key={index}>
               <td style={tableCellStyle}>{format(new Date(vente.date), 'dd-MM-yyyy')}</td>

              <td style={tableCellStyle}>{vente. fourni}</td>
              <td style={tableCellStyle}>{vente.dateHeur}</td>
              <td style={tableCellStyle}>{vente.pro}</td>
              <td style={tableCellStyle}>{vente.numfich}</td>
              <td style={tableCellStyle}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>

                <div onClick={() => handleView(format(new Date(vente.date), 'dd-MM-yyyy'))}>
                  <img src={voir} alt="voir" style={{ width: "20px", height: "20px", marginRight: "5px" }} />   
                </div>
              
              
          <div>    
  <img
    src={imprimer}
    alt="add"
    style={{ width: "20px", height: "20px", marginRight: "5px" }}
    onClick={() => {
    const formattedDate = format(new Date(vente.date), 'dd-MM-yyyy');
    window.open(`/controle/printControle?date=${formattedDate}`, '_blank');

    }} />
</div> 

                <div onClick={() => handleVieww(format(new Date(vente.date), 'dd-MM-yyyy'))}>
                  <img src={tik} alt="voir" style={{ width: "20px", height: "20px", marginRight: "5px" }} /> 
                 
                </div>
              </div>
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

export default FSControle;
