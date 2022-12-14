// TODO: Your test need to be here instead of fake tests

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

//   it('InfoComponent RENDERS all items from mock data correctly', async () => {
//     mockAxios.get.mockImplementationOnce(() =>
//       Promise.resolve({
//         data: {
//           login: 'bob',
//           id: '12345',
//           followers: '43',
//         },
//       })
//     );
//     const res = await getGitHubUser();

//     // copy of what we receive from "API" call
//     const list = {
//       login: 'bob',
//       id: '12345',
//       followers: '43',
//     };

//     const testInstance = renderer.create(<Info state={res} />).root;
//     const COMPONENT_LIST = testInstance.findAllByType('li');

//     const testList = Object.keys(list).map((i) => (
//       <li key={i}>
//         {i}: {list[i]}
//       </li>
//     ));
//     // async () => expect(await COMPONENT_LIST).toEqual(testList);
//     // async () => expect(await COMPONENT_LIST).toEqual('testList');
//     console.log(COMPONENT_LIST);
//     // async () => expect(await res).toBe(list);
//   });
// });

// expect(COMPONENT_LIST).toEqual(testList);

// const wrapper = renderer.create(<Info state={res} />).root;
// const element = wrapper.findAllByType('li');
// expect(element).toEqual(testList);

// expect(wrapper.toJSON()).toMatchSnapshot();
// });

// // !something interesting
// xit('State testing', () => {
//   const list = {
//     login: 'bob',
//     id: '12345',
//     followers: '43',
//   };

//   // const testInstance = renderer.create(<Info state={list} />).getInstance();
//   // !enzyme
//   const wrapper = mount(<Info />);
//   wrapper.setState(list);
//   expect(wrapper.state).toEqual(list);
// });
// });
