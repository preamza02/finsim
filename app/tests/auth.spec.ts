import { test, expect } from '@playwright/test';

test.describe('Authentication', () => {
test.describe('Sign In Page', () => {
test('should display sign in page with OAuth providers', async ({ page }) => {
await page.goto('/auth/signin');

// Check page title
await expect(page).toHaveTitle(/Sign In - FinSim/);

// Check heading
await expect(page.getByRole('heading', { name: /Welcome to FinSim/ })).toBeVisible();

// Check GitHub sign in button
await expect(page.getByRole('button', { name: /Continue with GitHub/ })).toBeVisible();

// Check Google sign in button
await expect(page.getByRole('button', { name: /Continue with Google/ })).toBeVisible();

// Check back to home link
await expect(page.getByRole('link', { name: /Back to home/ })).toBeVisible();
});

test('should have working back to home link', async ({ page }) => {
await page.goto('/auth/signin');

// Click back to home
await page.click('text=Back to home');

// Should navigate to home page
await expect(page).toHaveURL('/');
});
});

test.describe('Error Page', () => {
test('should display error page with error message', async ({ page }) => {
await page.goto('/auth/error?error=Test error message');

// Check page title
await expect(page).toHaveTitle(/Authentication Error - FinSim/);

// Check heading
await expect(page.getByRole('heading', { name: /Authentication Error/ })).toBeVisible();

// Check error message
await expect(page.getByText('Test error message')).toBeVisible();

// Check Try Again button
await expect(page.getByRole('link', { name: /Try Again/ })).toBeVisible();

// Check Back to Home button
await expect(page.getByRole('link', { name: /Back to Home/ })).toBeVisible();
});

test('should have working navigation buttons', async ({ page }) => {
await page.goto('/auth/error');

// Test Back to Home button
const homeButton = page.getByRole('link', { name: /Back to Home/ });
await expect(homeButton).toHaveAttribute('href', '/');

// Test Try Again button
const tryAgainButton = page.getByRole('link', { name: /Try Again/ });
await expect(tryAgainButton).toHaveAttribute('href', '/auth/signin');
});
});

test.describe('Header Authentication State', () => {
test('should show sign in button when not authenticated', async ({ page }) => {
// Note: This test assumes AUTH_ENABLED is true
// If AUTH_ENABLED is false, it will show "Get Started" instead
await page.goto('/');

// Check if either Sign In or Get Started is visible
const signInVisible = await page.getByRole('link', { name: /Sign In/i }).isVisible().catch(() => false);
const getStartedVisible = await page.getByRole('link', { name: /Get Started/i }).isVisible().catch(() => false);

expect(signInVisible || getStartedVisible).toBeTruthy();
});
});

test.describe('Protected Routes', () => {
test('should redirect to signin when accessing dashboard without auth', async ({ page }) => {
// Try to access dashboard
await page.goto('/dashboard');

// Should be redirected to signin
await expect(page).toHaveURL('/auth/signin');
});
});

test.describe('Authentication Disabled Mode', () => {
test.skip('should hide auth UI when authentication is disabled', async ({ page }) => {
// This test is skipped by default as it requires AUTH_ENABLED=false
// To run this test, set AUTH_ENABLED=false in your test environment
await page.goto('/');

// Should not show Sign In button
await expect(page.getByRole('link', { name: /Sign In/ })).not.toBeVisible();

// Should show Get Started button
await expect(page.getByRole('link', { name: /Get Started/ })).toBeVisible();
});
});
});
