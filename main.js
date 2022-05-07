(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{hM:()=>p,KK:()=>N,az:()=>J});var t={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__button",submitButtonDisabledClass:"form__button_disabled",inputErrorClass:"form__input-error_type_active",inputTypeErrorClass:"form__input_type_error"};function n(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=e.querySelector(t.submitButtonSelector);n?(r.classList.remove(t.submitButtonDisabledClass),r.disabled=!1):(r.classList.add(t.submitButtonDisabledClass),r.disabled="disabled")}var r=document.querySelector(".popup_type_addCard"),o=document.querySelector(".cards"),c=document.querySelector("#templateCards").content;function a(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Сохранение...";t.target.querySelector(".form__button").textContent=n}function i(e){if("Escape"===e.key){var t=document.querySelector(".popup_opened");s(t)}}var u=function(e){e.classList.add("popup_opened"),document.addEventListener("keydown",i)},s=function(e){e.classList.remove("popup_opened"),document.removeEventListener("keydown",i)};function l(e,t,n){var r=function(e,t,n){var r=c.cloneNode(!0),o=r.querySelector(".cards__image");r.querySelector(".cards__text").textContent=e.name,o.setAttribute("src",e.link),o.setAttribute("alt",e.name),r.querySelector(".cards__like").textContent=e.likes.length;var a=r.querySelector(".cards__heart"),i=r.querySelector(".cards__like");if(e.likes.forEach((function(e){e._id==p&&a.classList.add("cards__heart_active")})),a.addEventListener("click",(function(){a.classList.contains("cards__heart_active")?n(e._id,a,i):t(e._id,a,i)})),r.querySelector(".cards__image").addEventListener("click",(function(){N(e.name,e.link)})),e.owner._id===p){var u=r.querySelector(".cards__trash");u.addEventListener("click",(function(){J(u.closest(".cards__item"),e._id)})),u.classList.remove("cards__trash_hidden")}return r}(e,t,n);o.prepend(r)}var d={baseUrl:"https://nomoreparties.co/v1/plus-cohort-9",headers:{authorization:"d155811e-206c-4e5d-a1d4-99707bccdbdf","Content-Type":"application/json"}},f=function(e){return e.ok?e.json():Promise.reject(e.status)};function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var p="",_=document.querySelector(".profile__buttom-add"),h=document.querySelectorAll(".popup"),v=document.querySelector(".profile__title"),y=document.querySelector(".profile__subtitle"),b=document.querySelector(".profile__avatar"),S=document.querySelector(".popup_type_profile"),q=document.querySelector(".profile__buttom-info"),E=document.forms.form_profile,g=E.elements.name,C=E.elements.character,L=document.forms.form_editAvatar,k=L.elements.linkAvatar,A=document.querySelector(".popup_type_DelCard"),x=A.querySelector(".form__button"),T=document.querySelector(".popup_type_openImegeCard"),U=T.querySelector(".popup__title-openImegeCard"),D=T.querySelector(".popup__img"),w=document.forms.form_addCard,O=w.elements.title,j=w.elements.link,P=document.querySelector(".popup_type_editAvatar"),B=document.querySelector(".profile__edit-avatar"),I=function(e){v.textContent=e.name,y.textContent=e.about,b.src=e.avatar,p=e._id};function N(e,t){u(T),D.setAttribute("src",t),D.setAttribute("alt",e),U.textContent=e}function J(e,t){u(A),x.addEventListener("click",(function n(){var r;(r=t,fetch("".concat(d.baseUrl,"/cards/").concat(r),{method:"DELETE",headers:d.headers}).then((function(e){return f(e)}))).then((function(){s(A),e.remove()})).catch((function(e){console.log("Ошибка: ".concat(e))})),this.removeEventListener("click",n)}))}var M,z=function(e,t,n){var r;(r=e,fetch("".concat(d.baseUrl,"/cards/likes/").concat(r),{method:"DELETE",headers:d.headers}).then((function(e){return f(e)}))).then((function(e){!function(e,t,n){t.textContent=e.likes.length,n.classList.remove("cards__heart_active")}(e,n,t)})).catch((function(e){console.log("Ошибка: ".concat(e))}))},H=function(e,t,n){var r;(r=e,fetch("".concat(d.baseUrl,"/cards/likes/").concat(r),{method:"PUT",headers:d.headers}).then((function(e){return f(e)}))).then((function(e){!function(e,t,n){t.textContent=e.likes.length,n.classList.add("cards__heart_active")}(e,n,t)})).catch((function(e){console.log("Ошибка: ".concat(e))}))};Promise.all([fetch("".concat(d.baseUrl,"/users/me"),{headers:d.headers}).then((function(e){return f(e)})),fetch("".concat(d.baseUrl,"/cards"),{headers:d.headers}).then((function(e){return f(e)}))]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c=[],a=!0,i=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(c.push(r.value),!t||c.length!==t);a=!0);}catch(e){i=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(i)throw o}}return c}}(t,n)||function(e,t){if(e){if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],c=r[1];I(o),c.reverse().forEach((function(e){l(e,H,z)}))})).catch((function(e){console.log("Ошибка: ".concat(e))})),M=t,Array.from(document.querySelectorAll(M.formSelector)).forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){Array.from(e.querySelectorAll(t.inputSelector)).forEach((function(r){r.addEventListener("input",(function(){!function(e,t,n){t.validity.valid?function(e,t,n){t.classList.remove(n.inputTypeErrorClass),e.querySelector(".".concat(t.id,"-error")).textContent="error",e.querySelector(".".concat(t.id,"-error")).classList.remove(n.inputErrorClass)}(e,t,n):function(e,t,n,r){t.classList.add(r.inputTypeErrorClass),e.querySelector(".".concat(t.id,"-error")).textContent=n,e.querySelector(".".concat(t.id,"-error")).classList.add(r.inputErrorClass)}(e,t,t.validationMessage,n)}(e,r,t),n(e,t,e.checkValidity())}))}))}(e,M)})),q.addEventListener("click",(function(){n(S,t),g.value=v.textContent,C.value=y.textContent,u(S)})),E.addEventListener("submit",(function(e){var t,n,r=e.target.querySelector(".form__button").textContent;a(!0,e),e.preventDefault(),(t=g.value,n=C.value,fetch("".concat(d.baseUrl,"/users/me"),{method:"PATCH",headers:d.headers,body:JSON.stringify({name:t,about:n})}).then((function(e){return f(e)}))).then((function(e){I(e),s(S)})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){a(!1,e,r)}))})),_.addEventListener("click",(function(){w.reset(),n(r,t),u(r)})),w.addEventListener("submit",(function(e){var t,n,o=e.target.querySelector(".form__button").textContent;a(!0,e),e.preventDefault(),(t=O.value,n=j.value,fetch("".concat(d.baseUrl,"/cards"),{method:"POST",headers:d.headers,body:JSON.stringify({name:t,link:n})}).then((function(e){return f(e)}))).then((function(e){l(e,H,z),s(r)})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){a(!1,e,o)}))})),B.addEventListener("click",(function(){L.reset(),n(P,t),u(P)})),L.addEventListener("submit",(function(e){e.preventDefault();var t,n=e.target.querySelector(".form__button").textContent;a(!0,e),(t=k.value,fetch("".concat(d.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:d.headers,body:JSON.stringify({avatar:t})}).then((function(e){return f(e)}))).then((function(e){document.querySelector(".profile__avatar").src=e.avatar,s(P)})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){a(!1,e,n)}))})),h.forEach((function(e){e.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_opened")&&s(e),t.target.classList.contains("popup__button-сlose")&&s(e)}))}))})();