import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';


 class NavBar extends Component {
    render() {
        return (
            <div className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <nav>WikiCountries</nav>
                </div>
            </div>
        )
    }
}

export default NavBar