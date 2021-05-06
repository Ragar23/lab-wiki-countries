import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList';
import {Switch, Route} from "react-router-dom"
import React, { Component } from 'react'
import CountryDetails from "./components/CountryDetails"

 class App extends Component {
  render() {

    

    return (
      <div>
         <NavBar/>
        
            <div style={{display: "flex", justifyContent: "space-around"}} >
                <div>
                 <CountriesList/> 

                </div>

                <div>
                  <h2>Country Details</h2>
                  <br></br>
                  
                  <Route path="/countries/:alpha3Code" component={CountryDetails} />
                </div>

            </div>
      </div>
    )
  }
}

export default App
