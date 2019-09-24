
const remoteURL = "http://localhost:5002"

export default {
    getItem(id) {
        return fetch(`${remoteURL}/maintenanceItems/${id}`).then(result => result.json())
    },
    getMaintenanceItems() {
        return fetch(`${remoteURL}/maintenanceItems?&_expand=item`) 
            .then(result => result.json())
    },
//below get all maintenance on one item
    getAllMaintenceItem(itemId) {
        return fetch(`${remoteURL}/items/${itemId}?_embed=maintenanceItems`) 
        .then(result => result.json())
    },

    //post/edit/delete
    deleteMaintenanceItem(id) {
        return fetch(`${remoteURL}/maintenanceItems/${id}`, {
            method: "DELETE"
        })
            .then(result => result.json())
    },
    updateMaintenanceItem(editedItem) {
        return fetch(`${remoteURL}/maintenanceItems/${editedItem.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedItem)
        }).then(data => data.json());
    },
    postMaintenanceItem(newItem) {
        return fetch(`${remoteURL}/maintenanceItems/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newItem)
        }).then(data => data.json())
    }

}