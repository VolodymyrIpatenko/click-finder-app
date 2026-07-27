

import type { User, Stat } from '../types/user';


const BASE_URL = 'https://appco-snowy.vercel.app/api';

export const getUsersWithStats = async (
  page: number,
  limit: number,
): Promise<User[]> => {
  const res = await fetch(
    `${BASE_URL}/users?page=${page}&rowsPerPage=${limit}`,
  );
  if (!res.ok) throw new Error('Failed to fetch users');
  const data = await res.json();
  const usersData: User[] = data.data || data.users || [];

  if (usersData.length === 0) return [];

  const ids = usersData.map((u) => u.id).join(',');
  const statsRes = await fetch(`${BASE_URL}/users/statistics?userIds=${ids}`);
  if (!statsRes.ok) throw new Error('Failed to fetch stats');
  const statsData: Stat[] = await statsRes.json();

  const statsMap: Record<number, { clicks: number; views: number }> = {};
  statsData.forEach((item) => {
    if (!statsMap[item.user_id]) {
      statsMap[item.user_id] = { clicks: 0, views: 0 };
    }
    statsMap[item.user_id].clicks += item.clicks;
    statsMap[item.user_id].views += item.page_views;
  });

  return usersData.map((user) => ({
    ...user,
    totalClicks: statsMap[user.id]?.clicks || 0,
    totalPageViews: statsMap[user.id]?.views || 0,
  }));
};

