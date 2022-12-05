import { NavLink } from "react-router-dom";
function Header() {
  return (
    <div className="ehead">
      <header>
        <nav className="navbar navbar-expand-lg  ftco-navbar-light">
          <div className="container-xl">
            <NavLink to="/" className="navbar-brand align-items-center">
              Saglam<span>Heyat</span>
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="fa fa-bars"></span> Menu
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link active">
                    Əsas Səhifə
                  </NavLink>
                </li>
                <li className="nav-item resept dropdown">
                  <NavLink to="/Resept" className="nav-link">
                    Resept<i className="fa-solid fa-chevron-down"></i>
                  </NavLink>
                  <ul className="open">
                    <li className="dropdown2">
                      <NavLink to="/resept/yemek_resept">Yemek resepti</NavLink>
                      <ul className="open2">
                        <li>Sulu yemək reseptləri</li>
                        <li>Quru Yemək reseptləri</li>
                        <li>Dietik yemek reseptleri</li>
                        <li>Salat reseptləri</li>
                        <li>Balıq yemək reseptləri</li>
                        <li>Şirniyyat reseptləri</li>
                        <li>Xəmir yeməkləri</li>
                        <li>Turşu reseptləri</li>
                        <li>Mürəbbə reseptləri</li>
                      </ul>
                    </li>
                    <li className="dropdown2">
                      <NavLink to="/resept/icki_resept">Icki resepti</NavLink>
                      <ul className="open2">
                        <li>Isti içki resepti</li>
                        <li>Soyuq içki resepti</li>
                        <li>Kompontlar</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <NavLink to="/haqqinda" className="nav-link">
                    Haqqında
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/contact" className="nav-link">
                    Bizimlə Əlaqə
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/blog" className="nav-link">
                    Blog
                  </NavLink>
                </li>
                <li className="nav-item like">
                  <NavLink to="/" className="nav-link">
                    <i className="fa-solid fa-heart-circle-plus"></i>
                  </NavLink>
                </li>
              </ul>
            </div>
            <NavLink to="/login" className="login">
              Daxil ol
            </NavLink>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
