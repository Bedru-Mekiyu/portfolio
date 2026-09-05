# Bedru Mekiyu - Professional Developer Portfolio

A responsive, high-performance personal portfolio website showcasing software engineering projects, technical capabilities, design work, and professional background.

## 🌟 Overview

This repository contains the personal developer portfolio website of **Bedru Mekiyu**, a Software Engineering student at Addis Ababa University. Built using modern front-end technologies including HTML5, Tailwind CSS, Bootstrap 5, and JavaScript, the site offers an interactive platform displaying full-stack projects, creative design case studies, client services, and contact channels.

## 🚀 Key Features

- **Responsive & Modern UI**: Built with a sleek neon cyber aesthetic, smooth responsive layouts, and full cross-device compatibility.
- **Dynamic Projects Showcase**: Categorized portfolio pages highlighting web applications, AI chatbots, e-commerce solutions, and Flutter applications.
- **Service Case Studies**: Detailed breakdowns of design systems, UI/UX prototyping, full-stack software development, and technical consulting.
- **Automated Tailwind CSS Build Pipeline**: Streamlined utility class processing with minified production bundles.
- **Asset & Link Integrity Verification**: Built-in test script verifying local asset paths, stylesheets, and internal page links.

## 🛠️ Tech Stack

- **HTML5 & CSS3**
- **Tailwind CSS (v3.4)**
- **Bootstrap (v5) & Bootstrap Icons**
- **JavaScript (ES6+)**
- **Vendor Libraries**: Swiper.js, AOS (Animate On Scroll), GLightbox, Isotope, Typed.js

## 📁 Repository Structure

```
├── .github/
│   └── workflows/
│       └── ci.yml               # Automated CI Build & Link Check Workflow
├── assets/
│   ├── css/
│   │   ├── main.css             # Main stylesheet & custom overrides
│   │   ├── tailwind.css         # Generated minified Tailwind CSS output
│   │   └── tailwind.input.css   # Tailwind CSS entry file
│   ├── img/                     # Profile images, icons, and project portfolio visual assets
│   ├── js/                      # Frontend JavaScript files
│   └── vendor/                  # Third-party libraries (Bootstrap, Swiper, AOS, etc.)
├── scripts/
│   └── check_links.py           # Automated link and asset path verification test script
├── style/                       # Page-specific CSS styles and JS modules
├── Bedru_Mekiyu_CV (1).docx     # Resume/CV document
├── index.html                   # Main Landing Page / About / Overview
├── portfolio.html               # Portfolio Gallery Page
├── portfolio-details.html       # Individual Portfolio Case Study Template
├── services.html                # Services Overview Page
├── service-details.html         # Detailed Service Case Study Template
├── contact.html                 # Contact Form Page
├── privacy.html                 # Privacy Policy
├── terms.html                   # Terms & Conditions
├── package.json                 # Node dependencies and build scripts
└── tailwind.config.js           # Tailwind CSS configuration
```

## 💻 Getting Started

### Prerequisites

- **Node.js**: Version 18.x or 20.x
- **npm**: Node Package Manager
- **Python 3**: Needed for running automated link validation scripts

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Bedru-Mekiyu/portfolio.git
   cd portfolio
   ```

2. **Install Node dependencies**:
   ```bash
   npm ci
   ```

## 🔨 Build & Local Development

- **Build Tailwind CSS**:
  ```bash
  npm run build:tailwind
  ```

- **Watch Tailwind CSS changes (Development)**:
  ```bash
  npm run watch:tailwind
  ```

- **Serve locally**:
  Open `index.html` in your web browser or use a live server extension/tool (e.g., `npx serve .`).

## 🧪 Testing & Validation

Run the automated build and link check suite:

```bash
npm test
```

This command executes:
1. Minified Tailwind CSS compilation (`npm run build:tailwind`)
2. Local asset and link integrity validation script (`python3 scripts/check_links.py`)

## ⚙️ CI/CD Pipeline

Automated checks are configured via **GitHub Actions** (`.github/workflows/ci.yml`). On every push or pull request to key branches, the pipeline:
1. Sets up Node.js (v20)
2. Installs clean project dependencies (`npm ci`)
3. Builds Tailwind CSS assets
4. Runs internal asset and broken-link automated tests

## 📄 License

This repository is licensed under the [ISC License](package.json).
