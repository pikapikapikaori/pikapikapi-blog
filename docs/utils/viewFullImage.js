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
            let viewFullImageLeftButtonSpan = document.getElementById('viewFullImageLeftButtonSpan')
            let viewFullImageRightButtonSpan = document.getElementById('viewFullImageRightButtonSpan')
            viewFullImageLeftButtonSpan.style.display = 'none'
            viewFullImageRightButtonSpan.style.display = 'none'
            this.style.display = 'none'
        }

        var viewFullImageLeftButtonSpan = document.createElement('span')
        viewFullImageLeftButtonSpan.id = 'viewFullImageLeftButtonSpan'
        var viewFullImageRightButtonSpan = document.createElement('span')
        viewFullImageRightButtonSpan.id = 'viewFullImageRightButtonSpan'

        viewFullImageLeftButtonSpan.innerHTML = '<div class="viewFullImageButtonSpanInnerUpperLowerDiv" id="viewFullImageLeftButtonSpanInnerUpperDiv"></div><div id="viewFullImageLeftButtonSpanInnerDiv"><div id="viewFullImageLeftButtonSVG"><?xml version="1.0" encoding="UTF-8"?><svg width="20px" height="20px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#c6a2eb"><path d="M15 6l-6 6 6 6" stroke="#c6a2eb" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div></div><div class="viewFullImageButtonSpanInnerUpperLowerDiv" id="viewFullImageLeftButtonSpanInnerLowerDiv"></div>'
        viewFullImageRightButtonSpan.innerHTML = '<div class="viewFullImageButtonSpanInnerUpperLowerDiv" id="viewFullImageRightButtonSpanInnerUpperDiv"></div><div id="viewFullImageRightButtonSpanInnerDiv"><div id="viewFullImageRightButtonSVG"><?xml version="1.0" encoding="UTF-8"?><svg width="20px" height="20px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#c6a2eb"><path d="M9 6l6 6-6 6" stroke="#c6a2eb" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div></div><div class="viewFullImageButtonSpanInnerUpperLowerDiv" id="viewFullImageRightButtonSpanInnerLowerDiv"></div>'
        viewFullImageSpan.innerHTML = '<div id="viewFullImageSpanInnerUpperDiv"></div><div id="viewFullImageSpanInnerDiv"></div>'

        document.body.appendChild(viewFullImageLeftButtonSpan)
        document.body.appendChild(viewFullImageRightButtonSpan)
        document.body.appendChild(viewFullImageSpan)

        var viewFullImageLeftButtonSVG = document.getElementById('viewFullImageLeftButtonSVG')
        var viewFullImageRightButtonSVG = document.getElementById('viewFullImageRightButtonSVG')

        // true for left button
        function buttonLeftRightOnClick(direction) {
            let viewFullImageSpanInnerDiv = document.getElementById('viewFullImageSpanInnerDiv')

            let imgArray = Array.from(document.getElementsByTagName('img')).filter(img => {
                return !(img.className.split(' ').indexOf('ignoreViewFullImageImg') > -1 || img.className.indexOf('emoji') > -1 || img.src.indexOf('avatars.githubusercontent') > -1)
            })

            imgArray.some((img, index) => {
                if (viewFullImageSpanInnerDiv.style.backgroundImage.indexOf(img.src) > -1) {
                    newImgIndex = direction ? (index === 0 ? imgArray.length - 1 : index - 1) : (index === imgArray.length - 1 ? 0 : index + 1)
                    viewFullImageSpanInnerDiv.style.backgroundImage = 'url(' + imgArray[newImgIndex].src + ')'
                    return true
                }
            })
        }

        viewFullImageLeftButtonSVG.onclick = function () {
            buttonLeftRightOnClick(true)
        }
        viewFullImageRightButtonSVG.onclick = function () {
            buttonLeftRightOnClick(false)
        }

        Array.from(document.getElementsByClassName('viewFullImageButtonSpanInnerUpperLowerDiv')).forEach(viewFullImageButtonSpanInnerUpperLowerDiv => {
            viewFullImageButtonSpanInnerUpperLowerDiv.onclick = function (e) {
                let viewFullImageLeftButtonSpan = document.getElementById('viewFullImageLeftButtonSpan')
                let viewFullImageRightButtonSpan = document.getElementById('viewFullImageRightButtonSpan')
                let viewFullImageSpan = document.getElementById('viewFullImageSpan')
                viewFullImageLeftButtonSpan.style.display = 'none'
                viewFullImageRightButtonSpan.style.display = 'none'
                viewFullImageSpan.style.display = 'none'
            }
        })
    })

    hook.doneEach(function () {
        Array.from(document.getElementsByTagName('img')).forEach(img => {
            let viewFullImageSpan = document.getElementById('viewFullImageSpan')
            let viewFullImageLeftButtonSpan = document.getElementById('viewFullImageLeftButtonSpan')
            let viewFullImageRightButtonSpan = document.getElementById('viewFullImageRightButtonSpan')
            let viewFullImageSpanInnerDiv = document.getElementById('viewFullImageSpanInnerDiv')
            if (img.className.split(' ').indexOf('ignoreViewFullImageImg') > -1 || img.className.indexOf('emoji') > -1 || img.src.indexOf('avatars.githubusercontent') > -1) {
                return
            }
            img.addEventListener('click', function () {
                viewFullImageSpanInnerDiv.style.backgroundImage = 'url(' + img.src + ')'
                viewFullImageSpan.style.display = 'block'
                viewFullImageLeftButtonSpan.style.display = 'block'
                viewFullImageRightButtonSpan.style.display = 'block'
            })
        })
    })
}

window.$docsify.plugins = [].concat(plugin, window.$docsify.plugins)