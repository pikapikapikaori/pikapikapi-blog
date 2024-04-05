var install = function (hook, vm) {
    hook.doneEach(function () {
        sidebar = document.getElementsByClassName('sidebar')[0]
        appName = sidebar.getElementsByClassName('app-name')[0]
        search = sidebar.getElementsByClassName('search')[0]

        sidebar.insertBefore(appName, search)
    })
}

$docsify.plugins = [].concat(install, $docsify.plugins)