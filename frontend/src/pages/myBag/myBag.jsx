import React, {useState, useEffect } from "react";
import { Link} from "react-router-dom";
import style from '../myBag/style.module.css';
import jas from '../../assets/images/jas.png';
import Navs from "../../components/Navs";
import axios from "axios";
import {useSelector} from "react-redux"

const MyBag = () => {
  const [data2, setData2] = useState([]);
  const [data, setData] = useState()
  const id = useSelector((state) => state.user.user.id_user)
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/orderproduct/${id}`)
      .then((response) => {
        // console.log(response.data.token.data)
        console.log(response.data.data);
        setData2(response.data.data)
      })
      .catch((err) => {
        console.log(err);
      });
    },[]);
    // console.log(data2[0].id_user)
    
      // const handlePost = (e) => {
      //   // e.preventDefault();
      //   console.log(data2[0].stock)
       
      //   // console.log(data2[0].id_user)
      //   const body = {
      //     userid:data2[0].id_user,
      //     id_order: data2[0].id_order,
      //     payment_method: "belum bayar",
      //     quantity:data2[0].quantity,
      //     price:data2[0].price,
      //     id:data2[0].id_product,
      //     stockProduk:data2[0].stock
      //     };
      //     console.log(body)
      //     if(data2[0].stock >= 1){
      //       if(data2[0].stock >= data2[0].quantity){
      //         setData(data2[0].quantity*data2[0].price)
      //       // console.log(data2[0].quantity*data2[0].price)
      //   axios
      //     .post(`${process.env.REACT_APP_BACKEND_URL}/transaction`, body,)
      //     .then((res) => {
      //       // console.log(res.data);
      //       // alert("Recipe added successfully");
            
      //     })
      //     .catch((err) => {
      //       console.log(err);
      //       alert("Failed to add Transaction");
      //     });
      //   }else{
      //   alert("Maaf Stock tidak mencukupi")
      //   }
      //   }else{
      //   alert("maaf stock sudah habis")
      //   }
      // };
 
  return (
    <>
			<Navs />
      {/* {JSON.stringify(data)} */}
      <div style={{ marginTop: '60px' }} className="container ">
      
        <div className="row ">     
          <h1 style={{ fontWeight: '900' }}>My Bag</h1>
          <div className="col-sm-7 mb-4">
          <form >
            <div className={style.card}>
              <div className="card-body p-0 p-4">
                <div className={`${style.select} d-flex justify-content-center`}>
                  <input className={style.check} type="checkbox" />
                  Select all items <span className={style.selected}>(2 items selected)</span>
                  <span className={`${style.delete} d-flex justify-content-end`}>Delete</span>
                </div>
              </div>
            </div>
            {data2 &&
              data2.map((item,index)=>(
                <div key={index}>
              <div className={`${style.card} mt-3`}>
              <div className="card-body p-0 p-4">
                <div className={style.productone}>
                  <div className="d-flex align-items-center">
                    <input className={style.check} type="checkbox" />
                    <img src={`${process.env.REACT_APP_BACKEND_URL}/${item.photo}`}  alt="suite" />
                    <div className={style.brand}>
                      <h5>{item.product_name} - {item.color}</h5>
                      <p>{item.seller}</p>
                    </div>
                  </div>
                  <div className={`d-flex align-items-center ${style.countProduct}`}>
                    <div className={style.circle}>-</div>
                    <p className={style.sum}>{item.quantity}</p>
                    <div className={style.circle}>+</div>
                  </div>
                  <p className={style.price}>${item.quantity*item.price}</p>
                </div>
              </div>
            </div>
            </div>
              ))
            }
             
            </form>
          </div>
          <div className="col-sm-5 mb-4">
            <div className={style.card}>
              <div className="card-body-right p-4">
                <h3 className={style.cardSummary}>Shopping summary</h3>
                <h5 className={style.price}>
                  Total price<span className="d-flex justify-content-end">$ {data}.0</span>
                </h5>
                <Link to="/checkout">
                <button type="submit" className={style.buy}>Checkout</button>
                </Link>
              </div>
            </div>
          </div>
         
          {/* dsini */}
        </div>
        
      </div>
    </>
  );
};

export default MyBag;
