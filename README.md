# High-Performance Cloud & DevOps Portfolio

[![CI/CD Pipeline](https://github.com/medhinibr/portfolio/actions/workflows/main.yml/badge.svg)](https://github.com/medhinibr/portfolio/actions/workflows/main.yml)

An interactive, high-frequency rendering portfolio showcasing cloud architecture design, system deployment lifecycles, and automated engineering workflows.

### GitOps Pipeline Flow
```text
Dev (Local Commit & Push) ────► GitHub Repository
                                       │
                                       ▼ (Trigger Webhook)
                               GitHub Actions runner
                                       │
                                       ├─► Run NPM audits, setups, & production build
                                       ├─► Validate multi-stage Dockerfile build context
                                       └─► Auto-Deploy static bundles ──► Vercel CDN Edge
```

---

## Technical Features & Developer Controls

| Control Feature | Mechanisms & Technical Behavior |
| :--- | :--- |
| **Env Switcher (PROD/DEV)** | Floating toggle switching environments client-side. Activates layout overlays, outlines, and relative component boundaries (e.g. `<SkillsSection />`). |
| **System Debug Monitor** | Live viewport console capturing, formatting, and rendering event logs (scroll metrics, hovers, connection triggers) in real-time. |
| **Chaos Monkey Simulator** | Simulates cloud resilience by terminating a random section (VPC Map or Microservice Catalog), displaying an `ERROR_POD_CRASHED` (Exit 137) state, and triggering a ReplicaSet self-healing loop (pulling, liveness checks, automatic restoration). |
| **Raw Payloads** | Adds direct `[Show Payload]` hooks rendering underlying database JSON objects directly on page layouts. |

---

## Docker Containerization & Security Controls

The application is containerized with a production-ready multi-stage `Dockerfile` focused on minimizing attack surface and footprint:
* **Multi-Stage Build Separation**: Uses `node:22-alpine` solely as a compilation agent to build static assets, discarding build dependencies in the final runner.
* **Minimal Production Image**: Deploys compiled assets into a clean `nginx:alpine` runner, keeping the final container image size exceptionally small (approx 22MB).
* **Upstream OS Vulnerability Patching**: Mitigates base-image security alerts by running `apk update && apk upgrade --no-cache` inside the build stages, resolving OS-level CVEs before deployment.
* **Resilient Dependency Installation**: Executes dynamic package resolution to prevent lockfile synchronization drift across development environments.

---

## Technical Stack

| Domain | Technology | Purpose & Implementation Details |
| :--- | :--- | :--- |
| **Core Client** | React 19 / Vite 8 / Node.js | Declarative DOM orchestration, tree-shaking production compile, HMR engine. |
| **Interface & Styling** | Tailwind CSS v4 / Lenis | Utility layout system, GPU-accelerated compositing layer, hardware-smooth inertial scroll. |
| **Motion Physics** | Framer Motion | Inertial spring keyframes, character text-morphing transitions. |
| **Telemetry & Visuals** | GitHub API / Bezier reduction / SVG | Dynamic contribution queries, automated monthly velocity plot charts, animated VPC packet flows. |
| **Communication** | AJAX / FormSubmit API | Secure asynchronous POST contact portal, Gmail Web Intent integration. |

---

## Commands & Local Setup

```bash
# Clone & install dependencies
git clone https://github.com/medhinibr/portfolio.git && cd portfolio && npm install

# Scripts
npm run dev      # Run local HMR dev server (Port 5173/5174)
npm run build    # Compile optimized production build to dist/
npm run preview  # Preview compiled production build locally
```

---

## Directory Layout
* `public/` - Static assets, icons, and page metadata.
* `src/assets/` - Vector graphics and styling files.
* `src/App.jsx` - Main React controller, layouts, and system states.
* `src/EnvironmentSwitcher.jsx` - DevOps mode overlays, logs, and Chaos Monkey engine.
