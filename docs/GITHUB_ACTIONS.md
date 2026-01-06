# GitHub Actions CI/CD Setup

This project uses GitHub Actions to automatically deploy to Netlify when code is pushed to the `dev` branch.

## Workflow Overview

**File**: `.github/workflows/deploy.yml`

The workflow automatically:
1. Checks out the code
2. Sets up Node.js 18
3. Installs dependencies
4. Builds the Next.js application
5. Deploys to Netlify
6. Shows deployment URLs

## Required GitHub Secrets

You need to configure the following secrets in your GitHub repository:

### How to Add Secrets

1. Go to your GitHub repository
2. Click on **Settings** > **Secrets and variables** > **Actions**
3. Click **New repository secret**
4. Add each of the following secrets:

### Secret Configuration

#### 1. `NETLIFY_AUTH_TOKEN`
- **Description**: Your Netlify personal access token
- **How to get it**:
  1. Go to https://app.netlify.com
  2. Click on your profile picture (top right)
  3. Go to **User settings** > **Applications**
  4. Scroll down to **Personal access tokens**
  5. Click **New access token**
  6. Give it a name (e.g., "GitHub Actions")
  7. Copy the token and add it to GitHub secrets

#### 2. `NETLIFY_NEXT_SITE_ID`
- **Description**: Your Netlify site ID for this project
- **How to get it**:
  1. Go to https://app.netlify.com
  2. Select your site (or create one first)
  3. Go to **Site settings** > **General**
  4. Under **Site details**, copy the **Site ID** (also called API ID)
  5. Add it to GitHub secrets

#### 3. `NEXT_PUBLIC_GOOGLE_SHEETS_API_KEY` (Optional)
- **Description**: Google Sheets API key if your app uses Google Sheets
- **How to get it**:
  1. Go to https://console.cloud.google.com
  2. Create a project or select an existing one
  3. Enable Google Sheets API
  4. Go to **Credentials** > **Create credentials** > **API key**
  5. Copy the key and add it to GitHub secrets

#### 4. `NEXT_PUBLIC_GOOGLE_SHEETS_ID` (Optional)
- **Description**: The ID of your Google Sheet
- **How to get it**:
  - From your Google Sheets URL: `https://docs.google.com/spreadsheets/d/SHEET_ID/edit`
  - The `SHEET_ID` is what you need
  - Add it to GitHub secrets

## Triggering Deployments

The workflow triggers automatically when you:
- Push code to the `dev` branch
- Merge a pull request into the `dev` branch

### Manual Deployment

You can also trigger deployments manually:
1. Go to your repository on GitHub
2. Click on **Actions** tab
3. Select the "Deploy Next.js to Netlify" workflow
4. Click **Run workflow** dropdown
5. Select the `dev` branch
6. Click **Run workflow**

## Monitoring Deployments

### View Workflow Status
1. Go to the **Actions** tab in your GitHub repository
2. Click on the latest workflow run
3. View logs for each step

### Deployment URLs
After successful deployment, the workflow will output:
- 🚀 **Deployment URL**: Your production site URL
- 🔗 **Preview URL**: A preview of the deployment

## Workflow Configuration

- **Node.js Version**: 18
- **Trigger Branch**: `dev`
- **Deploy Directory**: `out/` (Next.js static export)
- **Production Deploy**: Yes

## Troubleshooting

### Build Fails
- Check the workflow logs in the Actions tab
- Verify all dependencies are in `package.json`
- Test the build locally: `npm run build`

### Deployment Fails
- Verify `NETLIFY_AUTH_TOKEN` is correct
- Verify `NETLIFY_SITE_ID` is correct
- Check Netlify site exists and you have access

### Environment Variables Not Working
- Ensure secrets are properly named (case-sensitive)
- Environment variables prefixed with `NEXT_PUBLIC_` are embedded at build time
- Redeploy after adding/updating secrets

## Security Notes

- Never commit secrets to the repository
- Secrets are encrypted and only exposed to workflow runs
- `NEXT_PUBLIC_*` variables are embedded in the client bundle (not truly secret)
- Use server-side APIs for sensitive operations

## Additional Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Netlify Deploy with GitHub Actions](https://github.com/nwtgck/actions-netlify)
- [Next.js Environment Variables](https://nextjs.org/docs/basic-features/environment-variables)

