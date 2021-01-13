import circleCrypto from '../assets/images/circle-crypto.png';
import iconCrypto from '../assets/images/icons/icon-crypto.png';

import circleEsports from '../assets/images/circle-esports.png';
import iconEsports from '../assets/images/icons/icon-esports.png';

import circleMeme from '../assets/images/circle-meme.png';
import iconMeme from '../assets/images/icons/icon-meme.png';

import circlePolitics from '../assets/images/circle-politics.png';
import iconPolitics from '../assets/images/icons/icon-politics.png';

import circleSports from '../assets/images/circle-sports.png';
import iconSports from '../assets/images/icons/icon-sports.png';

import circleStartups from '../assets/images/circle-startups.png';
import iconStartups from '../assets/images/icons/icon-startups.png';

import circleStocks from '../assets/images/circle-stocks.png';
import iconStocks from '../assets/images/icons/icon-stockmarket.png';

import circleViral from '../assets/images/circle-viral.png';
import iconViral from '../assets/images/icons/icon-viral.png';

import { MarketCategory } from "../models/Market";
import trans from '../translation/trans';

interface CategoryInfo {
    icon: string;
    cardIcon: string;
    circleIcon: string;
    category: MarketCategory;
    title: string;
}

export default function getCategoryInfo(category: MarketCategory): CategoryInfo {
    switch (category) {
        case MarketCategory.Crypto:
            return {
                circleIcon: circleCrypto,
                category,
                cardIcon: '',
                icon: iconCrypto,
                title: trans('market.category.crypto'),
            };
        case MarketCategory.Esports:
            return {
                circleIcon: circleEsports,
                category,
                cardIcon: '',
                icon: iconEsports,
                title: trans('market.category.esports'),
            };
        case MarketCategory.Meme:
            return {
                circleIcon: circleMeme,
                category,
                cardIcon: '',
                icon: iconMeme,
                title: trans('market.category.meme'),
            };
        case MarketCategory.Politics:
            return {
                circleIcon: circlePolitics,
                category,
                cardIcon: '',
                icon: iconPolitics,
                title: trans('market.category.politics'),
            };
        case MarketCategory.Sports:
            return {
                circleIcon: circleSports,
                category,
                cardIcon: '',
                icon: iconSports,
                title: trans('market.category.sports'),
            };
        case MarketCategory.Startups:
            return {
                circleIcon: circleStartups,
                category,
                cardIcon: '',
                icon: iconStartups,
                title: trans('market.category.startups'),
            };
        case MarketCategory.Stocks:
            return {
                circleIcon: circleStocks,
                category,
                cardIcon: '',
                icon: iconStocks,
                title: trans('market.category.stocks'),
            };
        case MarketCategory.Viral:
            return {
                circleIcon: circleViral,
                category,
                cardIcon: '',
                icon: iconViral,
                title: trans('market.category.viral'),
            };
        default:
            return {
                circleIcon: circleStocks,
                category,
                cardIcon: '',
                icon: iconStocks,
                title: trans('market.category.stocks'),
            };
    }
}
