// TODO: Your test need to be here instead of fake tests

import mockAxios from 'axios';
import getGitHubUser from '../services/DataService/index';

describe('testing api requests', () => {
  // const user = 'yurkovskiy';
  it('should return user information by specified id', async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: {
          response: 'SomeString',
        },
      })
    );
    const res = await getGitHubUser();
    expect(res.data.response).toContain('SomeString');
  });
});
