import React, { ReactElement } from 'react';
import trans from '../../../../translation/trans';

import s from './SwapOverview.module.scss';


export default function SwapOverview(): ReactElement {
    return (
        <div className={s['swap-overview']}>
            <div className={s['swap-overview__info-row']}>
                <span className={s['swap-overview__info-key']}>{trans('market.overview.rate')}</span>
                <span className={s['swap-overview__info-value']}>Key</span>
            </div>

            <div className={s['swap-overview__info-row']}>
                <span className={s['swap-overview__info-key']}>{trans('market.overview.inverseRate')}</span>
                <span className={s['swap-overview__info-value']}>Key</span>
            </div>

            <div className={s['swap-overview__info-row']}>
                <span className={s['swap-overview__info-key']}>{trans('market.overview.estimatedFee')}</span>
                <span className={s['swap-overview__info-value']}>Key</span>
            </div>
        </div>
    );
}
