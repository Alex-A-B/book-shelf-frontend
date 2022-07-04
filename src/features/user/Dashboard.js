import React from "react";
import { useSelector /*, useDispatch*/ } from "react-redux"; 
import Books from "../books/Books"



const Dashboard = () => {
    const currentUser = useSelector(state => state.login.currentUser)

    return (
        <div className="dashboard">
            <h3>Welcome {currentUser.username}</h3>

            <Books />

        </div>
    )
}

export default Dashboard