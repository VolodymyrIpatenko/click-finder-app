import type { User } from '../../../types/user';

const BASE_URL = 'https://appco-snowy.vercel.app/api';
const FETCH_ERROR_MESSAGE = 'Internal server error. Please try again later.';

export interface Stat {
  user_id: number;
  date: string;
  clicks: number;
  page_views: number;
}

export interface FetchUsersResult {
  users: User[];
  totalPages: number;
}

export const fetchUsersWithStats = async (
  page: number = 1,
  limit: number = 16,
): Promise<FetchUsersResult> => {
  try {
    
    const res = await fetch(`${BASE_URL}/users?page=${page}&rowsPerPage=${limit}`);
    
    if (!res.ok) {
      throw new Error(FETCH_ERROR_MESSAGE);
    }
    
    const data = await res.json();
    const usersData: User[] = data.data || data.users || [];
    const totalPages = data.totalPages || data.pagesCount || 63;

    if (usersData.length === 0) {
      return { users: [], totalPages: 1 };
    }

    
    const ids = usersData.map((u) => u.id).join(',');
    const statsRes = await fetch(`${BASE_URL}/users/statistics?userIds=${ids}`);
    
    if (!statsRes.ok) {
      throw new Error(FETCH_ERROR_MESSAGE);
    }
    
    const statsData: Stat[] = await statsRes.json();

  
    const statsMap: Record<number | string, { clicks: number; views: number }> = {};
    
    statsData.forEach((item) => {
      if (!statsMap[item.user_id]) {
        statsMap[item.user_id] = { clicks: 0, views: 0 };
      }
      statsMap[item.user_id].clicks += item.clicks || 0;
      statsMap[item.user_id].views += item.page_views || 0;
    });

  
    const mergedUsers: User[] = usersData.map((user) => ({
      ...user,
      totalClicks: statsMap[user.id]?.clicks || 0,
      totalPageViews: statsMap[user.id]?.views || 0,
    }));

    return {
      users: mergedUsers,
      totalPages,
    };
  } catch (err: unknown) {
    console.error('fetchUsersWithStats error:', err);
    return { users: [], totalPages: 1 };
  }
};