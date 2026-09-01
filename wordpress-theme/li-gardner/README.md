# Li Gardner WordPress Theme & Modular Block System

A production-ready, fully modular WordPress theme for **Li Gardner | Product Strategy & User-Centred Design**.

Every single section on the website is a **movable Gutenberg / ACF block** that you can drag, drop, reorder, duplicate, remove, and customize directly inside the WordPress Block Editor.

---

## 🚀 Quick Setup with Local (by Flywheel) & VS Code

1. In **Local**, start your local site and click **Go to site folder**.
2. Open your local site in **Visual Studio Code** and navigate to:
   ```
   app/public/wp-content/themes/
   ```
3. Copy the **`li-gardner`** folder from `/wp-themes/li-gardner` into `wp-content/themes/`.
4. In your WordPress Admin dashboard (`/wp-admin`):
   - Go to **Appearance > Themes** and click **Activate** on **Li Gardner Portfolio**.
   - (Optional but recommended): Install the free **Advanced Custom Fields** plugin to enable dedicated sidebar form fields for each block.

---

## 🧱 Movable Block Library

When creating or editing a page in WordPress (`Pages > Add New` or `Pages > Edit`), click the **`+` (Add Block)** button. Under the **"Li Gardner Portfolio"** category, you will find all 10 custom blocks:

| Block Name | Slug | Description |
| :--- | :--- | :--- |
| **Hero & System Network** | `li-gardner/hero` | Headline, intro, CTA button, and interactive 3D SVG System Leverage network |
| **Client Organisations** | `li-gardner/clients` | Brand typography grid (Gov UK, NHS, HSBC, BlackRock, etc.) |
| **Leadership Dilemma** | `li-gardner/tension` | Editorial tension section addressing low adoption & technology return |
| **High-Leverage Intervention** | `li-gardner/approach` | 4-step strategic methodology with stationary step numbers |
| **Services Grid** | `li-gardner/services` | 4 core service cards with hover states and outcomes |
| **Why Me (Lean Model)** | `li-gardner/model` | 4 pillars of the embedded lean principal model |
| **Client Testimonials** | `li-gardner/testimonials` | Endorsements and quotes from Zühlke, Co-op, etc. |
| **About Li & Credentials** | `li-gardner/about` | Background biography and 3 credential badge metrics |
| **Where I'm Most Useful** | `li-gardner/fit` | Problem signal checklist & fit criteria |
| **Contact & Conversation** | `li-gardner/contact` | Native AJAX contact form with instant validation & feedback |

---

## 🔄 How to Move, Reorder & Edit Sections

1. **Reorder Blocks**: Click any section in the WordPress block editor, then click the **Up (↑)** or **Down (↓)** arrow, or click and drag the drag handle to move the section anywhere on the page.
2. **Edit Text**: Click on any block to edit its headlines, paragraphs, and labels in the right-hand **Block Settings** sidebar.
3. **Remove/Duplicate**: Click the three dots `⋮` on any block toolbar to duplicate or delete sections.

---

## 📂 File Architecture

```
wp-themes/li-gardner/
├── style.css                      # Master stylesheet & theme metadata
├── functions.php                  # Block registration, ACF sync, AJAX contact handlers
├── header.php                     # Sticky frosted header & language switcher
├── footer.php                     # Footer layout & back-to-top button
├── front-page.php                 # Renders custom Gutenberg block layout
├── page.php                       # Standard page template
├── single.php                     # Single post template
├── index.php                      # Fallback archive template
├── acf-json/                      # Auto-sync field definitions
│   └── group_li_gardner_blocks.json
├── blocks/                        # Movable Block Modules
│   ├── hero/                      # Hero & SVG Network block
│   ├── clients/                   # Client logos block
│   ├── tension/                   # Leadership dilemma block
│   ├── approach/                  # High-leverage intervention block
│   ├── services/                  # Services grid block
│   ├── model/                     # Why me / model block
│   ├── testimonials/              # Client testimonials block
│   ├── about/                     # About Li & credentials block
│   ├── fit/                       # Where I'm most useful block
│   └── contact/                   # AJAX contact form block
└── assets/
    ├── css/style.css
    └── js/script.js
```
