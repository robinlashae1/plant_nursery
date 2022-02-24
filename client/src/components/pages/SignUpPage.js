import React,  { useState } from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert"
import { useHistory } from "react-router-dom";


function SignUpPage({ onLogin }) {
  let history = useHistory();
  const [name, setName]=useState("");
  const [email,setEmail]=useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

function validateForm() {
  return username.length > 0 && password.length > 0 && (password===passwordConfirmation);
}

function handleSubmit(e) {
e.preventDefault();
setErrors([]);
setIsLoading(true);
fetch("/signup", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: name,
    email: email,
    username: username,
    password: password,
    password_confirmation: passwordConfirmation,
    
  }),
}).then((r) => {
  setIsLoading(false);
  if (r.ok) {
    r.json().then((user) => onLogin(user)).then(history.push("/"));
  } else {
    r.json().then((err) => setErrors(err.errors));
  }
});
}

return (
  <div className="Signup">
  <Form onSubmit={handleSubmit}>
  <Form.Group size="lg" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
              autoFocus
              autoComplete="off"
              type="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
          />
          </Form.Group>
          <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
              autoFocus
              autoComplete="off"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
          />
          </Form.Group>
    <Form.Group size="lg" controlId="username">
    <Form.Label>Username</Form.Label>
    <Form.Control
        autoFocus
        autoComplete="off"
        type="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
    />
    </Form.Group>
    <Form.Group size="lg" controlId="password">
    <Form.Label>Password</Form.Label>
    <Form.Control
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
    />
    </Form.Group>
    <Form.Group size="lg" controlId="password_confirmation">
    <Form.Label>Password Confirmation</Form.Label>
    <Form.Control
        type="password"
        value={passwordConfirmation}
        onChange={(e) => setPasswordConfirmation(e.target.value)}
    />
    </Form.Group>
    <Button block size="lg" type="submit" disabled={!validateForm()}>
        {isLoading ? "Loading..." : "Signup"}
    </Button>
    {/* <Form.Group>
      
    </Form.Group> */}
  </Form>
  </div>
);
}

export default SignUpPage;
