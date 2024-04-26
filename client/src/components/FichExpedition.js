import React, { useState, useEffect } from "react";
import axios from "axios";
import Logoo from "./logoo.png";
import ContentEditable from 'react-contenteditable';

const AllExpedition = () => {
    const [categories, setCategories] = useState([]);
    const [formData, setFormData] = useState({
        id:"",
        date: "",
        numcamion: "",
        nomchaufeur: "",
        externe: false,
        interne: false,
        id:"",
        client:"",
        article:"",
        qte:"",
        datepro:"",
        lot:"",
        aspect:"",
        EHygiene:"",
       CHygiene:"",
        Elivreur:"",
        Clivreur:"",
        ETemProduit:"",
        CTemProduit:"",
        EtempFrigo:"",
        CtempFrigo:"",
        Eqte:"",
        Cqte:"",
        sigCQH:"",
        sigChefEquipe:""
    });

    useEffect(() => {
        fetchCategories();
    }, []);
    <ContentEditable
    html={formData.date}
    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
  />
    const fetchCategories = async () => {
        try {
            const response = await axios.get("http://localhost:4000/expedition/all");
            setCategories(response.data);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };
  
    const handleCreatecateg = async () => {
        try {
            console.log("FormData:", formData);
            await axios.post("http://localhost:4000/expedition/create", formData);
            console.log("Data added successfully!");
            fetchCategories();
        } catch (error) {
            console.error("Error creating categ:", error);
        }
    };

    const handleAddRow = () => {
        setCategories([...categories, {
            client: "",
            article: "",
            qte: "",
            datepro: "",
            lot: "",
            aspect: "",
        }]); };

       

        const handleContentEditableChange = (fieldName, newValue) => {
            setFormData((prevData) => ({
              ...prevData,
              [fieldName]: newValue,
            }));
          };


    const dateSansTemps = formData.date ? formData.date.split("T")[0] : "";

    return (



<div className="all-categories">
               
               <table style={{ width: '100%' }}>
         <tbody>
           <tr>
             <td style={{ display: 'flex', justifyContent: 'space-between' }}>
                       {/* Logo avec taille réduite */}
                       <img src={Logoo} alt="Logoo" style={{ width: "120px", height: "60px" }} />
                       {/* Titre aligné au centre */}
                       <h2 style={{ textAlign: 'center', margin: '0', flexGrow: '1', marginTop: '10px' }}>Fiche d'Expedition</h2>
                       {/* Input de date aligné à droite */}
                       <label type="text"  style={{ width: '150px', textAlign: 'right', margin: '0' }}>  </label> 
                     </td>
                   </tr>
                 </tbody>
               </table>
 
               <br/>
 

                 <div>
                        Date:{" "}   
                        <input
                        type="date"
                        value={dateSansTemps}
                        onChange={(e) => handleContentEditableChange("date", e.target.value)}
                        className="editable-content"
                        style={{ width: "100%" }}
                        placeholder='dd-mm-yyyy'
                        
                        />
                      </div>
                      <div style={{ display: "flex", alignItems: "center" }}>
<label htmlFor="numCamion" style={{ marginRight: "10px", marginBottom: "10px" }}>N Camion:</label>
<input
type="text"

onChange={(e) => handleContentEditableChange("numcamion", e.target.value)}
className="editable-content"
style={{ marginRight: "10px", width: "100%", marginBottom: "10px" }}
/>

<label htmlFor="nomChauffeur" style={{ marginRight: "20px", marginBottom: "10px" }}>Nom du chauffeur:</label>
<input
type="text"
id="nomChauffeur"
onChange={(e) => handleContentEditableChange("nomchaufeur", e.target.value)}
className="editable-content"
style={{ marginRight: "10px", width: "100%", marginBottom: "10px" }}
/>

<label htmlFor="interne" style={{ marginRight: "10px", marginBottom: "10px" }}>Interne</label>
<input type="checkbox" id="interne" name="interne" value="Bike" style={{ marginRight: "10px", width: "40px", height: "30px", marginBottom: "10px" }} />

<label htmlFor="externe" style={{ marginRight: "10px", marginBottom: "10px" }}>Externe</label>
<input type="checkbox" id="externe" name="externe" value="Car" style={{ marginRight: "10px", width: "40px", height: "30px", marginBottom: "10px" }} />
</div>

<table style={{ borderCollapse: "collapse", padding: "80px", margin: "auto", width: "999px", marginTop: '40px' }}>
                {/* Table header */}
                <tr>
                    <th>Client</th>
                    <th>Article</th>
                    <th>Quantité(kg)</th>
                    <th>Date production</th>
                    <th>N lot</th>
                    <th>Aspect organoleptique</th>
                </tr>
                {/* Table rows */}
                {categories.map((item, index) => (
                    <tr key={index}>
                        <td>
                        <ContentEditable
                                html={item.client}
                                onChange={(e) => {
                                    const updatedCategories = [...categories];
                                    updatedCategories[index].client = e.target.value;
                                    setCategories(updatedCategories);
                                }}
                            />
                        </td>
                        <td>
                        <ContentEditable
                                html={item.article}
                                onChange={(e) => {
                                    const updatedCategories = [...categories];
                                    updatedCategories[index].article = e.target.value;
                                    setCategories(updatedCategories);
                                }}
                            />
                        </td>
                        <td>
                        <ContentEditable
                                html={item.qte}
                                onChange={(e) => {
                                    const updatedCategories = [...categories];
                                    updatedCategories[index].qte = e.target.value;
                                    setCategories(updatedCategories);
                                }}
                            />
                        </td>
                        <td>
                        <ContentEditable
                                html={item.datepro}
                                onChange={(e) => {
                                    const updatedCategories = [...categories];
                                    updatedCategories[index].datepro = e.target.value;
                                    setCategories(updatedCategories);
                                }}
                            />
                        </td>
                        <td>
                        <ContentEditable
                                html={item.lot}
                                onChange={(e) => {
                                    const updatedCategories = [...categories];
                                    updatedCategories[index].lot = e.target.value;
                                    setCategories(updatedCategories);
                                }}
                            />
                        </td>
                        <td>
                        
                        <ContentEditable
                                html={item.aspect}
                                onChange={(e) => {
                                    const updatedCategories = [...categories];
                                    updatedCategories[index].aspect = e.target.value;
                                    setCategories(updatedCategories);
                                }}
                            />
                        </td>
                    </tr>
                ))}
            </table>

            <button onClick={handleAddRow}>Ajouter une vente</button>

            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <button onClick={handleCreatecateg} className="custom-button" style={{ width: "130px" }}>Enregistrer</button>
            </div>
        </div>
    );
}

export default AllExpedition;
