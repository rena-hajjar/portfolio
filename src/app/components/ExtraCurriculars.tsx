import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';

function ExtraCurricCard({title, image, about} : {title: string; image: StaticImageData; about: string}) {

    return (
        <>
        <div className="curr-card-container">
            <motion.div className="cur-card" whileHover={{ scale: 1.5 }}>
                <div className="curr-card-image">
                    <Image src={image} alt="extracurricular image"></Image>
                </div>
                <div className="curr-card-title">{title}</div>
            </motion.div>
        </div>
        </>
    )
}

export default function ExtraCurriculars() {

}