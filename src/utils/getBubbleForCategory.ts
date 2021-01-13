import circleCrypto from '../assets/images/circle-crypto.png';
import circleEsports from '../assets/images/circle-esports.png';
import circleMeme from '../assets/images/circle-meme.png';
import circlePolitics from '../assets/images/circle-politics.png';
import circleSports from '../assets/images/circle-sports.png';
import circleStartups from '../assets/images/circle-startups.png';
import circleStocks from '../assets/images/circle-stocks.png';
import circleViral from '../assets/images/circle-viral.png';
import { MarketCategory } from '../models/Market';

export function getBubbleForCategory(category: MarketCategory): string {
    switch(category) {
        case MarketCategory.Crypto:
            return circleCrypto;
        case MarketCategory.Esports:
            return circleEsports;
        case MarketCategory.Meme:
            return circleMeme;
        case MarketCategory.Politics:
            return circlePolitics;
        case MarketCategory.Sports:
            return circleSports;
        case MarketCategory.Startups:
            return circleStartups;
        case MarketCategory.Stocks:
            return circleStocks;
        case MarketCategory.Viral:
            return circleViral;
        default:
            return circleStocks;
    }
}
