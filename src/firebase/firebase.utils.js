import { firebaseKeys } from "./firebase.keys";
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
import { collection, getDocs } from '@firebase/firestore';

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

// modify the sections snapshot gotten from our firebase collections
export const convertSectionsSnapshotToMap = (sections) => {
  const transformedSection = sections.docs.map((section) => {
    const { title, routeName, imgUrl, routePath } = section.data();

    const sections = {
      id: section.id,
      routeName,
      routePath,
      title,
      imgUrl
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
export const convertSectionsItemsSnapshotToMap = (sections) => {
  const transformedSection = sections.docs.map((section) => {
    const { routeName, routePath, title } = section.data();
    const sectionItems = [];

    const sectionItemsColRef = collection(db, `sections/${section.id}/items`);
    // get the items collection docs
    getDocs(sectionItemsColRef)
    .then((snapshot) => {
      // for each item compare identifier with routeName to return 
      // needed items
      snapshot.docs.map((sectionItem) => {
        sectionItems.push({...sectionItem.data(), id: sectionItem.id});
        return sectionItems.filter((sectionItem) => {
          return sectionItem.identifier === routeName
        })
      })
    })

    return({
      title,
      id: section.id,
      routeName,
      routePath,
      items: sectionItems
    });
    })

  // reduce the transformedSection array to an object with each 
  // routeName value as each property value
  return transformedSection.reduce((accumulator, section) => {
    accumulator[section.routeName.toLowerCase()] = section;
    return accumulator;
  }, {})
}