
import React from 'react';
import styles from './Features.module.scss';
import { features } from './featuresData';

const Features: React.FC = () => {
  return (
    <section className={styles.features}>
      <div className="container">
        <h2 className={styles.features__title}>
          Why <span>small business owners love</span> ClickFinder?
        </h2>

        <p className={styles.features__sub}>
          Our design projects are fresh and simple and will benefit your
          business greatly. Learn more about our work!
        </p>

        <ul className={styles.features__grid}>
          {features.map((feature) => (
            <li key={feature.id} className={styles.features__card}>
              <img
                src={feature.image}
                alt={feature.title}
                className={styles.features__card_img}
              />
              <h3 className={styles.features__card_title}>{feature.title}</h3>
              <p className={styles.features__card_desc}>{feature.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Features;