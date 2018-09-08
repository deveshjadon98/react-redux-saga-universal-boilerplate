import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Sample.css';

class SampleComponent extends Component {
  render() {
    return (
      <div data-test="sample-container">
        Sample
      </div>
    );
  }
}

SampleComponent.propTypes = {
  data: PropTypes.object,
  requestData: PropTypes.func
};

export default SampleComponent;
