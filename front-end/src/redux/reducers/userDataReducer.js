import { USER_DATA, USER_SIGN_OUT } from '../action/userDataAction';

const INITIAL_STATE = {
  userData: {
    personalData: {
      firstName: null,
      lastName: null,
      email: null,
      cpf: null,
      phone: null,
    },
    storeData: {
      storeName: null,
      phone: null,
      cnpj: null,
    },
    accountData: { email: null },
    addresses: [],
    cardData: [],
  }
};

const userDataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_SIGN_OUT:
      return {
        userData: {
          personalData: {
            firstName: null,
            lastName: null,
            email: null,
            cpf: null,
            phone: null,
          },
          storeData: {
            storeName: null,
            phone: null,
            cnpj: null,
          },
          accountData: { email: null },
          addresses: [],
          cardData: [],
        }
      }
    case USER_DATA:
      return {
        ...state,
        userData: { ...state.userData, ...action.userData },
      };
    default: return state;
  }
};

export default userDataReducer;
