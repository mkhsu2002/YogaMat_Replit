# Yoga Mat Landing Page - Traditional Chinese

## Project Overview
Complete visual clone of yoga.icareu.tw - a professional landing page for Horizon Urban 天然橡膠麻纖維瑜珈墊 (Natural Rubber Hemp Fiber Yoga Mat) in Traditional Chinese.

**Status**: ✅ Complete and fully tested
**Last Updated**: 2025-10-21
**Language**: Traditional Chinese (zh-TW)
**Deployment Target**: GitHub Pages

## Key Features

### Content & Design
- ✅ Complete Traditional Chinese content replication
- ✅ Professional teal/green color scheme (HSL 170 70% 45%)
- ✅ Noto Sans TC font from Google Fonts
- ✅ 11 reusable React components
- ✅ Fully responsive design
- ✅ 5 professional stock images for testimonials
- ✅ Light/dark mode support (default: light)

### SEO Optimization (Comprehensive)
- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags for social sharing
- ✅ Twitter Cards
- ✅ JSON-LD structured data (Product schema)
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Canonical URLs
- ✅ Semantic HTML5 markup
- ✅ Language attributes (zh-TW)

### Technical Stack
- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + Shadcn UI
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Routing**: Wouter
- **Components**: Radix UI primitives

## Project Structure

```
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/              # Shadcn components
│   │   │   ├── HeroSection.tsx
│   │   │   ├── FeatureGrid.tsx
│   │   │   ├── NumberedSteps.tsx
│   │   │   ├── ComparisonTable.tsx
│   │   │   ├── FAQAccordion.tsx
│   │   │   ├── TestimonialCard.tsx
│   │   │   ├── QuoteBlock.tsx
│   │   │   ├── SectionHeader.tsx
│   │   │   ├── CTASection.tsx
│   │   │   ├── ChecklistSection.tsx
│   │   │   └── examples/        # Component examples
│   │   ├── pages/
│   │   │   └── Home.tsx         # Main landing page
│   │   ├── App.tsx
│   │   ├── index.css            # Tailwind + custom styles
│   │   └── main.tsx
│   └── index.html               # SEO meta tags
├── public/
│   ├── robots.txt
│   ├── sitemap.xml
│   └── .nojekyll                # GitHub Pages config
├── attached_assets/
│   └── stock_images/            # 5 testimonial images
├── design_guidelines.md         # Design system
├── DEPLOYMENT.md                # GitHub Pages deployment guide
└── replit.md                    # This file
```

## Components Built

### 1. HeroSection
Main hero with title, subtitle, and dual CTAs
- Primary CTA: "探索更多：天然橡膠麻纖維瑜珈墊"
- Secondary CTA: "開啟您的綠色瑜珈之旅"

### 2. FeatureGrid
Grid layout for features with icons or numbers
- Supports 2, 3, or 4 column layouts
- Icon support via Lucide React
- Numbered variants available

### 3. NumberedSteps
Step-by-step guides with numbered circles
- Perfect for processes and timelines
- Configurable column layouts

### 4. ComparisonTable
Responsive tables for material/style comparisons
- Highlight column support
- Mobile-friendly overflow

### 5. FAQAccordion
Expandable FAQ using Radix UI
- Smooth animations
- Single-item expansion

### 6. TestimonialCard
User testimonials with avatars
- Avatar with fallback initials
- Quote styling
- Author name and role

### 7. QuoteBlock
Inspirational quote blocks
- Border accent
- Optional author attribution

### 8. SectionHeader
Consistent section titles
- Title + optional subtitle
- Centered or left-aligned

### 9. CTASection
Call-to-action sections
- Primary + optional secondary button
- Default or highlight variants

### 10. ChecklistSection
Checklist items with checkmarks
- Title + description format
- Checkmark icons

## Page Content Sections

The Home page includes 20+ comprehensive sections:

1. Hero Section
2. Why Yoga Mat Matters
3. Three Challenges for Yoga Enthusiasts
4. Advanced Practitioner Needs
5. Environmental Sustainability
6. Horizon Urban Product Introduction
7. Natural Rubber Scientific Advantages
8. Hemp Fiber Unique Features
9. Built-in Yoga Towel Design
10. Thickness Selection Guide
11. Material Comparison Table
12. Purchase Checklist
13. Cleaning & Maintenance Tips
14. Common Myths Debunked
15. Yoga Basics for Beginners
16. Building Healthy Habits
17. Practice Timeline
18. Multi-Use Applications
19. Common Problems Solutions
20. Safety Precautions
21. Detailed FAQ (10 questions)
22. Storage & Carrying Tips
23. Quick FAQs
24. Yoga Style Requirements Table
25. Real User Testimonials
26. Personal Practice Space
27. Health Benefits
28. Sustainable Lifestyle
29. Final Checklist
30. Final CTA Section
31. Footer

## External Links

All CTAs link to:
- **Primary**: https://www.icareushop.com.tw/page/fsc.yogamat
- **Secondary**: https://www.icareushop.com.tw/SalePage/Index/9171120

Links open in new tabs (_blank with noopener noreferrer).

## Stock Images

5 professional Asian portrait images downloaded:
1. `professional_asian_w_b877a4cf.jpg` - Linda (Yoga Teacher)
2. `professional_asian_w_91806a37.jpg` - Sarah (Yoga Enthusiast)
3. `professional_asian_w_2c452233.jpg` - Unused extra
4. `asian_man_profession_c3cdeb08.jpg` - Kevin (Office Worker)
5. `asian_man_profession_e0c08a0e.jpg` - Unused extra

## Color Palette

Primary teal/green theme:
- **Primary**: `170 70% 45%` (Teal/Green)
- **Background**: White/Dark mode aware
- **Muted**: Subtle grays for hierarchy
- **Card**: Elevated surfaces
- **Border**: Subtle boundaries

See `design_guidelines.md` for complete design system.

## Deployment

### GitHub Pages Ready ✅
All files configured for GitHub Pages deployment with **404 error fixed**:
- ✅ robots.txt, sitemap.xml, .nojekyll
- ✅ 404.html for SPA routing support
- ✅ Auto-build script (`scripts/build-gh-pages.js`)
- ✅ GitHub Actions workflow (`.github/workflows/deploy.yml`)
- ✅ Complete deployment guides

### SPA Routing Fix
Fixed the common GitHub Pages 404 error for single-page apps:
- `client/public/404.html` - Redirects to index.html
- `client/index.html` - Restores original URL using sessionStorage
- `scripts/build-gh-pages.js` - Copies index.html to 404.html during build

### To Deploy:
1. Push to GitHub repository
   ```bash
   git push origin main
   ```
2. Enable GitHub Pages in repository settings
3. Select **GitHub Actions** as deployment source
4. Workflow automatically builds and deploys
5. Site will be live at `https://<username>.github.io/<repo-name>/`

### Files in client/public/
- `404.html` - GitHub Pages 404 handler
- `robots.txt` - SEO crawler config
- `sitemap.xml` - Site structure
- `.nojekyll` - Disable Jekyll processing

### Custom Domain (Optional)
To use `yoga.icareu.tw`:
1. Create `client/public/CNAME` with domain
2. Add DNS CNAME record pointing to `<username>.github.io`
3. Configure in GitHub Pages settings

See `部署到GitHub_Pages.md` or `GITHUB_PAGES_SETUP.md` for detailed instructions.

## Testing

✅ Comprehensive end-to-end testing completed:
- Page loads correctly
- All sections render properly
- CTAs link to correct URLs
- FAQ accordions expand/collapse
- Testimonial images load
- Comparison tables display
- Responsive design works
- Font loading verified
- All interactive elements functional

## Development

### Start Development Server
```bash
npm run dev
```
Server runs on http://localhost:5000

### Build for Production
```bash
npm run build
```
Output in `dist/` directory

### Workflow
"Start application" workflow automatically runs `npm run dev`

## Notes

### Design Decisions
- Static landing page only (no backend/database needed)
- Focus on SEO and conversion optimization
- Mobile-first responsive design
- Accessibility with semantic HTML
- Performance optimized with Vite

### Content Strategy
- Long-form content for SEO
- Multiple CTAs throughout page
- Social proof via testimonials
- Educational content (FAQs, guides)
- Trust signals (environmental focus)

### Future Enhancements (Optional)
- Google Analytics integration
- Contact form
- Live chat widget
- A/B testing
- Performance monitoring
- Additional language versions

## Project Status

**Current State**: Production-ready
- All features implemented ✅
- Comprehensive testing completed ✅
- SEO fully optimized ✅
- Deployment documentation complete ✅
- Ready for GitHub Pages deployment ✅

This is a complete, polished landing page ready for immediate deployment.
