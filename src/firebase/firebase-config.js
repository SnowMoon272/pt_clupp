/* eslint-disable no-unused-vars */
import { initializeApp } from "firebase/app";
import { v4 } from "uuid";
import { getAuth } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, addDoc, getDocs, updateDoc, doc } from "firebase/firestore";

export const firebaseConfig = {
	apiKey: process.env.REACT_APP_APIKEY,
	authDomain: process.env.REACT_APP_AUTHDOMAIN,
	projectId: process.env.REACT_APP_PROJECTID,
	storageBucket: process.env.REACT_APP_STORAGEBUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
	appId: process.env.REACT_APP_APPID,
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export async function uploadFile(file) {
	const storageRef = ref(storage, v4());
	await uploadBytes(storageRef, file);
	const url = await getDownloadURL(storageRef);
	return url;
}

export async function uploadDocument(file) {
	try {
		const docRef = await addDoc(collection(db, "vehicles"), file);
		console.log("Document written with ID: ", docRef.id);
	} catch (e) {
		console.error("Error adding document: ", e);
	}
}

export async function getDocuments() {
	const querySnapshot = await getDocs(collection(db, "vehicles"));
	const result = [];
	querySnapshot.forEach((doc) => {
		let info = doc.data();
		info.id = doc.id;
		!info.deleted && result.push(info);
	});
	// console.log(result);
	return result;
}

export async function updateDocument(id) {
	const washingtonRef = doc(db, "vehicles", id);
	await updateDoc(washingtonRef, {
		deleted: true,
	});
}
