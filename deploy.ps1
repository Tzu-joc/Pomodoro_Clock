# PowerShell script to deploy Pomodoro Clock to GitHub

Write-Host "Starting GitHub deployment..." -ForegroundColor Green

# Navigate to the project directory
Set-Location $PSScriptRoot

# Check if git is available
try {
    $gitVersion = git --version 2>&1
    Write-Host "Git found: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "ERROR: Git is not installed or not in PATH." -ForegroundColor Red
    Write-Host "Please install Git from https://git-scm.com/download/win" -ForegroundColor Yellow
    exit 1
}

# Initialize git repository if not already initialized
if (-not (Test-Path .git)) {
    Write-Host "Initializing git repository..." -ForegroundColor Yellow
    git init
} else {
    Write-Host "Git repository already initialized." -ForegroundColor Green
}

# Configure git user email
Write-Host "Configuring git user email..." -ForegroundColor Yellow
git config user.email "mjochua1@gmail.com"

# Check if remote already exists
$remoteExists = git remote get-url origin 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host "Adding remote repository..." -ForegroundColor Yellow
    git remote add origin https://github.com/Tzu-joc/Pomodoro_Clock.git
} else {
    Write-Host "Remote already exists: $remoteExists" -ForegroundColor Green
    Write-Host "Updating remote URL..." -ForegroundColor Yellow
    git remote set-url origin https://github.com/Tzu-joc/Pomodoro_Clock.git
}

# Add all files
Write-Host "Adding files to git..." -ForegroundColor Yellow
git add .

# Commit changes
Write-Host "Committing changes..." -ForegroundColor Yellow
$commitMessage = "Initial commit: Pomodoro Clock"
git commit -m $commitMessage

# Set default branch to main
Write-Host "Setting default branch to main..." -ForegroundColor Yellow
git branch -M main

# Push to GitHub
Write-Host "Pushing to GitHub..." -ForegroundColor Yellow
Write-Host "You may be prompted for your GitHub credentials." -ForegroundColor Cyan
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "`nSuccess! Your Pomodoro Clock has been deployed to GitHub!" -ForegroundColor Green
    Write-Host "Repository URL: https://github.com/Tzu-joc/Pomodoro_Clock" -ForegroundColor Cyan
} else {
    Write-Host "`nPush failed. You may need to:" -ForegroundColor Red
    Write-Host "1. Check your GitHub credentials" -ForegroundColor Yellow
    Write-Host "2. Ensure you have push access to the repository" -ForegroundColor Yellow
    Write-Host "3. If using 2FA, use a Personal Access Token instead of password" -ForegroundColor Yellow
}
