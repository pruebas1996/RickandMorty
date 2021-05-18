const rickUrl = 'https://rickandmortyapi.com/api/location/?name='

const getLocation = (name) => {
    
    const promise = fetch(`${rickUrl}${encodeURIComponent(name.toLowerCase())}`)
    return promise.then(res => res.json())
}
export default getLocation;