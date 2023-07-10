/* eslint-disable import/no-anonymous-default-export */
import api from "./api";

const getAddress = (locale, goal) => {
    const query = { locale, goal };
    return api.get('/addresses', {}, query);
};


export default {
    getAddress
};