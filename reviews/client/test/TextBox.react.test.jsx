import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import enzyme from 'enzyme';
import React from 'react';
import TextBox from '../TextBox.jsx';

enzyme.configure({ adapter: new Adapter() });


describe('TextBox testing suite', () => {
  it('should render one message', () => {
    const wrapper = shallow(<TextBox
      posted="2018-12-25"
      stars={3}
      message="Here is a review.  The text is long!"
    />);
    expect(wrapper.find('.Message').exists()).toEqual(true);
  });
});
