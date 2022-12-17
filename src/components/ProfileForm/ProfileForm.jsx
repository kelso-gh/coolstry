import '../ProfileForm/ProfileForm.css'
import * as usersAPI from '../../utilities/users-api'


export default function ProfileForm() {
    const [users, setUsers] = useState('');

    async function handleSubmit(evt) {
        evt.preventDefault();
        const findUser = await usersAPI.getUsersAPI();
        setUsers(findUser);
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