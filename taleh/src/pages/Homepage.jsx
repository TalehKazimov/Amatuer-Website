// import Header from "../components/Header";
import { Link } from "react-router-dom";
function Homepage() {
  return (
    <div className="Homepage sec1">
      Homepage
      <div className="row">
        <div className="icki">

        </div>
        <div className="restoran">

        </div>
      </div>
      <div className="row2">
        <div className="row-card">
          <div className="icon">
            <img src="./iconhealth2.png" alt="" />
          </div>
          <div className="text">
            Sağlam həyat tərzi üçün sağlam qidalanın . Bunun üçün bizim mütəxəsislərimizlə əlaqə saxlaya bilərsiz .
          </div>
          <button>
            <Link to='/resept'>
              Ətraflı
            </Link>
          </button>
        </div>
        <div className="row-card">
          <div className="icon">
            <img src="./icongym2.png" alt="" />

          </div>
          <div className="text">
            Sağlam həyat tərzi və enerjinizi tükətə biləcəyiniz sahələrdən biridə idmandır . Gəlin idmanla öz həyatımızı daha yaxşı edək .
          </div>
          <button>
            <Link to='/idman'>
              Ətraflı
            </Link>
          </button>
        </div>
        <div className="row-card">
          <div className="icon">
            <img src="./iconblog2.png" alt="" />
            {/* <i className="fa-solid fa-user"></i> */}
          </div>
          <div className="text">
            Blog səhifəmizə daxil olaraq səhifəmizlə daha yaxından tanış ola bilərsiz .Sizə maksimum dərəcədə köməklik etməyə çalışmışıq .
          </div>
          <button>
            <Link to='/blog'>
              Ətraflı
            </Link>
          </button>
        </div>
        <div className="row-card">
          <div className="icon">
            <img src="./iconrestaurant.png" alt="" />
            {/* <i className="fa-solid fa-user"></i> */}
          </div>
          <div className="text">
            Restoranlar sehifemize goz atin .
          </div>
          <button>
            <Link to='/restoranlar'>
              Ətraflı
            </Link>
          </button>
        </div>
      </div>
      <div className="row3">
        <div className="container">
          <div className="image">
            <img src="https://preview.colorlib.com/theme/healthvest/images/xabout.jpg.pagespeed.ic.Z0jYxNwTPL.webp" alt="" />
            <div className="image-t">
              <div className="image-t-icon">
                <img src="./" alt="" />
              </div>
              <div className="image-t-text"></div>
            </div>
          </div>
          <div className="text">

          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;