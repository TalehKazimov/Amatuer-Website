import React from 'react'

function Headtest() {
  return (
    <div>
        <div className='header-1'>
                    <div className='contact'>
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-instagram-square"></i>
                        <i className="fa-brands fa-pinterest"></i>
                    </div>
                    <div className='logo'>
                        <NavLink to='/'>
                            Logo
                        </NavLink>
                    </div>
                    <div className='login'>
                 
                        <i className="fa-solid fa-user"></i>
                        <NavLink to='/Login'>
                            Login
                        </NavLink>
                    </div>
                </div>
                <div className='header-2'>
                    <ul>
                        <li>
                            <NavLink to='/'>
                                Ana sehife
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/blog'>
                                Blog
                            </NavLink>
                        </li>
                        <li className='resept dropdown'>
                            <NavLink to='/Resept'>
                                Resept<i className="fa-solid fa-chevron-down"></i>
                            </NavLink>
                            <ul className='open'>
                                <li className='dropdown2'>
                                    <NavLink to='/resept/yemek_resept'>
                                        Yemek resepti
                                    </NavLink>
                                    <ul className='open2'>
                                        <li>
                                            Sulu yemək reseptləri
                                        </li>
                                        <li>
                                            Quru Yemək reseptləri
                                        </li>
                                        <li>
                                            Dietik yemek reseptleri
                                        </li>
                                        <li>
                                            Salat reseptləri
                                        </li>
                                        <li>
                                            Balıq yemək reseptləri
                                        </li>
                                        <li>
                                            Şirniyyat reseptləri
                                        </li>
                                        <li>
                                            Xəmir yeməkləri
                                        </li>
                                        <li>
                                            Turşu reseptləri
                                        </li>
                                        <li>
                                            Mürəbbə reseptləri
                                        </li>
                                    </ul>
                                </li>
                                <li className='dropdown2'>
                                    <NavLink to='/resept/icki_resept'>
                                        Icki resepti
                                    </NavLink>
                                    <ul className='open2'>
                                        <li>
                                            Isti içki resepti
                                        </li>
                                        <li>
                                            Soyuq içki resepti
                                        </li>
                                        <li>
                                            Kompontlar
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <NavLink to='/Restoranlar'>
                                Restoranlar
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/idman'>
                                Idman Zallari
                            </NavLink>
                        </li>
                    </ul>
                </div>
    </div>
  )
}

export default Headtest