import { getMarketById, getMarkets, getResolutingMarkets, MarketFilters } from "../../services/MarketService";
import { setMarketErrors, setMarketLoading, setMarketDetail, setMarkets, setResolutingMarkets } from "./market";

export function fetchMarketById(id: string) {
    return async (dispatch: Function) => {
        try {
            dispatch(setMarketLoading(true));

            const market = await getMarketById(id);

            if (!market) {
                dispatch(setMarketErrors(['Could not find market']));
                return;
            }

            dispatch(setMarketDetail(market));
            dispatch(setMarketLoading(false));
        } catch (error) {
            dispatch(setMarketLoading(false));
            console.error('[fetchMarketById]', error);
        }
    };
}

export function fetchMarkets(filters: MarketFilters) {
    return async (dispatch: Function) => {
        try {
            dispatch(setMarketLoading(true));

            const markets = await getMarkets(filters);

            dispatch(setMarkets(markets));
            dispatch(setMarketLoading(false));
        } catch (error) {
            dispatch(setMarketLoading(false));
            console.error('[fetchMarkets]', error);
        }
    }
}

export function fetchResolutingMarkets() {
    return async (dispatch: Function) => {
        try {
            dispatch(setMarketLoading(true));

            const markets = await getResolutingMarkets();

            dispatch(setResolutingMarkets(markets));
            dispatch(setMarketLoading(false));
        } catch (error) {
            dispatch(setMarketLoading(false));
            console.error('[fetchMarkets]', error);
        }
    }
}
