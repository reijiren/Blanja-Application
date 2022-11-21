import React from 'react';

import style from '../myBag/style.module.css';
import jas from '../../assets/images/jas.png';
import Navbar from '../../components/NavbarLogin';

const myBag = () => {
  return (
    <>
      <Navbar />
      <div style={{ marginTop: '150px' }} className="container ">
        <div className="row ">
          <h1 style={{ fontWeight: '900' }}>My Bag</h1>
          <div className="col-sm-7 mb-4">
            <div className={style.card}>
              <div className="card-body p-0 p-4">
                <div className={`${style.select} d-flex justify-content-center`}>
                  <input className={style.check} type="checkbox" />
                  Select all items <span className={style.selected}>(2 items selected)</span>
                  <span className={`${style.delete} d-flex justify-content-end`}>Delete</span>
                </div>
              </div>
            </div>
            <div className={`${style.card} mt-3`}>
              <div className="card-body p-0 p-4">
                <div className={style.productone}>
                  <div className="d-flex align-items-center">
                    <input className={style.check} type="checkbox" />
                    <img src={jas} alt="suite" />
                    <div className={style.brand}>
                      <h5>Men's formal suit - Black</h5>
                      <p>Zalora</p>
                    </div>
                  </div>
                  <div className={`d-flex align-items-center ${style.countProduct}`}>
                    <div className={style.circle}>-</div>
                    <p className={style.sum}>1</p>
                    <div className={style.circle}>+</div>
                  </div>
                  <p className={style.price}>$ 20.0</p>
                </div>
              </div>
            </div>
            <div className={`${style.card} mt-3`}>
              <div className="card-body p-0 p-4">
                <div className={style.productone}>
                  <div className="d-flex align-items-center">
                    <input className={style.check} type="checkbox" />
                    <img src={jas} alt="suite" />
                    <div className={style.brand}>
                      <h5>Men's formal suit - Black</h5>
                      <p>Zalora</p>
                    </div>
                  </div>
                  <div className={`d-flex align-items-center ${style.countProduct}`}>
                    <div className={style.circle}>-</div>
                    <p className={style.sum}>1</p>
                    <div className={style.circle}>+</div>
                  </div>
                  <p className={style.price}>$ 20.0</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-5 mb-4">
            <div className={style.card}>
              <div className="card-body-right p-4">
                <h3 className={style.cardSummary}>Shopping summary</h3>
                <h5 className={style.price}>
                  Total price<span className="d-flex justify-content-end">$ 40.0</span>
                </h5>
                <button className={style.buy}>Buy</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default myBag;
