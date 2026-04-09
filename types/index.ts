import { IconType } from 'react-icons';

export interface NavItem {
  title: string;
  href: string;
  icon: IconType;
}

export interface ActivityItem {
  id: number;
  user: string;
  action: string;
  time: string;
}