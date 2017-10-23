//--------------------------
//--Expenses reducer
//--------------------------

const carsReducerDefault = [];
const carsReducer = (state = carsReducerDefault, action) => {
  switch (action.type) {
    case 'ADD_CAR':
      return [...state, action.expense];
    case 'EDIT_CAR':
      // let obj = state.filter(expense => expense.id === action.id)[0];
      // let reduceState = state.filter(expense => expense.id !== action.id);
      // return [...reduceState, {...obj, ...action.expenseObj}];

      return state.map(expense => {
        if (expense.id === action.id) {
          return {...expense, ...action.expenseObj}
        }
        return expense;
      });
    case 'REMOVE_CAR':
      return state.filter(expense => expense.id !== action.id)
    default:
      return state;
  }
};

export default carsReducer;