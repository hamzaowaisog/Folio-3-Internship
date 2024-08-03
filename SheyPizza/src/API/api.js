import axios from "../API/axios";

export const getData = async(endpoint) => {
    return axios.get(endpoint);
};

export const postData = async(endpoint, data) => {
    try{
        const response = await axios.post(endpoint, data,{
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response;
    }
    catch (error) {
        return error.message;
    }
};

export const putData = async(endpoint, data) => {
    try{
        const response = await axios.put(endpoint, data);
        return response;
    }
    catch (error) {
        return error.message;
    }
};

export const deleteData = async(endpoint) => {
    try{
        const response = await axios.delete(endpoint);
        return response;
    }
    catch (error) {
        return error.message;
    }
}

