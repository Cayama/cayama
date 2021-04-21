import { userSignOutAction } from '../redux/action/userDataAction';

const cleanUser = (dispatch, history, path) => {
  history.push(path);
  localStorage.removeItem('token');
  localStorage.removeItem('persist:root');
  return dispatch(userSignOutAction());
};

export default cleanUser;
