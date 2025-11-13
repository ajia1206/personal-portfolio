#!/bin/bash

# GitHub Repository Setup Script for Personal Portfolio
# This script helps you connect your local repository to GitHub

echo "🚀 GitHub Repository Setup for Personal Portfolio"
echo "================================================"
echo ""
echo "Please follow these steps:"
echo ""
echo "1. Go to https://github.com/new and create a new repository"
echo "2. Name it: personal-portfolio (or your preferred name)"
echo "3. DO NOT initialize with README, .gitignore, or license"
echo "4. Copy the repository URL (HTTPS or SSH)"
echo ""

read -p "Enter your GitHub repository URL: " repo_url

if [ -z "$repo_url" ]; then
    echo "❌ Repository URL cannot be empty"
    exit 1
fi

echo ""
echo "🔗 Adding remote repository..."
git remote add origin "$repo_url"

echo "📤 Pushing code to GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Successfully pushed to GitHub!"
    echo "🌐 Your repository is now available at: $repo_url"
    echo ""
    echo "🎯 Next steps:"
    echo "1. Visit your repository on GitHub"
    echo "2. Enable GitHub Pages if you want free hosting"
    echo "3. Set up Vercel integration for automatic deployments"
else
    echo ""
    echo "❌ Push failed. Please check:"
    echo "- Your internet connection"
    echo "- GitHub authentication"
    echo "- Repository URL is correct"
    echo ""
    echo "You can try manually with: git push -u origin main"
fi