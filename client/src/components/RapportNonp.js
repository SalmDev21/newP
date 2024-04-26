import React, { useState, useEffect, useRef } from "react";
import axios from "axios";


import "../index"; 
import Logoo from "./logoo.png";

import ContentEditable from 'react-contenteditable';


const RapportNonp = () => {
  const [categories, setCategories] = useState([]);

  const [formData, setFormData] = useState({
 
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
<ContentEditable
  html={formData.date}
  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
/>

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:4000/nonpropre/all");
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleCreatecateg = async () => {
    try {
      console.log("FormData:", formData);
      await axios.post("http://localhost:4000/nonpropre/create", formData);
      alert("bien enrigistrer !");
      
      setFormData({
       
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
      fetchCategories();
    } catch (error) {
      console.error("Error creating categ:", error);
    }
  };
  

  const [contentEditableData, setContentEditableData] = useState({
   
   
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
                      <h2 style={{ textAlign: 'center', margin: '0', flexGrow: '1', marginTop: '10px' }}>  Fiche de Suivi de zone non-propre  </h2>
                      {/* Input de date aligné à droite */}
                      <label type="text"  style={{ width: '150px', textAlign: 'right', margin: '0' }}>  </label> 
                    </td>
                  </tr>
                </tbody>
              </table>

              <br/>







      <div style={{ width: "100%"   ,   textAlign: "center",
}}>
    Date:{" "}   
    <input
      type="date"
      value={dateSansTemps}
      onChange={(e) => handleContentEditableChange("date", e.target.value)}
      className="editable-content"
     
      placeholder='dd-mm-yyyy'
    />
  </div>


  
<br/>
<p style={{  
  margin: "auto",
  width: "900px",
  marginTop: "-25px",
  fontSize: "19px",
  textAlign: "center",
  color: "black", // Couleur rouge
 
}}>  critéres d'évaluation : C-conforme , NC-Non-conforme mais une action corrective a été réealiser</p>
<br/>


<table style={{ borderCollapse: "collapse", padding: "80px", margin: "auto", width: "999px", marginBottom: '90px' }}>
<thead>
  <tr style={{ textAlign: 'center', fontSize: '16px' }}>
    <th></th>
    <th colSpan="13">
      <p style={{ fontSize: "10px", width: "90px", margin: "auto", textAlign: "center" }}>
        Environnement Usine
      </p>
    </th>
  </tr>
</thead>
      <tr> 

      <th style={{ width: '17%' , padding: "25px"  }}>Temps de contrôle</th>


              <td  style={{ marginRight: "10px", transform: "rotate(-90deg)", marginBottom: "10px", width: '20px' , fontSize:"15px",  marginTop: "50px",}} > 
                    Evacuation de coproduits 
              </td>

              <td  style={{ marginRight: "10px", transform: "rotate(-90deg)", marginBottom: "10px" ,fontSize:"15px" }} > 
                Réservoir du sang
              </td>

              <td   style={{ marginRight: "10px", transform: "rotate(-90deg)", marginBottom: "10px" , fontSize:"15px",  width: '50%' }}> 
                    Quai Déchet
              </td>
              <td   style={{ marginRight: "10px", transform: "rotate(-90deg)", marginBottom: "10px",fontSize:"15px" }}> 
                    Poubelles de coproduits
              </td>
              <td   style={{ marginRight: "10px", transform: "rotate(-90deg)", marginBottom: "10px",fontSize:"15px",  }}> 
                        Caniveaux
              </td>
              <td  style={{ marginRight: "10px", transform: "rotate(-90deg)", marginBottom: "10px",fontSize:"15px",  }}> 
                    Réefectoire  Abattage
              </td>

              <td   style={{ marginRight: "10px", transform: "rotate(-90deg)",fontSize:"15px",  marginBottom: "10px" }}> 
                    Réefectoire lér Etage
              </td>


              <td  style={{ marginRight: "10px", transform: "rotate(-90deg)",fontSize:"15px",  marginBottom: "10px" }} > 
                    Environnement externe              </td>

              <td  style={{ marginRight: "10px", transform: "rotate(-90deg)", fontSize:"15px",  marginBottom: "10px" }}> 
                        Poubelle Rue    </td>

                        <td style={{ marginRight: "10px", transform: "rotate(-90deg)",fontSize:"15px",  marginBottom: "10px" }}> 
                        Accueil   </td>
            <td   style={{ marginRight: "10px", transform: "rotate(-90deg)",fontSize:"15px",  marginBottom: "10px" }}> 
                        Administartion   </td>
              


              
      </tr>

      <tr > 
      <td  style={{ width: '5px' }}> Temps 1  </td>
      <td style={{ width: '5px' }}> 
              <ContentEditable html={formData.tem1} onChange={(e) => handleContentEditableChange("tem1", e.target.value)} class="place"  placeholder=" Saisie ici" />  
              </td>

              <td td style={{ width: '25%' }}> 
              <ContentEditable html={formData.tem2} onChange={(e) => handleContentEditableChange("tem2", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>

              <td  > 
              <ContentEditable html={formData.tem3} onChange={(e) => handleContentEditableChange("tem3", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>
              <td  > 
              <ContentEditable html={formData.tem4} onChange={(e) => handleContentEditableChange("tem4", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>
              <td  > 
              <ContentEditable html={formData.tem5} onChange={(e) => handleContentEditableChange("tem5", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>
              <td  style={{ width: '20%' }} > 
              <ContentEditable html={formData.tem6} onChange={(e) => handleContentEditableChange("tem6", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>

              <td  style={{ width: '20%' }} > 
              <ContentEditable html={formData.tem7} onChange={(e) => handleContentEditableChange("tem7", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>
              <td  style={{ width: '20%' }} > 
              <ContentEditable html={formData.tem8} onChange={(e) => handleContentEditableChange("tem8", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>
              <td  style={{ width: '20%' }} > 
              <ContentEditable html={formData.tem9} onChange={(e) => handleContentEditableChange("tem9", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>
              <td  style={{ width: '20%' }} > 
              <ContentEditable html={formData.tem10} onChange={(e) => handleContentEditableChange("tem10", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>
              <td  style={{ width: '20%' }} > 
              <ContentEditable html={formData.tem11} onChange={(e) => handleContentEditableChange("tem11", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>
      </tr>

      <tr > 
      <td  style={{ width: '10%' }}> Temps 2  </td>


      <td style={{ width: '20%' }}> 
              <ContentEditable html={formData.tem12} onChange={(e) => handleContentEditableChange("tem12", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>

              <td td style={{ width: '25%' }}> 
              <ContentEditable html={formData.tem13} onChange={(e) => handleContentEditableChange("tem13", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>

              <td  style={{ width: '20%' }} > 
              <ContentEditable html={formData.tem14} onChange={(e) => handleContentEditableChange("tem14", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>
              <td  style={{ width: '20%' }} > 
              <ContentEditable html={formData.tem15} onChange={(e) => handleContentEditableChange("tem15", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>
              <td  style={{ width: '20%' }} > 
              <ContentEditable html={formData.tem16} onChange={(e) => handleContentEditableChange("tem16", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>
              <td  style={{ width: '20%' }} > 
              <ContentEditable html={formData.tem17} onChange={(e) => handleContentEditableChange("tem17", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>
              <td  style={{ width: '20%' }} > 
              <ContentEditable html={formData.tem18} onChange={(e) => handleContentEditableChange("tem18", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>
              <td  style={{ width: '20%' }} > 
              <ContentEditable html={formData.tem19} onChange={(e) => handleContentEditableChange("tem19", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>
              <td  style={{ width: '20%' }} > 
              <ContentEditable html={formData.tem20} onChange={(e) => handleContentEditableChange("tem20", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>
              <td  style={{ width: '20%' }} > 
              <ContentEditable html={formData.tem21} onChange={(e) => handleContentEditableChange("tem21", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>

              <td  style={{ width: '20%' }} > 
              <ContentEditable html={formData.tem22} onChange={(e) => handleContentEditableChange("tem22", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>
              
</tr>
</table>



<table style={{ borderCollapse: "collapse", padding: "80px", margin: "auto", width: "999px", marginBottom: '90px' }}>


<thead>
  <tr style={{ textAlign: 'center', fontSize: '16px' }}>
    <th></th>
    <th colSpan="13">
      <p style={{ fontSize: "10px", width: "90px", margin: "auto", textAlign: "center" }}>
      Vestiaire zone non-propre/SAS 
      </p>
    </th>
  </tr>
</thead>


      <tr> 

      <th style={{ padding: "43px" }}>Temps de contrôle</th>


   
      <td style={{ transform: "rotate(-90deg)", fontSize: "15px", padding: "5px", textAlign: "center" }}>
  Toilettes & Douches
</td>
<td style={{ transform: "rotate(-90deg)", fontSize: "15px", padding: "5px", textAlign: "center" }}>
  Lave mains/poubelle
</td>
<td style={{ transform: "rotate(-90deg)", fontSize: "15px", padding: "5px", textAlign: "center" }}>
  Distributeur savon liquide
</td>
<td style={{ transform: "rotate(-90deg)", fontSize: "15px", padding: "5px", textAlign: "center" }}>
  Papier essuie-tout
</td>
<td style={{ transform: "rotate(-90deg)", fontSize: "15px", padding: "5px", textAlign: "center" }}>
  Casiers
</td>
<td style={{ transform: "rotate(-90deg)", fontSize: "15px", padding: "5px", textAlign: "center" }}>
  Surfaces
</td>
<td style={{ transform: "rotate(-90deg)", fontSize: "15px", padding: "5px", textAlign: "center" }}>
  Portes & Poignées
</td>
<td style={{ transform: "rotate(-90deg)", fontSize: "15px", padding: "5px", textAlign: "center" }}>
  SAS 2
</td>



              
      </tr>

      <tr > 
      <td  > Temps 1  </td>
      <td style={{ width: '5px' }}> 
              <ContentEditable html={formData.tem23} onChange={(e) => handleContentEditableChange("tem23", e.target.value)} class="place"  placeholder=" Saisie ici" />  
              </td>

              <td td style={{ width: '25%' }}> 
              <ContentEditable html={formData.tem24} onChange={(e) => handleContentEditableChange("tem24", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>

              <td  > 
              <ContentEditable html={formData.tem25} onChange={(e) => handleContentEditableChange("tem25", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>
              <td  > 
              <ContentEditable html={formData.tem26} onChange={(e) => handleContentEditableChange("tem26", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>
              <td  > 
              <ContentEditable html={formData.tem27} onChange={(e) => handleContentEditableChange("tem27", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>
              <td  style={{ width: '20%' }} > 
              <ContentEditable html={formData.tem28} onChange={(e) => handleContentEditableChange("tem28", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>

              <td  style={{ width: '20%' }} > 
              <ContentEditable html={formData.tem29} onChange={(e) => handleContentEditableChange("tem29", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>
              <td  style={{ width: '20%' }} > 
              <ContentEditable html={formData.tem30} onChange={(e) => handleContentEditableChange("tem30", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>
            
      </tr>

      <tr > 
      <td > Temps 2  </td>


      <td  style={{ width: '20%' }} > 
              <ContentEditable html={formData.tem31} onChange={(e) => handleContentEditableChange("tem31", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>
              <td  style={{ width: '20%' }} > 
              <ContentEditable html={formData.tem32} onChange={(e) => handleContentEditableChange("tem32", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>
              <td  style={{ width: '20%' }} > 
              <ContentEditable html={formData.tem33} onChange={(e) => handleContentEditableChange("tem33", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>

              <td  style={{ width: '20%' }} > 
              <ContentEditable html={formData.tem34} onChange={(e) => handleContentEditableChange("tem34", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td> <td  style={{ width: '20%' }} > 
              <ContentEditable html={formData.tem35} onChange={(e) => handleContentEditableChange("tem35", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>
              <td  style={{ width: '20%' }} > 
              <ContentEditable html={formData.tem36} onChange={(e) => handleContentEditableChange("tem36", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>
              <td  style={{ width: '20%' }} > 
              <ContentEditable html={formData.tem37} onChange={(e) => handleContentEditableChange("tem37", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>
              <td  style={{ width: '20%' }} > 
              <ContentEditable html={formData.tem38} onChange={(e) => handleContentEditableChange("tem38", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>
</tr>
</table>



<br/><br/>


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
                        <ContentEditable html={formData.heure} onChange={(e) => handleContentEditableChange("heure", e.target.value)}  class="place" placeholder=" Saisie ici" />  
                        </td>

                        <td> 
                        <ContentEditable html={formData.ano} onChange={(e) => handleContentEditableChange("ano", e.target.value)}  class="place" placeholder=" Saisie ici" />  
                        </td>

                        <td> 
                        <ContentEditable html={formData.cause} onChange={(e) => handleContentEditableChange("cause", e.target.value)}  class="place" placeholder=" Saisie ici" />  
                        </td>

                        <td> 
                        <ContentEditable html={formData.corr} onChange={(e) => handleContentEditableChange("corr", e.target.value)}  class="place" placeholder=" Saisie ici" />  
                        </td>

                        <td> 
                        <ContentEditable html={formData.eche} onChange={(e) => handleContentEditableChange("eche", e.target.value)}  class="place" placeholder=" Saisie ici" />  
                        </td>
                </tr> 
                
                </table>



                <br/>
                <br/>
                <br/>




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
        value={formData.sigchef}
        onChange={(e) => handleContentEditableChange("sigchef", e.target.value)}
        placeholder="Saisie ici"
        style={{ marginLeft: "20px" }}
    />    </div>
</div>






 






             <br/>  <br/>  <br/>  <br/>
            <div colSpan="2" style={{ textAlign: 'center' }}>
              <button onClick={handleCreatecateg} className="custom-button" style={{ width: "130px"  }}>Enregistrer</button>
            </div>
            
            </div>
          
  );
}

export default RapportNonp;
