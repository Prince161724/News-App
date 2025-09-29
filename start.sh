#!/bin/bash
echo "🚀 Starting News App..."
echo "Environment: $NODE_ENV"
echo "API Key status: $(if [ -n "$REACT_APP_API_KEY" ]; then echo "✅ SET (${REACT_APP_API_KEY:0:8}...)"; else echo "❌ MISSING"; fi)"
echo "Port: $PORT"
echo "Starting server..."
npx serve -s build -p $PORT