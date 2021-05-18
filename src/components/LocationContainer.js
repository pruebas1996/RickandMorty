import { useEffect, useState } from 'react';
import LocationInfo from './LocationInfo';
import SearchBox from './SearchBox';
import ResidentContainer from './ResidentContainer';
const LocationContainer = ({ getLocation }) => {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [resident, setResident] = useState('');
    const [dimension, setDimension] = useState('');
    const [residentUrl, setResidentUrl] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [getData, setGetData] = useState();

    useEffect(() => {
        getLocation(searchText).then(data => {
            console.log(data.results)
            setGetData(data.results[Math.floor(Math.random() * data.results.length)])
        });
    }, [searchText, getLocation])

    useEffect(() => {
        if (getData) {
            setName(getData.name);
            setType(getData.type)
            setResident(getData.residents.length)
            setDimension(getData.dimension)
            setResidentUrl(getData.residents)
        }
    }, [getData])

    const getTenResidents = () => {
        if (residentUrl.length > 10) {
            const newArray = residentUrl.slice(0, 10);
            return newArray;
        }
        return residentUrl
    }

    return (
        <div >
            <SearchBox handleCLick={setSearchText} />
            <LocationInfo names={name} type={type} resident={resident} dimension={dimension} />

            {  getTenResidents().map(url => <ResidentContainer key={url} array={url} />)}

        </div>
    );
}
export default LocationContainer;