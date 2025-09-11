@echo off
echo Building React Portfolio for HostGator Deployment...
echo.

REM Build the project
echo Step 1: Building production version...
call npm run build
if errorlevel 1 (
    echo Build failed! Please check for errors.
    pause
    exit /b 1
)

REM Copy .htaccess to dist folder
echo Step 2: Adding .htaccess for React Router...
copy ".htaccess" "dist\.htaccess" >nul

echo.
echo ✅ Build completed successfully!
echo.
echo Next steps for HostGator deployment:
echo 1. Open HostGator cPanel → File Manager
echo 2. Navigate to public_html folder
echo 3. Upload ALL files from the 'dist' folder:
echo    - index.html
echo    - assets folder (complete)
echo    - .htaccess
echo    - vite.svg
echo 4. Set file permissions to 644 for files, 755 for folders
echo 5. Visit your domain to test
echo.
echo 📁 Files ready for upload are in: dist\
echo 📖 Full deployment guide: HOSTGATOR_DEPLOYMENT.md
echo.
pause