import styles from '../../styles/AnimatedComputer.module.css';

import useSound from 'use-sound';
import { motion } from 'framer-motion';

const pathVariants = {
    hidden: { x: 0, y: 0 },
    start: { y: [0, -6, 0] }
};

const svgVariants = {
    hidden: { opacity: 0 },
    start: { opacity: 1 }
};

function AnimatedComputer() {
    const [playKeyboard1] = useSound('/sounds/keyboard-effect.mp3', {
        volume: 0.1
    });
    const [playKeyboard2] = useSound('/sounds/keyboard-effect2.mp3', {
        volume: 0.1
    });
    const [playIpadTap] = useSound('/sounds/ipad-tap.mp3', {
        volume: 0.1
    });
    const [playAirWhoosh] = useSound('/sounds/air-whoosh.mp3', {
        volume: 0.01
    });
    const [playAirWhoosh2] = useSound('/sounds/air-whoosh2.mp3', {
        volume: 0.01
    });

    const playRandomKeySFX = () => {
        const rand = Math.floor(Math.random() * (2 - 1 + 1) + 1);
        console.log(rand);
        if (rand == 1) {
            playKeyboard1();
            return;
        }
        playKeyboard2();
        return;
    };

    return (
        <motion.svg
            initial="hidden"
            animate="start"
            variants={svgVariants}
            transition={{ duration: 1 }}
            xmlns="http://www.w3.org/2000/svg"
            transform="scale(-1,1)"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 400 300"
            className={styles.svg}
        >
            <defs>
                <linearGradient
                    id="a"
                    x1="0.26"
                    y1="0.763"
                    x2="0.799"
                    y2="0.279"
                    gradientUnits="objectBoundingBox"
                >
                    <stop offset="0" stop-color="#E6C77A" />
                    <stop offset="1" stop-color="#F7CC60" />
                </linearGradient>
                <linearGradient
                    id="linear-gradient"
                    x1="162.93"
                    y1="213.23"
                    x2="124.46"
                    y2="244.54"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stop-color="#d4a397"></stop>
                    <stop offset="1" stop-color="#fff"></stop>
                </linearGradient>
                <linearGradient
                    id="linear-gradient-2"
                    x1="149.28"
                    y1="151.25"
                    x2="116.6"
                    y2="177.85"
                    xlinkHref="#linear-gradient"
                ></linearGradient>
                <linearGradient
                    id="linear-gradient-3"
                    x1="281.87"
                    y1="174.83"
                    x2="262.34"
                    y2="203.6"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0.01" stop-color="#4d4d4d"></stop>
                    <stop offset="1" stop-color="#fff"></stop>
                </linearGradient>
                <linearGradient
                    id="linear-gradient-4"
                    x1="317.24"
                    y1="170.92"
                    x2="310.86"
                    y2="180.32"
                    xlinkHref="#linear-gradient-3"
                ></linearGradient>
                <linearGradient
                    id="linear-gradient-5"
                    x1="1786.47"
                    y1="108.38"
                    x2="1772.46"
                    y2="123.73"
                    gradientTransform="translate(-1538.93)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stop-color="#78b46a"></stop>
                    <stop offset="0.03" stop-color="#7f3500"></stop>
                    <stop offset="1" stop-color="#fff"></stop>
                </linearGradient>
                <linearGradient
                    id="linear-gradient-6"
                    x1="240.29"
                    y1="150.53"
                    x2="219.46"
                    y2="167.49"
                    xlinkHref="#linear-gradient"
                ></linearGradient>
            </defs>
            <g style={{ isolation: 'isolate' }}>
                <g id="Layer_2" data-name="Layer 2">
                    <path
                        d="M205.45,281.18l171.5-101.36c5.46-3.07,10.14-8.1,4.82-11.4L209.66,69.23c-2.58-1.6-6.5-2.65-9.13-1.12l-180,104.48c-5.46,3.17-6.44,12-1,15.2L182.85,281A22.8,22.8,0,0,0,205.45,281.18Z"
                        fill="url(#a)"
                    ></path>
                    <g id="tablet">
                        <motion.path
                            variants={pathVariants}
                            d="M130.86,215.95,103.6,231.08S129.07,251.16,140.5,256l27.29-16.25"
                            fill="url(#linear-gradient)"
                            style={{ mixBlendMode: 'multiply' }}
                        ></motion.path>
                        <motion.path
                            variants={pathVariants}
                            d="M129.75,155.46l-27.26,15.13s6.53,10.33,18,15.13l29.46-16.25"
                            fill="url(#linear-gradient-2)"
                            style={{ mixBlendMode: 'multiply' }}
                        ></motion.path>
                        <motion.path
                            variants={pathVariants}
                            d="M277.2,215.12s32.95-18.45,33.15-18.76l-51.19-25.77-28.79,16.62Z"
                            fill="url(#linear-gradient-3)"
                            style={{ mixBlendMode: 'multiply' }}
                        ></motion.path>
                        <motion.path
                            variants={pathVariants}
                            d="M315,139.78l41.8,25.91a2.59,2.59,0,0,1-.09,4.46L293.27,206a5.81,5.81,0,0,1-5.8,0l-41.61-24.46c-3-2.48-2.18-6.16,0-7.36l63.07-34.48A5.9,5.9,0,0,1,315,139.78Z"
                            fill="#68e1fd"
                        ></motion.path>
                        <motion.path
                            variants={pathVariants}
                            d="M315,138l41.8,25.91a2.59,2.59,0,0,1-.09,4.46l-63.43,35.88a5.81,5.81,0,0,1-5.8,0l-41.61-24.46a3.22,3.22,0,0,1,0-5.57l63.07-36.26A5.9,5.9,0,0,1,315,138Z"
                            fill="#fff"
                        ></motion.path>
                        <motion.polygon
                            variants={pathVariants}
                            whileHover={{
                                scale: [1.02, 1.01, 1.02, 1],
                                fill: [
                                    '#edff61',
                                    '#d1e058',
                                    '#edff61',
                                    '#d1e058',
                                    '#606060'
                                ]
                            }}
                            transition={{ duration: 0.8 }}
                            points="312.22 139.4 354.23 165.84 291.4 201.79 248.05 176.3 312.22 139.4"
                            fill="#606060"
                            onMouseEnter={playIpadTap}
                        ></motion.polygon>
                        <motion.ellipse
                            variants={pathVariants}
                            cx="266.97"
                            cy="190.1"
                            rx="1.49"
                            ry="0.7"
                            fill="#383097"
                        ></motion.ellipse>
                        <motion.path
                            variants={pathVariants}
                            d="M313.77,183.22s5.47-10.17,5.5-10.22l-.94-.47-11.62,6.71Z"
                            fill="url(#linear-gradient-4)"
                            style={{ mixBlendMode: 'multiply' }}
                        ></motion.path>
                        <motion.path
                            variants={pathVariants}
                            d="M362.9,145.71a.57.57,0,0,1,0-.22,6.08,6.08,0,0,0-1.82-.61l-39,23.28s-2.34,1.83,2,4.3l39.59-23.53A8.31,8.31,0,0,0,362.9,145.71Z"
                            fill="#ccc"
                        ></motion.path>
                        <motion.path
                            variants={pathVariants}
                            d="M322,168.15s-4.54,5.08-4.62,5.41,6.57-1.11,6.57-1.11"
                            fill="#ccc"
                        ></motion.path>
                        <motion.ellipse
                            variants={pathVariants}
                            cx="362.33"
                            cy="146.87"
                            rx="1.5"
                            ry="2.39"
                            transform="translate(-24.89 200.84) rotate(-30)"
                            fill="#f2f2f2"
                        ></motion.ellipse>
                    </g>
                    <g id="computer">
                        <motion.path
                            variants={pathVariants}
                            d="M165.81,135.68l16.38,7.89a3.77,3.77,0,0,1,.26,6.65l-38.83,22.65a3.77,3.77,0,0,1-5.07-1.22L129.12,157"
                            fill="#56403d"
                        ></motion.path>
                        <motion.path
                            variants={pathVariants}
                            d="M76.68,97.74,207.34,22.47a5.89,5.89,0,0,1,8.84,5.11v78.3a4.9,4.9,0,0,1-2.45,4.24L74.46,190.51a3.16,3.16,0,0,1-4.74-2.74v-78A13.91,13.91,0,0,1,76.68,97.74Z"
                            fill="#68e1fd"
                        ></motion.path>
                        <motion.path
                            variants={pathVariants}
                            d="M207.32,28.39,80.64,101.28a8.88,8.88,0,0,0-4.45,7.7v58.7a3.21,3.21,0,0,0,4.8,2.78L210.19,96.32a3.16,3.16,0,0,0,1.59-2.74V31A3,3,0,0,0,207.32,28.39Z"
                            fill="#fff"
                        ></motion.path>
                        <motion.ellipse
                            variants={pathVariants}
                            cx="154.61"
                            cy="136"
                            rx="3.15"
                            ry="2.75"
                            transform="translate(-8.18 262.09) rotate(-79.1)"
                            fill="#ab643c"
                        ></motion.ellipse>
                    </g>
                    <g id="keyboard">
                        <motion.path
                            variants={pathVariants}
                            d="M213.76,169.53l34.18,19.53a2.35,2.35,0,0,1,0,4.07L153,247.75a7.58,7.58,0,0,1-7.57,0l-32-18.47a2.45,2.45,0,0,1,0-4.24l96.06-55.49A4.25,4.25,0,0,1,213.76,169.53Z"
                            fill="#974c26"
                        ></motion.path>
                        <motion.path
                            whileHover={{ scale: 0.8, fill: '#f2f2f2' }}
                            variants={pathVariants}
                            d="M162.11,200.67l9.76,5.78-7.24,4.21c-2-1.19-7.9-4.65-9.79-5.76Z"
                            onMouseEnter={playRandomKeySFX}
                            fill="#fff"
                        ></motion.path>
                        <motion.path
                            whileHover={{ scale: 0.8, fill: '#f2f2f2' }}
                            variants={pathVariants}
                            onMouseEnter={playRandomKeySFX}
                            d="M172.8,194.46l9.76,5.78-9.17,5.33c-1.6-.93-7.51-4.42-9.79-5.76Z"
                            fill="#fff"
                        ></motion.path>
                        <motion.path
                            whileHover={{ scale: 0.8, fill: '#f2f2f2' }}
                            variants={pathVariants}
                            onMouseEnter={playRandomKeySFX}
                            d="M211.64,171.91l9.91,5.69-8.82,5.12c-1.4-.81-7.38-4.34-9.79-5.76Z"
                            fill="#fff"
                        ></motion.path>
                        <motion.path
                            whileHover={{ scale: 0.8, fill: '#f2f2f2' }}
                            variants={pathVariants}
                            onMouseEnter={playRandomKeySFX}
                            d="M190.76,184l9.76,5.78-7.24,4.2c-1.71-1-7.6-4.47-9.79-5.76Z"
                            fill="#fff"
                        ></motion.path>
                        <motion.path
                            whileHover={{ scale: 0.8, fill: '#f2f2f2' }}
                            variants={pathVariants}
                            onMouseEnter={playRandomKeySFX}
                            d="M201.45,177.82l9.76,5.78L202,188.93c-1.08-.62-7.22-4.24-9.79-5.76Z"
                            fill="#fff"
                        ></motion.path>
                        <motion.path
                            whileHover={{ scale: 0.8, fill: '#f2f2f2' }}
                            variants={pathVariants}
                            onMouseEnter={playRandomKeySFX}
                            d="M153.35,205.76l9.76,5.78-6.93,4c-2.08-1.22-7.94-4.67-9.79-5.76Z"
                            fill="#fff"
                        ></motion.path>
                        <motion.path
                            whileHover={{ scale: 0.8, fill: '#f2f2f2' }}
                            variants={pathVariants}
                            onMouseEnter={playRandomKeySFX}
                            d="M182,189.12l9.76,5.78-7.67,4.45c-1.8-1-7.67-4.51-9.79-5.76Z"
                            fill="#fff"
                        ></motion.path>
                        <motion.path
                            whileHover={{ scale: 0.8, fill: '#f2f2f2' }}
                            variants={pathVariants}
                            onMouseEnter={playRandomKeySFX}
                            d="M144.9,210.67l9.76,5.78-9.17,5.33c-1.92-1.12-7.77-4.57-9.79-5.76Z"
                            fill="#fff"
                        ></motion.path>
                        <motion.polygon
                            whileHover={{ scale: 0.8, fill: '#f2f2f2' }}
                            variants={pathVariants}
                            onMouseEnter={playRandomKeySFX}
                            points="134.2 216.88 143.96 222.66 127.51 232.21 117.59 226.52 134.2 216.88"
                            fill="#fff"
                        ></motion.polygon>
                        <motion.path
                            whileHover={{ scale: 0.8, fill: '#f2f2f2' }}
                            variants={pathVariants}
                            onMouseEnter={playRandomKeySFX}
                            d="M222.82,179.29l9.91,5.69-12.81,7.44c-1.68-1-7.57-4.45-9.79-5.76Z"
                            fill="#fff"
                        ></motion.path>
                        <motion.path
                            whileHover={{ scale: 0.8, fill: '#f2f2f2' }}
                            variants={pathVariants}
                            onMouseEnter={playRandomKeySFX}
                            d="M197.94,193.73l9.76,5.78-7.24,4.21c-1.94-1.13-7.79-4.58-9.79-5.76Z"
                            fill="#fff"
                        ></motion.path>
                        <motion.path
                            whileHover={{ scale: 0.8, fill: '#f2f2f2' }}
                            variants={pathVariants}
                            onMouseEnter={playRandomKeySFX}
                            d="M180,204.16l9.76,5.78-9.17,5.33c-1.84-1.07-7.7-4.53-9.79-5.76Z"
                            fill="#fff"
                        ></motion.path>
                        <motion.path
                            whileHover={{ scale: 0.8, fill: '#f2f2f2' }}
                            variants={pathVariants}
                            onMouseEnter={playRandomKeySFX}
                            d="M189.18,198.82l9.76,5.78-7.67,4.45c-2-1.17-7.87-4.63-9.79-5.76Z"
                            fill="#fff"
                        ></motion.path>
                        <motion.path
                            whileHover={{ scale: 0.8, fill: '#f2f2f2' }}
                            variants={pathVariants}
                            onMouseEnter={playRandomKeySFX}
                            d="M169.29,210.37l9.76,5.78-7.24,4.21c-2.24-1.31-8.13-4.79-9.79-5.76Z"
                            fill="#fff"
                        ></motion.path>
                        <motion.path
                            whileHover={{ scale: 0.8, fill: '#f2f2f2' }}
                            variants={pathVariants}
                            onMouseEnter={playRandomKeySFX}
                            d="M160.53,215.46l9.76,5.78-6.93,4c-2.28-1.33-8.18-4.82-9.79-5.76Z"
                            fill="#fff"
                        ></motion.path>
                        <motion.path
                            whileHover={{ scale: 0.8, fill: '#f2f2f2' }}
                            variants={pathVariants}
                            onMouseEnter={playRandomKeySFX}
                            d="M208.63,187.52l9.76,5.78-9.17,5.32c-1.45-.84-7.42-4.36-9.79-5.76Z"
                            fill="#fff"
                        ></motion.path>
                        <motion.path
                            whileHover={{ scale: 0.8, fill: '#f2f2f2' }}
                            variants={pathVariants}
                            onMouseEnter={playRandomKeySFX}
                            d="M152.08,220.37l9.76,5.78-9.17,5.33c-2.12-1.24-8-4.7-9.79-5.76Z"
                            fill="#fff"
                        ></motion.path>
                        <motion.polygon
                            whileHover={{ scale: 0.8, fill: '#f2f2f2' }}
                            variants={pathVariants}
                            onMouseEnter={playRandomKeySFX}
                            points="151.14 232.36 138.68 239.59 128.77 233.9 141.38 226.57 151.14 232.36"
                            fill="#fff"
                        ></motion.polygon>
                        <motion.polygon
                            whileHover={{ scale: 0.8, fill: '#f2f2f2' }}
                            variants={pathVariants}
                            onMouseEnter={playRandomKeySFX}
                            points="158.44 231.37 165.7 235.68 157.28 240.55 149.91 236.32 158.44 231.37"
                            fill="#fff"
                        ></motion.polygon>
                        <motion.polygon
                            whileHover={{ scale: 0.8, fill: '#f2f2f2' }}
                            variants={pathVariants}
                            onMouseEnter={playRandomKeySFX}
                            points="155.54 241.56 148.38 245.71 141 241.49 148.29 237.26 155.54 241.56"
                            fill="#fff"
                        ></motion.polygon>
                        <motion.polygon
                            whileHover={{ scale: 0.8, fill: '#f2f2f2' }}
                            variants={pathVariants}
                            onMouseEnter={playRandomKeySFX}
                            points="235.04 186.88 242.64 191.09 234.02 196.09 226.56 191.8 235.04 186.88"
                            fill="#fff"
                        ></motion.polygon>
                        <motion.polygon
                            whileHover={{ scale: 0.8, fill: '#f2f2f2' }}
                            variants={pathVariants}
                            onMouseEnter={playRandomKeySFX}
                            points="224.95 192.74 232.28 197.09 223.08 202.43 215.63 198.15 224.95 192.74"
                            fill="#fff"
                        ></motion.polygon>
                        <motion.polygon
                            whileHover={{ scale: 0.92, fill: '#f2f2f2' }}
                            variants={pathVariants}
                            onMouseEnter={playRandomKeySFX}
                            points="214.01 199.09 221.33 203.44 167.45 234.66 160.06 230.42 214.01 199.09"
                            fill="#fff"
                        ></motion.polygon>
                    </g>
                    <g id="plant">
                        <path
                            d="M238.06,107l-14,8.27s4.32,7.58,15,12.06l16.26-8.74"
                            fill="url(#linear-gradient-5)"
                            style={{ mixBlendMode: 'multiply' }}
                        ></path>
                        <motion.ellipse
                            variants={pathVariants}
                            cx="249.41"
                            cy="110.15"
                            rx="12.95"
                            ry="9.12"
                            fill="#68e1fd"
                        ></motion.ellipse>
                        <motion.ellipse
                            variants={pathVariants}
                            cx="249.42"
                            cy="104.76"
                            rx="9.7"
                            ry="3.97"
                            fill="#974c26"
                        ></motion.ellipse>
                        <motion.path
                            variants={pathVariants}
                            d="M250.06,104.85c.76-1.07,1.53-2.19,2.33-3.45,1-1.61,2-3.25,2.87-4.95a32.67,32.67,0,0,0,2.09-4.68,39.12,39.12,0,0,0,1.53-5.37c.1-.48.18-1,.27-1.44,0-.22,0-.2,0-.17s0-.15,0-.42c.09-1,.15-2,.16-2.94a24.75,24.75,0,0,0-1.93-9.91,42.74,42.74,0,0,0-6.92,16.93q-.1.54-.19,1.09s-.1.66-.14.93l-.1.91q-.07.69-.13,1.39c-.14,1.79-.21,3.58-.2,5.37C249.78,100.38,249.88,102.62,250.06,104.85Zm4.12-26.76q.35-.4.73-.78h0a1.61,1.61,0,0,0,0,.7A2.22,2.22,0,0,0,254.19,78.09Z"
                            fill="#999a1c"
                        ></motion.path>
                        <motion.path
                            variants={pathVariants}
                            d="M250.31,105c.07-1.31.1-2.67.09-4.16,0-1.91-.09-3.81-.26-5.71a32.67,32.67,0,0,0-.77-5.07,39.12,39.12,0,0,0-1.61-5.35c-.18-.46-.36-.91-.56-1.36-.09-.21-.07-.19-.05-.16l-.2-.37c-.46-.87-.93-1.73-1.45-2.56a24.75,24.75,0,0,0-7-7.3,42.74,42.74,0,0,0,3.33,18q.21.51.43,1l.39.86.41.83q.31.62.64,1.24c.85,1.58,1.76,3.12,2.73,4.63C247.65,101.41,248.95,103.23,250.31,105Zm-11-24.74q.08-.53.19-1h0a1.61,1.61,0,0,0,.34.61A2.22,2.22,0,0,0,239.31,80.27Z"
                            fill="#999a1c"
                        ></motion.path>
                        <motion.path
                            variants={pathVariants}
                            d="M250.37,105.7c-.39-.73-.81-1.47-1.29-2.28-.62-1-1.28-2-2-3A20.55,20.55,0,0,0,245,97.94a24.61,24.61,0,0,0-2.6-2.37L241.7,95c-.12-.08-.1-.08-.08-.07l-.23-.14c-.53-.32-1.06-.63-1.61-.91a15.57,15.57,0,0,0-6.12-1.69,26.88,26.88,0,0,0,7.6,8.63l.56.41.48.34.49.31.75.46q1.45.87,3,1.62C247.77,104.61,249.06,105.18,250.37,105.7Zm-13.92-9.8q-.13-.31-.24-.63h0a1,1,0,0,0,.38.22A1.4,1.4,0,0,0,236.45,95.9Z"
                            fill="#999a1c"
                        ></motion.path>
                        <motion.path
                            variants={pathVariants}
                            d="M250.06,104.85c.76-1.07,1.53-2.19,2.33-3.45,1-1.61,2-3.25,2.87-4.95a32.67,32.67,0,0,0,2.09-4.68,39.12,39.12,0,0,0,1.53-5.37c.1-.48.18-1,.27-1.44,0-.22,0-.2,0-.17s0-.15,0-.42c.09-1,.15-2,.16-2.94a24.75,24.75,0,0,0-1.93-9.91,42.74,42.74,0,0,0-6.92,16.93q-.1.54-.19,1.09s-.1.66-.14.93l-.1.91q-.07.69-.13,1.39c-.14,1.79-.21,3.58-.2,5.37C249.78,100.38,249.88,102.62,250.06,104.85Zm4.12-26.76q.35-.4.73-.78h0a1.61,1.61,0,0,0,0,.7A2.22,2.22,0,0,0,254.19,78.09Z"
                            fill="#999a1c"
                        ></motion.path>
                        <motion.path
                            variants={pathVariants}
                            d="M250.31,105c.07-1.31.1-2.67.09-4.16,0-1.91-.09-3.81-.26-5.71a32.67,32.67,0,0,0-.77-5.07,39.12,39.12,0,0,0-1.61-5.35c-.18-.46-.36-.91-.56-1.36-.09-.21-.07-.19-.05-.16l-.2-.37c-.46-.87-.93-1.73-1.45-2.56a24.75,24.75,0,0,0-7-7.3,42.74,42.74,0,0,0,3.33,18q.21.51.43,1l.39.86.41.83q.31.62.64,1.24c.85,1.58,1.76,3.12,2.73,4.63C247.65,101.41,248.95,103.23,250.31,105Zm-11-24.74q.08-.53.19-1h0a1.61,1.61,0,0,0,.34.61A2.22,2.22,0,0,0,239.31,80.27Z"
                            fill="#999a1c"
                        ></motion.path>
                        <motion.path
                            variants={pathVariants}
                            d="M250.37,105.7c-.39-.73-.81-1.47-1.29-2.28-.62-1-1.28-2-2-3A20.55,20.55,0,0,0,245,97.94a24.61,24.61,0,0,0-2.6-2.37L241.7,95c-.12-.08-.1-.08-.08-.07l-.23-.14c-.53-.32-1.06-.63-1.61-.91a15.57,15.57,0,0,0-6.12-1.69,26.88,26.88,0,0,0,7.6,8.63l.56.41.48.34.49.31.75.46q1.45.87,3,1.62C247.77,104.61,249.06,105.18,250.37,105.7Zm-13.92-9.8q-.13-.31-.24-.63h0a1,1,0,0,0,.38.22A1.4,1.4,0,0,0,236.45,95.9Z"
                            fill="#999a1c"
                        ></motion.path>
                    </g>
                    <g id="iconsInComputer">
                        <motion.polygon
                            whileHover={{ scale: 1.1 }}
                            variants={pathVariants}
                            points="103.72 144.78 149.91 120.21 122.19 93.74 103.72 144.78"
                            fill="#e88831"
                            onMouseEnter={playAirWhoosh}
                        ></motion.polygon>
                        <motion.circle
                            whileHover={{ scale: 1.1 }}
                            variants={pathVariants}
                            cx="185.9"
                            cy="69.14"
                            r="17.58"
                            onMouseEnter={playAirWhoosh}
                            fill="#7acc92"
                        ></motion.circle>
                        <motion.path
                            whileHover={{ scale: 1.1 }}
                            variants={pathVariants}
                            d="M94,110.23c-2.8-1.6-5.32,2.72-2.52,4.32,8.69,5,1.73,15.88-4.74,19-2.9,1.39-.37,5.71,2.52,4.32C99.36,133,106,117,94,110.23Z"
                            onMouseEnter={playAirWhoosh2}
                            fill="#56403d"
                        ></motion.path>
                        <motion.path
                            whileHover={{ scale: 1.1 }}
                            variants={pathVariants}
                            onMouseEnter={playAirWhoosh2}
                            d="M174,98c-2.66-12.43-19.39-4.8-16.48,6.47,1.26,4.88,6.58,7.72,11.18,5.3A11,11,0,0,0,174,98Zm-4.82,3.12a5.53,5.53,0,0,1-3.07,4.34c-3.82,1.46-3.73-3.39-2.79-5.71C165,95.45,170,96,169.16,101.16Z"
                            fill="#56403d"
                        ></motion.path>
                    </g>
                    <motion.path
                        variants={pathVariants}
                        id="pencil"
                        d="M166.26,257.73a4,4,0,0,1,2.26-3l7.25-4.18,11.2-6.49,13.38-7.75,14.24-8.24,13.77-8,12-6.93,8.85-5.12,4.65-2.69c0,.1.16.1.26.07a3.31,3.31,0,0,1,4,4c-.54,2.1-2.33,3.95-4,5.23a160.8,160.8,0,0,1-16.92,10.62v-2.09c3.94-2.16,12.44-7,16-10.7l-1.7,1-4.68,2.74-7.05,4.12-8.8,5.14L221,231.33l-10.46,6.11-10.36,6.05-9.64,5.64L182.27,254l-6.37,3.72c-1.94,1.14-4.05,2.68-6.31,3.12A3.11,3.11,0,0,1,166.26,257.73Z"
                        fill="#68e1fd"
                    ></motion.path>
                    <g id="notes">
                        <path
                            d="M222.94,151.1,208,160s9.81,9.4,21.24,14.21l13.89-9.07"
                            fill="url(#linear-gradient-6)"
                            style={{ mixBlendMode: 'multiply' }}
                        ></path>
                        <motion.polyline
                            variants={pathVariants}
                            points="221.51 144.75 221.51 151.74 243.1 165.11 269.02 149.27 269.02 143.31"
                            fill="#e54c3c"
                        ></motion.polyline>
                        <motion.polygon
                            variants={pathVariants}
                            points="269.02 143.31 247.01 130.14 221.51 144.75 243.52 158.12 269.02 143.31"
                            fill="#f5604b"
                        ></motion.polygon>
                    </g>
                </g>
            </g>
        </motion.svg>
    );
}

export default AnimatedComputer;
