import ProfileForm from '../../components/ProfileForm/ProfileForm'
import './ProfilePage.css'

export default function ProfilePage() {

  return (
    <>
      <form>
      <h1>This is the profile page</h1>
      <ProfileForm />
      <button onClick="">Edit Profile</button> 
      </form>
    </>
  );
}

