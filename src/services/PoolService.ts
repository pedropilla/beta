import createProtocolContract from "./contracts/ProtocolContract";

export interface SeedPoolFormValues {
    outcomePercentages: number[];
    mainTokenInput: number;
}

export async function seedPool(marketId: string, values: SeedPoolFormValues) {
    const protocol = await createProtocolContract();

    protocol.seedPool(
        marketId,
        values.mainTokenInput.toString(),
        values.outcomePercentages.map(outcome => outcome.toString())
    );
}
