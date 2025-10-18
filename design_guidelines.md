# Design Guidelines: Yoga Mat Landing Page Clone

## Project Overview
This is a **complete visual clone** of yoga.icareu.tw - every design element, spacing, color, and layout must be replicated exactly as it appears on the original site.

## Design Approach
**Reference-Based Clone**: Strict replication of the existing yoga.icareu.tw website design, maintaining pixel-perfect accuracy in layout, typography, colors, and visual hierarchy.

## Color Palette

### Primary Colors (observed from original)
- **Background**: White (#FFFFFF) for main content
- **Text**: Dark gray/black for primary text (approximately #1a1a1a)
- **Accent**: Teal/Green tones for CTAs and highlights (approximately 170 70% 45%)
- **Secondary**: Light gray backgrounds for alternating sections (approximately #f8f9fa)

### Semantic Colors
- Links: Teal/green matching brand color
- Borders: Light gray dividers (#e5e7eb)
- Table headers: Light background with dark text

## Typography

### Font Families
- Primary: System fonts optimized for Chinese characters (use Noto Sans TC or similar via Google Fonts)
- Fallback: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif

### Type Scale (as observed)
- **Hero Headline**: 2.5rem - 3rem (bold)
- **Section Headers**: 2rem - 2.5rem (bold)
- **Subheadings**: 1.5rem - 1.75rem (semibold)
- **Body Text**: 1rem - 1.125rem (regular)
- **Small Text**: 0.875rem (for captions/metadata)

## Layout System

### Spacing Units
Use Tailwind spacing: primarily **4, 6, 8, 12, 16, 20, 24** units
- Section padding: py-16 to py-24
- Container max-width: max-w-6xl centered
- Card spacing: gap-6 to gap-8

### Grid Structure
- Content sections: Single column with max-width container
- Feature grids: 2-3 columns on desktop, single column on mobile
- Table layouts: Full-width responsive tables
- Testimonial cards: 3-column grid (lg:grid-cols-3)

## Component Library

### Navigation
- Clean header with logo and minimal navigation
- Sticky positioning consideration
- Mobile hamburger menu for responsive design

### Hero Section
- Large headline with subheading
- Dual prominent CTAs (green buttons)
- Clean, text-focused hero (no large hero image observed in the fetched content)

### Content Sections
1. **Problem-Solution Blocks**: Cards with icons/numbers, headlines, and descriptions
2. **Feature Grids**: 3-column layouts with icons and text
3. **Comparison Tables**: Styled HTML tables with headers and bordered cells
4. **Numbered Lists**: Step-by-step guides with large numbers
5. **Quote Blocks**: Blockquotes with italicized text and attribution
6. **FAQ Accordion**: Question-answer format with expandable sections
7. **Testimonial Cards**: User reviews with avatars and names

### Buttons & CTAs
- **Primary CTA**: Green/teal background, white text, rounded corners (px-6 py-3)
- **Secondary CTA**: Outlined style with border
- Consistent throughout page with external links to product pages

### Cards
- White background with subtle shadows
- Rounded corners (rounded-lg to rounded-xl)
- Padding: p-6 to p-8
- Hover effects: subtle lift/shadow increase

## Images

### Image Strategy
The original site uses:
- **User testimonial avatars**: Small circular images (3 shown in fetched content)
- **Product/lifestyle images**: Supporting visuals throughout content
- **Numbered graphics**: Visual aids for step-by-step guides

### Image Placement
- Testimonial section: User photos (circular, approx 80-100px)
- Feature sections: Inline supporting images
- No dominant hero image - content-first approach
- All images should use lazy loading and WebP format when possible

### Critical Images from Original
1. User testimonial photos (1.webp, 2.webp, 3.webp, a.webp, b.webp)
2. These need to be downloaded and included in the repository

## Responsive Behavior

### Breakpoints
- Mobile: < 640px (single column, stacked layout)
- Tablet: 640px - 1024px (2-column grids where appropriate)
- Desktop: > 1024px (full 3-column layouts)

### Mobile Adjustments
- Hero text: Reduce to 2rem
- Section padding: Reduce to py-12
- Grid columns: Always single column
- Table: Horizontal scroll or stacked layout

## Accessibility

- Semantic HTML5 structure (article, section, header, nav)
- ARIA labels for interactive elements
- Sufficient color contrast ratios (WCAG AA minimum)
- Keyboard navigation support
- Alt text for all images

## Performance Optimization

- Lazy loading for all images
- Minified CSS/JS
- Preload critical resources
- Optimized image formats (WebP with fallbacks)
- Efficient font loading strategy

## SEO Requirements

### Meta Tags (All in Traditional Chinese)
- Title: Exact replication from original
- Description: Product-focused, keyword-rich
- Keywords: 瑜珈墊, 天然橡膠, 環保瑜珈墊, etc.
- Canonical URL
- Language: zh-TW

### Structured Data (JSON-LD)
- Product schema for yoga mat
- FAQ schema for Q&A section
- Organization schema
- Review/Rating schema for testimonials

### OpenGraph & Twitter Cards
- og:title, og:description, og:image
- og:type: product
- Twitter card: summary_large_image

### Technical SEO
- sitemap.xml generation
- robots.txt configuration
- Proper heading hierarchy (h1 → h6)
- Internal link structure
- Mobile-friendly viewport meta tag

## Content Fidelity

**Critical**: Every text block, heading, list item, table row, and FAQ from the original must be included exactly as written. This includes:
- All Traditional Chinese content
- Product links to icareushop.com.tw
- Section ordering and hierarchy
- Exact wording of CTAs

## GitHub Pages Configuration

- Base path handling for assets
- Relative URLs for all internal links
- CSS/JS bundling strategy
- 404 page setup
- CNAME file if custom domain needed