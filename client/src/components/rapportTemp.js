import React, { useState, useEffect, useRef } from "react";
import axios from "axios";


import "../index"; 
import Logoo from "./logoo.png";
import "../index.css";

import ContentEditable from 'react-contenteditable';


const RapportTemp = () => {
  const [categories, setCategories] = useState([]);

  const [formData, setFormData] = useState({
 
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
<ContentEditable
  html={formData.date}
  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
/>

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:4000/temp/allA");
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleCreatecateg = async () => {
    try {
      console.log("FormData:", formData);
      await axios.post("http://localhost:4000/temp/createA", formData);
      alert("bien enrigistrer !");
      
      setFormData({

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
      fetchCategories();
    } catch (error) {
      console.error("Error creating categ:", error);
    }
  };
  

  const [contentEditableData, setContentEditableData] = useState({
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
  
  // État séparé pour le contenu géré par React
  const [reactManagedData, setReactManagedData] = useState({
    // champs gérés par React
  });
  
  // Gérez les changements pour les champs `contentEditable`
  const handleContentEditableChange = (fieldName, newValue) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: newValue,
    }));
  };
  




  
  

  const dateSansTemps = formData.date ? formData.date.split("T")[0] : "";



  return (
   // <form onSubmit={handleSubmit} method="post" action="fich.js">


    <div className="all-categories">
          
              <table style={{ width: '100%' }}>
        <tbody>
          <tr>
            <td style={{ display: 'flex', justifyContent: 'space-between' }}>
                      {/* Logo avec taille réduite */}
                      <img src={Logoo} alt="Logoo" style={{ width: "120px", height: "60px" }} />
                      {/* Titre aligné au centre */}
                      <h2 style={{ textAlign: 'center', margin: '0', flexGrow: '1', marginTop: '10px' }}> Fich de Suivi de Température </h2>
                      {/* Input de date aligné à droite */}
                      <label type="text"  style={{ width: '150px', textAlign: 'right', margin: '0' }}>  </label> 
                    </td>
                  </tr>
                </tbody>
              </table>

              <br/>







      <div style={{ width: "100%" , marginLeft:'1100px' }}>
    Date:{" "}   
    <input
      type="date"
      value={dateSansTemps}
      onChange={(e) => handleContentEditableChange("date", e.target.value)}
      className="editable-content"
     
      placeholder='dd-mm-yyyy'
    />
  </div>

<p style={{ 
  margin: "auto",
  width: "500px",
  marginTop: "10px",
  fontSize: "19px",
  textAlign: "center",
  color: "black", // Couleur rouge
 
}}> Salle de Production (1)</p>

<p style={{
  margin: "auto",
  width: "999px",
  marginTop: "10px",
  fontSize: "19px",
  textAlign: "center",
  color: "black", // Couleur rouge
 
}}> Température requise : 10 C limite critique : T = 10 ± 2°C</p>

<p style={{
  margin: "auto",
  width: "999px",
  marginTop: "10px",
  fontSize: "15px",
  textAlign: "center",
  color: "black", // Couleur rouge
 
}}>critéres d'évaluation : C = conforme. NC= Non-Conforme mais une action corrective a été réacliser immediatemenet </p>


<table style={{ borderCollapse: "collapse", padding: "80px", margin: "auto", width: "999px", marginBottom: '90px' }}>
               
                <tr style={{ textAlign: 'center'  , fontSize: '18px' , width: '20%'}}>
                    <th>Heure de contrôle</th>
                    <th>Valeur</th>
                    <th>Observations</th>
                    <th>Signature CQH</th>
                </tr>

                <tr > 
                        <td style={{ textAlign: 'center'  , fontSize: '18px'}}>  <p  style={{ fontSize: '13px' , textAlign:'center ',  margin:'auto' }}/>1:00 </td>

                        <td style={{ width: '20%' }}> 
                        <ContentEditable html={formData.val1} onChange={(e) => handleContentEditableChange("val1", e.target.value)} class="place" placeholder=" Saisie ici" 
                         /> 
                        
                        </td>
                        <td td style={{ width: '25%' }}> 
                        <ContentEditable html={formData.obs1} onChange={(e) => handleContentEditableChange("obs1", e.target.value)}   class="place" placeholder=" Saisie ici"  
                         /> 
                        
                        </td>
                        <td td style={{ width: '23%' }}> 
                        <ContentEditable html={formData.sig1} onChange={(e) => handleContentEditableChange("sig1", e.target.value)} class="place" placeholder=" Saisie ici"  
                        /> 
                        
                        </td>
                </tr>

                <tr> 
                        <td style={{ textAlign: 'center'  , fontSize: '18px'}}>  <p style={{ fontSize: '13px' , textAlign:'center ',  margin:'auto' }}/>2:00 </td>

                        <td> 
                        <ContentEditable html={formData.val2} onChange={(e) => handleContentEditableChange("val2", e.target.value)} class="place" placeholder=" Saisie ici"  
                        /> 
                        
                        </td>
                        <td> 
                        <ContentEditable html={formData.obs2} onChange={(e) => handleContentEditableChange("obs2", e.target.value)} class="place" placeholder=" Saisie ici"  
                         /> 
                        
                        </td>
                        <td> 
                        <ContentEditable html={formData.sig2} onChange={(e) => handleContentEditableChange("sig2", e.target.value)} class="place" placeholder=" Saisie ici"  
                        /> 
                        
                        </td>
                </tr> <tr> 
                        <td style={{ textAlign: 'center'  , fontSize: '18px'}}>  <p style={{ fontSize: '13px' , textAlign:'center ',  margin:'auto' }}/>3:00 </td>

                        <td> 
                        <ContentEditable html={formData.val3} onChange={(e) => handleContentEditableChange("val3", e.target.value)} class="place" placeholder=" Saisie ici"  
                        /> 
                        
                        </td>
                        <td> 
                        <ContentEditable html={formData.obs3} onChange={(e) => handleContentEditableChange("obs3", e.target.value)} class="place" placeholder=" Saisie ici"  
                         /> 
                        
                        </td>
                        <td> 
                        <ContentEditable html={formData.sig3} onChange={(e) => handleContentEditableChange("sig3", e.target.value)} class="place" placeholder=" Saisie ici"  
                        /> 
                        
                        </td>
                </tr>
                <tr> 
                        <td style={{ textAlign: 'center'  , fontSize: '18px'}}>  <p style={{ fontSize: '13px' , textAlign:'center ',  margin:'auto' }}/>4:00 </td>

                        <td> 
                        <ContentEditable html={formData.val4} onChange={(e) => handleContentEditableChange("val4", e.target.value)} class="place" placeholder=" Saisie ici"  
                        /> 
                        
                        </td>
                        <td> 
                        <ContentEditable html={formData.obs4} onChange={(e) => handleContentEditableChange("obs4", e.target.value)} class="place" placeholder=" Saisie ici"  
                         /> 
                        
                        </td>
                        <td> 
                        <ContentEditable html={formData.sig4} onChange={(e) => handleContentEditableChange("sig4", e.target.value)} class="place" placeholder=" Saisie ici" 
                        /> 
                        
                        </td>
                </tr> <tr> 
                        <td style={{ textAlign: 'center'  , fontSize: '18px'}}>  <p style={{ fontSize: '13px' , textAlign:'center ',  margin:'auto' }}/>5:00 </td>

                        <td> 
                        <ContentEditable html={formData.val5} onChange={(e) => handleContentEditableChange("val5", e.target.value)} class="place" placeholder=" Saisie ici"  
                        /> 
                        
                        </td>
                        <td> 
                        <ContentEditable html={formData.obs5} onChange={(e) => handleContentEditableChange("obs5", e.target.value)} class="place" placeholder=" Saisie ici"  
                         /> 
                        
                        </td>
                        <td> 
                        <ContentEditable html={formData.sig5} onChange={(e) => handleContentEditableChange("sig5", e.target.value)} class="place" placeholder=" Saisie ici"  
                        /> 
                        
                        </td>
                </tr> <tr> 
                        <td style={{ textAlign: 'center'  , fontSize: '18px'}}>  <p style={{ fontSize: '13px' , textAlign:'center ',  margin:'auto' }}/>6:00 </td>

                        <td> 
                        <ContentEditable html={formData.val6} onChange={(e) => handleContentEditableChange("val6", e.target.value)} class="place" placeholder=" Saisie ici"  
                        /> 
                        
                        </td>
                        <td> 
                        <ContentEditable html={formData.obs6} onChange={(e) => handleContentEditableChange("obs6", e.target.value)} class="place" placeholder=" Saisie ici"  
                         /> 
                        
                        </td>
                        <td> 
                        <ContentEditable html={formData.sig6} onChange={(e) => handleContentEditableChange("sig6", e.target.value)} class="place" placeholder=" Saisie ici"  
                        /> 
                        
                        </td>
                </tr> <tr> 
                        <td style={{ textAlign: 'center'  , fontSize: '18px'}}>  <p style={{ fontSize: '13px' , textAlign:'center ',  margin:'auto' }}/>7:00 </td>

                        <td> 
                        <ContentEditable html={formData.val7} onChange={(e) => handleContentEditableChange("val7", e.target.value)} class="place" placeholder=" Saisie ici"  
                        /> 
                        
                        </td>
                        <td> 
                        <ContentEditable html={formData.obs7} onChange={(e) => handleContentEditableChange("obs7", e.target.value)} class="place" placeholder=" Saisie ici"  
                         /> 
                        
                        </td>
                        <td> 
                        <ContentEditable html={formData.sig7} onChange={(e) => handleContentEditableChange("sig7", e.target.value)} class="place" placeholder=" Saisie ici"  
                        /> 
                        
                        </td>
                </tr> <tr> 
                        <td style={{ textAlign: 'center'  , fontSize: '18px'}}>  <p style={{ fontSize: '13px' , textAlign:'center ',  margin:'auto' }}/>8:00 </td>

                        <td> 
                        <ContentEditable html={formData.val8} onChange={(e) => handleContentEditableChange("val8", e.target.value)} class="place" placeholder=" Saisie ici"  
                        /> 
                        
                        </td>
                        <td> 
                        <ContentEditable html={formData.obs8} onChange={(e) => handleContentEditableChange("obs8", e.target.value)} class="place" placeholder=" Saisie ici"  
                         /> 
                        
                        </td>
                        <td> 
                        <ContentEditable html={formData.sig8} onChange={(e) => handleContentEditableChange("sig8", e.target.value)} class="place" placeholder=" Saisie ici"  
                        /> 
                        
                        </td>
                </tr> <tr> 
                        <td style={{ textAlign: 'center'  , fontSize: '18px'}}>  <p style={{ fontSize: '13px' , textAlign:'center ',  margin:'auto' }}/>9:00 </td>

                        <td> 
                        <ContentEditable html={formData.val9} onChange={(e) => handleContentEditableChange("val9", e.target.value)} class="place" placeholder=" Saisie ici"  
                        /> 
                        
                        </td>
                        <td> 
                        <ContentEditable html={formData.obs9} onChange={(e) => handleContentEditableChange("obs9", e.target.value)} class="place" placeholder=" Saisie ici"  
                         /> 
                        
                        </td>
                        <td> 
                        <ContentEditable html={formData.sig9} onChange={(e) => handleContentEditableChange("sig9", e.target.value)} class="place" placeholder=" Saisie ici"  
                        /> 
                        
                        </td>
                </tr> <tr> 
                        <td style={{ textAlign: 'center'  , fontSize: '18px'}}>  <p style={{ fontSize: '13px' , textAlign:'center ',  margin:'auto' }}/>10:00 </td>

                        <td> 
                        <ContentEditable html={formData.val10} onChange={(e) => handleContentEditableChange("val10", e.target.value)} class="place" placeholder=" Saisie ici"  
                        /> 
                        
                        </td>
                        <td> 
                        <ContentEditable html={formData.obs10} onChange={(e) => handleContentEditableChange("obs10", e.target.value)} class="place" placeholder=" Saisie ici"  
                         /> 
                        
                        </td>
                        <td> 
                        <ContentEditable html={formData.sig10} onChange={(e) => handleContentEditableChange("sig10", e.target.value)} class="place" placeholder=" Saisie ici"  
                        /> 
                        
                        </td>
                </tr> <tr> 
                        <td style={{ textAlign: 'center'  , fontSize: '18px'}}>  <p style={{ fontSize: '13px' , textAlign:'center ',  margin:'auto' }}/>11:00 </td>

                        <td> 
                        <ContentEditable html={formData.val11} onChange={(e) => handleContentEditableChange("val11", e.target.value)} class="place" placeholder=" Saisie ici"  
                        /> 
                        
                        </td>
                        <td> 
                        <ContentEditable html={formData.obs11} onChange={(e) => handleContentEditableChange("obs11", e.target.value)} class="place" placeholder=" Saisie ici"  
                         /> 
                        
                        </td>
                        <td> 
                        <ContentEditable html={formData.sig11} onChange={(e) => handleContentEditableChange("sig11", e.target.value)} class="place" placeholder=" Saisie ici"  
                        /> 
                        
                        </td>
                </tr> <tr> 
                        <td style={{ textAlign: 'center'  , fontSize: '18px'}}>  <p style={{ fontSize: '13px' , textAlign:'center ',  margin:'auto' }}/>12:00 </td>

                        <td> 
                        <ContentEditable html={formData.val12} onChange={(e) => handleContentEditableChange("val12", e.target.value)} class="place" placeholder=" Saisie ici"  
                        /> 
                        
                        </td>
                        <td> 
                        <ContentEditable html={formData.obs12} onChange={(e) => handleContentEditableChange("obs12", e.target.value)} class="place" placeholder=" Saisie ici"  
                         /> 
                        
                        </td>
                        <td> 
                        <ContentEditable html={formData.sig12} onChange={(e) => handleContentEditableChange("sig12", e.target.value)} class="place" placeholder=" Saisie ici"  
                        /> 
                        
                        </td>
                </tr> <tr> 
                        <td style={{ textAlign: 'center'  , fontSize: '18px'}}>  <p style={{ fontSize: '13px' , textAlign:'center ',  margin:'auto' }}/>13:00 </td>

                        <td> 
                        <ContentEditable html={formData.val13} onChange={(e) => handleContentEditableChange("val13", e.target.value)} class="place" placeholder=" Saisie ici"  
                        /> 
                        
                        </td>
                        <td> 
                        <ContentEditable html={formData.obs13} onChange={(e) => handleContentEditableChange("obs13", e.target.value)} class="place" placeholder=" Saisie ici"  
                         /> 
                        
                        </td>
                        <td> 
                        <ContentEditable html={formData.sig13} onChange={(e) => handleContentEditableChange("sig13", e.target.value)} class="place" placeholder=" Saisie ici"  
                        /> 
                        
                        </td>
                </tr> <tr> 
                        <td style={{ textAlign: 'center'  , fontSize: '18px'}}>  <p style={{ fontSize: '13px' , textAlign:'center ',  margin:'auto' }}/>14:00 </td>

                        <td> 
                        <ContentEditable html={formData.val14} onChange={(e) => handleContentEditableChange("val14", e.target.value)} class="place" placeholder=" Saisie ici"  
                        /> 
                        
                        </td>
                        <td> 
                        <ContentEditable html={formData.obs14} onChange={(e) => handleContentEditableChange("obs14", e.target.value)} class="place" placeholder=" Saisie ici"  
                         /> 
                        
                        </td>
                        <td> 
                        <ContentEditable html={formData.sig14} onChange={(e) => handleContentEditableChange("sig14", e.target.value)} class="place" placeholder=" Saisie ici"  
                        /> 
                        
                        </td>
                </tr> <tr> 
                        <td style={{ textAlign: 'center'  , fontSize: '18px'}}>  <p style={{ fontSize: '13px' , textAlign:'center ',  margin:'auto' }}/>15:00 </td>

                        <td> 
                        <ContentEditable html={formData.val15} onChange={(e) => handleContentEditableChange("val15", e.target.value)} class="place" placeholder=" Saisie ici"  
                        /> 
                        
                        </td>
                        <td> 
                        <ContentEditable html={formData.obs15} onChange={(e) => handleContentEditableChange("obs15", e.target.value)} class="place" placeholder=" Saisie ici"  
                         /> 
                        
                        </td>
                        <td> 
                        <ContentEditable html={formData.sig15} onChange={(e) => handleContentEditableChange("sig15", e.target.value)} class="place" placeholder=" Saisie ici"  
                        /> 
                        
                        </td>
                </tr> <tr> 
                        <td style={{ textAlign: 'center'  , fontSize: '18px'}}>  <p style={{ fontSize: '13px' , textAlign:'center ',  margin:'auto' }}/>16:00 </td>

                        <td> 
                        <ContentEditable html={formData.val16} onChange={(e) => handleContentEditableChange("val16", e.target.value)} class="place" placeholder=" Saisie ici"  
                        /> 
                        
                        </td>
                        <td> 
                        <ContentEditable html={formData.obs16} onChange={(e) => handleContentEditableChange("obs16", e.target.value)} class="place" placeholder=" Saisie ici"  
                         /> 
                        
                        </td>
                        <td> 
                        <ContentEditable html={formData.sig16} onChange={(e) => handleContentEditableChange("sig16", e.target.value)} class="place" placeholder=" Saisie ici"  
                        /> 
                        
                        </td>
                </tr> <tr> 
                        <td style={{ textAlign: 'center'  , fontSize: '18px'}}>  <p style={{ fontSize: '13px' , textAlign:'center ',  margin:'auto' }}/>17:00 </td>

                        <td> 
                        <ContentEditable html={formData.val17} onChange={(e) => handleContentEditableChange("val17", e.target.value)} class="place" placeholder=" Saisie ici"  
                        /> 
                        
                        </td>
                        <td> 
                        <ContentEditable html={formData.obs17} onChange={(e) => handleContentEditableChange("obs17", e.target.value)} class="place" placeholder=" Saisie ici"  
                         /> 
                        
                        </td>
                        <td> 
                        <ContentEditable html={formData.sig17} onChange={(e) => handleContentEditableChange("sig17", e.target.value)} class="place" placeholder=" Saisie ici"  
                        /> 
                        
                        </td>
                </tr> <tr> 
                        <td style={{ textAlign: 'center'  , fontSize: '18px'}}>  <p style={{ fontSize: '13px' , textAlign:'center ',  margin:'auto' }}/>18:00 </td>

                        <td> 
                        <ContentEditable html={formData.val18} onChange={(e) => handleContentEditableChange("val18", e.target.value)} class="place" placeholder=" Saisie ici"  
                        /> 
                        
                        </td>
                        <td> 
                        <ContentEditable html={formData.obs18} onChange={(e) => handleContentEditableChange("obs18", e.target.value)} class="place" placeholder=" Saisie ici"  
                         /> 
                        
                        </td>
                        <td> 
                        <ContentEditable html={formData.sig18} onChange={(e) => handleContentEditableChange("sig18", e.target.value)} class="place" placeholder=" Saisie ici"  
                        /> 
                        
                        </td>
                </tr> <tr> 
                        <td style={{ textAlign: 'center'  , fontSize: '18px'}}>  <p style={{ fontSize: '13px' , textAlign:'center ',  margin:'auto' }}/>19:00 </td>

                        <td> 
                        <ContentEditable html={formData.val19} onChange={(e) => handleContentEditableChange("val19", e.target.value)} class="place" placeholder=" Saisie ici"  
                        /> 
                        
                        </td>
                        <td> 
                        <ContentEditable html={formData.obs19} onChange={(e) => handleContentEditableChange("obs19", e.target.value)} class="place" placeholder=" Saisie ici"  
                         /> 
                        
                        </td>
                        <td> 
                        <ContentEditable html={formData.sig19} onChange={(e) => handleContentEditableChange("sig19", e.target.value)} class="place" placeholder=" Saisie ici"  
                        /> 
                        
                        </td>
                </tr> <tr> 
                        <td style={{ textAlign: 'center'  , fontSize: '18px'}}>  <p style={{ fontSize: '13px' , textAlign:'center ',  margin:'auto' }}/>20:00 </td>

                        <td> 
                        <ContentEditable html={formData.val20} onChange={(e) => handleContentEditableChange("val20", e.target.value)} class="place" placeholder=" Saisie ici"  
                        /> 
                        
                        </td>
                        <td> 
                        <ContentEditable html={formData.obs20} onChange={(e) => handleContentEditableChange("obs20", e.target.value)} class="place" placeholder=" Saisie ici"  
                         /> 
                        
                        </td>
                        <td> 
                        <ContentEditable html={formData.sig20} onChange={(e) => handleContentEditableChange("sig20", e.target.value)} class="place" placeholder=" Saisie ici"  
                        /> 
                        
                        </td>
                </tr> <tr> 
                        <td style={{ textAlign: 'center'  , fontSize: '18px'}}>  <p style={{ fontSize: '13px' , textAlign:'center ',  margin:'auto' }}/>21:00 </td>

                        <td> 
                        <ContentEditable html={formData.val21} onChange={(e) => handleContentEditableChange("val21", e.target.value)} class="place" placeholder=" Saisie ici"  
                        /> 
                        
                        </td>
                        <td> 
                        <ContentEditable html={formData.obs21} onChange={(e) => handleContentEditableChange("obs21", e.target.value)} class="place" placeholder=" Saisie ici"  
                         /> 
                        
                        </td>
                        <td> 
                        <ContentEditable html={formData.sig21} onChange={(e) => handleContentEditableChange("sig21", e.target.value)} class="place" placeholder=" Saisie ici"  
                        /> 
                        
                        </td>
                </tr> <tr> 
                        <td style={{ textAlign: 'center'  , fontSize: '18px'}}>  <p style={{ fontSize: '13px' , textAlign:'center ',  margin:'auto' }}/>22:00 </td>

                        <td> 
                        <ContentEditable html={formData.val22} onChange={(e) => handleContentEditableChange("val22", e.target.value)} class="place" placeholder=" Saisie ici"  
                        /> 
                        
                        </td>
                        <td> 
                        <ContentEditable html={formData.obs22} onChange={(e) => handleContentEditableChange("obs22", e.target.value)} class="place" placeholder=" Saisie ici"  
                         /> 
                        
                        </td>
                        <td> 
                        <ContentEditable html={formData.sig22} onChange={(e) => handleContentEditableChange("sig22", e.target.value)} class="place" placeholder=" Saisie ici"  
                        /> 
                        
                        </td>
                </tr> <tr> 
                        <td style={{ textAlign: 'center'  , fontSize: '18px'}}>  <p style={{ fontSize: '13px' , textAlign:'center ',  margin:'auto' }}/>23:00 </td>

                        <td> 
                        <ContentEditable html={formData.val23} onChange={(e) => handleContentEditableChange("val23", e.target.value)} class="place" placeholder=" Saisie ici"  
                        /> 
                        
                        </td>
                        <td> 
                        <ContentEditable html={formData.obs23} onChange={(e) => handleContentEditableChange("obs23", e.target.value)} class="place" placeholder=" Saisie ici"  
                         /> 
                        
                        </td>
                        <td> 
                        <ContentEditable html={formData.sig23} onChange={(e) => handleContentEditableChange("sig23", e.target.value)} class="place" placeholder=" Saisie ici"  
                        /> 
                        
                        </td>
                </tr> <tr> 
                        <td style={{ textAlign: 'center'  , fontSize: '18px'}}>  <p style={{ fontSize: '13px' , textAlign:'center ',  margin:'auto' }}/>24:00 </td>

                        <td> 
                        <ContentEditable html={formData.val24} onChange={(e) => handleContentEditableChange("val24", e.target.value)} class="place" placeholder=" Saisie ici"  
                        /> 
                        
                        </td>
                        <td> 
                        <ContentEditable html={formData.obs24} onChange={(e) => handleContentEditableChange("obs24", e.target.value)} class="place" placeholder=" Saisie ici"  
                         /> 
                        
                        </td>
                        <td> 
                        <ContentEditable html={formData.sig24} onChange={(e) => handleContentEditableChange("sig24", e.target.value)} class="place" placeholder=" Saisie ici"  
                        /> 
                        
                        </td>
                </tr>


</table>


<p  style={{  marginLeft: '300px', marginTop:"-90px" }}>
    Action Correctives
</p>


<table style={{ borderCollapse: "collapse", padding: "80px", margin: "auto", width: "999px", marginTop: '40px' }}>
               
                <tr style={{ textAlign: 'center'  , fontSize: '18px' }}>
                    <th>Heure </th>
                    <th>Anomalie</th>
                    <th>Cause possible de la non-conformité</th>
                    <th>Correction</th>
                    <th>Echéance</th>

                </tr>

               
                <tr> 
                        <td  style={{ textAlign: 'center'  , fontSize: '18px' , height :"180px"}}> 
                        <ContentEditable html={formData.heure} onChange={(e) => handleContentEditableChange("heure", e.target.value)}  class="test" placeholder=" Saisie ici" />  
                        </td>

                        <td> 
                        <ContentEditable html={formData.anomalie} onChange={(e) => handleContentEditableChange("anomalie", e.target.value)} class="test" placeholder=" Saisie ici"/>     
                        </td>

                        <td> 
                        <ContentEditable html={formData.cause} onChange={(e) => handleContentEditableChange("cause", e.target.value)} class="test" placeholder=" Saisie ici"/>  
                        </td>

                        <td> 
                        <ContentEditable html={formData.corr} onChange={(e) => handleContentEditableChange("corr", e.target.value)} class="test" placeholder=" Saisie ici" />  
                        </td>

                        <td> 
                        <ContentEditable html={formData.echeance} onChange={(e) => handleContentEditableChange("echeance", e.target.value)}  class="test" placeholder=" Saisie ici" />  
                        </td>
                </tr> 
                
                </table>



                <br/>
                <br/>
                <br/>

     
             <div > <label    style={{ fontSize: '15px' ,marginRight: '50px', textAlign: 'center', margin: '0' }}>Signature Chef Equipe HACCP : </label> 
             <br/>
             <input
        value={formData.sig}
        onChange={(e) => handleContentEditableChange("sig", e.target.value)}
        placeholder=" Saisie ici"
        style={{ marginLeft :"610px"}}
    /> </div>



             <br/>  <br/>  
            <div colSpan="2" style={{ textAlign: 'center' }}>
              <button onClick={handleCreatecateg} className="custom-button" style={{ width: "130px"  }}>Enregistrer</button>
            </div>
            <br/>  <br/> 
            </div>
          
  );
}

export default RapportTemp;
