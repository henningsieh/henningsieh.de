# Lighthouse Runner

Run Lighthouse audits against any URL with a single command.

## Usage

```bash
./scripts/lighthouse.sh <url> [output-filename]
```

## Examples

```bash
# Live production URL → lighthouse-report.html
./scripts/lighthouse.sh https://lighthouse.henningsieh.de/

# Local dev server → local-lighthouse-report.html
./scripts/lighthouse.sh http://localhost:3000/ local-lighthouse-report.html

# Any URL with custom filename
./scripts/lighthouse.sh https://example.com/ example.html
```

## Requirements

- Google Chrome (headless) at `/usr/bin/google-chrome`
- Lighthouse CLI installed globally
- Chrome debug port 9222 (auto-started if not running)
