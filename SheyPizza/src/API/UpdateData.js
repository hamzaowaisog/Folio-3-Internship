import { putData } from "./api"


export  const UpdatePizzaData = async (id,data,navigate) =>{
    try{
        const response = await putData(`/Pizza/${id}`,data);
        console.log(response.data)
        navigate('/');
        return response.data;
    }
    catch (Error){
        console.error('Error updating pizza:', Error);
        throw Error;
    }
}