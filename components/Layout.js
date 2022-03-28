import styles from '../styles/Layout.module.css';

import Navbar from './Navbar';
import Footer from './Footer';

function Layout({ children }) {
    return (
        <div className={`${styles.flex}`}>
            <Navbar />
            <main className={`${styles.main} container`}>{children}</main>
            <Footer />
        </div>
    );
}

export default Layout;
