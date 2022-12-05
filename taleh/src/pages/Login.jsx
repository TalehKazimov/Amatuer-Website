import React from 'react'
import { Link } from 'react-router-dom'

function Blog() {
  return (
    <section className='logBack'>
      <div className='logBox'>
        <div className='logForm'>
          <h2>Login In</h2>
          <div className='inputlog'>
            <input type="text" required="required" />
            <span>Username</span>
            <i></i>
          </div>
         
          <div className='inputlog'>
            <input type="password" required="required" />
            <span>Password</span>
            <i></i>
          </div>
          <div className='links'>
          <Link to="/">Forget Password</Link>
          <Link to="/">Forget Password</Link>
          </div>
          <input type="button" vaLue="Login" />
        </div>
        
      </div>

    </section>
  )
}

export default Blog