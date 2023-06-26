function plugin(hook, vm) {
    hook.afterEach(async function (html, next) {
        var updated = ''
        date_url = 'https://api.github.com/repos/' + vm.config.lastUpdatedTime.url + '/commits?path=' + vm.config.lastUpdatedTime.basePath + vm.route.file
        await fetch(date_url)
            .then((response) => {
                return response.json()
            })
            .then((commits) => {
                try {
                    updated = tinydate(vm.config.lastUpdatedTime.dateFormat)(new Date(commits[0]['commit']['committer']['date']))
                }
                catch (err) {
                    updated = '---'
                }
            })
        next(html.replace(/{docsify-updated}/g, updated))
    })
}

window.$docsify.plugins = [].concat(plugin, window.$docsify.plugins)
