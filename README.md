# 📻 VCC Morse Radio Network

A modern web application for Morse radio communication training over mesh networks. Built with Astro for optimal performance and user experience.

## ✨ Features

- 🎨 Modern responsive design with atmospheric effects
- 📱 Mobile-friendly interface across all devices
- 🚀 Built with Astro for fast loading and SEO
- 🌐 Blog system with Markdown support
- 📡 Morse code training and practice
- 🔄 Infinite scroll for blog posts
- 🎯 Interactive UI elements with smooth animations
- 🛡️ Secure authentication with VCC Kit integration
- 📊 Real-time Morse code decoding
- 🌟 Progressive Web App capabilities

## 🛠 Tech Stack

- [Astro](https://astro.build) - Modern web framework for content-driven sites
- Tailwind CSS - Utility-first CSS framework
- Vanilla JavaScript - Lightweight client-side interactions
- Markdown/MDX - Content management for blog posts
- Responsive Images - Optimized image loading
- CSS Custom Properties - Dynamic theming
- RSS Feed - Blog syndication support

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/villagecityorg/morseradio.git
cd morseradio
```

2. Install dependencies:
```bash
npm install
```

3. Configure Google Analytics (optional):
   Edit `src/components/GoogleAnalytics.astro` and replace the tracking ID:
   ```astro
   const GA_TRACKING_ID = 'G-XXXXXXXXXX'; // Replace with your actual ID
   ```

4. Start development server:
```bash
npm run dev
```

5. Open your browser and visit `http://localhost:4321`

## 📁 Project Structure

```
/
├── public/
│   ├── fonts/           # Custom font files
│   └── images/          # Static images and assets
├── src/
│   ├── components/
│   │   ├── BaseHead.astro        # Head component with meta tags
│   │   ├── Footer.astro          # Site footer
│   │   ├── GoogleAnalytics.astro # Analytics integration
│   │   ├── Header.astro          # Navigation header
│   │   ├── HeaderLink.astro       # Navigation links
│   │   ├── MorsePopup.astro      # CTA button with popup
│   │   └── FormattedDate.astro  # Date formatting component
│   ├── content/
│   │   ├── blog/               # Blog posts in Markdown
│   │   └── data/               # Site data and configuration
│   ├── layouts/
│   │   └── BlogPost.astro       # Blog post layout template
│   ├── pages/
│   │   ├── blog/               # Blog pages
│   │   ├── about.astro          # About page
│   │   └── index.astro         # Landing page
│   └── styles/
│       ├── custom.css           # Custom site styles
│       ├── fonts.css            # Font loading
│       └── global.css           # Global base styles
└── package.json
```

## 📝 Content Management

### Site Configuration
The main site content is managed through `src/content/data/main.json`. You can modify:
- Product information and features
- Training specifications
- SEO metadata
- Social media links

### Blog Posts
Blog posts are stored in `src/content/blog/` as Markdown files with frontmatter:
- `title`: Post title
- `pubDate`: Publication date
- `description`: Post summary
- `heroImage`: Featured image
- `featured`: Boolean for featured posts

### Featured Posts
The blog system supports featured posts:
- Latest post is automatically featured
- Posts with `featured: true` in frontmatter are also featured
- Featured posts display prominently on blog index

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Development
```bash
npm run dev
```

## 📊 Features in Detail

### Morse Radio Training
- Interactive Morse code practice
- Real-time visual feedback
- Multiple input methods (keyboard, mouse, VCC Kit)
- WPM (Words Per Minute) tracking
- Audio-visual feedback

### Blog System
- Markdown-based content management
- Infinite scroll pagination
- Featured post system
- RSS feed generation
- SEO-optimized URLs
- Responsive card layout

### Authentication
- VCC Kit device authentication
- Challenge code verification
- Secure login system
- Device pairing support

## 🔧 Configuration

### Analytics Configuration
Analytics is configured through `src/content/data/main.json`:
```json
"analytics": {
  "enabled": true,
  "provider": "google",
  "trackingId": "G-XXXXXXXXXX"
}
```

### Site Customization
- Colors and themes via CSS custom properties
- Font selection and typography
- Layout breakpoints for responsive design
- Animation timing and effects
- Content management through JSON configuration

## 📝 License

MIT License - feel free to use for personal and commercial projects

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow existing code style and conventions
- Test responsive behavior on multiple devices
- Ensure accessibility standards are met
- Update documentation for new features
- Test Morse radio functionality thoroughly

## 🙏 Acknowledgments

- Astro team for the excellent framework
- Morse code community for standards and patterns
- Open source contributors and maintainers
- VCC Kit developers for hardware integration
