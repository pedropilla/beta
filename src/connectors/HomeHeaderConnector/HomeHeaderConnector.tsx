import React, { ReactElement, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import HomeHeader from '../../containers/HomeHeader';
import { setMarketCreationDialogOpen } from '../../redux/dialogs/dialogs';


export default function HomeHeaderConnector(): ReactElement {
    const dispatch = useDispatch();

    const handleCreateMarketClick = useCallback(() => {
        dispatch(setMarketCreationDialogOpen(true));
    }, [dispatch]);

    return (
        <HomeHeader onCreateMarketClick={handleCreateMarketClick} />
    );
}
