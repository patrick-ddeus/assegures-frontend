import axios, { AxiosError } from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.REACT_API_BASE_URL,
    headers: { "Content-Type": "application/json" },
});

const queryStringBuilder = (query) =>
    Object.keys(query).length
        ? `?${Object.keys(query)
            .map((param) => `${param}=${query[param]}`)
            .join("&")}`
        : "";

const axiosEndpoints = {};

["get", "post", "delete"].forEach((method) => {
    axiosEndpoints[method] = async function (route, body, query = {}, fullResponse = false) {
        try {
            const url = `${route}${queryStringBuilder(query)}`;

            const response = await axiosInstance({ method, url, data: body });

            return fullResponse ? response : response.data;
        } catch (error) {
            console.error(error.message);
            throw new AxiosError(error);
        }
    };
});

export default axiosEndpoints;