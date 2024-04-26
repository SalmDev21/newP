import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import Logoo from "../logoo.png";
import "../../index.css";
import "../../index";
import { useParams } from 'react-router-dom'; // Importer useParams
import { useLocation } from 'react-router-dom';
import Log from "../img/edit.png";

const UpdateNonp = () => {
        

     
    const [vente, setVente] = useState([]);
        const location = useLocation();
        const searchParams = new URLSearchParams(location.search);
        const id = searchParams.get('id');
        const [formData, setFormData] = useState({
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
        useEffect(() => {
            if (id) {
                fetchData(id);
            } else {
                console.error("Paramètre 'id' manquant dans l'URL.");
            }
        }, [id]);
    
        const fetchData = async (id) => {
            try {
                const response = await axios.get(`http://localhost:4000/nonpropre/${id}`);
                console.log(response.data);
                setVente(response.data);
            } catch (error) {
                console.error("Erreur lors de la récupération des données par ID :", error);
            }
        };
    
        console.log(vente); // Vérifier que les données sont bien présentes dans vente
             
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const toggleUpdateFormVisibility = () => {
    setIsUpdateFormVisible(!isUpdateFormVisible);
  };

  const resetFormData = () => {
    setFormData({
       
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
  }

const handleUpdateSubmit = async (e) => {
    e.preventDefault(); // Empêcher le comportement par défaut du formulaire
  
     try {
      await axios.put(`http://localhost:4000/nonpropre/update/${formData.id}`, formData);
      fetchData(formData.id); // Mettre à jour les données après la soumission du formulaire
      resetFormData();
    } catch (error) {
      console.error("Error updating vente:", error);
    }
  };
  
  const [isHided, setIsHided] = useState(true);
  const [isUpdateFormVisible, setIsUpdateFormVisible] = useState(false);
    
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
            <h2 style={{ textAlign: 'center', margin: '0', flexGrow: '1', marginTop: '10px' }}> Toute les  Fiche de Suivi de zone non-propre  </h2>
            {/* Input de date aligné à droite */}
            <label type="text"  style={{ width: '150px', textAlign: 'right', margin: '0' }}>  </label> 
          </td>
        </tr>
      </tbody>
    </table>

    <br/>



    

  
<div style={{ width: "100%" ,   textAlign: "center" }}>
<h4> Date : {format(new Date(vente.date), 'dd/MM/yyyy')}</h4>

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
      <p style={{ fontSize: "16px", width: "900px", margin: "auto", textAlign: "center" }}>
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
      {vente.tem1}            
              </td>

              <td td style={{ width: '25%' }}> 
              {vente.temp2}            
              </td>

              <td  > 
              {vente.tem3}            
              </td>
              <td  > 
              {vente.tem4}            
              </td>
              <td  > 
              {vente.tem5}            
              </td>
              <td  style={{ width: '20%' }} > 
              {vente.tem6}            
              </td>

              <td  style={{ width: '20%' }} > 
              {vente.tem7}            
              </td>
              <td  style={{ width: '20%' }} > 
              {vente.tem8}            
              </td>
              <td  style={{ width: '20%' }} > 
              {vente.tem9}            
              </td>
              <td  style={{ width: '20%' }} > 
              {vente.tem10}            
              </td>
              <td  style={{ width: '20%' }} > 
              {vente.tem11}            
              </td>
      </tr>

      <tr > 
      <td  style={{ width: '10%' }}> Temps 2  </td>


      <td style={{ width: '20%' }}> 
      {vente.tem12}            
              </td>

              <td td style={{ width: '25%' }}> 
              {vente.tem13}            
              </td>

              <td  style={{ width: '20%' }} > 
              {vente.tem14}            
              </td>
              <td  style={{ width: '20%' }} > 
              {vente.tem15}            
              </td>
              <td  style={{ width: '20%' }} > 
              {vente.tem16}            
              </td>
              <td  style={{ width: '20%' }} > 
              {vente.tem17}            
              </td>
              <td  style={{ width: '20%' }} > 
              {vente.tem18}            
              </td>
              <td  style={{ width: '20%' }} > 
              {vente.tem19}            
              </td>
              <td  style={{ width: '20%' }} > 
              {vente.tem20}            
              </td>
              <td  style={{ width: '20%' }} > 
              {vente.tem21}            
              </td>

              <td  style={{ width: '20%' }} > 
              {vente.tem22}            
              </td>
              
</tr>
</table>



<table style={{ borderCollapse: "collapse", padding: "80px", margin: "auto", width: "999px", marginBottom: '90px' }}>

<thead>
  <tr style={{ textAlign: 'center', fontSize: '16px' }}>
    <th></th>
    <th colSpan="13">
      <p style={{ fontSize: "16px", width: "900px", margin: "auto", textAlign: "center" }}>
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
      {vente.tem23}            
              </td>

              <td td style={{ width: '25%' }}> 
              {vente.tem24}            
              </td>

              <td  > 
              {vente.tem25}            
              </td>
              <td  > 
              {vente.tem26}            
              </td>
              <td  > 
              {vente.tem27}            
              </td>
              <td  style={{ width: '20%' }} > 
              {vente.tem28}            
              </td>

              <td  style={{ width: '20%' }} > 
              {vente.tem29}            
              </td>
              <td  style={{ width: '20%' }} > 
              {vente.tem30}            
              </td>
            
      </tr>

      <tr > 
      <td > Temps 2  </td>


      <td  style={{ width: '20%' }} > 
      {vente.tem31}            
              </td>
              <td  style={{ width: '20%' }} > 
              {vente.tem32}            
              </td>
              <td  style={{ width: '20%' }} > 
              {vente.tem33}            
              </td>

              <td  style={{ width: '20%' }} > 
              {vente.tem34}            
              </td> <td  style={{ width: '20%' }} > 
              {vente.tem35}            
              </td>
              <td  style={{ width: '20%' }} > 
              {vente.tem36}            
              </td>
              <td  style={{ width: '20%' }} > 
              {vente.tem37}            
              </td>
              <td  style={{ width: '20%' }} > 
              {vente.tem38}            
              </td>
</tr>
</table>



<div style={{ textAlign: 'center' }}>
  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
   
    <div>
      <label style={{ fontSize: '15px' }}>Signature Responsable Quantité</label>
      <br />
      {vente.sig}
    </div>
   
    <div>
      <label style={{ fontSize: '15px' }}>Signature Responsable production</label>
      <br />
      {vente.sigchef}
    </div>
  </div>

  
  <div style={{ display: isUpdateFormVisible ? "block" : "none" }}>
    <form onSubmit={handleUpdateSubmit} style={{ marginBottom: "10px" }}>
      <label style={{ fontSize: '15px', marginRight: '10px' }}>Signature Responsable production</label>
      <input type="text" name="sigchef" placeholder="Signature Responsable production" value={formData.sigchef} onChange={handleChange} style={{ fontSize: "12px", padding: "5px" }} />
      <button type="submit" className="custom-button">valider</button>
    </form>
  </div>

  
  <div onClick={() => { setFormData(vente); toggleUpdateFormVisibility(); }}>
    <img src={Log} alt="Editer" style={{ width: "30px", height: "30px", marginRight: "5px" }} />
  </div>
</div>




  </div>
  )  )}
</div>
)}






export default UpdateNonp;