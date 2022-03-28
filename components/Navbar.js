import styles from '../styles/Navbar.module.css';

import Link from 'next/link';
import { useViewportScroll, motion } from 'framer-motion';
import { useEffect } from 'react';

const pathVariants = {
    moved: { y: -10, opacity: 0 },
    normal: { x: 0, y: 0, opacity: 1 }
};

function Navbar() {
    const { scrollYProgress } = useViewportScroll();

    useEffect(() => {});

    return (
        <nav
            style={{
                backgroundColor: scrollYProgress > 0.1 ? '#171717ab' : 'none'
            }}
            className={`${styles.nav_container}`}
        >
            <div className={`${styles.nav} container`}>
                <motion.span
                    initial="moved"
                    animate="normal"
                    transition={{ duration: 0.7 }}
                    variants={pathVariants}
                    style={{ fontSize: '2em' }}
                >
                    G
                </motion.span>
                <motion.ul
                    initial="moved"
                    animate="normal"
                    transition={{ duration: 0.7 }}
                    variants={pathVariants}
                    className={styles.linkGroup}
                >
                    <motion.li
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className={styles.linkItem}
                    >
                        <Link href="./">technologies</Link>
                    </motion.li>
                    <motion.li
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.9 }}
                        className={styles.linkItem}
                    >
                        <Link href="./">projects</Link>
                    </motion.li>
                    <motion.li
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.9 }}
                        className={styles.linkItem}
                    >
                        <Link href="./">about</Link>
                    </motion.li>
                    <motion.li
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.9 }}
                        className={styles.linkItem}
                    >
                        <Link href="./">contact me</Link>
                    </motion.li>
                </motion.ul>
            </div>
        </nav>
    );
}

export default Navbar;
