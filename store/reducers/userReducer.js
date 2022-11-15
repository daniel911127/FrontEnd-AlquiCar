export const MENU_VALIDATOR = '@userValidator';
export const USER_LOGIN = '@userLogin';
export const DATA_USER = '@userData';

const initialState = {
  dropdown: false,
  rol: '',
  name: '',
  lastname: '',
  identification: '',
  driverlicense: '',
  email: '',
  password: '',
  isLogin: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case MENU_VALIDATOR:
      return {
        ...state,
        dropdown: !state.dropdown,
      };
    case USER_LOGIN:
      return {
        ...state,
        isLogin: !state.isLogin,
      };
    case DATA_USER:
      return {
        rol: action.payload.rol,
        name: action.payload.name,
        lastname: action.payload.lastname,
        identification: action.payload.identification,
        driverlicense: action.payload.driverlicense,
        email: action.payload.email,
        password: action.payload.password,
      };
    default:
      return state;
  }
};

export default userReducer;
