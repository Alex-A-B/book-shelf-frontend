import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { fetchCurrentUser, loginNewUser, logoutCurrentUser } from "./loginAPI"

const initialState = {
    currentUser: null,
    status: "idle"
    
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

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        loginUser: (state, action) => {state.currentUser = action.payload },
        logoutUser: (state) => {state.currentUser = null}
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

    }

    
})

export default loginSlice.reducer
export const { loginUser, logoutUser } = loginSlice.actions