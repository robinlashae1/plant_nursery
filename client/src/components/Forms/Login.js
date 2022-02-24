import {React,useState} from "react";
import { Modal, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";


function Login({onLogin,username,password,setPassword,setUsername,show,handleClose}) {
  let history = useHistory();
  const [errors, setErrors] = useState([]);
  
    function handleSubmit(e) {
      e.preventDefault();
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: username, password }),
      })
        .then((r) => {
          if (r.ok){
          r.json().then((user) => onLogin(user)).then(history.push("/"));
    } else {
      r.json().then((err) => setErrors(err.errors));
    }
  });}
    console.log(errors)
    
    return(
      user?
      <></> :
      <Modal show={show} onHide={handleClose} >
        <Modal.Header className="modalHeader">
        <Modal.Title id="contained-modal-title-vcenter">
            Login
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modalBody">
      <form onSubmit={handleSubmit} className="modal-details" className="modal-content" className="modalBody">
          <label for="name">Username</label>
          <input type="text"  value={username} onChange={(e) => setUsername(e.target.value)}/> <br/>

          <label for="Description">Password</label>
          <input type="text"  value={password} onChange={(e) => setPassword(e.target.value)}/><br/>
        </form> 
      </Modal.Body>
       <Modal.Footer className="modalFooter">
      <Button type="submit" data-dismiss="modal" className="button" id="modalSubmit" form="modal-details" onClick={handleSubmit} >Submit</Button>
      <Button variant="secondary" onClick={handleClose} className="button" id="modalClose">Close</Button>
      </Modal.Footer>
    </Modal>
    )  
  }
  export default Login

