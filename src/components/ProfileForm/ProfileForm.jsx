import '../ProfileForm/ProfileForm.css'

export default function ProfileForm({ user }) {
    return (
        <div className="profile-edit">
            <ul>
                <li>Name: <input type="text" /> </li>
                <li>Location: <input type="text" /></li>
                <li>Interests: <input type="text" /></li>
                <button>Save Changes</button>
            </ul>
        </div>
    );
}