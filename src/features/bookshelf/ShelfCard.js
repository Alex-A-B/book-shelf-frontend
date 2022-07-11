import React from "react";

const ShelfCard = ( { shelf, book }) => {
    const {read, owned, ownership_source} = shelf
    
    const {title, author, genre, synopsis, image_url } = book

    console.log("shelf:", shelf)
    console.log("book:", book)
    return (
        <div className="book">
            {/*some link to book to DRY out code*/}
            <img src={image_url} alt={title} width="75" length="90"/>
            <h4>{title}</h4>
            <h4>{author}</h4>
            <div className="bookInfo">
                {read ? (<h4>Read it!</h4>) : (<h4>Still to read.</h4>) }
                {owned ? (<h4>Own a copy!</h4>) : (<h4>Don't own a copy.</h4>) }
                {owned ? (<div>
                            <h4>I got it from:</h4>
                            <p>{ownership_source}</p>
                        </div>
                        ) : (
                        null
                        ) }
            </div>
        </div>
    )

}

export default ShelfCard