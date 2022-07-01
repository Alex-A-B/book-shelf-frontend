import React, { useState } from "react";
import { useForm } from "react-hook-form"

// search form to create data to search googlebooks API
// read googlebooks API return response
// map books - limit numbers to cache?


const Books = () => {
    const [searchResult, setSearchResult] = useState({})

    const {register, handleSubmit, reset } = useForm()

    const onSubmit = (data) => {
        const combinedData = data.bookQuery.split(" ").join("+")
        //google books search volumes fetch request
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${combinedData}`)
        .then( (r) => {
            if(r.ok){
                r.json()
                .then(bookSearch => setSearchResult(bookSearch))
                .then(console.log(searchResult))
            }
        })
        // add returnedSearch to local state to process.
        // console.log(searchResult)
        reset()
    }

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
        </div>

    )
}

export default Books