import { calcDistributionHint } from "../utils/calcDistributionHint";
import { toCollateralToken } from "./CollateralTokenService";
import createProtocolContract from "./contracts/ProtocolContract";
import createTokenContract from "./contracts/TokenContract";

export interface SeedPoolFormValues {
    outcomePercentages: number[];
    mainTokenInput: number;
}

export async function seedPool(marketId: string, values: SeedPoolFormValues) {
    const protocol = await createProtocolContract();
    const weights = calcDistributionHint(values.outcomePercentages);

    protocol.seedPool(
        marketId,
        toCollateralToken(values.mainTokenInput.toString()),
        weights.map(outcome => outcome.toString())
    );
}

export async function publishPool(marketId: string, amountIn: string, tokenId: string) {
    const token = await createTokenContract(tokenId);

    token.publishPool(marketId, amountIn);
}
