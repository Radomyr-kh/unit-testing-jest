import App from '../components/App/index';
import renderer from 'react-test-renderer';

describe('Tests for App Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = renderer.create(<App />);
  });

  it('renders correctly', () => {
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it("renders H1 element with 'Hello World' ", () => {
    const root = wrapper.root;
    expect(root.findByType('h1')).toBeTruthy();
  });
});
