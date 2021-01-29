import Big from 'big.js';
import { formatCollateralToken } from '../services/CollateralTokenService';
import trans from '../translation/trans';
import { TokenViewModel } from './TokenViewModel';
import { GraphUserBalancesItem } from './UserBalance';

export interface EarnedFeesGraphData {
    fees: string;
    outcomeId: number;
    poolId: string;
    balance: string;
    market?: {
        description: string;
    }
}

export interface GraphAcountBalancesResponse {
    earned_fees: EarnedFeesGraphData[];
    balances: GraphUserBalancesItem[];
}

export interface PoolToken {
    outcomeId: number;
    poolId: string;
    fees: string;
    balance: string;
    balanceFormatted: string;
    marketDescription: string;
    marketId: string;
}

export function transformToPoolToken(graphData: EarnedFeesGraphData): PoolToken {
    return {
        balanceFormatted: formatCollateralToken(graphData.balance),
        balance: graphData.balance,
        fees: graphData.fees,
        marketDescription: graphData.market?.description || '',
        marketId: graphData.poolId,
        outcomeId: graphData.outcomeId,
        poolId: graphData.poolId,
    }
}

export function transformPoolTokenToTokenViewModel(pooltoken: PoolToken): TokenViewModel {
    return {
        balance: pooltoken.balance,
        balanceFormatted: pooltoken.balanceFormatted,
        decimals: 18,
        odds: new Big(0),
        outcomeId: NaN,
        poolBalance: '0',
        poolWeight: new Big(0),
        price: 0,
        tokenName: trans('global.poolToken'),
        tokenSymbol: '',
        weight: 0,
    };
}
