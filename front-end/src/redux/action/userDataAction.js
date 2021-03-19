export const USER_DATA = 'USER_DATA';
export const USER_SIGN_OUT = 'USER_SIGN_OUT';

export const userDataAction = (userData) => ({
  type: USER_DATA,
  userData,
});

export const userSignOutAction = () => ({
  type: USER_SIGN_OUT,
})
