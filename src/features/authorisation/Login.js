import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCurrentUserAsync, /*setCurrentUser*/ } from "./loginSlice";

const Login = () => {
    const currentUser = useSelector(state => state.login.currentUser)
    const status = useSelector(state => state.login.status)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCurrentUserAsync())
    }, [])

    return (
        <div className={status === "idle" ? "green" : "red"}>
            <button onClick={() => dispatch(fetchCurrentUserAsync())}>fetch current user</button>

            <p> hello {currentUser ? currentUser.username : "guest"}</p>

        </div>

    )
}

export default Login