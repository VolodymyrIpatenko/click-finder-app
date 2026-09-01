import { useState, useEffect, FC } from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Table from '@components/StatsTable';
import Pagination from '@components/Pagination';
import Breadcrumbs from '@components/Breadcrumbs';
import type { User } from '../../types/user';
import { fetchUsersWithStats } from '@components/StatsTable/gateways';

const PAGE_LIMIT = 16;
const DEFAULT_TOTAL_PAGES = 63;

export const StatsPage: FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [users, setUsers] = useState<User[]>([]);
  const [totalPages, setTotalPages] = useState<number>(DEFAULT_TOTAL_PAGES);

  useEffect(() => {
    let isSubscribed = true;

    const loadStatsData = async () => {
      setIsLoading(true);

      try {
        const response = await fetchUsersWithStats(currentPage, PAGE_LIMIT);

        if (!isSubscribed) return;

        setUsers(response.users);
        setTotalPages(
          response.totalPages > 0 ? response.totalPages : DEFAULT_TOTAL_PAGES
        );
      } catch (error) {
        console.error('Failed to fetch stats data:', error);
        if (isSubscribed) {
          setUsers([]);
        }
      } finally {
        if (isSubscribed) {
          setIsLoading(false);
        }
      }
    };

    loadStatsData();

    return () => {
      isSubscribed = false;
    };
  }, [currentPage]);

  return (
    <>
      <Header isStatsPage />

      <div id="linear-progress" className={isLoading ? '' : 'hidden'}>
        <div className="bar" />
      </div>

      <main className="stats">
        <div className="stats__container">
          <Breadcrumbs />

          <h1 className="stats__title">Users statistics</h1>

          <Table users={users} />

          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </div>
      </main>

      <Footer isStatsPage />
    </>
  );
};

export default StatsPage;
