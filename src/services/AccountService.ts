import { gql } from "@apollo/client";
import { NULL_CONTRACT } from "../config";
import { Account } from "../models/Account";
import { PoolToken } from "../models/PoolToken";
import { GraphUserBalanceResponse, transformToUserBalance, UserBalance } from "../models/UserBalance";
import trans from "../translation/trans";
import { graphqlClient } from "./GraphQLService";
import { connectWallet } from "./WalletService";

export async function signUserIn() {
    const connectedWallet = await connectWallet();

    connectedWallet.requestSignIn(NULL_CONTRACT, trans('global.appName'));
}

export async function getAccountInfo(): Promise<Account | null> {
    const connectedWallet = await connectWallet();

    if (!connectedWallet.isSignedIn()) {
        return null;
    }

    const nearAccount = connectedWallet.account();

    return {
        accountId: nearAccount.accountId,
        balance: (await nearAccount.getAccountBalance()).available,
    };
}

export async function signUserOut() {
    const connectedWallet = await connectWallet();
    connectedWallet.signOut();
}

export async function getPoolTokensByAccountId(accountId: string): Promise<PoolToken[]> {
    try {
        const result = await graphqlClient.query({
            query: gql`
                query Account($accountId: String!) {
                    getAccount(accountId: $accountId) {
                        earned_fees {
                            fees
                            outcomeId
                            poolId
                        }
                        balances {
                            balance
                            outcome_id
                        }
                    }
                }
            `,
            variables: {
                accountId,
            }
        });

        console.log('[] result -> ', result);

        const x: PoolToken[] = [
            {
                marketId: "1",
                fees: '10000',
                outcomeId: 1,
                poolId: "1",
                marketDescription: 'Will x do y?',
                balance: '10000',
            }
        ];

        return x;
    } catch (error) {
        console.error('[getPoolTokensByAccountId]', error);
        return [];
    }
}

export async function getBalancesForMarketByAccount(accountId: string, marketId: string): Promise<UserBalance[]> {
    try {
        const result = await graphqlClient.query({
            query: gql`
                query AccountMarketBalances($accountId: String!, $marketId: String) {
                    account: getAccount(accountId: $accountId) {
                        balances(poolId: $marketId) {
                            balance
                            outcome_id
                        }
                    }
                }
            `,
            variables: {
                accountId,
                marketId,
            }
        });

        const data: GraphUserBalanceResponse = result.data.account;
        return data.balances.map(transformToUserBalance);
    } catch (error) {
        console.error('[getBalancesForMarketByAccount]', error);
        return [];
    }
}
