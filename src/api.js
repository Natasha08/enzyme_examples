import axios from 'axios';

function authHeader(token){
  return _.assign({'Authorization': 'Bearer ' + token});
}

export default function API(dispatch, getState) {
  const token = _.isFunction(getState) ? getState().user.token : getState;
  const api = axios.create({
    baseURL: 'https://mycolofitness.herokuapp.com/',
    headers: authHeader(token)
  });

  const {get, post, patch} = api;

  return {
    login({username, password}) {
      return post('api/token', {username, password});
    }
  }
}

export function createAPIThunk(apiThunkCallback) {
  return (dispatch, getState) => apiThunkCallback(API(dispatch, getState), dispatch, getState);
}
