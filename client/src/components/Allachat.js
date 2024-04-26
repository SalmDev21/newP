import React, { useState, useEffect } from "react";
import axios from "axios";
import Logo from "./img/delete.png";
import Log from "./img/edit.png";
import ajouter from "./img/ajouter.png";
import voir from "./img/voir.jpg"

import Allcategorie from './Allcategorie.jsx';
import AllVentes from './Allvente.js';
import calculerSommeprix from "./Allcategorie.jsx"
import calculerSommeQuantite  from "./Allvente.js"
import imprimer from "./img/imprimer.jpg";

// mouvement 
const Allachat = () => {

  const [achats, setAchats] = useState([]);
  const [mouvementData, setMouvementData] = useState(null);
  const [categories, setCategories] = useState([]);
  const [ventes, setVentes] = useState([]);
  const [imageUrl, setImageUrl] = useState(""); // État pour stocker l'URL de l'image

  const [formData, setFormData] = useState({
    achat_id: "",
    nom:"",
    Ref:"",
    date_achat: "",
   
    quantite: "",
    montant_total: "",
    img :""
  });
  const [isUpdateFormVisible, setIsUpdateFormVisible] = useState(false);

  useEffect(() => {
    fetchAchats();
  }, []);

  const fetchAchats = async () => {
    try {
      const response = await axios.get("http://localhost:4000/achat/allA");
      setAchats(response.data);
    } catch (error) {
      console.error("Error fetching achats:", error);
    }
  };

// je ajouter ce deux API /ventes/allV et categorie/all pour la function calculerStockFinale peut recupere  attribus nom de deux tableau et la sum e qte et prix de deux tableau 
  useEffect(() => {
    fetchVentes();
  }, []);

  const fetchVentes = async () => {
    try {
      const response = await axios.get("http://localhost:4000/ventes/allV");
      setVentes(response.data);
    } catch (error) {
      console.error("Error fetching ventes:", error);
    }
  };
  
  useEffect(() => {
    fetchCategories();
  }, []);
 
  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:4000/categorie/all");
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };




  const calculerStockFinale = (nomArticle) => {
    // Filtrer les ventes ayant le même nom d'article
    const ventesMemeNom = ventes.filter((vente) => vente.nom === nomArticle);
    // Filtrer les achats ayant le même nom d'article
    const achatsMemeNom = achats.filter((achat) => achat.nom === nomArticle);
    const mouvMemeNom = categories.filter((category)=>category.nom=== nomArticle)
    // Calculer la somme des quantités pour ces ventes et achats
    const sommeQuantiteVentes = ventesMemeNom.reduce((total, vente) => total + vente.quantite, 0);
    const sommeQuantiteAchats = achatsMemeNom.reduce((total, achat) => total + achat.date_achat, 0);
    const sommeQuantiteMouv = mouvMemeNom.reduce((total,category) => total + category.prix,0)
    // Calculer le stock final en soustrayant la somme des achats de la somme des ventes
    const stockFinal =  sommeQuantiteAchats+ sommeQuantiteMouv - sommeQuantiteVentes;
    return stockFinal;
  };
  
 const handleCreateAchat = async () => {
    try {
      // Calculer la quantité automatiquement en utilisant la fonction calculerStockFinale
      const quantite = calculerStockFinale(formData.nom);
      
      // Utiliser la quantité calculée dans la requête POST
      const newFormData = { ...formData, quantite };
      
      // Envoyer la requête POST avec la quantité calculée
      await axios.post("http://localhost:4000/achat/createA", newFormData);
      fetchAchats();
      resetFormData();
    } catch (error) {
      console.error("Erreur lors de la création de l'achat :", error);
    }
};
const handleVoirClick = async (id) => {
  try {
    const response = await axios.get(`http://localhost:4000/achat/getById/${id}`);
    const data = response.data;
    if (data && data.img) {
      setImageUrl("img/" + data.img);
    } else {
      setImageUrl(""); // Réinitialiser l'URL si aucune image n'est trouvée
    }
  } catch (error) {
    console.error("Erreur lors du chargement de l'image :", error);
    setImageUrl(""); // Réinitialiser l'URL en cas d'erreur
  }
};
  const handleUpdateAchat = async () => {
    try {
      await axios.put(`http://localhost:4000/achat/updateA/${formData.achat_id}`, formData);
      fetchAchats();

    
      resetFormData();
     
    } catch (error) {
      console.error("Error updating achat:", error);
    }
  };




  const handleDeleteAchat = async (achat_id) => {
    try {
      await axios.delete(`http://localhost:4000/achat/deleteA/${achat_id}`);
      fetchAchats();
    } catch (error) {
      console.error("Error deleting achat:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleUpdateFormVisibility = () => {
    setIsUpdateFormVisible(!isUpdateFormVisible);
  };


  const resetFormData = () => {
    setFormData({
      achat_id: "",
      nom:"",
      Ref:"",
      date_achat: "",
     
      quantite: "",
      montant_total: "",
      img:""
    });
  };

  const [isAddFormVisible, setIsAddFormVisible] = useState(false);

  const toggleAddFormVisibility = () => {
    setIsAddFormVisible(!isAddFormVisible);
  };
  const handlePrintSecondTable = () => {
    window.print(); // Cela ouvrira la boîte de dialogue d'impression du navigateur
  };

  const renderSecondTableContent = () => {
    return achats.map((achat) => (
      <tr key={achat.achat_id}>
        <td>{achat.nom}</td>
        <td>{achat.Ref}</td>
        <td>{calculerStockFinale(achat.nom)}</td>
      </tr>
    ));
  };
  
  return (
    <div className="all-achat">
            <div  onClick={() => {setAchats(achats); toggleAddFormVisibility(); }}> {/* Lorsque vous cliquez sur "Editer", cela configure les données du formulaire avec la vente actuelle et inverse la visibilité du formulaire de mise à jour */}
                  <img src={ajouter} alt="add" style={{ width: "30px", height: "30px" }} />
            </div >
            {isAddFormVisible && (
  <form onSubmit={handleCreateAchat} style={{ marginBottom: "10px" }}>
    <input type="text" name="nom" placeholder="nom" onChange={handleChange} value={formData.nom} style={{ marginBottom: "3px", marginRight: "3px", fontSize: "12px", padding: "5px" }} />
    <input type="text" name="Ref" placeholder="Ref" onChange={handleChange} value={formData.Ref} style={{ marginBottom: "3px", marginRight: "3px", fontSize: "12px", padding: "5px" }} />
    <input type="number" name="date_achat" placeholder="Stock_inial" onChange={handleChange} value={formData.date_achat} style={{ marginBottom: "3px", marginRight: "3px", fontSize: "12px", padding: "5px" }} />
    {/* Retirez l'input de quantité */}
    {/* <input type="number" name="quantite" placeholder="stock_final" onChange={handleChange} value={formData.quantite}  style={{ marginBottom: "3px", marginRight: "3px", fontSize: "12px", padding: "5px" }} /> */}

    <input type="number" name="montant_total" placeholder="alerte" onChange={handleChange} value={formData.montant_total}  style={{ marginBottom: "3px", marginRight: "3px", fontSize: "12px", padding: "5px" }} />
    <button type="submit" className="custom-button" style={{ marginBottom: "3px", marginRight: "3px", fontSize: "12px", padding: "5px" }}>Ajouter une achat</button>
  </form>
)}





      <div style={{ display: isUpdateFormVisible ? "block" : "none" }}>
        <form onSubmit={() => handleUpdateAchat(formData)} style={{ marginBottom: "10px" }}>
        <input type="text" name="nom" placeholder="nom" onChange={handleChange} value={formData.nom} style={{ marginBottom: "3px", marginRight: "3px", fontSize: "12px", padding: "5px" }} />
        <input type="text" name="Ref" placeholder="Ref" onChange={handleChange} value={formData.Ref} style={{ marginBottom: "3px", marginRight: "3px", fontSize: "12px", padding: "5px" }} />
          <input type="number" name="date_achat" placeholder="Stock_inial" onChange={handleChange} value={formData.date_achat} style={{ marginBottom: "3px", marginRight: "3px", fontSize: "12px", padding: "5px" }} />
          <input type="number" name="quantite" placeholder="Stock_final" onChange={handleChange} value={formData.quantite} style={{ marginBottom: "3px", marginRight: "3px", fontSize: "12px", padding: "5px" }} />
          <input type="number" name="montant_total" placeholder="alerte" onChange={handleChange} value={formData.montant_total}  style={{ marginBottom: "3px", marginRight: "3px", fontSize: "12px", padding: "5px" }}/>
          <button type="submit" className="custom-button" style={{ marginBottom: "3px", marginRight: "3px", fontSize: "12px", padding: "5px" }} >Update une achat</button>
        </form>
      </div>

      <table style={{ borderCollapse: "collapse", padding: "80px", margin: "auto", width: "999px", marginTop: '40px' }}>

        <thead>
          <tr>
            <th style={tableHeaderStyle}>ID</th>
            <th style={tableHeaderStyle}>Article</th>
            <th style={tableHeaderStyle}>Ref</th>
            <th style={tableHeaderStyle}>Stock_inial</th>
           
            <th style={tableHeaderStyle}>stock final</th>
            <th style={tableHeaderStyle}>alerte</th>
            <th style={tableHeaderStyle}>Image</th>

           
            <th style={tableHeaderStyle}>Action</th>
          </tr>
        </thead>
        <tbody>

          
        {achats.map((achat) => (
  <tr key={achat.achat_id}>
    <td style={tableCellStyle}>{achat.achat_id}</td>
    <td style={tableCellStyle}>{achat.nom}</td>
    <td style={tableCellStyle}>{achat.Ref}</td>
    <td style={tableCellStyle}>{achat.date_achat}</td>
    <td style={tableCellStyle}>{calculerStockFinale(achat.nom)}</td> 
    <td style={tableCellStyle}>{achat.montant_total}</td>
    <td style={tableCellStyle}><img src={process.env.PUBLIC_URL + "/img/" + achat.img} alt="Image" /></td>




          



              <td style={tableCellStyle}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div  onClick={() => { setFormData(achat); toggleUpdateFormVisibility(); }}> 
                  <img src={Log} alt="Editer" style={{ width: "20px", height: "20px" }} />
                </div >

                <div onClick={() => handleDeleteAchat(achat.achat_id)}>
                  <img src={Logo} alt="delete" style={{ width: "20px", height: "20px" }} />
                </div>

                
                
                </div>
                </td>
            </tr>
          ))}
        </tbody>
      </table>


<br/><br/>
    </div>
  );
};



const tableHeaderStyle = {
    border: "1px solid #dddddd",
    textAlign: "left",
    padding: "8px",
    padding: "8px",
    textAlign: "left",
    fontSize: "15px",
    backgroundColor: "#f2f2f2",

  };


  
  
  const tableCellStyle = {
    border: "1px solid #dddddd",
    textAlign: "left",
    padding: "8px",
  };
export default Allachat;
