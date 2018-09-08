import ACTIONS from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case ACTIONS.CONFIG_LOADED:
      return { ...state, ...action.config };
    default:
      return { ...state };
  }
};
