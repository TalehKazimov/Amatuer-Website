import React from "react";
import { Link } from "react-router-dom";
function Contact() {
  return (
    <div>
      Bzik
      <section>
        <div className="page-header">
          <div className="container">
            <h2>Bizimlə əlaqə</h2>
            <div>
              <Link to="/">Ana səhifə</Link>
              <i className="fa-solid fa-chevron-right"></i>
              <Link to="/contact" className="btn-active">
                Bizimlə Əlaqə
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section
        className="ftco-appointment ftco-section img"
        // style="background-image:url(images/xbg_3.jpg.pagespeed.ic.ZZXKCv4i7h.jpg)"
      >
        <div className="overlay"></div>
        <div className="container-xl">
          <div className="row g-lg-5">
            <div className="col-md-6 d-flex align-items-center order-lg-last pl-lg-5">
              <div className="heading-section heading-section-white">
                <span className="subheading">Biz Kimik</span>
                <h2 className="mb-3">Biz Ən Yaxşı Trainerik</h2>
                <p>
                  Saytımızda hər gün olan yeniliklərdən xəbərdar olmaq üçün
                  formdan rahat qeydiyyatdan keçə bilərsiz
                </p>
                <div className="row mt-md-5">
                  <div className="col-lg-12">
                    <div className="services-3 d-flex w-100">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="flaticon-plan"></span>
                      </div>
                      <div className="text ps-4">
                        <h2>Tam Xidmətlər</h2>
                        <p>
                          Düzgün qidalanma.Düzgün qidalanmalanın esas şərtlərindən biridə mentor köməyi ilə qidalanmaqdır. Və biz sizə ən yaxşı və
                          sağlam qidalanma dərslərini izah edə bilərik
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="services-3 d-flex w-100">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="flaticon-dairy-products"></span>
                      </div>
                      <div className="text ps-4">
                        <h2>Yaxşı Məhsullar</h2>
                        <p>
                          Yaxşı məhsullar bölməmizdə səhətiniz və fit qalmaq üçün ən yaxşı məhsulları
                          rahatlıqla görüb incələyə bilərsiz. Sağlam qalmaq ilk növbədə sağlam qidadan başlayır
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="services-3 d-flex w-100">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="flaticon-diet-1"></span>
                      </div>
                      <div className="text ps-4">
                        <h2>Təbii və Sağlam Qidalar</h2>
                        <p>
                          Təbii və sağlam qidalar dedikdə bəzi insanlar bunu tamamiilə səhv anlayır. Gündəlik və rutinli olaraq yemək və qidalanmaq vacibdir
                          . Biz bunun üçün varıq və fəaliyyətdəyik
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <form action="#" className="appointment">
                <span className="subheading">MESAJ ATIN</span>
                <h2 className="mb-4 appointment-head">
                  Xüsusiyyətlərinizi yazın
                </h2>
                <div className="row">
                  <div className="col-md-12 col-lg-6">
                    <div className="form-group">
                      <label htmlFor="name">Sizin Tam Adınız</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Sizin Tam Adınız"
                      />
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-6">
                    <div className="form-group">
                      <label htmlFor="email">Email Adresiniz</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="subject">Mövzu Seçin</label>
                      <div className="form-field">
                        <div className="select-wrap">
                          <div className="icon">
                            <span className="fa fa-chevron-down"></span>
                          </div>
                          <select name="" id="" className="form-control">
                            <option value="">Çəki Azaltma Programı</option>
                            <option value="">Fərdi Məşq</option>
                            <option value="">Məşq Rutinləri</option>
                            <option value="">
                              İdman Qidalanma Mütəxəssisləri
                            </option>
                            <option value="">Uşaq Qidalanması</option>
                            <option value="">Şəxsi Qidalanma</option>
                            <option value="">Başqaları</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="name">İsmarıcınız</label>
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="7"
                        className="form-control"
                        placeholder="İsmarıc"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <input
                      type="submit"
                      value="Send message"
                      className="btn btn-primary py-3 px-4 rounded"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.178979858596!2d49.82203171533105!3d40.382725679369045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307da6f327d463%3A0xbe68553e791e5e84!2sCoders%20Azerbaijan!5e0!3m2!1sen!2s!4v1667995730297!5m2!1sen!2s"
          width={1520}
          height={700}
          // style="border:0;"
          // allowfullscreen=""
          // loading="lazy"
          // referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
}

export default Contact;
