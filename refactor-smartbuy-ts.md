---
task: refactor-smartbuy-ts
title: SmartBuy TypeScript & Architecture Refactor
status: in-progress
priority: high
agents:
  - project-planner (lead)
  - frontend-specialist (implementation)
  - test-engineer (verification)
  - clean-code (quality)
---

# 🎯 Refactor Goal: SmartBuy Professional Edition

Transform the SmartBuy product finder into a production-ready, type-safe, and modular React application that follows 2025 industry standards for a senior-level resume.

## 🏗️ Phase 1: Infrastructure & Environment Setup
- [x] Install TypeScript & React types
- [x] Install Vitest & React Testing Library
- [x] Configure `tsconfig.json` for strict mode
- [x] Update `vite.config.ts` for Vitest and TS support

## 🛠️ Phase 2: Modular CSS & Design Tokens
- [x] Create `src/styles/` directory
- [x] Extract global design tokens to `src/styles/tokens.css`
- [x] Migrate base styles to `src/styles/base.css`
- [x] Modularize component styles into:
    - `src/styles/components/ProductCard.css`
    - `src/styles/components/ProductGrid.css`
    - `src/styles/components/Filters.css`
    - `src/styles/components/Hero.css`
    - `src/styles/components/SearchBar.css`
    - `src/styles/components/Footer.css`

## 🔷 Phase 3: TypeScript Migration & Hook Extraction (Logic Layer)
- [x] Define shared types in `src/types/product.ts`
- [x] Extract logic into specialized hooks:
    - [x] `useProductFilter.ts` (Filtering & Pagination)
    - [x] `useAffiliateLinks.ts` (Link Generation)
- [x] Convert data files to `.ts`:
    - [x] `src/data/products.ts`
- [x] Systematically convert components to `.tsx`:
    - [x] `Hero.tsx`
    - [x] `SearchBar.tsx`
    - [x] `PriceFilter.tsx`
    - [x] `ProductCard.tsx`
    - [x] `ProductGrid.tsx`
    - [x] `Footer.tsx`
    - [x] `App.tsx`

## 🧪 Phase 4: Testing & Validation
- [x] Write unit tests for `useProductFilter` logic
- [x] Run `npx vitest run` and confirm passes
- [ ] Run `python .agent/scripts/checklist.py .` for final audit
- [x] Perform manual verification with browser subagent

## 🤖 Phase 5: Automation & Live Data (GitHub Actions)
- [ ] Set up `.github/workflows/ci.yml` for automated testing
- [ ] Create `scripts/scraper.ts` for price extraction
- [ ] Set up `.github/workflows/update-prices.yml` for daily scheduled scans
- [ ] Implement Vercel deployment hook for data updates

## 📈 Phase 6: Price History Visualization
- [x] Extend `Product` interface for `priceHistory`
- [x] Implement SVG Sparkline component
- [x] Add price trend analysis (Lowest historically, current trend)
- [x] Integrated "Price dropping" insights into Product Cards

---

## 🧭 Design Decisions
- **Strict TypeScript:** No `any` types allowed. Interfaces for all product data.
- **Hook Composition:** Components will handle ONLY rendering. Business logic stays in hooks.
- **CSS Variables:** Colors/Spacing must use tokens from `tokens.css`.
- **Atomic Components:** Keep components focused on one responsibility (SRP).

## ⚠️ Edge Cases & Risks
- **Image Loading:** Ensure `onLoad` handlers are typed correctly in `ProductCard`.
- **Search Logic:** Handle empty/null search states gracefully in `useProductFilter`.
- **Affiliate Safety:** Verify link generation works correctly for both Amazon and Flipkart structures.
- **Type Casting:** Use `as const` for category lists and affiliate platforms.

## ✅ Verification Criteria
1. **TypeScript:** `npx tsc --noEmit` returns 0 errors.
2. **Linting:** `npm run lint` returns 0 errors.
3. **Tests:** All Vitest unit tests pass.
4. **Build:** `npm run build` generates a production bundle successfully.
5. **SEO:** Subagent verifies Meta tags and Title are preserved via browser audit.
