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
const PrintRetour = () => {
        

     
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
                const response = await axios.get(`http://localhost:4000/retour/${id}`);
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
    <label style={{ fontSize: '20px', margin: '0', marginLeft: '500px' }}>Nom client  :  </label>
    {vente.nomcli}
</div>
<div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
    <label style={{ fontSize: '20px', margin: '0', marginLeft: '500px' }}>Nom livreur :  </label>
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
                <div style={{ display: 'inline-block', marginRight: '20px' }}>
                    <label style={{ fontSize: '15px', textAlign: 'center', margin: '0' }}>Signature CQH :</label>
                    <br />
                    {vente.sigRq}
                </div>

                <div style={{ display: 'inline-block', marginLeft: '20px' }}>
                    <label style={{ fontSize: '15px', textAlign: 'center', margin: '0' }}>Signature Chef Equipe HACCP :</label>
                    <br />
                    {vente.sigRp}
                </div>
            </div>


  </div>
  )  )}
</div></div>
)}






export default PrintRetour; 