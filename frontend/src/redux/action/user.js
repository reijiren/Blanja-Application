import axios from 'axios';

export const login = (body, handleSuccess) => ({
    type: "LOGIN",
    payload: new Promise((resolve, reject) => {
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`, body)
        .then((res) => {
            console.log(res)
            handleSuccess(res);
            resolve(res);
        })
        .catch((err) => {
            reject(err);
        });
    }),
})

export const register = (body, handleSuccess) => ({
    type: "REGISTER",
    payload: new Promise((resolve, reject) => {
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/register`, body)
        .then((res) => {
            handleSuccess(res);
            resolve(res);
        })
        .catch((err) => {
            reject(err);
        });
    }),
})

export const checkEmail = (email, handleSuccess) => ({
    type: "CHECK_EMAIL",
    payload: new Promise((resolve, reject) => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/email/${email}`)
        .then((res) => {
            handleSuccess(res);
            resolve(res);
        })
        .catch((err) => {
            reject(err);
        });
    }),
})

export const detailById = (id, handleSuccess) => ({
    type: "GET_DETAIL_BYID",
    payload: new Promise((resolve, reject) => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/customer/${id}`)
        .then((res) => {
            // console.log(res)
            // console.log("cek",res)
            resolve(res);
            handleSuccess(res)
            // handleSuccess(res.data.data.rows);
        })
        .catch((err) => {
            reject(err);
        });
    })
})

export const updateById = (id, form, handleSuccess) => ({
    type: "UPDATE_CUST_BYID",
    payload: new Promise((resolve, reject) => {
        axios.put(`${process.env.REACT_APP_BACKEND_URL}/customer/${id}`, form)
        .then((res) => {
            // console.log(res)
            // console.log("cek",res)
            resolve(res);
            handleSuccess(res);
            // handleSuccess(res.data.data.rows);
        })
        .catch((err) => {
            reject(err);
        });
    })
})
// export const updateUser = (type, body, handleSuccess) => ({
//     type: "UPDATE",
//     payload: new Promise((resolve, reject) => {
//         axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/email/${email}`)
//         .then((res) => {
//             handleSuccess(res);
//             resolve(res);
//         })
//         .catch((err) => {
//             reject(err);
//         });
//     }),
// })

export const updateEmail = (id, type, body, handleSuccess) => ({
    type: "UPDATE_EMAIL",
    payload: new Promise((resolve, reject) => {
        axios.put(`${process.env.REACT_APP_BACKEND_URL}/${type}/${id}`, body)
        .then((res) => {
            handleSuccess(res);
            resolve(res);
        })
        .catch((err) => {
            reject(err);
        });
    }),
})

export const resetUser = () => {
    return {
        type: "RESET_USER",
    }
}