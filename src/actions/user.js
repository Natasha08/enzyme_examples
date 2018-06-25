import {createAPIThunk} from 'api';

function receivedLogin({ token }) {
  return {type: 'SET_USER', token};
}

export default function loginUser(params, callback) {
  return createAPIThunk(function(api, dispatch) {
    return api.login(params).then(
      ({ data }) => {
        dispatch(receivedLogin(data));
        callback(data);
      },
      (error) => callback(error.response)
    );
  });
};
