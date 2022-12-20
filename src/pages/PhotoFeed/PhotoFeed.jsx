import { useState, useEffect} from 'react';
import * as photosApi from '../../utilities/photos-api'

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
      console.log(apiId)
      const updatedPhotos = await photosApi.removeFromFeed(apiId);
      setPhotos(updatedPhotos);
      window.location.reload(false);
    }

  return (
    <>
    <h1>This is the Photo Feed</h1>
    {photos.map((photo) => {
                return (
                    <div className="photo-feed-container" key={photo.id}>
                        <img className="photo-feed" src={photo.photo}  />
                        <button onClick={() => handleRemovePhoto(photo._id)}>Remove From Feed</button>
                    </div>
                );
            })}
    </>
  );
}