import { firebaseService } from "./firebase.service";

const COLLECTION = "dates";

async function query() {
  return await firebaseService.getDocuments(COLLECTION);
}

async function save(userId, user) {
  if (user.id) {
    return await firebaseService.saveDocument(COLLECTION, user, user.id);
  } else {
    return await firebaseService.addDocument(COLLECTION, userId, user);
  }
}
async function makeReservation(reservation) {
  let reservationToSave = {
    avilable: false,
    name: reservation.name,
    phone: reservation.phone,
  };
  let reservationDetails = {
    date: reservation.dateResvation,
    hour: reservation.hourResvation,
  };
  firebaseService.updateDocument(
    COLLECTION,
    reservationDetails,
    reservationToSave
  );
}

async function getById(id) {
  return await firebaseService.getDocument(COLLECTION, id);
}

export const userService = {
  query,
  save,
  getById,
  makeReservation,
};
