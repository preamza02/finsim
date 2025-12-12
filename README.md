<p align="center">
    <h1 align="center">FinSim</h1>
    <p align="center">
        An open-source financial simulation and projection platform.
    </p>
</p>

<div align="center">

[![License: AGPL-3.0](https://img.shields.io/badge/License-AGPL--3.0-blue.svg)](https://opensource.org/licenses/AGPL-3.0)
[![GitHub issues](https://img.shields.io/github/issues/preamza02/finsim)](https://github.com/preamza02/finsim/issues)
[![GitHub stars](https://img.shields.io/github/stars/preamza02/finsim?style=social)](https://github.com/preamza02/finsim/stargazers)

</div>

## About

FinSim is an open-source financial simulation platform providing powerful financial simulation and projection tools for personal finance planning.

> **Note:** This project is in early development. Features and documentation will be added as the project progresses.

## Planned Features

- 📊 Financial projections and simulations
- 💰 Investment portfolio analysis
- 🏠 Retirement planning tools
- 📈 Scenario modeling and comparison
- 🔐 Privacy-focused (self-hostable)
- 🌐 Open-source and community-driven

## Project Status

🚧 **Early Development** - We are currently setting up the project infrastructure, AI tooling, and documentation.

## Contributing

Contributions are welcome! 

👉 **New to the project?** Start with our [Quick Start Workflow Guide](.github/QUICKSTART_WORKFLOW.md)

Please see our issue templates for:
- [Feature Requests](.github/ISSUE_TEMPLATE/feature_request.md)
- [Bug Reports](.github/ISSUE_TEMPLATE/bug_report.md)
- [Documentation](.github/ISSUE_TEMPLATE/adding-document.md)

### Pull Request Process

1. **Create a PR** using our [PR template](.github/pull_request_template.md)
2. **Automated checks** will run automatically:
   - Code quality checks (Svelte type checking)
   - Unit and E2E tests
   - Auto-labeling based on file changes
   - PR validation (size, description quality)
3. **CodeRabbitAI** will automatically review your PR
4. **Address feedback** from automated checks and reviewers
5. Once approved and all checks pass, your PR will be merged!

### Working with CodeRabbitAI

CodeRabbitAI is configured to automatically review all PRs. You can interact with it using:

- `@coderabbitai summary` - Generate an AI summary of your changes
- `@coderabbitai review` - Request a detailed code review
- `@coderabbitai help` - Show available commands

The bot is configured with an "assertive" profile and will request changes when issues are found. See [.coderabbit.yaml](.coderabbit.yaml) for configuration details.

## Development

### Getting Started

> **Coming Soon:** Development setup instructions will be added once the tech stack is finalized.

### AI-Powered Development

This project leverages AI tools to enhance development productivity:

#### GitHub Copilot
- **Code suggestions** and autocompletion
- **UI component generation** for Svelte/TailwindCSS
- **Test scaffolding** for unit and E2E tests
- See [.github/copilot-instructions.md](.github/copilot-instructions.md) for project-specific guidelines

#### CodeRabbitAI  
- **Automated code reviews** on every PR
- **Security vulnerability detection**
- **Best practice suggestions**
- **Learning from project patterns**
- Configuration: [.coderabbit.yaml](.coderabbit.yaml)

### GitHub Actions Workflows

Our CI/CD pipeline automates common tasks:

#### PR Automation (`pr-automation.yml`)
Runs automatically on all PRs (except drafts):
- 🏷️ **Auto-labeling** based on changed files
- ✅ **Code quality checks** (Svelte check, type checking)
- 🧪 **Automated testing** (unit tests, E2E tests)
- 📊 **PR validation** (size, description quality)
- ✅ **Success notifications** when all checks pass

#### Manual Checks (`manual-checks.yml`)
Run on-demand quality checks:
```bash
# Trigger from GitHub Actions tab -> Manual Quality Checks -> Run workflow
# Choose: all, format, test, or build
```

Options:
- **all**: Run all checks
- **format**: Code formatting and type checking
- **test**: Unit and E2E tests  
- **build**: Production build verification

#### Post-Merge Actions (`post-merge.yml`)
Runs after PR is merged:
- 🎉 **Thank contributors** with automated message
- 🔗 **Auto-close linked issues**
- 📋 **Update project boards** (if configured)

### Workflow Best Practices

1. **Keep PRs focused**: Smaller PRs are easier to review and more likely to pass checks quickly
2. **Use the PR template**: Helps reviewers understand your changes and CodeRabbitAI provide better feedback
3. **Wait for automated checks**: Let the workflows complete before requesting human review
4. **Respond to CodeRabbitAI**: Address automated feedback promptly
5. **Use manual checks**: Run `manual-checks.yml` workflow to verify changes before pushing

## License

This project is licensed under the GNU Affero General Public License v3.0 (AGPL-3.0). See the [LICENSE](./LICENSE) file for details.

## Acknowledgments

- Built with ❤️ using Arch BTW
