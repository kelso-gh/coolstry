const BASE_URL = '/api/photos';
import sendRequest from "./send-request";

export async function getImgsAPI(query) {
    return sendRequest(`BASE_URL/search?q=${query}`);
}