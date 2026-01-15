# Firebase Hosting Guide

This guide will walk you through hosting your portfolio on Firebase.

## Prerequisites

- A Google account
- Node.js installed on your computer
- Your React portfolio project set up

## Step 1: Install Firebase CLI

Open your terminal and install Firebase CLI globally:

```bash
npm install -g firebase-tools
```

## Step 2: Login to Firebase

Login to your Google account:

```bash
firebase login
```

This will open a browser window for you to authenticate with your Google account.

### Windows PowerShell Execution Policy Error

If you get an error like "无法加载文件...因为在此系统上禁止运行脚本" (script execution is disabled), you have three options:

**Option 1: Change PowerShell Execution Policy (Recommended)**
Run PowerShell as Administrator and execute:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```
Then try `firebase login` again.

**Option 2: Use npx (No Global Install Needed)**
Instead of installing globally, use npx:
```bash
npx firebase-tools login
npx firebase-tools init
npx firebase-tools deploy
```

**Option 3: Use Command Prompt (CMD)**
Open Command Prompt (cmd.exe) instead of PowerShell and run:
```cmd
firebase login
```

## Step 3: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" or "Create a project"
3. Enter a project name (e.g., "hogan-ou-portfolio")
4. Follow the setup wizard:
   - Disable Google Analytics (optional, you can enable it later if needed)
   - Click "Create project"
5. Wait for the project to be created, then click "Continue"

## Step 4: Initialize Firebase in Your Project

In your project directory, run:

```bash
firebase init
```

You'll be prompted with several questions:

1. **Which Firebase features do you want to set up?**
   - Select: `Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys`
   - Use spacebar to select, then Enter

2. **Please select an option:**
   - Choose: `Use an existing project`
   - Select your project from the list

3. **What do you want to use as your public directory?**
   - Enter: `build` (this is where React builds your production files)

4. **Configure as a single-page app (rewrite all urls to /index.html)?**
   - Enter: `Yes`

5. **Set up automatic builds and deploys with GitHub?**
   - Enter: `No` (you can set this up later if you want)

6. **File build/index.html already exists. Overwrite?**
   - Enter: `No` (we already have the correct configuration)

## Step 5: Update Project ID (if needed)

If you need to change the project ID in `.firebaserc`, edit the file and replace `your-project-id` with your actual Firebase project ID.

## Step 6: Build Your React App

Build your React app for production:

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Step 7: Deploy to Firebase

Deploy your portfolio:

```bash
firebase deploy
```

Or use the npm script:

```bash
npm run deploy
```

## Step 8: Access Your Live Portfolio

After deployment, Firebase will provide you with a URL like:
```
https://your-project-id.web.app
```
or
```
https://your-project-id.firebaseapp.com
```

You can also find this URL in the [Firebase Console](https://console.firebase.google.com/) under Hosting.

## Custom Domain (Optional)

To use a custom domain:

1. Go to Firebase Console → Hosting
2. Click "Add custom domain"
3. Follow the instructions to verify your domain
4. Update your DNS records as instructed

## Updating Your Portfolio

Whenever you make changes:

1. Make your changes to the code
2. Build the project: `npm run build`
3. Deploy: `firebase deploy`

Or use the combined command: `npm run deploy`

## Troubleshooting

### PowerShell Execution Policy Error (Windows)
If you see "无法加载文件...因为在此系统上禁止运行脚本":
- **Solution 1**: Run PowerShell as Admin: `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`
- **Solution 2**: Use `npx firebase-tools` instead of `firebase`
- **Solution 3**: Use Command Prompt (cmd.exe) instead of PowerShell

### Build fails
- Make sure all dependencies are installed: `npm install`
- Check for any errors in the terminal

### Deploy fails
- Ensure you're logged in: `firebase login` (or `npx firebase-tools login`)
- Verify your project ID in `.firebaserc` matches your Firebase project
- Check that the `build` folder exists after running `npm run build`

### Site shows blank page
- Make sure `firebase.json` has the rewrite rule for single-page apps
- Check browser console for any JavaScript errors
- Verify the build completed successfully

## Additional Resources

- [Firebase Hosting Documentation](https://firebase.google.com/docs/hosting)
- [Firebase CLI Reference](https://firebase.google.com/docs/cli)
