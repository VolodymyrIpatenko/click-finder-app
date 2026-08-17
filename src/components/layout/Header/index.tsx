
import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

interface HeaderProps {
  variant?: 'default' | 'stats';
  progress?: number;
}

export const Header: React.FC<HeaderProps> = ({
  variant = 'default',
  progress = 0,
}) => {
  const isStats = variant === 'stats';

  return (
    <>
      <header className={`header ${isStats ? 'header--stats' : ''}`}>
        <div className="container">
          <Link to="/" className="header__logo">
            ClickFinder
          </Link>
        </div>
      </header>

      {isStats && (
        <div className="progress">
          <div className="progress__bar" style={{ width: `${progress}%` }} />
        </div>
      )}
    </>
  );
};