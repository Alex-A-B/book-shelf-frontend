
export const fetchCurrentUser = () => {
    return fetch("/me")
        .then(response => response.json())
        .then(user => user.data.attributes) 
        .catch(error => alert(error.message))
}

export const loginNewUser =(username, password) => {
    return fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
    }).then((r) => {
        if (r.ok) {
            r.json().then(user => user.data.attributes)
        }
    });        
}

export const logoutCurrentUser = () => {
    return fetch("/logout", {
        method: "DELETE"
    }) .catch(error => alert(error.message))
}