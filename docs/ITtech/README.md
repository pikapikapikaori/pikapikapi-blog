# 前言

<!-- panels:start -->
<!-- div:left-panel -->

这里是我写的一些技术相关博客。

## 一些小工具或项目

下面是我开发的一些小工具或项目：

- [docsify-gitalk-with-footer](https://github.com/pikapikapikaori/docsify-gitalk-with-footer): 用于docsify的一款插件，修复了原生添加gitalk时的一些问题。
- [docsify-enhanced-word-count](https://github.com/pikapikapikaori/docsify-enhanced-word-count): 用于docsify的一款插件，为docsify添加字数统计，且支持i18n国际化。
- [docsify-simple-dark-mode](https://github.com/pikapikapikaori/docsify-simple-dark-mode): 用于docsify的一款插件，为dcosify增加黑暗模式。

<!-- div:right-panel -->

<div class="mainPageRightPanelContainer">
    <h4 class="mainPageAboutMeTitle">语言使用情况</h4>
    <div class="mainPageAboutMeImageLinks">
        <img src="https://github-readme-stats-pikapikapikaori.vercel.app/api/top-langs/?username=pikapikapikaori&langs_count=10&layout=compact&locale=cn&border_color=00000000&bg_color=00000000&theme=buefy" alt="picture" class="dynamicPictureAccordingToThemeMode ignoreViewFullImageImg">
    </div>
</div>

<!-- panels:end -->

## 一个玩具解释器

### Brainfuck语言简介

`Brainfuck`语言仅含有8种有效字符，是一个图灵完备的语言。其8种字符的含义如下：

| 字符  |                     含义                     |
| :---: | :------------------------------------------: |
|   >   |                   指针加一                   |
|   <   |                   指针减一                   |
|   +   |               指针指向的值加一               |
|   -   |               指针指向的值减一               |
|   ,   |            输入内容到指针指向的值            |
|   .   |               输出指针指向的值               |
|   [   |  如果指针指向的值为0，则直接跳转到对应的 ] 处  |
|   ]   | 如果指针指向的值不为0，则直接跳转到对应的 [ 处 |

### Brainfuck解释器

<div style="max-width: 800px;margin: 0 auto 0;">
    <iframe height="400px" src="ITtech/_media/README/terminal.html"></iframe>
</div>
