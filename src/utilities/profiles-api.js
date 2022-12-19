import sendRequest from './send-request';
const BASE_URL = '/api/profiles'

export async function create(data) {
    return sendRequest(BASE_URL, 'POST', data);
}

export async function update() {
    return sendRequest(BASE_URL, 'PUT', data);
}