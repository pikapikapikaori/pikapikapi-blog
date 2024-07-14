function plugin(hook, vm) {
    let backgrounds = [
        '_media/coverBackgrounds/cover-1.jpg',
        '_media/coverBackgrounds/cover-2.jpg',
        '_media/coverBackgrounds/cover-3.jpg',
    ]

    let numberOfImages = 3 // Change this to the number of background images

    let interval = 8 * 1000

    hook.doneEach(function () {
        let cover = document.getElementsByClassName('cover')[0]
        cover.classList.add('dynamicCover')
        let mask = cover.getElementsByClassName('mask')[0]
        mask.style.opacity = .6

        var curImgId = 1
        setInterval(function () {
            cover.style.backgroundImage = 'url(' + backgrounds[curImgId] + ')'
            curImgId = (curImgId + 1) % numberOfImages
        }, interval)
    })
}

window.$docsify.plugins = [].concat(plugin, window.$docsify.plugins)
