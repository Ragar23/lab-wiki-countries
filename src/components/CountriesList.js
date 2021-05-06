import React, { Component } from 'react'
import axios from "axios"
import { Link, Route } from 'react-router-dom'
import CountryDetails from './CountryDetails'

class CountriesList extends Component {

    state = {
        countries: []
    }

    componentDidMount(){
        axios.get("https://restcountries.eu/rest/v2/all")
            .then((response)=>{

                console.log(response.data)

                this.setState({
                    countries: response.data
                })

            })

            .catch(()=>{

            })
    }

    render() {

        const {countries} = this.state

        if (!countries.length){
            return <h1>Loading...</h1>
        }

       
        return (
          
                <div>
                    <h1>COUNTRIES LIST</h1>
                    
                        {
                        
                            countries.map((singleCountry, index)=>{
                                return  <div key={index}> <Link to={`/countries/${singleCountry.alpha3Code}`} > {singleCountry.name}  </Link>  </div>
                            })
                        
                        }
                   


                </div>
               
                

           
        )
    }
}

export default CountriesList