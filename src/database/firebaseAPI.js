//This file will hold the intermediate API between redux thunks and firebase
import database from '../firebase/firebase';

//============================================
//-Initialize App Data
//============================================
export const initializeData = (uid) => {
  return database.ref(`users/${uid}`).once('value')
    .then((snapshot) => {
      const { services, cars } = snapshot.val() || { services: {}, cars: {} };
      console.log(services);
      console.log(cars);
      const carsObj = Object.keys(cars).map(carId => ({ id: carId, ...cars[carId] }));
      const servicesObj = Object.keys(services).map(serviceId => ({ id: serviceId, ...services[serviceId] }));
      return { servicesObj, carsObj };
    });
};


//============================================
//-CARS Database Calls
//============================================
/**
 *
 * @param {string} uid - Users id once authenticated with firebase
 * @param {object} carObj - Car object to add
 * @returns {string} ref.key - return the new key (carid) created by firebase
 */
export const addCar = (uid, carObj) => database.ref(`users/${uid}/cars`).push(carObj)
  .then(ref => ref.key);

//EDIT CAR
export const editCar = (uid, id, carObj) => database.ref(`users/${uid}/cars/${id}`).update(carObj);

//LOAD CARS
export const loadCars = uid => database.ref(`users/${uid}/cars`).once('value')
  .then((snapshot) => {
    const carData = snapshot.val() || {};
    const cars = Object.keys(carData).map(carId => ({ id: carId, ...carData[carId] }));
    return cars;
  })
  .catch(err => console.log('Error loading cars', err));
//============================================
//-SERVICE Database Calls
//============================================
export const addService = (uid, serviceObj) => database.ref(`users/${uid}/services`).push(serviceObj)
  .then(ref => ref.key);