// describe('just fake tests for App Component', () => {
//   it('1st fake test of App Component', () => {
//     // expect(true).toEqual(false);
//     expect(true).toEqual(true);
//   });
// });

import App from '../components/App/index';
import Info from '../components/Info/index';

import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';

// TODO: Your test need to be here instead of fake tests
describe('App Component tests', () => {
  // Test: render
  it('renders correctly', () => {
    const wrapper = renderer.create(<App />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  // Test: className = "App"
  it('className = "App"', () => {
    const wrapper = renderer.create(<App />);
    const instance = wrapper.root;
    const element = instance.findByType('div');
    expect(element.props.className.includes('App')).toBe(true);
  });

  // Test: h1 = "Hello World!"
  it('h1 = "Hello World!"', () => {
    const wrapper = renderer.create(<App />);
    const instance = wrapper.root;
    const element = instance.findByType('h1');
    expect(element.props.children).toEqual('Hello World!');
  });

  // Test: App component contains subcomponents
  it('App component contains subcomponents', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<App />);
    const result = renderer.getRenderOutput();

    // test with arrayContaining()
    const expected = [<Info user='mplesha' />, <Info user='yurkovskiy' />];
    expect(result.props.children).toEqual(expect.arrayContaining(expected));

    // !alternative test with a complete <div> from App's return
    // expect(result.props.children).toEqual([
    //   <h1>Hello World!</h1>,
    //   <Info user='yurkovskiy' />,
    //   <Info user='mplesha' />,
    // ]);
  });
});
