import React, { useState, useEffect } from 'react';
import Logoo from "./logoo.png";
import ajouter from "./img/ajouter.png";
import voir from "./img/voir.jpg"; 
import imprimer from "./img/imprimer.jpg";
import { format } from 'date-fns';
import axios from 'axios';


const Temp= () => {
  const [categories, setCategories] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [formData, setFormData] = useState({
    id:"",
     date :"",
     val1:"",
     val2:"",
     val3:"",
     val4:"",
     val5:"",

     val6:"",
     val7:"",
     val8:"",
     val9:"",
     val10:"" ,
     val11:"",
     val12:"",
     val13:"",
     val14:"",
     val15:"", 
     val16:"",
     val17:"",
     val18:"",
     val19:"",
     val20:"",
     val21 :"",
     val22:"",
     val23:"",
     val24:"",

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
     obs20 :"",
     obs21 :"",
     obs22 :"",
     obs23 :"",
     obs24 :"",
     sig1:"",
     sig2:"",
     sig3:"",
     sig4:"",
     sig5:"",

     sig6:"",
     sig7:"",
     sig8:"",
     sig9:"",
     sig10:"", 
     sig11:"",
     sig12:"",
     sig13:"",
     sig14:"",
     sig15:"", 
     sig16:"",
     sig17:"",
     sig18:"",
     sig19:"",
     sig20:"",
     sig21:"",
     sig22:"",
     sig23:"",
     sig24:"",
     heure :"",
     anomalie :"",
     cause:"",
     corr:"",
     echeance:"",
     sig :"",


  });
  
  
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:4000/temp/allA");
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
    window.location.href = `/voirTemp?id=${id}`;
  };

   

  return (  
    <div>
   
      <table style={{ width: '100%', borderCollapse: "collapse" }}>
        <tbody>
          <tr>
            <td style={{ display: 'flex', justifyContent: 'space-between' }}> 
              <img src={Logoo} alt="Logoo" style={{ width: "120px", height: "60px" }} />   
              <h4 style={{ textAlign: 'center', margin: '0', flexGrow: '1', marginTop: '16px' }}> Toute les Fiche de Suivi de Température</h4>

              <input type="text" className="search-input"   style={{ marginTop: '11px' }}value={searchValue} onChange={handleSearchChange} placeholder="Rechercher Par Date..." />
            
             <button className="search-btn" onClick={handleFilter}>Rechercher</button>  

             

            </td> 
          </tr>
        </tbody>
      </table>
      <br/>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', marginBottom: '10px' }}>
        <div style={{ marginBottom: '10px', fontSize: '14px', padding: '5px', width: '150px' }} onClick={() => { window.location.href = "/rapportTemp"; }}>
          <img src={ajouter} alt="add" style={{ width: "40px", height: "40px", marginRight: "100px" }} /> 
         
        </div>   
      </div>
      <table style={{ borderCollapse: "collapse", padding: "80px", margin: "auto", width: "999px", marginTop: '40px' }}>
        <thead>
          <tr >
            <th style={tableHeaderStyle}>Date</th>
            <th style={tableHeaderStyle}>valeur:</th>
            <th style={tableHeaderStyle}>observation</th>
            <th style={tableHeaderStyle}>Signature CQH</th>

            <th style={tableHeaderStyle}>voir</th>
            <th style={tableHeaderStyle}>imprimer</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((vente, index) => (
            <tr key={index}>
               <td style={tableCellStyle}>{format(new Date(vente.date), 'dd-MM-yyyy')}</td>

              <td style={tableCellStyle}>{vente.val1}</td>
              <td style={tableCellStyle}>{vente.obs1}</td>
              <td style={tableCellStyle}>{vente.sig1}</td>
              <td style={tableCellStyle}>
              <div onClick={() => handleView(vente.id)}>
                  <img src={voir} alt="voir" style={{ width: "20px", height: "20px", marginRight: "5px" }} /> 
                </div>
              </td>
              
              <td style={tableCellStyle}>

              <img
  src={imprimer}
  alt="add"
  style={{ width: "20px", height: "20px", marginRight: "5px" }}
  onClick={() => {
    const formattedDate = vente.id; // Ajouter cette ligne pour initialiser formattedDate
    window.open(`/temp/print?id=${formattedDate}`, '_blank');
  }}
/>


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

export default Temp;
