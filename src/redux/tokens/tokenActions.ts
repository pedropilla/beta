import { isFetchResultSuccesful } from "../../models/FetchResult";
import { getMainToken } from "../../services/MainTokenService";
import { setMainToken, setTokensError, setTokensLoading } from "./tokens";

export function loadTokens() {
    return async (dispatch: Function) => {
        try {
            dispatch(setTokensLoading(true));

            const mainTokenResponse = await getMainToken();

            if (!isFetchResultSuccesful(mainTokenResponse)) {
                dispatch(setTokensError([mainTokenResponse.error]));
                dispatch(setTokensLoading(false));
                return;
            }

            dispatch(setMainToken(mainTokenResponse.data));
            dispatch(setTokensLoading(false));
        } catch (error) {
            dispatch(setTokensLoading(false));
            console.error('[loadMainToken]', error);
        }
    }
}
