import { useState } from 'react';
import ProfileForm from '../../components/ProfileForm/ProfileForm'
import './ProfilePage.css'

export default function ProfilePage({ profile, setProfile }) {
  const [showProfile, setShowProfile] = useState(true);

  return (
    <>
      <button 
      onClick={() => setShowProfile (!showProfile)}>Edit Profile</button> 
      { showProfile ?
      <div className="profile-display">
      {profile.name}
      {profile.location}
      {profile.interests}
        </div>
        :
        <ProfileForm profile={profile} setProfile = {setProfile}/>
      }
    </>
  );
}

