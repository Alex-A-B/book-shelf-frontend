import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { updateBookShelf } from './bookshelfAPI';


const initialState ={
    bookshelves: [],
    
};

export const updateBookshelfAsync = createAsyncThunk(
    "bookshelf/updateBookshelf",
    async ( data ) =>{
        const response = updateBookShelf(data)
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
                    const { id, read, owned } = action.payload.data.attributes
                    const existingShelf = state.bookshelves.find(shelf => shelf.id === id)
                    if (existingShelf) {
                        existingShelf.read = read
                        existingShelf.owned = owned
                    }
                 
            }) 
    },
})

export default bookshelfSlice.reducer
export const { loadBookshelf, addBookToShelf } = bookshelfSlice.actions