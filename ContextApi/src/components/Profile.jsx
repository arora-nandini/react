import React ,{useContext}from "react";
import UserContext from "../context/UsserContext";
function Profile(){
    const{user}=useContext(UserContext)

    if(!user)return<div>Please Login</div>  //no user
    
    
    return <div>Welcome{user.username}   </div>
}
export default Profile

