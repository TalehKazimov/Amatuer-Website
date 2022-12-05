import React from 'react'
import { NavLink } from 'react-router-dom'
function Yemekresept() {
    return (
        <section className='sec1'>
            <h1 className='fdtext'>Yemek reseptleri - Dadlı yemek reseptleri, yemek reseptleri 2022</h1>
            <div className="container">
                <NavLink to='/' className='item'>
                    <div className='item-image'>
                        <img src="https://sufremiz.az/wp-content/uploads/2018/08/RFO-1400x919-cdb61265-c5a8-4297-b243-e335ad51d3d8-0-1400x919.jpg" alt="" />
                        <div className='item-text'>
                            Sulu Yemək Resepti
                            <div className="outline3"></div>
                        </div>
                    </div>
                </NavLink>
                <NavLink to='/' className='item'>
                    <div className='item-image'>
                        <img src="https://sufremiz.az/wp-content/uploads/2018/08/baconheader.jpg" alt="" />
                        <div className='item-text'>
                            Quru Yemək Resepti
                            <div className="outline3"></div>
                        </div>
                    </div>
                </NavLink>
                <NavLink to='/' className='item'>
                    <div className='item-image'>
                        <img src="https://sufremiz.az/wp-content/uploads/2015/07/AdobeStock_120593843.jpg" alt="" />
                        <div className='item-text'>
                            Dietik Yemək Resepti
                            <div className="outline3"></div>
                        </div>
                    </div>
                </NavLink>
                <NavLink to='/' className='item'>
                    <div className='item-image'>
                        <img src="https://sufremiz.az/wp-content/uploads/2018/08/salata.jpg" alt="" />
                        <div className='item-text'>
                            Salat Resepti
                            <div className="outline3"></div>
                        </div>
                    </div>
                </NavLink>
                <NavLink to='/' className='item'>
                    <div className='item-image'>
                        <img src="https://sufremiz.az/wp-content/uploads/2018/08/374142.jpg" alt="" />
                        <div className='item-text'>
                            Balıq Yemək Resepti
                            <div className="outline3"></div>
                        </div>
                    </div>
                </NavLink>
                <NavLink to='/' className='item'>
                    <div className='item-image'>
                        <img src="https://sufremiz.az/wp-content/uploads/2018/08/a9ad7df06a334b17818160d4b8c0e2e6.jpg" alt="" />
                        <div className='item-text'>
                            Şirniyyat Resepti
                            <div className="outline3"></div>
                        </div>
                    </div>
                </NavLink>
                <NavLink to='/' className='item'>
                    <div className='item-image'>
                        <img src="https://sufremiz.az/wp-content/uploads/2018/08/1416343638666.jpeg " alt="" />
                        <div className='item-text'>
                            Xəmir Yemək Resepti
                            <div className="outline3"></div>
                        </div>
                    </div>
                </NavLink>
                <NavLink to='/' className='item'>
                    <div className='item-image'>
                        <img src="https://sufremiz.az/wp-content/uploads/2018/08/kislik_tursu_kurmanin_puf_noktalari_1505207771_4256.jpg" alt="" />
                        <div className='item-text'>
                            Turşu Resepti
                            <div className="outline3"></div>
                        </div>
                    </div>
                </NavLink>
                <NavLink to='/' className='item'>
                    <div className='item-image'>
                        <img src="https://sufremiz.az/wp-content/uploads/2018/08/sufrem.az-91595.png" alt="" />
                        <div className='item-text'>
                            Mürəbbə Resepti
                            <div className="outline3"></div>
                        </div>
                    </div>
                </NavLink>
            </div>
        </section > 
    )
}

export default Yemekresept