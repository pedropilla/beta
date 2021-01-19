import { utils } from 'near-api-js';
import { COINGECKO_API_URL } from "../config";

const MAIN_TOKEN = 'near';

export async function getCurrentMainTokenPrice() {
    try {
        const response = await fetch(`${COINGECKO_API_URL}/coins/${MAIN_TOKEN}?localization=false`);
        const data = await response.json();

        console.log('[] data -> ', data);
    } catch (error) {
        console.error('[getCurrentNearPrice]', error);
    }
}

export function formatMainToken(balance: string, digits: number = 3) {
    return utils.format.formatNearAmount(balance, digits);
}
