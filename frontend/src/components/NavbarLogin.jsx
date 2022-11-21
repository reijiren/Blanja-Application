import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/blanja_icon.png';
import christian from '../assets/images/christian.png';
import mail from '../assets/images/mail.png';
import sort from '../assets/images/sort.png';
import notif from '../assets/images/notif.png';
import mybag from '../assets/images/mybag.png';

import styles from '../assets/style/style.module.css';

const Navbar = () => {
  return (
    <>
      <nav style={{ height: '70px' }} className={`${styles.nav} navbar navbar-expand-lg navbar-light bg-light fixed-top`}>
        <div className="container">
          <div className={styles.logo}>
            <img className={styles.img} src={logo} alt="" />
            <span className={`${styles.textLogo} mt-5 ms-2 `}>Belanja</span>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex">
              <input className={styles.search} type="search" placeholder="Search " aria-label="Search" />
              <button className={styles.btn_sort} type="submit">
                <img src={sort} alt="sort" />
              </button>
            </form>
            <ul className="navbar-nav ms-auto menu">
              <div className={styles.menu}>
                <li>
                  <Link className="nav-link active" aria-current="page" to="/mybag">
                    <img src={mybag} alt="MyBag" />
                  </Link>
                </li>

                <li>
                  <Link className="nav-link active" aria-current="page" to="">
                    <img src={notif} className="d-inline-block align-text-center" alt="" />
                  </Link>
                </li>

                <li>
                  <Link className="nav-link active" aria-current="page" to="">
                    <img src={mail} className="d-inline-block align-text-center" alt="" />
                  </Link>
                </li>
                <li>
                  <Link className="nav-link active" aria-current="page" to="">
                    <img src={christian} className={`${styles.profile} d-inline-block align-text-center`} alt="cris" />
                  </Link>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
