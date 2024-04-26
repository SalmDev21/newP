import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Logoo from "../logoo.png";
import "../../index.css";
import "../../index"; 
import imprimer from "../img/print.jpg";

import ReactToPrint from "react-to-print";

const Print=  () => {
  const [categories, setCategories] = useState([]);
  const [date, setDate] = useState('');
  const componentRef = useRef();

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const selectedDate = searchParams.get('date');

    if (selectedDate) {
      // Vérifier si la date est au bon format (dd-MM-yyyy)
      const dateRegex = /^\d{2}-\d{2}-\d{4}$/;
      if (dateRegex.test(selectedDate)) {
        setDate(selectedDate);
        fetchData(selectedDate);
      } else {
        console.error("Format de date invalide :", selectedDate);
      }
    } else {
      console.error("Paramètre 'date' manquant dans l'URL.");
    }
  }, []);

  const fetchData = async (selectedDate) => {
    try {
      const url = `http://localhost:4000/abattage/${selectedDate}`;
      console.log("URL de l'API :", url); // Vérifier l'URL de l'API
      const response = await axios.get(url);
      console.log("Réponse de l'API :", response.data); // Vérifier la réponse de l'API
      setCategories(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des catégories :", error);
    }
  };

  return (
    <div className="all-categories">
    <ReactToPrint
    trigger={() => (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={imprimer} alt="imprimer" style={{ width: "60px", height: "60px", marginLeft: "10px" }} />
        <button className="print-button" style={{ marginBottom: '10px', fontSize: '14px', padding: '5px', width: '150px'}}>
          Print
        </button>
      </div>
    )}
    content={() => componentRef.current}
  />


<div ref={componentRef}>
<table style={{ width: '100%' , height:"15px" }}>
  <tbody>
    <tr>
      <td style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <tr> <img src={Logoo} alt="Logoo" style={{ width: "120px", height: "60px" }} /></tr>
      <tr><h2 style={{ textAlign: 'center', margin: '0' }}> Rapport Abattage</h2></tr>
      <td><div style={{ textAlign: 'right' }}>
          <label style={{ margin: '0' , fontSize : "12px" , marginRight:"125px"  }}>Ref :               </label>
          <label style={{ margin: '0',fontSize : "12px"  }}>Date d'emission: 01/01/2023</label>
          <label style={{ margin: '0' ,fontSize : "12px" , marginRight:"95px" }}>          Version:03</label>
          <label style={{ margin: '0' ,fontSize : "12px" , marginRight:"84px" }}>          Page 1 sur 1</label>
        </div></td>
      </td>
    </tr>
  </tbody>
</table>

      <br />
      <h4> Date : {date}</h4>
    
      {categories.map((vente, index) => (
        <div key={index} style={{ width: '100%', margin: 'auto' }}>
        
        
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
                        {vente.delai} </td>

                        </tr>

                      
                        <tr>
                        <td style={{ width: '50%' }}> <label     style={{ fontSize: '13px' }}>Electronarcose :</label>  </td>
                        <td>
                       
                     
                      {vente.elec}
                       </td>
                        
                      </tr>

                        <tr>
                        <td><label  style={{ fontSize: '13px' }}>test de reveille :</label> </td>
                        <td> {vente.test}  </td>


                        </tr>
                            
                            
                        <tr>
                        <td><label  style={{ fontSize: '13px' }}>temperature d'echaudage :</label> </td>
                        <td>   {vente.temp}  </td>


                        </tr>
                        <tr>
                        <td> <label  style={{ fontSize: '13px' }}>Plumaison :</label></td>
                        <td>    {vente.plu} </td>


                        </tr>
                        <tr>
                         <td><label  style={{ fontSize: '13px' }}>Evisceration :</label> </td>
                         <td>  {vente.evi}  </td>

                            </tr>
                            <tr>
                            <td><label  style={{ fontSize: '13px' }}>lavage carcase :</label> </td>
                            <td>  {vente.carcase}  </td>

                            </tr>

                            <tr>
                            <td> <label style={{ fontSize: '13px' }}>vitesse de la chaine abattage :</label> </td>
                            <td>   {vente.vitesse}  </td>

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
                        <td >  {vente.delaiD} </td>

                        </tr>


                        <tr>
                        <td> <label style={{ fontSize: '13px' }}>Electronarcose :</label>  </td>
                        <td> {vente.elecD }
                      </td>      
                        </tr>

                        <tr>
                        <td><label  style={{ fontSize: '13px' }}>test de reveille :</label> </td>
                        <td>  {vente.testD}</td>

                        </tr>
                            
                            
                        <tr>
                        <td><label  style={{ fontSize: '13px' }}>temperature d'echaudage :</label> </td>
                        <td>  {vente.tempD}</td>

                        </tr>
                        <tr>
                        <td> <label  style={{ fontSize: '13px' }}>Plumaison :</label></td>
                        <td>  {vente.pluD} </td>

                        </tr>

                        <tr>
                         <td><label  style={{ fontSize: '13px' }}>Evisceration :</label> </td>
                         <td>                          {vente.eviD}  </td>

                            </tr>
                            <tr>
                            <td><label  style={{ fontSize: '13px' }}>lavage carcase :</label> </td>
                            <td>  {vente.carcaseD}  </td>

                            </tr>

                            <tr>
                            <td> <label  style={{ fontSize: '13px' }}>vitesse de la chaine abattage :</label> </td>
                            <td>  {vente.vitesseD}</td>

                            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>



<div>
Observation
 {vente.observation }
  </div>
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
                        <td>  {vente.accrochage} </td>

                        </tr>

                        <tr> 
                        <td><label     style={{ fontSize: '13px' }}>Saigné</label> </td>
                        <td>  {vente.Saigne}  </td>

                        </tr>


                        <tr> 
                        <td><label     style={{ fontSize: '13px' }}>éviscération</label> </td>
                        <td>  {vente.evisceration}  </td>

                        </tr>


                        <tr>
                        <td> <label  style={{ fontSize: '13px' }}>Plumaison manuelle </label>  </td>
                        <td>  {vente.manuelle}  </td>

                            
                        </tr>

                        <tr>
                        <td><label  style={{ fontSize: '13px' }}>Finition</label> </td>
                        <td>  {vente.finition}  </td>

                        </tr>
                            
                            
                        <tr>
                        <td><label style={{ fontSize: '13px' }}>Nettoyage carcasse</label> </td>
                        <td>                          {vente.nettoyage} </td>

                        </tr>
                        <tr>
                        <td> <label style={{ fontSize: '13px' }}>Pompe a vide </label></td>
                        <td>  {vente.pompe}</td>

                        </tr>
                        <tr>
                         <td><label   style={{ fontSize: '13px' }}>Ressuage</label> </td>
                         <td>  {vente.ressuage}  </td>

                            </tr>
                            <tr>
                            <td><label  style={{ fontSize: '13px' }}>Déchet </label> </td>
                            <td>  {vente.dechet}  </td>

                            </tr>

                            <tr>
                            <td> <label     style={{ fontSize: '13px' }}>Lavage gésiers</label> </td>
                            <td>  {vente.lavage}</td>

                            </tr>

                            <tr>
                            <td> <label     style={{ fontSize: '13px' }}>Autre</label> </td>
                            <td>  {vente.autre}  </td>

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
              <td>                          {vente.accrochageD}  </td>

            </tr>
            <tr> 
                        <td><label     style={{ fontSize: '13px' }}>Saigné</label> </td>
                        
                        <td>  {vente.SaigneD}  </td>

                        </tr>


                        <tr>
                        <td> <label  style={{ fontSize: '13px' }}>éviscération</label>  </td>
                        <td>  {vente.eviscerationD}  </td>

                        </tr>

                        <tr>
                        <td><label  style={{ fontSize: '13px' }}>Plumaison manuelle </label> </td>
                        <td>   {vente.manuelleD}</td>
                        </tr>
                            
                            
                        <tr>
                        <td><label  style={{ fontSize: '13px' }}>Finition</label> </td>
                    
                        <td>   {vente.finitionD}  </td>
                        </tr>
                        <tr>
                        <td> <label  style={{ fontSize: '13px' }}>Nettoyage carcasse</label></td>
                        
                        <td>   {vente.nettoyageD} </td>

                        </tr>
                        <tr>
                         <td><label  style={{ fontSize: '13px' }}>Pompe a vide</label> </td>
                      
                            <td>  {vente.pompeD} </td>
                            </tr>
                            <tr>
                            <td><label  style={{ fontSize: '13px' }}>Ressuage</label> </td>
                           
                            <td>   {vente.ressuageD}  </td>
                            </tr>

                            <tr>
                            <td> <label  style={{ fontSize: '13px' }}>Déchet</label> </td>
                    
                            <td>   {vente.dechetD}</td>
                            </tr>

                            <tr>
                            <td> <label style={{ fontSize: '13px' }}>Lavage gésiers</label> </td>
                           
                            <td>   {vente.lavageD} </td>
                            </tr>
                            <tr>
                            <td> <label style={{ fontSize: '13px' }}>Autre</label> </td>
                            <td>   {vente.autreD} </td>
                            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>
<br/>
                            <div> <label    style={{ fontSize: '13px' ,marginRight: '50px', textAlign: 'right', margin: '0' }}>Signature CQH : </label> </div>
                            <div  style={{ fontSize: '13px' ,marginRight: '50px', textAlign: 'right', margin: '0' }}>   {vente.signature} </div> 


                            <table style={{ width: '100%' }}>
        <tbody>
          <tr>
            <td style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h2 style={{ textAlign: 'center', margin: '0', flexGrow: '1', marginBottom: '3px', fontSize: '13px'  }}> ce document est la propriete de la Ste Jom Volailles . il ne peut etre reproduit ou communique sans autorisation </h2>
            </td>
          </tr>
        </tbody>
      </table>
            
            
            </div>
      ))}
    </div>
    </div>
  );
}

export default Print ;
