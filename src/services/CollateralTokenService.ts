// import { utils } from 'near-api-js';
import BN from 'bn.js';

import { FUNGIBLE_TOKEN_ACCOUNT_ID } from "../config";
import { isFetchResultSuccesful } from "../models/FetchResult";
import { getTokenPriceByTicker } from "./TokenPriceService";
import { connectNear } from "./WalletService";

export function formatCollateralToken(amount: string, decimals = 18): string {
    const denominator = new BN(10).pow(new BN(decimals));
    return new BN(amount).div(denominator).toString();
}

export function toCollateralToken(amount: string, decimals = 18): string {
    const denominator = new BN(10).pow(new BN(decimals));
    return new BN(amount).mul(denominator).toString();
}

export interface AccountTokenBalance {
    balance: string;
    balanceFormatted: string;
}

export async function getCollateralTokenBalance(tokenAccountId: string, accountId: string): Promise<AccountTokenBalance> {
    const near = await connectNear();
    const account = await near.account(accountId);

    // if (tokenAccountId === FUNGIBLE_TOKEN_ACCOUNT_ID) {
    //     const result = await account.getAccountBalance();

    //     return {
    //         balance: result.available,
    //         balanceFormatted: utils.format.formatNearAmount(result.available, 3),
    //     };
    // }

    const result = await account.viewFunction(tokenAccountId, 'get_balance', {
        account_id: accountId,
    });

    return {
        balance: result,
        balanceFormatted: formatCollateralToken(result),
    };
}

export async function getCollateralTokenPrice(tokenAccountId: string): Promise<number> {
    if (tokenAccountId === FUNGIBLE_TOKEN_ACCOUNT_ID) {
        const response = await getTokenPriceByTicker('near');

        if (isFetchResultSuccesful(response)) {
            return response.data;
        }
    }

    return 0;
}
