# Hannan Butt - Portfolio

A modern, animated personal portfolio website built with React and Vite. Features a dark theme with Rich Cerulean accents, smooth animations, and a premium user experience.

![Portfolio Preview](https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-5-purple?style=flat-square&logo=vite)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## ✨ Features

- **Modern Dark Theme** - Sleek black background with Rich Cerulean (#2b96d4) accent colors
- **Particle Background** - Subtle floating particles for visual depth
- **Custom Cursor** - Smooth, modern cursor with hover effects
- **Scroll Animations** - Staggered fade-in effects as you scroll
- **Animated Cards** - Gradient borders, shine effects, and hover transformations
- **Floating Navigation** - Vertical sidebar with smooth scroll navigation
- **PDF Resume Preview** - In-page resume viewer with download option
- **Loading Screen** - Animated intro with spinning rings
- **Responsive Design** - Fully optimized for mobile, tablet, and desktop
- **Fluid Typography** - Text scales smoothly across all screen sizes

## 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: CSS Modules + CSS Custom Properties
- **Fonts**: Cabinet Grotesk (headings) + Satoshi (body) via Fontshare
- **Animations**: CSS Animations + Intersection Observer API
- **Deployment**: Ready for Vercel/Netlify

## 📁 Project Structure

```
src/
├── assets/              # SVG icons and images
├── common/              # Reusable components
│   ├── ProjectCard/
│   ├── ScrollReveal/
│   └── SkillList/
├── components/          # Page sections
│   ├── Hero/
│   ├── Experience/
│   ├── Projects/
│   ├── Skills/
│   ├── Education/
│   ├── Contact/
│   ├── Footer/
│   ├── FloatingNav/
│   ├── ParticleBackground/
│   ├── LoadingScreen/
│   ├── CustomCursor/
│   └── ResumePreview/
├── data/
│   └── portfolio.js     # Centralized content data
├── App.jsx
├── App.css              # Global styles & CSS variables
└── main.jsx
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/HannanButt/Hannan-Portfolio.git

# Navigate to project directory
cd Hannan-Portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## 📝 Customization

### Update Content

Edit `src/data/portfolio.js` to update:
- Personal information
- Projects
- Skills
- Experience
- Education
- Social links

### Change Colors

Modify CSS variables in `src/App.css`:

```css
:root {
    --color-500: #2b96d4;      /* Primary color */
    --background-color: #0a0a0a; /* Background */
    --text-primary: #ffffff;     /* Main text */
}
```

### Add New Projects

Add entries to the `projects` array in `portfolio.js`:

```javascript
{
    title: "Project Name",
    techUsed: ["React", "Node.js"],
    description: "Project description...",
    links: {
        github: "https://github.com/...",
        demo: "https://..."
    }
}
```

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 👤 Author

**Hannan Butt**
- GitHub: [@HannanButt](https://github.com/Hannanbutt1256/)
- LinkedIn: [hannanbutt](https://linkedin.com/in/hannan-butt/)
- Email: hannanbutt.dev@gmail.com

---

⭐ Star this repo if you found it helpful!
