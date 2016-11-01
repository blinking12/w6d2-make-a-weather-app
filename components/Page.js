import React from 'react'
import { sharedState, attachSharedState, detachSharedState } from 'react-helpers/dist/sharedState'
import moment from 'moment'

class Page extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        // this.state = sharedState()
    }

    componentDidMount() {
        // attachSharedState(this)
        fetch('http://api.openweathermap.org/data/2.5/weather?q=Indianapolis' + '&units=imerpial&APPID=858ce613aaa85a96c44c3c0950af21cc')
        .then(response => response.json())
        .then((weatherFetch)=>{
            this.setState({
                temp:weatherFetch.main.temp,
                condition:weatherFetch.weather[0].main,
            })
            console.log(weatherFetch)
        })
    }

   componentWillUnmount() {
        detachSharedState(this)
    }






    render() {
        var date = moment().format('MMMM Do YYYY, h:mm:ss a');
        return <div>
            {/* <h1>Page View</h1>
            <p>{this.state.pageText}</p> */}
            {/* {date} */}
            <div className="container">
            <div className="row">
              <div className=".col-md-6 .col-md-offset-3 text text-center">

                  <h4>Indianapolis, IN</h4>
                  {date}
                  <h1>{this.state.temp}</h1>
                  <h3>{this.state.condition}</h3>

              </div>

        </div>
        </div>
        </div>
    }
}

export default Page
