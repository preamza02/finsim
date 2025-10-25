# Contributing to FinSim

Thank you for your interest in contributing to FinSim! This document provides guidelines and information for contributors.

## 🌟 Ways to Contribute

There are many ways to contribute to FinSim:

- **Code**: Implement features, fix bugs, improve performance
- **Documentation**: Write guides, improve existing docs, create tutorials
- **Design**: Create UI/UX designs, icons, graphics
- **Testing**: Write tests, report bugs, test new features
- **Ideas**: Suggest features, provide feedback, participate in discussions
- **Community**: Help other users, answer questions, spread the word

## 🚀 Getting Started

### 1. Fork and Clone

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/finsim.git
   cd finsim
   ```

### 2. Set Up Development Environment

Detailed setup instructions will be added as the codebase develops. Check back soon!

### 3. Create a Branch

Create a branch for your work:
```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-bug-fix
```

Use descriptive branch names:
- `feature/add-monte-carlo-simulation`
- `fix/tax-calculation-bug`
- `docs/update-api-reference`
- `refactor/improve-data-model`

## 📝 Contribution Guidelines

### Code Style

- Follow existing code style and conventions
- Write clear, self-documenting code
- Add comments for complex logic
- Keep functions small and focused
- Use meaningful variable and function names

### Commit Messages

Write clear, descriptive commit messages:

```
Add Monte Carlo simulation for retirement planning

- Implement basic Monte Carlo algorithm
- Add configurable parameters (iterations, variance)
- Include unit tests for edge cases
- Update documentation
```

Format:
- Use present tense ("Add feature" not "Added feature")
- First line: brief summary (50 chars or less)
- Blank line, then detailed description if needed
- Reference issues: "Fixes #123" or "Relates to #456"

### Testing

- Write tests for new features
- Ensure existing tests pass
- Aim for good test coverage
- Include both unit and integration tests when appropriate

### Documentation

- Update relevant documentation for your changes
- Add JSDoc/docstrings for new functions and classes
- Update README.md if you add new features
- Create or update user guides as needed

## 🔍 Pull Request Process

1. **Before Starting**: Check existing issues and PRs to avoid duplication
2. **Create an Issue**: For significant changes, create an issue first to discuss
3. **Make Your Changes**: Follow the guidelines above
4. **Test Thoroughly**: Run all tests and verify your changes work
5. **Update Documentation**: Ensure docs reflect your changes
6. **Submit PR**: Create a pull request with a clear description

### PR Description Template

```markdown
## Description
Brief description of what this PR does

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Refactoring
- [ ] Performance improvement

## Related Issue
Fixes #(issue number)

## Changes Made
- Change 1
- Change 2
- Change 3

## Testing
- [ ] Unit tests added/updated
- [ ] Integration tests added/updated
- [ ] Manual testing performed

## Screenshots (if applicable)
Add screenshots for UI changes

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] Tests added/updated and passing
- [ ] No new warnings generated
```

## 🐛 Reporting Bugs

When reporting bugs, include:

- **Description**: Clear description of the bug
- **Steps to Reproduce**: Detailed steps to reproduce the issue
- **Expected Behavior**: What you expected to happen
- **Actual Behavior**: What actually happened
- **Screenshots**: If applicable
- **Environment**: Browser, OS, version
- **Additional Context**: Any other relevant information

## 💡 Suggesting Features

When suggesting features:

1. Check if the feature has already been suggested
2. Create a detailed issue with:
   - Clear description of the feature
   - Use case and benefits
   - Possible implementation approach
   - Any relevant examples or mockups

## 📋 Development Priorities

### High Priority
- Core financial calculations (income, expenses, assets, debts)
- Data model and storage
- Basic UI for data entry
- Projection algorithms

### Medium Priority
- Advanced simulations (Monte Carlo, sensitivity analysis)
- Visualization and charts
- Import/export functionality
- Tax calculations

### Low Priority
- Mobile applications
- Browser extensions
- Third-party integrations
- AI features

## 🤝 Code Review

All submissions require review. We use GitHub pull requests for this purpose:

- Be respectful and constructive in reviews
- Focus on the code, not the person
- Explain your reasoning
- Be open to feedback
- Respond to review comments promptly

## 📚 Resources

### Financial Planning Concepts
- Understanding retirement planning
- Investment strategies and portfolio theory
- Tax optimization
- Monte Carlo simulations in finance

### Technical Resources
- Project architecture: [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)
- Data models: [spec/DATA_MODEL.md](spec/DATA_MODEL.md)
- API reference: [docs/API.md](docs/API.md)

## 🎯 First-Time Contributors

New to open source? Here are some good first issues:

- Documentation improvements
- Adding tests
- Fixing typos
- Small bug fixes
- UI/UX enhancements

Look for issues labeled `good-first-issue` or `help-wanted`.

## 📜 Code of Conduct

Please read and follow our [Code of Conduct](CODE_OF_CONDUCT.md). We are committed to providing a welcoming and inclusive environment for all contributors.

## ⚖️ License

By contributing to FinSim, you agree that your contributions will be licensed under the GNU Affero General Public License v3.0.

## 💬 Questions?

- Open a discussion on GitHub Discussions
- Ask in relevant issues or PRs
- Check existing documentation

## 🙏 Thank You!

Your contributions make FinSim better for everyone. We appreciate your time and effort!

---

*This contributing guide will be updated as the project evolves. Check back regularly for updates.*
