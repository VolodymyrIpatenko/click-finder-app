import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Hero.module.scss';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.hero__inner}>
          <div className={styles.hero__content}>
            <h1 className={styles.hero__title}>
              <b>Brainstorming</b> for
              <br />
              desired perfect Usability
            </h1>
            <p className={styles.hero__subtitle}>
              Our design projects are fresh and simple and will benefit your
              business greatly. Learn more about our work!
            </p>
            <Link to="/stats" className={styles.hero__link}>
              Views Stats
            </Link>
          </div>

          <img className={styles.hero__img} src="/images/iPhoneX.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
