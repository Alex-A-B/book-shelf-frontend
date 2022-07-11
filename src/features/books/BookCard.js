import React from "react";

const BookCard = ( { book } ) => {
    console.log(book)
    const {title, description, imageLinks, authors, categories } = book

    return (
        <div className="book">
            {imageLinks ? (<img src={imageLinks.smallThumbnail} alt={title} width="75" length="90"/>) : null}
            <div><h4>Title: {title}</h4></div>
            {description ? (<div><h4>Description:</h4> <p> {description.substring(0, 25)}... </p> </div>) : null } {/*add an on click to show full descriotion*/}
            <div><h4>Authors:</h4><p> {authors} </p></div>
            <div><h4>Genre:</h4> <p>{categories}</p></div>
        </div>
    )
}

export default BookCard