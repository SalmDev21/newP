import { useState } from "react";
import Axios from "axios";
 
const SignUp = () => {
    
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [userType, setUserType] = useState("Autre");
    const [registerStatus, setRegisterStatus] = useState("");
 
    const register = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:3001/register", {
          email: email,
          name: name,
          password: password,
          userType: userType
          
        }).then((response) => {
          console.log(response);
          if(response.data.message){
            setRegisterStatus(response.data.message);
          }else{
            setRegisterStatus("ACCOUNT CREATED SUCCESSFULLY");
          }
        })
    }
 
  let imgs = [
    'https://as2.ftcdn.net/v2/jpg/03/39/70/91/1000_F_339709132_H9HSSTtTmayePcbARkTSB2qoZTubJ6bR.jpg',
  ];
  return (
        <div className="container" style={{paddingTop: 60}}>
          <div className="container-fluid h-custom">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                <form style={{ marginTop: '-40px'}}>
                 
                  <p><h1 style={{fontSize: '15px', textAlign: 'center', marginTop: '20px'}}>{registerStatus}</h1></p>
                  <div className="form-outline mb-4">
                  <label className="form-label">Nom</label>
                    <input
                        type="text"
                        value={name}
                       
                        className="form-control form-control-lg"
                        placeholder="Entrez le nom"
                        onChange={(e) => {setName(e.target.value)}} required
                    />
                   
                  </div>
                  <div className="form-outline mb-4">
                  <label className="form-label">Email address</label>
                    <input
                      type="email"
                      value={email}
                      className="form-control form-control-lg"
                      onChange={(e) => {setEmail(e.target.value)}}
                       placeholder="Entrez votre e-mail" required
                    />
                  
                  </div>
                  <div className="form-outline mb-3">
                  <label className="form-label">Mot de Passe</label>
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      onChange={(e) => {setPassword(e.target.value)}} 
                      value={password}
                      placeholder="Entrez votre mot de passe" required
                    />
                   
                  </div>

                  <div className="form-outline mb-3">
                   <label for="userType">Type de Poste </label>

                  <select name="userType" id="userType"
                      onChange={(e) => {setUserType(e.target.value)}} 
                      value={userType}>
                    <option value="Gestinnaire">Gestinnaire</option>
                    <option value="Qaliticien">Qaliticien</option>
                    <option value="Responable">Responable Qualite</option>
                    <option value="Autre">Autre</option>
                  </select>
    </div>
                  
    
                  <div className="text-center text-lg-start mt-4 pt-2">
                    <button type="button" className="btn btn-primary btn-lg" onClick={register}>inscription</button>
                    <p className="small fw-bold mt-2 pt-1 mb-0">Connectez-vous à votre compte  <a href="/" className="link-danger">Login</a></p>
                  </div>
              
                </form>
              </div>
              <div className="col-md-9 col-lg-6 col-xl-5">
                <img src={imgs[0]} className="img-fluid"/>
              </div>
            </div>
          </div>
        </div>
  );
};
   
export default SignUp;