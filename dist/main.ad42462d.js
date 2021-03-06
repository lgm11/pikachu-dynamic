// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"epB2":[function(require,module,exports) {
var music = function music() {
  var audio = document.getElementById('music');
  audio.play();
};

var Div = document.getElementById('mouth');

Div.onclick = function () {
  music();
};

var string = "\n* {\n    box-sizing: border-box;\n  }\n  *::after,\n  *::before {\n    box-sizing: border-box;\n  }\n  \n  .skin {\n    position: relative;\n    background: rgb(255, 230, 0);\n    height: 100vh;\n  }\n  \n  .nose {\n    position: absolute;\n    border-radius: 80px 0 0;\n    width: 10px;\n    height: 10px;\n    background: black;\n    left: 50%;\n    top: 200px;\n    transform: rotate(45deg);\n    margin-left: -5px;\n  }\n  \n  .eye {\n    position: absolute;\n    width: 60px;\n    height: 60px;\n    background: #2e2e2e;\n    border: 3px solid black;\n    left: 50%;\n    top: 160px;\n    margin-left: -30px;\n  }\n  \n  .eye.left {\n    transform: translateX(-100px);\n    border-radius: 50%;\n  }\n  \n  .eye.right {\n    transform: translateX(100px);\n    border-radius: 50%;\n  }\n  \n  .eye::before {\n    content: \"\";\n    display: block;\n    width: 26px;\n    height: 26px;\n    background: #fff;\n    border-radius: 50%;\n    position: relative;\n    left: 8px;\n    top: 2px;\n    border: 3px solid black;\n    animation: eye 5s infinite linear;\n  }\n  \n  .mouth {\n    width: 200px;\n    height: 200px;\n    left: 50%;\n    margin-left: -100px;\n    position: absolute;\n    top: 240px;\n    overflow: hidden;\n  }\n  \n  .mouth .lip .left {\n    position: absolute;\n    width: 100px;\n    height: 250px;\n    border: 3px solid black;\n    left: 50%;\n    margin-left: -60px;\n    bottom: 132px;\n    border-radius: 100px/200px;\n    transform: rotateZ(45deg);\n    background: rgb(255, 230, 0);\n    z-index: 2;\n  }\n  \n  .mouth .lip .right {\n    position: absolute;\n    width: 100px;\n    height: 250px;\n    border: 3px solid black;\n    left: 50%;\n    bottom: 132px;\n    margin-left: -40px;\n    border-radius: 100px/200px;\n    transform: rotateZ(-45deg);\n    background: rgb(255, 230, 0);\n    z-index: 2;\n  }\n  \n  .tongue .tongue1 {\n    border: 3px solid black;\n    width: 150px;\n    height: 500px;\n    left: 25px;\n    bottom: 50px;\n    position: absolute;\n    background: rgb(155, 0, 10);\n    border-radius: 75px/250px;\n    z-index: 1;\n    overflow: hidden;\n    animation: tongue 5s infinite ease-in;\n  }\n  \n  .tongue .tongue1 .tongue2 {\n    width: 144px;\n    height: 300px;\n    position: absolute;\n    top: 375px;\n    border-radius: 145px/170px;\n    background: rgb(255, 72, 95);\n  }\n  \n  .face {\n    border: 3px solid black;\n    width: 66px;\n    height: 66px;\n    left: 50%;\n    background: #ff0000;\n    position: absolute;\n    margin-left: -33px;\n    top: 270px;\n  }\n  \n  .face.left {\n    transform: translateX(-150px);\n    border-radius: 50%;\n  }\n  \n  .face.right {\n    transform: translateX(150px);\n    border-radius: 50%;\n  }\n  \n  @keyframes wave {\n    0% {\n      transform: rotate(45deg);\n    }\n    33% {\n      transform: rotate(53deg);\n    }\n    66% {\n      transform: rotate(37deg);\n    }\n    100% {\n      transform: rotate(45deg);\n    }\n  }\n  \n  .nose:hover {\n    animation: wave 150ms infinite linear;\n  }\n  \n  @keyframes eye {\n    0% {\n      transform: translateX(0);\n    }\n    10% {\n      transform: translateX(5px);\n    }\n    20% {\n      transform: translateX(5px);\n    }\n    30% {\n      transform: translateX(5px);\n    }\n    40% {\n      transform: translateX(-5px);\n    }\n    50% {\n      transform: translateX(5px);\n    }\n    60% {\n      transform: translateY(20px);\n    }\n    70% {\n      transform: translateX(-5px);\n    }\n    80% {\n      transform: translateX(-2px);\n    }\n    100% {\n      transform: translateY(-2px);\n    }\n  }\n  \n  @keyframes tongue {\n    0%,\n    80% {\n      border-radius: 75px/250px;\n      bottom: 50px;\n    }\n    95% {\n      border-radius: 75px/250px;\n      bottom: 50px;\n    }\n    100% {\n      border-radius: 45px/250px;\n      bottom: 200px;\n    }\n  }\n  \n";
var n = 1;
demo.innerText = string.substr(0, n);
demo2.innerHTML = string.substr(0, n);
var time = 100;

var run = function run() {
  n += 1;

  if (n > string.length) {
    window.clearInterval(id);
    return;
  }

  demo.innerText = string.substr(0, n);
  demo2.innerHTML = string.substr(0, n);
  demo.scrollTop = demo.scrollHeight;
};

var play = function play() {
  return setInterval(run, time);
};

var pause = function pause() {
  window.clearInterval(id);
};

var id = play();

btnPause.onclick = function () {
  pause();
};

btnPlay.onclick = function () {
  id = play();
};

btnSlow.onclick = function () {
  pause();
  time = 300;
  id = play();
};

btnNormal.onclick = function () {
  pause();
  time = 100;
  id = play();
};

btnFast.onclick = function () {
  pause();
  time = 0;
  id = play();
};
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.ad42462d.js.map