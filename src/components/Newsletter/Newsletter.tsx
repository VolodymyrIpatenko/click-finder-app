import React, { useState } from 'react';
import styles from './Newsletter.module.scss';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email) {
      alert(`Subscribed: ${email}`);
      setEmail('');
    }
  };

  return (
    <section className={styles.newsletter}>
      <div className="container">
        <div className={styles.newsletter__inner}>
          <div className={styles.newsletter__form}>
            <input
              className={styles.newsletter__input}
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              className={styles.newsletter__btn}
              onClick={handleSubscribe}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
