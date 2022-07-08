import React from "react";
import { useDispatch, useSelector } from "react-redux"
import { useForm } from "react-hook-form";
import { /*loginUser, loginError,*/ signupNewUserAsync } from "./loginSlice";


const Signup = () =>{
    const { register, handleSubmit } = useForm()
    const errors = useSelector(state => state.login.errors)
    const currentUser = useSelector(state => state.login.currentUser)
    const dispatch = useDispatch()


    const onSubmit = (data) => {
        console.log(data)
        // const {username, email, password, password_confirmation} = data
        dispatch(signupNewUserAsync(data))
        //  fetch(`/signup`, {
        //     method: "POST",
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(data),
        //   })
        //   .then((response) => {
        //     if(response.ok){
        //         response.json()
        //         .then((newUser) =>{ 
        //             dispatch(loginUser(newUser.data.attributes))
        //             console.log(newUser)
        //         })
        //     }else{
        //         response.json().then((errors)=>{
        //             console.log(response)
        //             console.log(errors)
        //             dispatch(loginError(errors.exception))
        //             })
        //         }
        //     })
        }

        console.log("errors:", errors)
        console.log("user:", currentUser)
    
    return (
        <div>
            New user sign up form 
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="username">Username</label>
                <input {...register("username")}
                type="text"
                placeholder="username"
                required
                />
                <label htmlFor="email">Email: </label>
                <input {...register("email")}
                type="text"
                placeholder="email"
                required
                />
                <label htmlFor="password">Password: </label>
                <input {...register("password")}
                placeholder="Password"
                type="password"
                required
                />
                <label htmlFor="passwordConfirmation">Confirm Password: </label>
                <input {...register("password_confirmation")}
                placeholder="Confirm Password"
                type="password"
                required
                />
                <button type="submit">Create new user</button>
                { errors?.length > 0 ? <div>{errors.map((err, index) => (<div key={index}>*{err}*</div>))}</div>: null}
            </form>
           
        </div>
    )

}

export default Signup