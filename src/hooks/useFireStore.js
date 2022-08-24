import { onSnapshot, query, orderBy } from 'firebase/firestore';
import {useState,useEffect} from 'react';
import { imageCollection} from '../firebase/config';
// import {} from 'firebase/firestore';

const useFirestore = (imagesCollection) =>{
    const [docs, setDocs] = useState([]);

    useEffect(()=>{
        
        const urlQuery = query(imageCollection, orderBy('createdAt','desc'));

        const unsub =onSnapshot(urlQuery,(snap)=>{
            let imageURLs = [];

            snap.forEach( imgURL =>{
                imageURLs.push({...imgURL.data(), id: imgURL.id})
            });
            setDocs(imageURLs);
           
        });

        return () => unsub();

    },[imagesCollection]);
    
    return {docs};
}

export default useFirestore;