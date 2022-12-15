const BASE_URL = '/api/photos';
import sendRequest from "./send-request";

export async function getImgsAPI() {
    return sendRequest(BASE_URL);
}