import React, { ReactElement, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MarketCreationDialog from '../../containers/MarketCreationDialog';
import { setMarketCreationDialogOpen } from '../../redux/dialogs/dialogs';
import { Reducers } from '../../redux/reducers';


export default function MarketCreationDialogConnector(): ReactElement {
    const dispatch = useDispatch();
    const isDialogOpen = useSelector((store: Reducers) => store.dialogs.isMarketCreationOpen);

    const handleRequestClose = useCallback(() => {
        dispatch(setMarketCreationDialogOpen(false));
    }, [dispatch]);

    return (
        <MarketCreationDialog open={isDialogOpen} onRequestClose={handleRequestClose} />
    );
}
