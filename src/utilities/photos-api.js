import sendRequest from "./send-request";
const BASE_URL = '/api/photos';


export async function getImgsAPI(query) {
    return sendRequest(`${BASE_URL}/search?q=${query}`);
}