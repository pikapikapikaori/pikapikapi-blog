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

        var viewFullImageSpanInnerLeftDiv = document.createElement('div')
        var viewFullImageSpanInnerRightDiv = document.createElement('div')

        viewFullImageSpanInnerLeftDiv.id = 'viewFullImageSpanInnerLeftDiv'
        viewFullImageSpanInnerRightDiv.id = 'viewFullImageSpanInnerRightDiv'
        viewFullImageSpanInnerLeftDiv.innerHTML = '<?xml version="1.0" encoding="UTF-8"?><svg width="20px" height="20px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#c6a2eb"><path d="M15 6l-6 6 6 6" stroke="#c6a2eb" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>'
        viewFullImageSpanInnerRightDiv.innerHTML = '<?xml version="1.0" encoding="UTF-8"?><svg width="20px" height="20px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#c6a2eb"><path d="M9 6l6 6-6 6" stroke="#c6a2eb" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>'

        var viewFullImageSpanInnerImgDiv = document.createElement('div')

        viewFullImageSpanInnerImgDiv.id = 'viewFullImageSpanInnerImgDiv'

        var viewFullImageSpanInnerTextDiv = document.createElement('div')

        viewFullImageSpanInnerTextDiv.id = 'viewFullImageSpanInnerTextDiv'

        viewFullImageSpan.appendChild(viewFullImageSpanInnerLeftDiv)
        viewFullImageSpan.appendChild(viewFullImageSpanInnerRightDiv)
        viewFullImageSpan.appendChild(viewFullImageSpanInnerImgDiv)
        viewFullImageSpan.appendChild(viewFullImageSpanInnerTextDiv)

        document.body.appendChild(viewFullImageSpan)

        // true for left button
        function buttonLeftRightOnClick(direction) {
            let viewFullImageSpanInnerImgDiv = document.getElementById('viewFullImageSpanInnerImgDiv')
            let viewFullImageSpanInnerTextDiv = document.getElementById('viewFullImageSpanInnerTextDiv')

            let imgArray = Array.from(document.getElementsByTagName('img')).filter(img => {
                return !(img.className.split(' ').indexOf('ignoreViewFullImageImg') > -1 || img.className.indexOf('emoji') > -1 || img.src.indexOf('avatars.githubusercontent') > -1)
            })

            imgArray.some((img, index, arr) => {
                if (viewFullImageSpanInnerImgDiv.style.backgroundImage.indexOf(img.src) > -1) {
                    newImgIndex = direction ? (index === 0 ? imgArray.length - 1 : index - 1) : (index === imgArray.length - 1 ? 0 : index + 1)
                    viewFullImageSpanInnerImgDiv.style.backgroundImage = 'url(' + imgArray[newImgIndex].src + ')'
                    viewFullImageSpanInnerTextDiv.innerHTML = (newImgIndex + 1).toString() + ' / ' + arr.length.toString()
                    return true
                }
            })
        }

        let notPreventParentOnClickEventElementId = [ viewFullImageSpanInnerImgDiv.id, viewFullImageSpan.id, viewFullImageSpanInnerTextDiv.id, ]

        viewFullImageSpan.onclick = function (e) {
            if (notPreventParentOnClickEventElementId.indexOf(e.target.id) === -1) return
            this.style.display = 'none'
        }

        viewFullImageSpanInnerLeftDiv.onclick = function (e) {
            buttonLeftRightOnClick(true)
        }
        viewFullImageSpanInnerRightDiv.onclick = function (e) {
            buttonLeftRightOnClick(false)
        }
    })

    hook.doneEach(function () {
        Array.from(document.getElementsByTagName('img')).filter(img => {
            return !(img.className.split(' ').indexOf('ignoreViewFullImageImg') > -1 || img.className.indexOf('emoji') > -1 || img.src.indexOf('avatars.githubusercontent') > -1)
        }).forEach((img, index, arr) => {
            let viewFullImageSpan = document.getElementById('viewFullImageSpan')
            let viewFullImageSpanInnerImgDiv = document.getElementById('viewFullImageSpanInnerImgDiv')
            let viewFullImageSpanInnerTextDiv = document.getElementById('viewFullImageSpanInnerTextDiv')
            img.addEventListener('click', function () {
                viewFullImageSpanInnerImgDiv.style.backgroundImage = 'url(' + img.src + ')'
                viewFullImageSpan.style.display = 'block'
                viewFullImageSpanInnerTextDiv.innerHTML = (index + 1).toString() + ' / ' + arr.length.toString()
            })
        })
    })
}

window.$docsify.plugins = [].concat(plugin, window.$docsify.plugins)