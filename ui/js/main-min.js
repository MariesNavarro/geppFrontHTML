"use strict";function _(t){return document.querySelector(t)}function __(t){return document.querySelectorAll(t)}function promoTabs(t,e){var o=_("#promoTabs"),s=__(".tabButtons");o.style.left=t;for(var r=0;r<s.length;r++)s[r].setAttribute("class","trans5 tabButtons");e.setAttribute("class","trans5 tabButtons selectTab")}function menuMobile(t,e){var o=_("#menuMobile"),s=_(".login, .body"),r=e.children[0];"open"===t?(s.style.position="fixed",o.setAttribute("class","displayFlex trans5"),e.setAttribute("onclick","menuMobile('close', this)"),r.setAttribute("class","hamburgerMenu menuCross displayFlex"),setTimeout(function(){o.style.opacity="1",r.setAttribute("class","hamburgerMenu hoverCross menuCross displayFlex")},700)):(s.style.position="absolute",o.style.opacity="0",e.setAttribute("onclick","menuMobile('open', this)"),r.setAttribute("class","hamburgerMenu hamburgerHover displayFlex"),setTimeout(function(){o.setAttribute("class","displayNone trans5")},700))}function errorOnLog(t){var e=_("#errorLog");e.style.height="open"===t?"70px":"0"}function putUserName(){for(var t=__(".userName"),e=0;e<t.length;e++)t[e].innerHTML="Blablah"}function closeLog(){console.log("Cerrar log")}function getPassForgot(){console.log("Recuperar correo")}