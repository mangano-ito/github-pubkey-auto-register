export default (): {} => {
    const id = process.env['GITHUB_USER_ID'] || null;
    const token = process.env['GITHUB_PASSWORD'] || process.env['GITHUB_TOKEN'] || null;
    if (!id || !token) {
        throw new Error('GitHub User ID (GITHUB_USER_ID), Password (GITHUB_PASSWORD) or Access Token (GITHUB_TOKEN) environmental variable not provided.');
    }
    const encodedValue = Buffer.from(`${id}:${token}`).toString('base64');
    const headers = {
        'Authorization': `Basic ${encodedValue}`,
    };

    return headers;
};
