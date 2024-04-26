import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function App() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);

  const navigate = useNavigate();

  const sendMail = () => {
    axios.post("http://localhost:4000/mail/send-email", {
      email,
      subject,
      message,
    })
    .then(() => {
        alert("Email sent successfully");
    })
    .catch((error) => {
      console.error("Failed to send email:", error);
    });
  };

  return (
    <div className="add">
      <div className="content">
        <input
          type="text"
          placeholder="Adresse e-mail du destinataire"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
         <input
        type='text'
        placeholder="Sujet"
        onChange={(e) => setSubject(e.target.value)}
      />

        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow" 
            value={message}
            onChange={setMessage}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <input
            style={{ display: "none" }}
            type="file"
            id="file"
            name=""
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label className="file" htmlFor="file">
            Upload Image
          </label>
         
        </div>
        <div className="buttons">
            <button onClick={sendMail}>Envoyer l'e-mail</button>
          </div>
      </div>
    </div>
  );
}

export default App;
