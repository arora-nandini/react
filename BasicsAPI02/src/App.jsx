import React, { useState } from "react";
import { useEffect } from "react";
import './App.css';
export default function App(){
const [ userdata,setuserdata]=useState([])
const[loading,setloading]=useState(false)
  useEffect(()=>{
    setloading(true)
    getuserdata();
  },[])
const getuserdata=async()=>{
  const url="http://localhost:3000/users";
  let response= await fetch(url);
  response=await response.json();
  console.log(response);
  setuserdata(response)
  setloading(false)
}
return(
  <div>
    <h1>Integrate JSON Server API and Loader</h1>
    {
      !loading?
      userdata.map((user)=>(
        <ul  key={user.name}  className="user-list" >
          <li> {user.name}</li>
          <li>{user.age} </li>
          <li>{user.email} </li>


        </ul>
      ))
      :<h1>Data Loading....</h1>
    }
  </div>
)

}