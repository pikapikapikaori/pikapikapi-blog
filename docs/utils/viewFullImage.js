/*
 * @Author: pikapikapikaori pikapikapi_kaori@icloud.com
 * @Date: 2023-05-02 12:57:52
 * @LastEditors: pikapikapikaori pikapikapi_kaori@icloud.com
 * @LastEditTime: 2023-05-03 03:25:28
 * @FilePath: /pikapikapi-blog/docs/utils/countWords.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

// Docsify plugin functions
function plugin(hook, vm) {
    hook.mounted(function () {
        var viewFullImageSpan = document.createElement('span')

        viewFullImageSpan.id = 'viewFullImageSpan'

        viewFullImageSpan.onclick = function (e) {
            this.style.display = 'none'
        }

        document.body.appendChild (viewFullImageSpan)
    })

    hook.doneEach(function () {
        Array.from(document.getElementsByTagName('img')).forEach(img => {
            let viewFullImageSpan = document.getElementById('viewFullImageSpan')
            if(img.className.split(' ').indexOf('ignoreViewFullImageImg') > -1) {
                return
            }
            img.addEventListener('click', function () {
                viewFullImageSpan.style.backgroundImage = 'url(' + img.src + ')';
                viewFullImageSpan.style.display = 'block';
            });
        })
    })
}

window.$docsify.plugins = [].concat(plugin, window.$docsify.plugins)