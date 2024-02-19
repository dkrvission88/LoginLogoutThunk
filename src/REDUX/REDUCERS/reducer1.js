import * as constant from '../Constant/constant'

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const reducer1 = (state = initialState, action) => {
  switch (action.type) {
    case constant.LOGIN_REQUEST:
      return { ...state, loading: true, error: null };
    case constant.LOGIN_SUCCESS:
      return { ...state, loading: false, user: action.payload.user };
    case constant.LOGIN_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    case constant.LOGOUT:
      return { ...state, user: null };
    default:
      return state;
  }
};

export default reducer1;