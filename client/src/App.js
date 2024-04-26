import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Login from "./components/login";
import SignUp from "./components/signup";
import Profile from "./components/profile";
import { RequireToken } from "./components/Auth.js";   
import Footer from "./components/Footer"; 
import Allvente from "./components/Allvente.js"
import AllCategorie from "./components/Allcategorie";
import Allachat from "./components/Allachat.js";
import Nonconforme from "./components/nonConforme.js";
import RapportAbattagePage from './components/rapportA.js';
import AllExpedition from "./components/FichExpedition.js"
import FS from "./components/FS de Abattage.js";
import PowerBIComponent from './components/PowerBI'; 
import Voir from "./components/abattage/voir.js";
import Print from "./components/abattage/print.js";
import Inventaire from "./components/inventair.js"
import Expedition from "./components/FS de Expedition.js"
import Temp from "./components/FS de temp.js"
import RapportTemp from "./components/rapportTemp.js"
import PrintControle from "./components/controle/printControle.js"
import FSControle from "./components/FS de controle.js"
import VoirControle from "./components/controle/voircontrole.js"
import VoirTemp from "./components/temp/voirTemp.js"
import  Allcontrole from "./components/rapportControle.js"
import PrintTemp from "./components/temp/print.js";
import Retour from "./components/FS de retour.js";
import VoirRetour from "./components/retour/voirRetour.js";
import RapportRetour from "./components/rapportRetour.js";
import Camion from "./components/FS de camion.js";

import RapportCamion from "./components/rappotCamion.js";
import VoirCamion from "./components/camion/VoirCamion.js";
import  RapportNonp from "./components/RapportNonp.js";
import VoirNonpropre from "./components/NonPropre/VoirNonpropre.js";
import  Nonpropre from "./components/FS de nonpropre.js";
import  PrintRetour from "./components/retour/PrintRetour.js";
import RetourUpdate from "./components/retour/RetourUpdate.js";
import UpdateCamion from "./components/camion/UpdateCamion.js";
import UpdateNonp from "./components/NonPropre/UpdateNonp.js";
import PrintNonpropre from "./components/NonPropre/PrintNonpropre.js";
import PrintCamion from "./components/camion/PrintCamion.js";
import  UpdateControle from "./components/controle/UpdateControle.js";
import  Decoupe from "./components/FS de decoupe.js";

import VoirDecoupe from "./components/decoupe/VoirDecoupe.js";
import RapportDecoupe from "./components/RapportDecoupe.js";
import Dinde from "./components/FS de dinde.js"

import UpdateDecoupe from "./components/decoupe/UpdateDecoupe.js";
import RapportDinde from "./components/RapportDinde.js";
import PrintDecoupe from "./components/decoupe/PrintDecoupe.js";
import VoirDinde from "./components/dine/VoirDinde.js"
import UpdateDinde from "./components/dine/UpdateDinde.js"
import PrintDinde from "./components/dine/PrintDinde.js"



import ForgotPassword from "./components/forgot-password.js"

import ResetPassword from "./components/reset_password.js"


function App() {
  return (
    <div className="app">
      <Navbar />
      <BrowserRouter> 
        <Routes>

        <Route path="dine/PrintDinde" element={<PrintDinde/>} />

        <Route path="/VoirDinde" element={<VoirDinde/>} />

        <Route path="/UpdateDinde" element={<UpdateDinde/>} />

        <Route path="/reset_password/:id/:token" element={<ResetPassword/>} />



        <Route path="/ForgotPassword" element={<ForgotPassword />}/>












        <Route path="/RapportDinde" element={<RapportDinde/>} />

        <Route path="/UpdateControle" element={<UpdateControle/>} />

        <Route path="/RapportDecoupe" element={<RapportDecoupe/>} />


        <Route path="/decoupe/PrintDecoupe" element={<PrintDecoupe/>} />

        <Route path="/UpdateDecoupe" element={<UpdateDecoupe/>} />



        <Route path="/FS de dinde" element={<Dinde/>} />









        <Route path="/VoirDecoupe" element={<VoirDecoupe/>} />










        <Route path="/FS de decoupe" element={<Decoupe/>} />


        <Route path="NonPropre/PrintNonpropre" element={<PrintNonpropre/>} />


        <Route path="/UpdateNonp" element={< UpdateNonp/>} />


        <Route path="retour/PrintRetour" element={<PrintRetour/>} />

        <Route path="/UpdateCamion" element={<UpdateCamion/>} />

        <Route path="/VoirNonpropre" element={<VoirNonpropre/>} />


        <Route path="/RetourUpdate" element={<RetourUpdate/>} />

        <Route path="/camion/PrintCamion" element={<PrintCamion/>} />



        <Route path="/RapportCamion" element={<RapportCamion/>} />

        <Route path="/FS de camion" element={<Camion/>} />
        <Route path="/RapportNonp" element={< RapportNonp/>} />


        <Route path="/VoirCamion" element={<VoirCamion/>} />

        <Route path="/FS de nonpropre" element={<Nonpropre/>} />


        <Route path="/rapportRetour" element={<RapportRetour/>} />

        <Route path="/voirRetour" element={<VoirRetour/>} />

        <Route path="/Allcategorie" element={<AllCategorie />} />
        <Route path = "/Allachat" element={<Allachat/>}/>
        <Route path="/rapportTemp" element={<RapportTemp/>} />
        <Route path="/voircontrole" element={<VoirControle/>} />

        <Route path="/temp/print" element={<PrintTemp/>} />
        <Route path="/FS de retour" element={<Retour/>} />



        <Route path="/controle/printControle" element={<PrintControle/>} />

        <Route path="/rapportA" element={<RapportAbattagePage />} />
       
        <Route path="/FichExpedition" element={<AllExpedition />} />
        <Route path="/FS de temp" element={<Temp />} />
        <Route path="/FS de controle" element={<FSControle />} />

        <Route path="/rapportControle" element={<Allcontrole />} />


        <Route path="/voirTemp" element={<VoirTemp />} />


       
        
        <Route path="/voir" element={<Voir />} />
        <Route path="/abattage/print" element={<Print/>}/>
< Route path="/FS de Expedition" element={< Expedition/>}/>

   
        <Route path="/FS de Abattage" element= {< FS/>}/>
    
      < Route path="/PowerBI" element= {<PowerBIComponent /> }/>
   
< Route path="/inventair" element={<Inventaire/>} />

       <Route path="/Allvente" element={<Allvente />} />
      < Route path="/nonconforme" element = {< Nonconforme/>}/>

          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/profile"
            element={
              <RequireToken>
                <Profile />
              </RequireToken>
            }
          />
        </Routes>
      </BrowserRouter>
      <Footer /> {/* Ajoutez le composant Footer ici */}
    </div>
  );
}

export default App;
