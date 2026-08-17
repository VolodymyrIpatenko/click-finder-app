import React, { useState } from 'react';
import './index.scss';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email) {
      alert(`Subscribed: ${email}`);
      setEmail('');
    }
  };

  return (
    <section className="newsletter">
      <div className="container">
        <div className="newsletter__inner">
          <div className="newsletter__form">
            <input
              className="newsletter__input"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button className="newsletter__btn" onClick={handleSubscribe}>
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
