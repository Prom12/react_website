import React from 'react'
import './Header.css'

function Header({title,description}) {
    return (
        <div>
            <div className='header'>
                <h2 className='title'>{title}</h2>
                <p className='description'><i>{description}</i></p>
            </div>

        </div>
    )
}

export default Header
