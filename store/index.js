import { Store as PullStateStore } from 'pullstate';

import { lists, homeItems, notifications, emLogInfo } from '../components/pages/index';

const Store = new PullStateStore({
  safeAreaTop: 0,
  safeAreaBottom: 0,
  menuOpen: false,
  notificationsOpen: false,
  currentPage: null,
  emLogInfo,
  lists,
  notifications,
  settings: {
    enableNotifications: true,
  },
});

export default Store;
