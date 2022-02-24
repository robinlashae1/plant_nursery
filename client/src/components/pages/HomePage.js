import {React,useState} from "react";
import LoginPage from "./LoginPage";

export default function HomePage() {
    const [loginModalShow, setLoginModalShow] = useState(false);
    const [signupModalShow, setSignupModalShow] = useState(false);
    console.log(loginModalShow)
    return (
        <div className="Home">
            <div className="lander">
                <h1>Nursery</h1>
                <p className="text-muted">Track Your Plants</p>
                <a href="/signup"><button>Sign Up</button></a>
                <button type="button" id="serviceCreateButton" className="button" onClick={()=> setLoginModalShow(true)}>Sign In</button>
                <LoginPage show={loginModalShow} handleClose={()=> setLoginModalShow(false)}/>
            </div>
        </div>
    )
}
