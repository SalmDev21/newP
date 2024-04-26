import React, { useState, useEffect , useRef} from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import Logoo from "../logoo.png";
import "../../index.css";
import "../../index";
import { useParams } from 'react-router-dom'; // Importer useParams
import { useLocation } from 'react-router-dom';
import ReactToPrint from "react-to-print";
import imprimer from "../img/print.jpg";
const PrintCamion = () => {
        

    
    const [vente, setVente] = useState([]);
        const location = useLocation();
        const searchParams = new URLSearchParams(location.search);
        const id = searchParams.get('id');
        const componentRef = useRef();

        useEffect(() => {
            if (id) {
                fetchData(id);
            } else {
                console.error("Paramètre 'id' manquant dans l'URL.");
            }
        }, [id]);
    
        const fetchData = async (id) => {
            try {
                const response = await axios.get(`http://localhost:4000/camion/${id}`);
                console.log(response.data);
                setVente(response.data);
            } catch (error) {
                console.error("Erreur lors de la récupération des données par ID :", error);
            }
        };
    
        console.log(vente); // Vérifier que les données sont bien présentes dans vente
    
    
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
  <div  ref={componentRef}>
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





    

  
<div style={{ width: "100%" }}>
<h4> Date : {format(new Date(vente.date), 'dd/MM/yyyy')}</h4>

</div>






<table style={{ borderCollapse: "collapse", padding: "10px", margin: "auto", width: "999px", marginBottom: '90px' }}>
            <thead   >
                <tr style={{ width:"20px" }}>
                <td>
                Numéro de camion: {vente.numc1}            

    </td>
    Livreur:              {vente.liv1}            
 </tr>
            </thead>
      <tr> 
      <th   style={{width:"3px", textAlign:"center"}} >Verification</th>
        <th  style={{width:"3px", textAlign:"center"}} >C</th>
        <th   style={{width:"3px", textAlign:"center"}}   >NC</th>
        <th style={{width:"3px", textAlign:"center"}} >Observations</th>         
      </tr>

      <tr> 
    
            <td   style={{ width :"20%"}}>Documents</td>
            <td style={{ textAlign: 'center' }} >
            <input
    type="checkbox"
    checked={vente.c1 === 1} // Vérifie si c1 est égal à 1 pour cocher la case
    disabled 
    style={{  width: "20px", height: "20px"}}// Désactive la case à cocher
  /></td>

<td style={{ textAlign: 'center', width :"10%"}} >
<input
    type="checkbox"
    checked={vente.nc1 === 1} // Vérifie si c1 est égal à 1 pour cocher la case
    disabled 
    style={{  width: "20px", height: "20px"}}// Désactive la case à cocher
  />
</td>

              <td> 
{vente.obs1}              </td>
             
      </tr>




<tr> 
    
    <td>Température et ventilation</td>
    <td style={{ textAlign: 'center' , width :"10%"}} >
    <input
    type="checkbox"
    checked={vente.c2 === 1} // Vérifie si c1 est égal à 1 pour cocher la case
    disabled 
    style={{  width: "20px", height: "20px"}}// Désactive la case à cocher
  /></td>

<td style={{ textAlign: 'center', width :"10%"}} >
<input
    type="checkbox"
    checked={vente.nc1 === 1} // Vérifie si c1 est égal à 1 pour cocher la case
    disabled 
    style={{  width: "20px", height: "20px"}}// Désactive la case à cocher
  />
</td>

      <td> 
{vente.obs2}      </td>
     
</tr>











<tr> 
    
    <td>Vérification générales du camion</td>
    <td style={{ textAlign: 'center' , width :"10%"}} >
    <input
    type="checkbox"
    checked={vente.c3 === 1} // Vérifie si c1 est égal à 1 pour cocher la case
    disabled 
    style={{  width: "20px", height: "20px"}}// Désactive la case à cocher
  /></td>

<td style={{ textAlign: 'center', width :"10%"}} >
<input
    type="checkbox"
    checked={vente.nc3 === 1} // Vérifie si c1 est égal à 1 pour cocher la case
    disabled 
    style={{  width: "20px", height: "20px"}}// Désactive la case à cocher
  />
</td>

      <td> 
{vente.obs3}      </td>
     
</tr>

<tr> 
    
    <td>Hygiéne livreur</td>
    <td style={{ textAlign: 'center' , width :"10%"}} >
    <input
    type="checkbox"
    checked={vente.c4 === 1} // Vérifie si c1 est égal à 1 pour cocher la case
    disabled 
    style={{  width: "20px", height: "20px"}}// Désactive la case à cocher
  /></td>

<td style={{ textAlign: 'center', width :"10%"}} >
<input
    type="checkbox"
    checked={vente.c4 === 1} // Vérifie si c1 est égal à 1 pour cocher la case
    disabled 
    style={{  width: "20px", height: "20px"}}// Désactive la case à cocher
  />
</td>

      <td> 
{vente.obs4}      </td>
     
</tr>


<tr> 
    
    <td>Hygiéne engin</td>
    <td style={{ textAlign: 'center' , width :"10%"}} >
    <input
    type="checkbox"
    checked={vente.c5 === 1} // Vérifie si c1 est égal à 1 pour cocher la case
    disabled 
    style={{  width: "20px", height: "20px"}}// Désactive la case à cocher
  /></td>

<td style={{ textAlign: 'center', width :"10%"}} >
<input
    type="checkbox"
    checked={vente.nc5 === 1} // Vérifie si c1 est égal à 1 pour cocher la case
    disabled 
    style={{  width: "20px", height: "20px"}}// Désactive la case à cocher
  />
</td>

      <td> 
{vente.obs5}      </td>
     
</tr>
</table>
            <div style={{ fontSize: '15px' ,marginRight: '50px', textAlign: 'center', margin: '0' }}> <label    style={{ fontSize: '15px' ,marginRight: '50px', textAlign: 'center', margin: '0' }}>Signature CQH: </label> 
             <br/>
           {vente.sig1} </div>










<table style={{ borderCollapse: "collapse", padding: "80px", margin: "auto", width: "999px", marginBottom: '90px' }}>
            <thead>
                <tr >
                <td > 
                Numéro de comion : {vente.numc2}</td>
               Livreur :{vente.liv2}   </tr>
            </thead>
      <tr> 
      <th   style={{width:"3px", textAlign:"center"}} >Verification</th>
        <th  style={{width:"3px", textAlign:"center"}} >C</th>
        <th   style={{width:"3px", textAlign:"center"}}   >NC</th>
        <th style={{width:"3px", textAlign:"center"}} >Observations</th>       
      </tr>

      <tr> 
    
            <td   style={{ width :"20%"}}>Documents</td>
            <td style={{ textAlign: 'center' , width :"5%"}} >
            <input
    type="checkbox"
    checked={vente.c6 === 1} // Vérifie si c1 est égal à 1 pour cocher la case
    disabled 
    style={{  width: "20px", height: "20px"}}// Désactive la case à cocher
  /></td>

<td style={{ textAlign: 'center', width :"10%"}} >
<input
    type="checkbox"
    checked={vente.nc6 === 1} // Vérifie si c1 est égal à 1 pour cocher la case
    disabled 
    style={{  width: "20px", height: "20px"}}// Désactive la case à cocher
  />
</td>

              <td> 
{vente.obs6}              </td>
             
      </tr>




<tr> 
    
    <td>Température et ventilation</td>
    <td style={{ textAlign: 'center' , width :"10%"}} >
    <input
    type="checkbox"
    checked={vente.c7 === 1} // Vérifie si c1 est égal à 1 pour cocher la case
    disabled 
    style={{  width: "20px", height: "20px"}}// Désactive la case à cocher
  />
  </td>
  <td  style={{ textAlign: 'center' , width :"10%"}}>
        <input
    type="checkbox"
    checked={vente.nc7 === 1} // Vérifie si c1 est égal à 1 pour cocher la case
    disabled 
    style={{  width: "20px", height: "20px"}}// Désactive la case à cocher
  />
</td>

      <td> 
{vente.obs7}      </td>
     
</tr>











<tr> 
    
    <td>Vérification générales du camion</td>
    <td style={{ textAlign: 'center' , width :"10%"}} >
    <input
    type="checkbox"
    checked={vente.c8 === 1} // Vérifie si c1 est égal à 1 pour cocher la case
    disabled 
    style={{  width: "20px", height: "20px"}}// Désactive la case à cocher
  /></td>



<td style={{ textAlign: 'center', width :"10%"}} >
<input
    type="checkbox"
    checked={vente.nc8 === 1} // Vérifie si c1 est égal à 1 pour cocher la case
    disabled 
    style={{  width: "20px", height: "20px"}}// Désactive la case à cocher
  />
</td>

      <td> 
{vente.obs8}      </td>
     
</tr>

<tr> 
    
    <td>Hygiéne livreur</td>
    <td style={{ textAlign: 'center' , width :"10%"}} >
    <input
    type="checkbox"
    checked={vente.c9 === 1} // Vérifie si c1 est égal à 1 pour cocher la case
    disabled 
    style={{  width: "20px", height: "20px"}}// Désactive la case à cocher
  /></td>

<td style={{ textAlign: 'center', width :"10%"}} >
<input
    type="checkbox"
    checked={vente.nc9 === 1} // Vérifie si c1 est égal à 1 pour cocher la case
    disabled 
    style={{  width: "20px", height: "20px"}}// Désactive la case à cocher
  />
</td>

      <td> 
{vente.obs9}      </td>
     
</tr>


<tr> 
    
    <td>Hygiéne engin</td>
    <td style={{ textAlign: 'center' , width :"10%"}} >
    <input
    type="checkbox"
    checked={vente.c10 === 1} // Vérifie si c1 est égal à 1 pour cocher la case
    disabled 
    style={{  width: "20px", height: "20px"}}// Désactive la case à cocher
  /></td>

<td style={{ textAlign: 'center', width :"10%"}} >
<input
    type="checkbox"
    checked={vente.nc10 === 1} // Vérifie si c1 est égal à 1 pour cocher la case
    disabled 
    style={{  width: "20px", height: "20px"}}// Désactive la case à cocher
  />
</td>

      <td> 
{vente.obs10}      </td>
     
</tr>








      
     

</table>





     
             <div  style={{ fontSize: '15px' ,marginRight: '50px', textAlign: 'center', margin: '0' }}> <label    style={{ fontSize: '15px' ,marginRight: '50px', textAlign: 'center', margin: '0' }}>Signature CQH: </label> 
             <br/>
           {vente.sig2} </div>







<table style={{ borderCollapse: "collapse", padding: "80px", margin: "auto", width: "999px", marginBottom: '90px' }}>
            <thead>
                <tr >
                <td > 
                Numero de comion : {vente.numc3}  </td>
               Livreur : {vente.liv3}  
                </tr>
            </thead>
      <tr> 
      <th   style={{width:"3px", textAlign:"center"}} >Verification</th>
        <th  style={{width:"3px", textAlign:"center"}} >C</th>
        <th   style={{width:"3px", textAlign:"center"}}   >NC</th>
        <th style={{width:"3px", textAlign:"center"}} >Observations</th>         
      </tr>

      <tr> 
    
            <td   style={{ width :"20%"}}>Documents</td>
            <td style={{ textAlign: 'center' , width :"5%"}} >
            <input
    type="checkbox"
    checked={vente.c11 === 1} // Vérifie si c1 est égal à 1 pour cocher la case
    disabled 
    style={{  width: "20px", height: "20px"}}// Désactive la case à cocher
  /></td>

<td style={{ textAlign: 'center', width :"10%"}} >
<input
    type="checkbox"
    checked={vente.c11 === 1} // Vérifie si c1 est égal à 1 pour cocher la case
    disabled 
    style={{  width: "20px", height: "20px"}}// Désactive la case à cocher
  />
</td>

              <td> 
{vente.obs11}              </td>
             
      </tr>




<tr> 
    
    <td>Température et ventilation</td>
    <td style={{ textAlign: 'center' , width :"10%"}} >
    <input
    type="checkbox"
    checked={vente.c12 === 1} // Vérifie si c1 est égal à 1 pour cocher la case
    disabled 
    style={{  width: "20px", height: "20px"}}// Désactive la case à cocher
  /></td>

<td style={{ textAlign: 'center', width :"10%"}} >
<input
    type="checkbox"
    checked={vente.nc12 === 1} // Vérifie si c1 est égal à 1 pour cocher la case
    disabled 
    style={{  width: "20px", height: "20px"}}// Désactive la case à cocher
  />
</td>

      <td> 
{vente.obs12}      </td>
     
</tr>











<tr> 
    
    <td>Vérification générales du camion</td>
    <td style={{ textAlign: 'center' , width :"10%"}} >
    <input
    type="checkbox"
    checked={vente.c13 === 1} // Vérifie si c1 est égal à 1 pour cocher la case
    disabled 
    style={{  width: "20px", height: "20px"}}// Désactive la case à cocher
  /></td>

<td style={{ textAlign: 'center', width :"10%"}} >
<input
    type="checkbox"
    checked={vente.nc13 === 1} // Vérifie si c1 est égal à 1 pour cocher la case
    disabled 
    style={{  width: "20px", height: "20px"}}// Désactive la case à cocher
  />
</td>

      <td> 
{vente.obs13}      </td>
     
</tr>

<tr> 
    
    <td>Hygiéne livreur</td>
    <td style={{ textAlign: 'center' , width :"10%"}} >
    <input
    type="checkbox"
    checked={vente.c14 === 1} // Vérifie si c1 est égal à 1 pour cocher la case
    disabled 
    style={{  width: "20px", height: "20px"}}// Désactive la case à cocher
  /></td>

<td style={{ textAlign: 'center', width :"10%"}} >
<input
    type="checkbox"
    checked={vente.nc14 === 1} // Vérifie si c1 est égal à 1 pour cocher la case
    disabled 
    style={{  width: "20px", height: "20px"}}// Désactive la case à cocher
  />
</td>

      <td> 
{vente.obs14}      </td>
     
</tr>


<tr> 
    
    <td>Hygiéne engin</td>
    <td style={{ textAlign: 'center' , width :"10%"}} >
    <input
    type="checkbox"
    checked={vente.c15 === 1} // Vérifie si c1 est égal à 1 pour cocher la case
    disabled 
    style={{  width: "20px", height: "20px"}}// Désactive la case à cocher
  /></td>

<td style={{ textAlign: 'center', width :"10%"}} >
<input
    type="checkbox"
    checked={vente.nc15 === 1} // Vérifie si c1 est égal à 1 pour cocher la case
    disabled 
    style={{  width: "20px", height: "20px"}}// Désactive la case à cocher
  />
</td>

      <td> 
{vente.obs15}      </td>
     
</tr>








      
     

</table>





     
             <div  style={{ fontSize: '15px' ,marginRight: '50px', textAlign: 'center', margin: '0' }}> <label    style={{ fontSize: '15px' ,marginRight: '50px', textAlign: 'center', margin: '0' }}>Signature CQH: </label> 
             <br/>
            {vente.sig3} </div>




<table style={{ borderCollapse: "collapse", padding: "80px", margin: "auto", width: "999px", marginBottom: '90px' }}>
            <thead>
                <tr >
                <td > 
                Numero de comion : {vente.numc4}  </td>
               Livreur :{vente.liv4}  
                </tr>
            </thead>
      <tr> 
      <th   style={{width:"3px", textAlign:"center"}} >Verification</th>
        <th  style={{width:"3px", textAlign:"center"}} >C</th>
        <th   style={{width:"3px", textAlign:"center"}}   >NC</th>
        <th style={{width:"3px", textAlign:"center"}} >Observations</th>      
      </tr>

      <tr> 
    
            <td   style={{ width :"20%"}}>Documents</td>
            <td style={{ textAlign: 'center' , width :"5%"}} >
            <input
    type="checkbox"
    checked={vente.c16 === 1} // Vérifie si c1 est égal à 1 pour cocher la case
    disabled 
    style={{  width: "20px", height: "20px"}}// Désactive la case à cocher
  /></td>

<td style={{ textAlign: 'center', width :"10%"}} >
<input
    type="checkbox"
    checked={vente.nc16 === 1} // Vérifie si c1 est égal à 1 pour cocher la case
    disabled 
    style={{  width: "20px", height: "20px"}}// Désactive la case à cocher
  />
</td>

              <td> 
{vente.obs16}              </td>
             
      </tr>




<tr> 
    
    <td>Température et ventilation</td>
    <td style={{ textAlign: 'center' , width :"10%"}} >
    <input
    type="checkbox"
    checked={vente.c17 === 1} // Vérifie si c1 est égal à 1 pour cocher la case
    disabled 
    style={{  width: "20px", height: "20px"}}// Désactive la case à cocher
  /></td>

<td style={{ textAlign: 'center', width :"10%"}} >
<input
    type="checkbox"
    checked={vente.nc17 === 1} // Vérifie si c1 est égal à 1 pour cocher la case
    disabled 
    style={{  width: "20px", height: "20px"}}// Désactive la case à cocher
  />
</td>

      <td> 
{vente.obs17}      </td>
     
</tr>











<tr> 
    
    <td>Vérification générales du camion</td>
    <td style={{ textAlign: 'center' , width :"10%"}} >
    <input
    type="checkbox"
    checked={vente.c18 === 1} // Vérifie si c1 est égal à 1 pour cocher la case
    disabled 
    style={{  width: "20px", height: "20px"}}// Désactive la case à cocher
  /></td>

<td style={{ textAlign: 'center', width :"10%"}} >
<input
    type="checkbox"
    checked={vente.nc18 === 1} // Vérifie si c1 est égal à 1 pour cocher la case
    disabled 
    style={{  width: "20px", height: "20px"}}// Désactive la case à cocher
  />
</td>

      <td> 
{vente.obs18}      </td>
     
</tr>

<tr> 
    
    <td>Hygiéne livreur</td>
    <td style={{ textAlign: 'center' , width :"10%"}} >
    <input
    type="checkbox"
    checked={vente.c19 === 1} // Vérifie si c1 est égal à 1 pour cocher la case
    disabled 
    style={{  width: "20px", height: "20px"}}// Désactive la case à cocher
  />       </td>

<td style={{ textAlign: 'center', width :"10%"}} >
<input
    type="checkbox"
    checked={vente.nc19 === 1} // Vérifie si c1 est égal à 1 pour cocher la case
    disabled 
    style={{  width: "20px", height: "20px"}}// Désactive la case à cocher
  />
</td>

      <td> 
{vente.obs19}      </td>
     
</tr>


<tr> 
    
    <td>Hygiéne engin</td>
    <td style={{ textAlign: 'center' , width :"10%"}} >
    <input
    type="checkbox"
    checked={vente.c20 === 1} // Vérifie si c1 est égal à 1 pour cocher la case
    disabled 
    style={{  width: "20px", height: "20px"}}// Désactive la case à cocher
  /></td>

<td style={{ textAlign: 'center', width :"10%"}} >
<input
    type="checkbox"
    checked={vente.c20 === 1} // Vérifie si c1 est égal à 1 pour cocher la case
    disabled 
    style={{  width: "20px", height: "20px"}}// Désactive la case à cocher
  />
</td>

      <td> 
{vente.obs20}      </td>
     
</tr>








      
     

</table>





     
             <div  style={{ fontSize: '15px' ,marginRight: '50px', textAlign: 'center', margin: '0' }}> <label    style={{ fontSize: '15px' ,marginRight: '50px', textAlign: 'center', margin: '0' }}>Signature CQH: </label> 
             <br/>
            {vente.sig4} </div>

<table style={{ borderCollapse: "collapse", padding: "80px", margin: "auto", width: "999px", marginBottom: '90px' }}>
            <thead>
                <tr >
                <td > 
                Numero de comion :{vente.numc5} </td>
               Livreur : {vente.liv5} </tr>
            </thead>
      <tr> 
      <th   style={{width:"3px", textAlign:"center"}} >Verification</th>
        <th  style={{width:"3px", textAlign:"center"}} >C</th>
        <th   style={{width:"3px", textAlign:"center"}}   >NC</th>
        <th style={{width:"3px", textAlign:"center"}} >Observations</th>      
      </tr>

      <tr> 
    
            <td   style={{ width :"20%"}}>Documents</td>
            <td style={{ textAlign: 'center' , width :"5%"}} >
            <input
    type="checkbox"
    checked={vente.c21 === 1} // Vérifie si c1 est égal à 1 pour cocher la case
    disabled 
    style={{  width: "20px", height: "20px"}}// Désactive la case à cocher
  /></td>

<td style={{ textAlign: 'center', width :"10%"}} >
<input
    type="checkbox"
    checked={vente.nc21 === 1} // Vérifie si c1 est égal à 1 pour cocher la case
    disabled 
    style={{  width: "20px", height: "20px"}}// Désactive la case à cocher
  />
</td>

              <td> 
{vente.obs21}              </td>
             
      </tr>




<tr> 
    
    <td>Température et ventilation</td>
    <td style={{ textAlign: 'center' , width :"10%"}} >
    <input
    type="checkbox"
    checked={vente.c22 === 1} // Vérifie si c1 est égal à 1 pour cocher la case
    disabled 
    style={{  width: "20px", height: "20px"}}// Désactive la case à cocher
  /></td>

<td style={{ textAlign: 'center', width :"10%"}} >
<input
    type="checkbox"
    checked={vente.nc22 === 1} // Vérifie si c1 est égal à 1 pour cocher la case
    disabled 
    style={{  width: "20px", height: "20px"}}// Désactive la case à cocher
  />
</td>

      <td> 
{vente.obs22}      </td>
     
</tr>











<tr> 
    
    <td>Vérification générales du camion</td>
    <td style={{ textAlign: 'center' , width :"10%"}} >
    <input
    type="checkbox"
    checked={vente.c23 === 1} // Vérifie si c1 est égal à 1 pour cocher la case
    disabled 
    style={{  width: "20px", height: "20px"}}// Désactive la case à cocher
  /></td>

<td style={{ textAlign: 'center', width :"10%"}} >
<input
    type="checkbox"
    checked={vente.nc23 === 1} // Vérifie si c1 est égal à 1 pour cocher la case
    disabled 
    style={{  width: "20px", height: "20px"}}// Désactive la case à cocher
  />
</td>

      <td> 
{vente.obs23}      </td>
     
</tr>

<tr> 
    
    <td>Hygiéne livreur</td>
    <td style={{ textAlign: 'center' , width :"10%"}} >
    <input
    type="checkbox"
    checked={vente.c24 === 1} // Vérifie si c1 est égal à 1 pour cocher la case
    disabled 
    style={{  width: "20px", height: "20px"}}// Désactive la case à cocher
  /></td>

<td style={{ textAlign: 'center', width :"10%"}} >
<input
    type="checkbox"
    checked={vente.nc24 === 1} // Vérifie si c1 est égal à 1 pour cocher la case
    disabled 
    style={{  width: "20px", height: "20px"}}// Désactive la case à cocher
  />
</td>

      <td> 
{vente.obs24}      </td>
     
</tr>


<tr> 
    
    <td>Hygiéne engin</td>
    <td style={{ textAlign: 'center' , width :"10%"}} >
    <input
    type="checkbox"
    checked={vente.c25 === 1} // Vérifie si c1 est égal à 1 pour cocher la case
    disabled 
    style={{  width: "20px", height: "20px"}}// Désactive la case à cocher
  /></td>

<td style={{ textAlign: 'center', width :"10%"}} >
<input
    type="checkbox"
    checked={vente.nc25 === 1} // Vérifie si c1 est égal à 1 pour cocher la case
    disabled 
    style={{  width: "20px", height: "20px"}}// Désactive la case à cocher
  />
</td>

      <td> 
{vente.obs25}      </td>
     
</tr>








      
     

</table>





     
             <div style={{ marginTop:"-80px" , fontSize: '15px' ,marginRight: '50px', textAlign: 'center', margin: '0'}}> <label    style={{ fontSize: '15px' ,marginRight: '50px', textAlign: 'center', margin: '0' }}>Signature CQH: </label> 
             <br/>
           {vente.sig5} </div>


           <br/><br/>
           <br/><br/>

           <div  style={{ fontSize: '15px' ,marginRight: '50px', textAlign: 'center', margin: '0' }} > <label    style={{ fontSize: '15px' ,marginRight: '50px', textAlign: 'center', margin: '0' }}>Signature Chef Equipe HACCP :</label> 
             <br/>
           {vente.sigchef} </div>















  </div>
  )  )}
</div></div>
)}






export default PrintCamion;