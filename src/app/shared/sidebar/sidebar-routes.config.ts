import { ROUTING_PATHS } from './../../app.constants';
import { RouteInfo } from './sidebar.metadata';

//Sidebar menu Routes and data
export const ROUTES: RouteInfo[] = [

    { path: ROUTING_PATHS.dashboard, title: 'Dashboard', icon: 'ft-bar-chart', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },

     { path: ROUTING_PATHS.users, title: 'Users', icon: 'ft-users', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    
    { path: ROUTING_PATHS.candidates, title: 'Candidates', icon: 'ft-award', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
];
