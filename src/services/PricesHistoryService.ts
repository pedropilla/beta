import { PriceHistoryData } from '../models/PriceHistoryData';
import { sleep } from '../utils/sleep';


export async function getPricesHistoryByMarketId(marketId: string): Promise<PriceHistoryData[]> {
    try {
        const history: PriceHistoryData[] = [
            {
                "pointKey": "11-01-2021/12:32",
                "dataPoints": [
                    {
                        "price": "0.49700899983896907",
                        "outcome": 1
                    },
                    {
                        "price": "0.5029910001610309",
                        "outcome": 0
                    }
                ]
            },
            {
                "pointKey": "11-01-2021/12:43",
                "dataPoints": [
                    {
                        "price": "0.49700899983896907",
                        "outcome": 1
                    },
                    {
                        "price": "0.5029910001610309",
                        "outcome": 0
                    }
                ]
            },
            {
                "pointKey": "11-01-2021/14:00",
                "dataPoints": [
                    {
                        "price": "0.4823237974703081",
                        "outcome": 1
                    },
                    {
                        "price": "0.5176762025296918",
                        "outcome": 0
                    }
                ]
            },
            {
                "pointKey": "11-01-2021/14:03",
                "dataPoints": [
                    {
                        "price": "0.4727828376047687",
                        "outcome": 1
                    },
                    {
                        "price": "0.5272171623952313",
                        "outcome": 0
                    }
                ]
            },
            {
                "pointKey": "11-01-2021/14:04",
                "dataPoints": [
                    {
                        "price": "0.4680867795442333",
                        "outcome": 1
                    },
                    {
                        "price": "0.5319132204557667",
                        "outcome": 0
                    }
                ]
            },
            {
                "pointKey": "11-01-2021/14:05",
                "dataPoints": [
                    {
                        "price": "0.8",
                        "outcome": 1
                    },
                    {
                        "price": "0.2",
                        "outcome": 0
                    }
                ]
            },
            {
                "pointKey": "11-01-2021/14:06",
                "dataPoints": [
                    {
                        "price": "0.2",
                        "outcome": 1
                    },
                    {
                        "price": "0.8",
                        "outcome": 0
                    }
                ]
            },
            {
                "pointKey": "11-01-2021/14:06",
                "dataPoints": [
                    {
                        "price": "0.6",
                        "outcome": 1
                    },
                    {
                        "price": "0.4",
                        "outcome": 0
                    }
                ]
            }
        ];

        await sleep(2000);

        return history;
    } catch (error) {
        console.error('[getMarketById]', error);
        return [];
    }
}
