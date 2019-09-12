const remoteURL = "http://localhost:5002"

export default {

    get(id) {
        return fetch (`${remoteURL}/users/${id}`)
        .then(event => event.json())
    },

    createNewUser(user) {
        return fetch (`${remoteURL}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        }).then(results => results.json()) 

    }
}