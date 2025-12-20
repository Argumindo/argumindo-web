# Manual Deployment to Netlify

This guide explains how to manually deploy your Argumindo Next.js application to Netlify.

## Prerequisites

- A Netlify account (sign up at https://app.netlify.com/signup if you don't have one)
- The built production files (already created in the `out` folder)

## Deployment Methods

### Method 1: Drag & Drop (Easiest)

1. **Build your project** (already done):
   ```bash
   npm run build
   ```
   This creates an `out` folder with your static files.

2. **Go to Netlify**:
   - Visit https://app.netlify.com
   - Log in to your account

3. **Deploy via Drag & Drop**:
   - On your Netlify dashboard, scroll down to the "Sites" section
   - You'll see a box that says "Want to deploy a new site without connecting to Git? Drag and drop your site output folder here"
   - Drag the entire `out` folder from your project directory and drop it into this box
   - Netlify will automatically upload and deploy your site

4. **Your site is live!**:
   - Netlify will generate a random URL like `https://random-name-123456.netlify.app`
   - You can change this to a custom subdomain in Site settings > Domain management

### Method 2: Netlify CLI (More Control)

1. **Install Netlify CLI** (if not already installed):
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**:
   ```bash
   netlify login
   ```
   This will open a browser window to authenticate.

3. **Deploy your site**:
   ```bash
   cd /Users/sabarinathanbalakumar/vscodeprojects/argumindo/argumindo-web
   netlify deploy
   ```

4. **Follow the prompts**:
   - Choose "Create & configure a new site"
   - Select your team
   - Choose a site name (or leave blank for random)
   - Set deploy path to: `out`

5. **Deploy to production**:
   ```bash
   netlify deploy --prod
   ```
   Confirm the deploy path is `out`

### Method 3: Zip File Upload

1. **Create a zip file of the `out` folder**:
   ```bash
   cd /Users/sabarinathanbalakumar/vscodeprojects/argumindo/argumindo-web
   cd out
   zip -r ../site.zip .
   ```

2. **Go to Netlify**:
   - Visit https://app.netlify.com/drop
   - Upload the `site.zip` file

3. **Your site deploys automatically**

## After Deployment

### Custom Domain (Optional)
1. Go to Site settings > Domain management
2. Click "Add custom domain"
3. Follow the instructions to configure your DNS

### Environment Variables
If your app needs environment variables:
1. Go to Site settings > Environment variables
2. Add your variables there

### Continuous Deployment (Optional)
To set up automatic deployments from Git:
1. Go to Site settings > Build & deploy
2. Click "Link repository"
3. Connect your GitHub/GitLab/Bitbucket account
4. Select your repository
5. Set build command: `npm run build`
6. Set publish directory: `out`

## Important Files

- `netlify.toml` - Configuration file for build settings and redirects (already created)
- `out/` - The static export folder that gets deployed
- `next.config.js` - Configured with `output: 'export'` for static export

## Troubleshooting

### Build fails on Netlify
- Make sure Node version is compatible (add `.nvmrc` file with your Node version)
- Check that all dependencies are in `package.json` (not just devDependencies)

### 404 errors on routes
- The `netlify.toml` file includes redirects for SPA routing
- If you still have issues, check the redirect rules in the Netlify UI

### Images not loading
- Ensure images are in the `public` folder
- The `next.config.js` has `images.unoptimized: true` for static export

## Quick Deploy Commands

```bash
# Build for production
npm run build

# Deploy with Netlify CLI (draft)
netlify deploy

# Deploy to production
netlify deploy --prod
```

## Your Build Output

Your static site is now in the `out` folder and ready to deploy!
- Total pages: 5
- First Load JS: ~105 kB
- All pages are pre-rendered as static content

Happy deploying! 🚀

