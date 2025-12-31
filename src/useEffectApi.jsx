import { li } from "framer-motion/client";
import { useState, useEffect } from "react"

const UseEffectApi = () => {

    const [users , setUsers] = useState([])
    console.log(users,"users");

    const fetchUsers = async () =>{
        try{
            const response = await fetch("data.json");
            console.log(response);
            const data = await response.json()
            console.log(data);
            setUsers(data)  
        }catch(err){
            console.log(err);       
        }
}   

useEffect(() => {
    fetchUsers();
}, [])

return(
    <div>
        <ul>
            {users.map(user => (
            <li>
                <li>Id: {user.id}</li>
                <li>Name: {user.name}</li>
                <li>Email: {user.email}</li>
                <li>image: {user.image}</li>
                <li></li>
            </li>
            ))}
        </ul>
    </div>
)
}
export default UseEffectApi