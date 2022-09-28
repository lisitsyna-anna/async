!function(){var i=null,t={notification:document.querySelector(".js-alert")};function n(){t.notification.classList.remove("is-visible")}t.notification.addEventListener("click",(function(){n(),clearTimeout(i)})),t.notification.classList.add("is-visible"),i=setTimeout((function(){console.log("нужно закрывать алерт"),n()}),3e3)}();
//# sourceMappingURL=03-notification.37fc6d57.js.map
