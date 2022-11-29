import React, { useState, useEffect } from 'react';

import styles from '../landing/style.module.css';

import { Link, useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import Carousel from '../../components/Carousel/index';
import CategoryCard from '../../components/CategoryCard/index';

import axios from 'axios';
import Navs from '../../components/Navs';

const Landing = () => {
  const navigate = useNavigate();
  const [getProduct, setProduct] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  // const [sort, setSort] = useState('id');
  // const [asc, setAsc] = useState('asc');
  // const [data, setData] = useState([]);

  //  useEffect(() => {
  //   getData(sort, asc, 3, currentPage);
  // }, [sort, asc, currentPage]);

  // const getData = (sort, asc, limit, page) => {
  //   axios
  //     .get(`${process.env.REACT_APP_BACKEND_URL}/product?sort=${sort}&asc=${asc}&limit=${limit}${page ? `&page=${page}` : ''}`)
  //     .then((res) => {
  //       console.log(res.data);
  //       setData(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // const handleNext = () => {
  //   setCurrentPage(currentPage + 1);
  //   getData(sort, asc, 3, currentPage + 1);
  // };

  // const handlePrevious = () => {
  //   if (currentPage > 1) {
  //     setCurrentPage(currentPage - 1);
  //     getData(sort, asc, 3, currentPage - 1);
  //   }
  // };

  // const handleSorting = () => {
  //   if (sort == 'id') {
  //     setSort('title');
  //   } else {
  //     setSort('id');
  //   }
  //   getData(sort, asc, 3, currentPage);
  // };

  // const handleAsc = () => {
  //   if (asc == 'asc') {
  //     setAsc('desc');
  //   } else {
  //     setAsc('asc');
  //   }
  //   getData(sort, asc, 3, currentPage);
  // };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/product`)
      .then((res) => {
        setProduct(res.data.data.rows);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // get state user
  const dispatch = useDispatch();
  const { user, isLoading, isError } = useSelector((state) => {
    return state.user;
  });

  const address = useSelector((state) => {
    return state.address;
  });

  // console.log(address)
  return (
    <>
      <Navs />
      <section className="bg-light">
        <div className="container bg-light">
          <div className={styles.carousel + ' position-relative pt-5'}>
            <Carousel />
          </div>
          <div className="row col-md-12">
            <div className="ms-5 mt-4">
              <h2>Category</h2>
              <p>What are you currently looking for</p>
            </div>
          </div>

          <div className={`${styles.categories} mt-1`}>
            <div className={styles.container}>
              <CategoryCard />
            </div>
          </div>

          <div className="row col-md-12">
            <div className="ms-5 mt-4">
              <h2>New</h2>
              <p>You’ve never seen it before!</p>
            </div>
          </div>
          <div className="col-md-12 d-flex flex-row gap-4 flex-wrap">
            {getProduct && getProduct.length === 0 ? (
              <div>product is empty</div>
            ) : (
              getProduct.map((item, index) => (
                <Link key={index} to={`/product/${item.id_product}`} className={`${styles.links}`}>
                  <div className="card ms-4" style={{ width: '14rem', top: '10px' }}>
                    <img src={`${process.env.REACT_APP_BACKEND_URL}/${item.photo}`} height="200px" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h4 className="card-text">{item.product_name}</h4>
                      <h4 className="card-text text-danger">$ {item.price}.0</h4>
                      <p className={styles.p}>Zalora Cloth</p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star text-warning ms-1" viewBox="0 0 16 16">
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star text-warning ms-2  " viewBox="0 0 16 16">
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star text-warning ms-2" viewBox="0 0 16 16">
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star text-warning ms-2" viewBox="0 0 16 16">
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star text-warning ms-2" viewBox="0 0 16 16">
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                      </svg>
                      <span className={`${styles.p} ms-2`}>{item.stock}</span>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>

          <div className="row col-md-12">
            <div className="ms-5 mt-5">
              <h2>Popular</h2>
              <p>Find clothes that are trending recently</p>
            </div>
          </div>

          <div className="col-md-12 d-flex flex-row flex-wrap gap-4">
            {getProduct && getProduct.length === 0 ? (
              <div>product is empty</div>
            ) : (
              getProduct.map((item, index) => (
                <Link to={`/product/${item.id_product}`} className={`${styles.links}`}>
                  <div key={index} className="card ms-4" style={{ width: '14rem', top: '10px' }}>
                    <img src={`${process.env.REACT_APP_BACKEND_URL}/${item.photo}`} height="200px" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h4 className="card-text">
                        {item.product_name} - {item.color}
                      </h4>
                      <h4 className="card-text text-danger">$ {item.price}.0</h4>
                      <p className={styles.p}>{item.name}</p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star text-warning ms-1" viewBox="0 0 16 16">
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star text-warning ms-2  " viewBox="0 0 16 16">
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star text-warning ms-2" viewBox="0 0 16 16">
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star text-warning ms-2" viewBox="0 0 16 16">
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star text-warning ms-2" viewBox="0 0 16 16">
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                      </svg>
                      <span className={`${styles.p} ms-2`}>(10)</span>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>

        {/* <div className="d-flex justify-content-center">
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                <button className="page-link" onClick={() => handlePrevious()}>
                  Previous
                </button>
              </li>
              <li className="page-item">
                <button className="page-link">{currentPage}</button>
              </li>
              <li className="page-item">
                <button className="page-link" disabled={data.data <= 0} onClick={() => handleNext()}>
                  Next
                </button>
              </li>
              <li className="page-item">
                <button className="page-link" aria-label="Next" onClick={() => handleSorting()}>
                  <span aria-hidden="true">{sort}</span>
                </button>
              </li>
              <li className="page-item">
                <button className="page-link" aria-label="Next" onClick={() => handleAsc()}>
                  <span aria-hidden="true">{asc}</span>
                </button>
              </li>
            </ul>
          </nav>
        </div> */}
      </section>
    </>
  );
};

export default Landing;
