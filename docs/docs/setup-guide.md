# Setup & Developer Guide: TrialGuard AI

> **Document ID:** TG-DOC-004  
> **Classification:** Engineering & Deployment Operations Guide  
> **Target Audience:** Full-Stack Developers, DevOps Engineers, QA Engineers, Solution Architects  
> **Version Compatibility:** Node.js >= 18.x / 20.x, Vite >= 6.x, React 19.x, Tailwind CSS v4

---

## Prerequisites & System Requirements

Before running or deploying TrialGuard AI, ensure your development environment satisfies the following minimum requirements:

### Software Requirements
- **Node.js:** `v18.20.0` or `v20.x+` (LTS recommended). Check with `node -v`.
- **Package Manager:** `npm v9.x+` or `v10.x+` (bundled with Node.js).
- **Web Browser:** Modern browser with ES2022 and WebGL support (Google Chrome 110+, Microsoft Edge 110+, Mozilla Firefox 115+, or Apple Safari 16+).
- **Operating System:** Windows 10/11, macOS (Apple Silicon or Intel), or modern Linux distributions (Ubuntu 22.04+, Debian 12, Fedora).

---

## Quickstart Guide

Get TrialGuard AI running locally in under 2 minutes:

```bash
# 1. Navigate to the project directory
cd c:\Users\Het\Desktop\IBM

# 2. Install all dependencies
npm install

# 3. Launch the development server
npm run dev
```

Once launched, open your browser and navigate to:
```
http://localhost:5173/
```

---

## Detailed Installation & Configuration

### Step 1: Install Dependencies
Run npm install in the project root. This installs all required production and development dependencies:
- **Core:** `react@19.2.8`, `react-dom@19.2.8`, `react-router-dom@7.18.3`
- **Styling:** `tailwindcss@4.3.3`, `@tailwindcss/vite@4.3.3`, `tailwind-merge`, `clsx`
- **Animation & Visuals:** `framer-motion@13.3.0`, `lucide-react@1.46.0`
- **Tooling:** `vite@8.3.0`, `@vitejs/plugin-react@6.1.1`, `oxlint@1.81.0`

### Step 2: Environment Configuration (Optional)
For standard local development, the application operates out-of-the-box using the bundled centralized clinical data store (`src/data/mockData.js`). If connecting to external backend microservices or cloud telemetry APIs, create a `.env` file in the root directory:

```env
# Server Port (Default: 5173)
VITE_PORT=5173

# External API Gateway URL (Optional)
VITE_API_GATEWAY_URL=http://localhost:8000/api/v1

# Environment Mode
VITE_APP_ENV=development
```

---

## Available NPM Scripts

The project includes pre-configured scripts in `package.json`:

| Command | Action | Description |
| :--- | :--- | :--- |
| `npm run dev` | Starts Vite Dev Server | Runs local hot-module-reloaded server on `http://localhost:5173` |
| `npm run build` | Compiles Production Bundle | Optimizes code and assets into the `./dist` folder |
| `npm run preview` | Local Production Preview | Serves the production `./dist` build locally for verification |
| `npm run lint` | Runs Oxlint Code Analysis | Ultra-fast linter validating syntax and React safety rules |

---

## Project Structure & Architecture Map

```text
c:\Users\Het\Desktop\IBM\
├── docs/                         # Comprehensive Documentation Suite
│   ├── architecture.md           # Technical architecture & pipeline specs
│   ├── problem-statement.md      # Clinical trial compliance crisis & ROI
│   ├── solution-overview.md      # Platform vision, modules & capabilities
│   └── setup-guide.md            # Setup, deployment & developer guide
├── public/                       # Static public assets
├── src/
│   ├── app/                      # Application Shell & Layout
│   │   └── AppShell.jsx          # Protected layout, sidebar navigation, user badge
│   ├── components/               # High-Fidelity Landing Page Components
│   │   ├── Navbar.jsx            # Top navigation bar with smooth anchor scrolling
│   │   ├── HeroSection.jsx       # Interactive hero, live alert feed, primary CTAs
│   │   ├── TrustedBySection.jsx  # Biotech & pharma institutional credibility
│   │   ├── ProblemSection.jsx    # $2.6B failure mode cards & industry stats
│   │   ├── SolutionSection.jsx   # 6-step interactive compliance pipeline
│   │   ├── FeaturesSection.jsx   # Core capability matrix & modal triggers
│   │   ├── ArchitectureSection.jsx # Sub-700ms interactive pipeline diagram
│   │   ├── TechnologiesSection.jsx # Tech stack cards (Frontend, AI, Security)
│   │   ├── DashboardPreview.jsx  # Interactive live preview of app interface
│   │   ├── ImpactSection.jsx     # Quantifiable ROI & before/after comparisons
│   │   ├── PricingSection.jsx    # Enterprise trial tiers & licensing
│   │   ├── TeamSection.jsx       # Leadership & clinical advisory bios
│   │   ├── ContactSection.jsx    # Enterprise demo inquiry form
│   │   ├── Footer.jsx            # Regulatory disclosures, links, copyright
│   │   ├── DemoModal.jsx         # Interactive enterprise demo request modal
│   │   ├── BackgroundCanvas.jsx  # Ambient floating biomedical particles
│   │   └── ScrollProgressBar.jsx # Top scroll reading indicator
│   ├── context/                  # React State Contexts
│   │   ├── AuthContext.jsx       # Authentication state & role-based access
│   │   └── ThemeContext.jsx      # Theme management & dark/light mode state
│   ├── data/
│   │   └── mockData.js           # Central clinical data store (Sites, Patients, DEVs, CAPAs)
│   ├── pages/                    # Enterprise Application Pages
│   │   ├── LoginPage.jsx         # Dual-role authentication & quick demo switch
│   │   ├── DashboardPage.jsx     # Executive compliance command center
│   │   ├── PatientMonitoringPage.jsx # Real-time patient telemetry & vitals
│   │   ├── DeviationDetectionPage.jsx # AI-powered protocol deviation triage
│   │   ├── RiskHeatmapPage.jsx   # Global site risk index (RBQM) heatmap
│   │   ├── CAPAReportPage.jsx    # 21 CFR Part 11 CAPA drafting & e-signatures
│   │   ├── AnalyticsDashboardPage.jsx # Compliance trends & statistical reports
│   │   ├── SettingsPage.jsx      # Regulatory parameters & user profiles
│   │   └── NotFoundPage.jsx      # Fallback 404 handler
│   ├── App.css                   # Global animations & component styles
│   ├── App.jsx                   # Primary router & page composition
│   ├── index.css                 # Design tokens, medical grid, typography
│   └── main.jsx                  # Application entry point
├── package.json                  # Dependencies and scripts
├── vite.config.js                # Vite build and Tailwind v4 configuration
└── README.md                     # Project overview and index
```

---

## Guided Application Walkthrough

### 1. Landing Page (`/`)
- Experience the modern clinical aesthetic featuring a custom emerald and forest green palette (`#1B5E20`, `#2E7D32`, `#43A047`).
- Explore interactive components:
  - **Live Alert Stream Simulator** in the Hero section.
  - **6-Step Compliance Pipeline** in the Solution section with dynamic telemetry output.
  - **Interactive Architecture Map** with node-by-node latency inspection.
  - **Request Enterprise Demo** modal with validated form submission.

### 2. Authentication & Demo Access (`/login`)
Click **"Sign In"** or **"Launch Platform"** from the navbar to open the login page.
- **Quick Demo Login:** Click the one-click demo credentials provided on the login card to instantly sign in as either:
  - **Clinical Administrator / Lead CRA:** Full administrative privileges, CAPA authorization, and e-signature rights.
  - **Clinical Researcher:** Operational access to patient surveillance and deviation reviews.

### 3. Compliance Command Center (`/app/dashboard`)
- Review trial KPIs: **97.4% Overall Compliance**, **4 Open Deviations**, **2 Critical**, and **98.1% Inspection Readiness**.
- View live activity feeds detailing real-time ingestion events and completed CAPA filings.

### 4. Patient Telemetry Hub (`/app/patients`)
- View individual subject vitals (Heart Rate, Blood Pressure, SpO2, Temperature).
- Filter subjects by study protocol (`ONC-402`, `CARD-108`, `RD-990`, `NEURO-221`) or adherence status (`On Time`, `At Risk`, `Overdue`).

### 5. AI Deviation Detection Center (`/app/deviations`)
- Triage protocol deviations with ICH GCP E6(R3) severity tags (Minor, Major, Critical).
- Click any deviation to inspect the automated root cause, corrective action, and linked FDA statutory citations (e.g., *FDA 21 CFR 312.60*).
- Route deviations directly to the CAPA Studio with a single click.

### 6. Site Risk Heatmap (`/app/risk`)
- Assess global investigative sites categorized by risk tier (Compliant, Warning, Critical).
- Analyze Principal Investigator oversight, enrollment numbers, and regional risk distribution across North America, Europe, and Asia-Pacific.

### 7. CAPA Reports Studio (`/app/capa`)
- Review generated CAPA documents with full root cause analysis.
- **Test the 21 CFR Part 11 Electronic Signature:** Click on any draft CAPA report to open the signature authorization modal. Entering approval credentials applies an immutable **SHA-256 cryptographic audit hash** (e.g., `0x88f2c4...`) to verify document integrity.

---

## Production Build & Deployment

### Build for Production
To generate an optimized production bundle:

```bash
npm run build
```

This compiles static assets into the `./dist` directory. The build includes minified JavaScript, tree-shaken CSS, and optimized SVG assets.

### Preview Production Build Locally
Verify the production build before releasing:

```bash
npm run preview
```

### Docker Containerization (Optional)
To deploy TrialGuard AI within a production container:

```dockerfile
# Dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

```nginx
# nginx.conf
server {
    listen 80;
    server_name localhost;
    location / {
        root /usr/share/nginx/html;
        index index.html index.htm;
        try_files $uri $uri/ /index.html;
    }
}
```

---

## Troubleshooting & FAQ

### 1. Port 5173 is already in use
If another process is utilizing port 5173, Vite will automatically select the next available port (e.g., 5174). To force a specific port, specify it via CLI:
```bash
npx vite --port 3000
```

### 2. Node.js version incompatibility
If you encounter build warnings regarding unsupported Node syntax, ensure your active Node.js version is >= 18.20.0:
```bash
node -v
# Recommended: Install nvm (Node Version Manager) to switch versions
nvm use 20
```

### 3. Fast Linting Verification
To verify code hygiene across all JSX and JavaScript files:
```bash
npm run lint
```
Oxlint runs in milliseconds and reports any syntax or potential runtime issues.
