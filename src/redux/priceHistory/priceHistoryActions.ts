import { getPricesHistoryByMarketId } from "../../services/PricesHistoryService";
import { setPriceHistoryLoading, setPricesHistory } from "./priceHistory";

export function fetchPricesHistoryByMarketId(marketId: string) {
    return async (dispatch: Function) => {
        try {
            dispatch(setPriceHistoryLoading(true));

            const pricesHistory = await getPricesHistoryByMarketId(marketId);
            dispatch(setPricesHistory(pricesHistory));

            dispatch(setPriceHistoryLoading(false));
        } catch (error) {
            dispatch(setPriceHistoryLoading(false));
            console.error('[getPricesHistoryByMarketId]', error);
        }
    };
}
