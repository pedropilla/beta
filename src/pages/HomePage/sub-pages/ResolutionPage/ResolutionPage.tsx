import React, { ReactElement, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';
import MarketResolutionOverviewConnector from '../../../../connectors/MarketResolutionOverviewConnector';
import { fetchResolutingMarkets } from '../../../../redux/market/marketActions';
import trans from '../../../../translation/trans';


export default function ResolutionPage(): ReactElement {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchResolutingMarkets());
    }, [dispatch]);

    return (
        <section>
            <Helmet>
                <title>
                    {trans('marketResolution.title.head', {
                        appName: trans('global.appName'),
                    })}
                </title>
            </Helmet>
            <MarketResolutionOverviewConnector />
        </section>
    );
}
