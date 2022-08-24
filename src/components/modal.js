import {motion} from 'framer-motion';
const Modal = ({selectedImg, setselectedImg}) => {
    const handleClose = (e)=>{
        if(e.target.classList.contains('backdrop')){
            setselectedImg(null);
        }
    }
    return ( 
        <motion.div className="backdrop" onClick={handleClose}
        initial={{opacity:0}} animate={{opacity:1}}
        >
            <motion.img src={selectedImg} alt="modal" 
            initial={{y: "-100vh"}}
            animate={{y:0}}
            />
        </motion.div>
     );
}
 
export default Modal;