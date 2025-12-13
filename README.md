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
- 🔒 OAuth authentication (GitHub & Google)

## Project Status

🚧 **Early Development** - We are currently setting up the project infrastructure, AI tooling, and documentation.

## Contributing

Contributions are welcome! Please see our issue templates for:
- [Feature Requests](.github/ISSUE_TEMPLATE/feature_request.md)
- [Bug Reports](.github/ISSUE_TEMPLATE/bug_report.md)
- [Documentation](.github/ISSUE_TEMPLATE/adding-document.md)

## Development

### Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/preamza02/finsim.git
   cd finsim/app
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up authentication** (optional for development)
   
   See the [Authentication Setup Guide](docs/AUTHENTICATION.md) for detailed instructions on configuring GitHub and Google OAuth.
   
   Quick start:
   ```bash
   cp .env.example .env
   # Edit .env and add your OAuth credentials
   ```
   
   To disable authentication for local development:
   ```env
   AUTH_ENABLED=false
   PUBLIC_AUTH_ENABLED=false
   ```

4. **Run the development server**
   ```bash
   pnpm dev
   ```

5. **Build for production**
   ```bash
   pnpm build
   ```

### Tech Stack

- **Framework**: SvelteKit with TypeScript
- **UI Components**: shadcn-svelte with TailwindCSS
- **Authentication**: Auth.js (OAuth 2.0)
- **Package Manager**: pnpm
- **Testing**: Playwright (E2E), Vitest (Unit)

### Authentication

FinSim supports OAuth authentication with GitHub and Google. Authentication can be disabled for self-hosted deployments.

📚 **[Read the Authentication Setup Guide](docs/AUTHENTICATION.md)** for detailed instructions on:
- Setting up GitHub OAuth
- Setting up Google OAuth
- Configuring environment variables
- Disabling authentication for self-hosting
- Security best practices

### AI-Powered Development

This project uses AI tools to enhance development:
- **GitHub Copilot:** Code suggestions and completion
- **CodeRabbit:** Automated code reviews

## License

This project is licensed under the GNU Affero General Public License v3.0 (AGPL-3.0). See the [LICENSE](./LICENSE) file for details.

## Acknowledgments

- Built with ❤️ using Arch BTW
