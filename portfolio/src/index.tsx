import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './modules/App'
import Nav from './modules/Nav'
import Footer from './modules/Footer'
import reportWebVitals from './reportWebVitals'

import { BrowserRouter as Router, Route } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <Router>
      <Route path="/" component={App} />
    </Router>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
