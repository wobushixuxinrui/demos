# demos

### 拉去库名A  的分支名A到当前分支 
  git pull  库名A   分支名A
### 提交到特定的分支
git push origin master

git stash save '备注'
git stash list
git stash pop stash@{num}
git stash clear
git clone

git remote -v
git remote set-url origin xxxxxx


撤回你刚刚的commit操作。
git reset --soft HEAD^

重新编辑commit 
git commit --amend