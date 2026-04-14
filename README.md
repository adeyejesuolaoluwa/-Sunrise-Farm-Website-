# 🌅 Sunrise Farm - Professional Website

Welcome to the **Sunrise Farm** website repository! This is a fully functional, modern, and professional website built with clean, modular HTML, CSS, and JavaScript.

## 📋 Project Overview

**Sunrise Farm** is a premium poultry farm website showcasing heritage turkeys and chickens. The design follows modern web standards with a warm, nature-inspired color palette featuring sunrise tones (soft orange, golden yellow, light green, and white).

### ✨ Key Features

- 🎨 **Premium Design**: Modern, visually appealing interface with smooth animations
- 📱 **Fully Responsive**: Works seamlessly on mobile, tablet, and desktop devices
- ⚡ **High Performance**: Optimized for fast loading and smooth interactions
- 🧩 **Modular Code**: Clean, well-organized HTML, CSS, and JavaScript
- ♿ **Accessible**: Keyboard navigation, ARIA labels, and semantic HTML
- 🎯 **Professional Layout**: Card-based design with hover effects and shadows
- 📊 **Interactive Elements**: Animated counters, form validation, smooth scrolling

## 🏗️ Project Structure

```
Sunrise Farm Website/
├── index.html          # Main HTML file with all sections
├── styles.css          # Complete styling with responsive design
├── script.js           # JavaScript for interactivity
└── README.md          # This file
```

## 🎨 Design Features

### Color Palette
- **Primary Orange**: `#FF8C42` - Warm, inviting accent color
- **Primary Gold**: `#FFD700` - Highlights and secondary accents
- **Light Green**: `#8FBC8F` - Natural, earthy feel
- **Soft White**: `#FAFAF8` - Clean background
- **Dark Gray**: `#2C2C2C` - Text and contrast

### Typography
- **Playfair Display**: Elegant serif font for headings (Google Fonts)
- **Poppins**: Clean, modern sans-serif for body text (Google Fonts)

### Animations
- Smooth fade-in and slide-up animations
- Floating effects on icons
- Hover transitions on cards and buttons
- Animated counters for statistics
- Scroll animations with intersection observer

## 📄 Website Sections

### 1. **Navigation Bar** (`<nav>`)
- Sticky navigation with smooth transitions
- Mobile hamburger menu with toggle
- Active link highlighting on scroll
- Responsive design

### 2. **Hero Section** (`#home`)
- Large, eye-catching hero image area
- Website title: "Sunrise Farm"
- Catchy slogan: "Fresh, Healthy, and Naturally Raised"
- Call-to-action button ("Explore Our Farm")
- Scroll indicator animation

### 3. **About Us** (`#about`)
- Brief farm story and mission
- Core values displayed in cards (Sustainable, Care-Focused, Quality First)
- Mission-driven messaging
- Responsive grid layout

### 4. **Statistics Section**
- Animated counters for key metrics:
  - 20 Years in Business
  - 5,000+ Happy Customers
  - 15,000+ Birds Raised
  - 100% Natural Feed
- Triggers animation on scroll

### 5. **Our Animals/Products** (`#animals`)
- Grid layout with product cards
- Two main products:
  - **Heritage Turkeys** 🦃
  - **Premium Chickens** 🐔
- Each card includes:
  - Product image/emoji
  - Description
  - Features (with emojis)
  - Price ($20/lb)
  - "Contact for Order" button
  - Premium/Best Seller badges

### 6. **Animal Health & Care** (`#health`)
- **Common Poultry Illnesses**: 4 disease cards
  - Coccidiosis
  - Newcastle Disease
  - Worm Infestation
  - Fowl Pox
- **Medications & Treatments**: Professional table with:
  - Tetracycline (Antibiotic)
  - Amprolium (Anticoccidial)
  - Levamisole (Anthelmintic)
  - Vitamin Supplements
  - Newcastle Vaccine
  - Marek's Vaccine
- **Safety Notice**: Important disclaimer about veterinary consultation

### 7. **Services** (`#services`)
- Three main services:
  - 🚚 Farm Delivery
  - 📚 Poultry Care Guidance
  - 📦 Bulk Orders
- Feature lists for each service
- Hover effects

### 8. **Testimonials**
- Customer reviews with 5-star ratings
- Three professional testimonials
- Author information and credentials

### 9. **Contact Section** (`#contact`)
- Contact information cards:
  - Phone: (555) 123-4567
  - Email: info@sunrisefarm.com
  - Location: 123 Sunrise Valley Road, Green Hills, PA 17601
- **Contact Form** with fields:
  - Name (required)
  - Email (required, validated)
  - Phone (optional)
  - Product Interest (dropdown)
  - Message (required, textarea)
- Form validation with error/success messages
- Map placeholder
- Social media icons

### 10. **Footer**
- Company information
- Quick links
- Newsletter subscription form
- Social media links
- Copyright information

## 💻 Technical Details

### HTML Features
- Semantic HTML5 elements
- Proper heading hierarchy
- Form with validation attributes
- Accessibility considerations
- Meta tags for responsiveness

### CSS Features
- CSS Variables for easy theming
- Flexbox and CSS Grid layouts
- Mobile-first responsive design
- Smooth transitions and animations
- Box shadows and depth effects
- Gradient backgrounds
- Media queries for devices:
  - Desktop (1200px+)
  - Tablet (769px - 1199px)
  - Mobile (480px - 768px)
  - Small Mobile (<480px)

### JavaScript Features
- Mobile menu toggle with hamburger icon
- Animated counters (triggered on scroll)
- Form validation and submission
- Contact form pre-population from product cards
- Newsletter subscription
- Smooth scroll navigation
- Intersection Observer for animations
- Active navigation link highlighting
- Ripple button effects
- Keyboard navigation (Escape to close menu)
- Skip to main content accessibility feature

## 🚀 Getting Started

### 1. Opening the Website
Simply open `index.html` in any modern web browser:
- Chrome, Firefox, Safari, Edge (latest versions)

### 2. File Setup
No build process or dependencies needed! This is a static website.

### 3. Hosting
To deploy online:
1. Upload all three files (index.html, styles.css, script.js) to your host
2. Ensure they're in the same directory
3. Access via your domain

## 📱 Responsive Breakpoints

- **Desktop** (1200px+): Full layout with multi-column grids
- **Tablet** (769px - 1199px): Adjusted grid columns, optimized spacing
- **Mobile** (480px - 768px): Single column layout where appropriate
- **Small Mobile** (<480px): Minimal layout, stacked elements

## 🎯 Interactive Features

### Form Validation
- Email validation with regex pattern
- Required field checking
- Success/error message display
- Form reset after submission

### Mobile Menu
- Hamburger toggle on screens <768px
- Smooth animations
- Click outside to close
- Escape key to close

### Smooth Scrolling
- All navigation links smooth scroll
- Auto-scroll on CTA button clicks
- Scroll behavior compatible with modern browsers

### Animations
- Page load animations
- Scroll-triggered animations with Intersection Observer
- Hover effects on interactive elements
- Animated counters
- Floating and bounce effects

## 🔧 Customization Guide

### Changing Colors
Edit the CSS variables in `:root` section of `styles.css`:
```css
:root {
    --primary-orange: #FF8C42;
    --primary-gold: #FFD700;
    --light-green: #8FBC8F;
    /* ... other variables ... */
}
```

### Updating Content
Edit `index.html` sections to change:
- Text content
- Product information
- Contact details
- Testimonials
- Any other text

### Modifying Prices
All prices are currently set to `$20/lb`. To change:
1. Find `.price` elements in HTML
2. Update the price value
3. Update in multiple places if needed

### Adding New Sections
1. Copy a section structure
2. Add it to the HTML
3. Add CSS styling
4. Add any required JavaScript functionality

## 📊 Browser Support

- Chrome/Chromium: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support (15+)
- Edge: ✅ Full support
- IE 11: ⚠️ Limited support (no CSS Grid, limited animations)

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels (where applicable)
- Keyboard navigation support
- Skip to main content link
- Color contrast compliance
- Form labels properly associated
- Alt text ready (for images)

## 🚨 Important Notes

1. **Copyright**: Update footer year and copyright information
2. **Contact Info**: Replace placeholder phone, email, and address
3. **Images**: Replace emoji placeholders with real high-quality images
4. **Email Configuration**: Form currently logs to console; configure backend to actually send emails
5. **Analytics**: Add Google Analytics tag for tracking

## 📝 Form Handling

Currently, the contact form displays a success message but doesn't send data. To enable email functionality:

1. Set up a backend service (Node.js, PHP, etc.)
2. Create an API endpoint
3. Update the form submission handler in `script.js`
4. Example implementations:
   - Formspree
   - EmailJS
   - Custom PHP script
   - Backend API

## 🎓 Learning Resources

This project demonstrates:
- Modern HTML5 semantic structure
- CSS Grid and Flexbox layouts
- Responsive design patterns
- Vanilla JavaScript interactivity
- Form validation techniques
- Animation and transitions
- Intersection Observer API
- Mobile-first design approach

## 💡 Future Enhancement Ideas

- [ ] Lazy loading for images
- [ ] Darkmode toggle
- [ ] Product filtering
- [ ] Shopping cart functionality
- [ ] Blog section
- [ ] Real image gallery
- [ ] Live chat support
- [ ] Email backend integration
- [ ] Google Maps integration
- [ ] Meta tags optimization for SEO
- [ ] Progressive Web App (PWA) support
- [ ] Performance optimization (minification)

## 📞 Contact Information

For questions about the farm:
- **Phone**: (555) 123-4567
- **Email**: info@sunrisefarm.com
- **Location**: 123 Sunrise Valley Road, Green Hills, PA 17601

## 📄 License

This website template is provided as-is for the Sunrise Farm business.

## ✅ Quality Checklist

- ✅ Professional design
- ✅ Fully responsive layout
- ✅ Clean, modular code
- ✅ Smooth animations
- ✅ Form validation
- ✅ Mobile menu
- ✅ Proper semantics
- ✅ Accessibility considerations
- ✅ Cross-browser compatibility
- ✅ Performance optimized
- ✅ Well-commented code
- ✅ No external dependencies

---

**Sunrise Farm Website** - "Fresh, Healthy, and Naturally Raised" 🌅🦃🐔

Built with ❤️ for a premium farming experience.
