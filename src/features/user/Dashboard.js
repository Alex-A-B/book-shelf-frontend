import React from "react";
import { useSelector /*, useDispatch*/ } from "react-redux"; 
import BookSearch from "../books/BookSearch"
import Bookshelf from "../bookshelf/Bookshelf";



const Dashboard = () => {
    const currentUser = useSelector(state => state.login.currentUser)

    
    return (
        <div className="dashboard">
            <h1>Welcome {currentUser.username}</h1>

            <BookSearch />
            
            <Bookshelf />

        </div>
    )
}

export default Dashboard