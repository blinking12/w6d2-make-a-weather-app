import React from 'react'
import ReactDOM from 'react-dom'
import moment from 'moment'
import { Router, Route, Link, browserHistory } from 'react-router'

import Current from '../components/Current'

ReactDOM.render(

    <Router history={browserHistory}>
        <Route path="/" component={Current} />
    </Router>

    , document.getElementById('tempData')
)

// 858ce613aaa85a96c44c3c0950af21cc
