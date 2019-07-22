import build_auth_by_env_token from '../src/domain/usecase/build_auth_by_env_token';

describe('build_auth_by_env_token', () => {
    it('should make auth header from user ID and password', () => {
        process.env['GITHUB_USER_ID'] = 'tester';
        process.env['GITHUB_PASSWORD'] = 'password';
        delete process.env['GITHUB_TOKEN'];
        const actual = build_auth_by_env_token();
        const expected = {
            Authorization: 'Basic dGVzdGVyOnBhc3N3b3Jk',
        };
        expect(actual).toStrictEqual(expected);
    });

    it('should make auth header from user ID and access token', () => {
        process.env['GITHUB_USER_ID'] = 'tester';
        delete process.env['GITHUB_PASSWORD'];
        process.env['GITHUB_TOKEN'] = 'my_personal_token';
        const actual = build_auth_by_env_token();
        const expected = {
            Authorization: 'Basic dGVzdGVyOm15X3BlcnNvbmFsX3Rva2Vu',
        };
        expect(actual).toStrictEqual(expected);
    });

    it('should throw exception when no information provided', () => {
        delete process.env['GITHUB_USER_ID'];
        delete process.env['GITHUB_PASSWORD'];
        delete process.env['GITHUB_TOKEN'];
        expect(build_auth_by_env_token).toThrowError();
    });
});

