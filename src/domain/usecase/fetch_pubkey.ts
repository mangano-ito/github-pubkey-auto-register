import fs from 'fs';

export default (path: string): Promise<string> => new Promise((resolve, reject) => {
    fs.readFile(
        path,
        (err, data) => err
            ? reject(err)
            : resolve(data.toString())
    )
});
