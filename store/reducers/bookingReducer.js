export const BOOKING_DATES = '@bookingDates';
export const BOOKING_DATA = '@bookingData';

const initialState = {
  dates: [null, null],
  isPaid: false,
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOKING_DATES:
      return {
        ...state,
        dates: action.payload,
      };
    case BOOKING_DATA:
      return {
        dates: action.payload.dates,
        isPaid: action.payload.ispaid,
      };
    default:
      return state;
  }
};

export default bookingReducer;
