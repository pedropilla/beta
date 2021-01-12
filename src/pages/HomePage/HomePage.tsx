import React from 'react';
import Helmet from 'react-helmet';
import BackgroundWave from '../../components/BackgroundWave';
import Page from '../../containers/Page';
import trans from '../../translation/trans';

import s from './HomePage.module.scss';


export default function HomePage() {
    return (
        <Page className={s['home-page']} hasNavigation>
            <Helmet>
                <title>{trans('page.home.title')}</title>
            </Helmet>
            <BackgroundWave />
            Hey
        </Page>
    );
}
