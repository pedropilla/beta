import { PoolBalanceViewModel } from "./PoolBalance";

export enum MarketCategory {
    Crypto = 'crypto',
    Esports = 'esports',
    Meme = 'meme',
    Politics = 'politics',
    Sports = 'sports',
    Startups = 'startups',
    Stocks = 'stocks',
    Viral = 'viral',
}

export interface MarketViewModel {
    id: string;
    description: string;
    resolutionDate: Date;
    outcomes: PoolBalanceViewModel[];
    volume: string;
    category: MarketCategory;
}
