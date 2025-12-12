# GitHub Actions Workflows Documentation

This document provides detailed information about the automated workflows in the FinSim repository.

## Table of Contents

- [Overview](#overview)
- [Workflows](#workflows)
- [Setup and Configuration](#setup-and-configuration)
- [Troubleshooting](#troubleshooting)

## Overview

FinSim uses GitHub Actions to automate repetitive tasks, ensure code quality, and streamline the development process. The workflows are designed to work seamlessly with:

- **GitHub Copilot**: For AI-assisted code writing
- **CodeRabbitAI**: For automated code reviews

## Workflows

### 1. PR Automation (`pr-automation.yml`)

**Trigger**: Automatically on PR events (opened, reopened, synchronize, ready_for_review)

**Purpose**: Automate common PR tasks to save time and ensure consistency.

#### Jobs

##### Auto-Label
- Automatically applies labels based on changed files
- Configuration: `.github/labeler.yml`
- Labels include: `documentation`, `ui`, `backend`, `tests`, `ci-cd`, `configuration`, `wasm`, `dependencies`

##### Code Quality
- Runs Svelte type checking (`pnpm run check`)
- Validates TypeScript types
- Comments on PR if checks fail

##### Test
- Runs unit tests (`pnpm run test`)
- Runs E2E tests with Playwright (`pnpm run test:e2e`)
- Uploads test results as artifacts
- Comments on PR if tests fail

##### PR Validation
- Checks PR description length (minimum 50 characters)
- Warns on large PRs (>500 line changes or >20 files)
- Provides suggestions for improvement

##### All Checks Passed
- Runs only if all previous jobs succeed
- Posts success message
- Signals PR is ready for review

#### Skipping Workflow
The workflow skips draft PRs. To enable:
1. Mark your PR as "Ready for review"

### 2. Manual Quality Checks (`manual-checks.yml`)

**Trigger**: Manual via GitHub Actions UI

**Purpose**: Run specific checks on-demand without creating a PR.

#### Usage

1. Go to **Actions** tab in GitHub
2. Select **Manual Quality Checks**
3. Click **Run workflow**
4. Select check type:
   - `all`: All checks (format, test, build)
   - `format`: Code formatting and type checking
   - `test`: Unit and E2E tests
   - `build`: Production build
5. Optionally specify working directory (default: `app`)

#### Use Cases

- Verify changes locally before pushing
- Test build process
- Debug failing tests in isolation
- Validate formatting before committing

### 3. Post-Merge Actions (`post-merge.yml`)

**Trigger**: When a PR is merged to `main`

**Purpose**: Provide feedback and maintain project organization.

#### Jobs

##### Post-Merge Notification
- Thanks the contributor
- Confirms successful merge
- Builds team morale

##### Close Related Issues
- Automatically finds issue references in PR body
- Adds comment to linked issues
- Supports keywords: `closes`, `fixes`, `resolves`

Example PR description:
```markdown
This PR fixes #123 and resolves #456
```

##### Update Project Board
- Placeholder for project board integration
- Customize based on your project management setup

## Setup and Configuration

### Prerequisites

1. **Repository Settings**
   - Enable GitHub Actions in repository settings
   - Grant workflow permissions:
     - Settings → Actions → General → Workflow permissions
     - Select "Read and write permissions"
     - Enable "Allow GitHub Actions to create and approve pull requests"

2. **Branch Protection** (Recommended)
   - Protect `main` branch
   - Require status checks before merging:
     - Auto Label PR
     - Code Quality Checks
     - Run Tests
     - PR Validation

### Labeler Configuration

Edit `.github/labeler.yml` to customize auto-labeling:

```yaml
# Example: Add new label
performance:
  - changed-files:
    - any-glob-to-any-file: ['**/*.perf.ts']
```

### CodeRabbitAI Integration

CodeRabbitAI is configured via `.coderabbit.yaml`:

- **Auto-review**: Enabled for non-draft PRs on `main`
- **Profile**: Assertive (will request changes)
- **Review status**: Enabled
- **High-level summary**: Available via `@coderabbitai summary`

To modify CodeRabbitAI behavior, edit `.coderabbit.yaml`.

### Secrets and Tokens

The workflows use `GITHUB_TOKEN` automatically provided by GitHub Actions. No additional secrets are required unless you add custom integrations.

## Troubleshooting

### Workflow Not Running

**Problem**: Workflow doesn't trigger on PR

**Solutions**:
1. Ensure PR is not a draft (mark as "Ready for review")
2. Check PR target branch is `main`
3. Verify GitHub Actions are enabled
4. Check workflow permissions in repository settings

### Test Failures

**Problem**: Tests pass locally but fail in CI

**Solutions**:
1. Check Node.js version matches (workflow uses Node 20)
2. Verify pnpm version consistency (workflow uses pnpm 9)
3. Review test artifacts in Actions tab
4. Check for environment-specific issues
5. Run `pnpm install --frozen-lockfile` locally

### Labeler Not Working

**Problem**: Labels not applied automatically

**Solutions**:
1. Verify `.github/labeler.yml` syntax
2. Check file paths in labeler configuration
3. Ensure workflow has write permissions for PRs
4. Validate label names exist in repository

### CodeRabbitAI Not Reviewing

**Problem**: CodeRabbitAI doesn't comment on PR

**Solutions**:
1. Check `.coderabbit.yaml` configuration
2. Ensure PR targets correct branch (`main`)
3. Verify PR is not a draft
4. Try manually triggering: `@coderabbitai review`
5. Check CodeRabbitAI app is installed on repository

### Build Failures

**Problem**: Build fails in workflow but works locally

**Solutions**:
1. Check working directory configuration
2. Verify all dependencies are in `package.json`
3. Review build logs in Actions artifacts
4. Test with `pnpm run build` locally
5. Check for missing environment variables

### Permission Errors

**Problem**: Workflow fails with permission errors

**Solutions**:
1. Update workflow permissions in repository settings
2. Grant "Read and write permissions" to workflows
3. Enable "Allow GitHub Actions to create and approve pull requests"
4. Check individual workflow permission blocks

## Extending Workflows

### Adding New Checks

To add a new check to PR automation:

1. Edit `.github/workflows/pr-automation.yml`
2. Add new job following existing pattern:

```yaml
new-check:
  name: New Check
  runs-on: ubuntu-latest
  if: github.event.pull_request.draft == false
  steps:
    - name: Checkout code
      uses: actions/checkout@v4
    # Add your check steps
```

3. Add job to `needs` list in `all-checks-passed` job

### Adding New Labels

1. Create label in GitHub repository (Settings → Labels)
2. Edit `.github/labeler.yml`:

```yaml
new-label:
  - changed-files:
    - any-glob-to-any-file: ['path/to/files/**/*']
```

### Custom Notifications

To add custom notifications (e.g., Slack, Discord):

1. Add webhook URL as repository secret
2. Add notification step to workflow:

```yaml
- name: Notify Team
  uses: action/webhook@v1
  with:
    url: ${{ secrets.WEBHOOK_URL }}
    # ... notification config
```

## Best Practices

1. **Keep workflows fast**: Optimize test suites and build processes
2. **Use caching**: Leverage pnpm cache for faster installs
3. **Fail fast**: Put quick checks first
4. **Clear feedback**: Provide actionable error messages
5. **Regular updates**: Keep actions up to date
6. **Monitor usage**: Check Actions usage in repository Insights

## Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [CodeRabbitAI Documentation](https://docs.coderabbit.ai/)
- [GitHub Copilot Documentation](https://docs.github.com/en/copilot)
- [Playwright Documentation](https://playwright.dev/)
- [Svelte Documentation](https://svelte.dev/)

## Support

For issues with workflows:
1. Check [Troubleshooting](#troubleshooting) section
2. Review workflow logs in Actions tab
3. Open an issue using the [Bug Report template](.github/ISSUE_TEMPLATE/bug_report.md)
4. Tag with `ci-cd` label
