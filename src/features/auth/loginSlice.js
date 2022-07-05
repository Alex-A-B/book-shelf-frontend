import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { fetchCurrentUser, loginNewUser, logoutCurrentUser, signupNewUser } from "./loginAPI"

const initialState = {
    currentUser: null,
    status: "idle",
    errors: null,
}

export const fetchCurrentUserAsync = createAsyncThunk(
    "auth/fetchCurrentUser",
    async () =>{
        const response = await fetchCurrentUser()
            console.log(response)
            return response
    }
)

export const loginNewUserAsync = createAsyncThunk(
    "auth/loginNewUser",
    async({ username, password }) => {
        const response = await loginNewUser( { username, password })
            console.log(response)
            return response
    }
)

export const logoutCurrentUserAsync = createAsyncThunk(
    "auth/logoutCurrentUser",
    async() => {
        const response = await logoutCurrentUser()
        return console.log(response)
    }
)

export const signupNewUserAsync = createAsyncThunk(
    "auth/signupNewUser",
    async({username, email, password, password_confirmation}) => {
        const response = await signupNewUser({username, email, password, password_confirmation})
        console.log(response)
        return response
    }
)

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        loginUser: (state, action) => {state.currentUser = action.payload
                                       state.errors = null },
        logoutUser: (state) => {state.currentUser = null},
        loginError: (state, action) => {state.errors = action.payload},
    },
    extraReducers: (builder) => {
        builder
        .addCase(loginNewUserAsync.pending, (state) => {
            state.status = "Loading..."
        })
        .addCase(loginNewUserAsync.fulfilled, (state, action) => {
            state.currentUser = action.payload
            state.status = "idle"
        })
        .addCase(loginNewUserAsync.rejected, (state, action) => {
            state.status = "rejected"
        })
        .addCase(fetchCurrentUserAsync.fulfilled, (state, action) => {
            state.currentUser = action.payload          
                    })
        .addCase(fetchCurrentUserAsync.rejected, () => {
           
        })
        .addCase(logoutCurrentUserAsync.fulfilled, (state) =>{
            state.currentUser = null
        })
        .addCase(signupNewUserAsync.fulfilled, (state, action) =>{
            state.currentUser = action.payload
            state.errors = null
        })
        .addCase(signupNewUserAsync.rejected, (state, action) =>{
            state.errors = action.payload
        })
    }

    
})

export default loginSlice.reducer
export const { loginUser, logoutUser, loginError } = loginSlice.actions