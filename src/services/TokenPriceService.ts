import { COINGECKO_API_URL } from "../config";
import { FetchResult, FetchResultType } from "../models/FetchResult";

export async function getTokenPriceByTicker(ticker: string, currency = 'usd'): Promise<FetchResult<number, string>> {
    try {
        const response = await fetch(`${COINGECKO_API_URL}/coins/${ticker}?localization=false`);
        const data = await response.json();

        return {
            type: FetchResultType.Success,
            data: data.market_data.current_price[currency],
            status: response.status,
        }
    } catch (error) {
        console.error('[getCurrentMainTokenPrice]', error);

        return {
            type: FetchResultType.Error,
            error,
            status: 500,
        }
    }
}


