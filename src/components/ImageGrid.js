import React from "react";
import useFirestore from '../hooks/useFireStore';
import {motion} from 'framer-motion';

const ImageGrid = ({setselectedImg}) => {
    const {docs} = useFirestore('images');
    // console.log(docs);
    return ( 
        <div className="img-grid">
            {docs && docs.map(doc =>(
                <motion.div className="img-wrap" key={doc.id} onClick={()=> setselectedImg(doc.url)}
                layout 
                whileHover={{opacity:1}}
                >
                    <motion.img src={doc.url} alt="gallary" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1}}/>
                </motion.div>
            ))}
        </div>
     );
}
 
export default ImageGrid;