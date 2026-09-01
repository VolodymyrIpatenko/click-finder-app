export type User = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  ip_address: string;
  totalClicks: number;
  totalPageViews: number;
};

export type Stat = {
  user_id: number;
  date: string;
  page_views: number;
  clicks: number;
};