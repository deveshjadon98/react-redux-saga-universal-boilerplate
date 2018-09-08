import ACTIONS from '../constants/actionTypes';

export const configLoaded = config => ({
    type: ACTIONS.CONFIG_LOADED,
    config: config
});

export const requestData = () => ({
    type: ACTIONS.REQUEST_DATA
})

export const receiveData = payload => ({
    type: ACTIONS.RECEIVE_DATA,
    payload: payload
});