import { useState } from 'react';

export default function NewPhotoFeed({ photos }) {
    const [findPhoto, setFindPhoto] = useState({
        photo: '',
    });

    function handleChange(evt) {
        setFindPhoto({ photo: evt.target.value })
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        setFindPhoto({photo: ''})
    }

    return (
        <>
            <h1>Enter your search below!</h1>
            <form>
                <input 
                type="text" 
                onChange={handleChange} 
                required />
                <button onClick={handleSubmit}>FIND</button>
            </form>
        </>
    );
}