import React from "react";
import { useSelector /*, useDispatch*/ } from "react-redux"; 
// import { Link } from "react-router-dom";
// import BookSearch from "../books/BookSearch"
// import Bookshelf from "../bookshelf/Bookshelf";



const Dashboard = () => {
    const currentUser = useSelector(state => state.login.currentUser)

    
    return (
        <div className="dashboard">
            <h1>Welcome {currentUser.username}</h1>
            {/* <ul>
                <li><Link to="/searchBooks">Search for books</Link></li>
                <li><Link to="/myBooks">Go to my books</Link></li>
            </ul> */}
            {/* <BookSearch />
            
            <Bookshelf /> */}

        </div>
    )
}

export default Dashboard