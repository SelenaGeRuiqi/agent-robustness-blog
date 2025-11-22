# Quick Start Guide

Get your blog up and running in 5 minutes!

## 🎯 Goal

Deploy your Agent Robustness research blog to GitHub Pages so it's accessible via a public URL.

## ⚡ 5-Minute Setup

### Step 1: Prepare Your Files (1 min)

Your blog files are ready in `/home/claude/agent-robustness-blog/`. You need to:

1. **Add images** (or use placeholders for now):
   - Copy images to `assets/images/`
   - Or skip this step and add images later

### Step 2: Create GitHub Repository (2 min)

1. Go to https://github.com/new
2. Repository name: `agent-robustness-blog`
3. Public visibility
4. **Don't** check any boxes
5. Click "Create repository"

### Step 3: Upload Files (2 min)

#### Easy Way: Drag & Drop

1. On the repository page, click "uploading an existing file"
2. Drag all files from `agent-robustness-blog/` folder
3. Write commit message: "Initial blog setup"
4. Click "Commit changes"

#### Terminal Way:

```bash
cd /home/claude/agent-robustness-blog
git init
git add .
git commit -m "Initial blog setup"
git remote add origin https://github.com/YOUR-USERNAME/agent-robustness-blog.git
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages (1 min)

1. In your repo, go to **Settings** → **Pages**
2. Under "Source":
   - Branch: `main`
   - Folder: `/ (root)`
3. Click **Save**
4. Wait 1-2 minutes for deployment

### Step 5: View Your Blog! (0 min)

Visit: `https://YOUR-USERNAME.github.io/agent-robustness-blog/`

🎉 **Done!** Your blog is live!

---

## 🔧 What to Do Next

### Immediate Tasks

1. **Add Real Images**
   - Extract from PDFs or create diagrams
   - Put in `assets/images/`
   - Push to GitHub

2. **Update Team Info**
   - Edit `_config.yml`
   - Update team names and institution

3. **Add Your Results**
   - Edit `index.html`
   - Update "Our Work" section with current progress

### When You Have Your Demo

Replace the video placeholder in `index.html`:

```html
<!-- Find this in index.html: -->
<div class="video-placeholder">

<!-- Replace with: -->
<iframe 
  width="100%" 
  height="500" 
  src="https://www.youtube.com/embed/YOUR-VIDEO-ID" 
  frameborder="0" 
  allowfullscreen>
</iframe>
```

---

## 📝 Making Updates

After initial setup, to update your blog:

```bash
# Make your changes to files
# Then:

git add .
git commit -m "Update: description of changes"
git push
```

GitHub Pages will automatically rebuild in 1-2 minutes.

---

## 🆘 Troubleshooting

### Blog Not Showing Up?

1. Wait 2-3 minutes after enabling Pages
2. Check Settings → Pages for build status
3. Try clearing browser cache
4. Check Actions tab for build errors

### Images Not Loading?

1. Verify images are in `assets/images/`
2. Check file names match exactly (case-sensitive!)
3. Re-push to GitHub

### CSS Not Working?

1. Check that `assets/css/main.css` exists
2. Clear browser cache (Ctrl+Shift+R / Cmd+Shift+R)
3. Wait for GitHub Pages to rebuild

---

## 💡 Pro Tips

1. **Preview Locally First**:
   ```bash
   bundle install
   bundle exec jekyll serve
   # Visit http://localhost:4000
   ```

2. **Use Placeholder Images**:
   - Don't let missing images stop you
   - Add proper images later
   - Focus on getting blog live first!

3. **Mobile Check**:
   - View your blog on phone
   - Site is responsive but always good to verify

4. **Share Early**:
   - Get feedback from team members
   - Iterate based on suggestions

---

## 📚 Resources

- **Full Guide**: [DEPLOYMENT.md](DEPLOYMENT.md)
- **Jekyll Docs**: https://jekyllrb.com/docs/
- **GitHub Pages**: https://docs.github.com/en/pages
- **Need Help?**: Create an issue in your repo

---

## ✅ Checklist

- [ ] Created GitHub repository
- [ ] Uploaded all files
- [ ] Enabled GitHub Pages
- [ ] Verified blog is live
- [ ] Added images (or noted to do later)
- [ ] Updated team information
- [ ] Shared URL with team

---

**Your Blog URL**: `https://YOUR-USERNAME.github.io/agent-robustness-blog/`

**Next Steps**: Add images → Update results → Share with world! 🚀
