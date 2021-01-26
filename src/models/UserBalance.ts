export interface UserBalance {
    outcomeId: number;
    balance: string;
}

interface GraphUserBalancesItem {
    balance: string;
    outcome_id: number;
}

export interface GraphUserBalanceResponse {
    balances: GraphUserBalancesItem[];
}

export function transformToUserBalance(graphData: GraphUserBalancesItem): UserBalance {
    return {
        balance: graphData.balance,
        outcomeId: graphData.outcome_id,
    }
}
