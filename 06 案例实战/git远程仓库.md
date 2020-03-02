# git远程仓库

### 码云gitee

* [码云帮助中心](https://gitee.com/help/articles/4122)

* [生成/添加SSH公钥](https://gitee.com/help/articles/4181)

* #### 简易的命令行入门教程:

  Git 全局设置:

  ```
  git config --global user.name "haochen"
  git config --global user.email "517276326@qq.com"
  ```

  创建 git 仓库:

  ```
  mkdir test
  cd test
  git init
  touch README.md
  git add README.md
  git commit -m "first commit"
  git remote add origin https://gitee.com/haochen465/test.git
  git push -u origin master
  ```

  已有仓库?

  ```
  cd existing_git_repo
  git remote add origin https://gitee.com/haochen465/test.git
  git push -u origin master
  ```
### git命令
| 功能                             | 代码                        |
| -------------------------------- | --------------------------- |
| 查看git本地状态                  | `git status`                |
| 创建本地分支                     | `git checkout -b 分支名`    |
| 查看本地分支                     | `git branch`                |
| 更新本地待提交的文件             | `git add .`                 |
| 提交本地文件                     | `git commit -m "add file"`  |
| 切换分支                         | `git brach 分支名`          |
| 将分支代码更新到现在所处的分支   | `git merge 分支名`          |
| 推送代码至远程仓库               | `git push`                  |
| 推送代码至远程仓库并创建对应分支 | `git push -u origin 分支名` |

