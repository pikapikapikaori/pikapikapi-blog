//default values
var defaultOptions = {
    footerInnerHtml: true
}

// Docsify plugin functions
function plugin(hook, vm) {
    if (!defaultOptions.footerInnerHtml) {
        return
    }
    hook.ready(function () {
        var footer = document.createElement('footer');
        var div = document.createElement('div');
        div.innerHTML = defaultOptions.footerInnerHtml;
        footer.appendChild(div);
        document.getElementById("main").parentNode.insertBefore(footer, undefined)
    })
}

// Docsify plugin options
window.$docsify["addFooterAfterGitalk"] = Object.assign(
    defaultOptions,
    window.$docsify["addFooterAfterGitalk"]
)
window.$docsify.plugins = [].concat(plugin, window.$docsify.plugins)