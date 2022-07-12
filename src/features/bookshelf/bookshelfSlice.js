import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { updateBookShelf } from './bookshelfAPI';


const initialState ={
    bookshelves: [],
    
};

export const updateBookshelfAsync = createAsyncThunk(
    "bookshelf/updateBookshelf",
    async ( { id, data }) =>{
        const response = updateBookShelf(id, data)
            console.log(response)
            return response
    }
)


export const bookshelfSlice = createSlice({
    name: 'bookshelfSlice',
    initialState,

    reducers: {
        loadBookshelf: (state, action) => {
            state.bookshelves = action.payload    
        },
        addBookToShelf: (state, action) => {
            state.bookshelves = [...state.bookshelves, action.payload]
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(updateBookshelfAsync.fulfilled, (state, action) => {
                    console.log(action.payload)
                    let filteredShelf = state.bookshelves.find(shelf => shelf.id === action.payload.id)
                    filteredShelf = action.payload
            }) 
    },
})

export default bookshelfSlice.reducer
export const { loadBookshelf, addBookToShelf } = bookshelfSlice.actions