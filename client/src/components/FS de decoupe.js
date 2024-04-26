import React, { useState, useEffect } from 'react';
import Logoo from "./logoo.png";
import ajouter from "./img/ajouter.png";
import voir from "./img/voir.jpg"; 
import imprimer from "./img/imprimer.jpg";
import { format } from 'date-fns';
import axios from 'axios';
import tik from "./img/tik.jpg";


const Decoupe= () => {
  const [categories, setCategories] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [formData, setFormData] = useState({
    id:"",
     date:"", 
     chef:"", 
     art:"", 
     qte:"",  
     date1:"", 
     lot:"", 
     nb1:"", 
     nb2:"", 
     nb3:"", 
     nb4:"", 
     nb5:"", 
     nb6:"", 
     nb7:"", 
     poi1:"", 
     poi2:"", 
     poi3:"", 
     poi4:"", 
     poi5:"", 
     poi6:"", 
     poi7:"", 
     lot1:"", 
     lot2:"", 
     lot3:"", 
     lot4:"", 
     lot5:"", 
     lot6:"", 
     lot7:"", 
     qte1:"", 
     qte2:"", 
     qte3:"", 
     qte4:"", 
     qte5:"", 
     qte6:"", 
     qte7:"", 
     quali1:"", 
     quali2:"", 
     quali3:"", 
     quali4:"", 
     quali5:"", 
     quali6:"", 
     quali7:"", 
     corr1:"", 
     corr2:"", 
     corr3:"", 
     corr4:"", 
     corr5:"", 
     corr6:"", 
    corr7:"", 
    nom1:"", 
    nom2:"", 
    nom3:"", 
    nom4:"", 
    nom5:"", 
    nom6:"", 
    nom7:"", 
    nom8:"", 
    nom9:"", 
    nom10:"", 
    nom11:"", 
    nom12:"", 
    ren1:"", 
    ren2:"", 
    ren3:"", 
    ren4:"", 
    ren5:"", 
    ren6:"", 
    ren7:"", 
    ren8:"", 
    ren9:"", 
    ren10:"", 
    ren11:"", 
    ren12:"", 
    sig1:"", 
    sig2:"", 
    sigchef:""


  });
  

  
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:4000/decoupe/all");
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

  

  const handleView = (id) => {
    window.location.href = `/VoirDecoupe?id=${id}`;
  };

   
  const handleVieww = (id) => {
    window.location.href = `/UpdateDecoupe?id=${id}`;
  };

  return (  
    <div>
   
      <table style={{ width: '100%', borderCollapse: "collapse" }}>
        <tbody>
          <tr>
            <td style={{ display: 'flex', justifyContent: 'space-between' }}> 
              <img src={Logoo} alt="Logoo" style={{ width: "120px", height: "60px" }} />   
              <h4 style={{ textAlign: 'center', margin: '0', flexGrow: '1', marginTop: '16px' }}> Rapport Decoupe Poulet Frais </h4>

              <input type="text" className="search-input"   style={{ marginTop: '11px' }}value={searchValue} onChange={handleSearchChange} placeholder="Rechercher Par Date..." />
            
             <button className="search-btn" onClick={handleFilter}>Rechercher</button>  

             

            </td> 
          </tr>
        </tbody>
      </table>
      <br/>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', marginBottom: '10px' }}>
        <div style={{ marginBottom: '10px', fontSize: '14px', padding: '5px', width: '150px' }} onClick={() => { window.location.href = "/RapportDecoupe"; }}>
          <img src={ajouter} alt="add" style={{ width: "40px", height: "40px", marginRight: "100px" }} /> 
         
        </div>   
      </div>
      <table style={{ borderCollapse: "collapse", padding: "80px", margin: "auto", width: "999px", marginTop: '40px' }}>
        <thead>
          <tr >
            <th style={tableHeaderStyle}>Date</th>
            <th style={tableHeaderStyle}>chef production:</th>
            <th style={tableHeaderStyle}>article</th>
            <th style={tableHeaderStyle}>quntite</th>
            <th style={tableHeaderStyle}>Action</th>

          </tr>
        </thead>
        <tbody>
          {categories.map((vente, index) => (
            <tr key={index}>
               <td style={tableCellStyle}>{format(new Date(vente.date), 'dd-MM-yyyy')}</td>

              <td style={tableCellStyle}>{vente.chef}</td>
              <td style={tableCellStyle}>{vente.art}</td>
              <td style={tableCellStyle}>{vente.qte}</td>

              <td style={tableCellStyle}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>

              <div onClick={() => handleView(vente.id)}>
                  <img src={voir} alt="voir" style={{ width: "20px", height: "20px", marginRight: "5px" }} /> 
                </div>
<div>
              <img
  src={imprimer} 
  alt="add"
  style={{ width: "20px", height: "20px", marginRight: "5px" }}
  onClick={() => {
    const formattedDate = vente.id; // Ajouter cette ligne pour initialiser formattedDate
    window.open(`/decoupe/PrintDecoupe?id=${formattedDate}`, '_blank');
  }}
/>


</div>              <div onClick={() => handleVieww(vente.id)}>
                  <img src={tik} alt="voir" style={{ width: "20px", height: "20px", marginRight: "5px" }} /> 
                </div>
                </div>  
</td>
            </tr>
          ))}
        </tbody>
      </table>

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div> 
  );
}

const tableHeaderStyle = {
    border: "1px solid #dddddd",
    textAlign: "left",
    padding: "8px",
    padding: "8px",
    textAlign: "left",
    fontSize: "15px",
    backgroundColor: "#f2f2f2",
  
  };
  
  const tableCellStyle = {
    border: "1px solid #dddddd",
    textAlign: "left",
    padding: "8px",
  };

export default Decoupe ;
