import styles from '../../styles/Hero.module.css';

import Parallax from '../Parallax';
import LeftSection from './LeftSection';
import AnimatedComputer from './AnimatedComputer';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { SiGmail, SiLinkedin, SiWhatsapp } from 'react-icons/si';
import { BsArrowDownShort } from 'react-icons/bs';

function Hero() {
    return (
        <>
            <div className={styles.hero}>
                <Parallax width="30%" offset={40}>
                    <LeftSection />
                </Parallax>
                <Parallax offset={70}>
                    <AnimatedComputer />
                </Parallax>
            </div>
            <Parallax offset={40}>
                <RrssGroup />
                <motion.div
                    style={{
                        position: 'absolute',
                        bottom: -30,
                        left: '50%',
                        opacity: 0.1
                    }}
                    animate={{
                        y: [0, 10, 0]
                    }}
                    transition={{
                        ease: 'easeInOut',
                        duration: 1,
                        repeat: Infinity
                    }}
                >
                    <BsArrowDownShort size="3.5em" />
                </motion.div>
            </Parallax>
        </>
    );
}

function RrssGroup() {
    return (
        <div className={styles.rrss_group}>
            <Link href="/404">
                <SiLinkedin size="1.6em" />
            </Link>
            <Link href="/404">
                <SiGmail size="1.6em" />
            </Link>
            <Link href="/404">
                <SiWhatsapp size="1.6em" />
            </Link>
        </div>
    );
}

export default Hero;
