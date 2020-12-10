import axios from "./axios.js";

let addrInfo = {
    getAddr: async (info) => {
        return await axios({
            method: "get",
            url: "/self/useraddr",
            params: info
        })
    },
    addAddr: (info) => {
        return axios({
            method: "post",
            url: "/self/useraddr",
            data: info
        })
    },
    updateAddr: async (id, info) => {
        return await axios({
            method: "patch",
            url: "/self/useraddr/" + id,
            data: info
        })
    },
    delAddr: async (id) => {
        return await axios({
            method: "delete",
            url: "/self/useraddr/" + id,
        })
    }
}

export default addrInfo;