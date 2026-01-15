# 🚀 Complete Deployment Guide for Pomodoro Clock

## Step-by-Step Instructions to Deploy to GitHub

### Prerequisites Check

**First, let's check if Git is installed:**

1. Open PowerShell (Press `Win + X` and select "Windows PowerShell" or "Terminal")
2. Type: `git --version`
3. If you see a version number (like `git version 2.x.x`), you're good to go!
4. If you see an error, **install Git first** (see below)

---

## Option A: Install Git (If Not Installed)

1. **Download Git for Windows:**
   - Go to: https://git-scm.com/download/win
   - Download the installer
   - Run the installer and follow the prompts
   - **Important:** During installation, choose "Git from the command line and also from 3rd-party software"

2. **Restart PowerShell** after installation

3. **Verify installation:**
   ```powershell
   git --version
   ```

---

## Option B: Deploy Using PowerShell (Recommended)

### Step 1: Open PowerShell in the Project Folder

1. Navigate to your project folder:
   ```
   C:\Users\USER\Downloads\Cursor_New_Attempt\pomodoro-clock
   ```

2. **Easy way:** 
   - Open File Explorer
   - Navigate to the `pomodoro-clock` folder
   - Right-click in the folder
   - Select "Open in Terminal" or "Open PowerShell window here"

### Step 2: Run the Deployment Script

In PowerShell, type:
```powershell
.\deploy.ps1
```

The script will:
- ✅ Check if Git is installed
- ✅ Initialize git (if needed)
- ✅ Configure your email
- ✅ Add the remote repository
- ✅ Add all files
- ✅ Commit changes
- ✅ Push to GitHub

### Step 3: Enter Credentials (If Prompted)

When you push, you may be asked for:
- **Username:** `Tzu-joc`
- **Password:** Use a **Personal Access Token** (not your GitHub password)

**To create a Personal Access Token:**
1. Go to: https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Give it a name (e.g., "Pomodoro Clock Deploy")
4. Select scopes: Check `repo` (full control of private repositories)
5. Click "Generate token"
6. **Copy the token immediately** (you won't see it again!)
7. Use this token as your password when prompted

---

## Option C: Manual Deployment (Step-by-Step)

If you prefer to do it manually, follow these commands in PowerShell:

### 1. Navigate to Project Folder
```powershell
cd "C:\Users\USER\Downloads\Cursor_New_Attempt\pomodoro-clock"
```

### 2. Initialize Git (if not already done)
```powershell
git init
```

### 3. Configure Git
```powershell
git config user.email "mjochua1@gmail.com"
git config user.name "Your Name"
```

### 4. Add Remote Repository
```powershell
git remote add origin https://github.com/Tzu-joc/Pomodoro_Clock.git
```

If you get "remote origin already exists", update it:
```powershell
git remote set-url origin https://github.com/Tzu-joc/Pomodoro_Clock.git
```

### 5. Add All Files
```powershell
git add .
```

### 6. Commit Changes
```powershell
git commit -m "Initial commit: Pomodoro Clock"
```

### 7. Set Branch to Main
```powershell
git branch -M main
```

### 8. Push to GitHub
```powershell
git push -u origin main
```

Enter your credentials when prompted:
- Username: `Tzu-joc`
- Password: Your Personal Access Token (see Option B, Step 3)

---

## Option D: Use GitHub Desktop (Easiest for Beginners)

1. **Download GitHub Desktop:**
   - Go to: https://desktop.github.com/
   - Install the application

2. **Open GitHub Desktop:**
   - Click "File" → "Add Local Repository"
   - Browse to: `C:\Users\USER\Downloads\Cursor_New_Attempt\pomodoro-clock`
   - Click "Add Repository"

3. **Publish Repository:**
   - Click "Publish repository" button
   - Repository name: `Pomodoro_Clock`
   - Owner: `Tzu-joc`
   - Make sure "Keep this code private" is unchecked (if you want it public)
   - Click "Publish Repository"

4. **Done!** Your code is now on GitHub.

---

## ✅ Verify Deployment

After successful deployment, visit:
**https://github.com/Tzu-joc/Pomodoro_Clock**

You should see all your files there!

---

## 🆘 Troubleshooting

### Problem: "git is not recognized"
**Solution:** Git is not installed or not in PATH. Install Git (see Option A above) and restart PowerShell.

### Problem: "remote origin already exists"
**Solution:** Run this command:
```powershell
git remote remove origin
git remote add origin https://github.com/Tzu-joc/Pomodoro_Clock.git
```

### Problem: "Authentication failed"
**Solution:** 
- Make sure you're using a Personal Access Token, not your password
- Generate a new token at: https://github.com/settings/tokens
- Make sure the token has `repo` scope

### Problem: "Permission denied"
**Solution:** 
- Verify you have push access to the repository
- Check that the repository exists at: https://github.com/Tzu-joc/Pomodoro_Clock
- Make sure you're using the correct username

### Problem: "Nothing to commit"
**Solution:** Your files might already be committed. Try:
```powershell
git status
```
If files show as "modified" or "untracked", add them:
```powershell
git add .
git commit -m "Update files"
git push
```

---

## 📝 Quick Reference

**Repository URL:** `https://github.com/Tzu-joc/Pomodoro_Clock.git`  
**Your Email:** `mjochua1@gmail.com`  
**Repository Name:** `Pomodoro_Clock`

---

**Need more help?** Check the `DEPLOY.md` file for additional information.
