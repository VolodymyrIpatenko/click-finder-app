

import React from 'react';
import { features } from './featuresData';
import './index.scss';

export const Features: React.FC = () => {
  return (
    <section className="features">
      <div className="container">
        <h2 className="features__title">
          Why <span>small business owners love</span> ClickFinder?
        </h2>

        <p className="features__sub">
          Our design projects are fresh and simple and will benefit your
          business greatly. Learn more about our work!
        </p>

        <ul className="features__grid">
          {features.map((feature) => (
            <li key={feature.id} className="features__card">
              <img
                src={feature.image}
                alt={feature.title}
                className="features__card_img"
              />
              <h3 className="features__card_title">{feature.title}</h3>
              <p className="features__card_desc">{feature.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};