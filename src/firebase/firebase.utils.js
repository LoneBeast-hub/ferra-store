import { firebaseKeys } from "./firebase.keys";
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
import { collection, getDocs, query } from '@firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: firebaseKeys.API_KEY,
  authDomain: firebaseKeys.AUTH_DOMAIN,
  projectId: firebaseKeys.PROJECT_ID,
  storageBucket: firebaseKeys.STORAGE_BUCKET,
  messagingSenderId: firebaseKeys.MESSAGING_SENDER_ID,
  appId: firebaseKeys.APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);

// modify the sections snapshot gotten from our firebase collections
export const convertSectionsSnapshotToMap = (sections) => {
  const transformedSection = sections.docs.map((section) => {
    const { title, routeName, imgUrl, routePath, imgPath } = section.data();

    const sections = {
      id: section.id,
      routeName,
      routePath,
      title,
      imgUrl,
      imgPath
    }

    return(sections);
    })

  // reduce the transformedSection array to an object with each 
  // routeName value as each property value
  return transformedSection.reduce((accumulator, section) => {
    accumulator[section.routeName.toLowerCase()] = section;
    return accumulator;
  }, {})
}

// modify the sections snapshot gotten from our firebase collections
export const convertSectionItemsSnapshotToMap = async (sectionItems) => {
  const transformedSectionItems = await Promise.all(sectionItems.docs.map(async (section) => {
    const { routeName, title } = section.data();
    const sectionItems = [];

    const sectionItemsColRef = query(collection(db, `sectionItems/${section.id}/items`))
    try {
      // get the items collection docs
      const sectionItemsDetails = await getDocs(sectionItemsColRef)
      sectionItemsDetails.docs.map((doc) => {
        // needed items
        return sectionItems.push({...doc.data(), id: doc.id});
      })
      return({
        title,
        id: section.id,
        routeName,
        items: sectionItems
      });
    } catch(error) {
      console.log(error)
    }
  }))

  // reduce the transformedSection array to an object with each 
  // routeName value as each property value
  return transformedSectionItems.reduce((accumulator, section) => {
    accumulator[section.routeName.toLowerCase()] = section;
    return accumulator;
  }, {})
}