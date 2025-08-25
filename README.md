# GoLeverage - Futuristic Website

A modern, futuristic website for GoLeverage, featuring AI-powered solutions, business services, and real estate investment opportunities. Built with HTML, CSS, and JavaScript for easy deployment on GitHub Pages.

## Features

- **Futuristic Neon Design**: Black background with cyan/blue neon accents and red buttons
- **Responsive Layout**: Works perfectly on all devices (mobile, tablet, desktop)
- **Interactive Elements**: Hover effects, animations, and smooth transitions
- **AI Quotes Carousel**: Auto-rotating quotes that change every 5 seconds
- **Service Pages**: Business Solutions, Agentic AI, Real Estate, and Shop
- **Pricing Tables**: Clear comparison layouts for services and packages
- **Digital Asset Store**: Product filtering by category

## File Structure

```
goleverage-simple/
├── index.html             # Homepage
├── business.html          # Business Solutions page
├── ai.html                # Agentic AI page
├── realestate.html        # Real Estate page
├── shop.html              # Shop page
├── favicon.ico            # Website favicon
├── assets/                # Images and other assets
│   ├── GO Logo.png        # Company logo
│   └── website_infinity.png # Hero background image
├── css/                   # CSS files
│   ├── style.css          # Main stylesheet
│   └── animations.css     # Animation effects
└── js/                    # JavaScript files
    ├── main.js            # Main JavaScript functionality
    ├── carousel.js        # AI quotes carousel
    └── shop.js            # Shop filtering functionality
```

## Deployment Instructions

### GitHub Pages Deployment

1. **Create a GitHub Repository**:
   - Sign in to your GitHub account
   - Click the "+" icon in the top right and select "New repository"
   - Name your repository (e.g., "goleverage-website")
   - Make it public
   - Click "Create repository"

2. **Upload Files**:
   - Click "uploading an existing file" on the repository page
   - Drag and drop all the files and folders from this package
   - Commit the changes

3. **Enable GitHub Pages**:
   - Go to your repository's "Settings" tab
   - Scroll down to the "GitHub Pages" section
   - Under "Source", select "main" branch
   - Click "Save"
   - Wait a few minutes for your site to be published
   - GitHub will provide you with a URL (e.g., https://yourusername.github.io/goleverage-website/)

### Alternative Hosting Options

#### Netlify

1. Sign up for a free Netlify account
2. Drag and drop the entire website folder to Netlify's upload area
3. Your site will be live in seconds with a Netlify subdomain
4. You can add a custom domain in the settings

#### Vercel

1. Sign up for a free Vercel account
2. Install Vercel CLI: `npm i -g vercel`
3. Navigate to your project directory and run: `vercel`
4. Follow the prompts to deploy

## Customization

### Changing Colors

The color scheme can be easily modified by editing the CSS variables at the top of the `css/style.css` file:

```css
:root {
    /* Colors */
    --color-black: #000000;
    --color-dark: #0a0a0a;
    /* ... */
    
    /* Neon Colors */
    --color-neon-primary: #00e5ff;
    --color-neon-primary-glow: rgba(0, 229, 255, 0.7);
    --color-neon-secondary: #0077ff;
    --color-neon-secondary-glow: rgba(0, 119, 255, 0.7);
    --color-neon-accent: #ff003c;
    --color-neon-accent-glow: rgba(255, 0, 60, 0.7);
    /* ... */
}
```

### Adding New Pages

1. Copy one of the existing HTML files (e.g., `business.html`)
2. Rename it to your new page name (e.g., `careers.html`)
3. Update the content and title
4. Add a link to the new page in the navigation menu in all HTML files

## Contact Information

- **Email**: support@goleverage.ai
- **Schedule a Call**: [Calendly Link](https://calendly.com/rdogra-goleverage/30min)
- **LinkedIn**: [Company Page](https://www.linkedin.com/company/107570161/)

## License

All rights reserved. This website is for the exclusive use of GoLeverage.

