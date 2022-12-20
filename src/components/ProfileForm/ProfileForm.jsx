import '../ProfileForm/ProfileForm.css'
import { useState} from 'react';
import * as profilesAPI from '../../utilities/profiles-api'


export default function ProfileForm({ profile, setProfile }) {
   const [profileFormData, setProfileFormData] = useState({
    name: profile.name,
    location: profile.location,
    interests: profile.interests
   });

   function handleChange(evt) {
    setProfileFormData({...profileFormData, [evt.target.name]:evt.target.value})
    // console.log({[evt.target.name]:evt.target.value});
   }

   async function handleSubmit(evt) {
    evt.preventDefault();
    const updateProfile = await profilesAPI.update(profileFormData);
    console.log(updateProfile);
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
            <li>Location: <input 
             type="text" 
             value={profileFormData.location}
             name="location"
             onChange={handleChange}/></li>
            <li>Interests: <input 
             type="text" 
             value={profileFormData.interests}
             name="interests"
             onChange={handleChange} /></li>
            <button type="submit">Save Changes</button>
        </ul>
    </form>
    );
}