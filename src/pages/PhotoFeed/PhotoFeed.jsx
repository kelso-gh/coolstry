import { useState, useEffect} from 'react';
import * as photosApi from '../../utilities/photos-api'
import '../PhotoFeed/PhotoFeed.css'

export default function PhotoFeed({ user }) {
  const [photos, setPhotos] = useState([]);

  useEffect(function() {
    async function getFeed() {
      const photos = await photosApi.getFeed();
      setPhotos(photos);
    }
    if (user) getFeed();
  }, [user]);
  
    async function handleRemovePhoto(apiId) {
      const updatedPhotos = await photosApi.removeFromFeed(apiId);
      setPhotos(updatedPhotos);
      window.location.reload(false);
    }

  return (
    <div className="photo-feed-container">
    {photos.map((photo) => {
                return (
                    <div key={photo._id}>
                        <img className="photo-feed" src={photo.photo}  />
                    <button className="remove-btn" onClick={() => handleRemovePhoto(photo._id)}>Remove From Feed</button>
                    </div>         
                );
            })}
    </div>
  );
}