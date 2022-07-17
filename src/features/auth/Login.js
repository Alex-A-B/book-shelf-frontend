import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginNewUserAsync } from "./loginSlice";
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"

const Login = () => {
    const errors = useSelector(state => state.login.errors)
    const { register, handleSubmit, reset } = useForm()
    const dispatch = useDispatch()

    const onSubmit = (data) => {
        dispatch(loginNewUserAsync(data))
        reset()
    }
   
    return (
        <div className="">
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
                { errors?.length > 0 ? <div>{errors}</div>: null}
            </form>
            <br/>
            <p>Not a member yet? </p>
            <Link to="/signup">
                <button >click here to sign up</button>
            </Link>

        </div>

    )
}

export default Login