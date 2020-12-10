import axios from "./axios.js";

let homeInfo = {
    getBannerList: (info) => {
        return axios({
            url: "/self/bannerimg",
            method: "get",
            params: info,
        })
    },
    getHotImgList: (info) => {
        return axios({
            url: "/self/hotimg",
            method: "get",
            params: info,
        })
    },
    getGoods: (info) => {
        return axios({
            url: "/self/goodslist",
            method: "get",
            params: info
        })
    },

};

export default homeInfo;