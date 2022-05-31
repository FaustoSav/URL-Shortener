const switchMenu = document.getElementById('switch-menu')
const menu = document.getElementById('menu')
let btnSubmit = document.getElementById('button')

let output = document.getElementById('output')
let urlWrong = document.getElementById('url-wrong')

let input = document.getElementById('input')

let violet = 'hsl(257, 27%, 26%)'
let cyan = 'hsl(180, 66%, 49%)'
let red = 'hsl(0, 87%, 67%)'

switchMenu.addEventListener('click', () => {
    menu.classList.toggle('hidden')
})



output.addEventListener('click', (e) => {
    let input = document.getElementById('input')


    if (e.target.id == 'button') {
        if (input.value != '' && input.value != undefined && input.value != null) {
            shortLink()
            input.style.outlineColor = 'initial'

        } else {
            badUrl()
            input.focus()
            input.style.outlineColor = red
        }

    } else if (e.target.hasAttribute('data-name')) {

        let linkToCopy = e.target.parentNode.previousElementSibling.lastElementChild.textContent

        textToClipboard(linkToCopy)
        removeBtnCopied(document.querySelectorAll('[data-name]'))
        addBtnCopied(e.target)

    }



})

let badUrl = () => {
    let urlWrong = document.getElementById('url-wrong')

    urlWrong.classList.remove('hidden')
    urlWrong.classList.add('block')
}

let shortLink = () => {

    axios({
        method: 'post',
        url: `https://api.shrtco.de/v2/shorten?url=${input.value}`,
        data: input.value
    }).then(res => {
        if (res.data.ok) {
            let urlWrong = document.getElementById('url-wrong')

            urlWrong.classList.remove('block')
            urlWrong.classList.add('hidden')


            let newLink = res.data.result.short_link;
            let oldLink = res.data.result.original_link
            addNewLink(oldLink, newLink);
        } else {
            badUrl()
        }

    }).catch(err => {
        badUrl()
        console.log(err);
    })
}

let addNewLink = (def, or) => {

    output.innerHTML +=`
        <div class=" bg-white  rounded-md  mt-4  lg:max-w-6xl lg:flex  lg:items-center lg:w-full lg:rounded-lg lg:px-1  lg:-translate-y-24 lg:mt-5" id="single-output">

        <div class="divide-y divide-neutral-bgGray lg:divide-none  lg:w-full lg:flex  lg:justify-between">
            <p class="output-default lg:text-left  lg:h-auto " id="output-default">
            ${def}
            </p>
            <p class="output-short lg:text-right" id="output-short">
            ${or}
            </p>
        </div>

        <div class="px-3 pb-3  lg:py-4" >
            <button data-name="btn" class="btn-blue rounded-md lg:w-36"> Copy </button>
        </div>
    </div> 
    `

}

let textToClipboard = (text) => {
    var temporalArea = document.createElement("textarea");
    document.body.appendChild(temporalArea);
    temporalArea.value = text;
    temporalArea.select();
    document.execCommand("copy");
    document.body.removeChild(temporalArea);
}
let addBtnCopied = (x) => {
    x.textContent = 'Copied!'
    x.style.backgroundColor = violet
    x.style.color = 'white'
}
let removeBtnCopied = (elements) => {
    for (let element of elements) {
        element.textContent = 'Copy'
        element.style.backgroundColor = cyan

    }
}