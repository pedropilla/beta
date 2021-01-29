import { formatCollateralToken } from "../../../../../services/CollateralTokenService";
import { SwapFormValues } from "../../../../../services/SwapService";
import BN from "bn.js";
import { BUY, DEFAULT_FEE, ONE } from "../../../../../config";

export interface OverviewValues {
    rateInOut: string,
    rateOutIn: string,
    feePaid: string,

}

export default function mutateFormValues(formValues: SwapFormValues): OverviewValues {
    // Check if amountIn / amountOut are valid for calculation
    if (formValues.amountIn === "" || formValues.amountIn === "0" || formValues.amountOut === "0" || formValues.amountIn === "") {
        return {
            rateInOut: "0",
            rateOutIn: "0",
            feePaid: "0",
        }
    }

    const amountInBN = new BN(formValues.amountIn);
    const amountOutBN = new BN(formValues.amountOut);
    const rateInOut = formatCollateralToken(amountInBN.mul(ONE).div(amountOutBN).toString());
    const rateOutIn = formatCollateralToken(amountOutBN.mul(ONE).div(amountInBN).toString());
    const feedAmount = formValues.type === BUY ? formValues.amountIn : formValues.amountOut;
    const feePaid = formatCollateralToken(new BN(feedAmount).mul(new BN(DEFAULT_FEE)).div(new BN("100")).toString());

    return {
        rateInOut,
        rateOutIn,
        feePaid,
    }
}
