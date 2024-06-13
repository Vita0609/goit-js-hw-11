import{S as d,i as c}from"./assets/vendor-0fc460d7.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const u="44362939-998edb8f92844eab0dd18e81c",h=o=>{const i=new URLSearchParams({image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?key=${u}&q=${o}&${i}`).then(s=>{if(!s.ok)throw new Error("Помилка при отриманні запиту");return s.json()})},p=new d(".card-link",{inlineStyles:!1,captionsData:"alt",captionDelay:250,disableScroll:!0}),f=(o,i)=>{const s=o.map(t=>`<li class="card">
                <a class="card-link" href="${t.largeImageURL}">
                    <img  class="card-image" src="${t.webformatURL}" alt="${t.tags}" /> 
                </a>
                <div class="main-content">
                    <ul class="card-list">
                        <li class="card-list-li">
                            <h3>
                                likes
                            </h3>
                            <p>${t.likes}</p>
                        </li>
                        <li class="card-list-li">
                            <h3>
                                views
                            </h3>
                            <p>${t.views}</p>
                        </li>
                        <li class="card-list-li">
                            <h3>
                                comments
                            </h3>
                            <p>${t.comments}</p>
                        </li>
                        <li class="card-list-li">
                            <h3>
                                downloads
                            </h3>
                            <p>${t.downloads}</p>
                        </li>
                    </ul>
                </div>
            </li>`);i.insertAdjacentHTML("beforeend",s.join("")),p.refresh()},m=document.querySelector("form"),y=document.querySelector("input[data-search]"),n=document.querySelector(".loader-div"),l=document.querySelector(".list");m.addEventListener("submit",o=>{o.preventDefault(),n.style.visibility="visible";const i=y.value.trim();if(l.innerHTML="",i!==""){c.error({message:"The field cannot be empty"});return}h(i).then(s=>{const t=s.hits;t.length!==0?f(t,l):c.show({title:"",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",backgroundColor:"#E25757",position:"topRight"})}).catch(s=>{console.error("Помилка при рендері картинок",s),c.show({title:"",message:"Sorry, check your internet connection!",messageColor:"white",backgroundColor:"#E25757",position:"topRight",timeout:5e3})}).finally(()=>{n.style.visibility="hidden",o.target.reset()})});
//# sourceMappingURL=commonHelpers.js.map
