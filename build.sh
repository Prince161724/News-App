#!/bin/bash
echo "🔧 Starting build with environment setup..."
echo "Environment: $NODE_ENV"
echo "API Key status: $(if [ -n "$REACT_APP_API_KEY" ]; then echo "SET (${REACT_APP_API_KEY:0:8}...)"; else echo "NOT SET - Using fallback"; fi)"

# Set the API key if not already set
export REACT_APP_API_KEY="${REACT_APP_API_KEY:-e4c160232cb24db5b3511429ccd2ec63}"

echo "🏗️ Installing dependencies..."
npm ci

echo "📦 Building React app..."
npm run build

echo "✅ Build completed successfully!"
echo "🔍 Checking if build contains API key..."
if grep -q "e4c160232cb24db5b3511429ccd2ec63" build/static/js/*.js; then
    echo "✅ API key found in build files"
else
    echo "❌ API key NOT found in build files"
fi