import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import ReactPaginate from "react-paginate";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
// Import Swiper styles
import { useEffect } from "react";
import { useState } from "react";
function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 4;
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(blogs?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(blogs?.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, blogs]);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % blogs?.length;
    setItemOffset(newOffset);
  };
  useEffect(() => {
    const getData = async () => {
      let data = await fetch("http://localhost:3169/blogs").then((a) =>
        a.json()
      );
      setBlogs(data);
    };
    getData();
  }, []);
  return (
    <section className="sec1" style={{ padding: "0px" }}>
      <section>
        <div className="page-header blog">
          <div className="container">
            <h2>Blog</h2>
            <div>
              <Link to="/">Ana səhifə</Link>
              <i class="fa-solid fa-chevron-right"></i>
              <Link to="/blog" className="btn-active">
                Blog
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section">
        <div className="container-xl">
          <div className="row g-md-0">
        
            <div id="blogs">
              {currentItems?.map((blog, index) => (
                <div className="blog" key={index}>
                  <div className="d-flex">
                    <div className="blog-entry justify-content-end ">
                      <a
                        href="blog-single.html"
                        className="block-20 img d-flex align-items-end"
                        style={{
                          backgroundImage:`url(${blog.image})`
                          // backgroundImage: `url("./images/image_6.jpg")`,
                        }}
                        // style="background-image: url('images/image_6.jpg');"
                      ></a>
                      <div className="text">
                        <p className="meta">
                          <span>{blog.date}</span>
                          <a href="#">3 Comments</a>
                        </p>
                        <h3 className="heading mb-3">
                          <a href="#">{blog.name}</a>
                        </h3>
                        <p>{blog.describe}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div id="pagination">
              <ReactPaginate
                breakLabel="..."
                nextLabel="Növbəti "
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel="Əvvəlki"
                renderOnZeroPageCount={null}
              />
            </div>
          
          </div>
          <div className="row mt-5">
            <div className="col text-center">
              <div className="block-27">
                <ul>
                
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
     <Footer/>
    </section>
  );
}

export default Blog;
