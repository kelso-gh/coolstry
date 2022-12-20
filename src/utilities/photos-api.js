import sendRequest from "./send-request";
const BASE_URL = '/api/photos';


export async function getImgsAPI(query) {
    return sendRequest(`${BASE_URL}/search?q=${query}`);
}

export async function getFeed() {
    return sendRequest(`${BASE_URL}/feeds`);
}

export async function addToFeed(apiId) {
    return sendRequest(`${BASE_URL}/feeds/${apiId}`, 'POST');
}

export async function removeFromFeed(apiId) {
    return sendRequest(`${BASE_URL}/feeds/${apiId}`, 'DELETE');
}
