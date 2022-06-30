import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCurrentUserAsync, loginNewUserAsync /*setCurrentUser*/ } from "./loginSlice";
import { useForm } from "react-hook-form"

const Login = () => {
    const currentUser = useSelector(state => state.login.currentUser)
    const status = useSelector(state => state.login.status)
    const {register, handleSubmit, reset } = useForm()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCurrentUserAsync())
    }, [])

    const onSubmit = (data) => {
        dispatch(loginNewUserAsync(data))
        reset()
    }


    return (
        <div className={status === "idle" ? "green" : "red"}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3>Login</h3>
                <label htmlFor="username">Username: </label>
                <input {...register("username")}
                type="text"
                placeholder="username"
                required
                />
                <label htmlFor="password">Password: </label>
                <input {...register("password")}
                placeholder="password"
                type="password"
                required
                />
                <button type="submit">Login</button>
            </form>

            <button onClick={() => dispatch(fetchCurrentUserAsync())}>fetch current user</button>

            <p> hello {currentUser ? currentUser.username : "guest"}</p>

        </div>

    )
}

export default Login