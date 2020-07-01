import { LOADING, SUCCESS, FAILED, SUCCESS_PROVINCE } from '../action-types';

const initialState = {
  data: {},
  daily: [],
  provinces: [],
  loading: false,
  message: '',
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOADING:
      return {
        ...state,
        loading: payload.loading,
      };

    case SUCCESS:
      return {
        ...state,
        data: payload.data,
        loading: payload.loading,
        provinces: payload.provinces,
        message: payload.message,
        daily: payload.daily,
      };
    case SUCCESS_PROVINCE:
      return {
        ...state,
        data: payload.provinceData,
        loading: payload.loading,
        message: payload.message,
      };
    case FAILED:
      return {
        ...state,
        message: payload.message,
        loading: payload.loading,
        data: { sembuh: 0, aktif: 0, meninggal: 0 },
      };
    default:
      return state;
  }
}
