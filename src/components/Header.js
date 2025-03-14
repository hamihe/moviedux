import React from 'react'
import '../styles.css'

export default function Header() {
    return (
    <div className='header'>
        <img className='logo' src='logo.png' alt='moviedux'/>
        <h1 className='app-subtitle'>It'a time for popcorn! Select your next movie here</h1>
    </div>
    );
}

