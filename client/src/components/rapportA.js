import React, { useState, useEffect, useRef } from "react";
import axios from "axios";


import "../index"; 
import Logoo from "./logoo.png";
import "../index.css";

import ContentEditable from 'react-contenteditable';
const Allcategorie = () => {
  const [categories, setCategories] = useState([]);

  const [formData, setFormData] = useState({
   
  date:"",
 delai:"",
 delaiD:"",
 elec:"",
 elecD:"",
 test:"",
 testD:"",
 temp:"",
 tempD:"",
 plu:"",
 pluD:"",
 evi:"",
 eviD:"",
 carcase:"",
 carcaseD:"",
 vitesse:"",
 vitesseD:"",
 observation:"",
 accrochage:"",
 accrochageD:"",
 Saigne:"",
 SaigneD:"",
 evisceration:"",
 eviscerationD:"",
 manuelle:"",
 manuelleD:"",
 finition:"",
 finitionD:"",
 nettoyage:"",
 nettoyageD:"",
 pompe:"",
 pompeD:"",
 ressuage:"",
 ressuageD:"",
 dechet:"",
 dechetD:"",
 lavage:"",
 lavageD:"",
 autre:"",
 autreD:"",
 signature:""






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
      const response = await axios.get("http://localhost:4000/abattage/all");
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleCreatecateg = async () => {
    try {
      console.log("FormData:", formData);
      await axios.post("http://localhost:4000/abattage/create", formData);
      console.log("Data added successfully!");
      
      setFormData({
 date: "",
 delai: "",
 delaiD: "",
 elec: "",
 elecD: "",
 test: "",
 testD: "",
 temp: "",
 tempD: "",
 plu: "",
 pluD: "",
 evi: "",
 eviD: "",
 carcase: "",
 carcaseD: "",
 vitesse: "",
 vitesseD: "",
 observation: "",
 accrochage: "",
 accrochageD: "",
 Saigne: "",
 SaigneD: "",
 evisceration: "",
 eviscerationD: "",
 manuelle: "",
 manuelleD: "",
 finition: "",
 finitionD: "",
 nettoyage: "",
 nettoyageD: "",
 pompe: "",
 pompeD: "",
 ressuage: "",
 ressuageD: "",
 dechet: "",
 dechetD: "",
 lavage: "",
 lavageD: "",
 autre: "",
 autreD: "",
 signature: ""
 
      });
      fetchCategories();
    } catch (error) {
      console.error("Error creating categ:", error);
    }
  };
  

  const [contentEditableData, setContentEditableData] = useState({
    date: "",
    delai: "",
    delaiD: "",
    elec: "",
    elecD: "",
    test: "",
    testD: "",
    temp: "",
    tempD: "",
    plu: "",
    pluD: "",
    evi: "",
    eviD: "",
    carcase: "",
    carcaseD: "",
    vitesse: "",
    vitesseD: "",
    observation: "",
    accrochage: "",
    accrochageD: "",
    Saigne: "",
    SaigneD: "",
    evisceration: "",
    eviscerationD: "",
    manuelle: "",
    manuelleD: "",
    finition: "",
    finitionD: "",
    nettoyage: "",
    nettoyageD: "",
    pompe: "",
    pompeD: "",
    ressuage: "",
    ressuageD: "",
    dechet: "",
    dechetD: "",
    lavage: "",
    lavageD: "",
    autre: "",
    autreD: "",
    signature: ""
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
                      <h2 style={{ textAlign: 'center', margin: '0', flexGrow: '1', marginTop: '10px' }}> Rapport Abattage</h2>
                      {/* Input de date aligné à droite */}
                      <label type="text"  style={{ width: '150px', textAlign: 'right', margin: '0' }}>  </label> 
                    </td>
                  </tr>
                </tbody>
              </table>

              <br/>







      <div>
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

<br/>
      <table style={{ width: '100%', margin: 'auto' }}>
        <tbody>
        <tr>
      <td style={{ width: '50%' }}>
        <h4  style={{ textAlign: 'center'  , fontSize: '18px'}}>Poulet</h4>
        <table style={{ width: '100%' }}>
          <tbody>
            <tr>
              <td style={{ width: '50%' }}><label  style={{ fontSize: '13px' }}>Paramètres:</label></td>
              <td ><label    style={{ fontSize: '13px' }}>Observation:</label></td>
            </tr>
            <tr> 
                        <td  style={{ width: '50%' }}><label    style={{ fontSize: '13px' }}>Delai d'attente sur quai de reception :</label> </td>
                        <td> 
                        <ContentEditable html={formData.delai} onChange={(e) => handleContentEditableChange("delai", e.target.value)} 
                         class="place" placeholder=" Saisie ici"/> 
                        
                        </td>

                        </tr>
 
                      
                        <tr>
                        <td style={{ width: '50%' }}> <label     style={{ fontSize: '13px' }}>Electronarcose :</label>  </td>
                        <td>
                       
                      <ContentEditable
                        html={formData.elec || "Voltage..............Frequance................"}
                        onChange={(e) => handleContentEditableChange("elec", e.target.value)}
                        tagName="span"
                        className="editable-content" class="place" placeholder=" Saisie ici"
                      /></td>
                        
                      </tr>

                        <tr>
                        <td><label  style={{ fontSize: '13px' }}>test de reveille :</label> </td>
                        <td><ContentEditable html={formData.test} onChange={(e) => handleContentEditableChange("test", e.target.value)}  class="place" placeholder=" Saisie ici"/> </td>


                        </tr>
                            
                            
                        <tr>
                        <td><label  style={{ fontSize: '13px' }}>temperature d'echaudage :</label> </td>
                        <td> <ContentEditable html={formData.temp} onChange={(e) => handleContentEditableChange("temp", e.target.value)}  class="place" placeholder=" Saisie ici"/> </td>


                        </tr>
                        <tr>
                        <td> <label  style={{ fontSize: '13px' }}>Plumaison :</label></td>
                        <td>  <ContentEditable html={formData.plu} onChange={(e) => handleContentEditableChange("plu", e.target.value)}  class="place" placeholder=" Saisie ici"/> </td>


                        </tr>
                        <tr>
                         <td><label  style={{ fontSize: '13px' }}>Evisceration :</label> </td>
                         <td><ContentEditable html={formData.evi} onChange={(e) => handleContentEditableChange("evi", e.target.value)}  class="place" placeholder=" Saisie ici"/> </td>

                            </tr>
                            <tr>
                            <td><label  style={{ fontSize: '13px' }}>lavage carcase :</label> </td>
                            <td><ContentEditable html={formData.carcase} onChange={(e) => handleContentEditableChange("carcase", e.target.value)}  class="place" placeholder=" Saisie ici"/> </td>

                            </tr>

                            <tr>
                            <td> <label style={{ fontSize: '13px' }}>vitesse de la chaine abattage :</label> </td>
                            <td> <ContentEditable html={formData.vitesse} onChange={(e) => handleContentEditableChange("vitesse", e.target.value)}  class="place" placeholder=" Saisie ici"/> </td>

                            </tr>
          </tbody>
        </table>
      </td>
      <td style={{ width: '50%' }}>
        <h4 style={{ textAlign: 'center' , fontSize: '18px' }}>Dinde</h4>
        <table style={{ width: '100%' }}>
          <tbody>
            <tr>
              <td style={{ width: '50%' }}><label  style={{ fontSize: '13px' }}>Paramètres:</label></td>
              <td><label style={{ fontSize: '13px' }}>Observation:</label></td>
            </tr>
            <tr> 
                        <td style={{ width: '50%' }}><label  style={{ fontSize: '13px'}}>Delai d'attente sur quai de reception :</label> </td>
                        <td ><ContentEditable html={formData.delaiD} onChange={(e) => handleContentEditableChange("delaiD", e.target.value)}  class="place" placeholder=" Saisie ici"/> </td>

                        </tr>


                        <tr>
                        <td> <label style={{ fontSize: '13px' }}>Electronarcose :</label>  </td>
                        <td> <ContentEditable
                        html={formData.elecD || "Voltage..............Frequance................"}
                        onChange={(e) => handleContentEditableChange("elecD", e.target.value)}  class="place" placeholder=" Saisie ici"/></td>      
                        </tr>

                        <tr>
                        <td><label  style={{ fontSize: '13px' }}>test de reveille :</label> </td>
                        <td><ContentEditable html={formData.testD} onChange={(e) => handleContentEditableChange("testD", e.target.value)}  class="place" placeholder=" Saisie ici"/> </td>

                        </tr>
                            
                            
                        <tr>
                        <td><label  style={{ fontSize: '13px' }}>temperature d'echaudage :</label> </td>
                        <td><ContentEditable html={formData.tempD} onChange={(e) => handleContentEditableChange("tempD", e.target.value)}  class="place" placeholder=" Saisie ici"/> </td>

                        </tr>
                        <tr>
                        <td> <label  style={{ fontSize: '13px' }}>Plumaison :</label></td>
                        <td><ContentEditable html={formData.pluD} onChange={(e) => handleContentEditableChange("pluD", e.target.value)}  class="place" placeholder=" Saisie ici"/> </td>

                        </tr>

                        <tr>
                         <td><label  style={{ fontSize: '13px' }}>Evisceration :</label> </td>
                         <td>                        <ContentEditable html={formData.eviD} onChange={(e) => handleContentEditableChange("eviD", e.target.value)}  class="place" placeholder=" Saisie ici"/> </td>

                            </tr>
                            <tr>
                            <td><label  style={{ fontSize: '13px' }}>lavage carcase :</label> </td>
                            <td><ContentEditable html={formData.carcaseD} onChange={(e) => handleContentEditableChange("carcaseD", e.target.value)}  class="place" placeholder=" Saisie ici"/> </td>

                            </tr>

                            <tr>
                            <td> <label  style={{ fontSize: '13px' }}>vitesse de la chaine abattage :</label> </td>
                            <td><ContentEditable html={formData.vitesseD} onChange={(e) => handleContentEditableChange("vitesseD", e.target.value)}  class="place" placeholder=" Saisie ici"/> </td>

                            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>



<div>
Observation{" "}
  <ContentEditable
    html={formData.observation || "...................................................................."}
    onChange={(e) => handleContentEditableChange("observation", e.target.value)}
    tagName="span"
    className="editable-content"
   
  /></div>
<br/>

      <table style={{ width: '100%', margin: 'auto' }}>
  <tbody>
    <tr>
      <td colSpan="2" style={{ width: '50%' }}>
        <h4 style={{ fontSize: '13px',  textAlign: 'center' }}>Organisation d'équipe abattage</h4>
      </td>
    </tr>
    <tr>
      <td style={{ width: '50%', fontSize: '18px'  }}>
        <h4  style={{ textAlign: 'center' , fontSize: '18px' }}>Poulet</h4>
        <table style={{ width: '100%' }}>

     
          <tbody>
                        <tr>
                        <td style={{ width: '50%' }}><label   style={{ fontSize: '13px' }}>Accrochage </label></td>
                        <td><ContentEditable html={formData.accrochage} onChange={(e) => handleContentEditableChange("accrochage", e.target.value)}  class="place" placeholder=" Saisie ici"/> </td>

                        </tr>

                        <tr> 
                        <td><label     style={{ fontSize: '13px' }}>Saigné</label> </td>
                        <td><ContentEditable html={formData.Saigne} onChange={(e) => handleContentEditableChange("Saigne", e.target.value)}  class="place" placeholder=" Saisie ici"/> </td>

                        </tr>


                        <tr> 
                        <td><label     style={{ fontSize: '13px' }}>éviscération</label> </td>
                        <td><ContentEditable html={formData.evisceration} onChange={(e) => handleContentEditableChange("evisceration", e.target.value)}  class="place" placeholder=" Saisie ici"/> </td>

                        </tr>


                        <tr>
                        <td> <label  style={{ fontSize: '13px' }}>Plumaison manuelle </label>  </td>
                        <td><ContentEditable html={formData.manuelle} onChange={(e) => handleContentEditableChange("manuelle", e.target.value)}  class="place" placeholder=" Saisie ici"/> </td>

                            
                        </tr>

                        <tr>
                        <td><label  style={{ fontSize: '13px' }}>Finition</label> </td>
                        <td><ContentEditable html={formData.finition} onChange={(e) => handleContentEditableChange("finition", e.target.value)}  class="place" placeholder=" Saisie ici"/> </td>

                        </tr>
                            
                            
                        <tr>
                        <td><label style={{ fontSize: '13px' }}>Nettoyage carcasse</label> </td>
                        <td>                        <ContentEditable html={formData.nettoyage} onChange={(e) => handleContentEditableChange("nettoyage", e.target.value)}  class="place" placeholder=" Saisie ici"/> </td>

                        </tr>
                        <tr>
                        <td> <label style={{ fontSize: '13px' }}>Pompe a vide </label></td>
                        <td><ContentEditable html={formData.pompe} onChange={(e) => handleContentEditableChange("pompe", e.target.value)}  class="place" placeholder=" Saisie ici"/> </td>

                        </tr>
                        <tr>
                         <td><label   style={{ fontSize: '13px' }}>Ressuage</label> </td>
                         <td><ContentEditable html={formData.ressuage} onChange={(e) => handleContentEditableChange("ressuage", e.target.value)}  class="place" placeholder=" Saisie ici"/> </td>

                            </tr>
                            <tr>
                            <td><label  style={{ fontSize: '13px' }}>Déchet </label> </td>
                            <td><ContentEditable html={formData.dechet} onChange={(e) => handleContentEditableChange("dechet", e.target.value)}  class="place" placeholder=" Saisie ici"/> </td>

                            </tr>

                            <tr>
                            <td> <label     style={{ fontSize: '13px' }}>Lavage gésiers</label> </td>
                            <td><ContentEditable html={formData.lavage} onChange={(e) => handleContentEditableChange("lavage", e.target.value)}  class="place" placeholder=" Saisie ici"/> </td>

                            </tr>

                            <tr>
                            <td> <label     style={{ fontSize: '13px' }}>Autre</label> </td>
                            <td><ContentEditable html={formData.autre} onChange={(e) => handleContentEditableChange("autre", e.target.value)}  class="place" placeholder=" Saisie ici"/> </td>

                          </tr>
          </tbody>
        </table>
      </td>
      <td style={{ width: '50%' , fontSize: '18px' }}>
        <h4 style={{  textAlign: 'center'  , fontSize: '18px'}} >Dinde</h4>
        <table style={{ width: '100%' }}>
          <tbody>
            <tr>
              <td style={{ width: '50%' }}><label     style={{ fontSize: '13px' }}>Accrochage</label></td>
              <td>                        <ContentEditable html={formData.accrochageD} onChange={(e) => handleContentEditableChange("accrochageD", e.target.value)}  class="place" placeholder=" Saisie ici"/> </td>

            </tr>
            <tr> 
                        <td><label     style={{ fontSize: '13px' }}>Saigné</label> </td>
                        
                        <td><ContentEditable html={formData.SaigneD} onChange={(e) => handleContentEditableChange("SaigneD", e.target.value)}  class="place" placeholder=" Saisie ici"/> </td>

                        </tr>


                        <tr>
                        <td> <label  style={{ fontSize: '13px' }}>éviscération</label>  </td>
                        <td><ContentEditable html={formData.eviscerationD} onChange={(e) => handleContentEditableChange("eviscerationD", e.target.value)}  class="place" placeholder=" Saisie ici"/> </td>

                        </tr>

                        <tr>
                        <td><label  style={{ fontSize: '13px' }}>Plumaison manuelle </label> </td>
                        <td> <ContentEditable html={formData.manuelleD} onChange={(e) => handleContentEditableChange("manuelleD", e.target.value)}  class="place" placeholder=" Saisie ici"/> </td>
                        </tr>
                            
                            
                        <tr>
                        <td><label  style={{ fontSize: '13px' }}>Finition</label> </td>
                    
                        <td> <ContentEditable html={formData.finitionD} onChange={(e) => handleContentEditableChange("finitionD", e.target.value)}  class="place" placeholder=" Saisie ici"/> </td>
                        </tr>
                        <tr>
                        <td> <label  style={{ fontSize: '13px' }}>Nettoyage carcasse</label></td>
                        
                        <td> <ContentEditable html={formData.nettoyageD} onChange={(e) => handleContentEditableChange("nettoyageD", e.target.value)}  class="place" placeholder=" Saisie ici"/> </td>

                        </tr>
                        <tr>
                         <td><label  style={{ fontSize: '13px' }}>Pompe a vide</label> </td>
                      
                            <td><ContentEditable html={formData.pompeD} onChange={(e) => handleContentEditableChange("pompeD", e.target.value)}  class="place" placeholder=" Saisie ici"/> </td>
                            </tr>
                            <tr>
                            <td><label  style={{ fontSize: '13px' }}>Ressuage</label> </td>
                           
                            <td> <ContentEditable html={formData.ressuageD} onChange={(e) => handleContentEditableChange("ressuageD", e.target.value)}  class="place" placeholder=" Saisie ici"/> </td>
                            </tr>

                            <tr>
                            <td> <label  style={{ fontSize: '13px' }}>Déchet</label> </td>
                    
                            <td> <ContentEditable html={formData.dechetD} onChange={(e) => handleContentEditableChange("dechetD", e.target.value)}  class="place" placeholder=" Saisie ici"/> </td>
                            </tr>

                            <tr>
                            <td> <label style={{ fontSize: '13px' }}>Lavage gésiers</label> </td>
                           
                            <td> <ContentEditable html={formData.lavageD} onChange={(e) => handleContentEditableChange("lavageD", e.target.value)}  class="place" placeholder=" Saisie ici"/> </td>
                            </tr>
                            <tr>
                            <td> <label style={{ fontSize: '13px' }}>Autre</label> </td>
                            <td> <ContentEditable html={formData.autreD} onChange={(e) => handleContentEditableChange("autreD", e.target.value)}  class="place" placeholder=" Saisie ici"/> </td>
                            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>
<br/>
                            <div> <label    style={{ fontSize: '13px' ,marginRight: '50px', textAlign: 'right', margin: '0' }}>Signature CQH : </label> </div>
                            <div> <ContentEditable html={formData.signature} onChange={(e) => handleContentEditableChange("signature", e.target.value)}  style={{ fontSize: '13px' ,marginRight: '50px', textAlign: 'right', margin: '0' }} /></div>
            <div colSpan="2" style={{ textAlign: 'center' }}>
              <button onClick={handleCreatecateg} className="custom-button" style={{ width: "130px" }}>Enregistrer</button>
            </div>
            
            </div>
          
  );
}

export default Allcategorie;
