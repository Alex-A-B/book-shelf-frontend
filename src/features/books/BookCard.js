import React from "react";

const BookCard = ( { book } ) => {
    // console.log(book)
    const {title, description, imageLinks, authors, categories } = book

    function handleAddBook() {
        const bookData = {
            title: title,
            synopsis: (description ? description : null),
            image_url: (imageLinks ? imageLinks.smallThumbnail : null),
            author: authors.join(", "),
            genre: (categories ? categories.join(", ") : null)
        }
        fetch("/books", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify( bookData ),
        })
        .then((response) => response.json())
        .then(book => console.log("new add book:", book.data.attributes))
        .catch(error => alert(error.message))
    }

    return (
        <div className="book">
            {imageLinks ? (<img src={imageLinks.smallThumbnail} alt={title} width="75" length="90"/>) : process.env.PUBLIC_URL + '/logo192.png'}
            <div><h4>Title: {title}</h4></div>
            {description ? (<div><h4>Description:</h4> <p> {description.substring(0, 25)}... </p> </div>) : null } {/*add an on click to show full descriotion*/}
            <div><h4>Authors:</h4><p> {authors} </p></div>
            <div><h4>Genre:</h4> <p>{categories}</p></div>
            <button onClick={handleAddBook}>Add to my library!</button>
        </div>
    )
}

export default BookCard