export const CAR_DATA = '@carData';
export const SET_PHOTO = '@carPhoto';

const initialState = {
  plate: '',
  transmision: '',
  bodywork: '',
  brand: '',
  model: '',
  price: '',
  avaiability: '',
  photo: '',
};

const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case CAR_DATA:
      return {
        plate: action.payload.plate,
        transmision: action.payload.transmision,
        bodywork: action.payload.bodywork,
        brand: action.payload.brand,
        model: action.payload.model,
        price: action.payload.price,
        avaiability: action.payload.avaiability,
        photo: action.payload.photo,
      };
    case SET_PHOTO:
      return {
        ...state,
        photo: action.payload,
      };
    default:
      return state;
  }
};

export default carReducer;
