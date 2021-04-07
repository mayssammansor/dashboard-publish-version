import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'S e t t i n g'
  },
  {
    name: 'Users',
    url: '/setting/users',
    icon: 'icon-drop'
  },
  {
    name: 'Services',
    url: '/setting/services',
    icon: 'icon-drop'
  },
  
];
