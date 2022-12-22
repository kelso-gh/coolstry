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
            <label className="search-title">Disover images below</label>
            <form className="search-form" onSubmit={handleSubmit}>       
                <input 
                name="q"
                type="text"
                value={q}
                onChange={handleChange}
                required />
                <button className="search-btn" type="submit">Search</button>
            </form>
            <div className="photo-feed-container">
            {photos.map((photo) => {
                return (
                    <div className="search-photo-feed" key={photo.id}>
                        <img className="photo-feed" src={photo.previewURL}  />
                        <button  className="search-btn" onClick={() => handleAddToFeed(photo.id)}>Add To Feed</button>
                    </div>
                );
            })}
            </div>
        </>
    );
}