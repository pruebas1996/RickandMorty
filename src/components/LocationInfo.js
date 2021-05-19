const LocationInfo = ({ names,type,resident,dimension }) => {
    return (<>
        <h2>{names}</h2>
        <h2>{type}</h2>
        <h2>{resident}</h2>
        <h2>{dimension}</h2>
    </>)
}
export default LocationInfo;