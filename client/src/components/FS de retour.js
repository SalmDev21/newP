import React, { useState, useEffect } from 'react';
import Logoo from "./logoo.png";
import ajouter from "./img/ajouter.png";
import voir from "./img/voir.jpg"; 
import imprimer from "./img/imprimer.jpg";
import update from "./img/tik.jpg";

import { format } from 'date-fns';
import axios from 'axios';


const Retour= () => {
  const [categories, setCategories] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [formData, setFormData] = useState({
    id:"",
     date:"",
     nomli:"",
     nomcli:"",
     art1:"",
     art2:"",
     art3:"",
     art4:"",
     art5:"",
     qte1:"",
     qte2:"",
     qte3:"",
     qte4:"",
     qte5:"",
     cause1:"",
     cause2:"",
     cause3:"",
     cause4:"",
     cause5:"",
     lot1:"",
     lot2:"",
     lot3:"",
     lot4:"",
     lot5:"",
     asp1:"",
     asp2:"",
     asp3:"",
     asp4:"",
     asp5:"",
     acrion1:"",
     acrion2:"",
     acrion3:"",
     acrion4:"",
     acrion5:"",
     sigRq:"",
     sigRp:"",


  });
  
  
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:4000/retour/all");
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
    window.location.href = `/voirRetour?id=${id}`;
  };

   
  const handleVieww = (id) => {
    window.location.href = `/RetourUpdate?id=${id}`;
  };


  return (  
    <div>
   
      <table style={{ width: '100%', borderCollapse: "collapse" }}>
        <tbody>
          <tr>
            <td style={{ display: 'flex', justifyContent: 'space-between' }}> 
              <img src={Logoo} alt="Logoo" style={{ width: "120px", height: "60px" }} />   
              <h4 style={{ textAlign: 'center', margin: '0', flexGrow: '1', marginTop: '16px' }}> Toute les Fiche de Retour</h4>

              <input type="text" className="search-input"   style={{ marginTop: '11px' }}value={searchValue} onChange={handleSearchChange} placeholder="Rechercher Par Date..." />
            
             <button className="search-btn" onClick={handleFilter}>Rechercher</button>  

             

            </td> 
          </tr>
        </tbody>
      </table>
      <br/>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', marginBottom: '10px' }}>
        <div style={{ marginBottom: '10px', fontSize: '14px', padding: '5px', width: '150px' }} onClick={() => { window.location.href = "/rapportRetour"; }}>
          <img src={ajouter} alt="add" style={{ width: "40px", height: "40px", marginRight: "100px" }} /> 
         
        </div>   
      </div>
      <table style={{ borderCollapse: "collapse", padding: "80px", margin: "auto", width: "999px", marginTop: '40px' }}>
        <thead>
          <tr >
            <th style={tableHeaderStyle}>Date</th>
            <th style={tableHeaderStyle}>nom livreur:</th>
            <th style={tableHeaderStyle}>nom client</th>
            <th style={tableHeaderStyle}>article</th>

            
            <th style={tableHeaderStyle}>Action</th>

          </tr>
        </thead>
        <tbody>
          {categories.map((vente, index) => (
            <tr key={index}>
               <td style={tableCellStyle}>{format(new Date(vente.date), 'dd-MM-yyyy')}</td>

              <td style={tableCellStyle}>{vente.nomli}</td>
              <td style={tableCellStyle}>{vente.nomcli}</td>
              <td style={tableCellStyle}>{vente.art1}</td>
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
    window.open(`/retour/PrintRetour?id=${formattedDate}`, '_blank');
  }}
/>
</div>


              <div onClick={() => handleVieww(vente.id)}>
                  <img src={update} alt="voir" style={{ width: "20px", height: "20px", marginRight: "5px" }} /> 
                </div></div>
              </td>
              
             


            </tr>
          ))}
        </tbody>
      </table>

      <br/>
            <br/>
            <br/> <br/>
            <br/>
            <br/> <br/>
            <br/>
            <br/> <br/>
            
            
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

export default Retour;
