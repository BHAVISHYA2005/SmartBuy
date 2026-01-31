import { chromium } from 'playwright';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { products as initialProducts } from '../src/data/products.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


async function scrapePrice(url: string, affiliate: string) {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();

    // Random delay to avoid bot detection (1-3 seconds)
    const delay = Math.floor(Math.random() * 2000) + 1000;
    await new Promise(r => setTimeout(r, delay));

    await page.setExtraHTTPHeaders({
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9',
    });

    try {
        console.log(`Scanning: ${url}`);
        await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 });

        let priceText = '';
        if (affiliate === 'amazon') {
            const selectors = [
                '#corePriceDisplay_desktop_feature_div .a-price-whole',
                '#corePrice_desktop .a-price-whole',
                '.a-price-whole',
                '.apexPriceToPay .a-offscreen'
            ];
            for (const selector of selectors) {
                const element = await page.$(selector);
                if (element) {
                    priceText = (await element.innerText()) || '';
                    if (priceText) break;
                }
            }
        } else if (affiliate === 'flipkart') {
            const selectors = ['.hZ3P6w', '.Nx9W3j', '._30jeq3', '.aMaAEs ._30jeq3'];
            for (const selector of selectors) {
                const element = await page.$(selector);
                if (element) {
                    priceText = (await element.innerText()) || '';
                    if (priceText) break;
                }
            }
        }

        // Handle case where price element is found but text is empty
        if (!priceText) {
            console.log(`⚠️ No price text found for ${url}`);
            return null;
        }

        // Clean price string (remove ₹, commas, etc.)
        const price = parseInt(priceText.replace(/[^\d]/g, ''));
        return isNaN(price) ? null : price;

    } catch (error) {
        console.error(`Error scanning ${url}:`, error);
        return null;
    } finally {
        await browser.close();
    }
}

async function runScanner() {
    console.log('🚀 Starting SmartBuy Price Scanner...');
    const updatedProducts = [...initialProducts];
    let updatesCount = 0;

    // We only scan products that have a productUrl
    for (let i = 0; i < updatedProducts.length; i++) {
        const product = updatedProducts[i];
        if (product.productUrl) {
            const newPrice = await scrapePrice(product.productUrl, product.affiliate);
            if (newPrice) {
                console.log(`✅ Updated ${product.name}: ₹${product.price} -> ₹${newPrice}`);
                updatedProducts[i] = { ...product, price: newPrice };
                updatesCount++;
            } else {
                console.log(`❌ Could not find price for ${product.name}`);
            }
        }
    }

    if (updatesCount > 0) {
        // Save back to products.ts
        const filePath = path.join(__dirname, '../src/data/products.ts');
        const fileContent = `import { Product } from '../types/product';\n\nexport const products: Product[] = ${JSON.stringify(updatedProducts, null, 4)};\n`;
        fs.writeFileSync(filePath, fileContent);
        console.log(`\n🎉 Success! Updated ${updatesCount} prices in products.ts`);
    } else {
        console.log('\nℹ️ No prices were updated.');
    }
}

runScanner().catch(console.error);
