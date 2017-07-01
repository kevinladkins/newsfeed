import initialState from './initialState'

export default function channelsReducer(state = initialState.channels, action) {
  switch (action.type) {
    case 'GET_CHANNELS':
      return  action.payload
    default:
      return state;
  }
}
