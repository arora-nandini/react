import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App(){
  const[usersdata,setuserdata]=useState([]);
  useEffect(()=>{
getuserdata();
  },[])
async function getuserdata(){
  const url="https://dummyjson.com/users";
  let response= await fetch(url);
  response= await response.json()
  
  setuserdata(response.users);
}
  return (
   <div>
    <h1>Fetch DATA from API</h1>
    <ul className='user-list user-list-head'>
        <li><b>FirstName</b></li>
        <li><b>LastName</b></li>
         <li><b>Age</b></li>
      </ul>
    {
      usersdata && usersdata.map((user)=>(
      <ul className='user-list'>
        <li>{user.firstName}</li>
        <li>{user.lastName}</li>
         <li>{user.age}</li>
      </ul>
      ))
    }
   </div>
  )
}

