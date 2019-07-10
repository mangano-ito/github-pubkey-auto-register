import fetch from 'node-fetch';
import PublicKeyAddRequest from '../model/AddPublicKeyRequest';

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
    if (!result.ok) {
        // 401: Authorization failed.
        // 422: Validation failed.
        throw new Error(`${result.status}: ${body.message}`)
    }

    return body;
}
