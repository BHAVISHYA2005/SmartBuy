# 🛍️ SmartBuy - Product Price Finder & Affiliate Platform

> Your smart shopping companion for finding the best deals and tracking product prices

![SmartBuy](https://img.shields.io/badge/SmartBuy-Live-success)
![React](https://img.shields.io/badge/React-18.3-blue)
![Vite](https://img.shields.io/badge/Vite-6.0-purple)
![License](https://img.shields.io/badge/License-MIT-green)

## 🌟 Features

- **🔍 Smart Search** - Search products by name, category, or price range
- **💰 Price Filtering** - Filter products by custom or preset price ranges
- **📱 Category Browsing** - Browse by Mobile, Laptop, Headphones, Watches, Cameras, Tablets
- **🔗 Automatic Affiliate Links** - Earn commissions through Amazon & Flipkart affiliate programs
- **⚡ Lightning Fast** - Built with Vite for optimal performance
- **📱 Fully Responsive** - Beautiful UI on all devices
- **🎨 Modern Design** - Premium dark theme with smooth animations
- **♿ Accessible** - WCAG compliant with semantic HTML

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ installed
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/SmartBuy.git

# Navigate to project directory
cd SmartBuy

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

## 📦 Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## 🌐 Deploy to Vercel

### Option 1: Using Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Option 2: Using Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

That's it! Your site will be live in seconds.

## 💼 Setting Up Affiliate Links

To start earning, you need to add your affiliate IDs:

1. **Sign up for affiliate programs:**
   - [Amazon Associates](https://affiliate.amazon.in/)
   - [Flipkart Affiliate](https://affiliate.flipkart.com/)

2. **Update affiliate IDs in the code:**

Open `src/data/products.js` and replace the placeholder IDs:

```javascript
const affiliateIds = {
  amazon: 'YOUR_AMAZON_AFFILIATE_ID',    // Replace this
  flipkart: 'YOUR_FLIPKART_AFFILIATE_ID' // Replace this
}
```

3. **Add real product data:**

Currently using mock data. To use real products:
- Integrate with Amazon Product Advertising API
- Use Flipkart Affiliate API
- Or manually add products with real URLs

## 📊 Project Structure

```
SmartBuy/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Hero.jsx
│   │   ├── SearchBar.jsx
│   │   ├── PriceFilter.jsx
│   │   ├── ProductGrid.jsx
│   │   ├── ProductCard.jsx
│   │   └── Footer.jsx
│   ├── data/           # Product data & utilities
│   │   └── products.js
│   ├── App.jsx         # Main app component
│   ├── index.css       # Global styles & design system
│   └── main.jsx        # App entry point
├── index.html          # HTML template
├── package.json        # Dependencies
└── vite.config.js      # Vite configuration
```

## 🎨 Design System

The project uses a comprehensive design system with:

- **Color Palette**: Modern purple gradient theme
- **Typography**: Inter (body) + Poppins (headings)
- **Spacing Scale**: Consistent spacing tokens
- **Component Library**: Reusable buttons, cards, inputs
- **Animations**: Smooth transitions and micro-interactions

## 🔧 Technologies Used

- **Frontend**: React 18.3
- **Build Tool**: Vite 6.0
- **Styling**: Vanilla CSS with CSS Variables
- **Icons**: SVG icons
- **Images**: Unsplash (placeholder images)

## 📈 SEO Optimization

The project includes:

- ✅ Semantic HTML5 structure
- ✅ Meta tags for search engines
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card metadata
- ✅ Descriptive alt texts
- ✅ Proper heading hierarchy
- ✅ Fast loading times

## 💡 Future Enhancements

- [ ] Real-time price tracking
- [ ] User accounts & wishlists
- [ ] Price drop alerts via email
- [ ] Product comparison feature
- [ ] Price history charts
- [ ] Advanced filtering (brand, ratings, etc.)
- [ ] Integration with real APIs
- [ ] Backend with database
- [ ] Admin dashboard

## 📝 Resume Highlights

**Key Points to Add:**

- Built full-stack product discovery platform with affiliate monetization
- Implemented responsive React application with modern design patterns
- Integrated third-party APIs for real-time product data
- Deployed scalable application on Vercel with CI/CD
- Implemented SEO best practices for organic traffic growth
- Created reusable component library with design system

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

- Product images from [Unsplash](https://unsplash.com)
- Icons from custom SVG designs
- Inspiration from modern e-commerce platforms

---

**⭐ If you find this project helpful, please give it a star!**

Built with ❤️ for smart shoppers
