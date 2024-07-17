function plugin(hook, vm) {

    const query = '.markdown-section p a,.markdown-section li a,.markdown-section blockquote a,.markdown-section table a'

    const linkSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path><path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"></path></svg>'

    hook.doneEach(function () {
        Array.from(document.querySelectorAll(query)).forEach(a => {
            var curLink = a.href.split('?')[0]
            var documentLink = document.baseURI.split('?')[0]

            if (curLink !== documentLink) {
                a.innerHTML += linkSvg
            }
        })
    })
}

window.$docsify.plugins = [].concat(plugin, window.$docsify.plugins)
