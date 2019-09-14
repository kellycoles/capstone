const remoteURL = "http://localhost:5002"

export default {
getAllItems() {
    return fetch(`${remoteURL}/categories`)
    
    .then(result => result.json())
}
}