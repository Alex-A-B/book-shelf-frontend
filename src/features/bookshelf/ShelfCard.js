import React from "react";
import { useDispatch } from "react-redux";
import { updateBookshelfAsync } from "./bookshelfSlice";

const ShelfCard = ( { shelf, book }) => {
    const {read, owned, ownership_source} = shelf
    
    const {title, author, /*genre, synopsis,*/ image_url } = book

    const dispatch = useDispatch()

    // const updateId = {
    //     id: shelf.id,
    // }

    // const readup = {
    //     read: !read,
    // }
    
    const ownedUpdate = {
        owned: !owned,
    }
    console.log(ownedUpdate)

    function handleRemoveBook() {
        fetch(`bookshelves/${shelf.id}`, {
            method: "DELETE",
        })
    }

    const handleReadUpdate = (/*updateId, readup*/) => {
        const id = { id: shelf.id, }
        const data = { read: !read, }
        dispatch(updateBookshelfAsync(id, data))
    }

    // function handleUpdateReadBook() {
    //     fetch(`bookshelves/${shelf.id}`, {
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({read: !read }),
    //     }).then(r => r.json())
    //     .then(r => console.log(r))
    // }

    console.log("shelf:", shelf)
    console.log("book:", book)
    return (
        <div className="book">
            {/*some link to book to DRY out code*/}
            <img src={image_url} alt={title} width="75" length="90"/>
            <h4>{title}</h4>
            <h4>{author}</h4>
            <div className="bookInfo">
                {read ? (<h4>Read it!</h4>) : (<h4>I still need to read this.</h4>) }
                {owned ? (<h4>Own a copy!</h4>) : (<h4>Don't own a copy.</h4>) }
                {owned ? (<div>
                            <h4>I got it from:</h4>
                            <p>{ownership_source}</p>
                        </div>
                        ) : (
                        null
                        ) }
            </div>
            { read ? (<button onClick={handleReadUpdate}>I haven't read this</button>) : (<button onClick={handleReadUpdate}>I've read this</button>)}
            { owned ? (<button>I don't own this yet!</button>) : (<button>I own this one.</button>) }
            <button onClick={handleRemoveBook}>Remove from my Library</button>
        </div>
    )

}

export default ShelfCard