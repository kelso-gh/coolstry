export default function ProfileForm({ user }) {
    return (
        <form>
        <div className="UserProfile">
            <ul>
                <li>Name: </li>
                <li>Location: {}</li>
                <li>Interests: {}</li>
            </ul>
        </div>
        </form>
    );
}