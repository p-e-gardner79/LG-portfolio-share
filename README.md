# Li Gardner Portfolio — Ready for GitHub & GitHub Pages

This directory contains the production-ready website files and the WordPress theme for Li Gardner's portfolio.

## 🚀 Instant Deployment with GitHub Pages

You can publish this portfolio live to the web for free in 3 steps:

1. **Upload / Push to GitHub**:
   - Push the contents of this folder to a GitHub repository (e.g. `li-gardner-portfolio`).
2. **Enable GitHub Pages**:
   - In your GitHub repo, go to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
   - Select the `main` branch and `/ (root)` folder, then click **Save**.
3. **Live Link**:
   - GitHub will generate your live URL (e.g. `https://<username>.github.io/li-gardner-portfolio/`).

---

## 📁 Directory Structure

```text
├── index.html            # Standalone responsive landing page (with English & Chinese bilingual toggle)
├── style.css             # Full styling, typography, responsive grids & layout
├── script.js             # Interactive orbit diagram, bilingual switcher, smooth scroll, and drawer
├── public/               # Favicon and icons
├── .nojekyll             # Ensures GitHub Pages serves all assets correctly
└── wordpress-theme/      # Complete custom WordPress Gutenberg block theme
    └── li-gardner/       # Drop-in WordPress theme directory
```

---

## 💻 Running Locally

Simply open `index.html` in any web browser, or serve using any static web server:

```bash
# Using Python
python3 -m http.server 8000

# Using Node / npx
npx serve .
```

---

## 📦 Using as a WordPress Theme

If you want to use this on a WordPress site:
1. Compress the `wordpress-theme/li-gardner` directory into a `.zip` archive (`li-gardner.zip`).
2. In WordPress admin, navigate to **Appearance** → **Themes** → **Add New** → **Upload Theme**.
3. Select `li-gardner.zip`, install, and activate.
