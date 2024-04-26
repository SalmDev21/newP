import React, { useState, useEffect } from 'react';
import Logoo from "./logoo.png";
import ajouter from "./img/ajouter.png";
import voir from "./img/voir.jpg"; 
import imprimer from "./img/imprimer.jpg";
import { format } from 'date-fns';
import axios from 'axios';
import tik from "./img/tik.jpg";


const Nonpropre= () => {
  const [categories, setCategories] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [formData, setFormData] = useState({
   id:"",
     date:"",
     tem1:"",
     tem2:"",
     tem3:"",
     tem4:"",
     tem5:"",
     tem6:"",
     tem7:"",
     tem8:"",
     tem9:"",
     tem10:"",
     tem11:"",
     tem12:"",
     tem13:"",
     tem14:"",
     tem15:"",
     tem16:"",
     tem17:"",
     tem18:"",
     tem19:"",
     tem20:"",
     tem21:"",
     tem22:"",
     tem23:"",
     tem24:"",
     tem25:"",
     tem26:"",
     tem27:"",
     tem28:"",
     tem29:"",
     tem30:"",
     tem31:"",
     tem32:"",
     tem33:"",
     tem34:"",
     tem35:"",
     tem36:"",
     tem37:"",
     tem38:"",
     heure:"",
     ano:"",
     cause:"",
     corr:"",
     eche:"",
     sig:"",
     sigchef:"",
   


  });
  
  
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:4000/nonpropre/all");
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
    window.location.href = `/VoirNonpropre?id=${id}`;
  };

   
  const handleVieww = (id) => {
    window.location.href = `/UpdateNonp?id=${id}`;
  };


  return (  
    <div>
   
      <table style={{ width: '100%', borderCollapse: "collapse" }}>
        <tbody>
          <tr>
            <td style={{ display: 'flex', justifyContent: 'space-between' }}> 
              <img src={Logoo} alt="Logoo" style={{ width: "120px", height: "60px" }} />   
              <h4 style={{ textAlign: 'center', margin: '0', flexGrow: '1', marginTop: '16px' }}> Toute les  Fiche de Suivi de zone non-propre </h4>

              <input type="text" className="search-input"   style={{ marginTop: '11px' }}value={searchValue} onChange={handleSearchChange} placeholder="Rechercher Par Date..." />
            
             <button className="search-btn" onClick={handleFilter}>Rechercher</button>  

             

            </td> 
          </tr>
        </tbody>
      </table>
      <br/>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', marginBottom: '10px' }}>
        <div style={{ marginBottom: '10px', fontSize: '14px', padding: '5px', width: '150px' }} onClick={() => { window.location.href = "/RapportNonp"; }}>
          <img src={ajouter} alt="add" style={{ width: "40px", height: "40px", marginRight: "100px" }} /> 
         
        </div>   
      </div>
      <table style={{ borderCollapse: "collapse", padding: "80px", margin: "auto", width: "999px", marginTop: '40px' }}>
        <thead>
          <tr >
            <th style={tableHeaderStyle}>Date</th>
            <th style={tableHeaderStyle}>Evacuation de coproduit Temps1 :</th>
            <th style={tableHeaderStyle}>Reservation du sing temps 1 </th>
            <th style={tableHeaderStyle}>Quai dechet </th>

           
            <th style={tableHeaderStyle}>Action</th>

          </tr>
        </thead>
        <tbody>
          {categories.map((vente, index) => (
            <tr key={index}>
               <td style={tableCellStyle}>{format(new Date(vente.date), 'dd-MM-yyyy')}</td>

              <td style={tableCellStyle}>{vente.tem1}</td>
              <td style={tableCellStyle}>{vente.tem2}</td>
              <td style={tableCellStyle}>{vente.tem3}</td>
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
    window.open(`/NonPropre/PrintNonpropre?id=${formattedDate}`, '_blank');
  }}
/>
</div>
              <div onClick={() => handleVieww(vente.id)}>
                  <img src={tik} alt="voir" style={{ width: "20px", height: "20px", marginRight: "5px" }} /> 
              </div></div>
              </td>





            </tr>
          ))}
        </tbody>
      </table>
      <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
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

export default Nonpropre;
