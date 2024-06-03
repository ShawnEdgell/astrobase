// src/lib/upload.ts

import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from './firebase';

export async function uploadFile(file: File) {
  // Create a storage reference from our storage service
  const storageRef = ref(storage, 'uploads/' + file.name);

  // Upload the file to the path 'uploads/file.name'
  const snapshot = await uploadBytes(storageRef, file);
  console.log('Uploaded a blob or file!', snapshot);

  // Get the download URL
  const url = await getDownloadURL(snapshot.ref);
  console.log('File available at', url);

  return url;
}
