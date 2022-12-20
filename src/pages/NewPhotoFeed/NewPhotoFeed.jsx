import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as photosApi from '../../utilities/photos-api';
import '../NewPhotoFeed/NewPhotoFeed.css'

export default function NewPhotoFeed() {
    const [q, setq] = useState(''); 
    const [photos, setPhotos] = useState([]);
    const navigate = useNavigate();

    function handleChange(evt) {
        setq(evt.target.value)
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        const findImage = await photosApi.getImgsAPI(q);
        setPhotos(findImage);
    }

    async function handleAddToFeed(apiId) {
        await photosApi.addToFeed(apiId);
        navigate('/feed');
    }

    return (
        <>
            <label className="search-form">Disover images below</label>
            <form className="search-form" onSubmit={handleSubmit}>       
                <input 
                name="q"
                type="text"
                value={q}
                onChange={handleChange}
                required />
                <button type="submit">Search</button>
            </form>
            {photos.map((photo) => {
                return (
                    <div className="discover-container" key={photo.id}>
                        <img className="discover-imgs" src={photo.previewURL}  />
                        <button onClick={() => handleAddToFeed(photo.id)}>Add To Feed</button>
                    </div>
                );
            })}
        </>
    );
}