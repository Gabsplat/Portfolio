import styles from '../styles/Home.module.css';

import Hero from '../page-components/hero/Hero';
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
    return (
        <>
            <Hero />
            <div style={{ height: '200vh' }}></div>
        </>
    );
}
