import React from 'react'
import { NavLink } from 'react-router-dom'
function Ickiresept() {
  return (
    <section className='sec1'>
      <h1 className='ictext'>İçki Reseptləri</h1>
      <div className="container">
        <NavLink to='/' className='item'>
          <div className='item-image'>
            <img src="http://ikisahil.az/photo/975x540_2/upload/2021/05/28/-1f490b64162220264918202141610154183.jpg" alt="" />
            <div className='item-text'>
              İsti İçki Resepti
              <div className="outline3"></div>
            </div>
          </div>
        </NavLink>
        <NavLink to='/' className='item'>
          <div className='item-image'>
            <img src="https://turpkimi.com/files/gallery/3b520a12-73dd-47aa-b519-f3dff18bd061.jpg" alt="" />
            <div className='item-text'>
              Soyuq İçki Resepti
              <div className="outline3"></div>
            </div>
          </div>
        </NavLink>
        <NavLink to='/' className='item'>
          <div className='item-image'>
            <img src="https://sufremiz.az/wp-content/uploads/2018/08/1496407081_kom1.jpg" alt="" />
            <div className='item-text'>
              Kompont Resepti
              <div className="outline3"></div>
            </div>
          </div>
        </NavLink>
      </div>
    </section>
  )
}

export default Ickiresept