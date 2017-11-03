//This file will hold the intermediate API between redux thunks and firebase
import database from '../firebase/firebase';

/**
 *
 * @param {string} uid - Users id once authenticated with firebase
 * @param {object} carObj - Car object to add
 * @returns {string} ref.key - return the new key (carid) created by firebase
 */
export const addCar = (uid, carObj) => database.ref(`users/${uid}/cars`).push(carObj)
  .then(ref => ref.key);

export const editCar = (uid, id, carObj) => {
  return database.ref(`users/${uid}/cars/${id}`).update(carObj);
};

export const loadCars = (uid) => {
  console.log('loadCars');
  return database.ref(`users/${uid}/cars`).once('value')
    .then((snapshot) => {
      const carData = snapshot.val() || {};
      const cars = Object.keys(carData).map(carId => ({ id: carId, ...carData[carId] }));
      return cars;
    })
    .catch((err) => console.log('Error loading cars', err));
};
