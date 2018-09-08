import React from 'react';
import { shallow } from 'enzyme';

import { storeFactory } from '../../utils/testUtils';
import ConnectedSampleContainer from './SampleContainer';

/**
 * @function setup
 * @param {object} initialState - initial State for this setup.
 * @returns {ShallowWrapper}
 */
const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<ConnectedSampleContainer store={store} />).dive();
  console.log(wrapper.debug());
  return wrapper;
};

describe('redux properties', () => {
  
});
