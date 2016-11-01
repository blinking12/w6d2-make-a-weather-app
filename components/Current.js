import React from 'react'
import moment from 'moment'

class Current extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        fetch('http://api.openweathermap.org/data/2.5/weather?q=indianapolis,us&units=imperial&APPID=f21c60eaf4b3735aaa9a0c7dff67b7a4')
        .then(response => response.json())
        .then((weatherFetch)=>{
            this.setState({
                location:weatherFetch.name,
                temp:Math.round(weatherFetch.main.temp),
                condition:weatherFetch.weather[0].main,
            })
            console.log(weatherFetch)
        })
    }

    render() {
        var date = moment().format('MMMM Do YYYY, h:mm:ss a');
        return <div className="container">
            <div className="row">
                <div className="col-md-6 col-md-offset-3 text text-center">
                  <h4 className="headClass">Indianapolis, IN</h4>
                  <span className="dateClass">{date}</span>
                  <h1 className="tempClass">{this.state.temp} &#x2109;</h1>
                  <h3 className="desciClass">{this.state.condition}</h3>
                </div>
            </div>
        </div>
    }
}

export default Current
