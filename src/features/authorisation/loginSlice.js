import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { fetchCurrentUser, logoutCurrentUser } from "./loginAPI"

const initialState = {
    currentUser: null,
    status: "idle"
}

export const fetchCurrentUserAsync = createAsyncThunk(
    "login/fetchCurrentUser",
    async () =>{
        const response = await fetchCurrentUser()
        return response
    }
)

export const logoutCurrentUserAsync = createAsyncThunk(
    "login/logoutCurrentUser",
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
        .addCase(fetchCurrentUserAsync.pending, (state) => {
            state.status = "Loading..."
        })
        .addCase(fetchCurrentUserAsync.fulfilled, (state, action) => {
            state.currentUser = action.payload
            state.status = "idle"
        })
        .addCase(fetchCurrentUserAsync.rejected, (state) => {
            state.status = "rejected"
        })
        .addCase(logoutCurrentUserAsync.fulfilled, (state) =>{
            state.currentUser = null
        })
        .addCase(logoutCurrentUserAsync.rejected, () => {
            
        })

    }

    
})

export default loginSlice.reducer
export const { loginUser, logoutUser } = loginSlice.actions