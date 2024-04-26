import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import Logoo from "../logoo.png";
import "../../index.css";
import "../../index"; 
const VoirControle = () => {
  const [categories, setCategories] = useState([]);
  const [date, setDate] = useState('');

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
      const url = `http://localhost:4000/controle/${selectedDate}`;
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
     
      <table style={{ width: '100%' }} >
        <tbody>
          <tr>
            <td style={{ display: 'flex', justifyContent: 'space-between' }}>
              <img src={Logoo} alt="Logoo" style={{ width: "120px", height: "60px" }} />
              <h2 style={{ textAlign: 'center', margin: '0', flexGrow: '1', marginTop: '10px' }}> Rapport Abattage</h2>
              <label type="text" style={{ width: '150px', textAlign: 'right', margin: '0' }}></label>
            </td>
          </tr>
        </tbody>
      </table>

      <br />
      <h4> Date : {date}</h4>

      <br />
      {categories.map(( vente, index) => (
        <div  key={index} style={{ width: '100%', margin: 'auto' }}>
        
        
        <table style={{ borderCollapse: "collapse", padding: "80px", margin: "auto", width: "999px", marginBottom: '90px' }}>

<tr>
                <td> Fournisseur </td>
                <td style={{ width: '70%' }}> 
                {vente.fourni} 
                 </td>

</tr>


<tr style={{  textAlign:"center" }}>
                <td > Date et heur de livraison </td>
                <td style={{ width: '20%' }}> 
                {vente.dateHeut} 
                 </td>

</tr>


<tr style={{ textAlign:"center" }}>
                <td> Designation de produit </td>
                <td style={{ width: '20%' }}> 
                {vente.pro} 
                 </td>

</tr>

<tr style={{ textAlign:"center" }}>
                <td> N fiche d'indentification </td>
                <td style={{ width: '20%' }}> 
                {vente.numfich} 
                 </td>

</tr>
<tr style={{ textAlign:"center" }}>
                <td> N de Plombage </td>
                <td style={{ width: '20%' }}> 
                {vente.numplom} 
                 </td>

</tr>

<tr style={{ textAlign:"center" }}>
                <td> N de lot interne</td>
                <td style={{ width: '20%' }}> 
                {vente.lot} 
                 </td>

</tr>

<tr style={{ textAlign:"center" }}>
                <td> duree de transport </td>
                <td style={{ width: '20%' }}> 
                {vente.duree} 
                 </td>

</tr>

<tr style={{ textAlign:"center" }}>
                <td> Quantite en piece </td>
                <td style={{ width: '20%' }}> 
                {vente.qtep} 
                 </td>

</tr>

<tr style={{ textAlign:"center" }}>
                <td> Quantite en kg </td>
                <td style={{ width: '20%' }}> 
                {vente.qtekg} 
                 </td>

</tr>

<tr style={{ textAlign:"center" }}>
                <td>Age (jours) </td>
                <td style={{ width: '20%' }}> 
                {vente.age} 
                 </td>

</tr>


<tr style={{ textAlign:"center" }}>
                <td>N BL/N Facture </td>
                <td style={{ width: '20%' }}> 
                {vente.numfac} 
                 </td>

</tr>

<tr style={{ textAlign:"center" }}>
                <td>N camion</td>
                <td style={{ width: '20%' }}> 
                {vente.numcamion} 
                 </td>

</tr>

<tr style={{ textAlign:"center" }}>
                <td>origine</td>
                <td style={{ width: '20%' }}> 
                {vente.origine} 
                 </td>

</tr>
</table>




<table style={{ borderCollapse: "collapse", padding: "80px", margin: "auto", width: "999px", marginBottom: '90px' ,  marginTop:"-60px"  }}>

<tr>
            <td style={{ width: '45%' }}> </td>
            <td style={{ width: '5%' }}>  C </td >
             <td style={{ width: '5%' }}>NC </td>
             <td>Observasiom </td>

</tr>


<tr>
            <td> Appreciation d'hygiene (camion , cage )</td>
            <td style={{ width: '20%', textAlign: 'center' }}>
  <input
    type="checkbox"
    checked={vente.c1 === 1} // Vérifie si c1 est égal à 1 pour cocher la case
    disabled 
    style={{  width: "20px", height: "20px" , textAlign:"center"}}// Désactive la case à cocher
  />
</td>
<td style={{ width: '20%', textAlign: 'center' }}>
  <input
    type="checkbox"
    checked={vente.nc1 === 1} // Vérifie si nc1 est égal à 1 pour cocher la case
    disabled // Désactive la case à cocher
    style={{ width: "20px", height: "20px" }}  />
</td>
             <td> 
             {vente.obs1} 
             </td>

</tr>

 
<tr>
            <td> presentation de certificat sanitaire veterinaire saigne par un veterinaire <br/> non &prenom de veto 
            {vente.nom} 
Reference et date du certificat  {vente.ref} 

</td>
            <td style={{ width: '20%', textAlign: 'center' }} > 
            <input
    type="checkbox"
    checked={vente.c2 === 1} // Vérifie si nc1 est égal à 1 pour cocher la case
    disabled // Désactive la case à cocher
    style={{ width: "20px", height: "20px" }}  />             </td>
             <td style={{ width: '20%', textAlign: 'center' }}> 
             <input
    type="checkbox"
    checked={vente.nc2 === 1} // Vérifie si nc1 est égal à 1 pour cocher la case
    disabled // Désactive la case à cocher
    style={{ width: "20px", height: "20px" }}  />             </td>
             <td> 
             {vente.obs2} 
             </td>

</tr>

<tr>
<td> Presentation d'une bulletin d'analyse pour la recherche de salmonellose emis par un laboratoir <br/>
Reference et dae de bulletin 
Reference et date du certificat                 {vente.refb} 



</td>
            <td style={{ width: '20%', textAlign: 'center' }}> 
            <input
    type="checkbox"
    checked={vente.c3 === 1} // Vérifie si nc1 est égal à 1 pour cocher la case
    disabled // Désactive la case à cocher
    style={{ width: "20px", height: "20px" }}  />             </td>
             <td style={{ width: '20%', textAlign: 'center' }}> 
             <input
    type="checkbox"
    checked={vente.nc3 === 1} // Vérifie si nc1 est égal à 1 pour cocher la case
    disabled // Désactive la case à cocher
    style={{ width: "20px", height: "20px" }}  />             </td>
             <td> 
             {vente.obs3} 
             </td>

</tr>





<tr>
<td>nombre de suijet mort
</td>
            <td style={{ width: '20%', textAlign: 'center' }}> 
            <input
    type="checkbox"
    checked={vente.c4 === 1} // Vérifie si nc1 est égal à 1 pour cocher la case
    disabled // Désactive la case à cocher
    style={{ width: "20px", height: "20px" }}  />             </td>
             <td style={{ width: '20%', textAlign: 'center' }} >  
             <input
    type="checkbox"
    checked={vente.nc4 === 1} // Vérifie si nc1 est égal à 1 pour cocher la case
    disabled // Désactive la case à cocher
    style={{ width: "20px", height: "20px" }}  />             </td>
             <td> 
             {vente.obs4} 
             </td>

</tr>

</table>


<table style={{ borderCollapse: "collapse", padding: "80px", margin: "auto", width: "999px", marginBottom: '90px' ,  marginTop:"-65px"  }}>

<tr>
<td> </td>
                <td> Decision </td>
                <td >  Observastion</td>

</tr>


<tr>
                <td> Acceptation sous reserve </td>
                <td style={{ width: '20%', textAlign: 'center' }}> 
                <input
    type="checkbox"
    checked={vente.accepSous === 1} // Vérifie si nc1 est égal à 1 pour cocher la case
    disabled // Désactive la case à cocher
    style={{ width: "20px", height: "20px" }}  /> 
                 </td>
                 <td style={{ width: '20%' }}> 
                 {vente.obsAccS}
                 </td>

</tr>


<tr>
                <td> Acceptation</td>
                <td style={{ width: '20%', textAlign: 'center' }}> 
                <input
    type="checkbox"
    checked={vente.accep === 1} // Vérifie si nc1 est égal à 1 pour cocher la case
    disabled // Désactive la case à cocher
    style={{ width: "20px", height: "20px" }}  />                  </td>
                 <td style={{ width: '20%' }}> 
                 {vente.obsAcc}
                 </td>

</tr>
<tr>
    <td>Refus</td>
    <td style={{ width: '20%', textAlign: 'center' }}> 
        <input
            type="checkbox"
            checked={vente.refus === 1} // Vérifie si nc1 est égal à 1 pour cocher la case
            disabled // Désactive la case à cocher
            style={{ width: "20px", height: "20px" }}  // Taille du checkbox
        /> 
    </td>
    <td style={{ width: '20%' }}> 
        {vente.obsRefus}
    </td>
</tr>
</table>

<div style={{ textAlign: 'center' }}>
    <div style={{ display: 'inline-block', marginRight: '20px' }}>
        <label style={{ fontSize: '15px', textAlign: 'center', margin: '0' }}>Signature CQH :</label>
        <br />
        {vente.sig}
 </div>

    <div style={{ display: 'inline-block', marginLeft: '20px' }}>
        <label style={{ fontSize: '15px', textAlign: 'center', margin: '0' }}>Signature Chef Equipe HACCP :</label>
        <br />
        {vente.sigChef}
  </div>
</div>




      
            
            
            </div>
      ))}
    </div>
  );
}

export default VoirControle;
