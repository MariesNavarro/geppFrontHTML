"use strict";function _(e){return document.querySelector(e)}function __(e){return document.querySelectorAll(e)}function promoTabs(e,t){var n=_("#promoTabs"),s=__(".tabButtons");n.style.left=e;for(var i=0;i<s.length;i++)s[i].setAttribute("class","trans5 tabButtons");t.setAttribute("class","trans5 tabButtons selectTab")}function menuMobile(e,t){var n=_("#menuMobile"),s=_(".login, .body"),i=t.children[0];"open"===e?(s.style.position="fixed",n.setAttribute("class","displayFlex trans5"),t.setAttribute("onclick","menuMobile('close', this)"),i.setAttribute("class","hamburgerMenu menuCross displayFlex"),setTimeout(function(){n.style.opacity="1",i.setAttribute("class","hamburgerMenu hoverCross menuCross displayFlex")},700)):(s.style.position="absolute",n.style.opacity="0",t.setAttribute("onclick","menuMobile('open', this)"),i.setAttribute("class","hamburgerMenu hamburgerHover displayFlex"),setTimeout(function(){n.setAttribute("class","displayNone trans5")},700))}function errorOnLog(e){var t=_("#errorLog");t.style.height="open"===e?"70px":"0"}function putUserName(){for(var e=__(".userName"),t=0;t<e.length;t++)e[t].innerHTML="Blablah"}function closeLog(){console.log("Cerrar log")}function getPassForgot(){console.log("Recuperar correo")}function menuConfig(e){var t=_("#extMenu");"open"===e?t.style.left="0":"close"===e&&(t.style.left="-100vw")}function hideMenuConfig(e,t){var n,s,i,o,r,l,c,a,u=[n=_("#menuConfigNav"),s=_("#menuConfig"),c=_("#indexConfig"),a=_("#menuConfig>ul"),i=_("#configWrap"),o=_("#configFoot"),r=_("#menuConfigNav > div> .logo"),l=_("#dragonConfig")];if("hide"===e)t.setAttribute("onclick","hideMenuConfig('show', this)"),n.style.width="50px",i.style.width="calc(100% - 50px)",s.style.margin="5px",c.style.top="120px",a.style.height="100px",l.style.display="block",r.style.display="none",o.style.display="none";else if("show"===e){t.setAttribute("onclick","hideMenuConfig('hide', this)");for(var p=0;p<u.length;p++)u[p].setAttribute("style"," ")}}function loadFileName(e){var t=e.nextElementSibling,n=e.children[1];t.addEventListener("change",function(){n.innerHTML=t.files[0].name})}function sliderConfigFun(e){var t=_("#sliderConfig"),n=__(".bulletStep>circle");switch(s(),i(e),e<5&&n[e].setAttribute("class","stepInProgress trans5"),e){case 0:t.style.marginLeft="0";break;case 1:t.style.marginLeft="-100%";break;case 2:t.style.marginLeft="-200%";break;case 3:t.style.marginLeft="-300%";break;case 4:t.style.marginLeft="-400%"}function s(){for(var e=0;e<n.length;e++)n[e].setAttribute("class","stepUncomplete trans5")}function i(e){for(var t=e;0<t;t--)n[t-1].setAttribute("class","stepComplete trans5")}}function loadFileCSV(e){var t=e.nextElementSibling,n=_("#msgCsvUpload"),s=_("#imgCheck"),i=n.nextElementSibling,o=__(".infoLoadCSV");t.addEventListener("change",function(){for(var e=0;e<o.length;e++)o[e].style.opacity="0",o[e].style.display="none";csvLoaded=!0,s.setAttribute("src","ui/img/ic/check.svg"),n.innerHTML=t.files[0].name,i.setAttribute("class","displayBlock trans5")})}function cleanCsv(e){var t=_("#formCSV"),n=_("#couponsUpload"),s=_("#msgCsvUpload"),i=_("#imgCheck"),o=__(".infoLoadCSV");csvLoaded=!1;for(var r=0;r<o.length;r++)o[r].style.opacity="0",o[r].style.display="none";i.setAttribute("src","ui/img/ic/upload.svg"),e.setAttribute("class","displayNone trans5"),s.innerHTML="Escoge un archivo .csv"}var numCupones,csvLoaded=!1;function getNumCSV(){var e=_(".numCSV"),t=_(".noneNumCSV"),n=_("#numCSV");csvLoaded?(n.innerHTML=numCupones,e.style.display="block",setTimeout(function(){e.style.opacity="1"},500)):(t.style.display="block",setTimeout(function(){t.style.opacity="1"},500))}var compactMenu=!1;function checkSteps(e,t){var n=window.innerWidth;switch(e){case 1:checkConfig_1(e,t);break;case 2:responseStep(e,t,1);break;case 3:compactMenu=!1,compactConfigMenu(1),responseStep(e,t,1);break;case 4:compactMenu=!0,880<=n&&compactConfigMenu(0),responseStep(e,t,1);break;case 5:responseStep(e,t,1)}}function compactConfigMenu(e){var t=_("#toggleMenuArrow"),n=t.children[0],s=_("#menuConfig");0===e?(t.style.display="none",hideMenuConfig("hide",t),s.setAttribute("style"," ")):1===e&&(t.style.display="block",hideMenuConfig("show",t))}function checkConfig_1(e,t){responseConfig_1(e,t,1,1,1,1,1,1)}function responseConfig_1(e,t,n,s,i,o,r,l){var c=n+s+i+o+r+l,a=__(".labelData1"),u=__(".inputData1");if(6===c){for(var p=0;p<a.length;p++)a[p].setAttribute("style"," "),u[p].setAttribute("style"," ");responseStep(e,t,1)}else c<6&&responseStep(e,t,0);function f(e){a[e].style.color="#D8353D",u[e].style.color="#D8353D"}0===n&&f(0),0===s&&f(1),0===i&&f(2),0===o&&f(3),0===r&&f(4),0===l&&f(5)}function responseStep(e,t,n){var s=t.parentElement.parentElement.children[0],i=s.children[0];0===n?(s.style.height="40px",s.style.opacity="1"):1===n&&(s.setAttribute("style"," "),sliderConfigFun(e))}function openLinks(e,t){var n=t.parentElement.parentElement,s=n.lastElementChild;"open"===e?(t.setAttribute("onclick","openLinks('close', this)"),n.style.height="100px",s.style.height="50px",s.style.display="block"):"close"===e&&(t.setAttribute("onclick","openLinks('open', this)"),n.style.height="auto",s.style.height="0",s.style.display="none")}function rContEditor(e){var e=_(e),t,n,s=(window.innerWidth-350)*.5625;e.style.height=s+"px"}var countSliderMobScreens=0;function sliderMobScreens(e){var t=["Carga","Inicio","Cupón","Mensaje Éxito","Mensaje Error"],n=_("#pagScreen"),s=_("#indexPagScreen");s.innerHTML=(n.innerHTML=("next"===e?4<++countSliderMobScreens&&(countSliderMobScreens=0):--countSliderMobScreens<0&&(countSliderMobScreens=4),t[countSliderMobScreens]),countSliderMobScreens+1),changeScreen(countSliderMobScreens)}function selectClassScreens(e){for(var t=__(".indexScreenDesk"),n=0;n<t.length;n++)t[n].setAttribute("class","indexScreenDesk screenDeskUnselect");t[e].setAttribute("class","indexScreenDesk screenDeskSelect")}function changeScreen(e){var t;_("#iframePlantilla").contentWindow.screensOnConf(e),selectClassScreens(e)}