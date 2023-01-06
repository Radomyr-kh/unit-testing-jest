import getGitHubUser from '../services/DataService/index';
import Info from '../components/Info/index';
import renderer from 'react-test-renderer';
import mockAxios from 'axios';

describe('Tests for Info Component', () => {
  let wrapper;
  let userName;

  beforeEach(() => {
    userName = 'some-name';
    wrapper = renderer.create(<Info user={userName} />);
  });

  it('New InfoComponent should be an instance of InfoComponent', () => {
    expect(new Info()).toBeInstanceOf(Info);
  });

  it('renders correctly', () => {
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('renders h3 = "GitHub User Info"', () => {
    const instance = wrapper.root;
    const element = instance.findByType('h3');
    expect(element.props.children).toEqual('GitHub User Info');
  });

  it('component contains user prop', () => {
    const tree = wrapper.toTree();
    expect(tree.props.user).toEqual(userName);
  });

  it('error is defined', () => {
    const instance = wrapper.getInstance();
    expect(instance.state.error).toBeDefined();
  });

  // mock axios
  it('InfoComponent renders all items from mock data correctly', async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: {
          login: 'someLogin',
          id: '12345',
          followers: '43',
        },
      })
    );
    const res = await getGitHubUser();

    const list = {
      login: 'someLogin',
      id: '12345',
      followers: '43',
    };
    expect(res.data).toEqual(list);
  });
});
