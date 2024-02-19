import * as constant from  "../Constant/constant";



export const login = (username, password) => {
  return async (dispatch) => {
    dispatch({ type: constant.LOGIN_REQUEST });
    try {
     
      const user = await fakeApiLogin(username, password);
      dispatch({ type: constant.LOGIN_SUCCESS, payload: { user } });
    } catch (error) {
      dispatch({ type: constant.LOGIN_FAILURE, payload: { error } });
    }
  };
};

export const logout = () => {
  return { type: constant.LOGOUT };
};


const fakeApiLogin = async (username, password) => {
  
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return { username }; 
};