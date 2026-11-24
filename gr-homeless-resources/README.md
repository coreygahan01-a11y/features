# GR Homeless & Housing Resources

An accessible, mobile-friendly, and printable static website connecting neighbors in Grand Rapids and Kent County, Michigan with emergency shelter, food, healthcare, and housing support.

## Files

- `index.html` — Semantic HTML5 resource directory with crisis banner, search, and category filters.
- `styles.css` — High-contrast, responsive, and print-friendly styles.
- `script.js` — Client-side live search and category filtering with screen-reader status updates.

## Publish to a New GitHub Repository & GitHub Pages

1. Create a new **public** repository on GitHub named `gr-homeless-resources` under your account (`coreygahan01-a11y`).
2. Copy the contents of this `gr-homeless-resources/` folder into that repository and push to `main`:

```bash
cd gr-homeless-resources
git init -b main
git add .
git commit -m "Initial GR Homeless Resources website"
git remote add origin https://github.com/coreygahan01-a11y/gr-homeless-resources.git
git push -u origin main
```

3. Enable **GitHub Pages** in the repository:
   - Go to **Settings > Pages**.
   - Under **Build and deployment**, select **Deploy from a branch**.
   - Choose `main` and `/ (root)`, then save.
   - Your site will be live at `https://coreygahan01-a11y.github.io/gr-homeless-resources/`.

## Connecting a Custom Web Domain

Once you register a domain (for example `grhomelessresources.org` or `grhousinghelp.org`):

1. Add a `CNAME` file in the root of your repository containing only your domain name (e.g., `grhomelessresources.org`).
2. In your domain registrar's DNS settings, point your apex domain to GitHub Pages (`A` records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`) and/or `www` (`CNAME` to `coreygahan01-a11y.github.io`).
3. Enter your custom domain under **Settings > Pages > Custom domain** and enable **Enforce HTTPS**.
