import axios from 'axios';

export const insertProduct = (body, handleSuccess) => ({
    type: "INSERT_PRODUCT",
    payload: new Promise((resolve, reject) => {
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/product`, body, 
        {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
        .then((res) => {
            handleSuccess(res);
            resolve(res);
        })
        .catch((err) => {
            reject(err);
        });
    }),
})