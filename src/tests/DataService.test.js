import mockAxios from 'axios';
import getGitHubUser from '../services/DataService/index';

describe('Data Service Tests', () => {
  // mock data
  const someGitHubUser = {
    login: 'someuser',
    id: 123,
  };
  let response;

  beforeEach(() => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: someGitHubUser,
      })
    );
  });

  it('axiox.get should be called 1 time', async () => {
    response = await getGitHubUser('someuser');
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
  });

  it('axiox.request in DataService should return data', async () => {
    response = await getGitHubUser('someuser');
    expect(response.data.login).toBe('someuser');
    expect(response.data).toEqual({...someGitHubUser});
  });
});
