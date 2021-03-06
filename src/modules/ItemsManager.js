const remoteURL = "http://localhost:5002"

export default {
    getItem(id) {
        return fetch(`${remoteURL}/items/${id}`).then(result => result.json())
    },
    getItems() {
        return fetch(`${remoteURL}/items?_sort=name`)
            .then(result => result.json())
    },

    getAllItems(userId) {
        return fetch(`${remoteURL}/items?userId=${userId}&_expand=category`)
            .then(result => result.json())
    },
    // getAllCategoryItems(userId, categoryId) {
    //     return fetch(`${remoteURL}/items?userId=${userId}&_expand=category&categoryId=${categoryId}`)
    //         .then(result => result.json())
    // },
    deleteItem(id) {
        return fetch(`${remoteURL}/items/${id}`, {
            method: "DELETE"
        })
            .then(result => result.json())
    },
    updateItem(editedItem) {
        return fetch(`${remoteURL}/items/${editedItem.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedItem)
        }).then(data => data.json());
    },
    postItem(newItem) {
        return fetch(`${remoteURL}/items`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newItem)
        }).then(data => data.json())
    }

}