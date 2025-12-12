# Quick Start: FinSim Development Workflow

This guide helps you get started with the automated development workflow using GitHub Copilot and CodeRabbitAI.

## 🚀 For Contributors

### Step 1: Create Your Feature Branch
```bash
git checkout -b feature/your-feature-name
```

### Step 2: Write Code with Copilot
- Use GitHub Copilot for code suggestions
- Copilot understands the project context from `.github/copilot-instructions.md`
- For Svelte components, Copilot will suggest shadcn-svelte compatible code
- For TypeScript, it follows the project's type-safety guidelines

### Step 3: Test Locally
```bash
cd app
pnpm install
pnpm run check        # Type checking
pnpm run test         # Unit tests
pnpm run test:e2e     # E2E tests
pnpm run build        # Verify build
```

### Step 4: Create a Pull Request
1. Push your branch to GitHub
2. Create a PR using the template (automatically populated)
3. Fill in the PR details:
   - **Description**: What changed and why
   - **Type of Change**: Select appropriate checkboxes
   - **Testing**: Describe what you tested
   - **Screenshots**: For UI changes

### Step 5: Automated Checks Run
Your PR will automatically trigger:
- ✅ Auto-labeling based on changed files
- ✅ Code quality checks (TypeScript, Svelte)
- ✅ Unit tests
- ✅ E2E tests with Playwright
- ✅ PR validation (description, size)

**Wait for all checks to complete** before requesting review.

### Step 6: CodeRabbitAI Review
- CodeRabbitAI automatically reviews your PR
- It checks for:
  - Code quality issues
  - Security vulnerabilities
  - Best practice violations
  - Potential bugs
- **Respond to feedback** by updating your code

#### Interacting with CodeRabbitAI
```markdown
@coderabbitai summary    # Generate PR summary
@coderabbitai review     # Request detailed review
@coderabbitai help       # Show commands
```

### Step 7: Address Feedback
1. Fix issues identified by automated checks
2. Respond to CodeRabbitAI comments
3. Push updates (checks run automatically)
4. Get human review once automated checks pass

### Step 8: Merge
- Once approved and all checks pass, your PR will be merged
- You'll receive a thank you message 🎉
- Related issues will be auto-closed

## 🛠️ For Maintainers

### Manual Quality Checks
Run checks manually from GitHub Actions tab:
1. Go to **Actions** → **Manual Quality Checks**
2. Click **Run workflow**
3. Select check type:
   - `all`: Complete validation
   - `format`: Code formatting only
   - `test`: Tests only
   - `build`: Build verification only

### PR Review Process
1. Wait for automated checks to complete
2. Review CodeRabbitAI feedback
3. Perform human review focusing on:
   - Business logic correctness
   - User experience
   - Architecture decisions
4. Approve when satisfied

### Branch Protection (Recommended Setup)
Configure in **Settings** → **Branches** → **Branch protection rules** for `main`:
- ✅ Require status checks before merging
- ✅ Require checks: Auto Label PR, Code Quality Checks, Run Tests, PR Validation
- ✅ Require conversation resolution before merging
- ✅ Require linear history

## 📋 Workflow Cheat Sheet

### Local Commands
```bash
# Install dependencies
pnpm install --frozen-lockfile

# Development server
pnpm run dev

# Type checking
pnpm run check
pnpm run check:watch    # Watch mode

# Testing
pnpm run test           # Unit tests
pnpm run test:watch     # Unit tests (watch)
pnpm run test:ui        # Unit tests (UI)
pnpm run test:e2e       # E2E tests
pnpm run test:e2e:ui    # E2E tests (UI)

# Build
pnpm run build
pnpm run preview        # Preview build
```

### PR Checklist
Before submitting a PR, ensure:
- [ ] Code follows project style guidelines
- [ ] All tests pass locally
- [ ] No TypeScript errors
- [ ] Meaningful commit messages
- [ ] PR template filled completely
- [ ] Screenshots included (for UI changes)
- [ ] Related issue linked (e.g., "Fixes #123")

### Common Issues

#### Draft PRs
**Problem**: Workflows not running
**Solution**: Mark PR as "Ready for review"

#### Large PRs
**Problem**: Warning about PR size
**Solution**: 
- Break into smaller, focused PRs
- Add comprehensive documentation
- Ensure thorough testing

#### Test Failures
**Problem**: Tests fail in CI but pass locally
**Solution**:
- Check Node.js version (should be 20)
- Use `pnpm install --frozen-lockfile`
- Review test artifacts in Actions tab

#### CodeRabbitAI Not Responding
**Problem**: No automated review
**Solution**:
- Ensure PR is not a draft
- Check target branch is `main`
- Manually trigger: `@coderabbitai review`

## 🎯 Tips for Success

### 1. Keep PRs Small
- Aim for < 500 line changes
- < 20 files changed
- Single purpose/feature per PR

### 2. Write Good Descriptions
- Explain **what** and **why**
- Include context for reviewers
- Add screenshots for visual changes
- Link related issues

### 3. Use the Right Labels
Labels are auto-applied, but understand them:
- `documentation`: Markdown files
- `ui`: Svelte components, CSS
- `backend`: TypeScript logic
- `tests`: Test files
- `ci-cd`: Workflow changes
- `configuration`: Config files
- `wasm`: Rust/WASM code
- `dependencies`: Package updates

### 4. Respond to Reviews Promptly
- Address CodeRabbitAI feedback quickly
- Ask questions if unsure
- Mark conversations as resolved

### 5. Test Thoroughly
- Write tests for new features
- Update tests for changes
- Test edge cases
- Run E2E tests for UI changes

## 📚 Additional Resources

- [Full Workflow Documentation](.github/WORKFLOWS.md)
- [Copilot Instructions](.github/copilot-instructions.md)
- [CodeRabbit Configuration](.coderabbit.yaml)
- [Main README](../README.md)

## 🤝 Getting Help

- **Issues**: Use [issue templates](ISSUE_TEMPLATE/)
- **Questions**: Open a discussion on GitHub
- **Bugs**: File a [bug report](ISSUE_TEMPLATE/bug_report.md)

---

Happy coding! 🎉
