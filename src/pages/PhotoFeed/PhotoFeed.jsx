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

  return (
    <>
    <h1>This is the Photo Feed</h1>
    
    </>
  );
}