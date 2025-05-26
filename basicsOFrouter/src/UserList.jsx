import {Link} from 'react-router';

export default function UserList(){
    const userData=[
        { id:1,name:'Nandini'},
        { id:2,name:'Isha' },
        { id:3,name:'Palak' },
        { id:4,name:'Nihari' },
        { id:5,name:'Kanak' },
    ]
return <div  style={{margin:"20px"}}>
    <h1>User List Page</h1>
    {
        userData.map((item)=>(
            <div>
                <h4><Link to={"/users/"+item.id} >{item.name}</Link></h4>
            </div>
        ))
    }
</div>

}