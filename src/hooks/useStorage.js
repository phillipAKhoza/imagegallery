import { useState, useEffect } from "react";
import {projectStorage} from '../firebase/config';

const useStorage = (image) => {
    const [progress, setProgress] =useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(()=>{
        // reference
        const storageRef = projectStorage.ref(image.name);

        storageRef.put(image).on('state_changed', (snap) =>{
            let percentage = (snap.butesTransferred / snap.totalBytes) * 100;

            setProgress(percentage);

        },(error)=>{
            setError(error);
        }, async () =>{
            const url = await storageRef.getDownloadURL();
            setUrl(url);
        })
    },[image])
    return  {progress, url, error};
}
 
export default useStorage;