import React, { useState, useEffect, useRef } from "react";
import axios from "axios";


import "../index"; 
import Logoo from "./logoo.png";
import "../index.css";

import ContentEditable from 'react-contenteditable';


const RapportCamion = () => {
  const [categories, setCategories] = useState([]);

  const [formData, setFormData] = useState({
 
    id:"",
    date:"",
        numc1:"",
        numc2:"",
        numc3:"",
        numc4:"",
        numc5:"",
        liv1:"",
        liv2:"",
        liv3:"",
        liv4:"",
        liv5:"",
        c1:0,
        c2 :0,
        c3:0,
        c4:0,
        c5:0,
        c6:0,
        c7:0,
        c8:0,
        c9:0,
        c10:0,
        c11:0,
        c12:0,
        c13:0,
        c14:0,
        c15:0,
        c16:0,
        c17:0,
        c18:0,
        c19:0,
        c20:0,
        c21:0,
        c22:0,
        c23:0,
        c24:0,
        c25:0,
        nc1:0,
        nc2:0,
        nc3:0,
        nc4:0,
        nc6:0,
        nc7:0,
        nc8:0,
        nc9:0,
        nc10:0,
        nc11:0,
        nc12:0,
        nc13:0,
        nc14:0,
        nc15:0,
        nc16:0,
        nc17:0,
        nc18:0,
        nc19:0,
        nc20:0,
        nc21:0,
        nc22:0,
        nc23:0,
        nc24:0,
        nc25:0,
        obs1:"",
        obs2:"",
        obs3:"",
        obs4:"",
        obs5:"",
        obs6:"",
        obs7:"",
        obs8:"",
        obs9:"",
        obs10:"",
        obs11:"",
        obs12:"",
        obs13:"",
        obs14:"",
        obs15:"",
        obs16:"",
        obs17:"",
        obs18:"",
        obs19:"",
        obs20:"",
        obs21:"",
        obs22:"",
        obs23:"",
        obs24:"",
        obs25:"",
        sig1:"",
        sig2:"",
        sig3:"",
        sig4:"",
        sig5:"",
        sigchef:"",

  });
<ContentEditable
  html={formData.date}
  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
/>

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:4000/camion/all");
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleCreatecateg = async () => {
    try {
      console.log("FormData:", formData);
      await axios.post("http://localhost:4000/camion/create", formData);
      alert("bien enrigistrer !");
      
      setFormData({
        id:"",
        date:"",
            numc1:"",
            numc2:"",
            numc3:"",
            numc4:"",
            numc5:"",
            liv1:"",
            liv2:"",
            liv3:"",
            liv4:"",
            liv5:"",
            c1:"",
            c2:"",
            c3:"",
            c4:"",
            c5:"",
            c6:"",
            c7:"",
            c8:"",
            c9:"",
            c10:"",
            c11:"",
            c12:"",
            c13:"",
            c14:"",
            c15:"",
            c16:"",
            c17:"",
            c18:"",
            c19:"",
            c20:"",
            c21:"",
            c22:"",
            c23:"",
            c24:"",
            c25:"",
            nc1:"",
            nc2:"",
            nc3:"",
            nc4:"",
            nc6:"",
            nc7:"",
            nc8:"",
            nc9:"",
            nc10:"",
            nc11:"",
            nc12:"",
            nc13:"",
            nc14:"",
            nc15:"",
            nc16:"",
            nc17:"",
            nc18:"",
            nc19:"",
            nc20:"",
            nc21:"",
            nc22:"",
            nc23:"",
            nc24:"",
            nc25:"",
            obs1:"",
            obs2:"",
            obs3:"",
            obs4:"",
            obs5:"",
            obs6:"",
            obs7:"",
            obs8:"",
            obs9:"",
            obs10:"",
            obs11:"",
            obs12:"",
            obs13:"",
            obs14:"",
            obs15:"",
            obs16:"",
            obs17:"",
            obs18:"",
            obs19:"",
            obs20:"",
            obs21:"",
            obs22:"",
            obs23:"",
            obs24:"",
            obs25:"",
            sig1:"",
            sig2:"",
            sig3:"",
            sig4:"",
            sig5:"",
            sigchef:"",
   
      
      });
      fetchCategories();
    } catch (error) {
      console.error("Error creating categ:", error);
    }
  };
  

  const [contentEditableData, setContentEditableData] = useState({
   
    id:"",
    date:"",
        numc1:"",
        numc2:"",
        numc3:"",
        numc4:"",
        numc5:"",
        liv1:"",
        liv2:"",
        liv3:"",
        liv4:"",
        liv5:"",
        c1:"",
        c2:"",
        c3:"",
        c4:"",
        c5:"",
        c6:"",
        c7:"",
        c8:"",
        c9:"",
        c10:"",
        c11:"",
        c12:"",
        c13:"",
        c14:"",
        c15:"",
        c16:"",
        c17:"",
        c18:"",
        c19:"",
        c20:"",
        c21:"",
        c22:"",
        c23:"",
        c24:"",
        c25:"",
        nc1:"",
        nc2:"",
        nc3:"",
        nc4:"",
        nc6:"",
        nc7:"",
        nc8:"",
        nc9:"",
        nc10:"",
        nc11:"",
        nc12:"",
        nc13:"",
        nc14:"",
        nc15:"",
        nc16:"",
        nc17:"",
        nc18:"",
        nc19:"",
        nc20:"",
        nc21:"",
        nc22:"",
        nc23:"",
        nc24:"",
        nc25:"",
        obs1:"",
        obs2:"",
        obs3:"",
        obs4:"",
        obs5:"",
        obs6:"",
        obs7:"",
        obs8:"",
        obs9:"",
        obs10:"",
        obs11:"",
        obs12:"",
        obs13:"",
        obs14:"",
        obs15:"",
        obs16:"",
        obs17:"",
        obs18:"",
        obs19:"",
        obs20:"",
        obs21:"",
        obs22:"",
        obs23:"",
        obs24:"",
        obs25:"",
        sig1:"",
        sig2:"",
        sig3:"",
        sig4:"",
        sig5:"",
        sigchef:"",

  });
  
  // État séparé pour le contenu géré par React
  const [reactManagedData, setReactManagedData] = useState({
    // champs gérés par React
  });
  
  // Gérez les changements pour les champs `contentEditable`
  const handleContentEditableChange = (fieldName, newValue) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: newValue,
    }));
  };
  




  
  

  const dateSansTemps = formData.date ? formData.date.split("T")[0] : "";



  return (
   // <form onSubmit={handleSubmit} method="post" action="fich.js">


    <div className="all-categories">
          
              <table style={{ width: '100%' }}>
        <tbody>
          <tr>
            <td style={{ display: 'flex', justifyContent: 'space-between' }}>
                      {/* Logo avec taille réduite */}
                      <img src={Logoo} alt="Logoo" style={{ width: "120px", height: "60px" }} />
                      {/* Titre aligné au centre */}
                      <h2 style={{ textAlign: 'center', margin: '0', flexGrow: '1', marginTop: '10px' }}>  CHECK LIST DU CAMION </h2>
                      {/* Input de date aligné à droite */}
                      <label type="text"  style={{ width: '150px', textAlign: 'right', margin: '0' }}>  </label> 
                    </td>
                  </tr>
                </tbody>
              </table>

              <br/>







      <div style={{ width: "100%" , marginLeft:'1100px' }}>
    Date:{" "}   
    <input
      type="date"
      value={dateSansTemps}
      onChange={(e) => handleContentEditableChange("date", e.target.value)}
      className="editable-content"
     
      placeholder='dd-mm-yyyy'
    />
  </div>




 
<table style={{ borderCollapse: "collapse", padding: "80px", margin: "auto", width: "999px", marginBottom: '90px' }}>
            <thead   >
                <tr style={{ width:"20px" }}>
                <td>
                Numéro de camion:{" "}
      <ContentEditable
        html={formData.numc1}
        onChange={(e) => handleContentEditableChange("numc1", e.target.value)}
        className="place"
        placeholder="Saisie ici"
      />
    </td>
    Livreur:{" "}
      <ContentEditable
        html={formData.liv1}
        onChange={(e) => handleContentEditableChange("liv1", e.target.value)}
        className="place"
        placeholder="Saisie ici"
      /> </tr>
            </thead>
      <tr> 
      <th style={{width:"3px", textAlign:"center"}} >Verification</th>
        <th style={{width:"3px", textAlign:"center"}}>C</th>
        <th  style={{width:"3px", textAlign:"center"}}>NC</th>
        <th style={{width:"3px", textAlign:"center"}}  >Observations</th>          
      </tr>

      <tr> 
    
            <td   style={{ width :"20%"}}>Documents</td>
            <td style={{ textAlign: 'center' }} >
                <input type="checkbox" checked={formData.c1 === 1} onChange={(e) => setFormData({ ...formData, c1: e.target.checked ? 1 : 0 })  }
                  style={{ width: "20px", height: "20px" }} /></td>

<td style={{ textAlign: 'center', width :"10%"}} >
                <input type="checkbox" checked={formData.nc1 === 1} onChange={(e) => setFormData({ ...formData, nc1: e.target.checked ? 1 : 0 })   }
  style={{ width: "20px", height: "20px" }} />
</td>

              <td> 
              <ContentEditable html={formData.obs1} onChange={(e) => handleContentEditableChange("obs1", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>
             
      </tr>




<tr> 
    
    <td>Température et ventilation</td>
    <td style={{ textAlign: 'center' , width :"10%"}} >
        <input type="checkbox" checked={formData.c2 === 1} onChange={(e) => setFormData({ ...formData, c2: e.target.checked ? 1 : 0 })  }
          style={{ width: "20px", height: "20px" }} /></td>

<td style={{ textAlign: 'center', width :"10%"}} >
        <input
type="checkbox"
checked={formData.nc2 === 1} // Vérifie si c1 est égal à 1 pour cocher la case
onChange={(e) =>
setFormData({ ...formData, nc2: e.target.checked ? 1 : 0 }) // Change la valeur en 1 si la case est cochée, sinon 0
}
style={{ width: "20px", height: "20px" }} 

/>
</td>

      <td> 
      <ContentEditable html={formData.obs2} onChange={(e) => handleContentEditableChange("obs2", e.target.value)}  class="place" placeholder=" Saisie ici" />  
      </td>
     
</tr>











<tr> 
    
    <td>Vérification générales du camion</td>
    <td style={{ textAlign: 'center' , width :"10%"}} >
        <input type="checkbox" checked={formData.c3 === 1} onChange={(e) => setFormData({ ...formData, c3: e.target.checked ? 1 : 0 })  }
          style={{ width: "20px", height: "20px" }} /></td>

<td style={{ textAlign: 'center', width :"10%"}} >
        <input
type="checkbox"
checked={formData.nc3 === 1} // Vérifie si c1 est égal à 1 pour cocher la case
onChange={(e) =>
setFormData({ ...formData, nc3: e.target.checked ? 1 : 0 }) // Change la valeur en 1 si la case est cochée, sinon 0
}
style={{ width: "20px", height: "20px" }} 

/>
</td>

      <td> 
      <ContentEditable html={formData.obs3} onChange={(e) => handleContentEditableChange("obs3", e.target.value)}  class="place" placeholder=" Saisie ici" />  
      </td>
     
</tr>

<tr> 
    
    <td>Hygiéne livreur</td>
    <td style={{ textAlign: 'center' , width :"10%"}} >
        <input type="checkbox" checked={formData.c4 === 1} onChange={(e) => setFormData({ ...formData, c4: e.target.checked ? 1 : 0 })  }
          style={{ width: "20px", height: "20px" }} /></td>

<td style={{ textAlign: 'center', width :"10%"}} >
        <input
type="checkbox"
checked={formData.nc4 === 1} // Vérifie si c1 est égal à 1 pour cocher la case
onChange={(e) =>
setFormData({ ...formData, nc4: e.target.checked ? 1 : 0 }) // Change la valeur en 1 si la case est cochée, sinon 0
}
style={{ width: "20px", height: "20px" }} 

/>
</td>

      <td> 
      <ContentEditable html={formData.obs4} onChange={(e) => handleContentEditableChange("obs4", e.target.value)}  class="place" placeholder=" Saisie ici" />  
      </td>
     
</tr>


<tr> 
    
    <td>Hygiéne engin</td>
    <td style={{ textAlign: 'center' , width :"10%"}} >
        <input type="checkbox" checked={formData.c5 === 1} onChange={(e) => setFormData({ ...formData, c5: e.target.checked ? 1 : 0 })  }
          style={{ width: "20px", height: "20px" }} /></td>

<td style={{ textAlign: 'center', width :"10%"}} >
        <input
type="checkbox"
checked={formData.nc5 === 1} // Vérifie si c1 est égal à 1 pour cocher la case
onChange={(e) =>
setFormData({ ...formData, nc5: e.target.checked ? 1 : 0 }) // Change la valeur en 1 si la case est cochée, sinon 0
}
style={{ width: "20px", height: "20px" }} 

/>
</td>

      <td> 
      <ContentEditable html={formData.obs5} onChange={(e) => handleContentEditableChange("obs5", e.target.value)}  class="place" placeholder=" Saisie ici" />  
      </td>
     
</tr>
</table>


            <div style={{ marginTop:"-80px"}} > 
              <label    style={{ fontSize: '15px' ,marginRight: '50px', textAlign: 'center', margin: '0' }}>Signature CQH: </label> 
             <br/>
             <input
        value={formData.sig1}
        onChange={(e) => handleContentEditableChange("sig1", e.target.value)}
        placeholder=" Saisie ici"
        style={{ marginLeft :"610px"}}
    /> </div>




//////////////////////////////////////////////

<table style={{ borderCollapse: "collapse", padding: "80px", margin: "auto", width: "999px", marginBottom: '90px' }}>
            <thead>
                <tr >
                <td > 
                Numero de comion : <ContentEditable html={formData.numc2} onChange={(e) => handleContentEditableChange("numc2", e.target.value)}  class="place" placeholder=" Saisie ici" />  </td>
               Livreur : <ContentEditable html={formData.liv2} onChange={(e) => handleContentEditableChange("liv2", e.target.value)}  class="place" placeholder=" Saisie ici" />  
                </tr>
            </thead>
      <tr> 
      <th  style={{width:"3px", textAlign:"center"}} >Verification</th>
        <th  style={{width:"3px", textAlign:"center"}} >C</th>
        <th   style={{width:"3px", textAlign:"center"}}>NC</th>
        <th  style={{width:"3px", textAlign:"center"}}>Observations</th>          
      </tr>

      <tr> 
    
            <td   style={{ width :"20%"}}>Documents</td>
            <td style={{ textAlign: 'center' , width :"5%"}} >
                <input type="checkbox" checked={formData.c6 === 1} onChange={(e) => setFormData({ ...formData, c6: e.target.checked ? 1 : 0 })  }
                  style={{ width: "20px", height: "20px" }} /></td>

<td style={{ textAlign: 'center', width :"10%"}} >
                <input type="checkbox" checked={formData.nc6 === 1} onChange={(e) => setFormData({ ...formData, nc6: e.target.checked ? 1 : 0 })   }
  style={{ width: "20px", height: "20px" }} />
</td>

              <td> 
              <ContentEditable html={formData.obs6} onChange={(e) => handleContentEditableChange("obs6", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>
             
      </tr>




<tr> 
    
    <td>Température et ventilation</td>
    <td style={{ textAlign: 'center' , width :"10%"}} >
        <input type="checkbox" checked={formData.c7 === 1} onChange={(e) => setFormData({ ...formData, c7: e.target.checked ? 1 : 0 })  }
          style={{ width: "20px", height: "20px" }} /></td>

<td style={{ textAlign: 'center', width :"10%"}} >
        <input
type="checkbox"
checked={formData.nc7 === 1} // Vérifie si c1 est égal à 1 pour cocher la case
onChange={(e) =>
setFormData({ ...formData, nc7: e.target.checked ? 1 : 0 }) // Change la valeur en 1 si la case est cochée, sinon 0
}
style={{ width: "20px", height: "20px" }} 

/>
</td>

      <td> 
      <ContentEditable html={formData.obs7} onChange={(e) => handleContentEditableChange("obs7", e.target.value)}  class="place" placeholder=" Saisie ici" />  
      </td>
     
</tr>











<tr> 
    
    <td>Vérification générales du camion</td>
    <td style={{ textAlign: 'center' , width :"10%"}} >
        <input type="checkbox" checked={formData.c8 === 1} onChange={(e) => setFormData({ ...formData, c8: e.target.checked ? 1 : 0 })  }
          style={{ width: "20px", height: "20px" }} /></td>

<td style={{ textAlign: 'center', width :"10%"}} >
        <input
type="checkbox"
checked={formData.nc8 === 1} // Vérifie si c1 est égal à 1 pour cocher la case
onChange={(e) =>
setFormData({ ...formData, nc8: e.target.checked ? 1 : 0 }) // Change la valeur en 1 si la case est cochée, sinon 0
}
style={{ width: "20px", height: "20px" }} 

/>
</td>

      <td> 
      <ContentEditable html={formData.obs8} onChange={(e) => handleContentEditableChange("obs8", e.target.value)}  class="place" placeholder=" Saisie ici" />  
      </td>
     
</tr>

<tr> 
    
    <td>Hygiéne livreur</td>
    <td style={{ textAlign: 'center' , width :"10%"}} >
        <input type="checkbox" checked={formData.c9 === 1} onChange={(e) => setFormData({ ...formData, c9: e.target.checked ? 1 : 0 })  }
          style={{ width: "20px", height: "20px" }} /></td>

<td style={{ textAlign: 'center', width :"10%"}} >
        <input
type="checkbox"
checked={formData.nc9 === 1} // Vérifie si c1 est égal à 1 pour cocher la case
onChange={(e) =>
setFormData({ ...formData, nc9: e.target.checked ? 1 : 0 }) // Change la valeur en 1 si la case est cochée, sinon 0
}
style={{ width: "20px", height: "20px" }} 

/>
</td>

      <td> 
      <ContentEditable html={formData.obs9} onChange={(e) => handleContentEditableChange("obs9", e.target.value)}  class="place" placeholder=" Saisie ici" />  
      </td>
     
</tr>


<tr> 
    
    <td>Hygiéne engin</td>
    <td style={{ textAlign: 'center' , width :"10%"}} >
        <input type="checkbox" checked={formData.c10 === 1} onChange={(e) => setFormData({ ...formData, c10: e.target.checked ? 1 : 0 })  }
          style={{ width: "20px", height: "20px" }} /></td>

<td style={{ textAlign: 'center', width :"10%"}} >
        <input
type="checkbox"
checked={formData.nc10 === 1} // Vérifie si c1 est égal à 1 pour cocher la case
onChange={(e) =>
setFormData({ ...formData, nc10: e.target.checked ? 1 : 0 }) // Change la valeur en 1 si la case est cochée, sinon 0
}
style={{ width: "20px", height: "20px" }} 

/>
</td>

      <td> 
      <ContentEditable html={formData.obs10} onChange={(e) => handleContentEditableChange("obs10", e.target.value)}  class="place" placeholder=" Saisie ici" />  
      </td>
     
</tr>








      
     

</table>





     
             <div style={{ marginTop:"-80px"}}> <label    style={{ fontSize: '15px' ,marginRight: '50px', textAlign: 'center', margin: '0' }}>Signature CQH: </label> 
             <br/>
             <input
        value={formData.sig2}
        onChange={(e) => handleContentEditableChange("sig2", e.target.value)}
        placeholder=" Saisie ici"
        style={{ marginLeft :"610px"}}
    /> </div>







<table style={{ borderCollapse: "collapse", padding: "80px", margin: "auto", width: "999px", marginBottom: '90px' }}>
            <thead>
                <tr >
                <td > 
                Numero de comion : <ContentEditable html={formData.numc3} onChange={(e) => handleContentEditableChange("numc3", e.target.value)}  class="place" placeholder=" Saisie ici" />  </td>
               Livreur : <ContentEditable html={formData.liv3} onChange={(e) => handleContentEditableChange("liv3", e.target.value)}  class="place" placeholder=" Saisie ici" />  
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
                <input type="checkbox" checked={formData.c11 === 1} onChange={(e) => setFormData({ ...formData, c11: e.target.checked ? 1 : 0 })  }
                  style={{ width: "20px", height: "20px" }} /></td>

<td style={{ textAlign: 'center', width :"10%"}} >
                <input type="checkbox" checked={formData.nc11 === 1} onChange={(e) => setFormData({ ...formData, nc11: e.target.checked ? 1 : 0 })   }
  style={{ width: "20px", height: "20px" }} />
</td>

              <td> 
              <ContentEditable html={formData.obs11} onChange={(e) => handleContentEditableChange("obs11", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>
             
      </tr>




<tr> 
    
    <td>Température et ventilation</td>
    <td style={{ textAlign: 'center' , width :"10%"}} >
        <input type="checkbox" checked={formData.c12 === 1} onChange={(e) => setFormData({ ...formData, c12: e.target.checked ? 1 : 0 })  }
          style={{ width: "20px", height: "20px" }} /></td>

<td style={{ textAlign: 'center', width :"10%"}} >
        <input
type="checkbox"
checked={formData.nc12 === 1} // Vérifie si c1 est égal à 1 pour cocher la case
onChange={(e) =>
setFormData({ ...formData, nc12: e.target.checked ? 1 : 0 }) // Change la valeur en 1 si la case est cochée, sinon 0
}
style={{ width: "20px", height: "20px" }} 

/>
</td>

      <td> 
      <ContentEditable html={formData.obs12} onChange={(e) => handleContentEditableChange("obs12", e.target.value)}  class="place" placeholder=" Saisie ici" />  
      </td>
     
</tr>











<tr> 
    
    <td>Vérification générales du camion</td>
    <td style={{ textAlign: 'center' , width :"10%"}} >
        <input type="checkbox" checked={formData.c13 === 1} onChange={(e) => setFormData({ ...formData, c13: e.target.checked ? 1 : 0 })  }
          style={{ width: "20px", height: "20px" }} /></td>

<td style={{ textAlign: 'center', width :"10%"}} >
        <input
type="checkbox"
checked={formData.nc13 === 1} // Vérifie si c1 est égal à 1 pour cocher la case
onChange={(e) =>
setFormData({ ...formData, nc13: e.target.checked ? 1 : 0 }) // Change la valeur en 1 si la case est cochée, sinon 0
}
style={{ width: "20px", height: "20px" }} 

/>
</td>

      <td> 
      <ContentEditable html={formData.obs13} onChange={(e) => handleContentEditableChange("obs13", e.target.value)}  class="place" placeholder=" Saisie ici" />  
      </td>
     
</tr>

<tr> 
    
    <td>Hygiéne livreur</td>
    <td style={{ textAlign: 'center' , width :"10%"}} >
        <input type="checkbox" checked={formData.c14 === 1} onChange={(e) => setFormData({ ...formData, c14: e.target.checked ? 1 : 0 })  }
          style={{ width: "20px", height: "20px" }} /></td>

<td style={{ textAlign: 'center', width :"10%"}} >
        <input
type="checkbox"
checked={formData.nc14 === 1} // Vérifie si c1 est égal à 1 pour cocher la case
onChange={(e) =>
setFormData({ ...formData, nc14: e.target.checked ? 1 : 0 }) // Change la valeur en 1 si la case est cochée, sinon 0
}
style={{ width: "20px", height: "20px" }} 

/>
</td>

      <td> 
      <ContentEditable html={formData.obs14} onChange={(e) => handleContentEditableChange("obs14", e.target.value)}  class="place" placeholder=" Saisie ici" />  
      </td>
     
</tr>


<tr> 
    
    <td>Hygiéne engin</td>
    <td style={{ textAlign: 'center' , width :"10%"}} >
        <input type="checkbox" checked={formData.c15 === 1} onChange={(e) => setFormData({ ...formData, c15: e.target.checked ? 1 : 0 })  }
          style={{ width: "20px", height: "20px" }} /></td>

<td style={{ textAlign: 'center', width :"10%"}} >
        <input
type="checkbox"
checked={formData.nc15 === 1} // Vérifie si c1 est égal à 1 pour cocher la case
onChange={(e) =>
setFormData({ ...formData, nc15: e.target.checked ? 1 : 0 }) // Change la valeur en 1 si la case est cochée, sinon 0
}
style={{ width: "20px", height: "20px" }} 

/>
</td>

      <td> 
      <ContentEditable html={formData.obs15} onChange={(e) => handleContentEditableChange("obs15", e.target.value)}  class="place" placeholder=" Saisie ici" />  
      </td>
     
</tr>








      
     

</table>





     
             <div style={{ marginTop:"-80px"}} > <label    style={{ fontSize: '15px' ,marginRight: '50px', textAlign: 'center', margin: '0' }}>Signature CQH: </label> 
             <br/>
             <input
        value={formData.sig3}
        onChange={(e) => handleContentEditableChange("sig3", e.target.value)}
        placeholder=" Saisie ici"
        style={{ marginLeft :"610px"}}
    /> </div>




<table style={{ borderCollapse: "collapse", padding: "80px", margin: "auto", width: "999px", marginBottom: '90px' }}>
            <thead>
                <tr >
                <td > 
                Numero de comion : <ContentEditable html={formData.numc4} onChange={(e) => handleContentEditableChange("numc4", e.target.value)}  class="place" placeholder=" Saisie ici" />  </td>
               Livreur : <ContentEditable html={formData.liv4} onChange={(e) => handleContentEditableChange("liv4", e.target.value)}  class="place" placeholder=" Saisie ici" />  
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
                <input type="checkbox" checked={formData.c16 === 1} onChange={(e) => setFormData({ ...formData, c16: e.target.checked ? 1 : 0 })  }
                  style={{ width: "20px", height: "20px" }} /></td>

<td style={{ textAlign: 'center', width :"10%"}} >
                <input type="checkbox" checked={formData.nc16 === 1} onChange={(e) => setFormData({ ...formData, nc16: e.target.checked ? 1 : 0 })   }
  style={{ width: "20px", height: "20px" }} />
</td>

              <td> 
              <ContentEditable html={formData.obs16} onChange={(e) => handleContentEditableChange("obs16", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>
             
      </tr>




<tr> 
    
    <td>Température et ventilation</td>
    <td style={{ textAlign: 'center' , width :"10%"}} >
        <input type="checkbox" checked={formData.c17 === 1} onChange={(e) => setFormData({ ...formData, c17: e.target.checked ? 1 : 0 })  }
          style={{ width: "20px", height: "20px" }} /></td>

<td style={{ textAlign: 'center', width :"10%"}} >
        <input
type="checkbox"
checked={formData.nc17 === 1} // Vérifie si c1 est égal à 1 pour cocher la case
onChange={(e) =>
setFormData({ ...formData, nc17: e.target.checked ? 1 : 0 }) // Change la valeur en 1 si la case est cochée, sinon 0
}
style={{ width: "20px", height: "20px" }} 

/>
</td>

      <td> 
      <ContentEditable html={formData.obs17} onChange={(e) => handleContentEditableChange("obs17", e.target.value)}  class="place" placeholder=" Saisie ici" />  
      </td>
     
</tr>











<tr> 
    
    <td>Vérification générales du camion</td>
    <td style={{ textAlign: 'center' , width :"10%"}} >
        <input type="checkbox" checked={formData.c18 === 1} onChange={(e) => setFormData({ ...formData, c18: e.target.checked ? 1 : 0 })  }
          style={{ width: "20px", height: "20px" }} /></td>

<td style={{ textAlign: 'center', width :"10%"}} >
        <input
type="checkbox"
checked={formData.nc18 === 1} // Vérifie si c1 est égal à 1 pour cocher la case
onChange={(e) =>
setFormData({ ...formData, nc18: e.target.checked ? 1 : 0 }) // Change la valeur en 1 si la case est cochée, sinon 0
}
style={{ width: "20px", height: "20px" }} 

/>
</td>

      <td> 
      <ContentEditable html={formData.obs18} onChange={(e) => handleContentEditableChange("obs18", e.target.value)}  class="place" placeholder=" Saisie ici" />  
      </td>
     
</tr>

<tr> 
    
    <td>Hygiéne livreur</td>
    <td style={{ textAlign: 'center' , width :"10%"}} >
        <input type="checkbox" checked={formData.c19 === 1} onChange={(e) => setFormData({ ...formData, c19: e.target.checked ? 1 : 0 })  }
          style={{ width: "20px", height: "20px" }} /></td>

<td style={{ textAlign: 'center', width :"10%"}} >
        <input
type="checkbox"
checked={formData.nc19 === 1} // Vérifie si c1 est égal à 1 pour cocher la case
onChange={(e) =>
setFormData({ ...formData, nc19: e.target.checked ? 1 : 0 }) // Change la valeur en 1 si la case est cochée, sinon 0
}
style={{ width: "20px", height: "20px" }} 

/>
</td>

      <td> 
      <ContentEditable html={formData.obs19} onChange={(e) => handleContentEditableChange("obs19", e.target.value)}  class="place" placeholder=" Saisie ici" />  
      </td>
     
</tr>


<tr> 
    
    <td>Hygiéne engin</td>
    <td style={{ textAlign: 'center' , width :"10%"}} >
        <input type="checkbox" checked={formData.c20 === 1} onChange={(e) => setFormData({ ...formData, c20: e.target.checked ? 1 : 0 })  }
          style={{ width: "20px", height: "20px" }} /></td>

<td style={{ textAlign: 'center', width :"10%"}} >
        <input
type="checkbox"
checked={formData.nc20 === 1} // Vérifie si c1 est égal à 1 pour cocher la case
onChange={(e) =>
setFormData({ ...formData, nc20: e.target.checked ? 1 : 0 }) // Change la valeur en 1 si la case est cochée, sinon 0
}
style={{ width: "20px", height: "20px" }} 

/>
</td>

      <td> 
      <ContentEditable html={formData.obs20} onChange={(e) => handleContentEditableChange("obs20", e.target.value)}  class="place" placeholder=" Saisie ici" />  
      </td>
     
</tr>








      
     

</table>





     
             <div  style={{ marginTop:"-80px"}}> <label    style={{ fontSize: '15px' ,marginRight: '50px', textAlign: 'center', margin: '0' }}>Signature CQH: </label> 
             <br/>
             <input
        value={formData.sig4}
        onChange={(e) => handleContentEditableChange("sig4", e.target.value)}
        placeholder=" Saisie ici"
        style={{ marginLeft :"610px"}}
    /> </div>








<table style={{ borderCollapse: "collapse", padding: "80px", margin: "auto", width: "999px", marginBottom: '90px' }}>
            <thead>
                <tr >
                <td > 
                Numero de comion : <ContentEditable html={formData.numc5} onChange={(e) => handleContentEditableChange("numc5", e.target.value)}  class="place" placeholder=" Saisie ici" />  </td>
               Livreur : <ContentEditable html={formData.liv5} onChange={(e) => handleContentEditableChange("liv5", e.target.value)}  class="place" placeholder=" Saisie ici" />  
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
                <input type="checkbox" checked={formData.c21 === 1} onChange={(e) => setFormData({ ...formData, c21: e.target.checked ? 1 : 0 })  }
                  style={{ width: "20px", height: "20px" }} /></td>

<td style={{ textAlign: 'center', width :"10%"}} >
                <input type="checkbox" checked={formData.nc21 === 1} onChange={(e) => setFormData({ ...formData, nc21: e.target.checked ? 1 : 0 })   }
  style={{ width: "20px", height: "20px" }} />
</td>

              <td> 
              <ContentEditable html={formData.obs21} onChange={(e) => handleContentEditableChange("obs21", e.target.value)}  class="place" placeholder=" Saisie ici" />  
              </td>
             
      </tr>




<tr> 
    
    <td>Température et ventilation</td>
    <td style={{ textAlign: 'center' , width :"10%"}} >
        <input type="checkbox" checked={formData.c22 === 1} onChange={(e) => setFormData({ ...formData, c22: e.target.checked ? 1 : 0 })  }
          style={{ width: "20px", height: "20px" }} /></td>

<td style={{ textAlign: 'center', width :"10%"}} >
        <input
type="checkbox"
checked={formData.nc22 === 1} // Vérifie si c1 est égal à 1 pour cocher la case
onChange={(e) =>
setFormData({ ...formData, nc22: e.target.checked ? 1 : 0 }) // Change la valeur en 1 si la case est cochée, sinon 0
}
style={{ width: "20px", height: "20px" }} 

/>
</td>

      <td> 
      <ContentEditable html={formData.obs22} onChange={(e) => handleContentEditableChange("obs22", e.target.value)}  class="place" placeholder=" Saisie ici" />  
      </td>
     
</tr>











<tr> 
    
    <td>Vérification générales du camion</td>
    <td style={{ textAlign: 'center' , width :"10%"}} >
        <input type="checkbox" checked={formData.c23 === 1} onChange={(e) => setFormData({ ...formData, c23: e.target.checked ? 1 : 0 })  }
          style={{ width: "20px", height: "20px" }} /></td>

<td style={{ textAlign: 'center', width :"10%"}} >
        <input
type="checkbox"
checked={formData.nc23 === 1} // Vérifie si c1 est égal à 1 pour cocher la case
onChange={(e) =>
setFormData({ ...formData, nc23: e.target.checked ? 1 : 0 }) // Change la valeur en 1 si la case est cochée, sinon 0
}
style={{ width: "20px", height: "20px" }} 

/>
</td>

      <td> 
      <ContentEditable html={formData.obs23} onChange={(e) => handleContentEditableChange("obs23", e.target.value)}  class="place" placeholder=" Saisie ici" />  
      </td>
     
</tr>

<tr> 
    
    <td>Hygiéne livreur</td>
    <td style={{ textAlign: 'center' , width :"10%"}} >
        <input type="checkbox" checked={formData.c24 === 1} onChange={(e) => setFormData({ ...formData, c24: e.target.checked ? 1 : 0 })  }
          style={{ width: "20px", height: "20px" }} /></td>

<td style={{ textAlign: 'center', width :"10%"}} >
        <input
type="checkbox"
checked={formData.nc24 === 1} // Vérifie si c1 est égal à 1 pour cocher la case
onChange={(e) =>
setFormData({ ...formData, nc24: e.target.checked ? 1 : 0 }) // Change la valeur en 1 si la case est cochée, sinon 0
}
style={{ width: "20px", height: "20px" }} 

/>
</td>

      <td> 
      <ContentEditable html={formData.obs24} onChange={(e) => handleContentEditableChange("obs24", e.target.value)}  class="place" placeholder=" Saisie ici" />  
      </td>
     
</tr>


<tr> 
    
    <td>Hygiéne engin</td>
    <td style={{ textAlign: 'center' , width :"10%"}} >
        <input type="checkbox" checked={formData.c25 === 1} onChange={(e) => setFormData({ ...formData, c25: e.target.checked ? 1 : 0 })  }
          style={{ width: "20px", height: "20px" }} /></td>

<td style={{ textAlign: 'center', width :"10%"}} >
        <input
type="checkbox"
checked={formData.nc25 === 1} // Vérifie si c1 est égal à 1 pour cocher la case
onChange={(e) =>
setFormData({ ...formData, nc25: e.target.checked ? 1 : 0 }) // Change la valeur en 1 si la case est cochée, sinon 0
}
style={{ width: "20px", height: "20px" }} 

/>
</td>

      <td> 
      <ContentEditable html={formData.obs25} onChange={(e) => handleContentEditableChange("obs25", e.target.value)}  class="place" placeholder=" Saisie ici" />  
      </td>
     
</tr>








      
     

</table>





     
             <div  style={{ marginTop:"-80px"}}> <label    style={{ fontSize: '15px' ,marginRight: '50px', textAlign: 'center', margin: '0' }}>Signature CQH: </label> 
             <br/>
             <input
        value={formData.sig5}
        onChange={(e) => handleContentEditableChange("sig5", e.target.value)}
        placeholder=" Saisie ici"
        style={{ marginLeft :"610px"}}
    /> </div>



































     
             <div > <label    style={{ fontSize: '15px' ,marginRight: '50px', textAlign: 'center', margin: '0' }}>Signature Chef Equipe HACCP : </label> 
             <br/>
             <input
        value={formData.sigchef}
        onChange={(e) => handleContentEditableChange("sigchef", e.target.value)}
        placeholder=" Saisie ici"
        style={{ marginLeft :"610px"}}
    /> </div>


             <br/>  <br/>  <br/>  <br/>
            <div colSpan="2" style={{ textAlign: 'center' }}>
              <button onClick={handleCreatecateg} className="custom-button" style={{ width: "130px"  }}>Enregistrer</button>
            </div>
            
            </div>
          
  );
}

export default RapportCamion;
