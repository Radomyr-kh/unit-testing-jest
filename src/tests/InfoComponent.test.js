// TODO: Your test need to be here instead of fake tests
import Info from '../components/Info/index';
import renderer from 'react-test-renderer';

// TODO: Your test need to be here instead of fake tests
describe('App Component test', () => {
  it('renders correctly', () => {
    const wrapper = renderer.create(<Info />);
    expect(wrapper.toJSON()).toMatchSnapshot();
    // expect(App).toEqual(true);
  });
});
