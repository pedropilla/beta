import { combineReducers } from 'redux';

import pools, { PoolState } from './pools/pools';

export interface Reducers {
    pools: PoolState;
}

export default combineReducers<Reducers>({
    pools,
});
