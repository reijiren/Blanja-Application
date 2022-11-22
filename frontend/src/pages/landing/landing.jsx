import React from 'react';
import Footer from '../../components/Footer/index';
import Button from '../../components/Button/index';
import Pic from '../../assets/images/1.png';
import Pic2 from '../../assets/images/2.png';
import Category from '../../components/CategoryCard/index';
import Card from '../../components/Card/index';
import styles from '../landing/style.module.css';
import Navbar from '../../components/Navbar';

const Landing = () => {
  return (
    <>
      <Navbar />
      <section className={styles.main}>
        <section className={styles.polular}>
          <section className={styles.caraousell}>
            <div className="container">
              <div className="row">
                <div className={'col-12 d-flex ' + styles.caraousell}>
                  <div>
                    <img className={'img-fluid ' + styles.j1} src={Pic} alt="" />
                  </div>
                  <div>
                    <img className={'img-fluid ' + styles.j2} src={Pic2} alt="" />
                  </div>
                  <div>
                    <img className={'img-fluid ' + styles.j3} src={Pic} alt="" />
                  </div>
                  <div>
                    <img className={'img-fluid ' + styles.j4} src={Pic2} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <h5>Category</h5>
          <p className={styles.sub}>You've never seen it before</p>
          <div className={styles.category}>
            <Category />
          </div>
          <div className={styles.maincontent}>
            <h5>New</h5>
            <p className={styles.sub}>You've never seen it before</p>
            <div className={styles.sort}>
              <select name="sortBy" id="sortBy">
                <option value="">Sort Berdasarkan</option>
                <option value="name">Nama</option>
                <option value="price">Harga</option>
              </select>
              <select name="sort" id="sort">
                <option value="asc">Terendah</option>
                <option value="desc">Tertinggi</option>
              </select>
            </div>

            <div className={styles.content}>
              <Card />
            </div>
            <div className={styles.btnPagination}>
              <Button title="1" className="pagination" />
              <Button title="2" className="pagination" />
              <Button title="3" className="pagination" />
              <Button title="4" className="pagination" />
              <Button title="5" className="pagination" />
            </div>
          </div>

          <div className={styles.maincontent}>
            <h5>Popular</h5>
            <p className={styles.sub}>You've never seen it before</p>
            <div className={styles.content}>
              <Card />
            </div>
          </div>
          <div className={styles.btnPagination}>
            <Button title="1" className="pagination" />
            <Button title="2" className="pagination" />
            <Button title="3" className="pagination" />
            <Button title="4" className="pagination" />
            <Button title="5" className="pagination" />
          </div>
        </section>

        <Footer />
      </section>
    </>
  );
};

export default Landing;
