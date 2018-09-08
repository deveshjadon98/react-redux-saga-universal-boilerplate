import { connect } from 'react-redux';
import { appActionCreator } from './../../actions';
import SampleComponent from './../../components/Sample/Sample';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    data: state.app.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestData: () => dispatch(appActionCreator.requestData()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SampleComponent));
