#!/usr/bin/env bash
set -euo pipefail

# Usage: ./scripts/lighthouse.sh <url> [output-filename]
#
# Examples:
#   ./scripts/lighthouse.sh https://lighthouse.henningsieh.de/
#   ./scripts/lighthouse.sh http://localhost:3000/ local-lighthouse-report.html
#   ./scripts/lighthouse.sh https://example.com/ example.html

URL="${1:?Usage: lighthouse.sh <url> [output-filename]}"
OUTPUT="${2:-lighthouse-report.html}"

PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
OUTPUT_PATH="$PROJECT_DIR/$OUTPUT"
CHROME_PATH="${CHROME_PATH:-/usr/bin/google-chrome}"
LIGHTHOUSE="${LIGHTHOUSE:-/home/henning/.local/share/pnpm/lighthouse}"

# Ensure port 9222 Chrome instance is running
if ! curl -sf http://localhost:9222/json/version > /dev/null 2>&1; then
  echo "Starting Chrome on port 9222..."
  "$CHROME_PATH" --headless=new --no-sandbox --disable-gpu --remote-debugging-port=9222 &>/dev/null &
  sleep 2
fi

rm -f "$OUTPUT_PATH"

echo "→ Lighthouse: $URL"
echo "→ Output:     $OUTPUT_PATH"
echo "→ Chrome:     $CHROME_PATH"
echo ""

CHROME_PATH="$CHROME_PATH" "$LIGHTHOUSE" "$URL" \
  --output html \
  --output-path="$OUTPUT_PATH" \
  --port=9222 \
  --quiet 2>&1

echo "EXIT: $?"
ls -lh "$OUTPUT_PATH"
