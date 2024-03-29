"use strict";
function _(el){return document.querySelector(el); }
function __(el){return document.querySelectorAll(el); }

function showLoading(e){
  var wr = _("#loadingConf");
  if(e === 1){
    wr.setAttribute("style", " ");
  } else {
    wr.style.display = "none";
  }
}


function promoTabs(p,t){
  var w = _("#promoTabs"),
      ch = __(".tabButtons");
  w.style.left = p;
  for (var i = 0; i < ch.length; i++) {
    ch[i].setAttribute("class", "trans5 tabButtons");
  }
  t.setAttribute("class", "trans5 tabButtons selectTab");
}


function menuMobile(e, t){
  var w = _("#menuMobile"),
      b = _('.login, .body'),
      c = t.children[0];
  if(e === "open"){
    b.style.position = "fixed";
    w.setAttribute("class", "displayFlex trans5");
    t.setAttribute("onclick", "menuMobile('close', this)");
    c.setAttribute("class", "hamburgerMenu menuCross displayFlex");
    setTimeout(function(){
      w.style.opacity = "1";
      c.setAttribute("class", "hamburgerMenu hoverCross menuCross displayFlex");
    },700);
  } else {
    b.style.position = "absolute";
    w.style.opacity = "0";
    t.setAttribute("onclick", "menuMobile('open', this)");
    c.setAttribute("class", "hamburgerMenu hamburgerHover displayFlex");
    setTimeout(function(){
      w.setAttribute("class", "displayNone trans5");
    },700);
  }
}

function errorOnLog(e){
  var w = _("#errorLog");
  if(e === "open"){
    w.style.height = "70px";
  } else {
    w.style.height = "0";
  }
}


function putUserName(){
  var p = __(".userName");
  for (var i = 0; i < p.length; i++) {
    p[i].innerHTML = "Blablah"; //Nombre de usuario
  }
}

function closeLog(){
  console.log("Cerrar log");
}

function getPassForgot(){
  console.log("Recuperar correo");
}

function menuConfig(e){
  var w = _("#extMenu");
  if(e === "open"){
    w.style.left = "0";
  } else if (e === "close") {
    w.style.left = "-100vw";
  }
}

function hideMenuConfig(e, t){
  var m, mSub, w, foot, logo, dragon, index, ul;
  var elems = [m = _("#menuConfigNav"),
              mSub = _("#menuConfig"),
              index = _("#indexConfig"),
              ul = _("#menuConfig>ul"),
              w = _("#configWrap"),
              foot = _("#configFoot"),
              logo = _("#menuConfigNav > div> .logo"),
              dragon = _("#dragonConfig")];
  if(e === "hide"){
      t.setAttribute("onclick", "hideMenuConfig('show', this)");
      m.style.width  = "50px";
      w.style.width = "calc(100% - 50px)";
      mSub.style.margin = "5px";
      index.style.top = "120px";
      ul.style.height = "100px";
      dragon.style.display = "block";
      logo.style.display = "none";
      foot.style.display = "none";
  } else if(e === "show") {
    t.setAttribute("onclick", "hideMenuConfig('hide', this)");
    for (var i = 0; i < elems.length; i++) {
      elems[i].setAttribute("style", " ");
    }
  }
}

function loadFileName(t){
  var file = t.nextElementSibling,
      fileNameW = t.children[1];
  file.addEventListener("change", function(){
    fileNameW.innerHTML = file.files[0].name;
  });
}

function sliderConfigFun(e){
  var w = _("#sliderConfig"),
      bullet = __(".bulletStep>circle");
      clearBullets();
      completedSteps(e);
      if(e < 5){
        bullet[e].setAttribute("class", "stepInProgress trans5");
      }
  switch (e) {
    case 0:
     w.style.marginLeft = "0";
    break;
    case 1:
     w.style.marginLeft = "-100%";
    break;
    case 2:
     w.style.marginLeft = "-200%";
    break;
    case 3:
     w.style.marginLeft = "-300%";
    break;
    case 4:
     w.style.marginLeft = "-400%";
    break;
  }
  function clearBullets(){
    for (var i = 0; i < bullet.length; i++) {
      bullet[i].setAttribute("class", "stepUncomplete trans5");
    }
  }
  function completedSteps(e){
    for (var i = e; i > 0; i--) {
      bullet[i-1].setAttribute("class", "stepComplete trans5");
    }
  }
}

function loadFileCSV(t){
  var file = t.nextElementSibling,
      fileText = _("#msgCsvUpload"),
      imgCheck = _("#imgCheck"),
      close = fileText.nextElementSibling,
      infoLoadCSV = __(".infoLoadCSV");
  file.addEventListener("change", function(){
    for (var i = 0; i < infoLoadCSV.length; i++) {
      infoLoadCSV[i].style.opacity = "0";
      infoLoadCSV[i].style.display = "none";
    }
    csvLoaded = true;
    imgCheck.setAttribute("src", "ui/img/ic/check.svg");
    fileText.innerHTML = file.files[0].name;
    close.setAttribute("class", "displayBlock trans5");
  });
}

function cleanCsv(t){
  var form = _("#formCSV"),
      input = _("#couponsUpload"),
      text = _("#msgCsvUpload"),
      imgCheck = _("#imgCheck"),
      infoLoadCSV = __(".infoLoadCSV");
      csvLoaded = false;
      for (var i = 0; i < infoLoadCSV.length; i++) {
        infoLoadCSV[i].style.opacity = "0";
        infoLoadCSV[i].style.display = "none";
      }
      imgCheck.setAttribute("src", "ui/img/ic/upload.svg");
      t.setAttribute("class", "displayNone trans5");
      text.innerHTML = "Escoge un archivo .csv";
}

var numCupones, csvLoaded = false;

function getNumCSV(){
    var textCSVLoaded = _(".numCSV"),
        textCSVNoLoaded = _(".noneNumCSV"),
        numCSVW = _("#numCSV");
    if(csvLoaded){
      numCSVW.innerHTML = numCupones;
      textCSVLoaded.style.display = "block";
      setTimeout(function(){
        textCSVLoaded.style.opacity = "1";
      },500);
    } else {
      textCSVNoLoaded.style.display = "block";
      setTimeout(function(){
        textCSVNoLoaded.style.opacity = "1";
      },500);
    }
}

var compactMenu = false;
function checkSteps(n, t){
  var w = window.innerWidth;
  switch (n) {
    case 1:
      checkConfig_1(n,t);
    break;
    case 2:
      responseStep(n , t, 1);
    break;
    case 3:
      compactMenu = false;
      compactConfigMenu(1);
      responseStep(n , t, 1);
    break;
    case 4:
      optionsConfig(0);
      compactMenu = true;
      if(w>=880)compactConfigMenu(0);
      responseStep(n , t, 1);
    break;
    case 5:
      responseStep(n , t, 1);
    break;
  }
}

function compactConfigMenu(n){
  var bArrow = _("#toggleMenuArrow"),
      bArrowImg = bArrow.children[0],
      menuConfig = _("#menuConfig");
  if(n === 0){
    bArrow.style.display = "none";
    hideMenuConfig('hide', bArrow);
    menuConfig.setAttribute("style", " ");
  } else if (n === 1) {
      bArrow.style.display = "block";
      hideMenuConfig('show', bArrow);
  }
}

function checkConfig_1(n, t){
  /* Comprobar Configuración 1 */
  //NUM SLIDER, THIS, nombre, descripción, marca, fecha Inicio, fecha Final
  responseConfig_1(n, t,1,1,1,1,1,1);
}

function responseConfig_1(ns,t,n, d, m, p, fInit, fLast){
  var g = n + d + m + p + fInit + fLast;
  var labels = __(".labelData1"),
      inputs = __(".inputData1");
  if(g === 6){
    for (var i = 0; i < labels.length; i++) {
      labels[i].setAttribute("style", " ");
      inputs[i].setAttribute("style", " ");
    }
    responseStep(ns, t, 1);
  } else if (g < 6) {
    responseStep(ns, t, 0);
  }
  if(n === 0){ redField(0); } if(d === 0){ redField(1); } if(m === 0){ redField(2); } if(p === 0){ redField(3); } if(fInit === 0){ redField(4); } if(fLast === 0){ redField(5); }
  function redField(n){
    labels[n].style.color = "#D8353D";
    inputs[n].style.color = "#D8353D";
  }
}

function responseStep(n, t, c){
  var msgW = t.parentElement.parentElement.children[0],
      msgTx = msgW.children[0];
  if(c === 0){
    msgW.style.height = "40px";
    msgW.style.opacity = "1";
  } else if (c === 1) {
    msgW.setAttribute("style", " ");
    sliderConfigFun(n);
  }
}

function openLinks(c,t){
  var p = t.parentElement.parentElement,
      ul = p.lastElementChild;
  if(c === "open"){
    t.setAttribute("onclick", "openLinks('close', this)");
    p.style.height = "100px";
    ul.style.height = "50px";
    ul.style.display = "block";
  } else if (c === "close") {
    t.setAttribute("onclick", "openLinks('open', this)");
    p.style.height = "auto";
    ul.style.height = "0";
    ul.style.display = "none";
  }
}
// editorPlantillaInterfaz
function rContEditor(wr){
  var wr = _(wr),
      w = window.innerWidth - 350,
      r = 1080/1920,
      h = w * r;
      wr.style.height = h+"px";
}

var countSliderMobScreens = 0;
function sliderMobScreens(n){
  var pageTx = ["Carga", "Inicio", "Cupón", "Mensaje Éxito", "Mensaje Error"],
      p = _("#pagScreen"),
      i = _("#indexPagScreen");
  if(n === "next"){
      countSliderMobScreens++;
      if(countSliderMobScreens > 4) countSliderMobScreens = 0;
      p.innerHTML = pageTx[countSliderMobScreens];
      i.innerHTML = countSliderMobScreens + 1;
      changeScreen(countSliderMobScreens);
  } else {
      countSliderMobScreens--;
      if(countSliderMobScreens < 0) countSliderMobScreens = 4;
      p.innerHTML = pageTx[countSliderMobScreens];
      i.innerHTML = countSliderMobScreens + 1;
      changeScreen(countSliderMobScreens);
  }
}

function selectClassScreens(n){
  var idxs = __(".indexScreenDesk");
  for (var i = 0; i < idxs.length; i++) {
    idxs[i].setAttribute("class", "indexScreenDesk screenDeskUnselect");
  }
  idxs[n].setAttribute("class", "indexScreenDesk screenDeskSelect");
}

function changeScreen(n){
  var frame = _("#iframePlantilla"),
      frameIF = _("#iframeInterfaz");
  frame.contentWindow.screensOnConf(n);
  frameIF.contentWindow.changeScreenInterfaz(n);
  selectClassScreens(n);
  optionsConfig(n);
}
function optionsConfig(n){
  var m = _("#iframePlantilla").contentWindow.document.getElementById("plantillaUnoHTML").getAttribute("data-marca"),
      opts = __(".optionStep"),
      opsLoad = _("#optionsCargando"),
      opsHome = _("#optionsInicio");
  switch (n) {
    case 0:
      clearAllOptions();
      changeColorBrand(m, "#optionsCargando");
      opsLoad.setAttribute("class", "optionStep displayFlex");
    break;
    case 1:
      clearAllOptions();
      changeColorBrand(m, "#optionsInicio");
      opsHome.setAttribute("class", "optionStep displayFlex");
    break;
    case 2:
      clearAllOptions();
    break;
    case 3:
      clearAllOptions();
    break;
    case 4:
      clearAllOptions();
    break;
  }
  function clearAllOptions(){
    for (var i = 0; i < opts.length; i++) {
      opts[i].setAttribute("class", "optionStep displayNone");
    }
  }
  function changeColorBrand(m, form){
    var form = _(form),
        formsColor = form.querySelectorAll(".optionsColor");
    switch (m) {
      case "pepsi":
        clearAllForms();
        formsColor[1].setAttribute("class", "optionsColor displayFlex");
      break;
      case "gatorade":
        clearAllForms();
        formsColor[2].setAttribute("class", "optionsColor displayFlex");
      break;
      case "sevenup":
        clearAllForms();
        formsColor[3].setAttribute("class", "optionsColor displayFlex");
      break;
      case "epura":
        clearAllForms();
        formsColor[4].setAttribute("class", "optionsColor displayFlex");
      break;
      case "frutzzo":
        clearAllForms();
        formsColor[5].setAttribute("class", "optionsColor displayFlex");
      break;
    }
    function clearAllForms(){
      for (var i = 1; i < formsColor.length; i++) {
        formsColor[i].setAttribute("class", "optionsColor displayNone");
      }
    }
  }
}

function hideInterfaz(e, t){
  var f = t.previousElementSibling,
      ic = t.children[1];
  if(e === "hide"){
    t.setAttribute("onclick", "hideInterfaz('show', this)");
    f.style.opacity = "0";
    ic.style.opacity = "1";
  } else {
    t.setAttribute("onclick", "hideInterfaz('hide', this)");
    f.style.opacity = "1";
    ic.setAttribute("style", " ");
  }
}
function popActionFun(e, tx, fun){
  var wr = _("#popAction"),
      yes = _("#popAction>div>div>.doAction"),
      p = _("#popAction>div>p"),
      main = _("main");
  if(e === "show"){
    wr.setAttribute("class", "displayFlex");
    yes.setAttribute("onclick", fun);
    main.classList.add("blur");
    if(tx != 0){
      p.innerHTML = tx;
    } else {
      p.innerHTML = "¿Estás seguro que quieres realizar esta acción?";
    }
  } else {
    wr.setAttribute("class", "displayNone");
    main.classList.remove("blur");
    p.innerHTML = "¿Estás seguro que quieres realizar esta acción?";
  }
}
//finprimeraParte
