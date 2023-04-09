import axios from "axios"

const RegisterApiCall = async (e)=>{
    e.preventDefault();

    if (password.current.value !== confirm_password.current.value){
        confirm_password.current.setCustomValidity("Password do not match!!!")
    }
    else{
        const user ={
            email: email.current.value,
            username : username.current.value,
            password: password.current.value
        };
        try{
            await axios.post("http://localhost:8800/auth/register" , user);
        }
        catch(err){
            console.log(err);
        }
    }

}