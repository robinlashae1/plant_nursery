import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Routes from './NavBar'
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import "../App.css";

function App() {
    const [user, setUser] = useState(null);

    // useEffect(() => {
    //     // auto-login
    //     fetch("/me").then((r) => {
    //     if (r.ok) {
    //         r.json().then((user) => setUser(user));
    //     }
    //     });
    // }, []);

    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
    }

    // if (!user) return <LoginPage onLogin={setUser} />;

    return (
        <div className="App container py-3">
            <Navbar collapseOnSelect bg="light" expand="md" className="mb-3" user={user} setUser={setUser}>

                <LinkContainer to="/">
                    <Navbar.Brand className="font-weight-bold text-muted">
                        ArbiterSports
                    </Navbar.Brand>
                </LinkContainer>

                <Navbar.Toggle />

                <Navbar.Collapse className="justify-content-end">
                    <Nav activeKey={window.location.pathname}>
                    {user ? (
                        <Nav.Link onClick={handleLogoutClick}>Logout</Nav.Link>
                    ) : (
                    <>
                        <LinkContainer to="/signup">
                            <Nav.Link>Signup</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/login">
                            <Nav.Link>Login</Nav.Link>
                        </LinkContainer>
                    </>
                    )}
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
            <Routes />
        </div>
    );
}

export default App;