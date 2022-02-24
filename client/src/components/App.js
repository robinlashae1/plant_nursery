import React, { useEffect, useState } from "react";
import NavBar from "./bars/NavBar"
import HomePage from "./pages/HomePage";
import OtherPlants from "./pages/OtherPlants";
import Nursery from "./pages/Nursery";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage"
import Rescue from "./pages/Rescue";
import About from "./pages/About";
import { Route, Switch, BrowserRouter} from "react-router-dom";
import "../App.css";

function App() {
    const [user, setUser] = useState(null);
    const [plantsData,setPlantData]=useState([])


   useEffect(() => {
    fetch("/plant_types")
    .then((r) => r.json())
    .then((plants) => setPlantData(plants))
  }, []);

    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
    }
    useEffect(() => {
        fetch("/me").then((r) => {
        if (r.ok) {
            r.json()
            .then((user) => setUser(user));}
        });
    }, []);

    useEffect(() => {
        fetch("/plant_types").then((r) => {
        if (r.ok) {
            r.json().then((plants) => setPlantData(plants));
        }
        });
    }, []);
console.log(plantsData)
          return (
        <div className='App'>
      <BrowserRouter>
      <Switch>
          <Route exact path="/" >
            <HomePage />
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/nursery" >
            <Nursery />
          </Route>
          <Route exact path="/rescue">
            <Rescue/>
          </Route>
          <Route exact path="/all_Plants">
            <OtherPlants plants={plantsData} />
          </Route>
          <Route exact path="/signup">
            <SignUpPage onLogin={setUser}/>
          </Route>
          <Route exact path="/login">
            <LoginPage onLogin={setUser}/>
          </Route>
      </Switch>
      </BrowserRouter>
    </div>
  )}
// }

export default App;