import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { connect, Connect } from "react-redux";
import { useEffect } from "react";
const a = (b) => b;
export default connect(a)(function Resept(props) {
  // const [count, setCount] = useState(0);
  // const liked = () => {
  //   setCount(count + 1);
  // };
  console.log(props.basket);
  const [filterType, setFilterType] = useState([]);
  const addLike = (e) => {
    e.preventDefault();
    if (e.target.classList.contains("fa-light")) {
      e.target.classList.add("fa-solid");
      e.target.classList.remove("fa-light");
    } else {
      e.target.classList.add("fa-light");
      e.target.classList.remove("fa-solid");
    }
  };

  const [reseptler, setReseptler] = useState([]);
  const [types, setTypes] = useState([]);
  const [checkData, setCheckData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let data = await fetch("http://localhost:3169/reseptler").then((a) =>
        a.json()
      );
      setReseptler(data);
    };
    getData();
    const getTypes = async () => {
      let data = await fetch("http://localhost:3169/types").then((a) =>
        a.json()
      );
      setTypes(data);
    };
    getTypes();
  }, []);
  const ul = useRef();
  const checkType = (e) => {
    console.log(filterType);
    console.log(e.target);
    if (e.target.checked) {
      setFilterType([e.target.getAttribute("data-type")]);
    }
    // console.log(ul.current.querySelector());
    [...ul.current.querySelectorAll("li")].map((li) => {
      li.classList.remove("active");
    });
    e.target.closest("li").classList.add("active");
  };
  useEffect(() => {
    setCheckData([...reseptler]);
  }, [reseptler]);
  useEffect(() => {
    if (filterType.includes("3")) {
      setCheckData([...reseptler]);
    } else {
      setCheckData(reseptler.filter((f) => filterType.includes(f.type)));
    }
  }, [filterType]);
  return (
    <>
      <section id="food-types-head">
        <div className="container">
          <div id="food-type-left">
            <div className="food-type">
              <div className="food-type-image">
                <img
                  src="/images/Simply-Recipes-Air-Fryer-Burgers-LEAD-04-b83f03a35edd46118c874dbce00d42e0.webp"
                  alt=""
                />
              </div>
              <div className="food-type-text">
                <span>Səhər yeməyi</span>
                <h5>Amerikan sayağı Dönər</h5>
                <div className="food-type-time">
                  <i className="fa-solid fa-clock-rotate-left"></i> 12 min
                </div>
              </div>
            </div>
            <div className="food-type">
              <div className="food-type-image">
                <img
                  src="/images/Simply-Recipes-Air-Fryer-Burgers-LEAD-04-b83f03a35edd46118c874dbce00d42e0.webp"
                  alt=""
                />
              </div>
              <div className="food-type-text">
                <span>Səhər yeməyi</span>
                <h5>Amerikan sayağı Dönər</h5>
                <div className="food-type-time">
                  <i className="fa-solid fa-clock-rotate-left"></i> 12 min
                </div>
              </div>
            </div>
          </div>
          <div id="food-type-right">
            <div className="food-type vertical">
              <div className="food-type-image">
                <img
                  src="/images/Simply-Recipes-Air-Fryer-Burgers-LEAD-04-b83f03a35edd46118c874dbce00d42e0.webp"
                  alt=""
                />
              </div>
              <div className="food-type-text">
                <span>Səhər yeməyi</span>
                <h5>Amerikan sayağı Dönər</h5>
                <div className="food-type-time">
                  <i className="fa-solid fa-clock-rotate-left"></i> 12 min
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="recepts-section">
        <div className="container">
          <div id="recepts-head">
            <h5>Reseptlər</h5>
            <ul ref={ul}>
              {types.map((type, index) => (
                <li>
                  <label>
                    {type.name}
                    <input
                      onClick={checkType}
                      data-type={type.id}
                      style={{ display: "none" }}
                      type="radio"
                      name="res"
                      id=""
                    />
                  </label>
                </li>
              ))}
              {/* <li className="active">Səhər</li>
              <li>Gunorta</li>
              <li>Axsam</li>
              <li>Payızdıq</li>
              <li>Qışdıq</li> */}
            </ul>
          </div>
          {/* <div id="recepts">
            <Link to="/" className="item">
              <div className="item-image">
                <img
                  src="https://sufremiz.az/wp-content/uploads/2018/08/RFO-1400x919-cdb61265-c5a8-4297-b243-e335ad51d3d8-0-1400x919.jpg"
                  alt=""
                />
                <div className="item-text">
                  Sulu Yemək Resepti
                  <div className="outline3"></div>
                </div>
              </div>
            </Link>
            <Link to="/" className="item">
              <div className="item-image">
                <img
                  src="https://sufremiz.az/wp-content/uploads/2018/08/baconheader.jpg"
                  alt=""
                />
                <div className="item-text">
                  Quru Yemək Resepti
                  <div className="outline3"></div>
                </div>
              </div>
            </Link>
            <Link to="/" className="item">
              <div className="item-image">
                <img
                  src="https://sufremiz.az/wp-content/uploads/2015/07/AdobeStock_120593843.jpg"
                  alt=""
                />
                <div className="item-text">
                  Dietik Yemək Resepti
                  <div className="outline3"></div>
                </div>
              </div>
            </Link>
            <Link to="/" className="item">
              <div className="item-image">
                <img
                  src="https://sufremiz.az/wp-content/uploads/2018/08/salata.jpg"
                  alt=""
                />
                <div className="item-text">
                  Salat Resepti
                  <div className="outline3"></div>
                </div>
              </div>
            </Link>
            <Link to="/" className="item">
              <div className="item-image">
                <img
                  src="https://sufremiz.az/wp-content/uploads/2018/08/374142.jpg"
                  alt=""
                />
                <div className="item-text">
                  Balıq Yemək Resepti
                  <div className="outline3"></div>
                </div>
              </div>
            </Link>
            <Link to="/" className="item">
              <div className="item-image">
                <img
                  src="https://sufremiz.az/wp-content/uploads/2018/08/a9ad7df06a334b17818160d4b8c0e2e6.jpg"
                  alt=""
                />
                <div className="item-text">
                  Şirniyyat Resepti
                  <div className="outline3"></div>
                </div>
              </div>
            </Link>
            <Link to="/" className="item">
              <div className="item-image">
                <img
                  src="https://sufremiz.az/wp-content/uploads/2018/08/1416343638666.jpeg "
                  alt=""
                />
                <div className="item-text">
                  Xəmir Yemək Resepti
                  <div className="outline3"></div>
                </div>
              </div>
            </Link>
            <Link to="/" className="item">
              <div className="item-image">
                <img
                  src="https://sufremiz.az/wp-content/uploads/2018/08/kislik_tursu_kurmanin_puf_noktalari_1505207771_4256.jpg"
                  alt=""
                />
                <div className="item-text">
                  Turşu Resepti
                  <div className="outline3"></div>
                </div>
              </div>
            </Link>
            <Link to="/" className="item">
              <div className="item-image">
                <img
                  src="https://sufremiz.az/wp-content/uploads/2018/08/sufrem.az-91595.png"
                  alt=""
                />
                <div className="item-text">
                  Mürəbbə Resepti
                  <div className="outline3"></div>
                </div>
              </div>
            </Link>
          </div> */}
          <div id="recepts">
            {checkData.map((resept) => (
              <Link to={`/resept/${resept.id}`} className="recept">
                <div className="recept-image">
                  <img src={resept.image} alt="" />
                </div>
                <div className="recept-text">
                  <span>DINNERS</span>
                  <h5>Instant Pot Mashed Sweet Potatoes</h5>
                  <p>
                    <i className="fa-solid fa-clock-rotate-left"></i> 12 min
                  </p>
                </div>
                <div className="liked">
                  <i
                    onClick={(e) => {
                      let exist = props.basket.find((b) => b.id == resept.id);
                      addLike(e);
                      console.log(exist, props.basket);
                      // let exist = false;
                      e.preventDefault();
                      if (exist) {
                        exist.count++;
                        props.dispatch({
                          type: "addBasket",
                          payload: [
                            ...props.basket.filter((b) => b.id != exist.id),
                          ],
                        });
                      } else {
                        props.dispatch({
                          type: "addBasket",
                          payload: [
                            ...props.basket,
                            {
                              count: 1,
                            },
                          ],
                        });
                      }
                    }}
                    className="fa-regular fa-heart"
                  ></i>
                </div>
              </Link>
            ))}
            {/* <div className="recept">
              <div className="recept-image">
                <img
                  src="/images/Simply-Recipes-Instant-Pot-Mashed-Sweet-Potatoes-LEAD-4-2f1142e2587d4885a6108fce5cfba42a.webp"
                  alt=""
                />
              </div>
              <div className="recept-text">
                <span>DINNERS</span>
                <h5>Instant Pot Mashed Sweet Potatoes</h5>
                <p>
                  <i className="fa-solid fa-clock-rotate-left"></i> 12 min
                </p>
              </div>
              <div className="liked">
                <i
                  onClick={(e) => {
                    exist = !exist;
                    // let exist = false;
                    e.preventDefault();
                    if (exist) {
                      exist.count++;
                      props.dispatch({
                        type: "addBasket",
                        payload: [...props.basket],
                      });
                    } else {
                      props.dispatch({
                        type: "addBasket",
                        payload: [
                          ...props.basket,
                          {
                            count: 1,
                          },
                        ],
                      });
                    }
                  }}
                  className="fa-regular fa-heart"
                ></i>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
});
