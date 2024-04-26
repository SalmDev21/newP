import React, { useState, useEffect, useRef } from "react";
import axios from "axios";


import "../index"; 
import Logoo from "./logoo.png";
import "../index.css";

import ContentEditable from 'react-contenteditable';


const RapportDecoupe = () => {
  const [categories, setCategories] = useState([]);

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
<ContentEditable
  html={formData.date}
  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
/>

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:4000/decoupe/all");
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleCreatecateg = async () => {
    try {
      console.log("FormData:", formData);
      await axios.post("http://localhost:4000/decoupe/create", formData);
      alert("bien enrigistrer !");
      
      setFormData({
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
      fetchCategories();
    } catch (error) {
      console.error("Error creating categ:", error);
    }
  };
  

  const [contentEditableData, setContentEditableData] = useState({
   
   
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
                      <h2 style={{ textAlign: 'center', margin: '0', flexGrow: '1', marginTop: '10px' }}> FICHE DE RETOUR DE LIVRAISON </h2>
                      {/* Input de date aligné à droite */}
                      <label type="text"  style={{ width: '150px', textAlign: 'right', margin: '0' }}>  </label> 
                    </td>
                  </tr>
                </tbody>
              </table>

              <br/>









  <div style={{ display: "flex", alignItems: "center" }}>
<label htmlFor="date" style={{ marginRight: "10px", marginBottom: "10px" }}>date:</label>
<input
type="date"

onChange={(e) => handleContentEditableChange("date", e.target.value)}
className="editable-content"
style={{ marginRight: "10px", width: "100%", marginBottom: "10px" }}
/>

<label htmlFor="chef" style={{ marginRight: "20px", marginBottom: "10px" }}>Chef Production:</label>
<input
type="text"
id="chef"
onChange={(e) => handleContentEditableChange("chef", e.target.value)}
className="editable-content"
style={{ marginRight: "10px", width: "100%", marginBottom: "10px" }}
/></div>

<br/>


<table style={{ borderCollapse: "collapse", padding: "80px", margin: "auto", width: "999px", marginBottom: '90px' }}>

      <tr  style={{ width: '25px' }} > 
     
              <td > Article   </td>

              <td   style={{ width: '25px' }}> 
              <ContentEditable html={formData.art} onChange={(e) => handleContentEditableChange("art", e.target.value)}  class="testee" placeholder=" Saisie ici" />  
              </td>

              <td > 
Quantité              </td>
              <td  style={{ width: '25px' }}> 
              <ContentEditable html={formData.qte} onChange={(e) => handleContentEditableChange("qte", e.target.value)}  class="testee" placeholder=" Saisie ici" />  
              </td>
              <td   > 
date production              </td>
              <td  style={{ width: '20%' }}> 
              <ContentEditable html={formData.date1} onChange={(e) => handleContentEditableChange("date1", e.target.value)}  class="testee" placeholder=" Saisie ici" />  
              </td>


              <td  style={{ width: '60px' }}> 
N lot             </td>
              <td  style={{ width: '25px' }} > 
              <ContentEditable html={formData.lot} onChange={(e) => handleContentEditableChange("lot", e.target.value)}  class="testee" placeholder=" Saisie ici" />  
              </td>
      </tr>
</table>





<table style={{ borderCollapse: "collapse", padding: "80px", margin: "auto", width: "999px", marginBottom: '90px' }}>
<thead>
      <tr style={{ textAlign: 'center'  , fontSize: '16px' , width: '20%'}}>
          <th>Article</th>
          <th>Nombre Lames</th>
          <th>Poids Net (kg)</th>
          <th>N°lot</th>
          <th>Quantité organoleptique</th>
          <th >Correcton</th>

      </tr>
</thead>
      <tr  style={{ width: '25px' }} > 
              <td  style={{ width: '20px' }} > 
  CUISSE Poulet              </td>

              <td > 
              <ContentEditable html={formData.nb1} onChange={(e) => handleContentEditableChange("nb1", e.target.value)}  class="testee" placeholder=" Saisie ici" />  
              </td>

              <td > 
              <ContentEditable html={formData.poi1} onChange={(e) => handleContentEditableChange("poi1", e.target.value)}  class="testee" placeholder=" Saisie ici" />  
              </td>
              <td > 
              <ContentEditable html={formData.lot1} onChange={(e) => handleContentEditableChange("lot1", e.target.value)}  class="testee" placeholder=" Saisie ici" />  
              </td>
              <td > 
              <ContentEditable html={formData.quali1} onChange={(e) => handleContentEditableChange("quali1", e.target.value)}  class="testee" placeholder=" Saisie ici" />  
              </td>
              <td  style={{ width: '20%' }}> 
              <ContentEditable html={formData.corr1} onChange={(e) => handleContentEditableChange("corr1", e.target.value)}  class="testee" placeholder=" Saisie ici" />  
              </td>
              
      </tr>

      <tr  style={{ width: '25px' }} > 
              <td  style={{ width: '20px' }} > 
 GIGOT POULET             </td>

              <td > 
              <ContentEditable html={formData.nb2} onChange={(e) => handleContentEditableChange("nb2", e.target.value)}  class="testee" placeholder=" Saisie ici" />  
              </td>

              <td > 
              <ContentEditable html={formData.poi2} onChange={(e) => handleContentEditableChange("poi2", e.target.value)}  class="testee" placeholder=" Saisie ici" />  
              </td>
              <td > 
              <ContentEditable html={formData.lot2} onChange={(e) => handleContentEditableChange("lot2", e.target.value)}  class="testee" placeholder=" Saisie ici" />  
              </td>
              <td > 
              <ContentEditable html={formData.quali2} onChange={(e) => handleContentEditableChange("quali2", e.target.value)}  class="testee" placeholder=" Saisie ici" />  
              </td>
              <td  style={{ width: '20%' }}> 
              <ContentEditable html={formData.corr2} onChange={(e) => handleContentEditableChange("corr2", e.target.value)}  class="testee" placeholder=" Saisie ici" />  
              </td>
              
      </tr>


      <tr  style={{ width: '25px' }} > 
              <td  style={{ width: '20px' }} > 
BLANC POULET            </td>

              <td > 
              <ContentEditable html={formData.nb3} onChange={(e) => handleContentEditableChange("nb3", e.target.value)}  class="testee" placeholder=" Saisie ici" />  
              </td>

              <td > 
              <ContentEditable html={formData.poi3} onChange={(e) => handleContentEditableChange("poi3", e.target.value)}  class="testee" placeholder=" Saisie ici" />  
              </td>
              <td > 
              <ContentEditable html={formData.lot3} onChange={(e) => handleContentEditableChange("lot3", e.target.value)}  class="testee" placeholder=" Saisie ici" />  
              </td>
              <td > 
              <ContentEditable html={formData.quali3} onChange={(e) => handleContentEditableChange("quali3", e.target.value)}  class="testee" placeholder=" Saisie ici" />  
              </td>
              <td  style={{ width: '20%' }}> 
              <ContentEditable html={formData.corr3} onChange={(e) => handleContentEditableChange("corr3", e.target.value)}  class="testee" placeholder=" Saisie ici" />  
              </td>
              
      </tr>

     

      <tr  style={{ width: '25px' }} > 
              <td  style={{ width: '20px' }} > 
 WSCALOPE POULET            </td>

              <td > 
              <ContentEditable html={formData.nb4} onChange={(e) => handleContentEditableChange("nb4", e.target.value)}  class="testee" placeholder=" Saisie ici" />  
              </td>

              <td > 
              <ContentEditable html={formData.poi4} onChange={(e) => handleContentEditableChange("poi4", e.target.value)}  class="testee" placeholder=" Saisie ici" />  
              </td>
              <td > 
              <ContentEditable html={formData.lot4} onChange={(e) => handleContentEditableChange("lot4", e.target.value)}  class="testee" placeholder=" Saisie ici" />  
              </td>
              <td > 
              <ContentEditable html={formData.quali4} onChange={(e) => handleContentEditableChange("quali4", e.target.value)}  class="testee" placeholder=" Saisie ici" />  
              </td>
              <td  style={{ width: '20%' }}> 
              <ContentEditable html={formData.corr4} onChange={(e) => handleContentEditableChange("corr4", e.target.value)}  class="testee" placeholder=" Saisie ici" />  
              </td>
              
      </tr>


      <tr  style={{ width: '25px' }} > 
              <td  style={{ width: '20px' }} > 
CARCASSE POULET             </td>

              <td > 
              <ContentEditable html={formData.nb5} onChange={(e) => handleContentEditableChange("nb5", e.target.value)}  class="testee" placeholder=" Saisie ici" />  
              </td>

              <td > 
              <ContentEditable html={formData.poi5} onChange={(e) => handleContentEditableChange("poi5", e.target.value)}  class="testee" placeholder=" Saisie ici" />  
              </td>
              <td > 
              <ContentEditable html={formData.lot5} onChange={(e) => handleContentEditableChange("lot5", e.target.value)}  class="testee" placeholder=" Saisie ici" />  
              </td>
              <td > 
              <ContentEditable html={formData.quali5} onChange={(e) => handleContentEditableChange("quali5", e.target.value)}  class="testee" placeholder=" Saisie ici" />  
              </td>
              <td  style={{ width: '20%' }}> 
              <ContentEditable html={formData.corr5} onChange={(e) => handleContentEditableChange("corr5", e.target.value)}  class="testee" placeholder=" Saisie ici" />  
              </td>
              
      </tr>

      <tr  style={{ width: '25px' }} > 
              <td  style={{ width: '20px' }} > 
AILES POULET             </td>

              <td > 
              <ContentEditable html={formData.nb6} onChange={(e) => handleContentEditableChange("nb6", e.target.value)}  class="testee" placeholder=" Saisie ici" />  
              </td>

              <td > 
              <ContentEditable html={formData.poi6} onChange={(e) => handleContentEditableChange("poi6", e.target.value)}  class="testee" placeholder=" Saisie ici" />  
              </td>
              <td > 
              <ContentEditable html={formData.lot6} onChange={(e) => handleContentEditableChange("lot6", e.target.value)}  class="testee" placeholder=" Saisie ici" />  
              </td>
              <td > 
              <ContentEditable html={formData.quali6} onChange={(e) => handleContentEditableChange("quali6", e.target.value)}  class="testee" placeholder=" Saisie ici" />  
              </td>
              <td  style={{ width: '20%' }}> 
              <ContentEditable html={formData.corr6} onChange={(e) => handleContentEditableChange("corr6", e.target.value)}  class="testee" placeholder=" Saisie ici" />  
              </td>
              
      </tr>


      <tr  style={{ width: '25px' }} > 
              <td  style={{ width: '20px' }} > 
STEAK POULET           </td>

              <td > 
              <ContentEditable html={formData.nb7} onChange={(e) => handleContentEditableChange("nb7", e.target.value)}  class="testee" placeholder=" Saisie ici" />  
              </td>

              <td > 
              <ContentEditable html={formData.poi7} onChange={(e) => handleContentEditableChange("poi7", e.target.value)}  class="testee" placeholder=" Saisie ici" />  
              </td>
              <td > 
              <ContentEditable html={formData.lot7} onChange={(e) => handleContentEditableChange("lot7", e.target.value)}  class="testee" placeholder=" Saisie ici" />  
              </td>
              <td > 
              <ContentEditable html={formData.quali7} onChange={(e) => handleContentEditableChange("quali7", e.target.value)}  class="testee" placeholder=" Saisie ici" />  
              </td>
              <td  style={{ width: '20%' }}> 
              <ContentEditable html={formData.corr7} onChange={(e) => handleContentEditableChange("corr7", e.target.value)}  class="testee" placeholder=" Saisie ici" />  
              </td>
              
      </tr>
</table>







<table style={{ borderCollapse: "collapse", padding: "80px", margin: "auto", width: "999px", marginBottom: '90px' }}>

      <tr   > 
             
            <h6 style={{ textAlign:"center" }}> SUIVI Production PAR OUVRIER</h6>
              
      </tr>

      <tr > 
      <td style={{ width: '20%' }}>  Nom et prenom
              </td>

              <td td style={{ width: '25%' }}> Rendement 
              </td>

             
      </tr>

      <tr > 
      <td style={{ width: '20%' }}> 
              <ContentEditable html={formData.nom1} onChange={(e) => handleContentEditableChange("nom1", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>

              <td td style={{ width: '25%' }}> 
              <ContentEditable html={formData.ren1} onChange={(e) => handleContentEditableChange("ren1", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>

             
</tr>

<tr > 
      <td style={{ width: '20%' }}> 
              <ContentEditable html={formData.nom2} onChange={(e) => handleContentEditableChange("nom2", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>

              <td td style={{ width: '25%' }}> 
              <ContentEditable html={formData.ren2} onChange={(e) => handleContentEditableChange("ren2", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>

             
</tr>

<tr > 
      <td style={{ width: '20%' }}> 
              <ContentEditable html={formData.nom3} onChange={(e) => handleContentEditableChange("nom3", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>

              <td td style={{ width: '25%' }}> 
              <ContentEditable html={formData.ren2} onChange={(e) => handleContentEditableChange("ren3", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>

             
</tr>
<tr > 
      <td style={{ width: '20%' }}> 
              <ContentEditable html={formData.nom4} onChange={(e) => handleContentEditableChange("nom4", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>

              <td td style={{ width: '25%' }}> 
              <ContentEditable html={formData.ren4} onChange={(e) => handleContentEditableChange("ren4", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>

             
</tr>


<tr > 
      <td style={{ width: '20%' }}> 
              <ContentEditable html={formData.nom5} onChange={(e) => handleContentEditableChange("nom5", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>

              <td td style={{ width: '25%' }}> 
              <ContentEditable html={formData.ren5} onChange={(e) => handleContentEditableChange("ren5", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>

             
</tr>

<tr > 
      <td style={{ width: '20%' }}> 
              <ContentEditable html={formData.nom6} onChange={(e) => handleContentEditableChange("nom6", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>

              <td td style={{ width: '25%' }}> 
              <ContentEditable html={formData.ren6} onChange={(e) => handleContentEditableChange("ren6", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>

             
</tr>
<tr > 
      <td style={{ width: '20%' }}> 
              <ContentEditable html={formData.nom7} onChange={(e) => handleContentEditableChange("nom7", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>

              <td td style={{ width: '25%' }}> 
              <ContentEditable html={formData.ren7} onChange={(e) => handleContentEditableChange("ren7", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>

             
</tr>
<tr > 
      <td style={{ width: '20%' }}> 
              <ContentEditable html={formData.nom8} onChange={(e) => handleContentEditableChange("nom8", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>

              <td td style={{ width: '25%' }}> 
              <ContentEditable html={formData.ren8} onChange={(e) => handleContentEditableChange("ren8", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>

             
</tr>
<tr > 
      <td style={{ width: '20%' }}> 
              <ContentEditable html={formData.nom9} onChange={(e) => handleContentEditableChange("nom9", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>

              <td td style={{ width: '25%' }}> 
              <ContentEditable html={formData.ren9} onChange={(e) => handleContentEditableChange("ren9", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>

             
</tr>

<tr > 
      <td style={{ width: '20%' }}> 
              <ContentEditable html={formData.nom10} onChange={(e) => handleContentEditableChange("nom10", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>

              <td td style={{ width: '25%' }}> 
              <ContentEditable html={formData.ren10} onChange={(e) => handleContentEditableChange("ren10", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>

             
</tr>
<tr > 
      <td style={{ width: '20%' }}> 
              <ContentEditable html={formData.nom11} onChange={(e) => handleContentEditableChange("nom11", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>

              <td td style={{ width: '25%' }}> 
              <ContentEditable html={formData.ren11} onChange={(e) => handleContentEditableChange("ren11", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>

             
</tr>


<tr > 
      <td style={{ width: '20%' }}> 
              <ContentEditable html={formData.nom12} onChange={(e) => handleContentEditableChange("nom12", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>

              <td td style={{ width: '25%' }}> 
              <ContentEditable html={formData.ren12} onChange={(e) => handleContentEditableChange("ren12", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>

             
</tr>

</table>













<div style={{ textAlign: 'center' }}>
   

  <div style={{ display: "flex", alignItems: "center" }}>
<label htmlFor="sig1" style={{ marginRight: "10px", marginBottom: "10px" }}>Signature chef de production </label>
<input
type="text"

onChange={(e) => handleContentEditableChange("sig1", e.target.value)}
className="editable-content"
style={{ marginRight: "10px", width: "100%", marginBottom: "10px" }}
/>

<label htmlFor="chef" style={{ marginRight: "20px", marginBottom: "10px" }}>Signature CQH :</label>
<input
type="text"
id="sig2"
onChange={(e) => handleContentEditableChange("sig2", e.target.value)}
className="editable-content"
style={{ marginRight: "10px", width: "100%", marginBottom: "10px" }}
/>

<label htmlFor="sigchef" style={{ marginRight: "20px", marginBottom: "10px" }}>Signature Chef Equipe HACCP</label>
<input
type="text"
id="sigchef"
onChange={(e) => handleContentEditableChange("sigchef", e.target.value)}
className="editable-content"
style={{ marginRight: "10px", width: "100%", marginBottom: "10px" }}
/></div>

</div>
     
        














             <br/>  <br/>  <br/>  <br/>
            <div colSpan="2" style={{ textAlign: 'center' }}>
              <button onClick={handleCreatecateg} className="custom-button" style={{ width: "130px"  }}>Enregistrer</button>
            </div>
            <br/>  <br/>
            </div>
          
  );
}

export default RapportDecoupe;
