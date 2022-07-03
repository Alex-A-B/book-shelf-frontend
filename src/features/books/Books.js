import React, { useState } from "react";
import { useForm } from "react-hook-form"
import BookCard from "./BookCard"

// search form to create data to search googlebooks API
// read googlebooks API return response
// map books - limit numbers to cache?


const Books = () => {
    const [searchResult, setSearchResult] = useState([])

    const {register, handleSubmit, reset } = useForm()

    const onSubmit = (data) => {
        const combinedData = data.bookQuery.split(" ").join("+")
        //google books search volumes fetch request and store in local state - move to book store? 
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${combinedData}`)
        .then( (r) => {
            if(r.ok){
                r.json()
                .then(bookSearch => setSearchResult(bookSearch.items))
                .then(console.log(searchResult))
                }
        })
        //process books search results
        reset()
    }

    console.log(searchResult)

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("bookQuery")}
                type="text"
                placeholder="Search for a book"
                required
                />
                <button type="submit">Search</button>
            </form>
            {searchResult.length > 0 ? searchResult.map((book) => <BookCard key={book.id} book={book.volumeInfo} />) : null}
        </div>

    )
}

export default Books