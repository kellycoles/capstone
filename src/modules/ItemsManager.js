const remoteURL = "http://localhost:5002"

export default {
    getItem(id) {
        return fetch(`${remoteURL}/items/${id}`).then(result => result.json())
    },
    getUserItems(id, userId) {
        return fetch(`${remoteURL}/items/${id}&userId=${userId}`)
            .then(result => result.json())
    },

    getAllItems(userId) {
        return fetch(`${remoteURL}/items?userId=${userId}`).then(result => result.json())
    },
    deleteItem(id) {
        return fetch(`${remoteURL}/items/${id}`, {
            method: "DELETE"
        })
            .then(result => result.json())
    },
    updateItem(editedItem) {
        return fetch(`${remoteURL}/events/${editedItem.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedItem)
        }).then(data => data.json());
    },
    postEvent(newItem) {
        return fetch(`${remoteURL}/events`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newItem)
        }).then(data => data.json())
    }

}