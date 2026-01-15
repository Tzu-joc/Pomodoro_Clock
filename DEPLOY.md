# Deploy to GitHub

## Quick Deploy (Recommended)

**Option 1: Run the PowerShell Script**
```powershell
cd pomodoro-clock
.\deploy.ps1
```

**Option 2: Manual Steps**

## Manual Deployment Steps:

1. **Open PowerShell or Git Bash** in the `pomodoro-clock` directory

2. **Initialize Git** (if not already done):
   ```bash
   git init
   ```

3. **Configure Git** (if not already configured globally):
   ```bash
   git config user.email "mjochua1@gmail.com"
   git config user.name "Your Name"
   ```

4. **Add Remote Repository**:
   ```bash
   git remote add origin https://github.com/Tzu-joc/Pomodoro_Clock.git
   ```
   
   If remote already exists, update it:
   ```bash
   git remote set-url origin https://github.com/Tzu-joc/Pomodoro_Clock.git
   ```

5. **Add All Files**:
   ```bash
   git add .
   ```

6. **Commit Changes**:
   ```bash
   git commit -m "Initial commit: Pomodoro Clock"
   ```

7. **Set Default Branch**:
   ```bash
   git branch -M main
   ```

8. **Push to GitHub**:
   ```bash
   git push -u origin main
   ```

## Repository Information:
- **Repository URL**: https://github.com/Tzu-joc/Pomodoro_Clock.git
- **GitHub Email**: mjochua1@gmail.com
- **Repository Name**: Pomodoro_Clock

## Troubleshooting:

### If Git is not found:
1. Install Git from: https://git-scm.com/download/win
2. Restart your terminal after installation

### If push fails due to authentication:
1. Use a Personal Access Token instead of password
2. Generate token at: https://github.com/settings/tokens
3. Use the token as your password when prompted

### If you get "remote origin already exists":
```bash
git remote remove origin
git remote add origin https://github.com/Tzu-joc/Pomodoro_Clock.git
```
