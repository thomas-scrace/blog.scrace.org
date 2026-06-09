#!/usr/bin/env bash
# ---------------------------------------------------------------------------
# Zero-JavaScript verification.
#
# Fails (exit 1) if any JavaScript appears in the generated site. Run it after
# a production build:
#
#     hugo --gc --minify
#     bash scripts/check-no-js.sh
#
# CI runs this between the build and the deploy, so nothing with JavaScript in
# it can ever ship.
# ---------------------------------------------------------------------------
set -euo pipefail

DIR="${1:-public}"
fail=0

# File types that can carry markup/scripts and are worth scanning for inline JS.
MARKUP_INCLUDES=(--include='*.html' --include='*.xml' --include='*.svg' --include='*.json' --include='*.webmanifest')

if [ ! -d "$DIR" ]; then
  echo "error: output directory '$DIR' not found — run 'hugo --gc --minify' first." >&2
  exit 2
fi

# 1. No JavaScript / WebAssembly / sourcemap source files of any flavour.
js_files="$(find "$DIR" -type f \( \
  -name '*.js' -o -name '*.mjs' -o -name '*.cjs' -o -name '*.jsx' \
  -o -name '*.ts' -o -name '*.tsx' -o -name '*.wasm' -o -name '*.map' \) || true)"
if [ -n "$js_files" ]; then
  echo "FAIL: JavaScript/WASM/sourcemap files found in $DIR/:"
  echo "$js_files"
  fail=1
fi

# 2. No <script> tags in any markup output (case-insensitive).
if grep -rIlEi "${MARKUP_INCLUDES[@]}" -e '<script' "$DIR" >/dev/null 2>&1; then
  echo "FAIL: <script> tags found in $DIR/:"
  grep -rInEi "${MARKUP_INCLUDES[@]}" -e '<script' "$DIR" || true
  fail=1
fi

# 3. No inline event handlers (onclick=, onload=, onerror=, ...).
#    Matches an on<event>= attribute inside a tag, after whitespace — so it
#    ignores ordinary words/attributes like "datetime=" or "comparison=".
#    Covers HTML and SVG (where onload= is a real vector).
if grep -rIlEi --include='*.html' --include='*.svg' --include='*.xml' -e '<[^>]*[[:space:]]on[a-z]+[[:space:]]*=' "$DIR" >/dev/null 2>&1; then
  echo "FAIL: inline JavaScript event handlers found in $DIR/:"
  grep -rInEi --include='*.html' --include='*.svg' --include='*.xml' -e '<[^>]*[[:space:]]on[a-z]+[[:space:]]*=' "$DIR" || true
  fail=1
fi

# 4. No javascript: pseudo-URLs (case-insensitive — minifiers preserve value case).
if grep -rIlEi "${MARKUP_INCLUDES[@]}" -e 'javascript:' "$DIR" >/dev/null 2>&1; then
  echo "FAIL: javascript: URLs found in $DIR/:"
  grep -rInEi "${MARKUP_INCLUDES[@]}" -e 'javascript:' "$DIR" || true
  fail=1
fi

if [ "$fail" -ne 0 ]; then
  echo
  echo "Zero-JavaScript check FAILED."
  exit 1
fi

echo "Zero-JavaScript check passed for $DIR/ — no JS/WASM files, no <script> tags, no inline handlers, no javascript: URLs."
