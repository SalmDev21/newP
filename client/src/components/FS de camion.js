import React, { useState, useEffect } from 'react';
import Logoo from "./logoo.png";
import ajouter from "./img/ajouter.png";
import voir from "./img/voir.jpg"; 
import imprimer from "./img/imprimer.jpg";
import { format } from 'date-fns';
import axios from 'axios';
import tik from "./img/tik.jpg";


const Camion= () => {
  const [categories, setCategories] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [formData, setFormData] = useState({
    id:"",
     date:"",
         numc1:"",
         numc2:"",
         numc3:"",
         numc4:"",
         numc5:"",
         liv1:"",
         liv2:"",
         liv3:"",
         liv4:"",
         liv5:"",
         c1:"",
         c2:"",
         c3:"",
         c4:"",
         c5:"",
         c6:"",
         c7:"",
         c8:"",
         c9:"",
         c10:"",
         c11:"",
         c12:"",
         c13:"",
         c14:"",
         c15:"",
         c16:"",
         c17:"",
         c18:"",
         c19:"",
         c20:"",
         c21:"",
         c22:"",
         c23:"",
         c24:"",
         c25:"",
         nc1:"",
         nc2:"",
         nc3:"",
         nc4:"",
         nc6:"",
         nc7:"",
         nc8:"",
         nc9:"",
         nc10:"",
         nc11:"",
         nc12:"",
         nc13:"",
         nc14:"",
         nc15:"",
         nc16:"",
         nc17:"",
         nc18:"",
         nc19:"",
         nc20:"",
         nc21:"",
         nc22:"",
         nc23:"",
         nc24:"",
         nc25:"",
         obs1:"",
         obs2:"",
         obs3:"",
         obs4:"",
         obs5:"",
         obs6:"",
         obs7:"",
         obs8:"",
         obs9:"",
         obs10:"",
         obs11:"",
         obs12:"",
         obs13:"",
         obs14:"",
         obs15:"",
         obs16:"",
         obs17:"",
         obs18:"",
         obs19:"",
         obs20:"",
         obs21:"",
         obs22:"",
         obs23:"",
         obs24:"",
         obs25:"",
         sig1:"",
         sig2:"",
         sig3:"",
         sig4:"",
         sig5:"",
         sigchef:"",


  });
  

  
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:4000/camion/all");
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
    window.location.href = `/VoirCamion?id=${id}`;
  };

   
  const handleVieww = (id) => {
    window.location.href = `/UpdateCamion?id=${id}`;
  };

  return (  
    <div>
   
      <table style={{ width: '100%', borderCollapse: "collapse" }}>
        <tbody>
          <tr>
            <td style={{ display: 'flex', justifyContent: 'space-between' }}> 
              <img src={Logoo} alt="Logoo" style={{ width: "120px", height: "60px" }} />   
              <h4 style={{ textAlign: 'center', margin: '0', flexGrow: '1', marginTop: '16px' }}> CHECK LIST DU CAMION </h4>

              <input type="text" className="search-input"   style={{ marginTop: '11px' }}value={searchValue} onChange={handleSearchChange} placeholder="Rechercher Par Date..." />
            
             <button className="search-btn" onClick={handleFilter}>Rechercher</button>  

             

            </td> 
          </tr>
        </tbody>
      </table>
      <br/>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', marginBottom: '10px' }}>
        <div style={{ marginBottom: '10px', fontSize: '14px', padding: '5px', width: '150px' }} onClick={() => { window.location.href = "/rapportCamion"; }}>
          <img src={ajouter} alt="add" style={{ width: "40px", height: "40px", marginRight: "100px" }} /> 
         
        </div>   
      </div>
      <table style={{ borderCollapse: "collapse", padding: "80px", margin: "auto", width: "999px", marginTop: '40px' }}>
        <thead>
          <tr >
            <th style={tableHeaderStyle}>Date</th>
            <th style={tableHeaderStyle}>num camion:</th>
            <th style={tableHeaderStyle}>livreur</th>

           
            <th style={tableHeaderStyle}>Action</th>

          </tr>
        </thead>
        <tbody>
          {categories.map((vente, index) => (
            <tr key={index}>
               <td style={tableCellStyle}>{format(new Date(vente.date), 'dd-MM-yyyy')}</td>

              <td style={tableCellStyle}>{vente.numc1}</td>
              <td style={tableCellStyle}>{vente.liv1}</td>
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
    window.open(`/camion/PrintCamion?id=${formattedDate}`, '_blank');
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

export default Camion;
