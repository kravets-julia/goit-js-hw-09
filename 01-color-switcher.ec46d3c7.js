!function(){var e=null,t=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]"),o=document.querySelector("body");t.addEventListener("click",(function(){e=setInterval((function(){o.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3,1e3),t.disabled=!0,n.disabled=!1})),n.addEventListener("click",(function(){clearInterval(e),t.disabled=!1,n.disabled=!0})),console.log(o)}();
//# sourceMappingURL=01-color-switcher.ec46d3c7.js.map