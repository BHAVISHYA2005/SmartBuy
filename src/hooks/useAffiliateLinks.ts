import { Product } from '../types/product';

export const useAffiliateLinks = () => {
    const generateLink = (product: Product): string => {
        // Get affiliate IDs from environment variables
        const affiliateIds = {
            amazon: import.meta.env.VITE_AMAZON_AFFILIATE_ID || 'YOUR_AMAZON_AFFILIATE_ID',
            flipkart: import.meta.env.VITE_FLIPKART_AFFILIATE_ID || 'YOUR_FLIPKART_AFFILIATE_ID',
        };

        const baseUrls = {
            amazon: 'https://www.amazon.in/dp/',
            flipkart: 'https://www.flipkart.com/product/',
        };

        const productId = `PROD${product.id.toString().padStart(8, '0')}`;
        const baseUrl = baseUrls[product.affiliate];
        const affiliateId = affiliateIds[product.affiliate];

        if (product.affiliate === 'amazon') {
            return `${baseUrl}${productId}?tag=${affiliateId}`;
        } else {
            return `${baseUrl}${productId}?affid=${affiliateId}`;
        }
    };

    const handleAffiliateClick = (product: Product) => {
        const link = generateLink(product);
        window.open(link, '_blank', 'noopener,noreferrer');
    };

    return {
        generateLink,
        handleAffiliateClick,
    };
};
