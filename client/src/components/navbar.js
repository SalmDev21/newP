import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';


import '../index.css';
export default function App() {
  const [openBasic, setOpenBasic] = useState(false);
  const isSignUpPage = window.location.pathname === '/signup'; // Vérifiez s'il s'agit de la page d'inscription
  const isFirstPage = window.location.pathname === '/'; // Vérifiez s'il s'agit de la première page

  return (
    <MDBNavbar className='navbar navbar-expand-lg navbar-light custom-navbar' expand='lg' style={{ backgroundColor: 'rgb(7, 43, 105)', color: 'white' }}>
      <MDBContainer fluid style={{ padding: '10px' }}> 
       
      
        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenBasic(!openBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>



        <MDBCollapse navbar open={openBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            {!isSignUpPage && !isFirstPage && (// masquer menu lors de registre et login 
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href="/PowerBI" style={{ color: 'white', marginRight: '38px' }}>Tableau de bord </MDBNavbarLink>
              </MDBNavbarItem>
            )}

            {!isSignUpPage && !isFirstPage && (
              <MDBNavbarItem>
                <MDBDropdown>
                  <MDBDropdownToggle tag='a' className='nav-link' role='button' style={{ color: 'white', marginRight: '38px' }}>
                    Gestion de Stock                       
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem link href="/AllCategorie">Entrées</MDBDropdownItem>
                    <MDBDropdownItem link href="/Allvente">Sorties</MDBDropdownItem>
                    <MDBDropdownItem link href="/Allachat">l'inventaire</MDBDropdownItem>
                    <MDBDropdownItem link href="/inventair">Imprimer L'inventaire </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem>
            )}








            {!isSignUpPage && !isFirstPage && (
             
           

             <MDBNavbarItem>
             <MDBDropdown>
               <MDBDropdownToggle tag='a' className='nav-link' role='button' style={{ color: 'white', marginRight: '38px' }}>
                 Fiches de Suivi                  
               </MDBDropdownToggle>
               <MDBDropdownMenu className="dropdown-menu-right">
                 {/* Sous-menu "Fiches" */}
               
                 <MDBDropdown >
                   <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                     Fiches
                   </MDBDropdownToggle>
                   <MDBDropdownMenu className="dropdown-menu-right">
                     <MDBDropdownItem link href="/FS de Expedition">Fiche de Suivi de Expédition</MDBDropdownItem>
                     <MDBDropdownItem link href="/FS de retour">Fich Retour De Livraison</MDBDropdownItem>
                     <MDBDropdownItem link href="/FS de temp">Fiche de suivi de Température </MDBDropdownItem>
                     <MDBDropdownItem link href="/FS de camion">Check list du camion</MDBDropdownItem>
                    <MDBDropdownItem link href="/FS de nonpropre">Fiche de suivi N-D zone non-propre</MDBDropdownItem>
                    <MDBDropdownItem link href="/FS de controle">Fiche de Suivi a la Réception de Volailles  </MDBDropdownItem>
                   </MDBDropdownMenu>
                 </MDBDropdown>


                 <MDBDropdown>
                   <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                     Rapports
                   </MDBDropdownToggle>
                   <MDBDropdownMenu>
                     <MDBDropdownItem link href="/FS de Abattage">Rapport abattage</MDBDropdownItem>
                     <MDBDropdownItem link href="/FS de dinde">Rapport Découpe Dinde </MDBDropdownItem>
                     <MDBDropdownItem link href="/FS de decoupe">Rapport Decoupe Poulet Frais</MDBDropdownItem>
                   </MDBDropdownMenu>
                 </MDBDropdown>
               </MDBDropdownMenu>
             </MDBDropdown>
           </MDBNavbarItem>


)}
















            {!isSignUpPage && !isFirstPage && (
              <MDBNavbarItem>
                <MDBNavbarLink href="/nonConforme" style={{ color: 'white', marginRight: '38px' }}>Non Conformité</MDBNavbarLink>
              </MDBNavbarItem>
            )}
          </MDBNavbarNav>

          {!isSignUpPage && !isFirstPage && (
            <div className='d-flex input-group w-auto'>
              <a className="btn btn-outline-primary" href="signup" style={{ color: 'red' }}>
                Sign Up
              </a>
            </div>
          )}
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
