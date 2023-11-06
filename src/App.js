import React from 'react'
import NavBar from './components/NavBar'
import Main from './components/Main'
import './style.css'

export default function App(){
    return (
        <React.Fragment>
            <NavBar/>
            <Main/>
        </React.Fragment>
    )
}

