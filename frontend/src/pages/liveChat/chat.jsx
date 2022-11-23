import React, { useState } from "react";
import style from "../liveChat/chat.module.css";
import cristian from "../../assets/images/christian.png";
import io from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { reset, selectReceiver, setChat } from "../../redux/action/chat";
import Navs from "../../components/Navs";

const Chat = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const dataUser = useSelector((state) => state.user);
	const dataChat = useSelector((state) => state.chat);

	const user = dataUser.user;
	const receiver = dataChat.receiver;
	const listChat = dataChat.chat;

	const [socketIO, setSocketIO] = useState(null);
	const [listContact, setListContact] = useState([]);
	const [msg, setMsg] = useState("");

	const date = new Date();
	const time = date.toString().slice(5);

	useEffect(() => {
		const socket = io(process.env.REACT_APP_BACKEND_URL);
		socket.on("send-message-response", (res) => {
			console.log(res);
			// dispatch(setChat(res));
		});
		setSocketIO(socket);
	}, []);

	useEffect(() => {
		if (socketIO) {
			dispatch(reset());

			socketIO.emit("join-room", user.id_user);

			const data = {
				sender: user.id_user,
				receiver: receiver.id_user,
			};

			socketIO.emit("chat-history", data);
		}
	}, [receiver]);

	const select = (e) => {
		dispatch(reset());
		dispatch(selectReceiver(e.userid || e.id_user));
	};

	const submitText = (e) => {
		e.preventDefault();

		const payload = {
			sender: user.name,
			senderid: user.id_user,
			senderimg: user.image,
			receiver: receiver.name,
			receiverid: receiver.id_user,
			receiverimg: receiver.image,
			content: msg,
			date_time: time,
		};

		dispatch(setChat([payload, ...listChat]));

		const data = {
			sender: user.id_user,
			receiver: receiver.id_user,
			message: msg,
			type: 0,
		};

		socketIO.emit("send-message", data);

		setMsg("");
	};

	return (
		<>
			<Navs />
			<div className="container">
				<div className="row ">
					<div className="col-md-4 mt-5 ">
						<div className={style.border}>
							<div
								className={`${style.chat} d-flex justify-content-center align-items-center`}>
								Chat
							</div>
							<hr />
							<div className={`${style.chatContact}`}>
								{
									<div
										className={`d-flex ${style.pointer} flex-row justify-content-between align-items-center py-2 px-3`}>
										{/* <img src={`${process.env.REACT_APP_BACKEND_URL}/${e.image}`} className="rounded-circle img-fit" width={50} height={50} alt="" /> */}
										<img
											src={cristian}
											className={`rounded-circle ${style.imgFit}`}
											width={50}
											height={50}
											alt=""
										/>
										<div
											className={`d-flex flex-column justify-content-between ${style.chatInfo}`}>
											{/* <div className="chat-name mb-1"><b>{e.name}</b></div> */}
											{/* <div className="chat-name text-truncate">{e.chat_sender == user.id_user && 'Me: '}{e.content}</div> */}
											<div className="mb-1">
												<b>cristante</b>
											</div>
											<div className="text-truncate">aoiyyiy</div>
										</div>
										<div className="d-flex flex-column align-items-end justify-content-between">
											{/* <div className="text-gray chat-time mb-2">{e.date_time.slice(11, 16)}</div> */}
											<div className="mb-2">11.00</div>
											<div
												className={`${style.bgRed} ${style.chatIn} text-center text-white text-truncate`}>
												99
											</div>
										</div>
									</div>
								}
								{/* <div key={i} onClick={() => select(e)} className="d-flex flex-row justify-content-between align-items-center py-1 px-1" id="chat">
                  <img src={`${process.env.REACT_APP_BACKEND_URL}/${e.image}`} className="rounded-circle img-fit" width={50} height={50} alt="" />
                  <div className="d-flex flex-column justify-content-between chat-info">
                    <div className="chat-name mb-1"><b>{e.name}</b></div>
                    <div className="chat-name text-truncate">{e.chat_sender == user.id_user && 'Me: '}{e.content}</div>
                  </div>
                  <div className="d-flex flex-column align-items-end justify-content-between">
                    <div className="text-gray chat-time mb-2">{e.date_time.slice(11, 16)}</div>
                    <div className="bg-blue text-center text-white chat-in text-truncate">999</div>
                  </div>
                </div> */}
							</div>
						</div>
					</div>
					<div className="col-md-8 mt-5">
						<div className={style.border}>
							<div className={`d-flex flex-row align-items-center py-2 px-5`}>
								<img className={`${style.image}`} src={cristian} alt="" />
								<span className={`${style.name} mx-3`}>Jonas adam</span>
							</div>
							<hr className="my-1" />
							<div
								className={`${style.chatMessage} bg-danger px-2 d-flex flex-column-reverse`}></div>
							<form onSubmit={(e) => {}}>
								<div
									className={`px-5 d-flex flex-row align-items-center bg-light ${style.msgBox}`}>
									<div
										className={`w-100 ${style.sendMessage} d-flex justify-content-between align-items-center`}>
										<input
											type={"text"}
											placeholder="Type your message..."
											className={`p-3`}
											id={style.sendMessage}
										/>
									</div>
								</div>
							</form>
							{/* <div className={style.inputRow}>
                <input className={style.inputLive} type="text" placeholder="Masukkan pesan" />
              </div> */}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Chat;
