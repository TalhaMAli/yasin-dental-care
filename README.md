# Yasin Dental Care Website

A professional, pixel-perfect dental website built with React, featuring custom SVG illustrations, smooth animations, and WhatsApp integration.

## 🎨 Features

- **Responsive Design**: Mobile-first approach with full responsiveness
- **Custom SVG Illustrations**: 3D glass teeth, clinic scenes, doctor portraits (no emojis or generic clipart)
- **Interactive Elements**:
  - Service cards with hover animations
  - Doctor carousel scrolling
  - Before/After slider with draggable divider
  - Treatment calculator with 3D tooth visualization
  - Smooth scroll behavior
- **WhatsApp Integration**: 
  - Floating button with pulse animation
  - Pre-filled messages for appointments
  - Direct booking via WhatsApp
- **Professional UI**:
  - DM Sans typography
  - Color palette: Deep navy (#1a3b6e), light blues, white
  - Smooth transitions and animations
  - Accessibility-focused

## 🚀 Quick Start

### Prerequisites
- Node.js 14+ and npm
- Git (for version control)
- Netlify account (free)
- Namecheap domain (already purchased)

### Local Development

1. **Install dependencies**:
```bash
npm install
```

2. **Start development server**:
```bash
npm run dev
```

The site will open at `http://localhost:3000`

3. **Build for production**:
```bash
npm run build
```

## 📱 WhatsApp Integration

The website uses WhatsApp API for appointments:
- **Phone**: +92 304 123 1596
- All booking buttons link to WhatsApp with pre-filled messages
- Floating button (bottom-right) for quick access

## 🌐 Deployment to Netlify (FREE)

### Step 1: Connect Repository to Netlify

1. Push this project to GitHub (if not already done):
```bash
git init
git add .
git commit -m "Initial commit: Yasin Dental Care website"
git branch -M main
git remote add origin https://github.com/yourusername/yasin-dental.git
git push -u origin main
```

2. Go to [netlify.com](https://netlify.com)
3. Sign in to your Netlify account
4. Click "New site from Git"
5. Select GitHub and authorize
6. Select your `yasin-dental` repository
7. **Build settings** should auto-fill:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Deploy site"

### Step 2: Connect Namecheap Domain

1. Go to your Netlify site settings
2. Click "Domain management"
3. Click "Add a custom domain"
4. Enter your domain (e.g., `yasindental.com`)
5. Netlify will provide nameservers:
   ```
   dns1.p01.nsone.net
   dns2.p01.nsone.net
   dns3.p01.nsone.net
   dns4.p01.nsone.net
   ```

6. Log in to Namecheap:
   - Go to "Domain List"
   - Click on your domain
   - Go to "Nameservers"
   - Change to Custom DNS
   - Paste Netlify's nameservers
   - Save

7. Wait 24-48 hours for DNS propagation
8. Verify in Netlify (it will show green checkmark when live)

### Step 3: Enable HTTPS (Automatic)

Netlify automatically provides free SSL/TLS certificates via Let's Encrypt. Your site will have HTTPS enabled automatically.

## 🔧 Configuration Files

- **vite.config.js**: Vite build configuration
- **tailwind.config.js**: Tailwind CSS theming
- **postcss.config.js**: PostCSS with Tailwind & Autoprefixer
- **netlify.toml**: Netlify deployment settings
  - Build command and output directory
  - Redirect rules for SPA routing
  - Security headers
  - Cache optimization
- **package.json**: Dependencies and scripts

## 📁 Project Structure

```
yasin-dental/
├── src/
│   ├── App.jsx              # Main React component
│   ├── main.jsx             # React entry point
│   └── index.css            # Global styles
├── index.html               # HTML template
├── package.json             # Dependencies
├── vite.config.js           # Vite config
├── tailwind.config.js       # Tailwind config
├── postcss.config.js        # PostCSS config
├── netlify.toml             # Netlify config
└── .gitignore               # Git ignore rules
```

## 🎯 Key Components

### Hero Section
- Full-height banner with clinic SVG background
- Navy blue gradient overlay
- CTA buttons for booking

### Services Section
- 5 service cards with custom SVG illustrations:
  - Aesthetic Dentistry (3D glass tooth)
  - Orthodontics (Clear aligner tray)
  - Implantology (Implant screw + crown)
  - Whitening (Bright teeth)
  - Emergency Care (Molar cross-section)
- Hover animations and active states

### Specialists Section
- Horizontal scrollable doctor carousel
- Doctor portraits with SVG illustrations
- Role badges and experience

### Treatment Calculator
- 3-column layout with interactive elements
- Goal selection (radio buttons)
- Treatment method pills
- 3D rotating tooth visualization
- Cost estimates and timeline

### Testimonials
- Category tabs (Whitening, Veneers, Implantology, Orthodontics)
- Before/After comparison with draggable divider
- Patient stories and doctor recommendations

### Booking Form
- Full name, phone, service, date inputs
- WhatsApp integration
- Form validation

### WhatsApp Button
- Fixed floating button
- Pulse animation
- Always accessible

## 🎨 Color Palette

- **Primary Dark**: #1a3b6e (Deep navy)
- **Primary Light**: #2563b0 (Medium blue)
- **Accent**: #4a90d9 (Light blue)
- **Background Light**: #eaf3ff (Pale blue)
- **Background Lighter**: #f4f8ff (Very pale blue)
- **Text Dark**: #0d1f3c
- **Text Medium**: #5a718a
- **Text Light**: #9ab0c8

## 📝 Customization

### Change Phone Number
Edit the `whatsappPhone` constant in `src/App.jsx`:
```javascript
const whatsappPhone = '+92 304 123 1596'; // Update this
```

### Update Doctor Information
Modify the `doctors` array in `src/App.jsx`:
```javascript
const doctors = [
  {
    name: 'Dr. Name',
    role: 'Specialization',
    description: 'Bio',
    since: '2020'
  },
  // ... more doctors
];
```

### Modify Services
Edit the `services` array:
```javascript
const services = [
  { name: 'Service Name', icon: 'tooth' },
  // ... more services
];
```

## 🔒 Performance & Security

- **Vite**: Ultra-fast bundling and builds
- **React 18**: Latest React features
- **Tailwind CSS**: Optimized CSS with tree-shaking
- **Netlify**: CDN delivery, automatic HTTPS, security headers
- **Accessibility**: ARIA labels, keyboard navigation, semantic HTML

## 📊 Lighthouse Scores

Target metrics:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

## 🆘 Troubleshooting

### Domain not connecting?
- Wait 24-48 hours for DNS propagation
- Check Netlify shows "DNS verified" with green checkmark
- Verify nameservers are correct in Namecheap

### Build fails?
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Hot reload not working?
- Ensure Vite dev server is running: `npm run dev`
- Check browser console for errors
- Restart dev server if needed

## 📞 Support

For WhatsApp issues or customization:
- Contact: +92 304 123 1596
- Messages are integrated directly into booking form

## 📄 License

This website is proprietary to Yasin Dental Care.

## 🚢 Deployment Checklist

- [ ] Repository pushed to GitHub
- [ ] Netlify site connected to repository
- [ ] Build settings verified
- [ ] Domain added to Netlify
- [ ] Nameservers updated in Namecheap
- [ ] HTTPS certificate issued (automatic)
- [ ] DNS verified (green checkmark)
- [ ] Site accessible at custom domain
- [ ] WhatsApp number verified
- [ ] All links tested
- [ ] Mobile responsiveness tested
- [ ] Form submissions work

---

**Built with React + Vite + Tailwind CSS**
**Deployed on Netlify**

Enjoy your new professional dental website! 🦷✨
