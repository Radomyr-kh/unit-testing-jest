// TODO: Your test need to be here instead of fake tests
import {Component} from 'react';
import getGitHubUser from '../services/DataService/index';

import Info from '../components/Info/index';
import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';
import mockAxios from 'axios';

// TODO: Your test need to be here instead of fake tests
describe('InfoComponent tests', () => {
  // Test: render
  it('renders correctly', () => {
    const wrapper = renderer.create(<Info />);
    const testInstance = wrapper.root;
    expect(testInstance.findByProps()).toBeTruthy();
    // expect(wrapper.toJSON()).toMatchSnapshot();
  });

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

  // // !testing addsing state to the component
  // it('adds state to the component', () => {
  //   const myComponent = shallow(<MyComponent {...props} />);
  //   myComponent.setState({...mockState});
  //   const instance = myComponent.instance();
  //   expect(instance.state).toEqual(mockState);

  //   // you can then directly call instance methods - e.g. mocking
  //   // previous props/state to test changes are handled as expected
  //   instance.componentDidUpdate(prevProps, prevMockState);
  // });

  // !alternative test with a complete <div> from App's return
  // expect(result.props.children).toEqual([
  //   <div>
  //     <h3>GitHub User Info</h3>
  //     <ul>
  //       {Object.keys(this.state).map((i) => (
  //         <li key={i}>
  //           {i}: {this.state[i]}
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // ]);
  // });
});
