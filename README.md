# High-Performance DevOps and Cloud Engineering Portfolio

This repository contains the source code for a highly optimized, interactive developer portfolio. The application is designed to showcase cloud architecture design, systems deployment lifecycles, and software engineering capabilities.

---

## Technical Architecture Overview

The system architecture utilizes a high-frequency rendering client built on React 19, compiled with Vite, and styled via Tailwind CSS. The interface integrates interactive vector representations of infrastructure topology, simulated telemetry checkups, and animated continuous delivery pipelines.

```
[User Browser Client]
          │ (Smooth inertial scroll via Lenis)
          ▼
   [Viewport Frame] ── (Composite Noise Filter & Mix-Blend-Mode Custom Cursor)
          │
          ├─► [App Landing/Hero] (Letter-morphing & spring physics)
          │
          ├─► [Cloud Topology Map] (Interactive SVG VPC, Compute, DNS nodes + Path Traffic)
          │      └─► [Terraform Log Simulator] (Sequence timers parsing execution arrays)
          │
          ├─► [Service Catalog / Deployments Registry]
          │      └─► [ICMP Test Connection Pinger] (Asynchronous mock response generator)
          │
          ├─► [Real-Time Telemetry & Contributions]
          │      └─► [Live GitHub Fetcher] (Queries jogruber API for daily commit grids)
          │      └─► [Dynamic Bezier Plotter] (Renders monthly velocity SVG Line Charts)
          │
          ├─► [Interactive Contact Console]
          │      └─► [Expanding Glow Underliner] (Relative container :focus-within transitions)
          │      └─► [FormSubmit AJAX Pipeline] (Asynchronous POST payload to brmedhini@gmail.com)
          │      └─► [Gmail Compose Bridge] (Direct browser intent mail pre-population link)
          │
          └─► [System Footer Status Bar] (Renders live latency metrics, port status, and brand badges)
```

---

## Detailed Technology Stack

### Core Framework and Runtimes
* **React 19**: Orchestrates declarative UI components, virtual DOM diffing, and application state management.
* **Vite 8**: Serves as the high-speed build tool and bundler, implementing Hot Module Replacement (HMR) during local development and optimized Rollup treeshaking compilation for production assets.
* **Node.js**: The Javascript execution engine powering the build pipeline and dependency resolution.

### Styling and Visual Compositing
* **Tailwind CSS v4**: Implements utility-first classes, custom layout modules, responsive breakpoints, and CSS variables for systemic theme configurations.
* **Framer Motion**: Orchestrates complex animations, physics-based springs, scale transforms, delayed keyframes, and character-based title morphing.
* **Lenis Smooth Scroll**: Intercepts native mouse wheel events to deliver a consistent, hardware-accelerated scroll flow across variable monitor refresh rates.

### Telemetry and Data Visualization
* **GitHub Telemetry Engine**: Integrates live contributions queries using the public GitHub API scraper. Fetches daily commit metrics for target years (2026, 2025, 2024) and outputs them to the grid.
* **Cubic Bezier Plotter**: Runs a client-side JavaScript reducer to group daily contribution data into monthly increments. Automatically calculates control points to draw a custom SVG line path and area fill gradient showing engineering velocity.
* **Scalable Vector Graphics (SVG)**: Custom graphics rendering VPC blocks, compute nodes, and path connection lines in the Cloud Topology visualization.
* **SVG animateMotion**: Animates network packets along specific vector paths, simulating server traffic and data flow in real time.

### Input Mechanics and Communication Routing
* **Expanding Underline Glow**: Utilizes a relative container wrapping text input fields with a hidden absolute span. Focus triggers a `:focus-within` Tailwind state, causing the gradient line (`bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500`) to expand from the center using CSS `transform: scaleX(100)` with a neon drop shadow.
* **FormSubmit AJAX Pipeline**: Handles submissions dynamically in the browser. Intercepts the submit action and makes a secure, asynchronous POST request using `fetch` to FormSubmit's serverless mailer API, routing inputs directly to `brmedhini@gmail.com`.
* **Gmail Web Intent API**: Provides a direct communication fallback in the footer by mapping the mail button to `https://mail.google.com/mail/?view=cm&fs=1&to=brmedhini@gmail.com`, bypassing operating-system-level mailto client mismatch errors.

---

## Render Pipeline Optimization

### GPU-Accelerated Compositing
To prevent page layout reflows and font-aliasing jaggedness during animation transitions:
* Text elements use CSS compositing layer bypasses (`transform: translateZ(0)`), transferring drawing workloads from CPU rasterization directly to GPU compositing buffers.
* Font smoothing rules are enforced globally (`-webkit-font-smoothing: antialiased`, `-moz-osx-font-smoothing: grayscale`) alongside optimal rendering modes (`text-rendering: optimizeLegibility`).

### Dynamic Backdrops
* Glowing ambient nodes use GPU-driven CSS filter operations (`blur`) to render blurs without triggering constant paint calls.
* An interactive SVG noise texture overlay runs on a static z-index plane to simulate a granular film effect across page sections.

### Easing & Transition Handlers
* Phase transitions in the contact steps use `AnimatePresence` with custom cubic Bezier curves (`ease: [0.16, 1, 0.3, 1]`) to animate opacity and Y-axis offsets, producing fluid, physics-based slide transitions between form stages.

---

## Directory Layout

```
├── public/                  # Static assets and site metadata
├── src/
│   ├── assets/              # Vector illustrations and media resources
│   ├── App.css              # Local style definitions and custom rules
│   ├── App.jsx              # Core React entry point housing structural layout and interaction states
│   ├── index.css            # Global directives, CSS variables, and font imports
│   └── main.jsx             # DOM bootstrap and root injection layer
├── package.json             # NPM package definitions and scripts
└── vite.config.js           # Vite development and bundle configuration
```

---

## Local Deployment Setup

### System Prerequisites
Ensure Node.js (version 18 or higher) and npm are active in your path environment.

### Project Installation
Retrieve the source repository and initialize required modules:
```bash
git clone https://github.com/medhinibr/portfolio.git
cd portfolio
npm install
```

### Script Execution

#### Launch Local Development Engine
Runs the Vite development server on port 5173 with automatic reloading:
```bash
npm run dev
```

#### Compile Optimization Bundle
Runs the bundler to output optimized, production-ready static assets to the `dist/` directory:
```bash
npm run build
```

#### Preview Production Output
Launches a local static server reading from the compiled `dist/` folder to check bundle integrity:
```bash
npm run preview
```

---

## Production Deployment Workflow
The codebase compiles into standard browser assets (HTML5, ES Modules JS, compiled CSS). It can be deployed to high-performance content delivery networks (CDNs) or serverless static runners like Firebase Hosting, Vercel, or Netlify. Traffic routing and HTTP handshakes are configured to run securely via HTTPS with edge CDN caching configurations.
