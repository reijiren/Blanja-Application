import React from 'react';
import style from '../liveChat/chat.module.css';
import cristian from '../../assets/images/christian.png';
import Navbar from '../../components/NavbarLogin';

const chat = () => {
  return (
    <>
      <Navbar />

      <div className="container mt-5">
        <div className="row ">
          <div className="col-md-4 mt-5 ">
            <div className={style.border}>
              <div className={`${style.chat} ms-5 mt-4`}>Chat</div>
              <hr />
              <div className={style.user}>
                <img className={`${style.photo} ms-5`} src={cristian} alt="" />
                <span className={`${style.name} ms-3`}>Jonas adam</span>
              </div>
            </div>
          </div>
          <div className="col-md-8 mt-5">
            <div className={style.border}>
              <img className={`${style.image} ms-5 `} src={cristian} alt="" />
              <span className={`${style.name} ms-3`}>Jonas adam</span>
              <hr />
              <div className={style.inpur}>
                <input type="text" placeholder="     Masukkan pesan" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default chat;
