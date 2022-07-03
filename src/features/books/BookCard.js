import React from "react";

function BookCard( { book } ) {
    console.log(book)
    const {title, description, imageLinks, authors, categories } = book

    return (
        <div>
            <h4>Title: {title}</h4>
            <h4>Description:</h4> <p> {description} </p>
            <p>Authors: {authors} </p>
            <img src={imageLinks.smallThumbnail} alt={title} width="50" length="60"/>
            <h4>Genre:</h4> <p>{categories}</p>
        </div>
    )
}

export default BookCard