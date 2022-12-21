import { useState, useEffect } from 'react';
import ProfileForm from '../../components/ProfileForm/ProfileForm'
import './ProfilePage.css'
import * as profilesApi from '../../utilities/profiles-api'

export default function ProfilePage({ profile, setProfile }) {
  const [showProfile, setShowProfile] = useState(true);

  useEffect(function() {
    async function getProfile() {
      const profile = await profilesApi.getProfile();
      setProfile(profile);
    }
    getProfile();
  }, []);

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

