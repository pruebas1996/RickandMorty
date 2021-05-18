const LocationInfo = ({ names,type,resident,dimension }) => {
    return (<div>
        <h2>{names}</h2>
        {/* <img src= {imgurl} ></img> */}
        <h2>{type}</h2>
        <h2>{resident}</h2>
        <h2>{dimension}</h2>
    </div>)
}
export default LocationInfo;