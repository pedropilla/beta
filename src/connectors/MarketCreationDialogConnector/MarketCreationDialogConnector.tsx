import React, { ReactElement, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MarketCreationDialog from '../../containers/MarketCreationDialog';
import { setMarketCreationDialogOpen } from '../../redux/dialogs/dialogs';
import { createNewMarket } from '../../redux/market/marketActions';
import { Reducers } from '../../redux/reducers';
import { MarketFormValues } from '../../services/MarketService';


export default function MarketCreationDialogConnector(): ReactElement {
    const dispatch = useDispatch();
    const isDialogOpen = useSelector((store: Reducers) => store.dialogs.isMarketCreationOpen);

    const handleRequestClose = useCallback(() => {
        dispatch(setMarketCreationDialogOpen(false));
    }, [dispatch]);

    const handleSubmit = useCallback((market: MarketFormValues) => {
        dispatch(createNewMarket(market));
    }, [dispatch]);

    return (
        <MarketCreationDialog
            open={isDialogOpen}
            onRequestClose={handleRequestClose}
            onSubmit={handleSubmit}
        />
    );
}
