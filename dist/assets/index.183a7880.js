const a=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))d(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&d(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerpolicy&&(o.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?o.credentials="include":l.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}};a();const c=document.getElementById("switch-menu"),m=document.getElementById("menu");document.getElementById("button");let s=document.getElementById("output");document.getElementById("url-wrong");let u=document.getElementById("input"),g="hsl(257, 27%, 26%)",p="hsl(180, 66%, 49%)",f="hsl(0, 87%, 67%)";c.addEventListener("click",()=>{m.classList.toggle("hidden")});s.addEventListener("click",e=>{let t=document.getElementById("input");if(e.target.id=="button")t.value!=""&&t.value!=null&&t.value!=null?(y(),t.style.outlineColor="initial"):(r(),t.focus(),t.style.outlineColor=f);else if(e.target.hasAttribute("data-name")){let n=e.target.parentNode.previousElementSibling.lastElementChild.textContent;v(n),C(document.querySelectorAll("[data-name]")),b(e.target)}});let r=()=>{let e=document.getElementById("url-wrong");e.classList.remove("hidden"),e.classList.add("block")},y=()=>{axios({method:"post",url:`https://api.shrtco.de/v2/shorten?url=${u.value}`,data:u.value}).then(e=>{if(e.data.ok){let t=document.getElementById("url-wrong");t.classList.remove("block"),t.classList.add("hidden");let n=e.data.result.short_link,d=e.data.result.original_link;h(d,n)}else r()}).catch(e=>{r(),console.log(e)})},h=(e,t)=>{s.innerHTML+=`
        <div class=" bg-white  rounded-md  mt-4  lg:max-w-6xl lg:flex  lg:items-center lg:w-full lg:rounded-lg lg:px-1  lg:-translate-y-24 lg:mt-5" id="single-output">

        <div class="divide-y divide-neutral-bgGray lg:divide-none  lg:w-full lg:flex  lg:justify-between">
            <p class="output-default lg:text-left  lg:h-auto " id="output-default">
            ${e}
            </p>
            <p class="output-short lg:text-right" id="output-short">
            ${t}
            </p>
        </div>

        <div class="px-3 pb-3  lg:py-4" >
            <button data-name="btn" class="btn-blue rounded-md lg:w-36"> Copy </button>
        </div>
    </div> 
    `},v=e=>{var t=document.createElement("textarea");document.body.appendChild(t),t.value=e,t.select(),document.execCommand("copy"),document.body.removeChild(t)},b=e=>{e.textContent="Copied!",e.style.backgroundColor=g,e.style.color="white"},C=e=>{for(let t of e)t.textContent="Copy",t.style.backgroundColor=p};
