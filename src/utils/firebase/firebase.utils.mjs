import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from 'firebase/firestore';
import dotenv from 'dotenv';
import path from 'path';

// Load the .env file
const __dirname = path.resolve();
dotenv.config({ path: path.resolve(__dirname, '../../../.env') });

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth(app);
export const signInWithGooglePopup = async () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
};

export const getCoursesAndDocuments = async () => {
  const collectionRef = collection(db, 'courses');
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(docSnapshot => docSnapshot.data());
};

export const getSideNavMenuOptions = async () => {
  const collectionRef = collection(db, 'student-side-bar-menu');
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(docSnapshot => docSnapshot.data());
};

export const getTasks = async () => {
  const collectionRef = collection(db, 'student-task-list');
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(docSnapshot => docSnapshot.data());
};

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userSnapshot;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  return new Promise((resolve, reject) => {
    if (!email || !password) {
      reject(new Error('Email and password are required.'));
    } else {
      resolve(createUserWithEmailAndPassword(auth, email, password));
    }
  });
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  return new Promise((resolve, reject) => {
    if (!email || !password) {
      reject(new Error('Email and password are required.'));
    } else {
      resolve(signInWithEmailAndPassword(auth, email, password));
    }
  });
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);

export const getCurrentUser = new Promise((resolve, reject) => {
  const unsubscribe = onAuthStateChanged(
    auth,
    (userAuth) => {
      unsubscribe();
      if (userAuth) {
        resolve(userAuth);
      } else {
        resolve(null);
      }
    },
    reject
  );
});

export const updateGradeVisibilityInDatabase = async (courseId, showGrade) => {
  try {
    const courseRef = doc(db, 'courses', `${courseId}`);
    await updateDoc(courseRef, { 'courseDescription.showGrade': !showGrade });
  } catch (err) {
    console.error('Error updating document: ', err);
    throw err;
  }
};
