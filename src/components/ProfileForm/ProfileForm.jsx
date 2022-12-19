import '../ProfileForm/ProfileForm.css'
import { useState} from 'react';
import * as profilesAPI from '../../utilities/profiles-api'


export default function ProfileForm({ profile, setProfile }) {
   const [profileFormData, setProfileFormData] = useState({
    name: profile.name
   });

   function handleChange(evt) {
    setProfileFormData({[evt.target.name]:evt.target.value})
   }

   async function handleSubmit(evt) {
    evt.preventDefault();
    const updateProfile = await profilesAPI.update(profileFormData);
    setProfile(updateProfile);
   }
   
return (
        
    <form className="profile-form"
        onSubmit={handleSubmit}>
        <ul>
            <li>Photo: <input type="text"></input></li>
            <li>Name: <input 
            type="text" 
            value={profileFormData.name}
            name="name"
            onChange={handleChange}
            /> </li>
            <li>Location: <input type="text" /></li>
            <li>Interests: <input type="text" /></li>
            <button type="submit">Save Changes</button>
        </ul>
    </form>
    );
}