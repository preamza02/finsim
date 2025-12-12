# Copilot Coding Agent Instructions for FinSim

## Repository Overview

**FinSim** is an open-source financial simulation application. It aims to provide users with powerful financial planning and projection tools for personal finance management.

**Project Status:** Early development phase - project setup and AI tooling configuration in progress.

## Project Goals

- Financial simulation and projection capabilities
- Personal finance planning tools

## Tech Stack

- **Framework:** Svelte 5 (with TypeScript) with TailwindCSS for UI components
- **UI Components:** shadcn-svelte@0.14 (with Tailwind v3)
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
│   ├── workflows/        # GitHub Actions workflows
│   │   ├── pr-automation.yml      # PR checks and automation
│   │   ├── manual-checks.yml      # Manual quality checks
│   │   └── post-merge.yml         # Post-merge notifications
│   ├── copilot-instructions.md    # This file
│   ├── labeler.yml       # Auto-labeling configuration
│   ├── pull_request_template.md   # PR template
│   ├── WORKFLOWS.md      # Workflow documentation
│   └── ISSUE_TEMPLATE/   # Issue templates
│       ├── adding-document.md
│       ├── bug_report.md
│       └── feature_request.md
├── LICENSE               # AGPL-3.0 License
└── README.md             # Project documentation
```

## Development Guidelines

### UI 

- Using Svelte 5 with TailwindCSS for building responsive and accessible user interfaces
- Design everything with responsiveness in mind
- Follow accessibility best practices (ARIA roles, keyboard navigation, color contrast)
- Use shadcn-svelte components as the basis for all UI components
- shadcn-svelte components are located in `src/lib/components/ui/`
- All marketing page components use shadcn-svelte Button, Card, and Badge components
- For charts and data visualization, use shadcn-svelte first, but if not applicable consider libraries like ECharts
- Use lucide-svelte for icons

### Simulation Engine
- Implement performance-critical components in Rust, compiled to WebAssembly
- Ensure accurate financial calculations and simulations
- Optimize for performance and low latency
- The current status is not Finish yet until we start implementing it (delete this line when you finish)

### Project Structure

- This is monorepo structure
- Separate concerns into different directories (e.g., `app/` for application code)
+- In svelte application they are 1 main group right now which is `(marketing)` for landing page and everything related to marketing they will be 2 more groups later for app and onboarding (edit this if you add these)

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

## Git Workflow

1. Create feature branches from `main`
2. Make small, focused commits
3. Write clear commit messages
4. Use the PR template (`.github/pull_request_template.md`) when submitting PRs
5. Ensure all automated checks pass before merging
6. Wait for CodeRabbitAI review and address feedback

### GitHub Actions Workflows

The repository includes automated workflows for code quality and PR management:

#### PR Automation (`pr-automation.yml`)
- **Triggers**: Automatically on PR events (opened, reopened, synchronize, ready_for_review)
- **Features**:
  - Auto-labels PRs based on file changes (configured in `.github/labeler.yml`)
  - Runs code quality checks (Svelte check)
  - Executes unit and E2E tests
  - Validates PR descriptions and size
  - Posts success notification when all checks pass
- **Note**: Skips draft PRs

#### Manual Quality Checks (`manual-checks.yml`)
- **Triggers**: Manual via GitHub Actions UI
- **Options**: Run all checks, format only, test only, or build only
- **Use Cases**: Pre-commit validation, debugging, isolated testing

#### Post-Merge Actions (`post-merge.yml`)
- **Triggers**: When PR is merged to `main`
- **Features**:
  - Thanks contributors
  - Auto-closes linked issues (e.g., "Fixes #123")
  - Can update project boards (if configured)

For detailed workflow documentation, see [`.github/WORKFLOWS.md`](.github/WORKFLOWS.md).

## Issue Templates

Use the appropriate issue template when creating new issues:

- **Feature Request:** For suggesting new features
- **Bug Report:** For reporting bugs
- **Adding Document:** For documentation additions

## Trust These Instructions

These instructions have been validated. Only search for additional information if:
- The instructions appear incomplete for your specific task
- A command fails unexpectedly
- You need to modify a file not covered here

## Updating Instructions

If you make modifications that affect:
- Project structure
- Build/test/deployment processes
- Documentation conventions

Please update this instruction file and other relevant documentation.
