import * as Router from 'react-router';
import HomePage from './pages/HomePage';

interface RouteProps extends Router.RouteProps {
    inNavigation: boolean;
    key: string;
    label: string;
    icon?: string;
}

export const routePaths = {
    root: () => '/',
}

export const routes: RouteProps[] = [
    {
        component: HomePage,
        exact: true,
        inNavigation: false,
        key: 'home',
        label: 'Home',
        path: routePaths.root(),
    }
];
