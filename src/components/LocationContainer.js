import './Styles.css';
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
        <div className='container' >
            <div className='header'>                
            <div className='location'>
                    <LocationInfo names={`Location: ${name}`} type={`Type: ${type}`} resident={`Residents: ${resident}`} dimension={`Dimension: ${dimension}`} />
                </div>
                <div className='search'>
                    <SearchBox handleCLick={setSearchText} />
                </div>
            </div>
            <div className='content'>
                {getTenResidents().map(url => <ResidentContainer key={url} array={url} />)}
            </div>
        </div>
    );
}
export default LocationContainer;