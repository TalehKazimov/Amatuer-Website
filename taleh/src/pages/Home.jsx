import React from "react";
// import { useOutlet } from 'react-router-dom'
// import image1 from './images/home.jpg'
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
function Home() {
  return (
    <div>
      <section className="hero-wrap">
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text align-items-center">
            <div className="col-lg-6">
              <span className="subheading">
                Qidada və sağlamlıqda düzgün balansın tapılması
              </span>
              <h1 className="mb-4">
                Diqqətle Ye, <br />
                Tez-Tez Tərlə &amp; Həmişə Özünü Sev
              </h1>
              <p>
                <Link to="/contact" className="btn btn-primary p-4 py-3">
                  Bizimlə Əlaqə
                  <span className="ion-ios-arrow-round-forward"></span>
                </Link>
                <Link to="/haqqinda" className="btn btn-white p-4 py-3">
                  Haqqimizda{" "}
                  <span className="ion-ios-arrow-round-forward"></span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-services">
        <div className="container services-wrap">
          <div className="row">
            <div className="col-md-12">
              <div className="row g-lg-1">
                <div className="col-md d-flex align-items-stretch">
                  <div className="services text-center">
                    <div className="icon">
                      <span className="flaticon-plan"></span>
                    </div>
                    <div className="text">
                      <h2>Düzgün Qidalanma</h2>
                      <p>
                        Sağlam və düzgün ömür sürmək üçün düzgün qidalanma
                        vacibdir bunun üçün dayanma səndə bizə qoşul
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md d-flex align-items-stretch">
                  <div className="services text-center">
                    <div className="icon">
                      <span className="flaticon-dumbbell"></span>
                    </div>
                    <div className="text">
                      <h2>Planlı Yaşam</h2>
                      <p>
                        Həyat tərzimi tam planlı şəkildə etsək daha gümrah
                        olarıq bu da bizim üçün önəmli resusdur bunun üçün
                        dayanma səndə bizə qoşul
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md d-flex align-items-stretch">
                  <div className="services text-center">
                    <div className="icon">
                      <span className="flaticon-team-support"></span>
                    </div>
                    <div className="text">
                      <h2>Dəstək Motivasiyası</h2>
                      <p>
                        Biz və kamandamız sizlərə həm motivasiya həm də dəstək
                        verməyə tam hazırıq yetərki əsas siz bunu istəyin{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md d-flex align-items-stretch">
                  <div className="services text-center">
                    <div className="icon">
                      <span className="flaticon-advice"></span>
                    </div>
                    <div className="text">
                      <h2>Bizimlə Daimi Əlaqə</h2>
                      <p>
                        Biz müştərilərimizlə daim əlaqədə oluruq bundan həm biz
                        həmdə müştərilətimiz məmnundur
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md d-flex align-items-stretch">
                  <div className="services text-center">
                    <div className="icon">
                      <span className="flaticon-guarantee"></span>
                    </div>
                    <div className="text">
                      <h2>Sertifikatlı Şirkət</h2>
                      <p>
                        Şirkətimiz həm ölkə daxili həm də globalda uğur qazanmış
                        şirkətlərdən biridir bunun üçün dayanma səndə bizə qoşul
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section ftco-about-section">
        <div className="container-xl">
          <div className="row g-xl-5">
            <div className="col-md-6 d-flex align-items-stretch">
              <div className="img w-100 section-counter">
                <div className="counter-wrap d-flex">
                  <div className="icon">
                    <span className="flaticon-diet"></span>
                  </div>
                  <div className="text ps-3">
                    <span className="number">
                      <span className="countup">24</span>
                    </span>
                    <span className="caption">İllərin üstün təcrübəsi</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 heading-section d-flex align-items-center">
              <div className="mt-5 mt-md-0">
                <span className="subheading">Haqqımızda</span>
                <h2 className="mb-2">Yaxşı Ye ,Yaxşı Yaşa</h2>
                <h3 className="mb-4">
                  Daha Yaxşı Qidalansanız, Sağlam Yaşdan Həzz ala bilərsiniz
                </h3>
                <p className="mb-4">
                  Beynəlxalq insan hüquqları sənədlərinə görə, səhiyyə
                  xidmətləri və imkanları hər kəs üçün ayrı- seçkiliyə yol
                  verilmədən mövcud, əlçatan, uyğun və keyfiyyətli olmalıdır.
                </p>
                <h4>Biz sizə necə kömək edə bilərik</h4>
                <div className="d-md-flex">
                  <ul>
                    <li>
                      <span className="ion-ios-checkmark-circle"></span>Aşağı
                      Enerji
                    </li>
                    <li>
                      <span className="ion-ios-checkmark-circle"></span>Stress
                      &amp; Narahatlıq
                    </li>
                    <li>
                      <span className="ion-ios-checkmark-circle"></span>Zəif
                      yemək vərdişləri
                    </li>
                    <li>
                      <span className="ion-ios-checkmark-circle"></span>Həzm
                      problemləri
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <span className="ion-ios-checkmark-circle"></span>
                      Balanslanmış Bədən & Zehin
                    </li>
                    <li>
                      <span className="ion-ios-checkmark-circle"></span>
                      Məsləhətlər
                    </li>
                    <li>
                      <span className="ion-ios-checkmark-circle"></span>
                      Reytqinli Zallar
                    </li>
                    <li>
                      <span className="ion-ios-checkmark-circle"></span>Protein
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section class="ftco-section ftco-services-section ftco-no-pt">
        <div class="container-xl">
          <div class="row justify-content-center">
            <div
              class="col-md-8 heading-section text-center mb-5"
            //   data-aos="fade-up"
            //   data-aos-duration="1000"
            >
              <span class="subheading">What We Do</span>
              <h2 class="mb-4">Services</h2>
            </div>
          </div>
          <div class="row">
            <div
            //   class="col-md-12"
            //   data-aos="fade-up"
            //   data-aos-duration="1000"
            //   data-aos-delay="100"
            >
              <div class="carousel-services">
                <div class="item">
                  <div class="services">
                    <div
                      class="img"
                      style={{backgroundImage:`url('/images/services-1.jpg)`}}
                    //   style="background-image: url(images/services-1.jpg);"
                    ></div>
                    <div class="text">
                      <h2>Weight Loss Program</h2>
                      <p class="mb-4">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind.
                      </p>
                      <p>
                        <Link to="/" class="btn-custom">
                          Learn More
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="services">
                    <div
                      class="img"
                      style={{backgroundImage:`url('/images/services-2.jpg)`}}
                    //   style="background-image: url(images/services-2.jpg);"
                    ></div>
                    <div class="text">
                      <h2>Sports Nutritionists</h2>
                      <p class="mb-4">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind.
                      </p>
                      <p>
                        <Link to='/' href="#" class="btn-custom">
                          Learn More
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="services">
                    <div
                      class="img"
                      style={{backgroundImage:`url('/images/services-3.jpg)`}}
                    //   style="background-image: url(images/services-3.jpg);"
                    ></div>
                    <div class="text">
                      <h2>Personalized Nutrition</h2>
                      <p class="mb-4">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind.
                      </p>
                      <p>
                        <Link to='/' class="btn-custom">
                          Learn More
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="services">
                    <div
                      class="img"
                      style={{backgroundImage:`url('/images/services-4.jpg)`}}
                    //   style="background-image: url(images/services-4.jpg);"
                    ></div>
                    <div class="text">
                      <h2>Inidividual Coaching</h2>
                      <p class="mb-4">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind.
                      </p>
                      <p>
                        <Link to='/' class="btn-custom">
                          Learn More
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="services">
                    <div
                      class="img"
                      style={{backgroundImage:`url('/images/services-5.jpg)`}}
                    //   style="background-image: url(images/services-5.jpg);"
                    ></div>
                    <div class="text">
                      <h2>Child Nutrition</h2>
                      <p class="mb-4">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind.
                      </p>
                      <p>
                      <Link to='/' class="btn-custom">
                          Learn More
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="services">
                    <div
                      class="img"
                      style={{backgroundImage:`url('/images/services-6.jpg)`}}
                    ></div>
                    <div class="text">
                      <h2>Workout Routines</h2>
                      <p class="mb-4">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind.
                      </p>
                      <p>
                      <Link to='/' class="btn-custom">
                          Learn More
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section
        className="ftco-intro img"
        // style="background-image:url(images/xbg_6.jpg.pagespeed.ic.Trac42N0R9.jpg)"
      >
        <div className="overlay"></div>
        <div className="container-xl">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              <div className="row">
                <div className="col-md-8 d-flex align-items-center">
                  <div>
                    <span className="subheading">
                      QIDADA VƏ SAĞLAMLIQDA DÜZGÜN BALANSIN TAPILMASI
                    </span>
                    <h1 className="mb-md-0 mb-4">
                      Sağlamlıq və Təlimat Məşqçisi alın
                    </h1>
                  </div>
                </div>
                <div className="col-md-4 d-flex align-items-center">
                  <p className="mb-0">
                    <a
                      href="#"
                      className="btn btn-primary py-md-4 py-3 px-md-5 px-4"
                    >
                      İndicə Təyin Etmək
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="img vid-section"
        // style="background-image:url(images/xbg_5.jpg.pagespeed.ic.KKNUhG9JdG.jpg)"
      >
        <div className="overlay"></div>
        <div className="container-xl">
          <div className="row justify-content-center">
            <div className="col-md-12 vid-height d-flex align-items-center justify-content-center text-center">
              <div className="video-wrap">
                {/* <a href="https://vimeo.com/115041822"
                                    className="video-icon glightbox d-flex align-items-center justify-content-center mb-4">
                                    <span className="ion-ios-play"></span>
                                </a> */}
                <span className="subheading">
                  QIDADA VƏ SAĞLAMLIQDA DÜZGÜN BALANSIN TAPILMASI
                </span>
                <h3>Bədəninizi Sağlam Qidalanma ilə Dəyişməyə Başlayın</h3>
                <p>
                  <a href="#" className="btn btn-primary py-3 px-4">
                    Başlayın
                  </a>{" "}
                  <a href="#" className="btn btn-white py-3 px-4">
                    Bizimlə Əlaqə
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
