import React, { useState, useEffect, useRef } from "react";
import axios from "axios";


import "../index"; 
import Logoo from "./logoo.png";

import ContentEditable from 'react-contenteditable';
const Allcontrole = () => {
  const [categories, setCategories] = useState([]);

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
    c1 :0,
    c2:0 ,
    c3 :0,
    c4 :0,
    nc1 :0,
    nc2 :0,
    nc3 :0,

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
<ContentEditable
  html={formData.date}
  
  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
/>



const handleCheckboxChange = (name) => (e) => {
  const value = e.target.checked ? 1 : 0; // Convert checked state to 1 or 0
  setFormData((prevData) => ({
    ...prevData,
    [name]: value, // Update the corresponding checkbox value in formData
  }));
};


  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:4000/controle/all");
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleCreatecateg = async () => {
    try {
      console.log("FormData:", formData);
      await axios.post("http://localhost:4000/controle/create", formData);
      console.log("Data added successfully!");
      
      setFormData({
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
      fetchCategories();
    } catch (error) {
      console.error("Error creating categ:", error);
    }
  };
  

  const [contentEditableData, setContentEditableData] = useState({
   
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
    // autres champs `contentEditable`
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
                      <h5 style={{ textAlign: 'center', margin: '0', flexGrow: '1', marginTop: '10px' }}> FICHE DE SUIVI CONTROLE A LA RECEPTION DES VOLAILLES VIFS </h5>
                      {/* Input de date aligné à droite */}
                      <label type="text"  style={{ width: '150px', textAlign: 'right', margin: '0' }}>  </label> 
                    </td>
                  </tr>
                </tbody>
              </table>

              <br/>







              <div style={{ width: "100%" , marginLeft:'560px' }}>
    Date:{" "}   
    <input
      type="date"
      value={dateSansTemps}
      onChange={(e) => handleContentEditableChange("date", e.target.value)}
      className="editable-content"
      style={{ width: "100%" }}
      placeholder='dd-mm-yyyy'
    />  
  </div>

  <table style={{ borderCollapse: "collapse", padding: "80px", margin: "auto", width: "999px", marginBottom: '90px' }}>

    <tr>
                    <td  style={{  backgroundColor: "#f2f2f2", textAlign : "center"}}> Fournisseur </td>
                    <td style={{ width: '70%',  textAlign : "center" }}> 
                        <ContentEditable html={formData.fourni} onChange={(e) => handleContentEditableChange("fourni", e.target.value)} class="place" placeholder=" Saisie ici" /> 
                     </td>

    </tr>


    <tr>
                    <td style={{  backgroundColor: "#f2f2f2" ,  textAlign : "center"}}> Date et heure de livraison </td>
                    <td style={{ width: '20%' ,  textAlign : "center"}}> 
                        <ContentEditable html={formData.dateHeur} onChange={(e) => handleContentEditableChange("dateHeur", e.target.value)} class="place" placeholder=" Saisie ici" /> 
                     </td>

    </tr>


    <tr>
                    <td style={{  backgroundColor: "#f2f2f2" ,  textAlign : "center"}}> Désignation de produit </td>
                    <td style={{ width: '20%' ,  textAlign : "center"}}> 
                        <ContentEditable html={formData.pro} onChange={(e) => handleContentEditableChange("pro", e.target.value)} class="place" placeholder=" Saisie ici" /> 
                     </td>

    </tr>

    <tr>
                    <td style={{  backgroundColor: "#f2f2f2" ,  textAlign : "center"}}> N° Fiche d'indentification </td>
                    <td style={{ width: '20%' ,  textAlign : "center"}}> 
                        <ContentEditable html={formData.numfich} onChange={(e) => handleContentEditableChange("numfich", e.target.value)} class="place" placeholder=" Saisie ici" /> 
                     </td>

    </tr>
    <tr>
                    <td style={{  backgroundColor: "#f2f2f2" ,  textAlign : "center"}}> N° de Plombage </td>
                    <td style={{ width: '20%' ,  textAlign : "center"}}> 
                        <ContentEditable html={formData.numplom} onChange={(e) => handleContentEditableChange("numplom", e.target.value)} class="place" placeholder=" Saisie ici" /> 
                     </td>

    </tr>

    <tr>
                    <td style={{  backgroundColor: "#f2f2f2" ,  textAlign : "center"}}> N°de lot interne</td>
                    <td style={{ width: '20%' ,  textAlign : "center"}}> 
                        <ContentEditable html={formData.lot} onChange={(e) => handleContentEditableChange("lot", e.target.value)} class="place" placeholder=" Saisie ici" /> 
                     </td>

    </tr>

    <tr>
                    <td style={{  backgroundColor: "#f2f2f2" ,  textAlign : "center"}}> durée de transport </td>
                    <td style={{ width: '20%' ,  textAlign : "center"}}> 
                        <ContentEditable html={formData.duree} onChange={(e) => handleContentEditableChange("duree", e.target.value)} class="place" placeholder=" Saisie ici" /> 
                     </td>

    </tr>

    <tr>
                    <td style={{  backgroundColor: "#f2f2f2" ,  textAlign : "center"}}> Quantité en piéce </td>
                    <td style={{ width: '20%' ,  textAlign : "center"}}> 
                        <ContentEditable html={formData.qtep} onChange={(e) => handleContentEditableChange("qtep", e.target.value)} class="place" placeholder=" Saisie ici" /> 
                     </td>

    </tr>

    <tr>
                    <td style={{  backgroundColor: "#f2f2f2" ,  textAlign : "center"}}> Quantité en kg </td>
                    <td style={{ width: '20%' ,  textAlign : "center"}}> 
                        <ContentEditable html={formData.qtekg} onChange={(e) => handleContentEditableChange("qtekg", e.target.value)} class="place" placeholder=" Saisie ici" /> 
                     </td>

    </tr>

    <tr>
                    <td style={{  backgroundColor: "#f2f2f2" ,  textAlign : "center"}}>Âge (jours) </td>
                    <td style={{ width: '20%' ,  textAlign : "center"}}> 
                        <ContentEditable html={formData.age} onChange={(e) => handleContentEditableChange("age", e.target.value)} class="place" placeholder=" Saisie ici" /> 
                     </td>

    </tr>


    <tr>
                    <td style={{  backgroundColor: "#f2f2f2" ,  textAlign : "center"}}>N°BL/N°FACTURE </td>
                    <td style={{ width: '20%' ,  textAlign : "center"}}> 
                        <ContentEditable html={formData.numfac} onChange={(e) => handleContentEditableChange("numfac", e.target.value)} class="place" placeholder=" Saisie ici" /> 
                     </td>

    </tr>

    <tr>
                    <td style={{  backgroundColor: "#f2f2f2" ,  textAlign : "center"}}>N°camion</td>
                    <td style={{ width: '20%' ,  textAlign : "center"}}> 
                        <ContentEditable html={formData.numcamion} onChange={(e) => handleContentEditableChange("numcamion", e.target.value)} class="place" placeholder=" Saisie ici" /> 
                     </td>

    </tr>

    <tr>
                    <td style={{  backgroundColor: "#f2f2f2" ,  textAlign : "center"}}>Origine</td>
                    <td style={{ width: '20%' ,  textAlign : "center"}}> 
                        <ContentEditable html={formData.origine} onChange={(e) => handleContentEditableChange("origine", e.target.value)} class="place" placeholder=" Saisie ici" /> 
                     </td>

    </tr>
  </table>




  <table style={{ borderCollapse: "collapse", padding: "80px", margin: "auto", width: "999px", marginBottom: '90px' ,  marginTop:"-60px"  }}>

<tr>
                <td style={{ width: '20%' }}> </td>
                <td style={{ width: '2%' ,  textAlign: 'center'  }}>  C </td >
                 <td style={{ width: '2%' , textAlign: 'center' }}>NC </td>
                 <td  style={{ width: '5%' , textAlign: 'center' }} >Observations </td>

</tr>


<tr>
                <td  style={{  backgroundColor: "#f2f2f2" , width:"20px"}}> Appréciation d'hygiéne (camion,cage...)</td>
                <td style={{ textAlign: 'center' }} >
                <input
        type="checkbox"
        checked={formData.c1 === 1}
        onChange={handleCheckboxChange('c1')} // Pass the name of the checkbox to identify which value to update
      />

</td>
                 <td> 
                <input
        type="checkbox"
        checked={formData.nc1 === 1}
        onChange={handleCheckboxChange('nc1')}
      />


















                </td>
                 <td> 
                    <ContentEditable html={formData.obs1} onChange={(e) => handleContentEditableChange("obs1", e.target.value)} class="place" placeholder=" Saisie ici" /> 
                 </td>

</tr>


<tr>
                <td  style={{  backgroundColor: "#f2f2f2"}}> Présentation de certificat sanitaire vétérinaire saigné par un vétérinaire <br/> Non & Prénom de véto 
                <ContentEditable html={formData.nom} onChange={(e) => handleContentEditableChange("nom", e.target.value)} class="place" placeholder=" Saisie ici" /> 
Référence et date du certificat<ContentEditable html={formData.ref} onChange={(e) => handleContentEditableChange("ref", e.target.value)} class="place" placeholder=" Saisie ici" /> 

</td>
<td style={{ textAlign: 'center' }} >
<input
        type="checkbox"
        checked={formData.c2 === 1}
        onChange={handleCheckboxChange('c2')}
      />
</td>

                 <td> 
                 <input
        type="checkbox"
        checked={formData.nc2 === 1}
        onChange={handleCheckboxChange('nc2')}
      />  </td>
                 <td> 
                    <ContentEditable html={formData.obs2} onChange={(e) => handleContentEditableChange("obs2", e.target.value)} class="testt" placeholder=" Saisie ici" /> 
                 </td>

</tr>

<tr>
<td  style={{  backgroundColor: "#f2f2f2"}}> Présentation d'une bulletin d'analyse pour la recherche de salmonellose émis par un laboratoir <br/>
Référence et date de bulletin  <ContentEditable html={formData.refb} onChange={(e) => handleContentEditableChange("refb", e.target.value)} class="place" placeholder=" Saisie ici" /> 


</td>
                <td> 
                <input
        type="checkbox"
        checked={formData.c3 === 1}
        onChange={handleCheckboxChange('c3')}
      />                </td>
                 <td> 
                 <input
        type="checkbox"
        checked={formData.nc3 === 1}
        onChange={handleCheckboxChange('nc3')}
      />



              </td>
                 <td> 
                    <ContentEditable html={formData.obs3} onChange={(e) => handleContentEditableChange("obs3", e.target.value)} class="testt" placeholder=" Saisie ici" /> 
                 </td>

</tr>





<tr>
<td  style={{  backgroundColor: "#f2f2f2"}}>Nmbre de suijets mort
</td>
                <td> 
                <input
        type="checkbox"
        checked={formData.c4 === 1}
        onChange={handleCheckboxChange('c4')}
      />               </td>
                 <td> 
                 <input
        type="checkbox"
        checked={formData.nc4 === 1}
        onChange={handleCheckboxChange('nc4')}
      />               </td>
                 <td> 
                    <ContentEditable html={formData.obs4} onChange={(e) => handleContentEditableChange("obs4", e.target.value)} class="place" placeholder=" Saisie ici" /> 
                 </td>

</tr>

</table>






<table style={{ borderCollapse: "collapse", padding: "80px", margin: "auto", width: "999px", marginBottom: '90px' ,  marginTop:"-65px"  }}>

<tr>
<td> </td>
                <td style={{ width: '5%' ,  textAlign: 'center',backgroundColor: "#f2f2f2"  }} > Décision </td>
                <td  style={{ width: '5%' ,  textAlign: 'center' ,backgroundColor: "#f2f2f2" }}>  Observastions</td>

</tr>


<tr>
                <td> Acceptation sous réserve </td>
                <td style={{ width: '20%' }}> 
                <input
        type="checkbox"
        checked={formData.accepSous === 1}
        onChange={handleCheckboxChange('accepSous')}
      /> 
                 </td>
                 <td style={{ width: '20%' }}> 
                    <ContentEditable html={formData.obsAccS} onChange={(e) => handleContentEditableChange("obsAccS", e.target.value)} class="place" placeholder=" Saisie ici" /> 
                 </td>

</tr>


<tr>
                <td> Acceptation </td>
                <td style={{ width: '20%' }}> 
                <input
        type="checkbox"
        checked={formData.accep === 1}
        onChange={handleCheckboxChange('accep')}
      /> 
                 </td>
                 <td style={{ width: '20%' }}> 
                    <ContentEditable html={formData.obsAcc} onChange={(e) => handleContentEditableChange("obsAcc", e.target.value)} class="place" placeholder=" Saisie ici" /> 
                 </td>

</tr>

<tr>
                <td>Refus</td>
                <td style={{ width: '20%' }}> 
                <input
        type="checkbox"
        checked={formData.refus === 1}
        onChange={handleCheckboxChange('refus')}
      />
                 </td>
                 <td style={{ width: '20%' }}> 
                    <ContentEditable html={formData.obsRefus} onChange={(e) => handleContentEditableChange("obsRefus", e.target.value)} class="place" placeholder=" Saisie ici" /> 
                 </td>

</tr> </table>






<div style={{ textAlign: 'center' }}>
    <div style={{ display: 'inline-block', marginRight: '20px' }}>
        <label style={{ fontSize: '15px', textAlign: 'center', margin: '0' }}>Signature CQH :</label>
        <br />
        <input
        value={formData.sig}
        onChange={(e) => handleContentEditableChange("sig", e.target.value)}
        placeholder="Saisie ici"
        style={{ marginLeft: "20px" }}
    />    </div>

    <div style={{ display: 'inline-block', marginLeft: '20px' }}>
        <label style={{ fontSize: '15px', textAlign: 'center', margin: '0' }}>Signature Chef Equipe HACCP :</label>
        <br />
        <input
        value={formData.sigChef}
        onChange={(e) => handleContentEditableChange("sigChef", e.target.value)}
        placeholder="Saisie ici"
        style={{ marginLeft: "20px" }}
    />    </div>
</div>





















                       
            <div colSpan="2" style={{ textAlign: 'center' }}>
              <button onClick={handleCreatecateg} className="custom-button" style={{ width: "130px" }}>Enregistrer</button>
            </div>
            
            </div>
          
  );
}

export default Allcontrole ;
