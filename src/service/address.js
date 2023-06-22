/* eslint-disable import/no-anonymous-default-export */
import api from "./api";

const getAddress = (locale) => {
    const query = { locale };
    return api.get('/addresses', {}, query);
};


export default {
    getAddress
};