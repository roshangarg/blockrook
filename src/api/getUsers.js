import axios from "axios";
const URL = 'https://dummyjson.com/users';
 export const getUsers  = async (skip=0) => {
    try{
        const res = await axios.get(URL,{
            params:{
                limit:10,
                skip:skip,
            }
        })
        return res.data
    }
    catch (error ) {
        throw error
    }
}