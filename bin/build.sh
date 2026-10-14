#!/bin/bash
# ==============================================================================
# Build the site locally the same way as .github/workflows/deploy.yml:
# clone pieceofcake2/docs-skeleton into .skeleton, copy docs/ and config.js
# into it, install the dependencies and build.
# ------------------------------------------------------------------------------
# Usage: bin/build.sh [OPTIONS]
#   --skeleton-path PATH   Clone a local docs-skeleton checkout instead of GitHub
#   --dev                  Start the VitePress dev server instead of building
#   --preview PORT         Build, then serve the result on PORT
#   -h, --help             Show this help message
# ==============================================================================

set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SKELETON_DIR="${ROOT}/.skeleton"
SKELETON_REPO="https://github.com/pieceofcake2/docs-skeleton.git"
MODE="build"
PORT=""

while [[ $# -gt 0 ]]; do
  case $1 in
    --skeleton-path) SKELETON_REPO="$2"; shift 2 ;;
    --dev) MODE="dev"; shift ;;
    --preview) MODE="preview"; PORT="$2"; shift 2 ;;
    -h|--help) sed -n 2,13p "$0" | sed 's/^# \{0,1\}//'; exit 0 ;;
    *) echo "Unknown option: $1" >&2; exit 1 ;;
  esac
done

rm -rf "${SKELETON_DIR}"
git clone --depth 1 "${SKELETON_REPO}" "${SKELETON_DIR}"

rsync -a "${ROOT}/docs/" "${SKELETON_DIR}/docs/"
cp "${ROOT}/config.js" "${SKELETON_DIR}/"

# Never run install scripts of dependencies.
if ! grep -qx 'ignore-scripts=true' "${SKELETON_DIR}/.npmrc" 2>/dev/null; then
  echo 'ignore-scripts=true' >> "${SKELETON_DIR}/.npmrc"
fi

cd "${SKELETON_DIR}"
npm ci

case "${MODE}" in
  dev) npx vitepress dev ;;
  build) npm run docs:build; echo "Built into ${SKELETON_DIR}/.vitepress/dist" ;;
  preview) npm run docs:build; npx vitepress preview --port "${PORT}" ;;
esac
