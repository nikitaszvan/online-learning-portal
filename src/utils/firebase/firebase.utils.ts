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
  User,
  NextOrObserver,
  UserCredential,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
  QueryDocumentSnapshot,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBZOnCCtuNH8kXmmMNYaAxTluIqux8S-yI",
  authDomain: "real-estate-project-356e9.firebaseapp.com",
  projectId: "real-estate-project-356e9",
  storageBucket: "real-estate-project-356e9.appspot.com",
  messagingSenderId: "530334478359",
  appId: "1:530334478359:web:a5e53f4b4854f74f46ac52"
};

// const firebaseApp = initializeApp(firebaseConfig);

initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

type ObjectToAdd = {
  title: string;
};

/* Type named ObjectToAdd and represents the structure of an object that can be added to a Firestore collection. 
Objects of this type must have a title property which is a string ensuring that any object 
passed to functions expecting an ObjectToAdd conforms to this structure.*/

export const addCollectionAndDocuments = async <T extends ObjectToAdd>(
  /* This syntax defines a generic type parameter T for the function. The <T> syntax indicates that T is a type parameter, 
  and extends ObjectToAdd specifies that T must extend or conform to the ObjectToAdd type (or its subtypes). 
  This allows the function to accept any type that satisfies the structure defined by ObjectToAdd.*/
  collectionKey: string,
  /* A parameter named collectionKey with a type annotation of string */
  objectsToAdd: T[]
  /* This declares a parameter named objectsToAdd with a type annotation of an array of T.
  Here, T represents a generic type parameter defined for the function, which extends ObjectToAdd (as specified earlier).
  objectsToAdd is expected to be an array of objects conforming to the structure defined by the ObjectToAdd type (or its subtypes). */
): Promise<void> => {
  /* The function returns a Promise that resolves to void.
  In other words, the function is asynchronous and doesn't return any value once it completes its execution. */
  const collectionRef = collection(db, collectionKey);
  /* This line creates a reference to a Firestore collection using the collection function provided by Firebase. 
  It uses the db instance (Firestore database) and the collectionKey parameter passed to the function to specify which collection to target. */
  const batch = writeBatch(db);
  /* initializes a write batch, which allows multiple write operations (such as set, update, or delete) to be sent to the Firestore database 
  as a single atomic unit. The writeBatch function creates a new batch instance associated with the Firestore database instance (db) */

  objectsToAdd.forEach((object) => {
    /* This line starts a loop over each object in the objectsToAdd array passed to the function. 
    It iterates through each object to prepare batched write operations.*/
    const docRef = doc(collectionRef, object.title.toLowerCase());
    /*  Inside the loop, this line creates a reference to a specific document within the collection. It uses the doc function to specify
     the document's reference by providing the collection reference (collectionRef) and the document ID, which is derived from the title
     property of the current object in the loop, converted to lowercase */
    batch.set(docRef, object);
    /* adds a set operation to the batch, specifying the document reference (docRef) and the data to be written (object). This operation
    sets the data of the document to the properties of the current object in the loop */
  });

  await batch.commit();
  /* This line commits the batched write operations to the Firestore database. The await keyword is used here to pause the execution of
   the function until the batch operation is completed asynchronously. Once the batch operation is finished, the function proceeds to the
    next step or returns control to the caller if this is the last step in the function */
};

type CourseItem = {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
};
/* CourseItem object is expected to have specific properties such as id, imageUrl, name, and price, each with a designated data type */

type CourseData = {
  imageUrl: string;
  items: CourseItem[];
  title: string;
};

/* items: This property is an array of CourseItem objects.
It represents the collection of items belonging to the course.
Each item in this array conforms to the CourseItem type.*/

export const getCoursesAndDocuments = async (): Promise<CourseData[]> => {
  /* This part represents the function's parameter list, which is empty in this case. 
  The function takes no parameters. It returns a Promise that resolves to an array of CourseData objects */
  const collectionRef = collection(db, 'courses');
  /* const created from the reference to the 'categories' collection obtained by calling the collection
  function with the database instance db and the collection name 'categories' as arguments. */
  const q = query(collectionRef);
  /* creates a query object using the query function and passes the collectionRef as an argument.
  By default, this creates a query that retrieves all documents from the specified collection.*/

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(
    (docSnapshot) => docSnapshot.data() as CourseData
  );
  /* retrieves the data of each document in the querySnapshot, converts it to the CourseData type,
    and returns an array of CourseData objects representing the retrieved documents from the
    Firestore collection or query */
};

export type AdditionalInformation = {
  displayName?: string;
};

/* This is an object literal representing the structure of the AdditionalInformation type.
  It specifies that objects of type AdditionalInformation may contain an optional property
  named displayName of type string. The ? after displayName denotes that this property is optional,
  meaning it may or may not be present in objects of this type. */

export type UserData = {
  createdAt: Date;
  displayName: string;
  email: string;
};

export const createUserDocumentFromAuth = async (
  userAuth: User,
  /* the function expects an object of type User, which likely represents authentication data for a user. */
  additionalInformation: AdditionalInformation = {} as AdditionalInformation
  /* This parameter is optional due to the = sign and provides a default value of an empty object of type
  AdditionalInformation. It represents any additional information that may be passed along with the authentication data.
  The as AdditionalInformation assertion ensures that even if no value is provided, TypeScript considers additionalInformation
  to be of type AdditionalInformation. */
): Promise<QueryDocumentSnapshot<UserData> | undefined> => {
  /* The function returns a Promise that resolves to either a QueryDocumentSnapshot<UserData> or undefined. */
  /* QueryDocumentSnapshot<UserData>: This represents a snapshot of a document in Firestore containing data of type UserData. */
  /* undefined: This indicates that the function may also return undefined, meaning it doesn't always produce a result. */
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);
  /* The document is identified by the user's unique identifier (uid) extracted from the userAuth object.
  This reference can then be used to perform operations such as reading, writing, or deleting data associated
  with the user in Firestore. */

  const userSnapshot = await getDoc(userDocRef);
  /* const userSnapshots saved from retrieval of a snapshot (userSnapshot) of the user document from Firestore using the reference (userDocRef).  */

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
      console.log('error creating the user', (error as Error).message);
    }
  }
  /* If it doesn't exist, it creates the document with the user's authentication data (display name, email) along with a timestamp representing
  the creation date. Any additional information provided is also included in the document data. */

  return userSnapshot as QueryDocumentSnapshot<UserData>;
  /* userSnapshot is guaranteed to be of type QueryDocumentSnapshot<UserData> */
};

export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<UserCredential> => {
  /* This part specifies the return type of the function. It indicates that the
   function returns a Promise that resolves to a UserCredential. A UserCredential
    object typically contains information about the user authentication process,
     such as the user's authentication state and any authentication tokens. */
  return new Promise((resolve, reject) => {
    if (!email || !password) {
      reject(new Error('Email and password are required.'));
    } else {
      resolve(createUserWithEmailAndPassword(auth, email, password));
    }
});
  /* a promise that resolves to a call to createUserWithEmailAndPassword function
   if both email and password are provided, and rejects with an error otherwise */
}

export const signInAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<UserCredential> => {
  return new Promise((resolve, reject) => {
    if (!email || !password) {
      reject(new Error('Email and password are required.'));
    } else {
      resolve(signInWithEmailAndPassword(auth, email, password));
    }
});
}

export const signOutUser = async (): Promise<void> => await signOut(auth);

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) =>
  onAuthStateChanged(auth, callback);

/* takes an argument callback of type NextOrObserver<User>. NextOrObserver is 
likely a type definition indicating that the callback function can either be a 
Next function or an Observer object. The <User> specifies the type of the argument User. */

export const getCurrentUser = new Promise<User | null>((resolve, reject) => {
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

/* fetches the current user's authentication state. When the authentication state changes,
it resolves the promise with the user's authentication information or null if there's no user authenticated */
