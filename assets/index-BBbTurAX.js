(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const p=document.querySelector(".time-section"),L=document.querySelector(".date-section"),m=new Date;m.getDay();let l=m.getDate(),a=m.getMonth();const S=m.getFullYear();function h(){const r=new Date;let e=r.getHours(),o=r.getMinutes();r.getSeconds();let i=e<12?"AM":"PM";e=e%12||12,e=e<10?`0${e}`:e,o=o<10?`0${o}`:o,p.innerHTML=`<p class="text-base">${e}:${o} ${i}</p>`}h();l=l<10?`0${l}`:l;a=a<10?`0${a}`:a;L.innerHTML=`<p class="text-sm">${l}/${a}/${S}</p>`;setInterval(()=>{h()},1e3);const c=document.querySelector("nav").querySelectorAll("li"),d=document.getElementById("mario"),f=document.querySelector(".profile-content"),y=document.querySelector(".project-content"),n=document.querySelector(".active");c.forEach(r=>{r.addEventListener("click",()=>{c.forEach(e=>{e.classList.remove("text-white")}),r.classList.add("text-white"),r==c[0]?(n.style.transform="",n.style.width="",d.style.transform="",f.style.transform="",y.style.transform=""):r==c[1]?(n.style.transform="translate(3.5rem)",n.style.width="6rem",d.style.transform="translate(-100vw)",f.style.transform="translate(0)",y.style.transform="translate(100vw)"):r==c[2]&&(n.style.transform="translate(10rem)",n.style.width="6rem",d.style.transform="translate(-200vw)",f.style.transform="translate(-100vw)",y.style.transform="translate(0)")})});const g=document.querySelector(".switch").querySelectorAll("i");g.forEach(r=>{r.addEventListener("click",()=>{g.forEach(e=>{e.classList.toggle("hidden")}),document.querySelector("body").classList.toggle("bg-black"),document.querySelector("body").classList.toggle("text-white"),document.querySelectorAll(".bar").forEach(e=>{e.classList.toggle("bg-white"),e.classList.toggle("bg-black")})})});
