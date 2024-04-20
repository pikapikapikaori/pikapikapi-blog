// Docsify plugin functions
function plugin(hook, vm) {

    let curImg = undefined

    let keyframeDuration = 150

    function createKeyframe(tarImg, tarEl, isOpen) {
        let fullImageTop = tarImg.getBoundingClientRect().top + 'px'
        let fullImageLeft = tarImg.getBoundingClientRect().left + 'px'
        let fullImageWidth = tarImg.offsetWidth + 'px'
        let fullImageHeight = tarImg.offsetHeight + 'px'

        let tarImageTop = '10%'
        let tarImageLeft = '10%'
        let tarImageWidth = '80%'
        let tarImageHeight = '80%'

        if (isOpen) {
            tarEl.animate(
                [
                    { 
                        top: fullImageTop, 
                        left: fullImageLeft, 
                        width: fullImageWidth, 
                        height: fullImageHeight, 
                    }, 
                    { 
                        top: tarImageTop, 
                        left: tarImageLeft, 
                        width: tarImageWidth, 
                        height: tarImageHeight, 
                    },
                ],
                keyframeDuration,
            )
        }
        else {
            tarEl.animate(
                [
                    {
                        top: tarImageTop, 
                        left: tarImageLeft, 
                        width: tarImageWidth, 
                        height: tarImageHeight, 
                    }, 
                    {
                        top: fullImageTop, 
                        left: fullImageLeft, 
                        width: fullImageWidth, 
                        height: fullImageHeight, 
                    },
                ],
                keyframeDuration,
            )
        }
    }

    hook.mounted(function () {
        var viewFullImageSpan = document.createElement('span')

        viewFullImageSpan.id = 'viewFullImageSpan'

        var viewFullImageSpanInnerLeftDiv = document.createElement('div')
        var viewFullImageSpanInnerRightDiv = document.createElement('div')

        viewFullImageSpanInnerLeftDiv.id = 'viewFullImageSpanInnerLeftDiv'
        viewFullImageSpanInnerRightDiv.id = 'viewFullImageSpanInnerRightDiv'
        viewFullImageSpanInnerLeftDiv.innerHTML = '<?xml version="1.0" encoding="UTF-8"?><svg width="20px" height="20px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="var(--theme-color,#ea6f5a)"><path d="M15 6l-6 6 6 6" stroke="var(--theme-color,#ea6f5a)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>'
        viewFullImageSpanInnerRightDiv.innerHTML = '<?xml version="1.0" encoding="UTF-8"?><svg width="20px" height="20px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="var(--theme-color,#ea6f5a)"><path d="M9 6l6 6-6 6" stroke="var(--theme-color,#ea6f5a)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>'

        var viewFullImageSpanInnerImgDiv = document.createElement('div')

        viewFullImageSpanInnerImgDiv.id = 'viewFullImageSpanInnerImgDiv'

        var viewFullImageSpanInnerTextDiv = document.createElement('div')

        viewFullImageSpanInnerTextDiv.id = 'viewFullImageSpanInnerTextDiv'

        viewFullImageSpan.appendChild(viewFullImageSpanInnerLeftDiv)
        viewFullImageSpan.appendChild(viewFullImageSpanInnerRightDiv)
        viewFullImageSpan.appendChild(viewFullImageSpanInnerImgDiv)
        viewFullImageSpan.appendChild(viewFullImageSpanInnerTextDiv)

        document.body.appendChild(viewFullImageSpan)

        // true for left button
        function buttonLeftRightOnClick(direction) {
            let viewFullImageSpanInnerImgDiv = document.getElementById('viewFullImageSpanInnerImgDiv')
            let viewFullImageSpanInnerTextDiv = document.getElementById('viewFullImageSpanInnerTextDiv')

            let imgArray = Array.from(document.getElementsByTagName('img')).filter(img => {
                return !(img.className.split(' ').indexOf('ignoreViewFullImageImg') > -1 || img.className.indexOf('emoji') > -1 || img.src.indexOf('avatars.githubusercontent') > -1)
            })

            imgArray.some((img, index, arr) => {
                if (viewFullImageSpanInnerImgDiv.style.backgroundImage.indexOf(img.src) > -1) {
                    newImgIndex = direction ? (index === 0 ? imgArray.length - 1 : index - 1) : (index === imgArray.length - 1 ? 0 : index + 1)
                    viewFullImageSpanInnerImgDiv.style.backgroundImage = 'url(' + imgArray[newImgIndex].src + ')'
                    viewFullImageSpanInnerTextDiv.innerHTML = (newImgIndex + 1).toString() + ' / ' + arr.length.toString()
                    curImg = imgArray[newImgIndex]
                    return true
                }
            })
        }

        let notPreventParentOnClickEventElementId = [viewFullImageSpanInnerImgDiv.id, viewFullImageSpan.id, viewFullImageSpanInnerTextDiv.id,]

        viewFullImageSpan.onclick = async function (e) {
            if (notPreventParentOnClickEventElementId.indexOf(e.target.id) === -1) return
            if (curImg === undefined) return
            createKeyframe (curImg, viewFullImageSpanInnerImgDiv, false)
            await new Promise(r => setTimeout(r, keyframeDuration))
            this.style.display = 'none'
        }

        let touchStartX, touchEndX

        viewFullImageSpan.ontouchstart = function (e) {
            touchStartX = e.targetTouches[0].pageX
        }

        viewFullImageSpan.ontouchend = function (e) {
            touchEndX = e.changedTouches[0].pageX

            if (touchEndX - touchStartX > 40) {
                buttonLeftRightOnClick(true)
            }
            else if (touchEndX - touchStartX < -40) {
                buttonLeftRightOnClick(false)
            }
        }

        viewFullImageSpanInnerLeftDiv.onclick = function (e) {
            buttonLeftRightOnClick(true)
        }
        viewFullImageSpanInnerRightDiv.onclick = function (e) {
            buttonLeftRightOnClick(false)
        }
    })

    hook.doneEach(function () {
        Array.from(document.getElementsByTagName('img')).filter(img => {
            return !(img.className.split(' ').indexOf('ignoreViewFullImageImg') > -1 || img.className.indexOf('emoji') > -1 || img.src.indexOf('avatars.githubusercontent') > -1)
        }).forEach((img, index, arr) => {
            let viewFullImageSpan = document.getElementById('viewFullImageSpan')
            let viewFullImageSpanInnerImgDiv = document.getElementById('viewFullImageSpanInnerImgDiv')
            let viewFullImageSpanInnerTextDiv = document.getElementById('viewFullImageSpanInnerTextDiv')
            img.addEventListener('click', function () {
                curImg = img

                viewFullImageSpanInnerImgDiv.style.backgroundImage = 'url(' + img.src + ')'
                viewFullImageSpan.style.display = 'block'
                viewFullImageSpanInnerTextDiv.innerHTML = (index + 1).toString() + ' / ' + arr.length.toString()

                createKeyframe (curImg, viewFullImageSpanInnerImgDiv, true)
            })
        })
    })
}

window.$docsify.plugins = [].concat(plugin, window.$docsify.plugins)