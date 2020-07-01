import { LOADING, SUCCESS, FAILED, SUCCESS_PROVINCE } from '../action-types';

import {
  fetchAllData,
  fetchProvinceData,
  fetchProvinceNames,
  fetchDailyData,
} from '../../utils/fetch';

export function getProvinceData(province) {
  return async (dispatch) => {
    dispatch({
      type: LOADING,
      payload: {
        loading: true,
      },
    });
    try {
      const provinceData = await fetchProvinceData(province);
      console.log(provinceData);
      dispatch({
        type: SUCCESS_PROVINCE,
        payload: {
          provinceData,
          message: 'Province Data',
          loading: false,
        },
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: FAILED,
        payload: {
          message: err.message,
        },
      });
    }
  };
}

export function getAllData() {
  return async (dispatch) => {
    dispatch({
      type: LOADING,
      payload: {
        loading: true,
      },
    });
    try {
      const allData = await fetchAllData();
      const provinces = await fetchProvinceNames();
      const daily = await fetchDailyData();
      dispatch({
        type: SUCCESS,
        payload: {
          data: allData,
          loading: false,
          provinces,
          daily,
          message: 'Fetch success',
        },
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: FAILED,
        payload: {
          message: err.message,
          loading: false,
        },
      });
    }
  };
}
