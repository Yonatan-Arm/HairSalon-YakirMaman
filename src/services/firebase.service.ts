import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  collection,
  getDocs,
  setDoc,
  where,
  query,
  addDoc,
  updateDoc,
  getDoc,
  orderBy,
} from "firebase/firestore";
import { userService } from "./user.service.js";

const firebaseConfig = {
  apiKey:import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
  measurementId: import.meta.env.VITE_MESSAGINGSENDERID,
};



const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const getDocuments = async (collectionName:string) => {
  const db = getFirestore(app);
  var collectionRef = collection(db, collectionName);
  const querySnapshot = await getDocs(collectionRef);
  const docs:Array<object> = [];
  querySnapshot.forEach((doc) => {
    docs.push({ id: doc.id, ...doc.data() });
  });
  return docs;
};

const getDocument = async (collectionName:string, id:string) => {
  const db = getFirestore(app);
  try {
    const snap = await getDoc(doc(db, collectionName, id));
    if (!snap.exists()) {
      return null;
    }
    const docToReturn = snap.data();
    docToReturn.id = id;
    return docToReturn;
  } catch (err) {
    console.error("Error getting document: ", err);
    throw err;
  }
};

const addDocument = async (collectionName:string, id:string, document:object) => {
  const db = getFirestore(app);
  try {
    const docRef = await setDoc(doc(db, collectionName, id), document);
    return docRef;
  } catch (err) {
    console.error("Error adding document: ", err);
    throw err;
  }
};

async function saveDocument(collectionName:string, document:object, id:string) {
  const db = getFirestore(app);
  const newTaskRef = doc(db, collectionName, id);
  await setDoc(newTaskRef, document);
}

async function updateDocument(
  collectionName:string,
  reservationDetails:any,
  reservationToSave:object
) {
  const docRef = await doc(db, collectionName, reservationDetails.date);
  const field = reservationDetails.hour;
  await updateDoc(docRef, { [`${field}`]: reservationToSave });
}

export const firebaseService = {
  db,
  getDocuments,
  getDocument,
  addDocument,
  saveDocument,
  updateDocument,
};

// ## insert the dates for the first time with code

function makeId(length = 5) {
  var txt = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return txt;
}

// function generateDates() {
//   const dates = [];
//   const currentDate = new Date();
//   const nextYearDate = new Date(currentDate.getFullYear() + 1, 0, 1);

//   while (currentDate < nextYearDate) {
//     dates.push(new Date(currentDate));
//     currentDate.setDate(currentDate.getDate() + 1);
//   }

//   return dates;
// }

// function generateTimeSlots() {
//   const dates = generateDates();
//   const timeSlots = {};
//   dates.forEach(function (date) {
//     let dateStr = date.toISOString().slice(0, 10); // e.g. "2023-01-01"
//     // timeSlots[dateStr] = [];
//     timeSlots[dateStr] = {};
//     for (var hour = 9; hour <= 17; hour++) {
//       for (var halfHour = 0; halfHour < 2; halfHour++) {
//         var slot = hour.toString() + ":" + (halfHour == 0 ? "00" : "30");
//         let id = makeId(5);
//          timeSlots[dateStr][slot] = {
//           'avilable': true,
//           name: "",
//           phone: "",
//           id: `${id}`,
//         };
//       }
//     }
//      addDocument('dates',dateStr, timeSlots[dateStr] )

//   });
//   return timeSlots;
// }

// const timeSlots = generateTimeSlots();
