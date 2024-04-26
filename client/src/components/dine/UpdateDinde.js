import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import Logoo from "../logoo.png";
import "../../index.css";
import "../../index";
import { useParams } from 'react-router-dom'; // Importer useParams
import { useLocation } from 'react-router-dom';
import Log from "../img/edit.png";

const UpdateDinde = () => {
        

    
    const [vente, setVente] = useState([]);
        const location = useLocation();
        const searchParams = new URLSearchParams(location.search);
        const id = searchParams.get('id');
        const [formData, setFormData] = useState({
         
id :"",
date:"",
chef:"",
nature1:"",
qte1:"", 
date1:"",
lot1:"",
nature2:"",
poi1:"",
ren:"",
lot2:"",
quali1:"",
corr1:"",
nature3:"",
qte2:"",
date3:"",
lot3:"",



nature4:"",
poi2:"",
ren0:"",
lot4:"",
quali2:"",
corr2:"",
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
nom13:"",
nom14:"",
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
ren13:"",
ren14:"",

sig1:"",
sig2:"",
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
                const response = await axios.get(`http://localhost:4000/dinde/${id}`);
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
        
           
                 
id :"",
date:"",
chef:"",
nature1:"",
qte1:"", 
date1:"",
lot1:"",
nature2:"",
poi1:"",
ren:"",
lot2:"",
quali1:"",
corr1:"",
nature3:"",
qte2:"",
date3:"",
lot3:"",



nature4:"",
poi2:"",
ren0:"",
lot4:"",
quali2:"",
corr2:"",
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
nom13:"",
nom14:"",
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
ren13:"",
ren14:"",

sig1:"",
sig2:"",
sigchef:"",
      
    });
  }

const handleUpdateSubmit = async (e) => {
    e.preventDefault(); // Empêcher le comportement par défaut du formulaire
  
     try {
      await axios.put(`http://localhost:4000/dinde/update/${formData.id}`, formData);
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
            <h2 style={{ textAlign: 'center', margin: '0', flexGrow: '1', marginTop: '10px' }}> CHECK LIST DU CAMION </h2>
            {/* Input de date aligné à droite */}
            <label type="text"  style={{ width: '150px', textAlign: 'right', margin: '0' }}>  </label> 
          </td>
        </tr>
      </tbody>
    </table>

    <br/>


    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
    <div style={{ marginRight: "300px", marginBottom: "10px", textAlign: "center" }}>
        <label htmlFor="date">date:</label>
        <div>{format(new Date(vente.date), 'dd/MM/yyyy')}</div>
    </div>
    <div style={{ marginBottom: "10px", textAlign: "center" }}>
        <label htmlFor="chef">Chef Production:</label>
        <div>{vente.chef}</div>
    </div>
</div>















<br/>


<table style={{ borderCollapse: "collapse", padding: "80px", margin: "auto", width: "999px", marginBottom: '90px' }}>

      <tr  style={{ width: '25px' }} > 
     
              <td > Produit a decoupr  </td>

              <td   style={{ width: '25px' }}> CUISSE DINDE FRAIS Nature : 
              {vente.nature1}                </td>

              <td > 
Quantité              </td>
              <td  style={{ width: '25px' }}> 
              {vente.qte1}                </td>
              <td   > 
date production              </td>
              <td  style={{ width: '20%' }}> 
              {vente.date1}                </td>


              <td  style={{ width: '60px' }}> 
N lot             </td>
              <td  style={{ width: '25px' }} > 
              {vente.lot1}                </td>
      </tr>







      <tr style={{ textAlign: 'center'  , fontSize: '16px' , width: '20%'}}>
          <th>Article</th>
          <th>Nombre Lames</th>
          <th>Poids Net (kg)</th>
          <th>N°lot</th>
          <th>Quantité organoleptique</th>
          <th >Correcton</th>

      </tr>
      <tr  style={{ width: '25px' }} > 
              <td  style={{ width: '20px' }} > 
  STEAK DINDE FRAIS Nature {vente.nature2}    
          </td>

              <td > 
              {vente.poi1}                              </td>

              
              <td > 
              {vente.ren}                              </td>
              <td > 
              {vente.lot2}                              </td>
              <td  style={{ width: '20%' }}> 
              {vente.quali1}                              </td>
              <td > 
              {vente.corr1}                              </td>
      </tr>
</table>






<table style={{ borderCollapse: "collapse", padding: "80px", margin: "auto", width: "999px", marginBottom: '90px' }}>

      

      <tr > 
      <td style={{ width: '20%' }}>  Nom et prenom
              </td>

              <td td style={{ width: '25%' }}> Rendement 
              </td>

             
      </tr>

      <tr > 
      <td style={{ width: '20%' }}> 
      {vente.nom1}                              </td>

              <td td style={{ width: '25%' }}> 
              {vente.ren1}                              </td>

             
</tr>

<tr > 
<td style={{ width: '20%' }}> 
      {vente.nom2}                              </td>

              <td td style={{ width: '25%' }}> 
              {vente.ren2}                              </td>

             
</tr>

<tr > 
<td style={{ width: '20%' }}> 
      {vente.nom3}                              </td>

              <td td style={{ width: '25%' }}> 
              {vente.ren3}                              </td>

             
</tr>
<tr > 
<td style={{ width: '20%' }}> 
      {vente.nom4}                              </td>

              <td td style={{ width: '25%' }}> 
              {vente.ren4}                              </td>

             
</tr>


<tr > 
<td style={{ width: '20%' }}> 
      {vente.nom5}                              </td>

              <td td style={{ width: '25%' }}> 
              {vente.ren5}                              </td>


             
</tr>

<tr > 
<td style={{ width: '20%' }}> 
      {vente.nom6}                              </td>

              <td td style={{ width: '25%' }}> 
              {vente.ren6}                              </td>


             
</tr>
<tr > 
<td style={{ width: '20%' }}> 
      {vente.nom7}                              </td>

              <td td style={{ width: '25%' }}> 
              {vente.ren7}                              </td>

             
</tr>
<tr > 
<td style={{ width: '20%' }}> 
      {vente.nom8}                              </td>

              <td td style={{ width: '25%' }}> 
              {vente.ren8}                              </td>


             
</tr>
<tr > 
<td style={{ width: '20%' }}> 
      {vente.nom9}                              </td>

              <td td style={{ width: '25%' }}> 
              {vente.ren9}                              </td>


             
</tr>

<tr > 
<td style={{ width: '20%' }}> 
      {vente.nom10}                              </td>

              <td td style={{ width: '25%' }}> 
              {vente.ren10}                              </td>


             
</tr>
<tr > 
<td style={{ width: '20%' }}> 
      {vente.nom11}                              </td>

              <td td style={{ width: '25%' }}> 
              {vente.ren11}                              </td>


             
</tr>


<tr > 
<td style={{ width: '20%' }}> 
      {vente.nom12}                              </td>

              <td td style={{ width: '25%' }}> 
              {vente.ren12}                              </td>


             
</tr>

<tr > 
<td style={{ width: '20%' }}> 
      {vente.nom13}                              </td>

              <td td style={{ width: '25%' }}> 
              {vente.ren13}                              </td>

             
</tr>


<tr > 
<td style={{ width: '20%' }}> 
      {vente.nom14}                              </td>

              <td td style={{ width: '25%' }}> 
              {vente.ren14}                              </td>


             
</tr>

</table>





<div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
  <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
    <label htmlFor="sig2" style={{ marginRight: "250px", marginBottom: "10px" }}>Signature chef de production :</label>
    <span>{vente.sig2}</span>
  </div>

  <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
    <label htmlFor="sig1" style={{ marginRight: "250px", marginBottom: "10px" }}>Signature chef de production :</label>
    <span>{vente.sig1}</span>
  </div>

  <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
    <label htmlFor="sigchef" style={{ marginRight: "250px", marginBottom: "10px" }}>Signature Chef Equipe HACCP :</label>
    <span>{vente.sigchef}</span>
  </div>
<br/>
  <div onClick={() => { setFormData(vente); toggleUpdateFormVisibility(); }} style={{ marginRight: "20px", cursor: "pointer" }}>
    <img src={Log} alt="Editer" style={{ width: "30px", height: "30px", marginRight: "5px" }} /><br/>
    <span>Editer</span>
  </div>
</div>

<div style={{ display: isUpdateFormVisible ? "block" : "none", textAlign: "center", marginTop: "10px" }}>
  <form onSubmit={handleUpdateSubmit}>
    <div style={{ marginBottom: "10px" }}>
      <label style={{ fontSize: '15px', marginRight: '10px' }}>Signature Responsable production :</label>
      <input type="text" name="sig1" placeholder="Signature Responsable production" value={formData.sig1} onChange={handleChange} style={{ fontSize: "12px", padding: "5px" }} />
    </div>

    <div style={{ marginBottom: "10px" }}>
      <label style={{ fontSize: '15px', marginRight: '10px' }}>Signature Chef Equipe HACCP :</label>
      <input type="text" name="sigchef" placeholder="Signature Chef Equipe HACCP" value={formData.sigchef} onChange={handleChange} style={{ fontSize: "12px", padding: "5px" }} />
    </div>

    <button type="submit" className="custom-button">Valider</button>
  </form>
</div>











  </div>
  )  )}
</div>
)}






export default UpdateDinde ;