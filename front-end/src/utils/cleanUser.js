import { userSignOutAction } from '../redux/action/userDataAction';

const cleanUser = (dispatch, history, path) => {
  dispatch(userSignOutAction());
  localStorage.removeItem('persist:root');
  localStorage.removeItem('token');
  return history.push(path);
};

export default cleanUser;
