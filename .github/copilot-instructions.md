# Copilot Coding Agent Instructions for FinSim

## Repository Overview

**FinSim** is an open-source financial simulation application. It aims to provide users with powerful financial planning and projection tools for personal finance management.

**Project Status:** Early development phase - project setup and AI tooling configuration in progress.

## Project Goals

- Financial simulation and projection capabilities
- Personal finance planning tools

## Tech Stack

- **Framework:** Svelte 5 (with TypeScript) with TailwindCSS for UI components
- **UI Components:** shadcn-svelte@0.14 (with Tailwind v4)
- **Authentication:** BetterAuth (OAuth 2.0 with GitHub and Google)
- **Language:** TypeScript and Rust (for performance-critical components like simulation engine)
- **Package Manager:** pnpm
- **Testing:** Playwright for end-to-end testing
- **Build Tool:** Vite 7
- **Version Control:** Git with GitHub

## Repository Structure

```
finsim/
├── app/                   # Application source code
├── .coderabbit.yaml    # CodeRabbit configuration
├── .github/
│   ├── agents/           # Copilot agent configurations
│   ├── copilot-instructions.md  # This file
│   └── ISSUE_TEMPLATE/   # Issue templates
│       ├── adding-document.md
│       ├── bug_report.md
│       └── feature_request.md
├── LICENSE               # AGPL-3.0 License
└── README.md             # Project documentation
```

## Development Guidelines

### UI 

- Using Svelte 5 with TailwindCSS v4 for building responsive and accessible user interfaces
- Design everything with responsiveness in mind
- Follow accessibility best practices (ARIA roles, keyboard navigation, color contrast)
- Use shadcn-svelte components as the basis for all UI components
- shadcn-svelte components are located in `src/lib/components/ui/`
- **ALWAYS take screenshots of UI changes before committing** - Use Playwright to capture the visual state
- **ALWAYS verify the build succeeds** before committing - Run `pnpm build` to ensure no errors
- All marketing page components use shadcn-svelte Button, Card, and Badge components
- For charts and data visualization, use shadcn-svelte first, but if not applicable consider libraries like ECharts
- Use lucide-svelte for icons

### TailwindCSS v4 Important Notes

**CRITICAL:** TailwindCSS v4 has breaking changes from v3:
- **DO NOT use `@apply` with custom CSS properties** - It will cause build failures
- Use `@import "tailwindcss";` instead of `@tailwind` directives
- Use `@theme` directive for defining custom theme values
- Convert utility classes to plain CSS when needed
- CSS-based configuration instead of JavaScript config
- The `tailwind.config.js` file is kept for backward compatibility but is not used by v4
- Reference: See `app/src/app.css` for the correct v4 implementation

### Simulation Engine
- Implement performance-critical components in Rust, compiled to WebAssembly
- Ensure accurate financial calculations and simulations
- Optimize for performance and low latency
- The current status is not Finish yet until we start implementing it (delete this line when you finish)

### Project Structure

- This is monorepo structure
- Separate concerns into different directories (e.g., `app/` for application code)
+- In svelte application they are 1 main group right now which is `(marketing)` for landing page and everything related to marketing they will be 2 more groups later for app and onboarding (edit this if you add these)

### Authentication

- Authentication is implemented using Auth.js with OAuth 2.0
- Supported providers: GitHub and Google
- Authentication can be disabled for self-hosting by setting `AUTH_ENABLED=false`
- Auth configuration is in `src/lib/auth/config.ts`
- Session management is handled via hooks in `src/hooks.server.ts`
- Protected routes redirect to `/auth/signin` when user is not authenticated
- See `docs/AUTHENTICATION.md` for detailed setup instructions

### Code Quality

- Write clean, maintainable, and well-documented code
- Follow consistent naming conventions
- Include appropriate error handling
- Add comments for complex logic
- try to follow best practices for the chosen tech stack
- Use linters and formatters (e.g., ESLint, Prettier)

### Testing

- Write end-to-end tests for user flows using Playwright
- E2e tests are located in `tests/` directory
- Test configuration is in `playwright.config.ts`
- Run tests with `pnpm test:e2e` or `pnpm test:e2e:ui`
- Ensure tests pass before submitting PRs
- Aim for good test coverage of critical user paths

### Documentation

- Update README when adding new features
- Update `.github/copilot-instructions.md` as needed every time you make change that affects project structure or processes
- Document APIs and configuration options
- Keep this instruction file updated with project changes