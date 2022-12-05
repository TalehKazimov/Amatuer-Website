import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Details() {
  const params = useParams();
  const [detail, setDetail] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let data = await fetch(
        `http://localhost:3169/reseptler/${params.id}`
      ).then((a) => a.json());
      setDetail(data);
    };
    getData();
  }, [params.id]);
  return (
    <div className="detail">
      <div className="container">
        <div className="detail-image">
          <img src={detail.image} alt="" />
        </div>
        <div className="detail-text">
          <h5>
            {" "}
            <b>Adı:</b>
            {detail.name}
          </h5>
          <p>
            {
              detail.describe
            }
          </p>
          <span>
            <b>Qiymət :</b>{
              detail.price
            }$
          </span>
        </div>
      </div>
    </div>
  );
}

export default Details;
