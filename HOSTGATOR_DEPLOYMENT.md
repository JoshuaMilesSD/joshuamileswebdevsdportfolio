# HostGator Deployment Guide for React Portfolio

This guide will walk you through deploying your React portfolio to HostGator hosting.

## Prerequisites

- HostGator shared hosting account (Business Plan or higher recommended for React apps)
- FTP client (FileZilla recommended) or File Manager access in cPanel
- Domain name configured with HostGator

## Method 1: Using cPanel File Manager (Recommended)

### Step 1: Build Your Project
Your project has already been built. The production files are in the `dist/` folder:
- `index.html` - Main HTML file
- `assets/` - Contains CSS, JS, and image files
- `vite.svg` - Vite logo

### Step 2: Access cPanel
##W2Q#oSNEZ@pm sshkey gen
1. Log into your HostGator account
2. Navigate to cPanel
3. Find and click on **File Manager**

### Step 3: Navigate to Public HTML
1. In File Manager, navigate to `public_html` folder
2. If deploying to a subdomain, navigate to the appropriate subfolder
3. Clear any existing files if this is a fresh deployment
### Step 4: Upload Files
1. Click **Upload** in the File Manager
2. Select and upload ALL files from your `dist/` folder:
   - Upload `index.html`
   - Upload the entire `assets/` folder
   - Upload `vite.svg`
3. Wait for uploads to complete

### Step 5: Set Permissions (if needed)
1. Right-click on uploaded files
2. Change permissions to `644` for files and `755` for folders

## Method 2: Using FTP Client (Alternative)

### Step 1: Get FTP Details
1. In cPanel, find **FTP Accounts**
2. Note your FTP server address (usually your domain name)
3. Use your cPanel username and password

### Step 2: Connect via FTP
1. Open FileZilla or your preferred FTP client
2. Connect using:
   - **Host:** your-domain.com
   - **Username:** your cPanel username
   - **Password:** your cPanel password
   - **Port:** 21

### Step 3: Upload Files
1. Navigate to `public_html` on the server side
2. Upload all files from your local `dist/` folder to `public_html`

## Important Configuration for React Router

Since your portfolio uses React Router, you need to configure URL rewriting:

### Create .htaccess file
Create a file named `.htaccess` in your `public_html` folder with this content:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  
  # Handle client-side routing
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
  
  # Enable compression
  <IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
  </IfModule>
  
  # Cache static assets
  <IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
  </IfModule>
</IfModule>
```

## Deployment Checklist

- [ ] Production build created (`npm run build`)
- [ ] All files from `dist/` folder uploaded to `public_html`
- [ ] `.htaccess` file created for React Router support
- [ ] File permissions set correctly (644 for files, 755 for folders)
- [ ] Domain DNS pointing to HostGator servers
- [ ] Website accessible via your domain name

## File Structure on Server

After deployment, your `public_html` should look like this:

```
public_html/
├── index.html
├── vite.svg
├── .htaccess
└── assets/
    ├── headshot2-ert4jn3X.JPG
    ├── index-CLskAQGP.css
    └── index-DSq8jy1c.js
```

## Testing Your Deployment

1. Visit your domain name in a web browser
2. Test all navigation links (Home, About, Projects, Contact)
3. Verify that direct URLs work (e.g., yourdomain.com/about)
4. Test on mobile devices
5. Check that images load properly
6. Verify contact form functionality

## Common Issues & Solutions

### Issue: "Page Not Found" on refresh or direct URLs
**Solution:** Make sure `.htaccess` file is created and properly configured

### Issue: Images not loading
**Solution:** Verify that the `assets` folder and all its contents are uploaded

### Issue: CSS/JS not loading
**Solution:** Check that file permissions are correct (644 for files)

### Issue: Slow loading
**Solution:** HostGator shared hosting can be slow. Consider upgrading to Business or VPS hosting

## Performance Optimization

Your build is already optimized with:
- ✅ Minified CSS (22.35 kB)
- ✅ Minified JavaScript (237.44 kB)
- ✅ Compressed images
- ✅ Gzip compression enabled via .htaccess

## Next Steps After Deployment

1. **Set up SSL Certificate**: Enable free SSL in cPanel for HTTPS
2. **Configure Custom Domain**: If using a custom domain, update DNS settings
3. **Monitor Performance**: Use Google PageSpeed Insights to check performance
4. **Set up Analytics**: Add Google Analytics to track visitors

## Support

If you encounter issues:
1. Check HostGator's knowledge base
2. Contact HostGator support
3. Verify that your hosting plan supports the traffic and features needed

---

Your React portfolio is now ready for deployment to HostGator! 🚀