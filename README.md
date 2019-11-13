# mobileweb  
## *移动端适配方案*

通过 px-to-vw 的方法实现移动端适配  

---  

> 使用Vue-cli作为基础开发框架  
>> 使用 `vue-router` 作为路由管理  
>> 使用 `VueX` 管理全局数据  

> 使用 `bootstrap-reboot.css` 进行样式重置  
> 使用 `sass` 优化代码书写  
> 使用 `axios` 管理Ajax请求  
>> 在 [main.js][mainJs] 中将其融合到了Vue里，这样就可以全局调用了

> ![artifact][artifactIco] logo偷偷用了 [Artifact][artifactWeb] 官网的ico（未获授权）  
>> ~~这是个好游戏，~~ 只可惜生不逢时

***

- 在[vue.congfig.js][config] 中配置设计稿宽度。  
+ 看情况可添加 `max-width` 到 `publc/index.html` 的 `body` 中，这样即使在PC端浏览，效果也是极好的。  
* `bootstrap-reboot.css` 中将`line-height` 设为 `1.5`；  
* 在多行文本浏览时，可以提供较好的用户体验；  
* 缺点是块级文本的高度如果不是常量，那么会有所变化，像素强迫症可以视情况将值设为 `1` 。

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).  


1. 绝不意气用事  
2. 绝不漏判任何一件坏事  
3. 绝对裁判的公正漂亮  

[artifactWeb]: https://playartifact.com/ "playartifact"  
[artifactIco]: https://steamcdn-a.akamaihd.net/apps/artifact/images/favicon.png "favicon"  
[config]: ./vue.config.js "vue.config"  
[mainJs]: ./src/main.js "main.js"