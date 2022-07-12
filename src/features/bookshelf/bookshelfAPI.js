export const updateBookShelf = ( id, data) => {
    return fetch(`bookshelves/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({data}),
    }).then(r => r.json())
    .then(r => (r))
    .catch(error => alert(error.message))
}