@echo off
echo ========================================
echo WordPress to React Portfolio Migration
echo ========================================
echo.

echo STEP 1: Backup WordPress Site
echo ✓ Login to HostGator cPanel
echo ✓ Use Backup Wizard to create full backup
echo ✓ Download backup file to your computer
echo.

echo STEP 2: Build React Portfolio
echo.
echo Building production version...
call npm run build
if errorlevel 1 (
    echo ❌ Build failed! Please fix errors first.
    pause
    exit /b 1
)

echo ✓ React build completed successfully!
echo.

echo STEP 3: Prepare deployment files
copy ".htaccess" "dist\.htaccess" >nul
echo ✓ .htaccess copied to build folder
echo.

echo ========================================
echo READY FOR MIGRATION!
echo ========================================
echo.
echo Your files are ready in the 'dist' folder:
echo   - index.html
echo   - assets/ folder (CSS, JS, images)
echo   - .htaccess (for React Router)
echo   - vite.svg
echo.
echo NEXT STEPS:
echo.
echo 1. 🔴 BACKUP YOUR WORDPRESS SITE FIRST!
echo    - HostGator cPanel → Backup Wizard
echo.
echo 2. 📁 Access cPanel File Manager
echo    - Navigate to public_html
echo.
echo 3. 🗑️ Remove/backup WordPress files:
echo    - wp-admin, wp-content, wp-includes
echo    - index.php, wp-config.php
echo    - All other WordPress files
echo.
echo 4. ⬆️ Upload React portfolio files:
echo    - Upload ALL files from 'dist' folder
echo    - To public_html directory
echo.
echo 5. 🌐 Test your domain
echo    - Visit yourdomain.com
echo    - Test all navigation links
echo.
echo 📖 Full guide: WORDPRESS_TO_REACT_MIGRATION.md
echo.
echo ⚠️  IMPORTANT: Always backup before making changes!
echo.
pause