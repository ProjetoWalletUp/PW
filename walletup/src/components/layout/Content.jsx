import './Content.css'
import React from "react"
import { Switch , Route } from 'react-router-dom'
import Home from '../../views/contents/Home'
import Sobre from '../../views/contents/Sobre'
import NaoEncontrado from '../../views/contents//NaoEncontrado'
import Login from '../../views/contents/Login'

const Content = props => (
    <main className="Content">
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/Sobre">
                <Sobre />
            </Route>
            <Route path="*">
                <NaoEncontrado />
            </Route>
        </Switch>
    </main>
)
export default Content	
