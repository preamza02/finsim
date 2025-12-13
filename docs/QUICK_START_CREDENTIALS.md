# Quick Start: OAuth Credentials Setup

This guide helps you quickly set up OAuth credentials for FinSim authentication.

## Prerequisites

- GitHub account
- Google account
- Access to terminal (for generating secrets)

## Step 1: Generate Auth Secret

Open your terminal and run:

```bash
openssl rand -base64 32
```

Copy the output - you'll need this for `AUTH_SECRET`.

## Step 2: Get GitHub OAuth Credentials

### A. Create GitHub OAuth App

1. Go to https://github.com/settings/developers
2. Click **"New OAuth App"**
3. Fill in the form:
   - **Application name**: `FinSim Development` (or your preferred name)
   - **Homepage URL**: `http://localhost:5173` (for development)
   - **Authorization callback URL**: `http://localhost:5173/auth/callback/github`
4. Click **"Register application"**

### B. Get Your Credentials

1. You'll see your **Client ID** - copy it
2. Click **"Generate a new client secret"**
3. Copy the secret immediately (you won't see it again!)

### C. For Production

When deploying to production, create a separate OAuth app with:
- **Homepage URL**: `https://yourdomain.com`
- **Authorization callback URL**: `https://yourdomain.com/auth/callback/github`

## Step 3: Get Google OAuth Credentials

### A. Create Google Cloud Project

1. Go to https://console.cloud.google.com/
2. Click **"Select a project"** → **"New Project"**
3. Enter project name: `FinSim` (or your preferred name)
4. Click **"Create"**

### B. Enable OAuth

1. In your new project, go to **"APIs & Services"** → **"Credentials"**
2. Click **"Configure Consent Screen"**
3. Choose **"External"** user type
4. Fill in required info:
   - **App name**: `FinSim`
   - **User support email**: Your email
   - **Developer contact**: Your email
5. Click **"Save and Continue"** through all steps

### C. Create OAuth Client

1. Go back to **"Credentials"**
2. Click **"Create Credentials"** → **"OAuth client ID"**
3. Choose **"Web application"**
4. Fill in:
   - **Name**: `FinSim Development`
   - **Authorized JavaScript origins**: `http://localhost:5173`
   - **Authorized redirect URIs**: `http://localhost:5173/auth/callback/google`
5. Click **"Create"**

### D. Get Your Credentials

1. A popup shows your **Client ID** and **Client secret** - copy both
2. Click **"OK"**

### E. For Production

Create a separate OAuth client with:
- **Authorized JavaScript origins**: `https://yourdomain.com`
- **Authorized redirect URIs**: `https://yourdomain.com/auth/callback/google`

## Step 4: Configure FinSim

### A. Create Environment File

In the `app/` directory:

```bash
cd app
cp .env.example .env
```

### B. Add Your Credentials

Edit `.env` and add your credentials:

```env
# Enable authentication
AUTH_ENABLED=true
PUBLIC_AUTH_ENABLED=true

# Auth secret (from Step 1)
AUTH_SECRET=your-generated-secret-from-step-1

# Trust host (true for production)
AUTH_TRUST_HOST=true

# GitHub credentials (from Step 2)
GITHUB_ID=your-github-client-id
GITHUB_SECRET=your-github-client-secret

# Google credentials (from Step 3)
GOOGLE_ID=your-google-client-id
GOOGLE_SECRET=your-google-client-secret

# Base URL
AUTH_URL=http://localhost:5173
```

### C. Verify Configuration

Your `.env` file should have:
- ✅ `AUTH_SECRET` - A long random string
- ✅ `GITHUB_ID` - Alphanumeric string from GitHub
- ✅ `GITHUB_SECRET` - Long alphanumeric string from GitHub
- ✅ `GOOGLE_ID` - String ending in `.apps.googleusercontent.com`
- ✅ `GOOGLE_SECRET` - Alphanumeric string from Google

## Step 5: Test Authentication

### A. Start Development Server

```bash
pnpm install
pnpm dev
```

### B. Test Sign In

1. Open http://localhost:5173
2. Click **"Sign In"** in the header
3. Try signing in with GitHub
4. Try signing in with Google
5. Verify you see your profile in the header
6. Visit http://localhost:5173/dashboard to test protected routes

## Troubleshooting

### "Invalid client" error

- ❌ **Wrong callback URL**: Make sure it exactly matches what you entered in OAuth app
- ✅ **GitHub**: `http://localhost:5173/auth/callback/github`
- ✅ **Google**: `http://localhost:5173/auth/callback/google`

### "Redirect URI mismatch" error

- ❌ **Missing trailing slash**: Don't add trailing slashes to callback URLs
- ❌ **Wrong protocol**: Use `http://` for localhost, `https://` for production
- ✅ **Exact match required**: URL must match character-for-character

### Environment variable errors

- ❌ **Missing .env file**: Run `cp .env.example .env`
- ❌ **Syntax errors**: No spaces around `=` in `.env` file
- ❌ **Missing quotes**: Don't put values in quotes unless they contain spaces

### Still not working?

See the detailed troubleshooting guide in `docs/AUTHENTICATION.md`

## Security Reminders

🔒 **Never commit `.env` files to git**
🔒 **Use separate credentials for development and production**
🔒 **Rotate secrets regularly in production**
🔒 **Keep client secrets confidential**

## For Self-Hosting Without Authentication

If you don't need authentication (single-user deployment):

```env
AUTH_ENABLED=false
PUBLIC_AUTH_ENABLED=false
```

You can skip all OAuth setup steps above.

## Next Steps

- Read the full authentication guide: `docs/AUTHENTICATION.md`
- Check implementation details: `docs/IMPLEMENTATION_SUMMARY.md`
- Review security best practices: `docs/AUTHENTICATION.md#security-best-practices`

## Quick Reference

| Provider | OAuth App URL | Callback URL Format |
|----------|--------------|---------------------|
| GitHub | https://github.com/settings/developers | `{BASE_URL}/auth/callback/github` |
| Google | https://console.cloud.google.com/apis/credentials | `{BASE_URL}/auth/callback/google` |

Where `{BASE_URL}` is:
- Development: `http://localhost:5173`
- Production: `https://yourdomain.com`

---

**Need Help?** Check the [full authentication guide](./AUTHENTICATION.md) or create an issue on GitHub.
