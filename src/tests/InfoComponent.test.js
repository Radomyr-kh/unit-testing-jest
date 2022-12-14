import getGitHubUser from '../services/DataService/index';
import Info from '../components/Info/index';
import renderer from 'react-test-renderer';
import mockAxios from 'axios';

//! для Info:
//! 1) чи рендериться статична інформація
//! 2) чи рендериться те, що видає мок сервіса

describe('InfoComponent tests', () => {
  // Test: new Info class is an instance of Info
  it('New InfoComponent should be the instance of InfoComponent', () => {
    expect(new Info()).toBeInstanceOf(Info);
  });

  // Test: render
  it('renders correctly', () => {
    const wrapper = renderer.create(<Info />);
    const testInstance = wrapper.root;
    // expect(testInstance.findByProps()).toBeTruthy();
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  // !чи рендериться статична інформація
  it('renders h3 = "GitHub User Info"', () => {
    const wrapper = renderer.create(<Info />);
    const instance = wrapper.root;
    const element = instance.findByType('h3');
    expect(element.props.children).toEqual('GitHub User Info');
  });

  // ! чи рендериться те, що видає мок сервіса
  it('mock axios returns mock data', async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: {
          login: 'bob',
          id: '12345',
          followers: '43',
        },
      })
    );
    const res = await getGitHubUser();
    expect(res.data.login).toContain('bob');
  });

  // ! data contains mock data object
  // just static test
  // it('render corectly', () => {
  //   const wrapper = renderer.create(<Info user='yurkovskiy' />).root;
  //   expect(wrapper.toJSON()).toMatchSnapshot();
  // });

  // ! fake axios return correct info
  it('InfoComponent RENDERS all items from mock data correctly', async () => {
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
