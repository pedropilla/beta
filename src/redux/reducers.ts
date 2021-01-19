import { combineReducers } from 'redux';

import pools, { PoolState } from './pools/pools';
import market, { MarketState } from './market/market';
import priceHistory, { PriceHistoryState } from './priceHistory/priceHistory';
import dialogs, { DialogsState } from './dialogs/dialogs';
export interface Reducers {
    pools: PoolState;
    market: MarketState;
    priceHistory: PriceHistoryState;
    dialogs: DialogsState;
}

export default combineReducers<Reducers>({
    pools,
    market,
    priceHistory,
    dialogs,
});
