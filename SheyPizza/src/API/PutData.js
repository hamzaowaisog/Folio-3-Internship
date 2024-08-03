import { postData } from "./api"

export const PostPizzaData = async (data,navigate) =>{

    try{
        const response = await postData('/Pizza/',data);
        console.log(response.data)
        navigate('/');
        return response.data;
   }
   catch(Error) {
         console.error('Error posting pizza:', Error);
         throw Error;
   }
}