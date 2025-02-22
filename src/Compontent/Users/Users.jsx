import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './User.css';

const Users = () => {

    const users = useLoaderData();
    console.log(users);
    return (
        <div className="max-w-dvh m-auto">
           <h2>Our Users:{users.length}</h2>  
          <div className="users">
             {
                users.map(user => <User user={user} key={user.id}></User>)
             }
          </div>
        </div>
    );
};

export default Users;