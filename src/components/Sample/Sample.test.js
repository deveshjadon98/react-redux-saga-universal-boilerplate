import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../utils/testUtils';
import SampleComponent from './Sample';

const defaultProps = {
};

/**
 * Factory function to create a ShallowWrapper for the Ratings component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @param {object} state - Initial state for setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Ratings {...setupProps} />);
};

/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */

describe('SampleComponent', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = setup();
  });

  test('renders Sample container without crashing', () => {
    const SampleComponent = findByTestAttr(wrapper, 'sample-container');
    expect(SampleComponent.length).toBe(1);
  });
});
