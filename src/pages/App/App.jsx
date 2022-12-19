import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import PhotoFeed from '../PhotoFeed/PhotoFeed';
import ProfilePage from '../ProfilePage/ProfilePage';
import NavBar from '../../components/NavBar/NavBar';
import NewPhotoFeed from '../NewPhotoFeed/NewPhotoFeed';
// import { useEffect } from 'react';
// import { set } from 'mongoose';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [profile, setProfile] = useState(getUser);

  
  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/photos" element={<PhotoFeed />} />
              <Route path="/profile" element={<ProfilePage profile = {profile} />} />
              <Route path="/photos/all" element={<NewPhotoFeed />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />

      }
    </main>
  );
}
