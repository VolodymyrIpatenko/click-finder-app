import React from 'react';
import styles from './Footer.module.scss';
import { useLocation } from 'react-router-dom';

const Footer: React.FC = () => {
  const location = useLocation();

  const isStatsPage = location.pathname === '/stats';
  return (
    <footer
      className={`${styles.footer} ${
        isStatsPage ? styles['footer--stats'] : ''
      }`}
    >
      <div className="container">
        <div className={styles.footer__inner}>
          <a href="/" className={styles.footer__logo}>
            ClickFinder
          </a>
          <div className={styles.footer__copy}>
            All rights reserved by ThemeTags
          </div>
          <div className={styles.footer__rights}>Copyrights © 2025</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
