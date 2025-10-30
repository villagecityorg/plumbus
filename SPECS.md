# Project Specifications

## Overview

This document outlines the specifications for VCC Morse Radio project - a vibe building Morse radio training network platform.

## Project Structure

```
morse.villagecity.org/
├── .gitignore              # Git ignore rules
├── astro.config.mjs        # Astro configuration
├── LICENSE                 # Project license
├── package.json            # Dependencies and scripts
├── package-lock.json       # Dependency lock file
├── README.md               # Project documentation
├── SPECS.md                # Project specifications
├── tsconfig.json           # TypeScript configuration
├── home/                   # Home-related content
│   └── project/
│       └── README.md       # Project-specific documentation
├── public/                 # Static assets
│   ├── apple-touch-icon.png
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── favicon-96x96.png
│   ├── site.webmanifest
│   ├── web-app-manifest-192x192.png
│   ├── web-app-manifest-512x512.png
│   ├── Galactic_Federation.png
│   ├── blog-placeholder-1.jpg
│   ├── blog-placeholder-2.jpg
│   ├── blog-placeholder-3.jpg
│   ├── blog-placeholder-4.jpg
│   ├── blog-placeholder-5.jpg
│   ├── blog-placeholder-about.jpg
│   ├── pic_prev_1.jpg
│   ├── pic_prev_2.jpg
│   ├── pic_prev_3.jpg
│   └── pic_prev_4.jpg
│   └── fonts/
│       ├── atkinson-bold.woff
│       └── atkinson-regular.woff
└── src/                    # Source code
    ├── consts.ts           # Application constants
    ├── content.config.ts   # Content collection configuration
    ├── env.d.ts            # TypeScript environment definitions
    ├── components/         # Reusable Astro components
    │   ├── BaseHead.astro  # HTML head with meta tags
    │   ├── Footer.astro    # Site footer
    │   ├── FormattedDate.astro # Date formatting component
    │   ├── Header.astro    # Site header/navigation
    │   └── HeaderLink.astro # Navigation link component
    ├── content/            # Content collections
    │   ├── blog/           # Blog posts
    │   │   ├── how-to-make-a-plumbus.md
    │   │   ├── plumbus-meaning.md
    │   │   ├── what-is-a-plumbus-in-real-life.md
    │   │   ├── what-is-a-plumbus-used-for.md
    │   │   └── what-is-a-plumbus.md
    │   └── data/           # Static data files
    │       └── main.json   # Site configuration data
    ├── layouts/            # Page layout templates
    │   └── BlogPost.astro  # Blog post layout
    ├── pages/              # Route-based pages
    │   ├── about.astro     # About page
    │   ├── index.astro     # Home page
    │   ├── rss.xml.js      # RSS feed generation
    │   ├── blog/
    │   │   ├── index.astro # Blog listing page
    │   │   └── [...slug].astro # Individual blog posts
    │   └── shop/
    │       └── plumbus.astro # Product page
    └── styles/             # Global styles
        └── global.css      # Main stylesheet
```

## Technology Stack

### Core Technologies
- **Astro** - Modern static site generator
- **TypeScript** - Type-safe JavaScript
- **Node.js** - Runtime environment

### Styling
- **CSS** - Global stylesheets with modular organization
- **Space Grotesk Font** - Primary typography for headings and body text
- **Space Mono Font** - Monospace typography for code and quotes

### Content Management
- **Content Collections** - Structured content management
- **Markdown** - Blog post format

## Features

### 1. Training Network System
- **Interactive Lessons**: Progressive Morse code learning modules
- **Live Practice Sessions**: Real-time practice with experienced operators
- **Progress Tracking**: Detailed analytics and achievement badges
- **Virtual Radio Simulator**: Practice without physical equipment
- **Certification Programs**: Industry-recognized Morse code proficiency

### 2. Community Features
- **Global Network**: Connect with 10,000+ radio enthusiasts
- **Community-Driven Training**: Peer-to-peer learning and knowledge sharing
- **User Profiles**: Track progress and showcase achievements
- **Discussion Forums**: Q&A and best practice sharing

### 3. Content Management
- **Blog System**: `/blog/` and `/blog/[slug]` for tutorials and news
- **RSS Feed**: `/rss.xml` for latest updates
- **Educational Resources**: Structured learning materials
- **Video Tutorials**: Integrated learning content

### 4. Static Pages
- **Home Page**: `/` - Main landing page with training overview
- **About Page**: `/about` - Mission and community information
- **Training Page**: `/training` - Course catalog and enrollment

### 5. Shared Components
- **Header**: Navigation and branding
- **Footer**: Site information and social links
- **BaseHead**: SEO meta tags and optimized performance
- **FormattedDate**: Consistent date formatting
- **HeaderLink**: Styled navigation components

### 6. Asset Management
- **Images**: Training illustrations, hero images, icons
- **Fonts**: Space Grotesk (primary), Space Mono (monospace) with WOFF2 optimization
- **Icons**: Favicon and PWA app manifest icons
- **Manifest**: Progressive Web App configuration

## Content Structure

### Blog Posts
Located in `src/content/blog/` with the following structure:
- Frontmatter with metadata
- Markdown content body
- Automatic slug generation from filename

### Data Files
Located in `src/content/data/`:
- `main.json` - Site configuration and data

## Configuration Files

### Astro Configuration (`astro.config.mjs`)
- Site configuration
- Build settings
- Integration setup

### TypeScript Configuration (`tsconfig.json`)
- Type checking rules
- Path aliases
- Compiler options

### Content Configuration (`src/content.config.ts`)
- Content collection schemas
- Validation rules
- Type definitions

## Build and Development

### Available Scripts
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

### Environment
- **Development**: Local development server with hot reload
- **Production**: Static site generation
- **Preview**: Production build testing

## SEO and Performance

### Meta Tags
- Dynamic title generation
- Meta descriptions
- Open Graph tags
- Twitter Card support

### Performance Optimizations
- Image optimization
- Font loading optimization
- CSS minification
- JavaScript bundling

### PWA Features
- Web App Manifest
- Service Worker ready
- App icons for various sizes
- Apple touch icons

## Deployment

### Static Hosting
The site is optimized for deployment to:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting service

### Build Output
- Pure static files
- No server-side requirements
- CDN-friendly asset structure

## Contributing Guidelines

### Code Style
- TypeScript for type safety
- Consistent indentation
- Component-based architecture
- Semantic HTML structure

### Content Guidelines
- Markdown format for blog posts
- Proper frontmatter usage
- Image optimization
- Alt text for accessibility

## Future Enhancements

### Potential Features
- Search functionality
- Comment system
- Dark mode toggle
- Multi-language support
- Advanced analytics

### Performance Improvements
- Lazy loading
- Image compression
- Bundle optimization
- Caching strategies

---

*Last Updated: October 30, 2025*
*Version: 1.0.0*
