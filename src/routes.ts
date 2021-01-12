import * as Router from 'react-router';
import HomePage from './pages/HomePage';
import MarketPage from './pages/MarketPage';

interface RouteProps extends Router.RouteProps {
    inNavigation: boolean;
    key: string;
    label: string;
    icon?: string;
}

export const routePaths = {
    root: () => '/',
    marketDetail: (marketId = ':marketId') => `/markets/${marketId}`,
}

export const routes: RouteProps[] = [
    {
        component: HomePage,
        exact: true,
        inNavigation: false,
        key: 'home',
        label: 'Home',
        path: routePaths.root(),
    },
    {
        component: MarketPage,
        exact: true,
        inNavigation: false,
        key: 'market',
        label: 'Market',
        path: routePaths.marketDetail(),
    }
];
