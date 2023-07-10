/* eslint-disable import/no-anonymous-default-export */
import api from './api';

const getPropertiesWithFilter = (filters) => {
  return api.get(`/properties?${filters}`);
};

const getPropertiesTypes = () => {
  return api.get('/properties/types');
};

export default {
  getPropertiesWithFilter,
  getPropertiesTypes
};
