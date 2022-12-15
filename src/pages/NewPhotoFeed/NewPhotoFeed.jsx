export default function NewPhotoFeed() {
    function handleSubmit(evt) {
        evt.preventDefault();
    }

    function handleChange(evt) {

    }

    return (
        <>
            <h1>Enter your search below!</h1>
            <form>
                <input type="text" onChange={handleChange} name=""></input>
                <button onClick={handleSubmit}>FIND</button>
            </form>
        </>
        // handleSubmit preventDefault
    );
}