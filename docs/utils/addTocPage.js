// Docsify plugin functions
function plugin(hook, vm) {
    const tocMarkup = "<!-- toc -->"

    const tocDiv = "<div class='tocPageDiv'></div>"

    const ignoreTocPageList = ["README", "Beginning", "BriefComments", "PersonalTen", "PersonalRecords", "UsefulWebsites"]

    let hasTocs = false

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    function renderSidebar() {
        if (hasTocs) {
            document.body.classList.add("forceClose")
        }
        else {
            document.body.classList.remove("forceClose")
        }
    }

    function imageExists(image_url){

        var http = new XMLHttpRequest();
    
        http.open('HEAD', image_url, false);
        http.send();
    
        return http.status != 404;
    
    }

    function testImgPrefix(imgUrl) {
        let prefixes = ["jpg", "JPG", "gif", "png", "webp", "jpeg"]
        var curPrefix = ""
        prefixes.some(prefix => {
            var isExist = imageExists(imgUrl + "." + prefix)
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
        tocPageDiv = document.getElementsByClassName("tocPageDiv")[0]

        pages = Array.from(document.getElementsByClassName("sidebar-nav")[0].getElementsByTagName("a"))
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

        pages.sort((a,b) => {
            aDate = a.href.substring(a.href.length-8)
            bDate = b.href.substring(b.href.length-8)
            return bDate - aDate
        })

        pages.forEach(page => {
            pageHref = page.href
            tmp = pageHref.replace("index.html#/", "")
            pagePictureHref = tmp.substring(0, tmp.lastIndexOf('/')) + "/_media" + tmp.substring(tmp.lastIndexOf('/')) + "/cover-picture"

            pageImgPrefix = testImgPrefix(pagePictureHref)

            if (pageImgPrefix === "") {
                pagePictureHref = "_media/defaultImg/picture-2.gif"
            }
            else {
                pagePictureHref += "." + pageImgPrefix
            }

            pageHrefDiv = "<a class='tocPageDisplayA' href=" + pageHref + "><div class='tocPageDisplayDiv'><div class='tocPageDisplayTitleImg'><img class='ignoreViewFullImageImg' src='" + pagePictureHref + "' loading='lazy'></div><div class='tocPageDisplayTitleDiv'>" + page.innerHTML + "</div></div></a>"

            tocPageDiv.innerHTML += pageHrefDiv
        })
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
        }
        renderSidebar()
        setDefaultTocs()
    })
}

window.$docsify.plugins = [].concat(plugin, window.$docsify.plugins)
