// Docsify plugin functions
function plugin(hook, vm) {
    const tocMarkup = '<!-- toc -->'

    const tocDiv = '<div class=\'tocPageDiv\'></div><div class=\'tocPaginatorDiv\'><div class=\'tocPaginatorLeftButtonDiv tocPaginatorButtonDiv\'><?xml version="1.0" encoding="UTF-8"?><svg width="20px" height="20px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="var(--theme-color,#ea6f5a)"><path d="M15 6l-6 6 6 6" stroke="var(--theme-color,#ea6f5a)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><div class=\'tocPaginatorInput\'></div><div class=\'tocPaginatorRightButtonDiv tocPaginatorButtonDiv\'><?xml version="1.0" encoding="UTF-8"?><svg width="20px" height="20px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="var(--theme-color,#ea6f5a)"><path d="M9 6l6 6-6 6" stroke="var(--theme-color,#ea6f5a)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div></div>'

    const ignoreTocPageList = ['README', 'PersonalTen', 'PersonalRecords',]

    const prefixes = ['JPG', 'jpg', 'webp', 'gif', 'jpeg', 'png', ]

    const recentAmount = 8

    let hasTocs = false

    let sortedPages = []

    let curPageIndex = 1

    let maxPageIndex = 1

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    function renderSidebar() {
        if (hasTocs) {
            document.body.classList.add('forceClose')
        }
        else {
            document.body.classList.remove('forceClose')
        }
    }

    function imageExists(image_url) {

        var http = new XMLHttpRequest()

        http.open('HEAD', image_url, false)
        http.send()

        return http.status != 404

    }

    function testImgPrefix(imgUrl) {
        var curPrefix = ''
        prefixes.some(prefix => {
            var isExist = imageExists(imgUrl + '.' + prefix)
            if (isExist) {
                curPrefix = prefix
            }
            return isExist
        })

        return curPrefix
    }

    function setDefaultTocs() {
        hasTocs = false
    }

    function renderTocStage1(content, vm) {
        return content.replace(tocMarkup, tocDiv)
    }

    function renderTocContents() {
        pages = Array.from(document.getElementsByClassName('sidebar-nav')[0].getElementsByTagName('a'))
        pages.shift()

        pages = pages.filter(page => {
            var flag = false

            ignoreTocPageList.forEach(singleton => {
                if (page.href.indexOf(singleton) > 0) {
                    flag = true
                }
            })

            return !flag
        })

        pages.sort((a, b) => {
            aDate = a.href.substring(a.href.length - 8)
            bDate = b.href.substring(b.href.length - 8)

            if (Number.isNaN(aDate - '0')) {
                aDate = '-1'
            }

            if (Number.isNaN(bDate - '0')) {
                bDate = '-1'
            }

            return bDate - aDate
        })

        sortedPages = pages

        maxPageIndex = Math.ceil(pages.length / recentAmount)

        renderTocPageUnderPaginator()
    }

    function renderTocPageUnderPaginator () {
        tocPageDiv = document.getElementsByClassName('tocPageDiv')[0]
        tocPageDiv.innerHTML = ''

        if (curPageIndex < 1) {
            curPageIndex = 1
        }

        if (curPageIndex > maxPageIndex) {
            curPageIndex = maxPageIndex
        }

        let pages = sortedPages.slice((curPageIndex - 1) * recentAmount, curPageIndex * recentAmount)

        pages.forEach(page => {
            pageHref = page.href
            tmp = pageHref.replace('index.html#/', '').replace('#/', '')
            pagePictureHref = tmp.substring(0, tmp.lastIndexOf('/')) + '/_media' + tmp.substring(tmp.lastIndexOf('/')) + '/cover-picture'

            pageImgPrefix = testImgPrefix(pagePictureHref)

            if (pageImgPrefix === '') {
                pagePictureHref = '_media/defaultImg/picture-2.gif'
            }
            else {
                pagePictureHref += '.' + pageImgPrefix
            }

            pageHrefDiv = '<a class=\'tocPageDisplayA\' href=' + pageHref + '><div class=\'tocPageDisplayDiv\'><div class=\'tocPageDisplayTitleImg\'><img class=\'ignoreViewFullImageImg\' src=\'' + pagePictureHref + '\' loading=\'lazy\'></div><div class=\'tocPageDisplayTitleDiv\'>' + page.innerHTML + '</div></div></a>'

            tocPageDiv.innerHTML += pageHrefDiv
        })

        tocPaginatorInputDiv = document.getElementsByClassName('tocPaginatorInput')
        if (tocPaginatorInputDiv.length > 0) {
            tocPaginatorInputDiv = tocPaginatorInputDiv[0]
            if (tocPaginatorInputDiv.hasChildNodes()) {
                tocPaginatorInputDiv.childNodes[0].value = curPageIndex
            }
        }
    }

    function renderTocPaginator() {
        tocPaginatorDiv = document.getElementsByClassName('tocPaginatorDiv')[0]
        tocPaginatorInputDiv = document.getElementsByClassName('tocPaginatorInput')[0]
        tocPaginatorLeftButtonDiv = document.getElementsByClassName('tocPaginatorLeftButtonDiv')[0]
        tocPaginatorRightButtonDiv = document.getElementsByClassName('tocPaginatorRightButtonDiv')[0]

        tocPaginatorLeftButtonDiv.onclick = function (e) {
            if (curPageIndex > 1) {
                curPageIndex -= 1
                renderTocPageUnderPaginator ()
            }
        }
        tocPaginatorRightButtonDiv.onclick = function (e) {
            if (curPageIndex < maxPageIndex) {
                curPageIndex += 1
                renderTocPageUnderPaginator ()
            }
        }

        tocPaginatorInputDiv.innerHTML = '<input class=\'tocPaginatorInputBox\' type=\'number\' value=\'' + curPageIndex + '\' min=\'1\' max=\'' + maxPageIndex + '\'></input><span>/</span><span>' + maxPageIndex + '</span>'

        tocPaginatorInput = tocPaginatorInputDiv.childNodes[0]

        tocPaginatorInput.onchange = function () {
            curPageIndex = this.value

            renderTocPageUnderPaginator()

            this.value = curPageIndex
        }
    }

    hook.beforeEach(function (content) {
        hasTocs = content.includes(tocMarkup)

        if (hasTocs) {
            content = renderTocStage1(content, vm)
        }

        return content
    })

    hook.doneEach(function () {
        if (hasTocs) {
            renderTocContents()
            renderTocPaginator()
        }
        renderSidebar()
        setDefaultTocs()
    })
}

window.$docsify.plugins = [].concat(plugin, window.$docsify.plugins)
