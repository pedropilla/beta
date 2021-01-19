import React, { ReactElement, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import Menu from '../../containers/Menu';
import { getAccount, signIn, signOut } from '../../redux/account/accountActions';
import { Reducers } from '../../redux/reducers';
import { routePaths } from '../../routes';


export default function MenuConnector(): ReactElement {
    const dispatch = useDispatch();
    const history = useHistory();
    const accountInfo = useSelector((store: Reducers) => store.account.account);

    useEffect(() => {
        if (!accountInfo) {
            dispatch(getAccount());
        }
    }, [dispatch, accountInfo]);

    const handleLoginClick = useCallback(() => {
        dispatch(signIn());
    }, [dispatch]);

    const handleLogoutClick = useCallback(() => {
        dispatch(signOut());
    }, [dispatch]);

    const handleProfileClick = useCallback(() => {
        history.push(routePaths.profile());
    }, []);

    return (
        <Menu
            onLoginClick={handleLoginClick}
            onLogoutClick={handleLogoutClick}
            onProfileClick={handleProfileClick}
            account={accountInfo}
        />
    );
}
