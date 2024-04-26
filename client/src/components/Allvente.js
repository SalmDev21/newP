import React, { useState, useEffect } from "react";
import axios from "axios";
import Logo from "./img/delete.png";
import Log from "./img/edit.png";
import ajouter from "./img/ajouter.png";
import { format } from 'date-fns';





// sortie 
const AllVentes = () => {
  const [ventes, setVentes] = useState([]);
  const [formData, setFormData] = useState({
    vente_id: "",
    date_vente: "",
    nom: "",
    id: "",
    quantite: "",
    montant_total: ""
  });
  const [isHided, setIsHided] = useState(true);
  const [isUpdateFormVisible, setIsUpdateFormVisible] = useState(false); // Nouvel état pour la visibilité du formulaire de mise à jour
  
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

// Ajoutez cette fonction à votre composant AllVentes
const calculerSommeQuantite = (nomArticle) => {
  // Filtrer les ventes ayant le même nom d'article
  const ventesMemeNom = ventes.filter((vente) => vente.nom === nomArticle);
  // Calculer la somme des quantités pour ces ventes
  const sommeQuantite = ventesMemeNom.reduce((total, vente) => total + vente.quantite, 0);
  return sommeQuantite;
}; 
 

  const handleCreateVente = async () => {
    try {
      await axios.post("http://localhost:4000/ventes/createV", formData);
      fetchVentes();
      resetFormData();
    } catch (error) {
      console.error("Error creating vente:", error);
    }
  };

  const handleUpdateSubmit = async () => {
    try {
      await axios.put(`http://localhost:4000/ventes/updateV/${formData.vente_id}`, formData);
      fetchVentes();
      resetFormData();
    } catch (error) {
      console.error("Error updating vente:", error);
    }
  };

  const handleDeleteVente = async (vente_id) => {
    try {
      await axios.delete(`http://localhost:4000/ventes/deleteV/${vente_id}`);
      fetchVentes();
    } catch (error) {
      console.error("Error deleting vente:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleHide = () => {
    setIsHided(!isHided);
  };

  const toggleUpdateFormVisibility = () => {
    setIsUpdateFormVisible(!isUpdateFormVisible);
  };

  const resetFormData = () => {
    setFormData({
      vente_id: "",
      date_vente: "",
      nom: "",
      id: "",
      quantite: "",
      montant_total: ""
    });
  };

  const [isAddFormVisible, setIsAddFormVisible] = useState(false);

  const toggleAddFormVisibility = () => {
    setIsAddFormVisible(!isAddFormVisible);
  };

  
  
  return (
<div className="all-ventes">






            <div  onClick={() => {setVentes(ventes); toggleAddFormVisibility(); }}> {/* Lorsque vous cliquez sur "Editer", cela configure les données du formulaire avec la vente actuelle et inverse la visibilité du formulaire de mise à jour */}
                  <img src={ajouter} alt="add" style={{ width: "30px", height: "30px" }} />
            </div >
            
    {isAddFormVisible && (
      <form onSubmit={handleCreateVente} style={{ marginBottom: "10px" }}>
         
        <input type="date" name="date_vente" placeholder="Date de vente" onChange={handleChange} value={formData.date_vente} style={{ marginBottom: "3px", marginRight: "3px", fontSize: "12px", padding: "5px"  }}  />
        <input type="text" name="nom" placeholder="Nom_Article" onChange={handleChange} value={formData.nom} style={{ marginBottom: "3px", marginRight: "3px", fontSize: "12px", padding: "5px" }} />
        <input type="text" name="id" placeholder="Raison de Sortie" onChange={handleChange} value={formData.id} style={{ marginBottom: "3px", marginRight: "3px", fontSize: "12px", padding: "5px" }} />
        <input type="number" name="quantite" placeholder="Quantité" onChange={handleChange} value={formData.quantite} style={{ marginBottom: "3px", marginRight: "3px", fontSize: "12px", padding: "5px" }} />
        <button type="submit" className="custom-button">Ajouter une vente</button>
      </form>  )}





      <div style={{ display: isUpdateFormVisible ? "block" : "none" }} > {/* Afficher le formulaire de mise à jour si isUpdateFormVisible est true */}
        <form onSubmit={handleUpdateSubmit} style={{ marginBottom: "10px"  }}>
          <input type="date" name="date_vente" placeholder="Date de vente" value={formData.date_vente} onChange={handleChange} style={{ marginBottom: "3px", marginRight: "3px", fontSize: "12px", padding: "5px" }} />
          <input type="text" name="nom" placeholder="Nom_Article" value={formData.nom} onChange={handleChange} style={{ marginBottom: "3px", marginRight: "3px", fontSize: "12px", padding: "5px" }} />
          <input type="text" name="id" placeholder="Raison de Sortie" value={formData.id} onChange={handleChange} style={{ marginBottom: "3px", marginRight: "3px", fontSize: "12px", padding: "5px" }} />
          <input type="number" name="quantite" placeholder="Quantité" value={formData.quantite} onChange={handleChange} style={{ marginBottom: "3px", marginRight: "3px", fontSize: "12px", padding: "5px" }} />
          <button type="submit" className="custom-button">Update une vente</button>
        </form>
      </div>
      <p style={{
  margin: "auto",
  width: "999px",
  marginTop: "40px",
  fontSize: "25px",
  fontWeight: "bolder",
  textAlign: "center",
  color: "black", // Couleur rouge
 
}}>
  Les Sorties de Stock de Pièces de Rechange
</p>

      <table style={{ borderCollapse: "collapse", padding: "80px", margin: "auto", width: "999px", marginTop: '40px' }}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>ID</th>
            <th style={tableHeaderStyle}>Date_Sortie</th>
            <th style={tableHeaderStyle}>Nom_Article</th>
            <th style={tableHeaderStyle}>Raison de Sortie</th>
            <th style={tableHeaderStyle}>Quantite</th>
            
           
            <th style={tableHeaderStyle}>Action</th>
          </tr>
        </thead>
         <tbody>
          {ventes.map((vente) => (
            <tr key={vente.vente_id}>
              <td style={tableCellStyle}>{vente.vente_id}</td>
              <td style={tableCellStyle}>{format(new Date(vente.date_vente), 'dd/MM/yyyy')}</td>
              <td style={tableCellStyle}>{vente.nom}</td>
              <td style={tableCellStyle}>{vente.id}</td>
              <td style={tableCellStyle}>{vente.quantite}</td>

              <td style={tableCellStyle}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                {/* Logo d'édition */}
                <div onClick={() => { setFormData(vente); toggleUpdateFormVisibility(); }}>
                  <img src={Log} alt="Editer" style={{ width: "20px", height: "20px", marginRight: "5px" }} />
                </div>
                {/* Logo de suppression */}
                <div onClick={() => handleDeleteVente(vente.vente_id)}>
                  <img src={Logo} alt="delete" style={{ width: "20px", height: "20px" }} />
                </div>

               
              </div>
            </td>



             
            </tr>
          ))}
        </tbody>
      </table>
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

export default AllVentes;
