import Marquee from "react-fast-marquee";
import img from '../../../assets/images/img.jpg'
import img2 from '../../../assets/images/img2.jpg'
import img3 from '../../../assets/images/img3.jpg'
import img4 from '../../../assets/images/img4.jpg'
import img5 from '../../../assets/images/img5.jpg'
import img6 from '../../../assets/images/img6.jpg'
import img7 from '../../../assets/images/img7.jpg'
import img8 from '../../../assets/images/img8.jpg'
import img10 from '../../../assets/images/img10.jpg'
import { Slide } from "react-awesome-reveal";
import { motion } from "framer-motion"

const SportsInfo = () => {
    return (
        <Slide>
            <h2 className="text-5xl text-center font-bold my-20">Sports Image</h2>
            <Marquee speed={200}>
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} >
                    <img className="h-[200px]" src={img} alt="" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} >
                    <img className="h-[200px]" src={img2} alt="" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} >
                    <img className="h-[200px]" src={img3} alt="" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} >
                    <img className="h-[200px]" src={img4} alt="" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} >
                    <img className="h-[200px]" src={img5} alt="" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} >
                    <img className="h-[200px]" src={img6} alt="" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} >
                    <img className="h-[200px]" src={img7} alt="" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} >
                    <img className="h-[200px]" src={img8} alt="" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} >
                    <img className="h-[200px]" src={img10} alt="" />
                </motion.div>
            </Marquee>
        </Slide>

    );
};

export default SportsInfo;