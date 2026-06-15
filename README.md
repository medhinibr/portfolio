# Developer Portfolio

A high-performance, cinematic developer portfolio showcasing system architectures, software engineering capabilities, and cloud engineering practices. Built with React, Vite, Framer Motion, and Tailwind CSS.

## Architecture and Tech Stack

- **Core Framework**: React 19 (via Vite) for component-driven UI development and hot-module replacement.
- **Styling and Design System**: Tailwind CSS v4 utilizing CSS variables, theme design tokens, and utility classes for layout, typography, and theme management.
- **Motion and Physics**: Framer Motion for interactive spring animations, delayed reveals, and dynamic letter-morphing states.
- **Scroll Orchestration**: Lenis Smooth Scroll for inertial kinetic scrolling behaviors on desktop viewports.
- **Assets and Icons**: Inline vector SVGs and Lucide React icons for lightweight rendering and high scalability.

## Rendering and Layout Optimization

### Font Smoothing and Aliasing Resolution
To prevent jagged edges (aliasing) during complex 2D transitions, letter scale-ups, and text rotation operations:
- A custom utility class `smooth-text` is integrated into the style sheet using `-webkit-font-smoothing: antialiased` and `-moz-osx-font-smoothing: grayscale`.
- Hardware acceleration is triggered via a 3D transform bypass (`transform: translateZ(0)`), forcing the GPU to composite text elements independently from standard rasterization layers.
- Text rendering mode is optimized for legibility (`text-rendering: optimizeLegibility`).

### Cinematic Layering
- The viewport implements a composite architecture, employing a fixed noise-texture SVG layer overlayed with a mix-blend-mode cursor tracker.
- Deep background blur blooms use GPU-accelerated CSS filters (`blur`) to render glowing ambient shapes without impact on performance metrics.

## Project Structure

```
├── public/                  # Static assets and document configuration
├── src/
│   ├── assets/              # Static vector illustrations and media
│   ├── App.css              # Custom local element styles
│   ├── App.jsx              # Main React file containing the application structure and components
│   ├── index.css            # Tailwind directives, custom theme variables, and global utility classes
│   └── main.jsx             # React DOM injection and bootstrap logic
├── package.json             # Node.js dependencies and run-scripts
└── vite.config.js           # Development server and bundle compiler configurations
```

## Local Development and Setup

### Prerequisites
Ensure that Node.js (v18 or newer) and npm are installed in your development environment.

### Installation
Clone the repository and install the runtime and build-time dependencies:
```bash
git clone https://github.com/medhinibr/portfolio.git
cd portfolio
npm install
```

### Available Scripts

#### Start Local Development Server
Launches the Vite dev server with fast refresh cycles:
```bash
npm run dev
```

#### Compile for Production
Optimizes, compiles, and bundles the application source code into the `dist/` directory:
```bash
npm run build
```

#### Local Preview
Serves the production build locally for validation:
```bash
npm run preview
```

## Deployment
The portfolio can be compiled and deployed to high-availability static web hosting platforms (such as Firebase Hosting or Vercel). The build pipeline processes JSX components, bundles CSS modules, and packages optimized static outputs.
