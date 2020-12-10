import axios from "./axios.js";

let classifyInfo = {
    getClassifyList: () => {
        return axios({
            url: "/self/classify",
            method: "get",
        })
    },
    getGoodsList: (info) => {
        return axios({
            url: "/self/goodslist",
            method: "get",
            params: info
        })
    },
    getGoodsInfo: (id) => {
        return axios({
            url: "/self/goodslist/10",
            method: "get",
        }).then(res => {
            let arr = res.data.list;
            return arr.filter(item => item.id == id)[0];
        })
    },
    getList: () => {
        return axios({
            url: "http://www.jiudoujishi.com/api/goods/get_goods_cat_list",
            method: "get",
            // var arr = res.data.data.filter((item) => item.id == 395)[0].children;
            // console.log(arr);
        })
    },
    getGoodsByKey: (info) => {
        return axios({
            url: "/self/searchlist",
            method: "get",
            params: info
        })
    }
}

export default classifyInfo;