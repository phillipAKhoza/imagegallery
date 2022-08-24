import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";
import {motion} from 'framer-motion';

const ProgressBar = ({image, setImage}) => {
    const {url, progress} = useStorage(image);
    // console.log(progress, url);

    useEffect(()=>{
        if (url) {
            setImage(null);
        }
    }, [url, setImage]);
    return ( 
        <motion.div className="progress-bar" initial={{width:0}} animate={{width: progress + '%'}}></motion.div>
     );
}
 
export default ProgressBar;