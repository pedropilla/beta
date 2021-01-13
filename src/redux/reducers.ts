import { combineReducers } from 'redux';

import pools, { PoolState } from './pools/pools';
import market, { MarketState } from './market/market';

export interface Reducers {
    pools: PoolState;
    market: MarketState;
}

export default combineReducers<Reducers>({
    pools,
    market,
});
