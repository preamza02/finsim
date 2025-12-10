# Known Build Issues

## TailwindCSS v4 Configuration Issue

### Problem
The application currently fails to build due to a TailwindCSS v4 configuration issue:

```
Cannot apply unknown utility class `border-border`
```

This error occurs in `/app/src/app.css` at line 54.

### Root Cause
The project was recently migrated to TailwindCSS v4, which has breaking changes:
1. The PostCSS plugin moved to `@tailwindcss/postcss` (✅ Fixed in this PR)
2. Some utility classes and the `@apply` directive behavior changed
3. Custom CSS properties like `--border` may not work with `@apply` in v4

### Current Status
- ❌ Build fails
- ❌ E2E tests cannot run
- ✅ Type checking passes (auth-related code)
- ✅ Authentication code is syntactically correct

### Solution
The `border-border` utility needs to be updated for Tailwind v4 compatibility or replaced with standard Tailwind utilities. This is a pre-existing issue from the Svelte 5 migration and not related to the authentication implementation.

### Workaround for Testing Auth
To test authentication features without fixing the Tailwind issue:
1. Comment out line 54 in `app/src/app.css`: `@apply border-border;`
2. Run the dev server or tests
3. Authentication pages should render correctly

### Related Issues
- Affects: All components that rely on the base CSS
- Does not affect: Authentication logic, OAuth flows, or TypeScript types
