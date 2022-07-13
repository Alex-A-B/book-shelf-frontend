import React from "react";
import { useDispatch } from "react-redux";
import { updateBookshelfAsync } from "./bookshelfSlice";

const ShelfCard = ( { shelf, book }) => {
    const {id, read, owned } = shelf
    
    const {title, author, /*genre, synopsis,*/ image_url } = book

    const dispatch = useDispatch()

    function handleRemoveBook() {
        fetch(`bookshelves/${shelf.id}`, {
            method: "DELETE",
        })
    }

    const handleReadUpdate = () => {
        const data = { id: id, read: !read }
        dispatch(updateBookshelfAsync(data))
    }

    const handleOwnedUpdate = () => {
        const data = {id: id, owned: !owned }
        dispatch(updateBookshelfAsync(data))
    }

    return (
        <div className="book">
            {/*some link to book to DRY out code*/}
            <img src={image_url} alt={title} width="75" length="90"/>
            <h4>{title}</h4>
            <h4>{author}</h4>
            <div className="bookInfo">
                {read ? (<h4>Read it!</h4>) : (<h4>I still need to read this.</h4>) }
                {owned ? (<h4>Own a copy!</h4>) : (<h4>Don't own a copy.</h4>) }
            </div>
            { read ? (<button onClick={handleReadUpdate}>I haven't read this</button>) : (<button onClick={handleReadUpdate}>I've read this</button>)}
            { owned ? (<button onClick={handleOwnedUpdate}>I don't own this yet!</button>) : (<button onClick={handleOwnedUpdate}>I own this one.</button>) }
            <button onClick={handleRemoveBook}>Remove from my Library</button>
        </div>
    )

}

export default ShelfCard