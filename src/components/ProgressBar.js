import React from "react";
import useStorage from "../hooks/useStorage";

const ProgressBar = ({image, setImage}) => {
    const {url, progress} = useStorage(image);
    console.log(progress, url);
    return ( 
        <div className="progress-bar">Progress</div>
     );
}
 
export default ProgressBar;