import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { /*fetchCurrentUserAsync,*/ loginNewUserAsync /*setCurrentUser*/ } from "./loginSlice";
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"

const Login = () => {
    // const currentUser = useSelector(state => state.login.currentUser)
    const status = useSelector(state => state.login.status)
    const { register, handleSubmit, reset } = useForm()
    const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(fetchCurrentUserAsync())
    // }, [])
    // this should move to App/home/ and run from there

    const onSubmit = (data) => {
        dispatch(loginNewUserAsync(data))
        reset()
    }


    return (
        <div className={status === "idle" ? "green" : "red"}>
            <h4>Welcome, already a member, please log in to continue:</h4>

            <form onSubmit={handleSubmit(onSubmit)}>
                <h5>Login</h5>
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
            <br/>
            <p>Not a member yet? </p>
            <Link to="/signup">
                <button >click here to sign up</button>
            </Link>
            {/* <p> hello {currentUser ? currentUser.username : "guest"}</p> */}

        </div>

    )
}

export default Login