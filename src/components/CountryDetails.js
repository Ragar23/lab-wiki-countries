import axios from 'axios'
import React, { Component } from 'react'

 class CountryDetails extends Component {

    state = {
        countryDetails: {}
    }

    getDataFromApi(){

        //Where I am going to store the id for the dynamic route
        let countryCode = this.props.match.params.alpha3Code
        console.log(countryCode)

        axios.get(`https://restcountries.eu/rest/v2/alpha/${countryCode}`)
        .then((response)=>{
            //I console.log to check the data inside 
            console.log(response.data)

            //I deconstruct to access the things I want to use 
            const {capital, area, borders, name} = response.data

            let details = {
                name: name,
                capital: capital,
                area: area,
                borders: borders,
                countryCode: this.props.match.params.alpha3Code
            }

            this.setState({
                countryDetails: details
            })
        })
        .catch(()=>{

        })
    }

    componentDidMount(){
        this.getDataFromApi()
        console.log("DidMount")
    }

    componentDidUpdate(){
        console.log("looping")
        console.log(this.state.countryDetails)
        console.log(this.props.match.params.alpha3Code)

        let alphaCodeURL = this.state.countryDetails.countryCode
        let alphaCode = this.props.match.params.alpha3Code

        if (alphaCodeURL !== alphaCode ){
            this.getDataFromApi()

        }
    }




    render() {

        const {countryDetails} = this.state

        return (
            <div>
                <h2> {countryDetails.name} </h2>
                <h3> Capital: {countryDetails.capital} </h3>
                <h3> Area: {countryDetails.area} </h3>
               <h3>Borders:</h3>  <ul> <li> {countryDetails.borders}</li> </ul>
                  
            </div>
        )
    }
}


export default CountryDetails
