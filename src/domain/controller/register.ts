import fetch_pubkey from '&/usecase/fetch_pubkey';
import register_pubkey from '&/usecase/register_pubkey';
import build_add_key_request from '&/usecase/build_add_key_request';
import parse_options from '&/usecase/parse_options';
import build_auth_by_env_token from '&/usecase/build_auth_by_env_token';

export default async (): Promise<void> => {
    const options = parse_options();
    const pubKey = await fetch_pubkey(options.pubKeyPath);
    const request = build_add_key_request(options.title, pubKey);
    const auth = build_auth_by_env_token();
    try {
        await register_pubkey(request, auth);
    } catch (e) {
        console.error(`public key registration failed!`);
        console.error(e.message);
        return;
    }
    console.info('your public key is successfully registered!');
};
