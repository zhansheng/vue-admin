#### Changelog

> *ChromeDriver installation failed Error extracting archive undefined*

npm install 时，ChromeDriver 安装报错，根据[vue-router/issues/261](https://github.com/vuejs/vue-router/issues/261) 的提示，执行以下命令解决

    npm install chromedriver --chromedriver_cdnurl=http://cdn.npm.taobao.org/dist/chromedriver   

> *No Java runtime present, requesting install*

npm run test 时，报错没有java环境，安装java环境解决。

> *Webpack require.context*

在src/test/unit/index.js中，有如下语句：

    const srcContext = require.context('../../src', true, /^\.\/(?!main(\.js)?$)/)
    // 更改为
    const srcContext = require.context('../../src', true, /^\.\/(?!style|main(\.js)?$)/)
    
    
此处的含意是，用karma作代码覆盖率测试时，指定目录，初始时为src目录下，除./main.js文件以外的所有文件，在项目加入style文件夹(*.scss)时，跑测试报错，意思是scss文件中的变量没有值，而这个值其实是有定义的，只是不在一个文件中。
我想做的就是，把style目录也在测试时剔除，避免这个报错。require.context具体定义请看[Webpack Document](https://webpack.github.io/docs/context.html#require-context)

| 元字符                 | 含义                                         |
|-----------------------|---------------------------------------------|
| ^                     | 开始                                         |
| \                     | 转义                                         |
| .                     | 除了换行和回车之外的任意字符                     |
| *                     | 出现零次或多次(任意次)                          |
| ?                     | 出现零次或一次                                 |
| ?!main                | 负向前瞻，如果后面的内容是main，则此段内容匹配失败。 |
| $                     | 结尾                                         |

    






