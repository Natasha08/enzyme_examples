import user from 'reducers/user';

export function process(state={}, action) {
  return {
    user: user(state.user, action)
  };
}

const rootReducer = (state={}, action) => {
  switch (action.type) {
    case 'INIT':
      return process({...action.state}, action);
    default:
      return process(state, action);
  }
};

export default rootReducer;
