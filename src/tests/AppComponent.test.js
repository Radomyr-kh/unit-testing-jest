// TODO: Your test need to be here instead of fake tests

import App from '../components/App/index';
import renderer from 'react-test-renderer';

describe('App Component tests', () => {
  // Test: render
  it('renders correctly', () => {
    const wrapper = renderer.create(<App />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
