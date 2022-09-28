let i=null;const t={notification:document.querySelector(".js-alert")};function e(){t.notification.classList.remove("is-visible")}t.notification.addEventListener("click",(function(){e(),clearTimeout(i)})),t.notification.classList.add("is-visible"),i=setTimeout((()=>{console.log("нужно закрывать алерт"),e()}),3e3);
//# sourceMappingURL=03-notification.e625ebfc.js.map
