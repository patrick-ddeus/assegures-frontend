/* eslint-disable import/no-anonymous-default-export */
import api from "./api";

const getPropertiesWithFilter = (filters) => {
    return api.get(`/properties?${filters}`);
};


export default {
    getPropertiesWithFilter
};