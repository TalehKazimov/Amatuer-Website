import React from 'react'
import { NavLink } from "react-router-dom"

function HeaderTop() {
  return (
    <div className='HeaderTop'>
        <div className='Logo'>
                    <NavLink to='/'>
                        Logo
                    </NavLink>
                </div>
    </div>
  )
}

export default HeaderTop