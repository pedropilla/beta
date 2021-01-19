import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import MarketOverviewConnector from '../../../../connectors/MarketOverviewConnector';
import trans from '../../../../translation/trans';


export default function MarketsOverviewPage(): ReactElement {
    return (
        <section>
            <Helmet>
                <title>
                    {trans('home.title.head', {
                        appName: trans('global.appName'),
                    })}
                </title>
            </Helmet>
            <MarketOverviewConnector />
        </section>
    );
}
