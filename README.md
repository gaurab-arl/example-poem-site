🚀 Deploying a Static Website (HTML/CSS/JS) to GitHub Pages
🧩 Step 1: Prepare Your Files
Put your website files (HTML, CSS, JS) in a single folder, like this:

bash
Copy
Edit
/my-website
├── index.html
├── style.css
└── script.js
🌐 Step 2: Create a GitHub Repository
Go to https://github.com

Click “New repository”

Name it (e.g., my-website) and click Create repository

📤 Step 3: Upload or Push Your Code
Option A: Manual Upload (Easy Way)

Go to your GitHub repo

Click “Add file” → “Upload files”

Upload your website files and commit

Option B: Using Git (Command Line)

bash
Copy
Edit
cd path/to/my-website
git init
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git add .
git commit -m "Initial commit"
git branch -M main
git push -u origin main
🚀 Step 4: Enable GitHub Pages
Go to Settings tab of your GitHub repo

Click Pages in the sidebar (scroll down)

Under “Source”, choose:

Branch: main

Folder: /root

Click Save

✅ You're Done!
Your website will be live at:

arduino
Copy
Edit
https://your-username.github.io/your-repo-name
