
const ResidentInfo = ({name,status,image,origin,episodes})=>{
   
    return (
        <div>
            <h5>{name}</h5>
            <h5>{status}</h5>   
            <h5>{origin}</h5>
            <h5>{episodes}</h5>
            <img alt={name} src={image} />
        </div>
    )
}
export default ResidentInfo;