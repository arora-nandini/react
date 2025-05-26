import { Link, Outlet } from "react-router"
import './header.css'
export default function NavBar(){

return <div>
<div className="header">
    <div>
        <Link className="Link"  ><h2>Logo</h2></Link>
    </div>
    <div>
<ul>
<li>
        <Link className="Link" to="/" >Home</Link>
</li>
<li>
        <Link className="Link" to="/in/user/Login" >Login</Link>
</li>
<li>
        <Link className="Link" to="/in/user/About">About</Link>
</li>
<li>
        <Link className="Link" to="/College">College</Link>
</li>
<li>
        <Link className="Link" to="/Users">Users</Link>
</li>
<li>
        <Link className="Link" to="/Users/List">List</Link>
</li>
</ul>
    </div>
</div>
<Outlet/>
</div>

}