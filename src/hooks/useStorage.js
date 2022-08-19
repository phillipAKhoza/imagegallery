import { useState, useEffect } from "react";
import {projectStorage,  imageCollection  } from '../firebase/config';
import {addDoc, serverTimestamp} from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

const useStorage = (image) => {
    const [progress, setProgress] =useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(()=>{
        // console.log("ran");
        // console.log(image);
        // reference


        const storageRef = ref(projectStorage, image.name);
        // console.log(storageRef);
        // storageRef.put(image).on('state_changed', (snap) =>{
        //     let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;

        //     setProgress(percentage);
        //     console.log(percentage);

        // },(error)=>{
        //     setError(error);
        // }, async () =>{
        //     const url = await storageRef.getDownloadURL();
        //     setUrl(url);
        // });
        // upload image
        uploadBytesResumable(storageRef, image ).on('state_changed' ,(snap)=>{
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
            console.log(percentage);
        },(error) =>{
            // Handle unsuccessful uploads
            setError(error);
        }, async ()=>{
            let imgUrl;
            // get upload url
            await getDownloadURL(storageRef).then((url) =>{
                setUrl(url);
                // console.log(url);
                imgUrl = url;

            }
            ).catch(error =>{
                setError(error);
            })
            // add image url
            // console.log(imgUrl);
            addDoc(imageCollection,{ url: imgUrl , createdAt: serverTimestamp()}).then(()=>{
                console.log("image added to firestore");
            }).catch(error =>{
                console.log(error.message);
                // alert(error.message);
        
            });
            
        }
        );
        console.log("ran");
    },[image]);
    
    return  {progress, url, error};
}
 
export default useStorage;