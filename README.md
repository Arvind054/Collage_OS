#  Create and switch branches

```bash
git branch <branch-name>         # Create a new branch
git checkout <branch-name>       # Switch to existing branch
git checkout -b <branch-name>    # Create and switch in one step
```

#  Add and commit changes

```bash
git status                       # See modified/untracked files
git add .                        # Stage all changes
git add <file-name>              # Stage specific file
git commit -m "Your commit msg" # Commit staged changes
```


# Merge changes from another branch (e.g., frontend) into main

```bash
git checkout main                # Switch to main branch
git pull origin main             # (Optional) Make sure it's up to date
git merge frontend               # Merge frontend branch into main
```


# Creating Pull Request

- Fork the repo
- Create new branch
- Commit and Push it
- Only through `Compare & pull request` button from github



- Chatgpt se puch lena ekbar pullrequest kese Karna
- Agar pull request nahi karna hai toh direct main mai kam kar lena aur commit kar lena