import { calcDistributionHint } from "../utils/calcDistributionHint";
import createProtocolContract from "./contracts/ProtocolContract";
import createTokenContract from "./contracts/TokenContract";
import { toMainTokenFraction } from "./MainTokenService";

export interface SeedPoolFormValues {
    outcomePercentages: number[];
    mainTokenInput: number;
}

export async function seedPool(marketId: string, values: SeedPoolFormValues) {
    const protocol = await createProtocolContract();
    const weights = calcDistributionHint(values.outcomePercentages);

    protocol.seedPool(
        marketId,
        toMainTokenFraction(values.mainTokenInput.toString()),
        weights.map(outcome => outcome.toString())
    );
}

export async function publishPool(marketId: string, amountIn: string, tokenId: string) {
    const token = await createTokenContract(tokenId);

    console.log('[] token -> ', token);

    token.publishPool(marketId, amountIn);
}
