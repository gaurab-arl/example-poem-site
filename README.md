🚀 Deploying a Static Website (HTML/CSS/JS) to GitHub Pages
Step 1: Prepare Your Files
Put your website files in a folder.

/my-website
  ├── index.html
  ├── style.css
  └── script.js
Step 2: Create a GitHub Repository
Go to https://github.com.

Click New repository.
Give it a name (e.g., my-website) and click Create repository.

Step 3: Upload or Push Your Code
You can upload manually or use Git:
Option A: Manual Upload
Click “Add file” > “Upload files”.

Upload your HTML/CSS/JS files and commit them.

-----------------------------------------------------------------------------------------------------------------------

Option B: Using Git

cd path/to/my-website
git init
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git add .
git commit -m "Initial commit"
git branch -M main
git push -u origin main
Step 4: Enable GitHub Pages
Go to your repository on GitHub.

Click on Settings > Pages (on the sidebar).

Under “Source”, select:
Branch: main
Folder: /root (or /docs if that's where your files are)
Click Save.

✅ Done!
Your site will be live at:
📡 https://your-username.github.io/your-repo-name

