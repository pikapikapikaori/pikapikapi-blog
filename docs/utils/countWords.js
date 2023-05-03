/*
 * @Author: pikapikapikaori pikapikapi_kaori@icloud.com
 * @Date: 2023-04-30 12:57:52
 * @LastEditors: pikapikapikaori pikapikapi_kaori@icloud.com
 * @LastEditTime: 2023-05-01 03:25:28
 * @FilePath: /pikapikapi-blog/docs/utils/countWords.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//default values
var countWordsOptions = {
    countable: true,
    position: "top",
    margin: "10px",
    float: "right",
    fontsize: "0.9em",
    color: "rgb(90,90,90)",
    localization: {
        words: "words",
        minute: "min",
    },
    isExpected: true,
}

// Docsify plugin functions
function plugin(hook, vm) {
    if (!countWordsOptions.countable) {
        return
    }
    let wordsCount
    hook.beforeEach(function (content) {
        // Match regex every time you start parsing .md
        wordsCount = content.match(
            /([\u0800-\u4e00]+?|[\u4e00-\u9fa5]+?|[a-zA-Z0-9]+)/g
        ).length
        return content
    })
    hook.doneEach(function () {
        let tempLocalization = {
            words: "",
            minute: ""
        }
        // Update countWords.localization strings based on options and location.href
        Object.keys(tempLocalization).forEach(key => {
            const textValue = vm.config.countWords.localization[key]

            if (typeof textValue === 'string') {
                tempLocalization[key] = textValue
            }
            else if (typeof textValue === 'object') {
                Object.keys(textValue).some(match => {
                    const isMatch = location.href.indexOf(match) > -1

                    tempLocalization[key] = isMatch ? textValue[match] : vm.config.countWords.localization[key]

                    return isMatch
                })
            }
        })

        // Support localization
        let str = wordsCount + " " + tempLocalization.words
        let readTime = Math.ceil(wordsCount / 400) + " " + tempLocalization.minute

        document.getElementById("countWordsBlockSpan").innerText = str.concat(" | ").concat(countWordsOptions.isExpected ? readTime : "")
    })
    hook.afterEach(function (html, next) {
        //add html string
        next(
            `
        ${countWordsOptions.position === "bottom" ? html : ""}
        <div id="countWordsBlockSpanDiv" style="margin-${countWordsOptions.position ? "bottom" : "top"}: ${countWordsOptions.margin
            };">
            <span id="countWordsBlockSpan" style="
                  float: ${countWordsOptions.float === "right" ? "right" : "left"};
                  font-size: ${countWordsOptions.fontsize};
                  color:${countWordsOptions.color};">
            </span>
            <div style="clear: both"></div>
        </div>
        ${countWordsOptions.position !== "bottom" ? html : ""}
        `
        )
    })
}

// Docsify plugin options
window.$docsify["countWords"] = Object.assign(
    countWordsOptions,
    window.$docsify["countWords"]
)
window.$docsify.plugins = [].concat(plugin, window.$docsify.plugins)