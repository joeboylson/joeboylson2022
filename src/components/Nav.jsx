import React, { useState, useEffect } from 'react'

// styles
import '../styles/components.scss';

// utils
import Cursor from '../utils/Cursor';
import { capitalize } from '../utils/common';

const Nav = ({hashes}) => {
    
    return (
        <nav>
            { hashes.map( (hash, index) => {
                return <a 
                    href={`#${hash}`}
                    key={index}
                    { ...Cursor.applyBehavior(`go to ${ capitalize(hash) }`) }
                > {hash.toUpperCase()} </a>
            })}
        </nav>
    )
}
export default Nav