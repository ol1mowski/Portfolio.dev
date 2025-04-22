# Husky Git Hooks

This folder contains the Husky configuration that allows running npm scripts in git hooks.

## Installation

Husky will be installed automatically during dependency installation:

```bash
npm install
```

## Available hooks

- **pre-commit**: Runs lint-staged, which checks and formats files before committing
- **pre-push**: Runs unit tests before pushing code
- **commit-msg**: Validates commit message format

## How it works

1. Before each commit, lint-staged runs ESLint and Prettier for changed files
2. Before each push, unit tests are executed
3. Each commit message is checked against the conventional commit format

## How to skip hooks

If you need to bypass hooks, you can use the `--no-verify` flag:

```bash
git commit --no-verify -m "Your message"
git push --no-verify
``` 