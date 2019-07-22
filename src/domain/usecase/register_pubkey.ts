import fetch from 'node-fetch';
import PublicKeyAddRequest from '&/model/AddPublicKeyRequest';

export default async (request: PublicKeyAddRequest, additionalHeaders: {} = {}): Promise<any> => {
    const url = 'https://api.github.com/user/keys';
    const result = await fetch(
        url,
        {
            method: 'POST',
            body: JSON.stringify(request),
            headers: {
                'Content-Type': 'application/json',
                ...additionalHeaders,
            },
        }
    );
    const body = await result.json();
    if (result.ok) {
        return body;
    }

    switch (result.status) {
        case 401:
            throw new Error('401: Authorization failed. Check your GitHub credentials.');

        case 422:
            throw new Error('422: Validation failed. Your key is already registered or maybe corrupt.');

        default:
            throw new Error(`${result.status}: ${body.message}`)
    }
}
