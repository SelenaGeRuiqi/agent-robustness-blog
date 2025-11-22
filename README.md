# Dissecting Adversarial Robustness of Multimodal LM Agents

A research blog exploring adversarial attacks on multimodal language-vision agents in realistic e-commerce environments.

## 📚 About

This blog presents our reproduction and analysis of the ICLR 2025 paper "Dissecting Adversarial Robustness of Multimodal LM Agents" as part of our DSC 261 graduate research project at UC San Diego.

**Original Paper**: [arXiv:2406.12814](https://arxiv.org/abs/2406.12814)  
**Original Code**: [GitHub Repository](https://github.com/ChenWu98/agent-attack)

## 🎯 Project Overview

We investigate how state-of-the-art multimodal agents (GPT-4o, Claude-3-Opus, Gemini-1.5-Pro) can be compromised through adversarial attacks in realistic web environments, with focus on:

- **Component-level vulnerabilities**: How each agent component contributes to overall system weakness
- **Attack methods**: Text injection, captioner attacks, and CLIP-based attacks
- **Inference-time risks**: How methods like reflexion and tree search affect robustness
- **Practical defenses**: Evaluating baseline defense mechanisms

## 🚀 Key Findings

- ⚠️ **67% attack success rate** with imperceptible image perturbations
- 🎯 **Less than 5% of pixels** needed to hijack agent behavior
- 🔓 **All components vulnerable**: Captioners, policy models, evaluators, value functions
- ⚡ **False security**: Inference-time compute can harm worst-case robustness

## 🏗️ Project Structure

```
agent-robustness-blog/
├── _config.yml           # Jekyll configuration
├── _layouts/             # HTML layouts
│   └── default.html      # Main layout template
├── assets/
│   ├── css/
│   │   └── main.css      # Styles (academic + modern theme)
│   ├── js/
│   │   └── main.js       # Interactive features
│   └── images/           # Images and figures (add your own)
├── index.html            # Main blog content
├── Gemfile               # Ruby dependencies
├── DEPLOYMENT.md         # Deployment instructions
└── README.md             # This file
```

## 📦 Quick Start

### Deploy to GitHub Pages

1. **Fork or clone this repository**
2. **Enable GitHub Pages**:
   - Go to Settings → Pages
   - Select branch: `main`, folder: `/ (root)`
   - Save
3. **Access your site** at: `https://SelenaGeRuiqi.github.io/agent-robustness-blog/`

For detailed instructions, see [DEPLOYMENT.md](DEPLOYMENT.md).

### Local Development

```bash
# Install dependencies
bundle install

# Run local server
bundle exec jekyll serve

# Open http://localhost:4000
```

## 📸 Adding Your Content

### Images

1. Add images to `assets/images/`
2. Update references in `index.html`

Required images:
- `attack-demo.png` - Hero section
- `agent-graphs.png` - Architecture diagrams
- `attack-comparison.png` - Attack methods
- `results-summary.png` - Results visualization

### Demo Video

Replace the video placeholder in `index.html`:

```html
<div class="demo-video">
  <iframe 
    src="https://www.youtube.com/embed/YOUR-VIDEO-ID" 
    width="100%" 
    height="500" 
    frameborder="0" 
    allowfullscreen>
  </iframe>
</div>
```

### Update Team & Progress

Edit `index.html` in the "Our Work" section to reflect your current progress and results.

## 🎨 Customization

### Change Colors

Edit `assets/css/main.css` CSS variables:

```css
:root {
  --color-primary: #1a365d;  /* Main color */
  --color-accent: #d97706;   /* Accent color */
}
```

### Update Site Info

Edit `_config.yml`:

```yaml
title: "Your Title"
description: "Your description"
github_repo: "your-repo-url"
paper_url: "your-paper-url"
```

## 🛠️ Features

- ✨ Modern, academic design with bold typography
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎯 Smooth scrolling navigation with active section highlighting
- 📊 Reading progress indicator
- 🎨 Syntax-highlighted code blocks with copy button
- 🌈 Gradient accents and subtle animations
- 🔗 SEO-friendly structure

## 👥 Team

**Original Research**:
- Chen Henry Wu
- Rishi Shah
- Jing Yu Koh
- Ruslan Salakhutdinov
- Daniel Fried
- Aditi Raghunathan

**Reproduction Team** (DSC 261 Project):
- Junjie Sun
- Liyuan Jin
- Letong Liang
- Riqian Hu
- Selena Ge
- Victoria Jin

## 📄 License

This blog template is MIT licensed. The research content and findings should cite the original paper.

## 🔗 Links

- 📝 [Original Paper](https://arxiv.org/abs/2406.12814)
- 💻 [Original Code](https://github.com/ChenWu98/agent-attack)
- 🌐 [VisualWebArena](https://github.com/web-arena-x/visualwebarena)

## 📧 Contact

For questions about this blog or the reproduction project, please open an issue or contact the team.

---

Built with ❤️ using Jekyll + GitHub Pages
