function plugin(hook, vm) {
    hook.doneEach(function () {
        let cover = document.getElementsByClassName('cover')[0]
        cover.classList.add('dynamicCover')
        let mask = cover.getElementsByClassName('mask')[0]
        mask.style.opacity = .6
    })
}

window.$docsify.plugins = [].concat(plugin, window.$docsify.plugins)