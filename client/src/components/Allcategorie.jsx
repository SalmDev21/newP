import React, { useState, useEffect } from "react";
import axios from "axios";
import Logo from "./img/delete.png";
import Log from "./img/edit.png";
import ajouter from "./img/ajouter.png";
import { format } from 'date-fns';

// les entrees 
const Allcategorie = () => {
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    nom: "",
    discription: "",
    prix: ""
  });
  const [isUpdateFormVisible, setIsUpdateFormVisible] = useState(false);

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

  const handleCreatecateg = async () => {
    try {
      await axios.post("http://localhost:4000/categorie/create", formData);
      fetchCategories();
      resetFormData();
    } catch (error) {
      console.error("Error creating categ:", error);
    }
  };

  const handleUpdatecateg = async () => {
    try {
      await axios.put(`http://localhost:4000/categorie/update/${formData.id}`, formData);
      fetchCategories();
      resetFormData();
     
    } catch (error) {
      console.error("Error edit category:", error);
    }
  };

  const handleDeletecateg = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/categorie/delete/${id}`);
      fetchCategories();
    } catch (error) {
      console.error("Error deleting categ:", error);
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
      id: "",
      nom: "",
      discription: "",
      prix: ""
    });
  };


  const calculerSommeprix = (nomArticle) => {
    // Filtrer les catégories ayant le même nom d'article
    const categoriesMemeNom = categories.filter((category) => category.nom === nomArticle);
    // Calculer la somme des prix pour ces catégories
    const sommePrix = categoriesMemeNom.reduce((total, category) => total + category.prix, 0);
    return sommePrix;
    //<td style={tableCellStyle}>{calculerSommeQuantite(category.nom)}</td> {/* Afficher la somme des quantités */}

  };
  



  const [isAddFormVisible, setIsAddFormVisible] = useState(false);

  const toggleAddFormVisibility = () => {
    setIsAddFormVisible(!isAddFormVisible);
  };

  return (
    <div className="all-categories">



<div  onClick={() => {setCategories(categories); toggleAddFormVisibility(); }}> {/* Lorsque vous cliquez sur "Editer", cela configure les données du formulaire avec la vente actuelle et inverse la visibilité du formulaire de mise à jour */}
    <img src={ajouter} alt="add" style={{ width: "30px", height: "30px" }} />
            </div >
            {isAddFormVisible && (
      <form onSubmit={handleCreatecateg} style={{ marginBottom: "10px" }}>
        <input type="text" name="nom" placeholder="NomArticle" onChange={handleChange} value={formData.nom}  style={{ marginBottom: "3px", marginRight: "3px", fontSize: "12px", padding: "5px" }}/>
        <input type="number" name="prix" placeholder="Quantite" onChange={handleChange} value={formData.prix}  style={{ marginBottom: "3px", marginRight: "3px", fontSize: "12px", padding: "5px" }}/>
        <input type="date" name="discription" placeholder="Date" onChange={handleChange} value={formData.discription}  style={{ marginBottom: "3px", marginRight: "3px", fontSize: "12px", padding: "5px" }}/>
        <button type="submit" className="custom-button" style={{ marginBottom: "3px", marginRight: "3px", fontSize: "12px", padding: "5px" }}>Ajouter un produit</button>
        
      </form>)}






      <div style={{ display: isUpdateFormVisible ? "block" : "none" }}>
        <form onSubmit={() => handleUpdatecateg(formData)} style={{ marginBottom: "10px" }}>

          <input type="text" name="nom" placeholder="NomArticle" onChange={handleChange} value={formData.nom} style={{ marginBottom: "3px", marginRight: "3px", fontSize: "12px", padding: "5px" }} />
          <input type="number" name="prix" placeholder="Quantite" onChange={handleChange} value={formData.prix} style={{ marginBottom: "3px", marginRight: "3px", fontSize: "12px", padding: "5px" }} />
          <input type="date" name="discription" placeholder="Date" onChange={handleChange} value={formData.discription} style={{ marginBottom: "3px", marginRight: "3px", fontSize: "12px", padding: "5px" }} />

          <button type="submit" className="custom-button" style={{ marginBottom: "3px", marginRight: "3px", fontSize: "12px", padding: "5px" }} >Update une categorie</button>
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
  Les Entrées de Stock de Pièces de Rechange
</p>






















      <table style={{ borderCollapse: "collapse", padding: "80px", margin: "auto", width: "999px", marginTop: '40px' }}>


        <thead>
          <tr>
            <th style={tableHeaderStyle}>ID</th>
            <th style={tableHeaderStyle}>date </th>
            <th style={tableHeaderStyle}>NomArticle</th>
            <th style={tableHeaderStyle}>Quantite </th> 

            <th style={tableHeaderStyle}>Action</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id}>
              <td style={tableCellStyle}>{category.id}</td>
              <td style={tableCellStyle}>{format(new Date(category.discription), 'dd/MM/yyyy')}</td>
              <td style={tableCellStyle}>{category.nom}</td>
             
              <td style={tableCellStyle}>{category.prix}</td> 

            

             <td style={tableCellStyle}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div onClick={() => { setFormData(category); toggleUpdateFormVisibility(); }}>
                  <img src={Log} alt="Editer"  style={{ width: "20px", height: "20px" }}/>
                </div>
                <div style={{ marginLeft: "10px" }} onClick={() =>handleDeletecateg(category.id)}>
                  <img src={Logo} alt="delete"  style={{ width: "20px", height: "20px" }} />
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
export default Allcategorie;
