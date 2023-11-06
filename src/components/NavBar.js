// img, meme generator, react course - project 3
import React from 'react'
import meme_icon from '../images/meme icon.png'

export default function NavBar(){
    return (
        <nav className='nav'>
            <div className='nav-title'>
                <img src={meme_icon} className='nav-title-img' />
                <h1 className='nav-title-text'>Meme Generator</h1>
            </div>
            <div className='nav-subtitle'>
                React App
            </div>
        </nav>
    )
}

