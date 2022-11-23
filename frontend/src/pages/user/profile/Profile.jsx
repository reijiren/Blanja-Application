import React, { useState, useEffect } from "react";
import "./style.css";
// import image
import johanesMikael from "../../../assets/images/johanes mikael.png";
// component consumer
import MainContentCust from "../../../components/customer/MainContent/MainContentCust";
// component seller
import MainContentSeller from "../../../components/seller/MainContent/MainContentSeller";
import Navs from "../../../components/Navs";
import { useNavigate } from "react-router-dom";
import { detailById } from "../../../redux/action/user";
import { getByMainAddress } from "../../../redux/action/address";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState(null);
  const [id, setId] = useState(null);
  const [dataLogin, setDataLogin] = useState([]);
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user);
  const address = useSelector((state) => state.address);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("data"));
    if(!data) {
      alert("please login first")
      return navigate('/login')
    }
    setDataLogin(data);
    setUserType(user.user[0].user_type)
    console.log(user)
    const main_address = user.user[0].main_address;
    dispatch(getByMainAddress(main_address))

  }, []);

  return (
    <div className="vw-100 vh-100">
      {/* navbar */}
			<Navs />
      {/* end of navbar */}
      <div className="container-profile h-100 w-100">
        {userType == 1 ? <MainContentCust /> : <></>}
        {userType == 2 ? <MainContentSeller /> : <></>}
      </div>
    </div>
  );
};

export default Profile;
