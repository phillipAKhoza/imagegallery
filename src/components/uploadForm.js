import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
    const [image,setImage] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg'];

    const changeHandler = (e) =>{
        // console.log("upload happend");
        let image = e.target.files[0];
        if (image && types.includes(image.type)) {
            // console.log(image);
            setImage(image);
            setError(null)
        }else{
            setImage(null);
            setError('Please select an image file (png or jpeg)');

        }
    }
    return ( 
        <form>
            <input type="file" onChange={changeHandler} />
            <div className="output">
                {
                    error && <div className="error">{error}</div>
                }
                {
                    image && <div>{image.name}</div>
                }
                {image && <ProgressBar  image={image} setImage={setImage}/>}
            </div>
        </form>
     );
}
 
export default UploadForm;