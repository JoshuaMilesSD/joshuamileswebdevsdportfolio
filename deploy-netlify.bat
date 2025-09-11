@echo off
echo ========================================
echo Deploy React Portfolio to Netlify
echo ========================================
echo.

echo Building production version...
call npm run build
if errorlevel 1 (
    echo ❌ Build failed! Please fix errors first.
    pause
    exit /b 1
)

echo ✅ Build completed successfully!
echo.

echo ========================================
echo NETLIFY DEPLOYMENT READY!
echo ========================================
echo.

echo Your portfolio is ready for Netlify deployment!
echo.

echo 🎯 QUICK DEPLOYMENT OPTIONS:
echo.

echo METHOD 1: Drag & Drop (Fastest)
echo 1. Go to https://netlify.com
echo 2. Drag the 'dist' folder to the deployment area
echo 3. Get instant live URL!
echo.

echo METHOD 2: Git Integration (Recommended)
echo 1. Push code to GitHub
echo 2. Connect GitHub repo to Netlify
echo 3. Automatic deployments on every push
echo.

echo 📁 Files ready for deployment:
echo   - dist/ folder (built files)
echo   - netlify.toml (configuration)
echo   - public/_redirects (React Router support)
echo.

echo ⚙️ Netlify will automatically detect:
echo   - Build command: npm run build
echo   - Publish directory: dist
echo   - Node.js version: 18
echo.

echo 🌟 What you get with Netlify:
echo   - Free hosting
echo   - Custom domain support
echo   - Free SSL certificate
echo   - CDN (fast loading worldwide)
echo   - Automatic deployments
echo   - Contact form handling
echo.

echo 📖 Full guide: NETLIFY_DEPLOYMENT.md
echo.

echo 🚀 Ready to go live!
echo.
pause