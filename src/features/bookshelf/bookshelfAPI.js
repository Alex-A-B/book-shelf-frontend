export const updateBookShelf = ( data) => {
    console.log("ubs", data)
    return fetch(`bookshelves/${data.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).then(r => r.json())
    .then(r => (r))
    .catch(error => alert(error.message))
}