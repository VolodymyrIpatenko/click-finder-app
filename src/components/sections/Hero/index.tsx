
import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

export const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__inner">
          <div className="hero__content">
            <h1 className="hero__title">
              <b>Brainstorming</b> for
              <br />
              desired perfect Usability
            </h1>
            <p className="hero__subtitle">
              Our design projects are fresh and simple and will benefit your
              business greatly. Learn more about our work!
            </p>
            <Link to="/stats" className="hero__link">
              Views Stats
            </Link>
          </div>

          <img className="hero__img" src="/images/iPhoneX.png" alt="" />
        </div>
      </div>
    </section>
  );
};