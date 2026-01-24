---
task: refactor-smartbuy-ts
title: SmartBuy TypeScript & Architecture Refactor
status: planning
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
- [ ] Install TypeScript & React types
- [ ] Install Vitest & React Testing Library
- [ ] Configure `tsconfig.json` for strict mode
- [ ] Update `vite.config.js` for Vitest and TS support

## 🛠️ Phase 2: Modular CSS & Design Tokens
- [ ] Create `src/styles/` directory
- [ ] Extract global design tokens to `src/styles/tokens.css`
- [ ] Migrate base styles to `src/styles/base.css`
- [ ] Modularize component styles into:
    - `src/styles/components/ProductCard.css`
    - `src/styles/components/ProductGrid.css`
    - `src/styles/components/Filters.css`
    - `src/styles/components/Hero.css`
    - `src/styles/components/SearchBar.css`
    - `src/styles/components/Footer.css`

## 🔷 Phase 3: TypeScript Migration & Hook Extraction (Logic Layer)
- [ ] Define shared types in `src/types/product.ts`
- [ ] Extract logic into specialized hooks:
    - [ ] `useProductFilter.ts` (Filtering & Pagination)
    - [ ] `useAffiliateLinks.ts` (Link Generation)
    - [ ] `usePriceComparison.ts` (Sorting & Analysis)
- [ ] Convert data files to `.ts`:
    - [ ] `src/data/products.ts`
- [ ] Systematically convert components to `.tsx`:
    - [ ] `Hero.tsx`
    - [ ] `SearchBar.tsx`
    - [ ] `PriceFilter.tsx`
    - [ ] `ProductCard.tsx`
    - [ ] `ProductGrid.tsx`
    - [ ] `Footer.tsx`
    - [ ] `App.tsx`

## 🧪 Phase 4: Testing & Validation
- [ ] Write unit tests for `useProductFilter` logic
- [ ] Write unit tests for `useAffiliateLinks` logic
- [ ] Run `python .agent/scripts/checklist.py .` for final audit
- [ ] Perform manual verification with browser subagent

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
