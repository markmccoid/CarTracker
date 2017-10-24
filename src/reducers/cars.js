//--------------------------
// -- Car Reducer
//--------------------------

const carsReducerDefault = [];
const carsReducer = (state = carsReducerDefault, action) => {
  switch (action.type) {
    case 'ADD_CAR':
      return [...state, action.carObj];
    case 'EDIT_CAR':
      return state.map((car) => {
        if (car.id === action.id) {
          return { ...car, ...action.carObj }
        }
        return car;
      });
    case 'REMOVE_CAR':
      return state.filter(car => car.id !== action.id);
    default:
      return state;
  }
};

export default carsReducer;
