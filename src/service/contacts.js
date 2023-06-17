/* eslint-disable import/no-anonymous-default-export */
import api from "./api";

const getContacts = () => {
    return api.get('/contacts');
};

export default {
    getContacts
};