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
        <>
            <ResidentInfo name={name} status={status} image={image} origin={origin} episodes={episodes} />
        </>
    )
}
export default ResidentContainer;