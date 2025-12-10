import { test, expect } from '@playwright/test';

test.describe('Landing Page', () => {
  test('should load homepage successfully', async ({ page }) => {
    await page.goto('/');
    
    // Check that the page title is correct
    await expect(page).toHaveTitle(/FinSim/);
    
    // Check that main heading is visible
    await expect(page.getByRole('heading', { name: /Your Life Operating System for Financial Freedom/ })).toBeVisible();
  });

  test('should have working navigation', async ({ page }) => {
    await page.goto('/');
    
    // Check that header is visible
    await expect(page.getByRole('banner')).toBeVisible();
    
    // Check that navigation links are present
    await expect(page.getByRole('link', { name: 'Features' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Documentation' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Pricing' })).toBeVisible();
  });

  test('should display features section', async ({ page }) => {
    await page.goto('/');
    
    // Check that features section is visible
    await expect(page.getByRole('heading', { name: 'Everything You Need for Financial Planning' })).toBeVisible();
    
    // Check for specific features
    await expect(page.getByText('Retirement Projections')).toBeVisible();
    await expect(page.getByText('Monte Carlo Simulations')).toBeVisible();
    await expect(page.getByText('Tax Optimization')).toBeVisible();
  });

  test('should display pricing section', async ({ page }) => {
    await page.goto('/');
    
    // Check that pricing section is visible
    await expect(page.getByRole('heading', { name: 'Choose Your Plan' })).toBeVisible();
    
    // Check for pricing tabs
    await expect(page.getByRole('button', { name: /Cloud/ })).toBeVisible();
    await expect(page.getByRole('button', { name: /Open Source/ })).toBeVisible();
  });

  test('should display FAQ section', async ({ page }) => {
    await page.goto('/');
    
    // Check that FAQ section is visible
    await expect(page.getByRole('heading', { name: 'Frequently Asked Questions' })).toBeVisible();
  });

  test('should have CTA section', async ({ page }) => {
    await page.goto('/');
    
    // Check that CTA is visible
    await expect(page.getByRole('heading', { name: /Ready to Take Control of Your Financial Future/ })).toBeVisible();
    
    // Check that GitHub link is present
    await expect(page.getByRole('link', { name: /Start on GitHub/ })).toBeVisible();
  });
});
