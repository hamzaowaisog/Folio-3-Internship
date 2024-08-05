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

export const PostUserData = async (data,navigate) =>{
    try{
        const response = await postData('/Users/',data);
        console.log(response.data)
        navigate('/login');
        return response.data;
   }
   catch(Error) {
         console.error('Error posting user:', Error);
         throw Error;
   }
}