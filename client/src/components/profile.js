import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./salma.css";

const Profile = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const loader = document.querySelector('.loader');

    return () => {
      // Cleanup code if needed
    };
  }, []);

  const signOut = () => {
    localStorage.removeItem("Token");
    navigate("/login");
  };

  return (
    <div className="wrapper" >
      <div className="wrapperr"   style={{ paddingTop: 60 }}>
        <title>Glow Text Animation</title>
        <span style={{ marginTop: "90px", fontStyle: "italic"  }}>        jom volailles !!
        </span>
       
        <br/> <br/> <br/> <br/> <br/> <br/> <br/>  

      </div>
    </div>
  );
};

export default Profile;
