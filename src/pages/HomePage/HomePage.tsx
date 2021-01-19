import React, { useCallback } from 'react';
import Helmet from 'react-helmet';
import { Route, Switch, useHistory, useLocation } from 'react-router';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import BackgroundWave from '../../components/BackgroundWave';
import TabBar from '../../containers/TabBar';
import Page from '../../containers/Page';
import { routePaths } from '../../routes';
import trans from '../../translation/trans';
import ResolutionPage from './sub-pages/ResolutionPage';
import { TabBarItem } from '../../containers/TabBar/TabBar';
import MarketsOverviewPage from './sub-pages/MarketsOverviewPage';
import MarketCreationDialogConnector from '../../connectors/MarketCreationDialogConnector';

import s from './HomePage.module.scss';
import HomeHeaderConnector from '../../connectors/HomeHeaderConnector';


export default function HomePage() {
    const isDesktop = useMediaQuery('(min-width: 1448px)');
    const history = useHistory();
    const location = useLocation();

    const onTabClick = useCallback((item: TabBarItem) => {
        history.push(item.id);
    }, [history]);

    return (
        <Page className={s.homePage} bodyClassName={s.homePageBody} size="large" hasNavigation>
            <Helmet>
                <title>{trans('page.home.title')}</title>
            </Helmet>
            <BackgroundWave />
            <HomeHeaderConnector />
            <TabBar
                className={s.tabBar}
                activeId={location.pathname}
                onTabClick={onTabClick}
                variant={isDesktop ? 'standard' : 'fullWidth'}
                items={[{
                    id: routePaths.root(),
                    label: trans('pages.marketOverview'),
                }, {
                    id: routePaths.resolute(),
                    label: trans('pages.resoluteOverview'),
                }]}
            />
            <MarketCreationDialogConnector />
            <Switch>
                <Route exact path={routePaths.root()} component={MarketsOverviewPage} />
                <Route exact path={routePaths.resolute()} component={ResolutionPage} />
            </Switch>
        </Page>
    );
}
