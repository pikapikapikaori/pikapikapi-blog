/*
 * @Author: pikapikapikaori pikapikapi_kaori@icloud.com
 * @Date: 2023-04-30 12:57:52
 * @LastEditors: pikapikapikaori pikapikapi_kaori@icloud.com
 * @LastEditTime: 2023-05-01 15:47:01
 * @FilePath: /pikapikapi-blog/docs/utils/countWords.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// default values
var switchLightDarkModeOptions = {
    useSwitchMode: true,
    switchDynamicPicture: false,
    top: 130,
    right: 26,
}

// Docsify plugin functions
function plugin(hook, vm) {
    if (!switchLightDarkModeOptions.useSwitchMode) {
        return
    }

    let currentThemeMode = true

    hook.mounted(function () {
        let lightTheme = Docsify.dom.findAll('[href="//cdn.jsdelivr.net/npm/docsify@4/lib/themes/vue.css"]')[0]
        let darkTheme = Docsify.dom.findAll('[href="//cdn.jsdelivr.net/npm/docsify@4/lib/themes/dark.css"]')[0]

        var switchSpan = document.createElement('span')

        switchSpan.id = 'switchLightDarkModeDivBeforeArticle'
        switchSpan.style.position = 'fixed'
        switchSpan.style.right = switchLightDarkModeOptions.right.toString() + 'px'
        switchSpan.style.top = switchLightDarkModeOptions.top.toString() + 'px'

        const lightModeIconHtml = '<?xml version="1.0" encoding="UTF-8"?><svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#d1b5ef"><path d="M12 18a6 6 0 100-12 6 6 0 000 12zM22 12h1M12 2V1M12 23v-1M20 20l-1-1M20 4l-1 1M4 20l1-1M4 4l1 1M1 12h1" stroke="#d1b5ef" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>'
        const darkModeIconHtml = '<?xml version="1.0" encoding="UTF-8"?><svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#d1b5ef"><path d="M3 11.507a9.493 9.493 0 0018 4.219c-8.507 0-12.726-4.22-12.726-12.726A9.494 9.494 0 003 11.507z" stroke="#d1b5ef" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>'

        switchSpan.innerHTML = lightModeIconHtml
        switchSpan.onclick = function (e) {
            currentThemeMode = !currentThemeMode
            switchSpan.innerHTML = currentThemeMode ? lightModeIconHtml : darkModeIconHtml
            lightTheme.disabled = !currentThemeMode
            darkTheme.disabled = currentThemeMode

            if (!switchLightDarkModeOptions.switchDynamicPicture) return

            Array.from(document.getElementsByClassName('dynamicPictureAccordingToThemeMode')).forEach(img => {
                var imgSrc = img.src

                var themeParam = currentThemeMode ? 'buefy' : 'material-palenight'

                if (imgSrc.indexOf('theme=') > -1) {
                    img.src = imgSrc.split('theme=')[0] + 'theme=' + themeParam
                }
                else {
                    img.src = imgSrc + '&theme=' + themeParam
                }
            })
        }

        document.body.appendChild(switchSpan)

        var zoomInSpan = document.createElement('span')
        zoomInSpan.id = 'zoomInSpan'
        zoomInSpan.style.position = 'fixed'
        zoomInSpan.style.right = switchLightDarkModeOptions.right.toString() + 'px'
        zoomInSpan.style.top = (switchLightDarkModeOptions.top + 35).toString() + 'px'
        zoomInSpan.innerHTML = '<?xml version="1.0" encoding="UTF-8"?><svg width="24px" height="24px" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#d1b5ef"><path d="M8 11h3m3 0h-3m0 0V8m0 3v3M17 17l4 4M3 11a8 8 0 1016 0 8 8 0 00-16 0z" stroke="#d1b5ef" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>'

        var zoomOutSpan = document.createElement('span')
        zoomOutSpan.id = 'zoomOutSpan'
        zoomOutSpan.style.position = 'fixed'
        zoomOutSpan.style.right = switchLightDarkModeOptions.right.toString() + 'px'
        zoomOutSpan.style.top = (switchLightDarkModeOptions.top + 70).toString() + 'px'
        zoomOutSpan.innerHTML = '<?xml version="1.0" encoding="UTF-8"?><svg width="24px" height="24px" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#d1b5ef"><path d="M17 17l4 4M3 11a8 8 0 1016 0 8 8 0 00-16 0zM8 11h6" stroke="#d1b5ef" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>'

        var zoomDefaultSpan = document.createElement('span')
        zoomDefaultSpan.id = 'zoomDefaultSpan'
        zoomDefaultSpan.style.position = 'fixed'
        zoomDefaultSpan.style.right = switchLightDarkModeOptions.right.toString() + 'px'
        zoomDefaultSpan.style.top = (switchLightDarkModeOptions.top + 105).toString() + 'px'
        zoomDefaultSpan.innerHTML = '<?xml version="1.0" encoding="UTF-8"?><svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#d1b5ef"><path d="M12 19a7 7 0 100-14 7 7 0 000 14zM12 19v2M5 12H3M12 5V3M19 12h2" stroke="#d1b5ef" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>'

        let defaultSize = 1.0
        let currentSize = defaultSize

        function set(targetSize) {
            document.body.style.zoom = targetSize
            document.body.style.cssText += '; -moz-transform: scale(' + targetSize + ');-moz-transform-origin: 0 0; '
        }

        zoomInSpan.onclick = function () {
            currentSize = currentSize - 0.1
            set(currentSize)
        }

        zoomOutSpan.onclick = function () {
            currentSize = currentSize + 0.1
            set(currentSize)
        }

        zoomDefaultSpan.onclick = function () {
            currentSize = defaultSize
            set(currentSize)
        }

        document.body.appendChild(zoomInSpan)
        document.body.appendChild(zoomOutSpan)
        document.body.appendChild(zoomDefaultSpan)

        var scrollToCommentSpan = document.createElement('span')
        scrollToCommentSpan.id = 'scrollToCommentSpan'
        scrollToCommentSpan.style.position = 'fixed'
        scrollToCommentSpan.style.right = switchLightDarkModeOptions.right.toString() + 'px'
        scrollToCommentSpan.style.top = (switchLightDarkModeOptions.top + 140).toString() + 'px'
        scrollToCommentSpan.innerHTML = '<?xml version="1.0" encoding="UTF-8"?><svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#d1b5ef"><path d="M17 12.5a.5.5 0 100-1 .5.5 0 000 1zM12 12.5a.5.5 0 100-1 .5.5 0 000 1zM7 12.5a.5.5 0 100-1 .5.5 0 000 1z" fill="#d1b5ef" stroke="#d1b5ef" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5L2.5 21.5l4.5-.838A9.955 9.955 0 0012 22z" stroke="#d1b5ef" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>'

        scrollToCommentSpan.onclick = function () {
            document.getElementById('gitalk-container').scrollIntoView({ behavior: 'smooth' })
        }

        document.body.appendChild(scrollToCommentSpan)
    })

    hook.afterEach(function (html, next) {
        next(html)

        if (!switchLightDarkModeOptions.switchDynamicPicture) return

        Array.from(document.getElementsByClassName('dynamicPictureAccordingToThemeMode')).forEach(img => {
            var imgSrc = img.src

            var themeParam = currentThemeMode ? 'buefy' : 'material-palenight'

            if (imgSrc.indexOf('theme=') > -1) {
                img.src = imgSrc.split('theme=')[0] + 'theme=' + themeParam
            }
            else {
                img.src = imgSrc + '&theme=' + themeParam
            }
        })
    })
}

// Docsify plugin options
window.$docsify['switchLightDarkMode'] = Object.assign(
    switchLightDarkModeOptions,
    window.$docsify['switchLightDarkMode']
)
window.$docsify.plugins = [].concat(plugin, window.$docsify.plugins)