import build_add_key_request from '../src/domain/usecase/build_add_key_request';

describe('build_add_key_request', () => {
    it('should make request object', () => {
        const actual = build_add_key_request('title', 'pubKeyPath');
        const expected = {
            title: 'title',
            key: 'pubKeyPath',
        };
        expect(actual).toStrictEqual(expected);
    });
});
