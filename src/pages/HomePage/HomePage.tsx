import React from 'react';
import Helmet from 'react-helmet';
import { Route, Switch } from 'react-router';

import BackgroundWave from '../../components/BackgroundWave';
import TabBar from '../../containers/TabBar';
import Page from '../../containers/Page';
import { routePaths } from '../../routes';
import trans from '../../translation/trans';
import ResolutionPage from './sub-pages/ResolutionPage';

import s from './HomePage.module.scss';
import MarketsOverviewPage from './sub-pages/MarketsOverviewPage';


export default function HomePage() {
    return (
        <Page className={s.homePage} hasNavigation>
            <Helmet>
                <title>{trans('page.home.title')}</title>
            </Helmet>
            <BackgroundWave />
            <TabBar
                className={s.tabBar}
                items={[{
                    href: routePaths.root(),
                    label: trans('pages.marketOverview'),
                }, {
                    href: routePaths.resolute(),
                    label: trans('pages.resoluteOverview'),
                }]}
            />
            <Switch>
                <Route exact path={routePaths.root()} component={MarketsOverviewPage} />
                <Route exact path={routePaths.resolute()} component={ResolutionPage} />
            </Switch>
        </Page>
    );
}
