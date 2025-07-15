# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

**Start development server:**
```bash
npm start
```

**Build for production:**
```bash
npm run build
```

**Run tests:**
```bash
npm test
```

**Install dependencies:**
```bash
npm install
```

## Project Architecture

This is a React TypeScript presentation application about AI, AGI, and ASI. The presentation consists of 9 slides covering AI fundamentals, practical examples, and key takeaways.

### Core Structure

- **Single Page Application**: Uses React Router for slide navigation
- **Component-based slides**: Each slide is a separate React component in `src/components/Presentation/slides/`
- **Presentation controller**: `src/components/Presentation/Presentation.tsx` manages navigation, keyboard shortcuts, and state
- **Slide registry**: Slides array defines order and metadata - note that slide file numbers don't match display order

### Current Slide Structure (9 slides total)

The presentation flow is: Slide1 → Slide2 → Slide3 → Slide4 → Slide5 → Slide6 → Slide8 → Slide7 → Slide10

**Important**: Slide file names don't correspond to display order. Check the `slides` array in `Presentation.tsx` for actual sequence.

### Navigation System

- **Keyboard controls**: Arrow keys, spacebar (next), F (fullscreen)
- **URL routing**: `/slide/:slideNumber` for direct access
- **Visual feedback**: Progress bar and slide counter
- **Button navigation**: Previous/Next buttons with fullscreen toggle

### Styling Architecture

- **Modern glassmorphism design** with gradient backgrounds
- **CSS classes**: Defined in `App.css` with component-specific styles
- **Responsive layout**: Adapts to different screen sizes
- **Interactive elements**: Hover effects, transitions, and animations

### Content Guidelines

- **Slide examples**: Use diverse, realistic scenarios (not single-context examples)
- **Visual hierarchy**: Large headings, readable body text, strategic emoji use
- **Modern list design**: Uses `.modern-list` styling for key takeaways

### Assets and Media

- **Images**: Stored in both `src/assets/` and `public/images/`
- **Type definitions**: `src/types/images.d.ts` for TypeScript image imports
- **Error handling**: Images include fallback and loading states

### Deployment

- **Vercel ready**: Configured with `vercel.json`
- **Build optimization**: `CI=false` to treat warnings as non-blocking

## Working with Slides

### Adding New Slides
1. Create component in `src/components/Presentation/slides/`
2. Import in `Presentation.tsx`
3. Add to `slides` array with appropriate title
4. Navigation automatically adjusts to new slide count

### Modifying Slide Order
- Edit the `slides` array in `Presentation.tsx`
- File names can remain unchanged - order is determined by array sequence
- Update slide titles in the array for accurate navigation

### Styling Best Practices
- Use existing CSS classes (`.modern-list`, `.slide-content-center`, etc.)
- Maintain glassmorphism aesthetic with backdrop-filter and transparency
- Include hover states and smooth transitions for interactive elements