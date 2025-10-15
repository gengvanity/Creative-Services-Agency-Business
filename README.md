# Creative Services Agency Business Landing Page

A modern, responsive landing page built with React and Tailwind CSS for Creative Services Agency Business - a premier creative services agency.

## Features

- **Hero Section**: Eye-catching hero with animated background and compelling hook
- **Creative Solution**: Showcase of services with team collaboration visuals
- **Service Features**: Comprehensive grid of 8+ creative services
- **Social Proof**: Client testimonials and industry endorsements
- **Call to Action**: Interactive demo scheduling with calendar UI

## Tech Stack

- React 18.2.0
- Tailwind CSS 3.3.3
- Lucide React (for icons)
- Create React App

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm start
```

Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### Build

```bash
npm run build
```

Builds the app for production to the `build` folder.

## Project Structure

```
src/
├── components/
│   ├── Hero.jsx              # Hero section with animated background
│   ├── CreativeSolution.jsx  # Services overview with team visual
│   ├── ServiceFeatures.jsx   # Service grid and features
│   ├── SocialProof.jsx       # Testimonials and client logos
│   └── CallToAction.jsx      # Demo scheduling CTA
├── App.js                    # Main app component
├── index.js                  # React entry point
└── index.css                 # Global styles and animations
```

## Design Features

- **Responsive Design**: Fully responsive across all device sizes
- **Modern UI**: Clean, contemporary design with gradient accents
- **Smooth Animations**: Subtle animations and transitions throughout
- **Accessibility**: Semantic HTML and proper contrast ratios
- **Performance**: Optimized for fast loading and smooth interactions

## Customization

### Colors

Primary colors can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your color palette
  }
}
```

### Content

Update content directly in the component files:
- Hero text: `src/components/Hero.jsx`
- Services: `src/components/ServiceFeatures.jsx`
- Testimonials: `src/components/SocialProof.jsx`

## License

Private - Creative Services Agency Business © 2024
