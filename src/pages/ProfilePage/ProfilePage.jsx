import { useState } from 'react';
import ProfileForm from '../../components/ProfileForm/ProfileForm'
import ProfileInfo from '../../pages/ProfileInfo/ProfileInfo'
import './ProfilePage.css'

export default function ProfilePage() {
  const [showProfile, setShowProfile] = useState(true);
  return (
    <>
      <button 
      onClick={() => setShowProfile (!showProfile)}>Edit Profile</button> 
      { showProfile ?
        <ProfileInfo />
        :
        <ProfileForm />
      }
    </>
  );
}

