
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Table from '../../components/Table/Table';
import Pagination from '../../components/Pagination/Pagination';
import { getUsersWithStats } from '../../api/usersApi';
import styles from './Stats.module.scss';
import type { User } from '../../types/user';

const USERS_PER_PAGE = 16;

const Stats: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        const data = await getUsersWithStats(currentPage, USERS_PER_PAGE);
        setUsers(data);
      } catch (e) {
        console.error('Error loading users:', e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, [currentPage]);

  return (
    <div className={styles.stats}>
      <Header variant="stats" progress={isLoading ? 100 : 0} />

      <main className={styles.stats__main}>
        <div className="container">
          <nav>
            <ul className={styles.stats__nav_list}>
              <li className={styles.stats__nav_list_item}>
                <Link to="/" className={styles.stats__statistics__link_back}>
                  Main page
                </Link>
              </li>
              <li className={styles.stats__arrow}> </li>
              <li className={styles.stats__nav_list_item}>
                <Link to="/stats" className={styles.stats__statistics__link}>
                  User statistics
                </Link>
              </li>
            </ul>
          </nav>

          <h1 className={styles.stats__title}>Users statistics</h1>

          <div
            style={{
              opacity: isLoading ? 0.5 : 1,
              transition: 'opacity 0.2s linear',
            }}
          >
            <Table users={users} />
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(1000 / USERS_PER_PAGE)}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Stats;