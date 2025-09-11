#!/bin/bash

# AKPESSC Website Deployment Script
echo "🚀 Starting AKPESSC Website Deployment..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building the project..."
npm run build

# Check if build was successful
if [ ! -d "dist" ]; then
    echo "❌ Error: Build failed. dist/ directory not found."
    exit 1
fi

echo "✅ Build completed successfully!"

# Deploy to GitHub Pages
echo "🌐 Deploying to GitHub Pages..."
npm run deploy

echo "🎉 Deployment completed!"
echo "📱 Your app should be available at: https://tecrade.github.io/AKPESSC-25"
echo ""
echo "📝 Note: It may take a few minutes for changes to appear on GitHub Pages."
echo "🔧 To update the homepage URL, edit the 'homepage' field in package.json"
