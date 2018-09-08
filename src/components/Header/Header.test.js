import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../utils/testUtils';

import { Header } from './Header';

const defaultProps = {};
/**
 * Factory function to create a ShallowWrapper for the Header component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @param {object} state - Initial state for setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Header {...setupProps} />);
};

/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */

test('renders component header without crashing', () => {
  const wrapper = setup();
  const appHeader = findByTestAttr(wrapper, 'component-header');
  expect(appHeader.length).toBe(1);
});
