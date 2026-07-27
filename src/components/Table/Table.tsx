import React from 'react';
import styles from './Table.module.scss';
import type { User } from '../../types/user';

type TableProps = {
  users: User[];
};

const Table: React.FC<TableProps> = ({ users }) => {
  return (
    <div className={styles['table-wrapper']}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Id</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>IP address</th>
            <th>Total clicks</th>
            <th>Total page views</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>{user.ip_address}</td>
              <td>{user.totalClicks}</td>
              <td>{user.totalPageViews}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
