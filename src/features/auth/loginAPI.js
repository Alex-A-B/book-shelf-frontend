
export const fetchCurrentUser = () => {
    return fetch("/me")
        .then(response => response.json())
        .then(user => user) 
        .catch(error => alert(error.message))
}

export const loginNewUser =( { username, password }) => {
    return fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
        })
        .then((response) => response.json())
        .then(user => user)
        .catch(error => alert(error.message))   
}

export const logoutCurrentUser = () => {
    return fetch("/logout", {
        method: "DELETE"
    }).catch(error => alert(error.message))
}

export const signupNewUser = ( { username, email, password, password_confirmation } ) => {
    fetch(`/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(username, email, password, password_confirmation),
      })
      .then((response) => {
        if(response.ok){
            response.json()
            .then((newUser) =>{ 
                // console.log(newUser)
                return  (newUser.data.attributes)
            })
        }else{
            response.json().then((errors)=>{
                // console.log(response)
                // console.log(errors)
                return (errors.exception)
                })
            }
        })
}