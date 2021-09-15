import './App.css'
import React from "react"
import { BrowserRouter as Router } from 'react-router-dom'
import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'
import Footer from '../components/layout/Footer'

const App = props => (
    <div className="App">
        <Router>
            <Menu />
            <Content />
            <Footer />
        </Router>
    </div>
)

export default App

