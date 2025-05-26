import { Link,NavLink, Outlet } from "react-router"

function College() {
  

  return (
    <>
    <div  className="college"  style={{textAlign:"center"}} >
        <h1>College Page</h1>
        <h3><Link to="/">Go Back to Home</Link></h3>
        <NavLink  className="Link" to="" >Student</NavLink>
        <NavLink  className="Link" to="Department" >Department</NavLink>
        <NavLink  className="Link" to="Details" >College Details</NavLink>
    <Outlet/>
    
    </div>
    </>
  )
}

export default College