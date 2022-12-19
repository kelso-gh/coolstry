import sendRequest from './send-request';
const BASE_URL = '/api/profiles'

export async function create(profileData) {
    return sendRequest(BASE_URL, 'POST', profileData);
}

export async function update(profileData) {
    return sendRequest(BASE_URL, 'PUT', profileData);
}