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
      storePersonalData: {
        storeName:null,
      },
      storeColorsData: {
        primaryColor: null,
        secondaryColor: null,
      },
      carrosselImages: {
        carrosselImgUrls: [],
      },
      logoImage: {
        logoImgUrls: [],
      }
    },
    accountData: { email: null },
    addresses: [],
    cardData: [],
  }
};

const userDataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_SIGN_OUT:
      return INITIAL_STATE;
    case USER_DATA:
      return {
        ...state,
        userData: { ...state.userData, ...action.userData },
      };
    default: return state;
  }
};

export default userDataReducer;
