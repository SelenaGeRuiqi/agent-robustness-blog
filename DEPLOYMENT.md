# Deployment Guide for Jekyll Blog

This guide will help you deploy your Agent Robustness blog to GitHub Pages.

## Prerequisites

- Git installed on your computer
- A GitHub account
- Ruby and Jekyll (for local development)

## Quick Start: Deploy to GitHub Pages

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and log in
2. Click the "+" icon in the top right → "New repository"
3. Name your repository (e.g., `agent-robustness-blog`)
4. Choose "Public" visibility
5. **Do NOT** initialize with README, .gitignore, or license
6. Click "Create repository"

### Step 2: Upload Your Files

#### Option A: Using GitHub Web Interface (Easiest)

1. In your new repository, click "uploading an existing file"
2. Drag and drop all the files from the `agent-robustness-blog` folder
3. Commit the changes

#### Option B: Using Git Command Line

```bash
cd /home/claude/agent-robustness-blog

# Initialize git repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Agent Robustness blog"

# Add remote (replace YOUR-USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/agent-robustness-blog.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click "Save"

### Step 4: Wait and Access

- GitHub will build your site (takes 1-2 minutes)
- Your site will be available at: `https://YOUR-USERNAME.github.io/agent-robustness-blog/`
- You'll see a success message with the URL in the Pages settings

## Local Development (Optional)

If you want to preview the site locally before deploying:

### Install Jekyll

```bash
# Install Ruby (if not already installed)
# On Ubuntu/Debian:
sudo apt-get install ruby-full build-essential zlib1g-dev

# On macOS:
brew install ruby

# Install Bundler
gem install bundler

# Navigate to your blog directory
cd /home/claude/agent-robustness-blog

# Install dependencies
bundle install
```

### Run Local Server

```bash
bundle exec jekyll serve
```

Then open `http://localhost:4000` in your browser.

### Make Changes

1. Edit any file
2. Save
3. Jekyll will automatically rebuild
4. Refresh your browser to see changes

## Adding Images

1. Create `assets/images/` directory if it doesn't exist
2. Add your images to this folder
3. Reference them in your content:
   ```html
   <img src="{{ '/assets/images/your-image.png' | relative_url }}" alt="Description" />
   ```

### Required Images to Add

Replace these placeholder references with actual images:

- `/assets/images/attack-demo.png` - Hero section demo image
- `/assets/images/agent-graphs.png` - Agent architecture diagrams
- `/assets/images/attack-comparison.png` - Attack method comparison
- `/assets/images/results-summary.png` - Results visualization

## Customization

### Update Site Information

Edit `_config.yml`:

```yaml
title: "Your Title"
description: "Your description"
github_repo: "https://github.com/your-repo"
paper_url: "https://arxiv.org/your-paper"
```

### Update Team Information

In `_config.yml`, update the team section:

```yaml
team:
  - name: "Your Name 1"
  - name: "Your Name 2"
```

### Modify Content

Edit `index.html` to update:
- Text content
- Add/remove sections
- Change examples
- Update results

### Change Colors/Styles

Edit `assets/css/main.css` and modify the CSS variables:

```css
:root {
  --color-primary: #1a365d;  /* Main color */
  --color-accent: #d97706;   /* Accent color */
  /* ... more colors ... */
}
```

## Troubleshooting

### Site Not Building

1. Check GitHub Actions tab for build errors
2. Ensure `_config.yml` is valid YAML
3. Check that all referenced files exist

### Images Not Showing

1. Verify image paths are correct
2. Ensure images are in `assets/images/`
3. Use `{{ '/assets/images/name.png' | relative_url }}` format

### Styling Issues

1. Clear browser cache
2. Check CSS file path in `_layouts/default.html`
3. Verify no syntax errors in CSS

## Adding Your Demo Video

Once you have your demo video:

1. Upload to YouTube or another video hosting service
2. In `index.html`, replace the video placeholder:

```html
<div class="demo-video">
  <iframe 
    width="100%" 
    height="500" 
    src="https://www.youtube.com/embed/YOUR-VIDEO-ID" 
    frameborder="0" 
    allowfullscreen>
  </iframe>
</div>
```

Or use HTML5 video:

```html
<div class="demo-video">
  <video controls width="100%">
    <source src="{{ '/assets/videos/demo.mp4' | relative_url }}" type="video/mp4">
  </video>
</div>
```

## Updating Content

To update your blog after initial deployment:

1. Make changes to your files locally
2. Commit changes:
   ```bash
   git add .
   git commit -m "Update: your description"
   git push
   ```
3. GitHub Pages will automatically rebuild (1-2 minutes)

## Custom Domain (Optional)

To use a custom domain (e.g., `agent-robustness.com`):

1. Buy a domain from a registrar
2. In your repo settings → Pages → Custom domain
3. Enter your domain
4. Update DNS settings with your registrar

## Support

- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Markdown Guide](https://www.markdownguide.org/)

## Next Steps

1. ✅ Deploy to GitHub Pages
2. 📸 Add your images and screenshots
3. 🎥 Upload and embed your demo video
4. 📝 Update content with your specific results
5. 🎨 Customize colors and styling if desired
6. 📢 Share your blog URL!

---

Good luck with your project! 🚀
