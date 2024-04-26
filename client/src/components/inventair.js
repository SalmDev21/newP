import React, { useState, useEffect,useRef } from "react";
import axios from "axios";
import ReactToPrint from "react-to-print";

import imprimer from "./img/imprimer.jpg";
import "../index.css"
// mouvement 
const Inventairet = () => {

  const [achats, setAchats] = useState([]);
  const [categories, setCategories] = useState([]);
  const [ventes, setVentes] = useState([]);
  const componentRef = useRef();

  const [formData, setFormData] = useState({
    achat_id: "",
    nom:"",
    Ref:"",
    date_achat: "",
   
    quantite: "",
    montant_total: ""
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



  const resetFormData = () => {
    setFormData({
      achat_id: "",
      nom:"",
      Ref:"",
      date_achat: "",
     
      quantite: "",
      montant_total: ""
    });
  };

  const [isAddFormVisible, setIsAddFormVisible] = useState(false);

  const toggleAddFormVisibility = () => {
    setIsAddFormVisible(!isAddFormVisible);
  };
  

  const renderSecondTableContent = () => {
    return achats.map((achat) => (
      <tr key={achat.achat_id}>
        <td style={tableCellStyle}>{achat.nom}</td>
        <td style={tableCellStyle}>{achat.Ref}</td>
        <td style={tableCellStyle}>{calculerStockFinale(achat.nom)}</td>
      </tr>
    ));
  };
  
  return (
      

<div className="all-achat">


      {/* Bouton d'impression pour le deuxième tableau */}
      <ReactToPrint
    trigger={() => (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={imprimer} alt="imprimer" style={{ width: "60px", height: "60px", marginLeft: "10px" }} />
      </div>
    )}
    content={() => componentRef.current}
  />
  <div ref={componentRef}>
<br/>
date : <input type="date" name="montant_total"/> 
      {/* Deuxième tableau à imprimer */}
      <table style={{ borderCollapse: "collapse", padding: "10px", margin: "auto", width: "50%", marginTop: '20px' }}>
        <thead>
          <tr>
            <th  style={tableHeaderStyle}>Nom</th>
            <th  style={tableHeaderStyle}>Référence</th>
            <th style={tableHeaderStyle}>Stock Final</th>
          </tr>
        </thead>
        <tbody>{renderSecondTableContent()}</tbody>
      </table>
    </div>
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
export default Inventairet;
