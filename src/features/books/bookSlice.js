import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    books: [],
}

export const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        addBook: (state, action) => {state.books.push(action.payload)},
                // use this to push the  book object to the book library
        removeBook: (state, action) => {state.books = state.books.filter(book => book.id !== action.payload)},
                // use this with the book.id to filter the books and remove the book 
    }
})

export default bookSlice.reducer