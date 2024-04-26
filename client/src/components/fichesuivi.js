import React from 'react';
import { Link } from 'react-router-dom';

const ButtonGroup = () => {
  return (
    <div>
      <div className="button-group">
        <br/>
        <Link to="/FS de Abattage" className="button">Rapport abattage</Link>{/* Utilisez Link pour rediriger vers la nouvelle page */}
        <button className="button">Fiche de Suivi de Expédition</button>
        <button className="button">Ceck List Du Camion </button>
       
      </div>
<br/> 

      <div className="button-group">
        <br/>
        <button className="button">Fich Retour De Livraison </button>
        <button className="button">Fiche de suivi de Température</button>
        <Link to="#" className="button">Fiche de S N-D Zone propre </Link> {/* contient deux forme  */}
      </div>

      <br/>

      <div className="button-group">
        <button className="button">Fiche de Suivi de Température d'echaudage </button>
        <button className="button">Fiche de Controle de l'hygiene de personnel </button>
        <button className="button">Rapport Découpe Dinde </button> {/* contient 3 forme  */}
        
      </div>
      <br/>
      <div className="button-group">
        <button className="button">Rapport de Tri et Callibrage Poulet </button>
        <Link to="#" className="button">Rapport Decoupe Poulet Frais  </Link> {/* contient deux forme  */}
        <button className="button">Fich Etat du Stock (FIFO) </button>
      </div>
      <br/>
      <div className="button-group">
        <button className="button">Fiche de Suivi a la Réception de Volailles  </button>
        <button className="button">Fiche declaration client  </button> {/* contient 3 forme  */}
      </div>

    </div>
  );
};

export default ButtonGroup;
