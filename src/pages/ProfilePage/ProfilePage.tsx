import React, { ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FeesEarnedOverviewConnector from '../../connectors/FeesEarnedOverviewConnector';
import Page from '../../containers/Page';
import { getPoolTokensForAccount } from '../../redux/account/accountActions';
import { Reducers } from '../../redux/reducers';

import s from './ProfilePage.module.scss';


export default function ProfilePage(): ReactElement {
    const dispatch = useDispatch();
    const account = useSelector((store: Reducers) => store.account.account);

    useEffect(() => {
        if (!account) return;
        dispatch(getPoolTokensForAccount(account.accountId));
    }, [dispatch, account]);

    return (
        <Page hasFooter={false} className={s.root} size="large">
            <FeesEarnedOverviewConnector className={s.feesEarned} />
        </Page>
    );
}
