
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

interface HeaderProps {
  variant?: 'default' | 'stats';
  progress?: number; 
}

const Header: React.FC<HeaderProps> = ({
  variant = 'default',
  progress = 0,
}) => {
  const isStats = variant === 'stats';

  return (
    <>
      <header
        className={`${styles.header} ${isStats ? styles['header--stats'] : ''}`}
      >
        <div className="container">
          <Link to="/" className={styles.header__logo}>
            ClickFinder
          </Link>
        </div>
      </header>

      {isStats && (
        <div className={styles.progress}>
          <div
            className={styles.progress__bar}
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </>
  );
};

export default Header;
