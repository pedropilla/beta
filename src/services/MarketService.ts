import { format } from 'date-fns';
import { MarketCategory, MarketViewModel } from '../models/Market';


export async function getMarketById(marketId: string): Promise<MarketViewModel | null> {
    try {
        const market: MarketViewModel = {
            id: marketId,
            description: "Will SpaceX launch a second manned mission in 2020?",
            resolutionDate: new Date(),
            extraInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            volume: '100000000',
            category: MarketCategory.Crypto,
            outcomes: [
                {
                    outcomeId: 0,
                    price: 0.4,
                    weight: 40,
                    outcomeLabel: 'Yes',
                },
                {
                    outcomeId: 1,
                    price: 0.6,
                    weight: 60,
                    outcomeLabel: 'No',
                }
            ],
        };

        return market;
    } catch (error) {
        console.error('[getMarketById]', error);
        return null;
    }
}

export function formatResolutionDate(resolutionDate: Date): string {
    return format(resolutionDate, 'MMMM d, yyyy HH:mm');
}
