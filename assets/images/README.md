# Images Directory

This directory should contain all images and figures for your blog.

## Required Images

Please add the following images to make your blog complete:

### 1. Hero Section
- **File**: `attack-demo.png`
- **Description**: Main attack demonstration image/screenshot
- **Recommended size**: 1800x1000px
- **Used in**: Hero section (top of page)
- **Note**: This will be replaced with a video in the future

### 2. Agent Architectures
- **File**: `agent-graphs.png`
- **Description**: Diagrams showing different agent architectures (Base, Captioner-augmented, Reflexion, Tree search)
- **Recommended size**: 1200x800px
- **Used in**: ARE Framework section
- **Source**: Figure 2 from the original paper

### 3. Attack Comparison
- **File**: `attack-comparison.png`
- **Description**: Visualization comparing the three attack methods
- **Recommended size**: 1200x600px
- **Used in**: Attack Methods section

### 4. Results Summary
- **File**: `results-summary.png`
- **Description**: Chart or graph summarizing attack success rates
- **Recommended size**: 1200x800px
- **Used in**: Key Findings section

## Extracting Images from the Papers

You can extract images from the provided PDF files:

1. **From main paper** (`DISSECTING_ADVERSARIAL_ROBUSTNESS_OF_MULTIMODAL_LM_AGENTS.pdf`):
   - Figure 1 (page 2): Attack overview → use for `attack-demo.png`
   - Figure 2 (page 4): Agent graphs → use for `agent-graphs.png`
   - Figure 4 (page 7): Results → use for `results-summary.png`

2. **From midterm report** (`DSC261_Midterm_report.pdf`):
   - Can extract preliminary results
   - Task distribution tables

## How to Extract Images

### Option 1: Screenshot Tool
1. Open the PDF
2. Zoom to desired image
3. Use screenshot tool to capture
4. Save with appropriate filename

### Option 2: PDF Tools
- Use Preview (Mac): File → Export → Image
- Use Acrobat: Tools → Export PDF → Image
- Use online tools: smallpdf.com, ilovepdf.com

### Option 3: Command Line (Linux/Mac)
```bash
# Install poppler-utils if needed
# Ubuntu: sudo apt-get install poppler-utils
# Mac: brew install poppler

# Extract all images
pdfimages -all paper.pdf image-prefix

# Or use ImageMagick
convert -density 300 paper.pdf[page_number] output.png
```

## Creating Placeholder Images

If you don't have images yet, you can create simple placeholders:

```bash
# Using ImageMagick
convert -size 1200x800 -background '#334155' -fill white \
  -gravity center -pointsize 48 \
  label:'Agent Graphs\nComing Soon' \
  agent-graphs.png
```

Or use online tools:
- [Placeholder.com](https://placeholder.com/)
- [Unsplash](https://unsplash.com/) for stock photos
- [Excalidraw](https://excalidraw.com/) for simple diagrams

## Image Optimization

Before adding images, optimize them:

```bash
# Using ImageMagick
mogrify -resize 1200x -quality 85 *.png

# Or online tools
# - TinyPNG: https://tinypng.com/
# - Squoosh: https://squoosh.app/
```

## Directory Structure

```
assets/images/
├── attack-demo.png          # Hero image
├── agent-graphs.png         # Architecture diagrams  
├── attack-comparison.png    # Attack methods
├── results-summary.png      # Results visualization
└── (your additional images)
```

## Tips

1. **Consistency**: Use consistent style/colors across all images
2. **Quality**: Use high-resolution images (at least 1200px wide)
3. **File size**: Optimize to keep page load fast (<500KB per image)
4. **Alt text**: Update alt attributes in `index.html` for accessibility
5. **Backup**: Keep original high-res versions separately

---

Once you add your images, delete this README or rename it to keep for reference.
