import './Styles.css';
import { useEffect, useState } from 'react';
import ResidentInfo from './ResidentInfo';

const ResidentContainer = ({ array }) => {
    const [name, setName] = useState('');
    const [status, setStatus] = useState('');
    const [image, setImage] = useState('');
    const [origin, setOrigin] = useState('');
    const [episodes, setEpisodes] = useState('');

    useEffect(() => {
        if (array) {
           fetch(array)
           .then(res => res.json())
           .then(data => {
               setName(data.name);
               setStatus(data.status);
               setOrigin(data.origin.name);
               setEpisodes(data.episode.length);
               setImage(data.image);
           })
      
        }
    }, [array])
    return (
    <div className='card'>
          <ResidentInfo name={`Name: ${name}`} status={`Status: ${status}`} image={image} origin={`Origin: ${origin}`} episodes={`Episodes: ${episodes}`} />    
    </div>
          
    )
}
export default ResidentContainer;