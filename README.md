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



### 其他记录内容

::v-deep   let 定义的变量不会绑定到window上      反之var会


iterable字面意思：可迭代的，可重复的


### 一个需要注意的地方是，如果参数默认值是一个变量，则该变量所处的作用域，与其他变量的作用域规则是一样的，即先是当前函数的作用域，然后才是全局作用域。
```
  var x = 1;

  function f(x, y = x) {
    console.log(y);
  }

  f(2) // 2
```

### 尾递归优化过的fibonacci 递归算法

function Fibonacci2 (n , ac1 = 1 , ac2 = 1) {
  if( n <= 1 ) {return ac2};

  return Fibonacci2 (n - 1, ac2, ac1 + ac2);
}

### 科里？？？？
function shin(){		
  const args = Array.prototype.slice.call(arguments)
  console.log('args',args)
  const inner = () => {
    console.log('...arguments',arguments)
    args.push(...arguments)
    console.log('inner',inner)
    return inner
  }
  return inner
}
shin(1,2,3)(4,5)(6,7,8,9)