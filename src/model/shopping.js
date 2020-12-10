import axios from "./axios.js";

let shoppingInfo = {
    getShopping: (info) => {
        return axios({
            method: "get",
            url: "/self/shopping",
            params: info
        })
    },
    addShopping: (info) => {
        return axios({
            method: "post",
            url: "/self/shopping",
            data: info
        })
    },
    updateShopping: (id, info) => {
        return axios({
            method: "patch",
            url: "/self/shopping/" + id,
            data: info
        })
    },
    delShopping: async (id) => {
        return await axios({
            method: "delete",
            url: "/self/shopping/" + id,
        })
    }
}

export default shoppingInfo;