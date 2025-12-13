# Authentication Setup Guide

FinSim uses OAuth 2.0 authentication with GitHub and Google as identity providers. This guide will help you set up authentication for your FinSim installation.

## Table of Contents

- [Quick Start](#quick-start)
- [GitHub OAuth Setup](#github-oauth-setup)
- [Google OAuth Setup](#google-oauth-setup)
- [Environment Variables](#environment-variables)
- [Self-Hosting Without Authentication](#self-hosting-without-authentication)
- [Security Best Practices](#security-best-practices)
- [Troubleshooting](#troubleshooting)

## Quick Start

1. Copy `.env.example` to `.env` in the `app/` directory:
   ```bash
   cd app
   cp .env.example .env
   ```

2. Generate a secure secret for Auth.js:
   ```bash
   openssl rand -base64 32
   ```

3. Add the generated secret to your `.env` file:
   ```env
   AUTH_SECRET=your-generated-secret-here
   ```

4. Follow the provider-specific setup instructions below.

## GitHub OAuth Setup

### Step 1: Create a GitHub OAuth App

1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Click **"New OAuth App"** (or visit [https://github.com/settings/applications/new](https://github.com/settings/applications/new))
3. Fill in the application details:
   - **Application name**: FinSim (or your preferred name)
   - **Homepage URL**: 
     - Development: `http://localhost:5173`
     - Production: `https://yourdomain.com`
   - **Authorization callback URL**:
     - Development: `http://localhost:5173/auth/callback/github`
     - Production: `https://yourdomain.com/auth/callback/github`
4. Click **"Register application"**

### Step 2: Get Your Credentials

After creating the app, you'll see:
- **Client ID**: Copy this value
- **Client Secret**: Click **"Generate a new client secret"** and copy the value

⚠️ **Important**: Save the client secret immediately - you won't be able to see it again!

### Step 3: Add to Environment Variables

Add these values to your `.env` file:

```env
GITHUB_ID=your-github-client-id
GITHUB_SECRET=your-github-client-secret
```

## Google OAuth Setup

### Step 1: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Navigate to **"APIs & Services" > "Credentials"**

### Step 2: Configure OAuth Consent Screen

1. Click **"OAuth consent screen"** in the left sidebar
2. Choose **"External"** user type (unless you have a Google Workspace)
3. Fill in the required information:
   - **App name**: FinSim
   - **User support email**: Your email
   - **Developer contact email**: Your email
4. Add scopes (if needed):
   - `./auth/userinfo.email`
   - `./auth/userinfo.profile`
5. Save and continue

### Step 3: Create OAuth Client ID

1. Go back to **"Credentials"**
2. Click **"Create Credentials" > "OAuth client ID"**
3. Choose **"Web application"** as the application type
4. Fill in:
   - **Name**: FinSim Web Client
   - **Authorized JavaScript origins**:
     - Development: `http://localhost:5173`
     - Production: `https://yourdomain.com`
   - **Authorized redirect URIs**:
     - Development: `http://localhost:5173/auth/callback/google`
     - Production: `https://yourdomain.com/auth/callback/google`
5. Click **"Create"**

### Step 4: Get Your Credentials

After creation, you'll receive:
- **Client ID**: Copy this value
- **Client Secret**: Copy this value

### Step 5: Add to Environment Variables

Add these values to your `.env` file:

```env
GOOGLE_ID=your-google-client-id
GOOGLE_SECRET=your-google-client-secret
```

## Environment Variables

Here's a complete example of all authentication-related environment variables:

```env
# Enable/Disable Authentication
AUTH_ENABLED=true
PUBLIC_AUTH_ENABLED=true

# Auth.js Configuration
AUTH_SECRET=your-generated-secret-key
AUTH_TRUST_HOST=true

# GitHub OAuth
GITHUB_ID=your-github-client-id
GITHUB_SECRET=your-github-client-secret

# Google OAuth
GOOGLE_ID=your-google-client-id
GOOGLE_SECRET=your-google-client-secret

# Application URL
AUTH_URL=http://localhost:5173
```

### Variable Descriptions

- **AUTH_ENABLED**: Set to `true` to enable authentication, `false` to disable (server-side)
- **PUBLIC_AUTH_ENABLED**: Set to `true` to show auth UI, `false` to hide (client-side)
- **AUTH_SECRET**: Secret key for signing tokens (generate with `openssl rand -base64 32`)
- **AUTH_TRUST_HOST**: Set to `true` in production, allows Auth.js to trust the host header
- **GITHUB_ID/SECRET**: Your GitHub OAuth app credentials
- **GOOGLE_ID/SECRET**: Your Google OAuth client credentials
- **AUTH_URL**: Base URL of your application

## Self-Hosting Without Authentication

If you're self-hosting FinSim and don't need authentication (e.g., single-user deployment), you can disable it:

1. Set the following in your `.env` file:
   ```env
   AUTH_ENABLED=false
   PUBLIC_AUTH_ENABLED=false
   ```

2. Restart your application

When authentication is disabled:
- No login page will be shown
- All routes are accessible without authentication
- The sign-in button in the header is replaced with "Get Started"
- No OAuth providers are initialized

## Security Best Practices

### 1. Keep Secrets Secure

- **Never commit** `.env` files to version control
- Store secrets in secure environment variable management systems in production
- Rotate secrets regularly
- Use different secrets for development and production

### 2. Callback URL Validation

- Always specify exact callback URLs in your OAuth provider settings
- Don't use wildcards in callback URLs
- Use HTTPS in production

### 3. HTTPS in Production

- Always use HTTPS in production
- Redirect HTTP to HTTPS
- Use valid SSL/TLS certificates

### 4. Environment-Specific Configuration

- Use separate OAuth apps for development and production
- Never use development credentials in production
- Test OAuth flows in development before deploying

### 5. Token Security

- Auth.js handles token security automatically
- Tokens are stored in HTTP-only cookies
- CSRF protection is built-in
- Session tokens are encrypted

## Troubleshooting

### "Invalid callback URL" error

**Problem**: OAuth provider rejects the callback

**Solution**: Ensure your callback URL in the OAuth app settings exactly matches:
- Development: `http://localhost:5173/auth/callback/{provider}`
- Production: `https://yourdomain.com/auth/callback/{provider}`

### "Invalid client secret" error

**Problem**: The client secret is incorrect or missing

**Solution**:
1. Verify the secret is correctly copied from the OAuth provider
2. Check for extra spaces or newlines in your `.env` file
3. Regenerate the secret if needed

### Authentication works locally but not in production

**Problem**: Environment variables not set correctly in production

**Solution**:
1. Ensure all environment variables are set in your production environment
2. Set `AUTH_TRUST_HOST=true`
3. Update callback URLs to use your production domain
4. Verify `AUTH_URL` matches your production URL

### "CSRF token mismatch" error

**Problem**: Cookie settings or domain mismatch

**Solution**:
1. Ensure cookies are enabled in your browser
2. Check that your domain configuration is correct
3. Verify `AUTH_TRUST_HOST=true` in production

### Users redirected to error page after sign-in

**Problem**: Session creation fails

**Solution**:
1. Check server logs for detailed error messages
2. Verify all required environment variables are set
3. Ensure database/session storage is properly configured
4. Check that `AUTH_SECRET` is set and valid

## Additional Resources

- [Auth.js Documentation](https://authjs.dev/)
- [GitHub OAuth Documentation](https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps)
- [Google Identity Platform Documentation](https://developers.google.com/identity/protocols/oauth2)
- [SvelteKit Documentation](https://kit.svelte.dev/docs)

## Support

If you encounter issues not covered in this guide:

1. Check the [GitHub Issues](https://github.com/preamza02/finsim/issues)
2. Create a new issue with:
   - Description of the problem
   - Steps to reproduce
   - Environment details (OS, Node version, etc.)
   - Relevant error messages (redact any secrets!)

---

**Note**: This authentication implementation follows security best practices and uses industry-standard OAuth 2.0. All sensitive data is handled securely by Auth.js.
