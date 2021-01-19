import React, { ReactElement } from 'react';
import Button from '../../components/Button';
import trans from '../../translation/trans';

import s from './HomeHeader.module.scss';

interface Props {
    onCreateMarketClick: () => void;
}

export default function HomeHeader({
    onCreateMarketClick,
}: Props): ReactElement {
    return (
        <div className={s.root}>
            <div className={s.titleWrapper}>
                <h1 className={s.title}>{trans('home.title.welcome', { username: 'flux.testnet' })}</h1>
                <span className={s.subTitle}>{trans('home.title.latestTrends')}</span>
            </div>

            <Button onClick={onCreateMarketClick}>{trans('global.actions.createMarket')}</Button>
        </div>
    );
}
