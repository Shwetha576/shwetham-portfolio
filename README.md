# Shwetha M - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS, featuring a dark blue and black color scheme.

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation & Setup

1. **Download the project:**
   - Option A: Clone from GitHub (if connected):
     ```bash
     git clone [your-github-repo-url]
     cd [project-name]
     ```
   
   - Option B: Download ZIP file from Lovable and extract

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to `http://localhost:8080`

## 📁 Project Structure

```
portfolio-website/
├── public/
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── assets/
│   │   └── shwetha-headshot.jpg
│   ├── components/
│   │   ├── ui/                 # Shadcn UI components
│   │   ├── About.tsx
│   │   ├── BackToTop.tsx
│   │   ├── Contact.tsx
│   │   ├── Hero.tsx
│   │   ├── LoadingSpinner.tsx
│   │   ├── Navigation.tsx
│   │   ├── Portfolio.tsx
│   │   └── Services.tsx
│   ├── hooks/
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── pages/
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx
│   ├── index.css             # Design system & styles
│   ├── main.tsx
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tailwind.config.ts        # Tailwind configuration
├── tsconfig.json
└── vite.config.ts
```

## 🛠 Available Scripts

```bash
# Development
npm run dev          # Start development server (localhost:8080)

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
```

## 🎨 Features

- **Responsive Design**: Mobile-first approach, works on all devices
- **Dark Theme**: Modern dark blue and black color scheme
- **Smooth Animations**: CSS animations and scroll-triggered effects
- **Contact Form**: EmailJS integration for contact functionality
- **Single Page App**: Smooth scrolling navigation between sections
- **TypeScript**: Full type safety and better development experience
- **Modern Stack**: React 18, Vite, Tailwind CSS

## 📧 Contact Form Setup

The contact form uses EmailJS. To set up your own:

1. Create account at [EmailJS](https://www.emailjs.com/)
2. Update these values in `src/components/Contact.tsx`:
   ```typescript
   // Replace with your EmailJS credentials
   const SERVICE_ID = 'your_service_id';
   const TEMPLATE_ID = 'your_template_id';
   const PUBLIC_KEY = 'your_public_key';
   ```

## 🔧 Customization

### Colors
Edit `src/index.css` to change the color scheme:
```css
:root {
  --portfolio-bg: 220 13% 9%;        /* Dark background */
  --portfolio-accent: 220 100% 25%;   /* Blue accent */
  /* ... other color variables */
}
```

### Content
- **Personal Info**: Update in `src/components/Hero.tsx` and `src/components/About.tsx`
- **Projects**: Modify `src/components/Portfolio.tsx`
- **Services**: Edit `src/components/Services.tsx`
- **Contact Details**: Update `src/components/Contact.tsx`

### Images
- Replace `src/assets/shwetha-headshot.jpg` with your own photo
- Update import statements in components as needed

## 📱 Deployment

### Build for Production
```bash
npm run build
```

The `dist/` folder contains the production-ready files.

### Deployment Options
- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your GitHub repo
- **GitHub Pages**: Use GitHub Actions
- **Custom Server**: Upload `dist` folder contents

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Support

For issues or questions:
1. Check the [troubleshooting guide](https://docs.lovable.dev/tips-tricks/troubleshooting)
2. Contact: shwetham2023@example.com
3. GitHub: [https://github.com/Shwetha576](https://github.com/Shwetha576)

---

Built with ❤️ using [Lovable](https://lovable.dev)