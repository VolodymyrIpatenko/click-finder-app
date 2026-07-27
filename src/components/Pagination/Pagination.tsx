
import React, { useMemo } from 'react';
import styles from './Pagination.module.scss';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};


const generatePageNumbers = (
  currentPage: number,
  totalPages: number,
): (number | string)[] => {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const pages: (number | string)[] = [1];

  if (currentPage > 4) {
    pages.push('dots-left'); 
  }

  const start = Math.max(2, currentPage - 2);
  const end = Math.min(totalPages - 1, currentPage + 2);

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  if (currentPage < totalPages - 3) {
    pages.push('dots-right');
  }

  pages.push(totalPages);

  return pages;
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
 
  const pages = useMemo(
    () => generatePageNumbers(currentPage, totalPages),
    [currentPage, totalPages],
  );

  const handlePrev = () => onPageChange(Math.max(1, currentPage - 1));
  const handleNext = () => onPageChange(Math.min(totalPages, currentPage + 1));

  return (
    <nav className={styles.pagination} aria-label="Pagination Navigation">
      <button
        type="button"
        aria-label="Previous page"
        className={`${styles.pagination__btn} ${styles['pagination__btn--left']}`}
        onClick={handlePrev}
        disabled={currentPage === 1}
      />

      {pages.map((page) => {
        if (typeof page === 'string') {
          return (
            <span
              key={page} 
              className={`${styles.pagination__btn} ${styles['pagination__btn--ellipsis']}`}
            >
              ...
            </span>
          );
        }

        const isActive = page === currentPage;
        const btnClass = `${styles.pagination__btn} ${isActive ? styles['pagination__btn--active'] : ''}`;

        return (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            className={btnClass}
            aria-current={isActive ? 'page' : undefined}
          >
            {page}
          </button>
        );
      })}

      <button
        type="button"
        aria-label="Next page"
        className={`${styles.pagination__btn} ${styles['pagination__btn--right']}`}
        onClick={handleNext}
        disabled={currentPage === totalPages}
      />
    </nav>
  );
};

export default Pagination;