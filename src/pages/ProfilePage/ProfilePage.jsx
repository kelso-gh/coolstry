import { useState } from 'react';
import ProfileForm from '../../components/ProfileForm/ProfileForm'
import './ProfilePage.css'

export default function ProfilePage({ profile }) {
  const [showProfile, setShowProfile] = useState(true);

  return (
    <>
      <button 
      onClick={() => setShowProfile (!showProfile)}>Edit Profile</button> 
      { showProfile ?
      <>
      {profile.profilePicturURL}
      {profile.name}
      {profile.location}
      {profile.interests}
        </>
        :
        <ProfileForm profile={profile}/>
      }
    </>
  );
}

