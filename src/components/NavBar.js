import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from "react-router-dom"


 class NavBar extends Component {
    render() {
        return (
            <div className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <nav> <Link to={"/"} >  WikiCountries </Link></nav>
                </div>
            </div>
        )
    }
}

export default NavBar