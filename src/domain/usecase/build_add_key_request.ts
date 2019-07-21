import PublicKeyAddRequest from '&/model/AddPublicKeyRequest';

export default (title: string, pubkey: string): PublicKeyAddRequest => {
    return {
        title,
        key: pubkey,
    };
};
