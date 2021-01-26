import { DEFAULT_FEE } from "../../../config";
import { TokenViewModel } from "../../../models/TokenViewModel";
import { formatCollateralToken, toCollateralToken } from "../../../services/CollateralTokenService";
import { calcBuyAmountInShares } from "../../../utils/calcBuyAmountInShares";
import { SwapFormValues } from "./../../../services/SwapService";
import Big from "big.js";
import { calcSellAmountInCollateral } from "../../../utils/calcSellAmountOut";

export default function mutateFormValues(collateralAccountId: string, formValues: SwapFormValues, tokens: TokenViewModel[]): SwapFormValues {
    let poolBalances = tokens.map(token => new Big(token.poolWeight.toString()));
    let buy = formValues.fromToken.tokenAccountId == collateralAccountId;
    const formattedFee = DEFAULT_FEE / 100;
    console.log(poolBalances)
    const amountOut = buy ? calcBuyAmountInShares(
            new Big(formValues.amountIn), 
            formValues.toToken.outcomeId, 
            poolBalances, 
            formattedFee
        ) :
        calcSellAmountInCollateral(
            new Big(formValues.amountIn),
            formValues.fromToken.outcomeId,
            poolBalances,
            formattedFee
        )

    if (!amountOut) {
        return {
            ...formValues,
            formattedAmountOut: "0",
            amountOut: "0"
        }
    }
    console.log(amountOut.toString())
    return {
        ...formValues,
        formattedAmountOut: formatCollateralToken(amountOut.toString()),
        amountOut: amountOut.toString()
    };
}