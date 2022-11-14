export const COMMENTS_DATA = '@commentsData';

const initialState = {
  message: '',
  calification: '',
};

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENTS_DATA:
      return {
        message: action.payload.message,
        calification: action.payload.calification,
      };
    default:
      return state;
  }
};
export default commentsReducer;
