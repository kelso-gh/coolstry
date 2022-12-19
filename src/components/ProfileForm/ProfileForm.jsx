import '../ProfileForm/ProfileForm.css'
import * as profilesAPI from '../../utilities/profiles-api'


export default function ProfileForm() {
    const [profiles, setProfiles] = useState('');

    async function handleSubmit(evt) {
        evt.preventDefault();
        const profileData = await create.profilesAPI();
        setProfiles(profileData);
    }

return (
        
    <form className="profile-edit" onSubmit={handleSubmit}>
        <ul>
            <li>Name: <input type="text" required /> </li>
            <li>Location: <input type="text" /></li>
            <li>Interests: <input type="text" /></li>
            <button>Save Changes</button>
        </ul>
    </form>
    );
}