#!/bin/bash
# Script to set up the markdown content system

# Install required npm packages
npm install gray-matter remark remark-html remark-gfm @tailwindcss/typography

# Create directories if they don't exist
mkdir -p content/articles

echo "Setup complete! You can now run the site with 'npm run dev'" 