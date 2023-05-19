import { firebaseService } from "./firebase.service";

const COLLECTION = "dates";

async function query() {
  return await firebaseService.getDocuments(COLLECTION);
}
async function remove(reservationDate: string, reservationTime: string) {
  const reservationData: any = await getById(reservationDate)
  delete reservationData.id
  reservationData[reservationTime].avilable = true
  await firebaseService.saveDocument(
    COLLECTION,
    reservationData,
    reservationDate
  );
}

async function save(userId: string, user: any) {
  if (user.id) {
    return await firebaseService.saveDocument(COLLECTION, user, user.id);
  } else {
    return await firebaseService.addDocument(COLLECTION, userId, user);
  }
}
async function makeReservation(reservation: any) {
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

async function getById(id: string) {
  return await firebaseService.getDocument(COLLECTION, id);
}

export const userService: any = {
  query,
  save,
  getById,
  makeReservation,
  remove
};
