import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import loginimg from './login.png';
import {setToken} from './Auth.js'
 
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const [error, setError] = useState('')
    const navigate = useNavigate()
     
    const login = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/login", {
          email: email,
          password: password,
        })
        .then(res => {
            console.log(res);
            if(res.data.Status === 'Success') {
        console.log(res.data.Token);
        setToken(res.data.Token)
                navigate('/profile');
            } else {
                setError(res.data.Error);
            }
        })
        .catch(err => console.log(err));
    }
    
  return (
        <div className="container" style={{paddingTop: 60}}>
          <div className="container-fluid h-custom">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-9 col-lg-6 col-xl-5">
                <img src={loginimg} className="img-fluid"/>
              </div>
              <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                <form>
                
                    <h1 style={{color: 'red', fontSize: '15px', textAlign: 'center', marginTop: '20px'}}>{error && error}</h1>
                  <div className="form-outline mb-4">
                  <label className="form-label">Adresse e-mail</label>
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      placeholder="Adresse e-mail"
                      onChange={(e) => {setEmail(e.target.value)}} required
                    />
                   
                  </div>
                  <div className="form-outline mb-3">
                  <label className="form-label">Mot de Passe </label>
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      placeholder="Mot de Passe"
                      onChange={(e) => {setPassword(e.target.value)}} required
                    />
                  
                  </div>
    
                  <div className="d-flex justify-content-between align-items-center">
                   
                    <a href="ForgotPassword" className="text-body">Mot de passe oublié?</a>
                  </div>
    
                  <div className="text-center text-lg-start mt-4 pt-2">
                    <button type="button" className="btn btn-primary btn-lg" onClick={login}>Login</button>
                    <p className="small fw-bold mt-2 pt-1 mb-0">Connectez-vous à votre compte  <a href="signup" className="link-danger">inscrivez-vous</a></p>
                  </div>
    <br/>  <br/> <br/> <br/> 
                </form>
              </div>
            </div>
          </div>
        </div>
  );
};
   
export default Login;