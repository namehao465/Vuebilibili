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
```shell
//查看git状态
git status
//创建分支
git checkout -b 分支名
//查看分支
git branch
//更新待提交的文件
git add .
//提交文件
git commit -m "add file"
```