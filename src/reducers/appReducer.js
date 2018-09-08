import ACTIONS from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case ACTIONS.REQUEST_DATA:
      return { ...state };
    case ACTIONS.RECEIVE_DATA:
      return { ...state, data: action.payload };
    default:
      return { ...state };
  }
};
