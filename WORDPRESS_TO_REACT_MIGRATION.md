# Replace WordPress Site with React Portfolio on HostGator

This guide will help you safely replace your existing WordPress site with your new React portfolio while keeping your domain name intact.

## 🚨 IMPORTANT: Backup First!

**Before making ANY changes, create a complete backup of your WordPress site.**

### Step 1: Backup Your WordPress Site

#### Method A: Using cPanel Backup (Recommended)
1. **Login to HostGator cPanel**
2. **Find "Backup Wizard"** or "Backups"
3. **Create Full Backup** - This includes:
   - All website files
   - Database
   - Email accounts
   - Settings
4. **Download the backup** to your computer
5. **Store safely** - Keep multiple copies

#### Method B: Manual Backup
1. **Files Backup:**
   - cPanel → File Manager → `public_html`
   - Select all files → Compress → Download
2. **Database Backup:**
   - cPanel → phpMyAdmin
   - Select your database → Export → Download

### Step 2: Create a Staging Directory (Optional but Recommended)

1. **Access cPanel File Manager**
2. **Create new folder** in `public_html` called `portfolio-staging`
3. **Upload your React build** to this folder first
4. **Test at** `yourdomain.com/portfolio-staging`
5. **Verify everything works** before replacing main site

## 🚀 Migration Process

### Step 3: Prepare React Portfolio

1. **Build your React app** (if not done already):
   ```bash
   npm run build
   ```

2. **Copy .htaccess** to dist folder:
   ```bash
   cp .htaccess dist/.htaccess
   ```

3. **Your dist folder should contain:**
   - `index.html`
   - `assets/` folder
   - `.htaccess`
   - `vite.svg`

### Step 4: Replace WordPress Files

#### ⚠️ POINT OF NO RETURN - Make sure you have backups!

1. **Access cPanel File Manager**
2. **Navigate to `public_html`**
3. **Select ALL existing files and folders:**
   - WordPress files (wp-admin, wp-content, wp-includes, etc.)
   - index.php
   - wp-config.php
   - All other WordPress files
4. **Move to trash** or **create backup folder:**
   - Create folder called `wordpress-backup-[date]`
   - Move all WordPress files there
5. **Upload your React portfolio files:**
   - Upload everything from your `dist/` folder to `public_html`

### Step 5: Update .htaccess for React Router

Your `.htaccess` file should be in the root (`public_html/.htaccess`) with this content:

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

## 📊 File Structure Comparison

### Before (WordPress):
```
public_html/
├── wp-admin/
├── wp-content/
├── wp-includes/
├── index.php
├── wp-config.php
├── .htaccess (WordPress rules)
└── [other WordPress files]
```

### After (React Portfolio):
```
public_html/
├── index.html
├── assets/
│   ├── headshot2-ert4jn3X.JPG
│   ├── index-CLskAQGP.css
│   └── index-DSq8jy1c.js
├── .htaccess (React Router rules)
├── vite.svg
└── wordpress-backup-[date]/ (optional backup folder)
```

## 🔧 Domain Configuration

**Good news: No domain changes needed!**

Your domain will automatically point to the new React portfolio because:
- ✅ Domain DNS settings remain the same
- ✅ HostGator hosting account stays the same
- ✅ Only the files in `public_html` are changing

## 🧪 Testing Your Migration

### Step 6: Verify Everything Works

1. **Visit your domain** in a browser
2. **Test all navigation:**
   - Home (`yourdomain.com`)
   - About (`yourdomain.com/about`)
   - Projects (`yourdomain.com/projects`)
   - Contact (`yourdomain.com/contact`)
3. **Test direct URLs** (type URLs directly in address bar)
4. **Check mobile responsiveness**
5. **Verify images load** (especially your headshot)
6. **Test contact form**

### Common Issues & Solutions

#### Issue: "Page Not Found" on navigation
**Solution:** Check that `.htaccess` is in the root folder with correct React Router rules

#### Issue: Images not loading
**Solution:** Verify the `assets` folder uploaded completely

#### Issue: Old WordPress cache showing
**Solution:** 
- Clear browser cache
- Wait 24 hours for DNS propagation
- Check with different browsers/devices

## 🔄 Rollback Plan (If Something Goes Wrong)

If you need to restore WordPress:

1. **Access cPanel File Manager**
2. **Delete React files** from `public_html`
3. **Restore from backup:**
   - If using backup folder: move files back to `public_html`
   - If using cPanel backup: use restore wizard
4. **Restore database** (if needed via phpMyAdmin)

## 📋 Migration Checklist

- [ ] ✅ WordPress site backed up completely
- [ ] ✅ React portfolio built (`npm run build`)
- [ ] ✅ `.htaccess` configured for React Router
- [ ] ✅ Test staging version (optional)
- [ ] ⚠️ WordPress files removed/backed up
- [ ] ✅ React files uploaded to `public_html`
- [ ] ✅ Domain tested - all pages work
- [ ] ✅ Mobile responsive verified
- [ ] ✅ Contact form tested
- [ ] ✅ SEO/Analytics updated (if applicable)

## 📈 Post-Migration Tasks

### Update SEO & Analytics
1. **Google Analytics:** Update tracking code if needed
2. **Google Search Console:** Submit new sitemap
3. **Social Media:** Update bio links to new portfolio

### Performance Optimization
1. **Enable SSL** in cPanel if not already done
2. **Test page speed** with Google PageSpeed Insights
3. **Monitor uptime** for the first week

### Email Considerations
- **Email accounts remain unchanged** - they're separate from website files
- **Contact form** may need backend setup for email sending

## 🆘 Support Resources

- **HostGator Support:** Available 24/7 for hosting issues
- **Backup Recovery:** Can restore from their backups if needed
- **Domain Issues:** Check DNS settings in cPanel

---

## Summary

Your migration process:
1. **Backup WordPress** ← CRITICAL STEP
2. **Upload React files** to replace WordPress files  
3. **Test everything works**
4. **Keep backups** for safety

**Your domain name stays exactly the same!** Visitors will see your new React portfolio at the same URL they used for WordPress.

🎉 **Ready to launch your professional React portfolio!**