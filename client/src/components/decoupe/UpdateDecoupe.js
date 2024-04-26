import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import Logoo from "../logoo.png";
import "../../index.css";
import "../../index";
import { useParams } from 'react-router-dom'; // Importer useParams
import { useLocation } from 'react-router-dom';
import Log from "../img/edit.png";

const UpdateDecoupe = () => {
        

    
    const [vente, setVente] = useState([]);
        const location = useLocation();
        const searchParams = new URLSearchParams(location.search);
        const id = searchParams.get('id');
        const [formData, setFormData] = useState({
            id:"",
            date:"", 
            chef:"", 
            art:"", 
            qte:"",  
            date1:"", 
            lot:"", 
            nb1:"", 
            nb2:"", 
            nb3:"", 
            nb4:"", 
            nb5:"", 
            nb6:"", 
            nb7:"", 
            poi1:"", 
            poi2:"", 
            poi3:"", 
            poi4:"", 
            poi5:"", 
            poi6:"", 
            poi7:"", 
            lot1:"", 
            lot2:"", 
            lot3:"", 
            lot4:"", 
            lot5:"", 
            lot6:"", 
            lot7:"", 
            qte1:"", 
            qte2:"", 
            qte3:"", 
            qte4:"", 
            qte5:"", 
            qte6:"", 
            qte7:"", 
            quali1:"", 
            quali2:"", 
            quali3:"", 
            quali4:"", 
            quali5:"", 
            quali6:"", 
            quali7:"", 
            corr1:"", 
            corr2:"", 
            corr3:"", 
            corr4:"", 
            corr5:"", 
            corr6:"", 
           corr7:"", 
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
           sig1:"", 
           sig2:"", 
           sigchef:""
       
       
           
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
                const response = await axios.get(`http://localhost:4000/decoupe/${id}`);
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
            chef:"", 
            art:"", 
            qte:"",  
            date1:"", 
            lot:"", 
            nb1:"", 
            nb2:"", 
            nb3:"", 
            nb4:"", 
            nb5:"", 
            nb6:"", 
            nb7:"", 
            poi1:"", 
            poi2:"", 
            poi3:"", 
            poi4:"", 
            poi5:"", 
            poi6:"", 
            poi7:"", 
            lot1:"", 
            lot2:"", 
            lot3:"", 
            lot4:"", 
            lot5:"", 
            lot6:"", 
            lot7:"", 
            qte1:"", 
            qte2:"", 
            qte3:"", 
            qte4:"", 
            qte5:"", 
            qte6:"", 
            qte7:"", 
            quali1:"", 
            quali2:"", 
            quali3:"", 
            quali4:"", 
            quali5:"", 
            quali6:"", 
            quali7:"", 
            corr1:"", 
            corr2:"", 
            corr3:"", 
            corr4:"", 
            corr5:"", 
            corr6:"", 
           corr7:"", 
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
           sig1:"", 
           sig2:"", 
           sigchef:""
      
    });
  }

const handleUpdateSubmit = async (e) => {
    e.preventDefault(); // Empêcher le comportement par défaut du formulaire
  
     try {
      await axios.put(`http://localhost:4000/decoupe/update/${formData.id}`, formData);
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
     
              <td > Article   </td>

              <td   style={{ width: '25px' }}> 
              {vente.art}              </td>

              <td > 
Quantité              </td>
              <td  style={{ width: '25px' }}> 
              {vente.qte}              </td>
              <td   > 
date production              </td>
              <td  style={{ width: '20%' }}> 
              {vente.date1}              </td>


              <td  style={{ width: '60px' }}> 
N lot             </td>
              <td  style={{ width: '25px' }} > 
              {vente.lot}              </td>
      </tr>
</table>





<table style={{ borderCollapse: "collapse", padding: "80px", margin: "auto", width: "999px", marginBottom: '90px' }}>
<thead>
      <tr style={{ textAlign: 'center'  , fontSize: '16px' , width: '20%'}}>
          <th>Article</th>
          <th>Nombre Lames</th>
          <th>Poids Net (kg)</th>
          <th>N°lot</th>
          <th>Quantité organoleptique</th>
          <th >Correcton</th>

      </tr>
</thead>
      <tr  style={{ width: '25px' }} > 
              <td  style={{ width: '20px' }} > 
  CUISSE Poulet              </td>

              <td > 
              {vente.nb1}                 </td>

              <td > 
              {vente.poi1}                 </td>
              <td > 
              {vente.lot1}                 </td>
              <td > 
              {vente.quali1}                 </td>
              <td  style={{ width: '20%' }}> 
              {vente.corr1}                 </td>
              
      </tr>

      <tr  style={{ width: '25px' }} > 
              <td  style={{ width: '20px' }} > 
 GIGOT POULET             </td>

 <td > 
              {vente.nb2}                 </td>

              <td > 
              {vente.poi2}                 </td>
              <td > 
              {vente.lot2}                 </td>
              <td > 
              {vente.quali2}                 </td>
              <td  style={{ width: '20%' }}> 
              {vente.corr2}                 </td>
      </tr>


      <tr  style={{ width: '25px' }} > 
              <td  style={{ width: '20px' }} > 
BLANC POULET            </td>

<td > 
              {vente.nb3}                 </td>

              <td > 
              {vente.poi3}                 </td>
              <td > 
              {vente.lot3}                 </td>
              <td > 
              {vente.quali3}                 </td>
              <td  style={{ width: '20%' }}> 
              {vente.corr3}                 </td>
      </tr>

     

      <tr  style={{ width: '25px' }} > 
              <td  style={{ width: '20px' }} > 
 WSCALOPE POULET            </td>

 <td > 
              {vente.nb4}                 </td>

              <td > 
              {vente.poi4}                 </td>
              <td > 
              {vente.lot4}                 </td>
              <td > 
              {vente.quali4}                 </td>
              <td  style={{ width: '20%' }}> 
              {vente.corr4}                 </td>
              
      </tr>


      <tr  style={{ width: '25px' }} > 
              <td  style={{ width: '20px' }} > 
CARCASSE POULET             </td>

<td > 
              {vente.nb5}                 </td>

              <td > 
              {vente.poi5}                 </td>
              <td > 
              {vente.lot5}                 </td>
              <td > 
              {vente.quali5}                 </td>
              <td  style={{ width: '20%' }}> 
              {vente.corr5}                 </td>
      </tr>

      <tr  style={{ width: '25px' }} > 
              <td  style={{ width: '20px' }} > 
AILES POULET             </td>

<td > 
              {vente.nb6}                 </td>

              <td > 
              {vente.poi6}                 </td>
              <td > 
              {vente.lot6}                 </td>
              <td > 
              {vente.quali6}                 </td>
              <td  style={{ width: '20%' }}> 
              {vente.corr6}                 </td>
              
      </tr>


      <tr  style={{ width: '25px' }} > 
              <td  style={{ width: '20px' }} > 
STEAK POULET           </td>

<td > 
              {vente.nb7}                 </td>

              <td > 
              {vente.poi7}                 </td>
              <td > 
              {vente.lot7}                 </td>
              <td > 
              {vente.quali7}                 </td>
              <td  style={{ width: '20%' }}> 
              {vente.corr7}                 </td>
              
      </tr>
</table>







<table style={{ borderCollapse: "collapse", padding: "80px", margin: "auto", width: "999px", marginBottom: '90px' }}>

      <tr   > 
             
            <h6 style={{ textAlign:"center" }}> SUIVI Production PAR OUVRIER</h6>
              
      </tr>

      <tr > 
      <td style={{ width: '20%' }}>  Nom et prenom
              </td>

              <td td style={{ width: '25%' }}> Rendement 
              </td>

             
      </tr>

      <tr > 
      <td style={{ width: '20%' }}> 
      {vente.nom1}               </td>

              <td td style={{ width: '25%' }}> 
              {vente.ren1}               </td>

             
</tr>

<tr > 
<td style={{ width: '20%' }}> 
      {vente.nom2}               </td>

              <td td style={{ width: '25%' }}> 
              {vente.ren2}               </td>

             
</tr>

<tr > 
<td style={{ width: '20%' }}> 
      {vente.nom3}               </td>

              <td td style={{ width: '25%' }}> 
              {vente.ren3}               </td>

             

             
</tr>
<tr > 
<td style={{ width: '20%' }}> 
      {vente.nom4}               </td>

              <td td style={{ width: '25%' }}> 
              {vente.ren4}               </td>

             

             
</tr>


<tr > 
<td style={{ width: '20%' }}> 
      {vente.nom5}               </td>

              <td td style={{ width: '25%' }}> 
              {vente.ren5}               </td>

             

             
</tr>

<tr > 
<td style={{ width: '20%' }}> 
      {vente.nom6}               </td>

              <td td style={{ width: '25%' }}> 
              {vente.ren6}               </td>

             

             
</tr>
<tr > 
<td style={{ width: '20%' }}> 
      {vente.nom7}               </td>

              <td td style={{ width: '25%' }}> 
              {vente.ren7}               </td>

             

             
</tr>
<tr > 
<td style={{ width: '20%' }}> 
      {vente.nom8}               </td>

              <td td style={{ width: '25%' }}> 
              {vente.ren8}               </td>

             

             
</tr>
<tr > 
<td style={{ width: '20%' }}> 
      {vente.nom9}               </td>

              <td td style={{ width: '25%' }}> 
              {vente.ren9}               </td>

             

             
</tr>

<tr ><td style={{ width: '20%' }}> 
      {vente.nom10}               </td>

              <td td style={{ width: '25%' }}> 
              {vente.ren10}               </td>

             

             
</tr>
<tr > 
<td style={{ width: '20%' }}> 
      {vente.nom11}               </td>

              <td td style={{ width: '25%' }}> 
              {vente.ren11}               </td>

             
             
</tr>


<tr > 
<td style={{ width: '20%' }}> 
      {vente.nom12}               </td>

              <td td style={{ width: '25%' }}> 
              {vente.ren12}               </td>

             

             
</tr>

</table>













<div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
   

  <div style={{ display: "flex", alignItems: "center" }}>
<label htmlFor="sig1" style={{ marginRight: "250px" , marginBottom: "10px" }}>Signature chef de production </label>
{vente.sig2}               


<div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
    <div style={{ display: "flex", alignItems: "center", marginRight: "250px" }}>
        <label htmlFor="sig1" style={{ marginBottom: "10px" }}>Signature chef de production</label>
        {vente.sig1}
    </div>

    <div onClick={() => { setFormData(vente); toggleUpdateFormVisibility(); }} style={{ marginRight: "20px" }}>
        <img src={Log} alt="Editer" style={{ width: "30px", height: "30px", marginRight: "5px" }} />
    </div>

    <div style={{ display: "flex", alignItems: "center" }}>
        <label htmlFor="sigchef" style={{ marginBottom: "10px" }}>Signature Chef Equipe HACCP</label>
        {vente.sigchef}
    </div>
</div>
 
</div>

</div>


<div style={{ display: isUpdateFormVisible ? "block" : "none" }}>
    <form onSubmit={handleUpdateSubmit} style={{ marginBottom: "10px" }}>
      <label style={{ fontSize: '15px', marginRight: '10px' }}>Signature Responsable production</label>
      <input type="text" name="sig1" placeholder="Signature Responsable production" value={formData.sig1} onChange={handleChange} style={{ fontSize: "12px", padding: "5px" }} />

      <input type="text" name="sigchef" placeholder="Signature Responsable production" value={formData.sigchef} onChange={handleChange} style={{ fontSize: "12px", padding: "5px" }} />
      <button type="submit" className="custom-button">valider</button>
    </form>
  </div>

  






  </div>
  )  )}
</div>
)}






export default UpdateDecoupe;