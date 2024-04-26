import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import Logoo from "../logoo.png";
import "../../index.css";
import "../../index";
import { useParams } from 'react-router-dom'; // Importer useParams
import { useLocation } from 'react-router-dom';
import update from "../img/tik.jpg";
import Log from "../img/edit.png";

const RetourUpdate = () => {
        

     
    const [vente, setVente] = useState([]);
        const location = useLocation();
        const searchParams = new URLSearchParams(location.search);
        const id = searchParams.get('id');
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
          const [isHided, setIsHided] = useState(true);
  const [isUpdateFormVisible, setIsUpdateFormVisible] = useState(false);
        useEffect(() => {
            if (id) {
                fetchData(id);
            } else {
                console.error("Paramètre 'id' manquant dans l'URL.");
            }
        }, [id]);
    {/***********************************************************************************/}
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

        const fetchData = async (id) => {
            try {
                const response = await axios.get(`http://localhost:4000/retour/${id}`);
                console.log(response.data);
                setVente(response.data);
             } catch (error) {
                console.error("Erreur lors de la récupération des données par ID :", error);
            }
        };
    
        console.log(vente); // Vérifier que les données sont bien présentes dans vente
    
    {/***********************************************************************************/}

        const toggleUpdateFormVisibility = () => {
            setIsUpdateFormVisible(!isUpdateFormVisible);
          };
              {/***********************************************************************************/}

          const resetFormData = () => {
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
          };
            {/*  **********************************************************/}

          const handleUpdateSubmit = async (e) => {
            e.preventDefault(); // Empêcher le comportement par défaut du formulaire
          
            try {
              await axios.put(`http://localhost:4000/retour/update/${formData.id}`, formData);
              fetchData(formData.id); // Mettre à jour les données après la soumission du formulaire
              resetFormData();
            } catch (error) {
              console.error("Error updating vente:", error);
            }
          };
          
          
    
  return (
    
        <div className="all-categories">
                
       {vente.map(vente => (
            <div key={vente.id}>
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



    

  
<div style={{ width: "100%" }}>
<h4> Date : {format(new Date(vente.date), 'dd/MM/yyyy')}</h4>

</div>

<div style={{ display: "flex", alignItems: "center" }}>
    <label style={{ fontSize: '20px', margin: '0', marginLeft: '900px' }}>Nom client:</label>
    {vente.nomcli}
</div>
<div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
    <label style={{ fontSize: '20px', margin: '0', marginLeft: '900px' }}>Nom livreur:</label>
    {vente.nomli}
</div>



<br/>



 
<table style={{ borderCollapse: "collapse", padding: "20px", margin: "auto", width: "80%", marginBottom: '50px' }}>
    <thead>
        <tr style={{ textAlign: 'center', fontSize: '16px' }}>
            <th style={{ width: '20%' }}>Article</th>
            <th style={{ width: '15%' }}>Quantité (kg)</th>
            <th style={{ width: '20%' }}>Cause</th>
            <th style={{ width: '15%' }}>N°lot</th>
            <th style={{ width: '20%' }}>Aspect organoleptique</th>
            <th style={{ width: '10%' }}>Action</th>
        </tr>
    </thead>
  
        <tr style={{ textAlign: 'center', fontSize: '14px' }}>
            <td style={{ height: '40px', width: '20%' }}>{vente.art1}</td>
            <td style={{ height: '40px', width: '15%' }}>{vente.qte1}</td>
            <td style={{ height: '40px', width: '20%' }}>{vente.cause1}</td>
            <td style={{ height: '40px', width: '15%' }}>{vente.lot1}</td>
            <td style={{ height: '40px', width: '20%' }}>{vente.asp1}</td>
            <td style={{ height: '40px', width: '10%' }}>{vente.acrion1}</td>
        </tr>

      <tr style={{ textAlign: 'center', fontSize: '14px' }} > 
              <td  style={{ height: '40px', width: '20%' }}> 
              {vente.art2}             
              </td>

              <td td style={{ width: '25%' }}> 
              {vente.qte2}               
              </td>

              <td td style={{ width: '23%' }}> 
              {vente.cause2}            
              </td>
              <td td style={{ width: '23%' }}> 
              {vente.lot2}            
              </td>
              <td td style={{ width: '23%' }}> 
              {vente.asp2}            
              </td>
              <td td style={{ width: '23%' }}> 
              {vente.acrion2}            
              </td>
      </tr>

      <tr style={{ textAlign: 'center', fontSize: '14px' }} > 
              <td  style={{ height: '40px', width: '20%' }}> 
              {vente.art3}             
              </td>

              <td td style={{ width: '25%' }}> 
              {vente.qte3}               
              </td>

              <td td style={{ width: '23%' }}> 
              {vente.cause3}            
              </td>
              <td td style={{ width: '23%' }}> 
              {vente.lot3}            
              </td>
              <td td style={{ width: '23%' }}> 
              {vente.asp3}            
              </td>
              <td td style={{ width: '23%' }}> 
              {vente.acrion3}            
              </td>
</tr>
              <tr  style={{ textAlign: 'center', fontSize: '14px' }}> 
              <td  style={{ height: '40px', width: '20%' }}> 
              {vente.art4}             
              </td>

              <td td style={{ width: '25%' }}> 
              {vente.qte4}               
              </td>

              <td td style={{ width: '23%' }}> 
              {vente.cause4}            
              </td>
              <td td style={{ width: '23%' }}> 
              {vente.lot4}            
              </td>
              <td td style={{ width: '23%' }}> 
              {vente.asp4}            
              </td>
              <td td style={{ width: '23%' }}> 
              {vente.acrion4}            
              </td>
</tr>
              <tr style={{ textAlign: 'center', fontSize: '14px' }}> 
              <td  style={{ height: '40px', width: '20%' }}> 
              {vente.art5}             
              </td>

              <td td style={{ width: '25%' }}> 
              {vente.qte5}               
              </td>

              <td td style={{ width: '23%' }}> 
              {vente.cause5}            
              </td>
              <td td style={{ width: '23%' }}> 
              {vente.lot5}            
              </td>
              <td td style={{ width: '23%' }}> 
              {vente.asp5}            
              </td>
              <td td style={{ width: '23%' }}> 
              {vente.acrion5}            
              </td>
      </tr>
     

</table>

<div style={{ textAlign: 'center' }}>
  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
   
    <div>
      <label style={{ fontSize: '15px' }}>Signature Responsable Quantité</label>
      <br />
      {vente.sigRq}
    </div>
   
    <div>
      <label style={{ fontSize: '15px' }}>Signature Responsable production</label>
      <br />
      {vente.sigRp}
    </div>
  </div>

  
  <div style={{ display: isUpdateFormVisible ? "block" : "none" }}>
    <form onSubmit={handleUpdateSubmit} style={{ marginBottom: "10px" }}>
      <label style={{ fontSize: '15px', marginRight: '10px' }}>Signature Responsable production</label>
      <input type="text" name="sigRp" placeholder="Signature Responsable production" value={formData.sigRp} onChange={handleChange} style={{ fontSize: "12px", padding: "5px" }} />
      <button type="submit" className="custom-button">valider</button>
    </form>
  </div>

  
  <div onClick={() => { setFormData(vente); toggleUpdateFormVisibility(); }}>
    <img src={Log} alt="Editer" style={{ width: "30px", height: "30px", marginRight: "5px" }} />
  </div>
</div>

<br/>
            <br/>
            <br/>


  </div>
  )  )}
</div>
)}






export default RetourUpdate;