import React, { useState, useEffect, useRef } from "react";
import axios from "axios";


import "../index"; 
import Logoo from "./logoo.png";
import "../index.css";

import ContentEditable from 'react-contenteditable';


const RapportRetour = () => {
  const [categories, setCategories] = useState([]);

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
<ContentEditable
  html={formData.date}
  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
/>

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:4000/retour/all");
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleCreatecateg = async () => {
    try {
      console.log("FormData:", formData);
      await axios.post("http://localhost:4000/retour/create", formData);
      alert("bien enrigistrer !");
      
      setFormData({
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
      fetchCategories();
    } catch (error) {
      console.error("Error creating categ:", error);
    }
  };
  

  const [contentEditableData, setContentEditableData] = useState({
   
   
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







      <div style={{ width: "100%"  }}>
    Date:{" "}   
    <input
      type="date"
      value={dateSansTemps}
      onChange={(e) => handleContentEditableChange("date", e.target.value)}
      className="editable-content"
     
      placeholder='dd-mm-yyyy'
    />
  </div>


  <div style={{ display: "flex", alignItems: "center" }}>
    <label style={{ fontSize: '15px', margin: '0', marginLeft: '900px' }}>Nom client:</label>
    <input
        value={formData.nomcli}
        onChange={(e) => handleContentEditableChange("nomcli", e.target.value)}
        placeholder="Saisie ici"
        style={{ marginLeft: "5px" }} // Ajustez le marginLeft selon votre besoin
    />
</div>
<div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
    <label style={{ fontSize: '15px', margin: '0', marginLeft: '900px' }}>Nom livreur:</label>
    <input
        value={formData.nomli}
        onChange={(e) => handleContentEditableChange("nomli", e.target.value)}
        placeholder="Saisie ici"
        style={{ marginLeft: "5px" }} // Ajustez le marginLeft selon votre besoin
    />
</div>
<br/>
 
<table style={{ borderCollapse: "collapse", padding: "80px", margin: "auto", width: "999px", marginBottom: '90px' }}>
<thead>
      <tr style={{ textAlign: 'center'  , fontSize: '16px' , width: '20%'}}>
          <th>Article</th>
          <th>Quantité(kg)</th>
          <th>Cause</th>
          <th>N°lot</th>
          <th>Aspect organoleptique</th>
          <th >Action</th>

      </tr>
</thead>
      <tr  style={{ width: '25px' }} > 
              <td  style={{ width: '20px' }} > 
              <ContentEditable html={formData.art1} onChange={(e) => handleContentEditableChange("art1", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>

              <td > 
              <ContentEditable html={formData.qte1} onChange={(e) => handleContentEditableChange("qte1", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>

              <td > 
              <ContentEditable html={formData.cause1} onChange={(e) => handleContentEditableChange("cause1", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>
              <td > 
              <ContentEditable html={formData.lot1} onChange={(e) => handleContentEditableChange("lot1", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>
              <td > 
              <ContentEditable html={formData.asp1} onChange={(e) => handleContentEditableChange("asp1", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>
              <td  style={{ width: '20%' }}> 
              <ContentEditable html={formData.acrion1} onChange={(e) => handleContentEditableChange("acrion1", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>
              
      </tr>

      <tr > 
      <td style={{ width: '20%' }}> 
              <ContentEditable html={formData.art2} onChange={(e) => handleContentEditableChange("art2", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>

              <td td style={{ width: '25%' }}> 
              <ContentEditable html={formData.qte2} onChange={(e) => handleContentEditableChange("qte2", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>

              <td  > 
              <ContentEditable html={formData.cause2} onChange={(e) => handleContentEditableChange("cause2", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>
              <td  > 
              <ContentEditable html={formData.lot2} onChange={(e) => handleContentEditableChange("lot2", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>
              <td  > 
              <ContentEditable html={formData.asp2} onChange={(e) => handleContentEditableChange("asp2", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>
              <td  style={{ width: '20%' }} > 
              <ContentEditable html={formData.acrion2} onChange={(e) => handleContentEditableChange("acrion2", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>
      </tr>

      <tr > 
      <td style={{ width: '20%' }}> 
              <ContentEditable html={formData.art3} onChange={(e) => handleContentEditableChange("art3", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>

              <td td style={{ width: '25%' }}> 
              <ContentEditable html={formData.qte3} onChange={(e) => handleContentEditableChange("qte3", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>

              <td  style={{ width: '20%' }} > 
              <ContentEditable html={formData.cause3} onChange={(e) => handleContentEditableChange("cause3", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>
              <td  style={{ width: '20%' }} > 
              <ContentEditable html={formData.lot3} onChange={(e) => handleContentEditableChange("lot3", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>
              <td  style={{ width: '20%' }} > 
              <ContentEditable html={formData.asp3} onChange={(e) => handleContentEditableChange("asp3", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>
              <td  style={{ width: '20%' }} > 
              <ContentEditable html={formData.acrion3} onChange={(e) => handleContentEditableChange("acrion3", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>
</tr>
<tr > 
<td style={{ width: '20%' }}> 
              <ContentEditable html={formData.art4} onChange={(e) => handleContentEditableChange("art4", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>

              <td td style={{ width: '25%' }}> 
              <ContentEditable html={formData.qte4} onChange={(e) => handleContentEditableChange("qte4", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>

              <td  > 
              <ContentEditable html={formData.cause4} onChange={(e) => handleContentEditableChange("cause4", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>
              <td  > 
              <ContentEditable html={formData.lot4} onChange={(e) => handleContentEditableChange("lot4", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>
              <td  > 
              <ContentEditable html={formData.asp4} onChange={(e) => handleContentEditableChange("asp4", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>
              <td  > 
              <ContentEditable html={formData.acrion4} onChange={(e) => handleContentEditableChange("acrion4", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>
</tr>
              <tr > 
              <td style={{ width: '20%' }}> 
              <ContentEditable html={formData.art5} onChange={(e) => handleContentEditableChange("art5", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>

              <td td style={{ width: '25%' }}> 
              <ContentEditable html={formData.qte5} onChange={(e) => handleContentEditableChange("qte5", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>

              <td  > 
              <ContentEditable html={formData.cause5} onChange={(e) => handleContentEditableChange("cause5", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>
              <td  > 
              <ContentEditable html={formData.lot5} onChange={(e) => handleContentEditableChange("lot5", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>
              <td  > 
              <ContentEditable html={formData.asp5} onChange={(e) => handleContentEditableChange("asp5", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>
              <td  > 
              <ContentEditable html={formData.acrion5} onChange={(e) => handleContentEditableChange("acrion5", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>
      </tr>
     

</table>





<div style={{ textAlign: 'center' }}>
    <div style={{ display: 'inline-block', marginRight: '20px' }}>
        <label style={{ fontSize: '15px', textAlign: 'center', margin: '0' }}>Signature CQH :</label>
        <br />
  <input
        value={formData.sigRp}
        onChange={(e) => handleContentEditableChange("sigRp", e.target.value)}
        placeholder=" Saisie ici"
        style={{ marginLeft :"610px"}}
    />    </div>

    <div style={{ display: 'inline-block', marginLeft: '20px' }}>
        <label style={{ fontSize: '15px', textAlign: 'center', margin: '0' }}>Signature Chef Equipe HACCP :</label>
        <br />
        <input
        value={formData.sigRq}
        onChange={(e) => handleContentEditableChange("sigRq", e.target.value)}
        placeholder=" Saisie ici"
        style={{ marginLeft :"610px"}}
    />    </div>
</div>
     
        














             <br/>  <br/>  <br/>  <br/>
            <div colSpan="2" style={{ textAlign: 'center' }}>
              <button onClick={handleCreatecateg} className="custom-button" style={{ width: "130px"  }}>Enregistrer</button>
            </div>
            <br/>  <br/>
            </div>
          
  );
}

export default RapportRetour;
