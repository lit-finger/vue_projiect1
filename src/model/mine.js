import axios from "./axios";
let mineInfo = {
    check: (info) => {
        return axios({
            method: "get",
            url: "/self/userinfos",
            params: info
        })
    },
    add: (info) => {
        return axios({
            method: "post",
            url: "/self/userinfos",
            data: info
        })
    },
    update: (id, info) => {
        return axios({
            method: "patch",
            url: "/self/userinfos/" + id,
            data: info
        })
    }
}
export default mineInfo;