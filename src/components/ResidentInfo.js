
const ResidentInfo = ({name,status,image,origin,episodes})=>{
   
    return (
        <>
            <div className='card-img' >
            <img alt={name} src={image} />
            </div> 
            <div className='card-text' >
            <h5>{name}</h5>
            <h5>{status}</h5>   
            <h5>{origin}</h5>
            <h5>{episodes}</h5>
            </div>                  
        </>
    )
}
export default ResidentInfo;