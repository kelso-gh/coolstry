import { useState } from 'react';

export default function NewPhotoFeed() {
    const [q, setq] = useState(''); 
    const [photos, setPhotos] = useState([]);

    function handleChange(evt) {
        setq(evt.target.value)
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        const r = await fetch(`http://localhost:3001/api/photos/search?q=${q}`).then( res => res.json());
        setPhotos(r.hits);
    }

    return (
        <>
            <h1>Enter your search below!</h1>
            <form onSubmit={handleSubmit}>
                <input 
                name="q"
                type="text"
                value={q}
                onChange={handleChange}
                required />
                <button type="submit">Find Image</button>
                {photos.map((photo) => {
                    return (
                        <div key={photo.id}><img src={photo.previewURL} alt="" /></div>
                    );
                })}
            </form>
        </>
    );
}