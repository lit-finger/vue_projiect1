import axios from "./axios.js";

let payInfo = {
    getPay: (info) => {
        return axios({
            method: "get",
            url: "/self/paylist",
            params: info
        })
    },
    addPay: (info) => {
        return axios({
            method: "post",
            url: "/self/paylist",
            data: info
        })
    },
    updatePay: (id, info) => {
        return axios({
            method: "patch",
            url: "/self/paylist/" + id,
            data: info
        })
    },
    delPay: async (id) => {
        return await axios({
            method: "delete",
            url: "/self/paylist/" + id,
        })
    }
}

export default payInfo;