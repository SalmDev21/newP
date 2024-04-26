import React, { useState, useEffect , useRef  } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import Logoo from "../logoo.png";
import "../../index.css";
import "../../index";
import { useLocation } from 'react-router-dom';
import ReactToPrint from "react-to-print";
import imprimer from "../img/print.jpg";

const PrintTemp = () => {
        

    
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
                const response = await axios.get(`http://localhost:4000/temp/${id}`);
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

<div ref={componentRef}>

       {vente.map(vente => (
            <div key={vente.id}>
    <table style={{ width: '100%' }}>
<tbody>
<tr>
  <td style={{ display: 'flex', justifyContent: 'space-between' }}>
            {/* Logo avec taille réduite */}
            <img src={Logoo} alt="Logoo" style={{ width: "120px", height: "60px" }} />
            {/* Titre aligné au centre */}
            <h2 style={{ textAlign: 'center', margin: '0', flexGrow: '1', marginTop: '10px' }}> Fiche de Suivi de Température </h2>
            {/* Input de date aligné à droite */}
            <label type="text"  style={{ width: '150px', textAlign: 'right', margin: '0' }}>  </label> 
          </td>
        </tr>
      </tbody>
    </table>

    <br/>



    

  
<div style={{ width: "100%" , marginLeft:'900px' }}>
<h4> Date :  {format(new Date(vente.date), 'dd/MM/yyyy')}</h4>
</div>

<p style={{
margin: "auto",
width: "500px",
marginTop: "10px",
fontSize: "19px",
textAlign: "center",
color: "black", // Couleur rouge

}}> Salle de Production (1)</p>

<p style={{
margin: "auto",
width: "999px",
marginTop: "10px",
fontSize: "19px",
textAlign: "center",
color: "black", // Couleur rouge

}}> Température requise : 10 C limite critique : T = 10 ± 2°C</p>

<p style={{
margin: "auto",
width: "999px",
marginTop: "10px",
fontSize: "15px",
textAlign: "center",
color: "black", // Couleur rouge

}}>critéres d'évaluation : C = conforme. NC= Non-Conforme mais une action corrective a été réacliser immediatemenet </p>
  
 
<table style={{ borderCollapse: "collapse", padding: "80px", margin: "auto", width: "999px", marginBottom: '90px' }}>
<thead>
      <tr style={{ textAlign: 'center'  , fontSize: '18px' , width: '20%'}}>
          <th>Heure de contrôle</th>
          <th>Valeur</th>
          <th>Observations</th>
          <th>Signature CQH</th>
      </tr>
</thead>
      <tr > 
              <td style={{ textAlign: 'center'  , fontSize: '18px'}}>  <p  style={{ fontSize: '13px' , textAlign:'center ',  margin:'auto' }}/>1:00 </td>

              <td style={{ width: '20%' }}> 
              {vente.val1}
              
              </td>
              <td td style={{ width: '25%' }}> 
              {vente.obs1} 
              
              </td>
              <td td style={{ width: '23%' }}> 
              {vente.sig1} 
              
              </td>
      </tr>

      <tr> 
              <td style={{ textAlign: 'center'  , fontSize: '18px'}}>  <p style={{ fontSize: '13px' , textAlign:'center ',  margin:'auto' }}/>2:00 </td>

              <td> 
              {vente.val2}
              
              </td>
              <td> 
              {vente.obs2}
              
              </td>
              <td> 
              {vente.sig2}
              
              </td>
      </tr> <tr> 
              <td style={{ textAlign: 'center'  , fontSize: '18px'}}>  <p style={{ fontSize: '13px' , textAlign:'center ',  margin:'auto' }}/>3:00 </td>

              <td> 
              {vente.val3}
              
              </td>
              <td> 
              {vente.obs3}
              
              </td>
              <td> 
              {vente.sig3}
              
              </td>
      </tr>
      <tr> 
              <td style={{ textAlign: 'center'  , fontSize: '18px'}}>  <p style={{ fontSize: '13px' , textAlign:'center ',  margin:'auto' }}/>4:00 </td>

              <td> 
              {vente.val4}
              
              </td>
              <td> 
              {vente.obs4}
              
              </td>
              <td> 
              {vente.sig4}
              
              </td>
      </tr> <tr> 
              <td style={{ textAlign: 'center'  , fontSize: '18px'}}>  <p style={{ fontSize: '13px' , textAlign:'center ',  margin:'auto' }}/>5:00 </td>

              <td> 
              {vente.val5}
              
              </td>
              <td> 
              {vente.obs5}
              
              </td>
              <td> 
              {vente.sig5}
              
              </td>
      </tr> <tr> 
              <td style={{ textAlign: 'center'  , fontSize: '18px'}}>  <p style={{ fontSize: '13px' , textAlign:'center ',  margin:'auto' }}/>6:00 </td>

              <td> 
              {vente.val6}
              
              </td>
              <td> 
              {vente.obs6}
              
              </td>
              <td> 
              {vente.sig6}
              
              </td>
      </tr> <tr> 
              <td style={{ textAlign: 'center'  , fontSize: '18px'}}>  <p style={{ fontSize: '13px' , textAlign:'center ',  margin:'auto' }}/>7:00 </td>

              <td> 
              {vente.val7}
              
              </td>
              <td> 
              {vente.obs7}
              
              </td>
              <td> 
              {vente.sig7}
              
              </td>
      </tr> <tr> 
              <td style={{ textAlign: 'center'  , fontSize: '18px'}}>  <p style={{ fontSize: '13px' , textAlign:'center ',  margin:'auto' }}/>8:00 </td>

              <td> 
              {vente.val8}
              
              </td>
              <td> 
              {vente.obs8}
              
              </td>
              <td> 
              {vente.sig8}
              
              </td>
      </tr> <tr> 
              <td style={{ textAlign: 'center'  , fontSize: '18px'}}>  <p style={{ fontSize: '13px' , textAlign:'center ',  margin:'auto' }}/>9:00 </td>

              <td> 
              {vente.val9}
              
              </td>
              <td> 
              {vente.obs9}
              
              </td>
              <td> 
              {vente.sig9}
              
              </td>
      </tr> <tr> 
              <td style={{ textAlign: 'center'  , fontSize: '18px'}}>  <p style={{ fontSize: '13px' , textAlign:'center ',  margin:'auto' }}/>10:00 </td>

              <td> 
              {vente.val10}
              
              </td>
              <td> 
              {vente.obs10}
              
              </td>
              <td> 
              {vente.sig10}
              
              </td>
      </tr> <tr> 
              <td style={{ textAlign: 'center'  , fontSize: '18px'}}>  <p style={{ fontSize: '13px' , textAlign:'center ',  margin:'auto' }}/>11:00 </td>

              <td> 
              {vente.val11}
              
              </td>
              <td> 
              {vente.obs11}
              
              </td>
              <td> 
              {vente.sig11}
              
              </td>
      </tr> <tr> 
              <td style={{ textAlign: 'center'  , fontSize: '18px'}}>  <p style={{ fontSize: '13px' , textAlign:'center ',  margin:'auto' }}/>12:00 </td>

              <td> 
              {vente.val12}
              
              </td>
              <td> 
              {vente.obs12}
              
              </td>
              <td> 
              {vente.sig12}
              
              </td>
      </tr> <tr> 
              <td style={{ textAlign: 'center'  , fontSize: '18px'}}>  <p style={{ fontSize: '13px' , textAlign:'center ',  margin:'auto' }}/>13:00 </td>
              <td> 
              {vente.val13}
              
              </td>
              <td> 
              {vente.obs13}
              
              </td>
              <td> 
              {vente.sig13}
              
              </td>
      </tr> <tr> 
              <td style={{ textAlign: 'center'  , fontSize: '18px'}}>  <p style={{ fontSize: '13px' , textAlign:'center ',  margin:'auto' }}/>14:00 </td>

              <td> 
              {vente.val14}
              
              </td>
              <td> 
              {vente.obs14}
              
              </td>
              <td> 
              {vente.sig14}
              
              </td>
      </tr> <tr> 
              <td style={{ textAlign: 'center'  , fontSize: '18px'}}>  <p style={{ fontSize: '13px' , textAlign:'center ',  margin:'auto' }}/>15:00 </td>

              <td> 
              {vente.val15}
              
              </td>
              <td> 
              {vente.obs15}
              
              </td>
              <td> 
              {vente.sig15}
              
              </td>
      </tr> <tr> 
              <td style={{ textAlign: 'center'  , fontSize: '18px'}}>  <p style={{ fontSize: '13px' , textAlign:'center ',  margin:'auto' }}/>16:00 </td>

              <td> 
              {vente.val16}
              
              </td>
              <td> 
              {vente.obs16}
              
              </td>
              <td> 
              {vente.sig16}
              
              </td>
      </tr> <tr> 
              <td style={{ textAlign: 'center'  , fontSize: '18px'}}>  <p style={{ fontSize: '13px' , textAlign:'center ',  margin:'auto' }}/>17:00 </td>

              <td> 
              {vente.val17}
              
              </td>
              <td> 
              {vente.obs17}
              
              </td>
              <td> 
              {vente.sig17}
              
              </td>
      </tr> <tr> 
              <td style={{ textAlign: 'center'  , fontSize: '18px'}}>  <p style={{ fontSize: '13px' , textAlign:'center ',  margin:'auto' }}/>18:00 </td>

              <td> 
              {vente.val18}
              
              </td>
              <td> 
              {vente.obs18}
              
              </td>
              <td> 
              {vente.sig18}
              
              </td>
      </tr> <tr> 
              <td style={{ textAlign: 'center'  , fontSize: '18px'}}>  <p style={{ fontSize: '13px' , textAlign:'center ',  margin:'auto' }}/>19:00 </td>

              <td> 
              {vente.val19}
              
              </td>
              <td> 
              {vente.obs19}
              
              </td>
              <td> 
              {vente.sig19}
              
              </td>
      </tr> <tr> 
              <td style={{ textAlign: 'center'  , fontSize: '18px'}}>  <p style={{ fontSize: '13px' , textAlign:'center ',  margin:'auto' }}/>20:00 </td>
              <td> 
              {vente.val20}
              
              </td>
              <td> 
              {vente.obs20}
              
              </td>
              <td> 
              {vente.sig20}
              
              </td>
      </tr> <tr> 
              <td style={{ textAlign: 'center'  , fontSize: '18px'}}>  <p style={{ fontSize: '13px' , textAlign:'center ',  margin:'auto' }}/>21:00 </td>

              <td> 
              {vente.val21}
              
              </td>
              <td> 
              {vente.obs21}
              
              </td>
              <td> 
              {vente.sig21}
              
              </td>
      </tr> <tr> 
              <td style={{ textAlign: 'center'  , fontSize: '18px'}}>  <p style={{ fontSize: '13px' , textAlign:'center ',  margin:'auto' }}/>22:00 </td>

              <td> 
              {vente.val22}
              
              </td>
              <td> 
              {vente.obs22}
              
              </td>
              <td> 
              {vente.sig22}
              
              </td>
      </tr> <tr> 
              <td style={{ textAlign: 'center'  , fontSize: '18px'}}>  <p style={{ fontSize: '13px' , textAlign:'center ',  margin:'auto' }}/>23:00 </td>

              <td> 
              {vente.val23}
              
              </td>
              <td> 
              {vente.obs23}
              
              </td>
              <td> 
              {vente.sig23}
              
              </td>
      </tr> <tr> 
              <td style={{ textAlign: 'center'  , fontSize: '18px'}}>  <p style={{ fontSize: '13px' , textAlign:'center ',  margin:'auto' }}/>24:00 </td>

              <td> 
              {vente.val24}
              
              </td>
              <td> 
              {vente.obs24}
              
              </td>
              <td> 
              {vente.sig24}
              
              </td>
      </tr>


</table>


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
              {vente.heure}
              </td>

              <td> 
              {vente.anomalie}

              </td>


              <td> 
              {vente.cause}

              </td>

              <td>
              {vente.corr}
 
              </td>

              <td> 
              {vente.echeance}

              </td>
      </tr> 
      
      </table>



      <br/>
      <br/>
      <br/>


   <div style={{ fontSize: '15px' ,marginRight: '50px', textAlign: 'center', margin: '0' }}> <label    style={{ fontSize: '15px' ,marginRight: '50px', textAlign: 'center', margin: '0' }}>Signature Chef Equipe HACCP : </label> 
   <br/>
   {vente.sig}
 </div>


  </div>
  )  )}
  </div>
</div>
)}






export default PrintTemp;