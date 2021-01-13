import { combineReducers } from 'redux';

import pools, { PoolState } from './pools/pools';
import market, { MarketState } from './market/market';
import priceHistory, { PriceHistoryState } from './priceHistory/priceHistory';
export interface Reducers {
    pools: PoolState;
    market: MarketState;
    priceHistory: PriceHistoryState;
}

export default combineReducers<Reducers>({
    pools,
    market,
    priceHistory,
});
