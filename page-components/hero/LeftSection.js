import styles from '../../styles/LeftSection.module.css';

import { motion } from 'framer-motion';

function LeftSection() {
    return (
        <div className={`${styles.leftSection}`}>
            <h1 className="ff-raleway">
                Gabriel
                <br />
                Pérez Diez
            </h1>
            <h5
                className="fw-500"
                style={{
                    color: 'var(--complementary-400)'
                }}
            >
                frontend developer & ui designer
            </h5>
            <motion.button
                transition={{ ease: 'easeOut', duration: 0.2 }}
                whileHover={{
                    backgroundColor: 'var(--complementary-400)',
                    color: 'var(--main-color-400)'
                }}
                className={`${styles.main_button} ff-inter fw-700`}
            >
                Contact me
            </motion.button>
        </div>
    );
}

export default LeftSection;
