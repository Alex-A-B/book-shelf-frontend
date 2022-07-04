import { /*createAsyncThunk, */ createSlice } from '@reduxjs/toolkit';


const initialState ={
    bookshelves: [],
    // status: idle,
};



export const bookshelfSlice = createSlice({
    name: 'bookshelfSlice',
    initialState,

    reducers: {
        addBookToShelf: (state, action) => {
            state.bookshelves = [...state.bookshelves, action.payload]
        }
    },

    // extraReducers: (builder) => {
    //     builder
    //         // .addCase go here for async
    // },
})

export default bookshelfSlice.reducer