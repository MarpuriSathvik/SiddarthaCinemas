#!/bin/bash
USERNAME=$1
if [ -z "$USERNAME" ]; then
  echo "Please provide your GitHub username."
  echo "Usage: ./setup_github.sh <username>"
  exit 1
fi

echo "Adding remote origin..."
git remote add origin https://github.com/$USERNAME/SiddarthaCinemas.git

echo "Renaming branch to main..."
git branch -M main

echo "Pushing to GitHub..."
git push -u origin main
