# AKPESSC 2025 Website

A modern, responsive React website for the All Kerala Power & Energy Society Student Congress 2025, built with Nexus-inspired design and smooth animations.

## 🚀 Features

- **Modern Design**: Nexus-inspired UI with smooth animations and transitions
- **Responsive**: Fully responsive design that works on all devices
- **Interactive**: Smooth scrolling, hover effects, and interactive elements
- **Performance**: Optimized with GSAP animations and Lenis smooth scrolling
- **Accessibility**: Built with accessibility best practices

## 🛠️ Tech Stack

- **React 19** - Modern React with latest features
- **Vite** - Fast build tool and development server
- **Framer Motion** - Smooth animations and transitions
- **GSAP** - Advanced animations and scroll triggers
- **Lenis** - Smooth scrolling library
- **CSS3** - Modern CSS with custom properties and grid/flexbox

## 📁 Project Structure

```
akpessc-website/
├── public/
│   └── assets/
│       ├── Akpessc logos/     # Event logos and branding
│       ├── images/            # Event images and photos
│       └── images2/           # Additional event assets
├── src/
│   ├── components/            # React components
│   │   ├── Navbar.jsx         # Navigation component
│   │   ├── Hero.jsx           # Hero section
│   │   ├── About.jsx          # About section
│   │   ├── Events.jsx         # Events showcase
│   │   ├── Sessions.jsx       # Detailed sessions
│   │   ├── Schedule.jsx       # Event schedule
│   │   ├── Speakers.jsx       # Speaker profiles
│   │   ├── Registration.jsx   # Registration form
│   │   ├── Contact.jsx        # Contact information
│   │   └── Footer.jsx         # Footer component
│   ├── App.jsx               # Main app component
│   ├── main.jsx              # App entry point
│   └── index.css             # Global styles
├── package.json              # Dependencies and scripts
├── vite.config.js            # Vite configuration
└── index.html                # HTML template
```

## 🎨 Design Features

### Color Scheme
- **Primary**: #0147FF (Nexus Blue)
- **Secondary**: #09543d (AKPESSC Green)
- **Accent**: #ffa9e9 (Cultural Pink)
- **Text**: #1a1a1a (Dark Gray)
- **Background**: #ffffff (White)

### Typography
- **Font**: Syne (Modern, clean typeface)
- **Weights**: 400, 500, 600, 700, 800
- **Responsive**: Fluid typography with clamp() functions

### Animations
- **GSAP**: Scroll-triggered animations
- **Framer Motion**: Component animations
- **Lenis**: Smooth scrolling
- **CSS**: Hover effects and transitions

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd akpessc-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📱 Sections

### 1. Hero Section
- Event branding and logo
- Key event information
- Call-to-action buttons
- Event statistics

### 2. About Section
- Event description and mission
- Key features and benefits
- Statistics and achievements

### 3. Events Section
- Comprehensive event showcase
- Interactive event cards
- Detailed event information

### 4. Sessions Section
- Day-by-day session breakdown
- Interactive day selector
- Detailed session information
- Speaker details

### 5. Schedule Section
- High-level event timeline
- Key activities per day
- Visual schedule representation

### 6. Speakers Section
- Speaker profiles and bios
- Expertise areas
- Professional information

### 7. Registration Section
- Ticket options and pricing
- Registration form
- Contact information

### 8. Contact Section
- Event location and details
- Organizing committee
- Contact form
- Social media links

### 9. Footer
- Event information
- Partner organizations
- Quick links
- Social media

## 🎯 Key Features

### Responsive Design
- Mobile-first approach
- Tablet and desktop optimized
- Touch-friendly interactions

### Performance
- Optimized images and assets
- Lazy loading
- Smooth animations
- Fast loading times

### Accessibility
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Screen reader friendly

### SEO Ready
- Meta tags
- Structured data
- Semantic markup
- Fast loading

## 🎨 Customization

### Colors
Update CSS custom properties in `src/index.css`:
```css
:root {
  --color-primary: #0147FF;
  --color-secondary: #09543d;
  /* ... other colors */
}
```

### Typography
Change font family in `src/index.css`:
```css
:root {
  --font-primary: 'Your-Font', sans-serif;
}
```

### Content
Update content in respective component files:
- `src/components/Hero.jsx` - Hero content
- `src/components/About.jsx` - About information
- `src/components/Events.jsx` - Event details
- etc.

## 📞 Support

For support or questions about the website:
- **Email**: akpessc2025@ieee.org
- **Phone**: +91 94460 60728
- **Website**: [AKPESSC 2025](https://akpessc2025.ieee.org)

## 📄 License

This project is created for AKPESSC 2025 by IEEE PES Kerala Chapter.

## 🙏 Acknowledgments

- **Design Inspiration**: Nexus Next-Gen AI Summit
- **Icons**: Bootstrap Icons
- **Fonts**: Google Fonts (Syne)
- **Animations**: GSAP and Framer Motion
- **Smooth Scrolling**: Lenis

---

**AKPESSC 2025** - All Kerala Power & Energy Society Student Congress  
*IEEE PES Kerala Chapter*
