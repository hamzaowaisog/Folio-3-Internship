import axios from "../API/axios";

export const getData = async(endpoint) => {
    try{
        const response = await axios.get(endpoint);
        return response;
    }
    catch (error) {
        return error.message;
    }
} ;

export const postData = async(endpoint, data) => {
    try{
        const response = await axios.post(endpoint, data);
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

