import axios from "axios"

export const LoginApiCall= async (userCredential,dispatch)=> {
    console.log("dan",userCredential)
    dispatch({type:"LOGIN_START"});
    try{
        const response = await axios.post("http://localhost:8800/auth/login" , userCredential);
        console.log(response)
        dispatch({type:"LOGIN_SUCCESS" , payload: response.data});
    }
    catch (err){
        dispatch({type:"LOGIN_FAILURE" , payload:err});
    }
}
