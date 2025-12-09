# Copilot Coding Agent Instructions for FinSim

## Repository Overview

**FinSim** is an open-source financial simulation application. It aims to provide users with powerful financial planning and projection tools for personal finance management.

**Project Status:** Early development phase - project setup and AI tooling configuration in progress.

## Project Goals

- Financial simulation and projection capabilities
- Personal finance planning tools

## Tech Stack (Planned)

> **Note:** Tech stack will be defined as the project develops. Update this section when the implementation begins.

- **Framework:** Svelte5 (with TypeScript) with TailwindCSS for UI components
- **Language:** TypeScript and Rust (for performance-critical components like simulation engine)
- **Package Manager:** pnpm
- **Testing:** Vitest for unit testing, Playwright for end-to-end testing
- **Build Tool:** Vite
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

- Using Svelte5 with TailwindCSS for building responsive and accessible user interfaces
- Design Everything with Responsiveness in mind
- Follow accessibility best practices (ARIA roles, keyboard navigation, color contrast)
- Use shadcn-svelte components as a basic for every design
- For charts and data visualization, using shadcn-svelte first but if it not applicable consider libraries like ECharts

### Simulation Engine
- Implement performance-critical components in Rust, compiled to WebAssembly
- Ensure accurate financial calculations and simulations
- Optimize for performance and low latency
- The current status is not Finish yet until we start implementing it (delete this line when you finish)

### Project Structure

- This is monorepo structure
- Separate concerns into different directories (e.g., `app/` for application code)
- In svelte application they are 1 main group right now which is `(marketing)` for landing page and everything related to marketing they gonna be 2 more groups later for app and onboarding (edit this if you add these)

### Code Quality

- Write clean, maintainable, and well-documented code
- Follow consistent naming conventions
- Include appropriate error handling
- Add comments for complex logic
- try to follow best practices for the chosen tech stack
- Use linters and formatters (e.g., ESLint, Prettier)

### Testing

- Write unit tests for new functionality everty time
- Write integration tests for critical paths
- Write end-to-end tests for user flows
- Use Vitest for unit tests and Playwright for end-to-end tests
- Ensure tests pass before submitting PRs
- Aim for good test coverage

### Documentation

- Update README when adding new features
- Update `.github/copilot-instructions.md` as needed every time you make change that affects project structure or processes
- Document APIs and configuration options
- Keep this instruction file updated with project changes

## Git Workflow

1. Create feature branches from `main`
2. Make small, focused commits
3. Write clear commit messages
4. Submit PRs for review
5. Ensure all checks pass before merging

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
