// import React from 'react';
// import type { User } from '../../../src/types/user';
// import './index.scss';

// type TableProps = {
//   users: User[];
// };

// export const Table: React.FC<TableProps> = ({ users }) => {
//   return (
//     <div className="table-wrapper">
//       <table className="table">
//         <thead>
//           <tr>
//             <th>Id</th>
//             <th>First name</th>
//             <th>Last name</th>
//             <th>Email</th>
//             <th>Gender</th>
//             <th>IP address</th>
//             <th>Total clicks</th>
//             <th>Total page views</th>
//           </tr>
//         </thead>

//         <tbody>
//           {users.map(user => (
//             <tr key={user.id}>
//               <td>{user.id}</td>
//               <td>{user.first_name}</td>
//               <td>{user.last_name}</td>
//               <td>{user.email}</td>
//               <td>{user.gender}</td>
//               <td>{user.ip_address}</td>
//               <td>{user.totalClicks ?? 0}</td>
//               <td>{user.totalPageViews ?? 0}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Table;

import React from 'react';
import type { User } from '../../../src/types/user';
import './index.scss';

type TableProps = {
  users: User[];
};

export const Table: React.FC<TableProps> = ({ users }) => {
  return (
    // ЗМІНЕНО: table-wrapper -> table-holder
    <div className="table-holder">
      {/* ЗМІНЕНО: table -> stats-table */}
      <table className="stats-table">
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
          {users.map(user => (
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