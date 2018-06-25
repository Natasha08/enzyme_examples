const defaultState = {
  token: ''
};

export default function auth(state=defaultState, { token, type }) {
  if (type === 'SET_USER') {
    return {...state, token};
  }

  return state;
}
