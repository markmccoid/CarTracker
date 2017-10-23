import moment from 'moment';
import { SET_TEXT_FILTER, SORTBY_DATE, SORTBY_AMOUNT, SET_START_DATE, SET_END_DATE } from '../actions/actionTypes';
//--------------------------
//--Filters reducer
//--------------------------
const filtersReducerDefault = {
  text: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
};
export default (state = filtersReducerDefault, action) => {
  switch (action.type) {
    case SET_TEXT_FILTER:
      return {...state, text: action.text};
    case SORTBY_DATE:
      return {...state, sortBy: 'date'};
    case SORTBY_AMOUNT:
      return {...state, sortBy: 'amount'};
    case SET_START_DATE:
      return {...state, startDate: action.startDate};
    case SET_END_DATE:
      return {...state, endDate: action.endDate};
    default:
      return state;
  }
};