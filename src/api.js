import axios from "axios";

export const axiosAPI = async (param, offset) => {
    const key = 'pLURtkhVrUXr3KG25Gy5IvzziV5OrZGa';

    const response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${param}&offset=${offset}`);

    return response.data.data;
}