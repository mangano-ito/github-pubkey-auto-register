import get_default_pub_key_path from '../src/domain/usecase/get_default_pub_key_path';

describe('get_default_pub_key_path', () => {
    it('should make user default pubkey path', () => {
        process.env['HOME'] = '/home/a_user/';
        const actual = get_default_pub_key_path();
        const expected = '/home/a_user//.ssh/id_rsa.pub';
        expect(actual).toBe(expected);
    });
});

