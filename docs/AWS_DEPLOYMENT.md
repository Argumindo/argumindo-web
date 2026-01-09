# AWS S3 and CloudFront Deployment

This guide explains how to deploy your Argumindo Next.js application to AWS S3 and CloudFront using GitHub Actions.

## Workflow Overview

**File**: `.github/workflows/deploy-prod.yml`

The workflow automatically:
1. Checks out the code
2. Sets up Node.js 20
3. Installs dependencies
4. Builds the Next.js application
5. Configures AWS credentials
6. Deploys to S3 bucket
7. Invalidates CloudFront cache

## Required GitHub Secrets

You need to configure the following secrets in your GitHub repository:

### How to Add Secrets

1. Go to your GitHub repository
2. Click on **Settings** > **Secrets and variables** > **Actions**
3. Click **New repository secret**
4. Add each of the following secrets:

### Secret Configuration

#### 1. `AWS_ACCESS_KEY_ID`
- **Description**: Your AWS access key ID
- **How to get it**:
  1. Go to AWS Console > IAM
  2. Click on **Users** > Select your user
  3. Go to **Security credentials** tab
  4. Click **Create access key**
  5. Select **Application running outside AWS**
  6. Copy the **Access key ID** and add it to GitHub secrets

#### 2. `AWS_SECRET_ACCESS_KEY`
- **Description**: Your AWS secret access key
- **How to get it**:
  1. During the access key creation process (above)
  2. Copy the **Secret access key** (only shown once!)
  3. Add it to GitHub secrets immediately

#### 3. `AWS_REGION`
- **Description**: Your AWS region (e.g., `us-east-1`, `eu-west-1`)
- **How to get it**:
  1. Check your S3 bucket region in AWS Console
  2. Common regions: `us-east-1`, `us-west-2`, `eu-west-1`, `ap-south-1`
  3. Add the region code to GitHub secrets

#### 4. `S3_BUCKET`
- **Description**: Your S3 bucket name for hosting the static site
- **How to get it**:
  1. Go to AWS Console > S3
  2. Find or create your bucket
  3. Copy the bucket name (e.g., `argumindo-web-prod`)
  4. Add it to GitHub secrets

#### 5. `CLOUDFRONT_DISTRIBUTION_ID`
- **Description**: Your CloudFront distribution ID
- **How to get it**:
  1. Go to AWS Console > CloudFront
  2. Select your distribution
  3. Copy the **Distribution ID** (e.g., `E1234567890ABC`)
  4. Add it to GitHub secrets

#### 6. `NEXT_PUBLIC_GOOGLE_SHEETS_API_KEY` (Optional)
- **Description**: Google Sheets API key if your app uses Google Sheets
- **How to get it**:
  1. Go to https://console.cloud.google.com
  2. Create a project or select an existing one
  3. Enable Google Sheets API
  4. Go to **Credentials** > **Create credentials** > **API key**
  5. Copy the key and add it to GitHub secrets

#### 7. `NEXT_PUBLIC_GOOGLE_SHEETS_ID` (Optional)
- **Description**: The ID of your Google Sheet
- **How to get it**:
  - From your Google Sheets URL: `https://docs.google.com/spreadsheets/d/SHEET_ID/edit`
  - The `SHEET_ID` is what you need
  - Add it to GitHub secrets

## AWS Setup Requirements

### S3 Bucket Configuration

1. **Create S3 Bucket**:
   ```bash
   aws s3 mb s3://your-bucket-name --region us-east-1
   ```

2. **Enable Static Website Hosting** (if not using CloudFront):
   - Go to S3 bucket > **Properties** > **Static website hosting**
   - Enable and set index document to `index.html`

3. **Set Bucket Policy** (for public read access):
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Sid": "PublicReadGetObject",
         "Effect": "Allow",
         "Principal": "*",
         "Action": "s3:GetObject",
         "Resource": "arn:aws:s3:::your-bucket-name/*"
       }
     ]
   }
   ```

4. **Block Public Access Settings**:
   - If using CloudFront, keep public access blocked
   - If using direct S3 hosting, allow public access

### CloudFront Distribution Setup

1. **Create CloudFront Distribution**:
   - Origin: Your S3 bucket
   - Viewer Protocol Policy: **Redirect HTTP to HTTPS**
   - Default Root Object: `index.html`
   - Error Pages: Add custom error responses for 404 → `/index.html` (for SPA routing)

2. **Custom Domain** (Optional):
   - Add your domain in **Alternate Domain Names (CNAMEs)**
   - Request SSL certificate in AWS Certificate Manager
   - Update DNS records as instructed

### IAM User Permissions

The IAM user needs the following permissions:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:PutObject",
        "s3:GetObject",
        "s3:DeleteObject",
        "s3:ListBucket"
      ],
      "Resource": [
        "arn:aws:s3:::your-bucket-name",
        "arn:aws:s3:::your-bucket-name/*"
      ]
    },
    {
      "Effect": "Allow",
      "Action": [
        "cloudfront:CreateInvalidation",
        "cloudfront:GetInvalidation",
        "cloudfront:ListInvalidations"
      ],
      "Resource": "*"
    }
  ]
}
```

## Triggering Deployments

The workflow triggers automatically when you:
- Push code to the `main` branch
- Merge a pull request into the `main` branch

### Manual Deployment

You can also trigger deployments manually:
1. Go to your repository on GitHub
2. Click on **Actions** tab
3. Select the "Deploy to AWS S3 and CloudFront" workflow
4. Click **Run workflow** dropdown
5. Select the `main` branch
6. Click **Run workflow**

## Monitoring Deployments

### View Workflow Status
1. Go to the **Actions** tab in your GitHub repository
2. Click on the latest workflow run
3. View logs for each step

### Deployment Process
1. **Build**: Creates optimized production build in `out/` folder
2. **S3 Sync**: Uploads all files from `out/` to S3 bucket (deletes old files)
3. **CloudFront Invalidation**: Clears CloudFront cache for all paths (`/*`)

## Workflow Configuration

- **Node.js Version**: 20
- **Trigger Branch**: `main`
- **Deploy Directory**: `out/` (Next.js static export)
- **Cache Strategy**: CloudFront invalidation for all paths

## Troubleshooting

### Build Fails
- Check the workflow logs in the Actions tab
- Verify all dependencies are in `package.json`
- Test the build locally: `npm run build`
- Check environment variables are correctly named

### S3 Deployment Fails
- Verify `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` are correct
- Check `AWS_REGION` matches your bucket region
- Verify `S3_BUCKET` name is correct
- Ensure IAM user has S3 permissions

### CloudFront Invalidation Fails
- Verify `CLOUDFRONT_DISTRIBUTION_ID` is correct
- Check IAM user has CloudFront invalidation permissions
- Distribution ID format: `E1234567890ABC` (starts with E)

### DNS Debug Issues
- The debug step checks AWS connectivity
- If it fails, check your network/VPN settings
- Verify AWS region is accessible

### Files Not Updating
- CloudFront cache can take 5-15 minutes to invalidate
- Check CloudFront console for invalidation status
- Verify S3 sync completed successfully

## Security Best Practices

1. **Never commit AWS credentials** to the repository
2. **Use IAM roles** with least privilege principle
3. **Rotate access keys** regularly
4. **Enable MFA** on AWS account
5. **Use separate IAM user** for CI/CD (not root account)
6. **Monitor CloudTrail** for access logs

## Cost Optimization

- **S3**: Pay for storage and requests (very cheap for static sites)
- **CloudFront**: Pay for data transfer (first 1TB free per month)
- **Invalidations**: First 1,000 paths per month are free

## Additional Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [AWS S3 Static Website Hosting](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html)
- [CloudFront Distribution Guide](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
