(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(r){if(r.ep)return;r.ep=!0;const n=o(r);fetch(r.href,n)}})();function d(e){let t=document.createElement("div");t.className="card";let o=document.createElement("a");return o.href=e.homepage!=null&&e.homepage!=""&&e.homepage!="null"&&e.homepage!="undefined"&&e.homepage.includes("https://")?e.homepage:e.html_url,o.target="_blank",o.title=e.name,o.innerHTML=`
  <div>
    <h3 class="name">${e.name.replaceAll("_"," ")}</h3>
    <h5 class="description">${e.description==null?"":e.description}</h5>
</div>`,t.appendChild(o),t.innerHTML+=`<div class="upper_card">
    <a href="${e.html_url}" target="_blank" class="btn">Repo</a>
</div>`,t}async function h(){const e="https://api.github.com/users/Rohit19060/repos";let t=[],o=e;for(;o;){const a=await fetch(o,{headers:{Accept:"application/vnd.github.v3+json"}});if(!a.ok)throw new Error(`Error fetching repos: ${a.statusText}`);const n=(await a.json()).map(c=>({name:c.name,description:c.description,html_url:c.html_url,owner:c.owner.login,fork:c.fork,homepage:c.homepage}));t=t.concat(n);const i=a.headers.get("link"),l=i==null?void 0:i.match(/<([^>]+)>;\s*rel="next"/);o=l?l[1]:null}return t}function p(e){return`<a href="${e}" class="github-corner" aria-label="View source on GitHub"><svg
            width="80" height="80" viewBox="0 0 250 250"
            style="fill:#151513; color:#fff; position: absolute; top: 0; border: 0; right: 0;" aria-hidden="true">
            <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
            <path
                d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
                fill="currentColor" style="transform-origin: 130px 106px;" class="github-arm"></path>
            <path
                d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
                fill="currentColor" class="octo-body"></path>
        </svg>
    </a>`}let u=document.createElement("div"),s=[];async function m(){s=(await h()).sort((e,t)=>e.fork?1:t.fork?-1:0)}m().then(()=>{s.forEach(t=>{u.appendChild(d(t))}),document.querySelector("#app").innerHTML=`
    <div class="header"><h1>My Projects</h1></div>
    <div>${p("https://github.com/Rohit19060/rohit19060.github.io")}</div>
    <div class="text-center">
        <input type="search" name="search" id="search" placeholder="Search" title="Search">
    </div>
    <main></main>`,document.querySelector("main").appendChild(u),document.getElementById("search").addEventListener("input",t=>{let o=document.createElement("div"),a=t.target.value;s.filter(n=>n.name.toLowerCase().includes(a.toLowerCase())).forEach(n=>{o.appendChild(d(n))}),document.querySelector("main").innerHTML="",document.querySelector("main").appendChild(o)})});
