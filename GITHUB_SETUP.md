# GitHub Setup Guide for Personal Portfolio

## 🚀 Steps to Push to GitHub

Since GitHub CLI is not available in this environment, please follow these manual steps:

### Step 1: Create GitHub Repository
1. Go to [GitHub.com](https://github.com) and log in to your account
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Fill in the repository details:
   - **Repository name**: `personal-portfolio` (or your preferred name)
   - **Description**: "Personal resume portfolio website with responsive design"
   - **Visibility**: Choose Public or Private
   - **Initialize repository**: ❌ DO NOT check "Add a README file"
   - **Add .gitignore**: ❌ DO NOT select anything (we already have one)
   - **Choose a license**: ❌ DO NOT select anything (we already have one)
5. Click "Create repository"

### Step 2: Connect Local Repository to GitHub
After creating the repository, you'll see a page with setup instructions. Copy the HTTPS or SSH URL of your new repository.

Then run these commands in your terminal:

```bash
# Add the remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/personal-portfolio.git

# Push the code to GitHub
git push -u origin main
```

### Step 3: Verify the Upload
After running the push command, you should see your files uploaded to GitHub. You can visit your repository URL to confirm everything is there.

## 📋 Repository Information

### Files That Will Be Uploaded:
- `index.html` - Main HTML file
- `css/` - Stylesheets (styles.css, responsive.css)
- `js/` - JavaScript files (main.js, data.js, resume.js, portfolio.js, contact.js)
- `package.json` - Project configuration
- `vercel.json` - Vercel deployment configuration
- `README.md` - Project documentation
- `.gitignore` - Git ignore rules

### Files That Will Be Ignored:
- `.vercel/` - Vercel deployment cache
- `node_modules/` - Node.js dependencies (if any)
- Log files and temporary files

## 🎯 Next Steps After GitHub Upload

1. **Enable GitHub Pages** (optional):
   - Go to Settings → Pages in your repository
   - Select source as "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Your site will be available at: `https://YOUR_USERNAME.github.io/personal-portfolio`

2. **Set up Vercel Integration** (optional):
   - Go to [Vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically deploy your site

3. **Continuous Deployment**:
   - Any future commits to the main branch will automatically trigger deployments
   - Both GitHub Pages and Vercel support automatic deployments

## 🔧 Troubleshooting

If you encounter any issues:

1. **Authentication Problems**:
   - Make sure you're logged into GitHub
   - Use HTTPS URL with your GitHub credentials
   - Or set up SSH keys for easier authentication

2. **Branch Issues**:
   - If your default branch is "master" instead of "main", use:
     ```bash
     git push -u origin master
     ```

3. **Remote Already Exists**:
   - If you get "remote origin already exists" error:
     ```bash
     git remote remove origin
     git remote add origin https://github.com/YOUR_USERNAME/personal-portfolio.git
     ```

## 📞 Need Help?

If you need assistance with any of these steps, feel free to ask!