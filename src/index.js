import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import MaintenanceLog from './components/MaintenanceLog'

ReactDOM.render (
  <Router>
      <MaintenanceLog />
  </Router>
  , document.getElementById('root'))