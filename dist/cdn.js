// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"j8mvb":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = 54563;
var HMR_SERVER_PORT = 54563;
var HMR_SECURE = false;
var HMR_ENV_HASH = "9df9613331df6fc8";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "1281e07fe11821b9";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"fvuY1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "StimulusX", ()=>(0, _stimulusXJsDefault.default));
parcelHelpers.export(exports, "nextTick", ()=>(0, _schedulerJs.nextTick));
var _stimulusXJs = require("./stimulus-x.js");
var _stimulusXJsDefault = parcelHelpers.interopDefault(_stimulusXJs);
var _schedulerJs = require("./scheduler.js");
var _downcaseJs = require("./modifiers/downcase.js");
var _notJs = require("./modifiers/not.js");
var _upcaseJs = require("./modifiers/upcase.js");
var _attrJs = require("./directives/attr.js");
var _textJs = require("./directives/text.js");
exports.default = (0, _stimulusXJsDefault.default);

},{"./stimulus-x.js":"3msJS","./scheduler.js":"lELYZ","./modifiers/downcase.js":"9hZd4","./modifiers/not.js":"lCbmP","./modifiers/upcase.js":"7mzKL","./directives/attr.js":"9rQtf","./directives/text.js":"2Vt7u","@parcel/transformer-js/src/esmodule-helpers.js":"fVvIk"}],"3msJS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _reactivity = require("./reactivity");
var _modifiers = require("./modifiers");
var _directives = require("./directives");
var _scheduler = require("./scheduler");
var _mutation = require("./mutation");
let markerCount = 1;
function extend(application) {
    // Override controller registration to insert a reactive subclass instead of the original
    application.register = function(identifier, ControllerClass) {
        const controllerConstructor = createReactiveControllerClass(ControllerClass);
        application.load({
            identifier,
            controllerConstructor
        });
    };
    (0, _mutation.startObservingMutations)();
    (0, _mutation.onElAdded)((el)=>initTree(el, application));
    (0, _mutation.onElRemoved)((el)=>destroyTree(el));
    (0, _mutation.onAttributesAdded)((el, attrs)=>{
        handleValueAttributes(el, attrs, application);
        (0, _directives.directives)(el, attrs).forEach((handle)=>handle(application));
    });
    (0, _scheduler.nextTick)(()=>{
        rootElements().forEach((el)=>initTree(el, application));
    });
}
function createReactiveControllerClass(ControllerClass) {
    return class extends ControllerClass {
        constructor(context){
            super(context);
            // Override the attribute setter so that our
            // mutation observer doesn't pick up on changes
            // that are already being handled directly by Stimulus.
            const setData = this.data.set;
            this.data.set = (key, value)=>{
                (0, _mutation.mutateDom)(()=>setData.call(this.data, key, value));
            };
            // Return a reactive version of the controller instance
            return (0, _reactivity.reactive)(this);
        }
    };
}
function rootElements() {
    return Array.from(document.querySelectorAll("[data-controller]:not([data-controller] [data-controller])"));
}
function initTree(el, application) {
    (0, _directives.deferHandlingDirectives)(()=>{
        walk(el, (el)=>{
            if (el.__stimulusX_marker) return;
            (0, _directives.directives)(el, el.attributes).forEach((handle)=>handle(application));
            el.__stimulusX_marker = markerCount++;
        });
    });
}
function destroyTree(root) {
    walk(root, (el)=>{
        (0, _mutation.cleanupElement)(el);
        (0, _mutation.cleanupAttributes)(el);
        delete el.__stimulusX_marker;
    });
}
function walk(el, callback) {
    let skip = false;
    callback(el, ()=>skip = true);
    if (skip) return;
    let node = el.firstElementChild;
    while(node){
        walk(node, callback, false);
        node = node.nextElementSibling;
    }
}
// Changes to controller value attributes in the DOM do not call
// any properties on the controller so changes are not detected.
// To fix this any value attribute changes are registered by calling
// the value setter on the proxy with the current value - the value is
// unchanged but calling the getter triggers any related effects.
function handleValueAttributes(el, attrs, application) {
    if (!el.hasAttribute("data-controller")) return;
    const controllerNames = el.getAttribute("data-controller").trim().split(" ").filter((e)=>e);
    const valueAttributeMatcher = new RegExp(`^data-(${controllerNames.join("|")})-([a-zA-Z0-9\-_]+)-value$`);
    for(let i = 0; i < attrs.length; i++){
        const attr = attrs[i];
        const matches = attr.name.match(valueAttributeMatcher);
        if (matches.length) {
            const identifier = matches[1];
            const valueName = matches[2];
            const controller = application.getControllerForElementAndIdentifier(el, identifier);
            (0, _mutation.mutateDom)(()=>{
                controller[`${valueName}Value`] = controller[`${valueName}Value`];
            });
        }
    }
}
exports.default = {
    extend,
    modifier: (0, _modifiers.modifier),
    directive: (0, _directives.directive)
};

},{"./reactivity":"hIJen","./modifiers":"cSFB8","./directives":"emuqh","./scheduler":"lELYZ","./mutation":"hi7zN","@parcel/transformer-js/src/esmodule-helpers.js":"fVvIk"}],"hIJen":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "elementBoundEffect", ()=>elementBoundEffect);
parcelHelpers.export(exports, "effect", ()=>effect);
parcelHelpers.export(exports, "release", ()=>(0, _reactivity.stop));
parcelHelpers.export(exports, "reactive", ()=>(0, _reactivity.reactive));
parcelHelpers.export(exports, "raw", ()=>(0, _reactivity.raw));
var _reactivity = require("@vue/reactivity");
var _scheduler = require("./scheduler");
const effect = (callback)=>(0, _reactivity.effect)(callback, {
        scheduler: (0, _scheduler.scheduler)((task)=>task)
    });
function elementBoundEffect(el) {
    let cleanup = ()=>{};
    let wrappedEffect = (callback)=>{
        let effectReference = effect(callback);
        if (!el.__stimulusX_effects) el.__stimulusX_effects = new Set();
        el.__stimulusX_effects.add(effectReference);
        cleanup = ()=>{
            if (effectReference === undefined) return;
            el.__stimulusX_effects.delete(effectReference);
            (0, _reactivity.stop)(effectReference);
        };
        return effectReference;
    };
    return [
        wrappedEffect,
        ()=>{
            cleanup();
        }
    ];
}

},{"@vue/reactivity":"9mmel","./scheduler":"lELYZ","@parcel/transformer-js/src/esmodule-helpers.js":"fVvIk"}],"9mmel":[function(require,module,exports,__globalThis) {
/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ARRAY_ITERATE_KEY", ()=>ARRAY_ITERATE_KEY);
parcelHelpers.export(exports, "EffectFlags", ()=>EffectFlags);
parcelHelpers.export(exports, "EffectScope", ()=>EffectScope);
parcelHelpers.export(exports, "ITERATE_KEY", ()=>ITERATE_KEY);
parcelHelpers.export(exports, "MAP_KEY_ITERATE_KEY", ()=>MAP_KEY_ITERATE_KEY);
parcelHelpers.export(exports, "ReactiveEffect", ()=>ReactiveEffect);
parcelHelpers.export(exports, "ReactiveFlags", ()=>ReactiveFlags);
parcelHelpers.export(exports, "TrackOpTypes", ()=>TrackOpTypes);
parcelHelpers.export(exports, "TriggerOpTypes", ()=>TriggerOpTypes);
parcelHelpers.export(exports, "WatchErrorCodes", ()=>WatchErrorCodes);
parcelHelpers.export(exports, "computed", ()=>computed);
parcelHelpers.export(exports, "customRef", ()=>customRef);
parcelHelpers.export(exports, "effect", ()=>effect);
parcelHelpers.export(exports, "effectScope", ()=>effectScope);
parcelHelpers.export(exports, "enableTracking", ()=>enableTracking);
parcelHelpers.export(exports, "getCurrentScope", ()=>getCurrentScope);
parcelHelpers.export(exports, "getCurrentWatcher", ()=>getCurrentWatcher);
parcelHelpers.export(exports, "isProxy", ()=>isProxy);
parcelHelpers.export(exports, "isReactive", ()=>isReactive);
parcelHelpers.export(exports, "isReadonly", ()=>isReadonly);
parcelHelpers.export(exports, "isRef", ()=>isRef);
parcelHelpers.export(exports, "isShallow", ()=>isShallow);
parcelHelpers.export(exports, "markRaw", ()=>markRaw);
parcelHelpers.export(exports, "onEffectCleanup", ()=>onEffectCleanup);
parcelHelpers.export(exports, "onScopeDispose", ()=>onScopeDispose);
parcelHelpers.export(exports, "onWatcherCleanup", ()=>onWatcherCleanup);
parcelHelpers.export(exports, "pauseTracking", ()=>pauseTracking);
parcelHelpers.export(exports, "proxyRefs", ()=>proxyRefs);
parcelHelpers.export(exports, "reactive", ()=>reactive);
parcelHelpers.export(exports, "reactiveReadArray", ()=>reactiveReadArray);
parcelHelpers.export(exports, "readonly", ()=>readonly);
parcelHelpers.export(exports, "ref", ()=>ref);
parcelHelpers.export(exports, "resetTracking", ()=>resetTracking);
parcelHelpers.export(exports, "shallowReactive", ()=>shallowReactive);
parcelHelpers.export(exports, "shallowReadArray", ()=>shallowReadArray);
parcelHelpers.export(exports, "shallowReadonly", ()=>shallowReadonly);
parcelHelpers.export(exports, "shallowRef", ()=>shallowRef);
parcelHelpers.export(exports, "stop", ()=>stop);
parcelHelpers.export(exports, "toRaw", ()=>toRaw);
parcelHelpers.export(exports, "toReactive", ()=>toReactive);
parcelHelpers.export(exports, "toReadonly", ()=>toReadonly);
parcelHelpers.export(exports, "toRef", ()=>toRef);
parcelHelpers.export(exports, "toRefs", ()=>toRefs);
parcelHelpers.export(exports, "toValue", ()=>toValue);
parcelHelpers.export(exports, "track", ()=>track);
parcelHelpers.export(exports, "traverse", ()=>traverse);
parcelHelpers.export(exports, "trigger", ()=>trigger);
parcelHelpers.export(exports, "triggerRef", ()=>triggerRef);
parcelHelpers.export(exports, "unref", ()=>unref);
parcelHelpers.export(exports, "watch", ()=>watch);
var _shared = require("@vue/shared");
function warn(msg, ...args) {
    console.warn(`[Vue warn] ${msg}`, ...args);
}
let activeEffectScope;
class EffectScope {
    constructor(detached = false){
        this.detached = detached;
        /**
     * @internal
     */ this._active = true;
        /**
     * @internal track `on` calls, allow `on` call multiple times
     */ this._on = 0;
        /**
     * @internal
     */ this.effects = [];
        /**
     * @internal
     */ this.cleanups = [];
        this._isPaused = false;
        this.parent = activeEffectScope;
        if (!detached && activeEffectScope) this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(this) - 1;
    }
    get active() {
        return this._active;
    }
    pause() {
        if (this._active) {
            this._isPaused = true;
            let i, l;
            if (this.scopes) for(i = 0, l = this.scopes.length; i < l; i++)this.scopes[i].pause();
            for(i = 0, l = this.effects.length; i < l; i++)this.effects[i].pause();
        }
    }
    /**
   * Resumes the effect scope, including all child scopes and effects.
   */ resume() {
        if (this._active) {
            if (this._isPaused) {
                this._isPaused = false;
                let i, l;
                if (this.scopes) for(i = 0, l = this.scopes.length; i < l; i++)this.scopes[i].resume();
                for(i = 0, l = this.effects.length; i < l; i++)this.effects[i].resume();
            }
        }
    }
    run(fn) {
        if (this._active) {
            const currentEffectScope = activeEffectScope;
            try {
                activeEffectScope = this;
                return fn();
            } finally{
                activeEffectScope = currentEffectScope;
            }
        } else warn(`cannot run an inactive effect scope.`);
    }
    /**
   * This should only be called on non-detached scopes
   * @internal
   */ on() {
        if (++this._on === 1) {
            this.prevScope = activeEffectScope;
            activeEffectScope = this;
        }
    }
    /**
   * This should only be called on non-detached scopes
   * @internal
   */ off() {
        if (this._on > 0 && --this._on === 0) {
            activeEffectScope = this.prevScope;
            this.prevScope = void 0;
        }
    }
    stop(fromParent) {
        if (this._active) {
            this._active = false;
            let i, l;
            for(i = 0, l = this.effects.length; i < l; i++)this.effects[i].stop();
            this.effects.length = 0;
            for(i = 0, l = this.cleanups.length; i < l; i++)this.cleanups[i]();
            this.cleanups.length = 0;
            if (this.scopes) {
                for(i = 0, l = this.scopes.length; i < l; i++)this.scopes[i].stop(true);
                this.scopes.length = 0;
            }
            if (!this.detached && this.parent && !fromParent) {
                const last = this.parent.scopes.pop();
                if (last && last !== this) {
                    this.parent.scopes[this.index] = last;
                    last.index = this.index;
                }
            }
            this.parent = void 0;
        }
    }
}
function effectScope(detached) {
    return new EffectScope(detached);
}
function getCurrentScope() {
    return activeEffectScope;
}
function onScopeDispose(fn, failSilently = false) {
    if (activeEffectScope) activeEffectScope.cleanups.push(fn);
    else if (!failSilently) warn(`onScopeDispose() is called when there is no active effect scope to be associated with.`);
}
let activeSub;
const EffectFlags = {
    "ACTIVE": 1,
    "1": "ACTIVE",
    "RUNNING": 2,
    "2": "RUNNING",
    "TRACKING": 4,
    "4": "TRACKING",
    "NOTIFIED": 8,
    "8": "NOTIFIED",
    "DIRTY": 16,
    "16": "DIRTY",
    "ALLOW_RECURSE": 32,
    "32": "ALLOW_RECURSE",
    "PAUSED": 64,
    "64": "PAUSED",
    "EVALUATED": 128,
    "128": "EVALUATED"
};
const pausedQueueEffects = /* @__PURE__ */ new WeakSet();
class ReactiveEffect {
    constructor(fn){
        this.fn = fn;
        /**
     * @internal
     */ this.deps = void 0;
        /**
     * @internal
     */ this.depsTail = void 0;
        /**
     * @internal
     */ this.flags = 5;
        /**
     * @internal
     */ this.next = void 0;
        /**
     * @internal
     */ this.cleanup = void 0;
        this.scheduler = void 0;
        if (activeEffectScope && activeEffectScope.active) activeEffectScope.effects.push(this);
    }
    pause() {
        this.flags |= 64;
    }
    resume() {
        if (this.flags & 64) {
            this.flags &= -65;
            if (pausedQueueEffects.has(this)) {
                pausedQueueEffects.delete(this);
                this.trigger();
            }
        }
    }
    /**
   * @internal
   */ notify() {
        if (this.flags & 2 && !(this.flags & 32)) return;
        if (!(this.flags & 8)) batch(this);
    }
    run() {
        if (!(this.flags & 1)) return this.fn();
        this.flags |= 2;
        cleanupEffect(this);
        prepareDeps(this);
        const prevEffect = activeSub;
        const prevShouldTrack = shouldTrack;
        activeSub = this;
        shouldTrack = true;
        try {
            return this.fn();
        } finally{
            if (activeSub !== this) warn("Active effect was not restored correctly - this is likely a Vue internal bug.");
            cleanupDeps(this);
            activeSub = prevEffect;
            shouldTrack = prevShouldTrack;
            this.flags &= -3;
        }
    }
    stop() {
        if (this.flags & 1) {
            for(let link = this.deps; link; link = link.nextDep)removeSub(link);
            this.deps = this.depsTail = void 0;
            cleanupEffect(this);
            this.onStop && this.onStop();
            this.flags &= -2;
        }
    }
    trigger() {
        if (this.flags & 64) pausedQueueEffects.add(this);
        else if (this.scheduler) this.scheduler();
        else this.runIfDirty();
    }
    /**
   * @internal
   */ runIfDirty() {
        if (isDirty(this)) this.run();
    }
    get dirty() {
        return isDirty(this);
    }
}
let batchDepth = 0;
let batchedSub;
let batchedComputed;
function batch(sub, isComputed = false) {
    sub.flags |= 8;
    if (isComputed) {
        sub.next = batchedComputed;
        batchedComputed = sub;
        return;
    }
    sub.next = batchedSub;
    batchedSub = sub;
}
function startBatch() {
    batchDepth++;
}
function endBatch() {
    if (--batchDepth > 0) return;
    if (batchedComputed) {
        let e = batchedComputed;
        batchedComputed = void 0;
        while(e){
            const next = e.next;
            e.next = void 0;
            e.flags &= -9;
            e = next;
        }
    }
    let error;
    while(batchedSub){
        let e = batchedSub;
        batchedSub = void 0;
        while(e){
            const next = e.next;
            e.next = void 0;
            e.flags &= -9;
            if (e.flags & 1) try {
                e.trigger();
            } catch (err) {
                if (!error) error = err;
            }
            e = next;
        }
    }
    if (error) throw error;
}
function prepareDeps(sub) {
    for(let link = sub.deps; link; link = link.nextDep){
        link.version = -1;
        link.prevActiveLink = link.dep.activeLink;
        link.dep.activeLink = link;
    }
}
function cleanupDeps(sub) {
    let head;
    let tail = sub.depsTail;
    let link = tail;
    while(link){
        const prev = link.prevDep;
        if (link.version === -1) {
            if (link === tail) tail = prev;
            removeSub(link);
            removeDep(link);
        } else head = link;
        link.dep.activeLink = link.prevActiveLink;
        link.prevActiveLink = void 0;
        link = prev;
    }
    sub.deps = head;
    sub.depsTail = tail;
}
function isDirty(sub) {
    for(let link = sub.deps; link; link = link.nextDep){
        if (link.dep.version !== link.version || link.dep.computed && (refreshComputed(link.dep.computed) || link.dep.version !== link.version)) return true;
    }
    if (sub._dirty) return true;
    return false;
}
function refreshComputed(computed) {
    if (computed.flags & 4 && !(computed.flags & 16)) return;
    computed.flags &= -17;
    if (computed.globalVersion === globalVersion) return;
    computed.globalVersion = globalVersion;
    if (!computed.isSSR && computed.flags & 128 && (!computed.deps && !computed._dirty || !isDirty(computed))) return;
    computed.flags |= 2;
    const dep = computed.dep;
    const prevSub = activeSub;
    const prevShouldTrack = shouldTrack;
    activeSub = computed;
    shouldTrack = true;
    try {
        prepareDeps(computed);
        const value = computed.fn(computed._value);
        if (dep.version === 0 || (0, _shared.hasChanged)(value, computed._value)) {
            computed.flags |= 128;
            computed._value = value;
            dep.version++;
        }
    } catch (err) {
        dep.version++;
        throw err;
    } finally{
        activeSub = prevSub;
        shouldTrack = prevShouldTrack;
        cleanupDeps(computed);
        computed.flags &= -3;
    }
}
function removeSub(link, soft = false) {
    const { dep, prevSub, nextSub } = link;
    if (prevSub) {
        prevSub.nextSub = nextSub;
        link.prevSub = void 0;
    }
    if (nextSub) {
        nextSub.prevSub = prevSub;
        link.nextSub = void 0;
    }
    if (dep.subsHead === link) dep.subsHead = nextSub;
    if (dep.subs === link) {
        dep.subs = prevSub;
        if (!prevSub && dep.computed) {
            dep.computed.flags &= -5;
            for(let l = dep.computed.deps; l; l = l.nextDep)removeSub(l, true);
        }
    }
    if (!soft && !--dep.sc && dep.map) dep.map.delete(dep.key);
}
function removeDep(link) {
    const { prevDep, nextDep } = link;
    if (prevDep) {
        prevDep.nextDep = nextDep;
        link.prevDep = void 0;
    }
    if (nextDep) {
        nextDep.prevDep = prevDep;
        link.nextDep = void 0;
    }
}
function effect(fn, options) {
    if (fn.effect instanceof ReactiveEffect) fn = fn.effect.fn;
    const e = new ReactiveEffect(fn);
    if (options) (0, _shared.extend)(e, options);
    try {
        e.run();
    } catch (err) {
        e.stop();
        throw err;
    }
    const runner = e.run.bind(e);
    runner.effect = e;
    return runner;
}
function stop(runner) {
    runner.effect.stop();
}
let shouldTrack = true;
const trackStack = [];
function pauseTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = false;
}
function enableTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = true;
}
function resetTracking() {
    const last = trackStack.pop();
    shouldTrack = last === void 0 ? true : last;
}
function onEffectCleanup(fn, failSilently = false) {
    if (activeSub instanceof ReactiveEffect) activeSub.cleanup = fn;
    else if (!failSilently) warn(`onEffectCleanup() was called when there was no active effect to associate with.`);
}
function cleanupEffect(e) {
    const { cleanup } = e;
    e.cleanup = void 0;
    if (cleanup) {
        const prevSub = activeSub;
        activeSub = void 0;
        try {
            cleanup();
        } finally{
            activeSub = prevSub;
        }
    }
}
let globalVersion = 0;
class Link {
    constructor(sub, dep){
        this.sub = sub;
        this.dep = dep;
        this.version = dep.version;
        this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
    }
}
class Dep {
    // TODO isolatedDeclarations "__v_skip"
    constructor(computed){
        this.computed = computed;
        this.version = 0;
        /**
     * Link between this dep and the current active effect
     */ this.activeLink = void 0;
        /**
     * Doubly linked list representing the subscribing effects (tail)
     */ this.subs = void 0;
        /**
     * For object property deps cleanup
     */ this.map = void 0;
        this.key = void 0;
        /**
     * Subscriber counter
     */ this.sc = 0;
        /**
     * @internal
     */ this.__v_skip = true;
        this.subsHead = void 0;
    }
    track(debugInfo) {
        if (!activeSub || !shouldTrack || activeSub === this.computed) return;
        let link = this.activeLink;
        if (link === void 0 || link.sub !== activeSub) {
            link = this.activeLink = new Link(activeSub, this);
            if (!activeSub.deps) activeSub.deps = activeSub.depsTail = link;
            else {
                link.prevDep = activeSub.depsTail;
                activeSub.depsTail.nextDep = link;
                activeSub.depsTail = link;
            }
            addSub(link);
        } else if (link.version === -1) {
            link.version = this.version;
            if (link.nextDep) {
                const next = link.nextDep;
                next.prevDep = link.prevDep;
                if (link.prevDep) link.prevDep.nextDep = next;
                link.prevDep = activeSub.depsTail;
                link.nextDep = void 0;
                activeSub.depsTail.nextDep = link;
                activeSub.depsTail = link;
                if (activeSub.deps === link) activeSub.deps = next;
            }
        }
        if (activeSub.onTrack) activeSub.onTrack((0, _shared.extend)({
            effect: activeSub
        }, debugInfo));
        return link;
    }
    trigger(debugInfo) {
        this.version++;
        globalVersion++;
        this.notify(debugInfo);
    }
    notify(debugInfo) {
        startBatch();
        try {
            for(let head = this.subsHead; head; head = head.nextSub)if (head.sub.onTrigger && !(head.sub.flags & 8)) head.sub.onTrigger((0, _shared.extend)({
                effect: head.sub
            }, debugInfo));
            for(let link = this.subs; link; link = link.prevSub)if (link.sub.notify()) link.sub.dep.notify();
        } finally{
            endBatch();
        }
    }
}
function addSub(link) {
    link.dep.sc++;
    if (link.sub.flags & 4) {
        const computed = link.dep.computed;
        if (computed && !link.dep.subs) {
            computed.flags |= 20;
            for(let l = computed.deps; l; l = l.nextDep)addSub(l);
        }
        const currentTail = link.dep.subs;
        if (currentTail !== link) {
            link.prevSub = currentTail;
            if (currentTail) currentTail.nextSub = link;
        }
        if (link.dep.subsHead === void 0) link.dep.subsHead = link;
        link.dep.subs = link;
    }
}
const targetMap = /* @__PURE__ */ new WeakMap();
const ITERATE_KEY = Symbol("Object iterate");
const MAP_KEY_ITERATE_KEY = Symbol("Map keys iterate");
const ARRAY_ITERATE_KEY = Symbol("Array iterate");
function track(target, type, key) {
    if (shouldTrack && activeSub) {
        let depsMap = targetMap.get(target);
        if (!depsMap) targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
        let dep = depsMap.get(key);
        if (!dep) {
            depsMap.set(key, dep = new Dep());
            dep.map = depsMap;
            dep.key = key;
        }
        dep.track({
            target,
            type,
            key
        });
    }
}
function trigger(target, type, key, newValue, oldValue, oldTarget) {
    const depsMap = targetMap.get(target);
    if (!depsMap) {
        globalVersion++;
        return;
    }
    const run = (dep)=>{
        if (dep) dep.trigger({
            target,
            type,
            key,
            newValue,
            oldValue,
            oldTarget
        });
    };
    startBatch();
    if (type === "clear") depsMap.forEach(run);
    else {
        const targetIsArray = (0, _shared.isArray)(target);
        const isArrayIndex = targetIsArray && (0, _shared.isIntegerKey)(key);
        if (targetIsArray && key === "length") {
            const newLength = Number(newValue);
            depsMap.forEach((dep, key2)=>{
                if (key2 === "length" || key2 === ARRAY_ITERATE_KEY || !(0, _shared.isSymbol)(key2) && key2 >= newLength) run(dep);
            });
        } else {
            if (key !== void 0 || depsMap.has(void 0)) run(depsMap.get(key));
            if (isArrayIndex) run(depsMap.get(ARRAY_ITERATE_KEY));
            switch(type){
                case "add":
                    if (!targetIsArray) {
                        run(depsMap.get(ITERATE_KEY));
                        if ((0, _shared.isMap)(target)) run(depsMap.get(MAP_KEY_ITERATE_KEY));
                    } else if (isArrayIndex) run(depsMap.get("length"));
                    break;
                case "delete":
                    if (!targetIsArray) {
                        run(depsMap.get(ITERATE_KEY));
                        if ((0, _shared.isMap)(target)) run(depsMap.get(MAP_KEY_ITERATE_KEY));
                    }
                    break;
                case "set":
                    if ((0, _shared.isMap)(target)) run(depsMap.get(ITERATE_KEY));
                    break;
            }
        }
    }
    endBatch();
}
function getDepFromReactive(object, key) {
    const depMap = targetMap.get(object);
    return depMap && depMap.get(key);
}
function reactiveReadArray(array) {
    const raw = toRaw(array);
    if (raw === array) return raw;
    track(raw, "iterate", ARRAY_ITERATE_KEY);
    return isShallow(array) ? raw : raw.map(toReactive);
}
function shallowReadArray(arr) {
    track(arr = toRaw(arr), "iterate", ARRAY_ITERATE_KEY);
    return arr;
}
const arrayInstrumentations = {
    __proto__: null,
    [Symbol.iterator] () {
        return iterator(this, Symbol.iterator, toReactive);
    },
    concat (...args) {
        return reactiveReadArray(this).concat(...args.map((x)=>(0, _shared.isArray)(x) ? reactiveReadArray(x) : x));
    },
    entries () {
        return iterator(this, "entries", (value)=>{
            value[1] = toReactive(value[1]);
            return value;
        });
    },
    every (fn, thisArg) {
        return apply(this, "every", fn, thisArg, void 0, arguments);
    },
    filter (fn, thisArg) {
        return apply(this, "filter", fn, thisArg, (v)=>v.map(toReactive), arguments);
    },
    find (fn, thisArg) {
        return apply(this, "find", fn, thisArg, toReactive, arguments);
    },
    findIndex (fn, thisArg) {
        return apply(this, "findIndex", fn, thisArg, void 0, arguments);
    },
    findLast (fn, thisArg) {
        return apply(this, "findLast", fn, thisArg, toReactive, arguments);
    },
    findLastIndex (fn, thisArg) {
        return apply(this, "findLastIndex", fn, thisArg, void 0, arguments);
    },
    // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
    forEach (fn, thisArg) {
        return apply(this, "forEach", fn, thisArg, void 0, arguments);
    },
    includes (...args) {
        return searchProxy(this, "includes", args);
    },
    indexOf (...args) {
        return searchProxy(this, "indexOf", args);
    },
    join (separator) {
        return reactiveReadArray(this).join(separator);
    },
    // keys() iterator only reads `length`, no optimisation required
    lastIndexOf (...args) {
        return searchProxy(this, "lastIndexOf", args);
    },
    map (fn, thisArg) {
        return apply(this, "map", fn, thisArg, void 0, arguments);
    },
    pop () {
        return noTracking(this, "pop");
    },
    push (...args) {
        return noTracking(this, "push", args);
    },
    reduce (fn, ...args) {
        return reduce(this, "reduce", fn, args);
    },
    reduceRight (fn, ...args) {
        return reduce(this, "reduceRight", fn, args);
    },
    shift () {
        return noTracking(this, "shift");
    },
    // slice could use ARRAY_ITERATE but also seems to beg for range tracking
    some (fn, thisArg) {
        return apply(this, "some", fn, thisArg, void 0, arguments);
    },
    splice (...args) {
        return noTracking(this, "splice", args);
    },
    toReversed () {
        return reactiveReadArray(this).toReversed();
    },
    toSorted (comparer) {
        return reactiveReadArray(this).toSorted(comparer);
    },
    toSpliced (...args) {
        return reactiveReadArray(this).toSpliced(...args);
    },
    unshift (...args) {
        return noTracking(this, "unshift", args);
    },
    values () {
        return iterator(this, "values", toReactive);
    }
};
function iterator(self, method, wrapValue) {
    const arr = shallowReadArray(self);
    const iter = arr[method]();
    if (arr !== self && !isShallow(self)) {
        iter._next = iter.next;
        iter.next = ()=>{
            const result = iter._next();
            if (result.value) result.value = wrapValue(result.value);
            return result;
        };
    }
    return iter;
}
const arrayProto = Array.prototype;
function apply(self, method, fn, thisArg, wrappedRetFn, args) {
    const arr = shallowReadArray(self);
    const needsWrap = arr !== self && !isShallow(self);
    const methodFn = arr[method];
    if (methodFn !== arrayProto[method]) {
        const result2 = methodFn.apply(self, args);
        return needsWrap ? toReactive(result2) : result2;
    }
    let wrappedFn = fn;
    if (arr !== self) {
        if (needsWrap) wrappedFn = function(item, index) {
            return fn.call(this, toReactive(item), index, self);
        };
        else if (fn.length > 2) wrappedFn = function(item, index) {
            return fn.call(this, item, index, self);
        };
    }
    const result = methodFn.call(arr, wrappedFn, thisArg);
    return needsWrap && wrappedRetFn ? wrappedRetFn(result) : result;
}
function reduce(self, method, fn, args) {
    const arr = shallowReadArray(self);
    let wrappedFn = fn;
    if (arr !== self) {
        if (!isShallow(self)) wrappedFn = function(acc, item, index) {
            return fn.call(this, acc, toReactive(item), index, self);
        };
        else if (fn.length > 3) wrappedFn = function(acc, item, index) {
            return fn.call(this, acc, item, index, self);
        };
    }
    return arr[method](wrappedFn, ...args);
}
function searchProxy(self, method, args) {
    const arr = toRaw(self);
    track(arr, "iterate", ARRAY_ITERATE_KEY);
    const res = arr[method](...args);
    if ((res === -1 || res === false) && isProxy(args[0])) {
        args[0] = toRaw(args[0]);
        return arr[method](...args);
    }
    return res;
}
function noTracking(self, method, args = []) {
    pauseTracking();
    startBatch();
    const res = toRaw(self)[method].apply(self, args);
    endBatch();
    resetTracking();
    return res;
}
const isNonTrackableKeys = /* @__PURE__ */ (0, _shared.makeMap)(`__proto__,__v_isRef,__isVue`);
const builtInSymbols = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((key)=>key !== "arguments" && key !== "caller").map((key)=>Symbol[key]).filter((0, _shared.isSymbol)));
function hasOwnProperty(key) {
    if (!(0, _shared.isSymbol)(key)) key = String(key);
    const obj = toRaw(this);
    track(obj, "has", key);
    return obj.hasOwnProperty(key);
}
class BaseReactiveHandler {
    constructor(_isReadonly = false, _isShallow = false){
        this._isReadonly = _isReadonly;
        this._isShallow = _isShallow;
    }
    get(target, key, receiver) {
        if (key === "__v_skip") return target["__v_skip"];
        const isReadonly2 = this._isReadonly, isShallow2 = this._isShallow;
        if (key === "__v_isReactive") return !isReadonly2;
        else if (key === "__v_isReadonly") return isReadonly2;
        else if (key === "__v_isShallow") return isShallow2;
        else if (key === "__v_raw") {
            if (receiver === (isReadonly2 ? isShallow2 ? shallowReadonlyMap : readonlyMap : isShallow2 ? shallowReactiveMap : reactiveMap).get(target) || // receiver is not the reactive proxy, but has the same prototype
            // this means the receiver is a user proxy of the reactive proxy
            Object.getPrototypeOf(target) === Object.getPrototypeOf(receiver)) return target;
            return;
        }
        const targetIsArray = (0, _shared.isArray)(target);
        if (!isReadonly2) {
            let fn;
            if (targetIsArray && (fn = arrayInstrumentations[key])) return fn;
            if (key === "hasOwnProperty") return hasOwnProperty;
        }
        const res = Reflect.get(target, key, // if this is a proxy wrapping a ref, return methods using the raw ref
        // as receiver so that we don't have to call `toRaw` on the ref in all
        // its class methods
        isRef(target) ? target : receiver);
        if ((0, _shared.isSymbol)(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) return res;
        if (!isReadonly2) track(target, "get", key);
        if (isShallow2) return res;
        if (isRef(res)) return targetIsArray && (0, _shared.isIntegerKey)(key) ? res : res.value;
        if ((0, _shared.isObject)(res)) return isReadonly2 ? readonly(res) : reactive(res);
        return res;
    }
}
class MutableReactiveHandler extends BaseReactiveHandler {
    constructor(isShallow2 = false){
        super(false, isShallow2);
    }
    set(target, key, value, receiver) {
        let oldValue = target[key];
        if (!this._isShallow) {
            const isOldValueReadonly = isReadonly(oldValue);
            if (!isShallow(value) && !isReadonly(value)) {
                oldValue = toRaw(oldValue);
                value = toRaw(value);
            }
            if (!(0, _shared.isArray)(target) && isRef(oldValue) && !isRef(value)) {
                if (isOldValueReadonly) return false;
                else {
                    oldValue.value = value;
                    return true;
                }
            }
        }
        const hadKey = (0, _shared.isArray)(target) && (0, _shared.isIntegerKey)(key) ? Number(key) < target.length : (0, _shared.hasOwn)(target, key);
        const result = Reflect.set(target, key, value, isRef(target) ? target : receiver);
        if (target === toRaw(receiver)) {
            if (!hadKey) trigger(target, "add", key, value);
            else if ((0, _shared.hasChanged)(value, oldValue)) trigger(target, "set", key, value, oldValue);
        }
        return result;
    }
    deleteProperty(target, key) {
        const hadKey = (0, _shared.hasOwn)(target, key);
        const oldValue = target[key];
        const result = Reflect.deleteProperty(target, key);
        if (result && hadKey) trigger(target, "delete", key, void 0, oldValue);
        return result;
    }
    has(target, key) {
        const result = Reflect.has(target, key);
        if (!(0, _shared.isSymbol)(key) || !builtInSymbols.has(key)) track(target, "has", key);
        return result;
    }
    ownKeys(target) {
        track(target, "iterate", (0, _shared.isArray)(target) ? "length" : ITERATE_KEY);
        return Reflect.ownKeys(target);
    }
}
class ReadonlyReactiveHandler extends BaseReactiveHandler {
    constructor(isShallow2 = false){
        super(true, isShallow2);
    }
    set(target, key) {
        warn(`Set operation on key "${String(key)}" failed: target is readonly.`, target);
        return true;
    }
    deleteProperty(target, key) {
        warn(`Delete operation on key "${String(key)}" failed: target is readonly.`, target);
        return true;
    }
}
const mutableHandlers = /* @__PURE__ */ new MutableReactiveHandler();
const readonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler();
const shallowReactiveHandlers = /* @__PURE__ */ new MutableReactiveHandler(true);
const shallowReadonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler(true);
const toShallow = (value)=>value;
const getProto = (v)=>Reflect.getPrototypeOf(v);
function createIterableMethod(method, isReadonly2, isShallow2) {
    return function(...args) {
        const target = this["__v_raw"];
        const rawTarget = toRaw(target);
        const targetIsMap = (0, _shared.isMap)(rawTarget);
        const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
        const isKeyOnly = method === "keys" && targetIsMap;
        const innerIterator = target[method](...args);
        const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
        !isReadonly2 && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
        return {
            // iterator protocol
            next () {
                const { value, done } = innerIterator.next();
                return done ? {
                    value,
                    done
                } : {
                    value: isPair ? [
                        wrap(value[0]),
                        wrap(value[1])
                    ] : wrap(value),
                    done
                };
            },
            // iterable protocol
            [Symbol.iterator] () {
                return this;
            }
        };
    };
}
function createReadonlyMethod(type) {
    return function(...args) {
        {
            const key = args[0] ? `on key "${args[0]}" ` : ``;
            warn(`${(0, _shared.capitalize)(type)} operation ${key}failed: target is readonly.`, toRaw(this));
        }
        return type === "delete" ? false : type === "clear" ? void 0 : this;
    };
}
function createInstrumentations(readonly, shallow) {
    const instrumentations = {
        get (key) {
            const target = this["__v_raw"];
            const rawTarget = toRaw(target);
            const rawKey = toRaw(key);
            if (!readonly) {
                if ((0, _shared.hasChanged)(key, rawKey)) track(rawTarget, "get", key);
                track(rawTarget, "get", rawKey);
            }
            const { has } = getProto(rawTarget);
            const wrap = shallow ? toShallow : readonly ? toReadonly : toReactive;
            if (has.call(rawTarget, key)) return wrap(target.get(key));
            else if (has.call(rawTarget, rawKey)) return wrap(target.get(rawKey));
            else if (target !== rawTarget) target.get(key);
        },
        get size () {
            const target = this["__v_raw"];
            !readonly && track(toRaw(target), "iterate", ITERATE_KEY);
            return Reflect.get(target, "size", target);
        },
        has (key) {
            const target = this["__v_raw"];
            const rawTarget = toRaw(target);
            const rawKey = toRaw(key);
            if (!readonly) {
                if ((0, _shared.hasChanged)(key, rawKey)) track(rawTarget, "has", key);
                track(rawTarget, "has", rawKey);
            }
            return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
        },
        forEach (callback, thisArg) {
            const observed = this;
            const target = observed["__v_raw"];
            const rawTarget = toRaw(target);
            const wrap = shallow ? toShallow : readonly ? toReadonly : toReactive;
            !readonly && track(rawTarget, "iterate", ITERATE_KEY);
            return target.forEach((value, key)=>{
                return callback.call(thisArg, wrap(value), wrap(key), observed);
            });
        }
    };
    (0, _shared.extend)(instrumentations, readonly ? {
        add: createReadonlyMethod("add"),
        set: createReadonlyMethod("set"),
        delete: createReadonlyMethod("delete"),
        clear: createReadonlyMethod("clear")
    } : {
        add (value) {
            if (!shallow && !isShallow(value) && !isReadonly(value)) value = toRaw(value);
            const target = toRaw(this);
            const proto = getProto(target);
            const hadKey = proto.has.call(target, value);
            if (!hadKey) {
                target.add(value);
                trigger(target, "add", value, value);
            }
            return this;
        },
        set (key, value) {
            if (!shallow && !isShallow(value) && !isReadonly(value)) value = toRaw(value);
            const target = toRaw(this);
            const { has, get } = getProto(target);
            let hadKey = has.call(target, key);
            if (!hadKey) {
                key = toRaw(key);
                hadKey = has.call(target, key);
            } else checkIdentityKeys(target, has, key);
            const oldValue = get.call(target, key);
            target.set(key, value);
            if (!hadKey) trigger(target, "add", key, value);
            else if ((0, _shared.hasChanged)(value, oldValue)) trigger(target, "set", key, value, oldValue);
            return this;
        },
        delete (key) {
            const target = toRaw(this);
            const { has, get } = getProto(target);
            let hadKey = has.call(target, key);
            if (!hadKey) {
                key = toRaw(key);
                hadKey = has.call(target, key);
            } else checkIdentityKeys(target, has, key);
            const oldValue = get ? get.call(target, key) : void 0;
            const result = target.delete(key);
            if (hadKey) trigger(target, "delete", key, void 0, oldValue);
            return result;
        },
        clear () {
            const target = toRaw(this);
            const hadItems = target.size !== 0;
            const oldTarget = (0, _shared.isMap)(target) ? new Map(target) : new Set(target);
            const result = target.clear();
            if (hadItems) trigger(target, "clear", void 0, void 0, oldTarget);
            return result;
        }
    });
    const iteratorMethods = [
        "keys",
        "values",
        "entries",
        Symbol.iterator
    ];
    iteratorMethods.forEach((method)=>{
        instrumentations[method] = createIterableMethod(method, readonly, shallow);
    });
    return instrumentations;
}
function createInstrumentationGetter(isReadonly2, shallow) {
    const instrumentations = createInstrumentations(isReadonly2, shallow);
    return (target, key, receiver)=>{
        if (key === "__v_isReactive") return !isReadonly2;
        else if (key === "__v_isReadonly") return isReadonly2;
        else if (key === "__v_raw") return target;
        return Reflect.get((0, _shared.hasOwn)(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
    };
}
const mutableCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(false, false)
};
const shallowCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(false, true)
};
const readonlyCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(true, false)
};
const shallowReadonlyCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(true, true)
};
function checkIdentityKeys(target, has, key) {
    const rawKey = toRaw(key);
    if (rawKey !== key && has.call(target, rawKey)) {
        const type = (0, _shared.toRawType)(target);
        warn(`Reactive ${type} contains both the raw and reactive versions of the same object${type === `Map` ? ` as keys` : ``}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
    }
}
const reactiveMap = /* @__PURE__ */ new WeakMap();
const shallowReactiveMap = /* @__PURE__ */ new WeakMap();
const readonlyMap = /* @__PURE__ */ new WeakMap();
const shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
function targetTypeMap(rawType) {
    switch(rawType){
        case "Object":
        case "Array":
            return 1 /* COMMON */ ;
        case "Map":
        case "Set":
        case "WeakMap":
        case "WeakSet":
            return 2 /* COLLECTION */ ;
        default:
            return 0 /* INVALID */ ;
    }
}
function getTargetType(value) {
    return value["__v_skip"] || !Object.isExtensible(value) ? 0 /* INVALID */  : targetTypeMap((0, _shared.toRawType)(value));
}
function reactive(target) {
    if (isReadonly(target)) return target;
    return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
}
function shallowReactive(target) {
    return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
}
function readonly(target) {
    return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
}
function shallowReadonly(target) {
    return createReactiveObject(target, true, shallowReadonlyHandlers, shallowReadonlyCollectionHandlers, shallowReadonlyMap);
}
function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
    if (!(0, _shared.isObject)(target)) {
        warn(`value cannot be made ${isReadonly2 ? "readonly" : "reactive"}: ${String(target)}`);
        return target;
    }
    if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) return target;
    const targetType = getTargetType(target);
    if (targetType === 0 /* INVALID */ ) return target;
    const existingProxy = proxyMap.get(target);
    if (existingProxy) return existingProxy;
    const proxy = new Proxy(target, targetType === 2 /* COLLECTION */  ? collectionHandlers : baseHandlers);
    proxyMap.set(target, proxy);
    return proxy;
}
function isReactive(value) {
    if (isReadonly(value)) return isReactive(value["__v_raw"]);
    return !!(value && value["__v_isReactive"]);
}
function isReadonly(value) {
    return !!(value && value["__v_isReadonly"]);
}
function isShallow(value) {
    return !!(value && value["__v_isShallow"]);
}
function isProxy(value) {
    return value ? !!value["__v_raw"] : false;
}
function toRaw(observed) {
    const raw = observed && observed["__v_raw"];
    return raw ? toRaw(raw) : observed;
}
function markRaw(value) {
    if (!(0, _shared.hasOwn)(value, "__v_skip") && Object.isExtensible(value)) (0, _shared.def)(value, "__v_skip", true);
    return value;
}
const toReactive = (value)=>(0, _shared.isObject)(value) ? reactive(value) : value;
const toReadonly = (value)=>(0, _shared.isObject)(value) ? readonly(value) : value;
function isRef(r) {
    return r ? r["__v_isRef"] === true : false;
}
function ref(value) {
    return createRef(value, false);
}
function shallowRef(value) {
    return createRef(value, true);
}
function createRef(rawValue, shallow) {
    if (isRef(rawValue)) return rawValue;
    return new RefImpl(rawValue, shallow);
}
class RefImpl {
    constructor(value, isShallow2){
        this.dep = new Dep();
        this["__v_isRef"] = true;
        this["__v_isShallow"] = false;
        this._rawValue = isShallow2 ? value : toRaw(value);
        this._value = isShallow2 ? value : toReactive(value);
        this["__v_isShallow"] = isShallow2;
    }
    get value() {
        this.dep.track({
            target: this,
            type: "get",
            key: "value"
        });
        return this._value;
    }
    set value(newValue) {
        const oldValue = this._rawValue;
        const useDirectValue = this["__v_isShallow"] || isShallow(newValue) || isReadonly(newValue);
        newValue = useDirectValue ? newValue : toRaw(newValue);
        if ((0, _shared.hasChanged)(newValue, oldValue)) {
            this._rawValue = newValue;
            this._value = useDirectValue ? newValue : toReactive(newValue);
            this.dep.trigger({
                target: this,
                type: "set",
                key: "value",
                newValue,
                oldValue
            });
        }
    }
}
function triggerRef(ref2) {
    if (ref2.dep) ref2.dep.trigger({
        target: ref2,
        type: "set",
        key: "value",
        newValue: ref2._value
    });
}
function unref(ref2) {
    return isRef(ref2) ? ref2.value : ref2;
}
function toValue(source) {
    return (0, _shared.isFunction)(source) ? source() : unref(source);
}
const shallowUnwrapHandlers = {
    get: (target, key, receiver)=>key === "__v_raw" ? target : unref(Reflect.get(target, key, receiver)),
    set: (target, key, value, receiver)=>{
        const oldValue = target[key];
        if (isRef(oldValue) && !isRef(value)) {
            oldValue.value = value;
            return true;
        } else return Reflect.set(target, key, value, receiver);
    }
};
function proxyRefs(objectWithRefs) {
    return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}
class CustomRefImpl {
    constructor(factory){
        this["__v_isRef"] = true;
        this._value = void 0;
        const dep = this.dep = new Dep();
        const { get, set } = factory(dep.track.bind(dep), dep.trigger.bind(dep));
        this._get = get;
        this._set = set;
    }
    get value() {
        return this._value = this._get();
    }
    set value(newVal) {
        this._set(newVal);
    }
}
function customRef(factory) {
    return new CustomRefImpl(factory);
}
function toRefs(object) {
    if (!isProxy(object)) warn(`toRefs() expects a reactive object but received a plain one.`);
    const ret = (0, _shared.isArray)(object) ? new Array(object.length) : {};
    for(const key in object)ret[key] = propertyToRef(object, key);
    return ret;
}
class ObjectRefImpl {
    constructor(_object, _key, _defaultValue){
        this._object = _object;
        this._key = _key;
        this._defaultValue = _defaultValue;
        this["__v_isRef"] = true;
        this._value = void 0;
    }
    get value() {
        const val = this._object[this._key];
        return this._value = val === void 0 ? this._defaultValue : val;
    }
    set value(newVal) {
        this._object[this._key] = newVal;
    }
    get dep() {
        return getDepFromReactive(toRaw(this._object), this._key);
    }
}
class GetterRefImpl {
    constructor(_getter){
        this._getter = _getter;
        this["__v_isRef"] = true;
        this["__v_isReadonly"] = true;
        this._value = void 0;
    }
    get value() {
        return this._value = this._getter();
    }
}
function toRef(source, key, defaultValue) {
    if (isRef(source)) return source;
    else if ((0, _shared.isFunction)(source)) return new GetterRefImpl(source);
    else if ((0, _shared.isObject)(source) && arguments.length > 1) return propertyToRef(source, key, defaultValue);
    else return ref(source);
}
function propertyToRef(source, key, defaultValue) {
    const val = source[key];
    return isRef(val) ? val : new ObjectRefImpl(source, key, defaultValue);
}
class ComputedRefImpl {
    constructor(fn, setter, isSSR){
        this.fn = fn;
        this.setter = setter;
        /**
     * @internal
     */ this._value = void 0;
        /**
     * @internal
     */ this.dep = new Dep(this);
        /**
     * @internal
     */ this.__v_isRef = true;
        // TODO isolatedDeclarations "__v_isReadonly"
        // A computed is also a subscriber that tracks other deps
        /**
     * @internal
     */ this.deps = void 0;
        /**
     * @internal
     */ this.depsTail = void 0;
        /**
     * @internal
     */ this.flags = 16;
        /**
     * @internal
     */ this.globalVersion = globalVersion - 1;
        /**
     * @internal
     */ this.next = void 0;
        // for backwards compat
        this.effect = this;
        this["__v_isReadonly"] = !setter;
        this.isSSR = isSSR;
    }
    /**
   * @internal
   */ notify() {
        this.flags |= 16;
        if (!(this.flags & 8) && // avoid infinite self recursion
        activeSub !== this) {
            batch(this, true);
            return true;
        }
    }
    get value() {
        const link = this.dep.track({
            target: this,
            type: "get",
            key: "value"
        });
        refreshComputed(this);
        if (link) link.version = this.dep.version;
        return this._value;
    }
    set value(newValue) {
        if (this.setter) this.setter(newValue);
        else warn("Write operation failed: computed value is readonly");
    }
}
function computed(getterOrOptions, debugOptions, isSSR = false) {
    let getter;
    let setter;
    if ((0, _shared.isFunction)(getterOrOptions)) getter = getterOrOptions;
    else {
        getter = getterOrOptions.get;
        setter = getterOrOptions.set;
    }
    const cRef = new ComputedRefImpl(getter, setter, isSSR);
    if (debugOptions && !isSSR) {
        cRef.onTrack = debugOptions.onTrack;
        cRef.onTrigger = debugOptions.onTrigger;
    }
    return cRef;
}
const TrackOpTypes = {
    "GET": "get",
    "HAS": "has",
    "ITERATE": "iterate"
};
const TriggerOpTypes = {
    "SET": "set",
    "ADD": "add",
    "DELETE": "delete",
    "CLEAR": "clear"
};
const ReactiveFlags = {
    "SKIP": "__v_skip",
    "IS_REACTIVE": "__v_isReactive",
    "IS_READONLY": "__v_isReadonly",
    "IS_SHALLOW": "__v_isShallow",
    "RAW": "__v_raw",
    "IS_REF": "__v_isRef"
};
const WatchErrorCodes = {
    "WATCH_GETTER": 2,
    "2": "WATCH_GETTER",
    "WATCH_CALLBACK": 3,
    "3": "WATCH_CALLBACK",
    "WATCH_CLEANUP": 4,
    "4": "WATCH_CLEANUP"
};
const INITIAL_WATCHER_VALUE = {};
const cleanupMap = /* @__PURE__ */ new WeakMap();
let activeWatcher = void 0;
function getCurrentWatcher() {
    return activeWatcher;
}
function onWatcherCleanup(cleanupFn, failSilently = false, owner = activeWatcher) {
    if (owner) {
        let cleanups = cleanupMap.get(owner);
        if (!cleanups) cleanupMap.set(owner, cleanups = []);
        cleanups.push(cleanupFn);
    } else if (!failSilently) warn(`onWatcherCleanup() was called when there was no active watcher to associate with.`);
}
function watch(source, cb, options = (0, _shared.EMPTY_OBJ)) {
    const { immediate, deep, once, scheduler, augmentJob, call } = options;
    const warnInvalidSource = (s)=>{
        (options.onWarn || warn)(`Invalid watch source: `, s, `A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.`);
    };
    const reactiveGetter = (source2)=>{
        if (deep) return source2;
        if (isShallow(source2) || deep === false || deep === 0) return traverse(source2, 1);
        return traverse(source2);
    };
    let effect;
    let getter;
    let cleanup;
    let boundCleanup;
    let forceTrigger = false;
    let isMultiSource = false;
    if (isRef(source)) {
        getter = ()=>source.value;
        forceTrigger = isShallow(source);
    } else if (isReactive(source)) {
        getter = ()=>reactiveGetter(source);
        forceTrigger = true;
    } else if ((0, _shared.isArray)(source)) {
        isMultiSource = true;
        forceTrigger = source.some((s)=>isReactive(s) || isShallow(s));
        getter = ()=>source.map((s)=>{
                if (isRef(s)) return s.value;
                else if (isReactive(s)) return reactiveGetter(s);
                else if ((0, _shared.isFunction)(s)) return call ? call(s, 2) : s();
                else warnInvalidSource(s);
            });
    } else if ((0, _shared.isFunction)(source)) {
        if (cb) getter = call ? ()=>call(source, 2) : source;
        else getter = ()=>{
            if (cleanup) {
                pauseTracking();
                try {
                    cleanup();
                } finally{
                    resetTracking();
                }
            }
            const currentEffect = activeWatcher;
            activeWatcher = effect;
            try {
                return call ? call(source, 3, [
                    boundCleanup
                ]) : source(boundCleanup);
            } finally{
                activeWatcher = currentEffect;
            }
        };
    } else {
        getter = (0, _shared.NOOP);
        warnInvalidSource(source);
    }
    if (cb && deep) {
        const baseGetter = getter;
        const depth = deep === true ? Infinity : deep;
        getter = ()=>traverse(baseGetter(), depth);
    }
    const scope = getCurrentScope();
    const watchHandle = ()=>{
        effect.stop();
        if (scope && scope.active) (0, _shared.remove)(scope.effects, effect);
    };
    if (once && cb) {
        const _cb = cb;
        cb = (...args)=>{
            _cb(...args);
            watchHandle();
        };
    }
    let oldValue = isMultiSource ? new Array(source.length).fill(INITIAL_WATCHER_VALUE) : INITIAL_WATCHER_VALUE;
    const job = (immediateFirstRun)=>{
        if (!(effect.flags & 1) || !effect.dirty && !immediateFirstRun) return;
        if (cb) {
            const newValue = effect.run();
            if (deep || forceTrigger || (isMultiSource ? newValue.some((v, i)=>(0, _shared.hasChanged)(v, oldValue[i])) : (0, _shared.hasChanged)(newValue, oldValue))) {
                if (cleanup) cleanup();
                const currentWatcher = activeWatcher;
                activeWatcher = effect;
                try {
                    const args = [
                        newValue,
                        // pass undefined as the old value when it's changed for the first time
                        oldValue === INITIAL_WATCHER_VALUE ? void 0 : isMultiSource && oldValue[0] === INITIAL_WATCHER_VALUE ? [] : oldValue,
                        boundCleanup
                    ];
                    oldValue = newValue;
                    call ? call(cb, 3, args) : // @ts-expect-error
                    cb(...args);
                } finally{
                    activeWatcher = currentWatcher;
                }
            }
        } else effect.run();
    };
    if (augmentJob) augmentJob(job);
    effect = new ReactiveEffect(getter);
    effect.scheduler = scheduler ? ()=>scheduler(job, false) : job;
    boundCleanup = (fn)=>onWatcherCleanup(fn, false, effect);
    cleanup = effect.onStop = ()=>{
        const cleanups = cleanupMap.get(effect);
        if (cleanups) {
            if (call) call(cleanups, 4);
            else for (const cleanup2 of cleanups)cleanup2();
            cleanupMap.delete(effect);
        }
    };
    effect.onTrack = options.onTrack;
    effect.onTrigger = options.onTrigger;
    if (cb) {
        if (immediate) job(true);
        else oldValue = effect.run();
    } else if (scheduler) scheduler(job.bind(null, true), true);
    else effect.run();
    watchHandle.pause = effect.pause.bind(effect);
    watchHandle.resume = effect.resume.bind(effect);
    watchHandle.stop = watchHandle;
    return watchHandle;
}
function traverse(value, depth = Infinity, seen) {
    if (depth <= 0 || !(0, _shared.isObject)(value) || value["__v_skip"]) return value;
    seen = seen || /* @__PURE__ */ new Set();
    if (seen.has(value)) return value;
    seen.add(value);
    depth--;
    if (isRef(value)) traverse(value.value, depth, seen);
    else if ((0, _shared.isArray)(value)) for(let i = 0; i < value.length; i++)traverse(value[i], depth, seen);
    else if ((0, _shared.isSet)(value) || (0, _shared.isMap)(value)) value.forEach((v)=>{
        traverse(v, depth, seen);
    });
    else if ((0, _shared.isPlainObject)(value)) {
        for(const key in value)traverse(value[key], depth, seen);
        for (const key of Object.getOwnPropertySymbols(value))if (Object.prototype.propertyIsEnumerable.call(value, key)) traverse(value[key], depth, seen);
    }
    return value;
}

},{"@vue/shared":"lWRkg","@parcel/transformer-js/src/esmodule-helpers.js":"fVvIk"}],"lWRkg":[function(require,module,exports,__globalThis) {
/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/ /*! #__NO_SIDE_EFFECTS__ */ // @__NO_SIDE_EFFECTS__
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EMPTY_ARR", ()=>EMPTY_ARR);
parcelHelpers.export(exports, "EMPTY_OBJ", ()=>EMPTY_OBJ);
parcelHelpers.export(exports, "NO", ()=>NO);
parcelHelpers.export(exports, "NOOP", ()=>NOOP);
parcelHelpers.export(exports, "PatchFlagNames", ()=>PatchFlagNames);
parcelHelpers.export(exports, "PatchFlags", ()=>PatchFlags);
parcelHelpers.export(exports, "ShapeFlags", ()=>ShapeFlags);
parcelHelpers.export(exports, "SlotFlags", ()=>SlotFlags);
parcelHelpers.export(exports, "camelize", ()=>camelize);
parcelHelpers.export(exports, "capitalize", ()=>capitalize);
parcelHelpers.export(exports, "cssVarNameEscapeSymbolsRE", ()=>cssVarNameEscapeSymbolsRE);
parcelHelpers.export(exports, "def", ()=>def);
parcelHelpers.export(exports, "escapeHtml", ()=>escapeHtml);
parcelHelpers.export(exports, "escapeHtmlComment", ()=>escapeHtmlComment);
parcelHelpers.export(exports, "extend", ()=>extend);
parcelHelpers.export(exports, "genCacheKey", ()=>genCacheKey);
parcelHelpers.export(exports, "genPropsAccessExp", ()=>genPropsAccessExp);
parcelHelpers.export(exports, "generateCodeFrame", ()=>generateCodeFrame);
parcelHelpers.export(exports, "getEscapedCssVarName", ()=>getEscapedCssVarName);
parcelHelpers.export(exports, "getGlobalThis", ()=>getGlobalThis);
parcelHelpers.export(exports, "hasChanged", ()=>hasChanged);
parcelHelpers.export(exports, "hasOwn", ()=>hasOwn);
parcelHelpers.export(exports, "hyphenate", ()=>hyphenate);
parcelHelpers.export(exports, "includeBooleanAttr", ()=>includeBooleanAttr);
parcelHelpers.export(exports, "invokeArrayFns", ()=>invokeArrayFns);
parcelHelpers.export(exports, "isArray", ()=>isArray);
parcelHelpers.export(exports, "isBooleanAttr", ()=>isBooleanAttr);
parcelHelpers.export(exports, "isBuiltInDirective", ()=>isBuiltInDirective);
parcelHelpers.export(exports, "isDate", ()=>isDate);
parcelHelpers.export(exports, "isFunction", ()=>isFunction);
parcelHelpers.export(exports, "isGloballyAllowed", ()=>isGloballyAllowed);
parcelHelpers.export(exports, "isGloballyWhitelisted", ()=>isGloballyWhitelisted);
parcelHelpers.export(exports, "isHTMLTag", ()=>isHTMLTag);
parcelHelpers.export(exports, "isIntegerKey", ()=>isIntegerKey);
parcelHelpers.export(exports, "isKnownHtmlAttr", ()=>isKnownHtmlAttr);
parcelHelpers.export(exports, "isKnownMathMLAttr", ()=>isKnownMathMLAttr);
parcelHelpers.export(exports, "isKnownSvgAttr", ()=>isKnownSvgAttr);
parcelHelpers.export(exports, "isMap", ()=>isMap);
parcelHelpers.export(exports, "isMathMLTag", ()=>isMathMLTag);
parcelHelpers.export(exports, "isModelListener", ()=>isModelListener);
parcelHelpers.export(exports, "isObject", ()=>isObject);
parcelHelpers.export(exports, "isOn", ()=>isOn);
parcelHelpers.export(exports, "isPlainObject", ()=>isPlainObject);
parcelHelpers.export(exports, "isPromise", ()=>isPromise);
parcelHelpers.export(exports, "isRegExp", ()=>isRegExp);
parcelHelpers.export(exports, "isRenderableAttrValue", ()=>isRenderableAttrValue);
parcelHelpers.export(exports, "isReservedProp", ()=>isReservedProp);
parcelHelpers.export(exports, "isSSRSafeAttrName", ()=>isSSRSafeAttrName);
parcelHelpers.export(exports, "isSVGTag", ()=>isSVGTag);
parcelHelpers.export(exports, "isSet", ()=>isSet);
parcelHelpers.export(exports, "isSpecialBooleanAttr", ()=>isSpecialBooleanAttr);
parcelHelpers.export(exports, "isString", ()=>isString);
parcelHelpers.export(exports, "isSymbol", ()=>isSymbol);
parcelHelpers.export(exports, "isVoidTag", ()=>isVoidTag);
parcelHelpers.export(exports, "looseEqual", ()=>looseEqual);
parcelHelpers.export(exports, "looseIndexOf", ()=>looseIndexOf);
parcelHelpers.export(exports, "looseToNumber", ()=>looseToNumber);
parcelHelpers.export(exports, "makeMap", ()=>makeMap);
parcelHelpers.export(exports, "normalizeClass", ()=>normalizeClass);
parcelHelpers.export(exports, "normalizeProps", ()=>normalizeProps);
parcelHelpers.export(exports, "normalizeStyle", ()=>normalizeStyle);
parcelHelpers.export(exports, "objectToString", ()=>objectToString);
parcelHelpers.export(exports, "parseStringStyle", ()=>parseStringStyle);
parcelHelpers.export(exports, "propsToAttrMap", ()=>propsToAttrMap);
parcelHelpers.export(exports, "remove", ()=>remove);
parcelHelpers.export(exports, "slotFlagsText", ()=>slotFlagsText);
parcelHelpers.export(exports, "stringifyStyle", ()=>stringifyStyle);
parcelHelpers.export(exports, "toDisplayString", ()=>toDisplayString);
parcelHelpers.export(exports, "toHandlerKey", ()=>toHandlerKey);
parcelHelpers.export(exports, "toNumber", ()=>toNumber);
parcelHelpers.export(exports, "toRawType", ()=>toRawType);
parcelHelpers.export(exports, "toTypeString", ()=>toTypeString);
var global = arguments[3];
function makeMap(str) {
    const map = /* @__PURE__ */ Object.create(null);
    for (const key of str.split(","))map[key] = 1;
    return (val)=>val in map;
}
const EMPTY_OBJ = Object.freeze({});
const EMPTY_ARR = Object.freeze([]);
const NOOP = ()=>{};
const NO = ()=>false;
const isOn = (key)=>key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && // uppercase letter
    (key.charCodeAt(2) > 122 || key.charCodeAt(2) < 97);
const isModelListener = (key)=>key.startsWith("onUpdate:");
const extend = Object.assign;
const remove = (arr, el)=>{
    const i = arr.indexOf(el);
    if (i > -1) arr.splice(i, 1);
};
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key)=>hasOwnProperty.call(val, key);
const isArray = Array.isArray;
const isMap = (val)=>toTypeString(val) === "[object Map]";
const isSet = (val)=>toTypeString(val) === "[object Set]";
const isDate = (val)=>toTypeString(val) === "[object Date]";
const isRegExp = (val)=>toTypeString(val) === "[object RegExp]";
const isFunction = (val)=>typeof val === "function";
const isString = (val)=>typeof val === "string";
const isSymbol = (val)=>typeof val === "symbol";
const isObject = (val)=>val !== null && typeof val === "object";
const isPromise = (val)=>{
    return (isObject(val) || isFunction(val)) && isFunction(val.then) && isFunction(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = (value)=>objectToString.call(value);
const toRawType = (value)=>{
    return toTypeString(value).slice(8, -1);
};
const isPlainObject = (val)=>toTypeString(val) === "[object Object]";
const isIntegerKey = (key)=>isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
const isReservedProp = /* @__PURE__ */ makeMap(// the leading comma is intentional so empty string "" is also included
",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
const isBuiltInDirective = /* @__PURE__ */ makeMap("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo");
const cacheStringFunction = (fn)=>{
    const cache = /* @__PURE__ */ Object.create(null);
    return (str)=>{
        const hit = cache[str];
        return hit || (cache[str] = fn(str));
    };
};
const camelizeRE = /-(\w)/g;
const camelize = cacheStringFunction((str)=>{
    return str.replace(camelizeRE, (_, c)=>c ? c.toUpperCase() : "");
});
const hyphenateRE = /\B([A-Z])/g;
const hyphenate = cacheStringFunction((str)=>str.replace(hyphenateRE, "-$1").toLowerCase());
const capitalize = cacheStringFunction((str)=>{
    return str.charAt(0).toUpperCase() + str.slice(1);
});
const toHandlerKey = cacheStringFunction((str)=>{
    const s = str ? `on${capitalize(str)}` : ``;
    return s;
});
const hasChanged = (value, oldValue)=>!Object.is(value, oldValue);
const invokeArrayFns = (fns, ...arg)=>{
    for(let i = 0; i < fns.length; i++)fns[i](...arg);
};
const def = (obj, key, value, writable = false)=>{
    Object.defineProperty(obj, key, {
        configurable: true,
        enumerable: false,
        writable,
        value
    });
};
const looseToNumber = (val)=>{
    const n = parseFloat(val);
    return isNaN(n) ? val : n;
};
const toNumber = (val)=>{
    const n = isString(val) ? Number(val) : NaN;
    return isNaN(n) ? val : n;
};
let _globalThis;
const getGlobalThis = ()=>{
    return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
};
const identRE = /^[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*$/;
function genPropsAccessExp(name) {
    return identRE.test(name) ? `__props.${name}` : `__props[${JSON.stringify(name)}]`;
}
function genCacheKey(source, options) {
    return source + JSON.stringify(options, (_, val)=>typeof val === "function" ? val.toString() : val);
}
const PatchFlags = {
    "TEXT": 1,
    "1": "TEXT",
    "CLASS": 2,
    "2": "CLASS",
    "STYLE": 4,
    "4": "STYLE",
    "PROPS": 8,
    "8": "PROPS",
    "FULL_PROPS": 16,
    "16": "FULL_PROPS",
    "NEED_HYDRATION": 32,
    "32": "NEED_HYDRATION",
    "STABLE_FRAGMENT": 64,
    "64": "STABLE_FRAGMENT",
    "KEYED_FRAGMENT": 128,
    "128": "KEYED_FRAGMENT",
    "UNKEYED_FRAGMENT": 256,
    "256": "UNKEYED_FRAGMENT",
    "NEED_PATCH": 512,
    "512": "NEED_PATCH",
    "DYNAMIC_SLOTS": 1024,
    "1024": "DYNAMIC_SLOTS",
    "DEV_ROOT_FRAGMENT": 2048,
    "2048": "DEV_ROOT_FRAGMENT",
    "CACHED": -1,
    "-1": "CACHED",
    "BAIL": -2,
    "-2": "BAIL"
};
const PatchFlagNames = {
    [1]: `TEXT`,
    [2]: `CLASS`,
    [4]: `STYLE`,
    [8]: `PROPS`,
    [16]: `FULL_PROPS`,
    [32]: `NEED_HYDRATION`,
    [64]: `STABLE_FRAGMENT`,
    [128]: `KEYED_FRAGMENT`,
    [256]: `UNKEYED_FRAGMENT`,
    [512]: `NEED_PATCH`,
    [1024]: `DYNAMIC_SLOTS`,
    [2048]: `DEV_ROOT_FRAGMENT`,
    [-1]: `CACHED`,
    [-2]: `BAIL`
};
const ShapeFlags = {
    "ELEMENT": 1,
    "1": "ELEMENT",
    "FUNCTIONAL_COMPONENT": 2,
    "2": "FUNCTIONAL_COMPONENT",
    "STATEFUL_COMPONENT": 4,
    "4": "STATEFUL_COMPONENT",
    "TEXT_CHILDREN": 8,
    "8": "TEXT_CHILDREN",
    "ARRAY_CHILDREN": 16,
    "16": "ARRAY_CHILDREN",
    "SLOTS_CHILDREN": 32,
    "32": "SLOTS_CHILDREN",
    "TELEPORT": 64,
    "64": "TELEPORT",
    "SUSPENSE": 128,
    "128": "SUSPENSE",
    "COMPONENT_SHOULD_KEEP_ALIVE": 256,
    "256": "COMPONENT_SHOULD_KEEP_ALIVE",
    "COMPONENT_KEPT_ALIVE": 512,
    "512": "COMPONENT_KEPT_ALIVE",
    "COMPONENT": 6,
    "6": "COMPONENT"
};
const SlotFlags = {
    "STABLE": 1,
    "1": "STABLE",
    "DYNAMIC": 2,
    "2": "DYNAMIC",
    "FORWARDED": 3,
    "3": "FORWARDED"
};
const slotFlagsText = {
    [1]: "STABLE",
    [2]: "DYNAMIC",
    [3]: "FORWARDED"
};
const GLOBALS_ALLOWED = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol";
const isGloballyAllowed = /* @__PURE__ */ makeMap(GLOBALS_ALLOWED);
const isGloballyWhitelisted = isGloballyAllowed;
const range = 2;
function generateCodeFrame(source, start = 0, end = source.length) {
    start = Math.max(0, Math.min(start, source.length));
    end = Math.max(0, Math.min(end, source.length));
    if (start > end) return "";
    let lines = source.split(/(\r?\n)/);
    const newlineSequences = lines.filter((_, idx)=>idx % 2 === 1);
    lines = lines.filter((_, idx)=>idx % 2 === 0);
    let count = 0;
    const res = [];
    for(let i = 0; i < lines.length; i++){
        count += lines[i].length + (newlineSequences[i] && newlineSequences[i].length || 0);
        if (count >= start) {
            for(let j = i - range; j <= i + range || end > count; j++){
                if (j < 0 || j >= lines.length) continue;
                const line = j + 1;
                res.push(`${line}${" ".repeat(Math.max(3 - String(line).length, 0))}|  ${lines[j]}`);
                const lineLength = lines[j].length;
                const newLineSeqLength = newlineSequences[j] && newlineSequences[j].length || 0;
                if (j === i) {
                    const pad = start - (count - (lineLength + newLineSeqLength));
                    const length = Math.max(1, end > count ? lineLength - pad : end - start);
                    res.push(`   |  ` + " ".repeat(pad) + "^".repeat(length));
                } else if (j > i) {
                    if (end > count) {
                        const length = Math.max(Math.min(end - count, lineLength), 1);
                        res.push(`   |  ` + "^".repeat(length));
                    }
                    count += lineLength + newLineSeqLength;
                }
            }
            break;
        }
    }
    return res.join("\n");
}
function normalizeStyle(value) {
    if (isArray(value)) {
        const res = {};
        for(let i = 0; i < value.length; i++){
            const item = value[i];
            const normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);
            if (normalized) for(const key in normalized)res[key] = normalized[key];
        }
        return res;
    } else if (isString(value) || isObject(value)) return value;
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:([^]+)/;
const styleCommentRE = /\/\*[^]*?\*\//g;
function parseStringStyle(cssText) {
    const ret = {};
    cssText.replace(styleCommentRE, "").split(listDelimiterRE).forEach((item)=>{
        if (item) {
            const tmp = item.split(propertyDelimiterRE);
            tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
        }
    });
    return ret;
}
function stringifyStyle(styles) {
    if (!styles) return "";
    if (isString(styles)) return styles;
    let ret = "";
    for(const key in styles){
        const value = styles[key];
        if (isString(value) || typeof value === "number") {
            const normalizedKey = key.startsWith(`--`) ? key : hyphenate(key);
            ret += `${normalizedKey}:${value};`;
        }
    }
    return ret;
}
function normalizeClass(value) {
    let res = "";
    if (isString(value)) res = value;
    else if (isArray(value)) for(let i = 0; i < value.length; i++){
        const normalized = normalizeClass(value[i]);
        if (normalized) res += normalized + " ";
    }
    else if (isObject(value)) {
        for(const name in value)if (value[name]) res += name + " ";
    }
    return res.trim();
}
function normalizeProps(props) {
    if (!props) return null;
    let { class: klass, style } = props;
    if (klass && !isString(klass)) props.class = normalizeClass(klass);
    if (style) props.style = normalizeStyle(style);
    return props;
}
const HTML_TAGS = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
const SVG_TAGS = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
const MATH_TAGS = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics";
const VOID_TAGS = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr";
const isHTMLTag = /* @__PURE__ */ makeMap(HTML_TAGS);
const isSVGTag = /* @__PURE__ */ makeMap(SVG_TAGS);
const isMathMLTag = /* @__PURE__ */ makeMap(MATH_TAGS);
const isVoidTag = /* @__PURE__ */ makeMap(VOID_TAGS);
const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
const isBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`);
function includeBooleanAttr(value) {
    return !!value || value === "";
}
const unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
const attrValidationCache = {};
function isSSRSafeAttrName(name) {
    if (attrValidationCache.hasOwnProperty(name)) return attrValidationCache[name];
    const isUnsafe = unsafeAttrCharRE.test(name);
    if (isUnsafe) console.error(`unsafe attribute name: ${name}`);
    return attrValidationCache[name] = !isUnsafe;
}
const propsToAttrMap = {
    acceptCharset: "accept-charset",
    className: "class",
    htmlFor: "for",
    httpEquiv: "http-equiv"
};
const isKnownHtmlAttr = /* @__PURE__ */ makeMap(`accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,inert,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap`);
const isKnownSvgAttr = /* @__PURE__ */ makeMap(`xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xmlns:xlink,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan`);
const isKnownMathMLAttr = /* @__PURE__ */ makeMap(`accent,accentunder,actiontype,align,alignmentscope,altimg,altimg-height,altimg-valign,altimg-width,alttext,bevelled,close,columnsalign,columnlines,columnspan,denomalign,depth,dir,display,displaystyle,encoding,equalcolumns,equalrows,fence,fontstyle,fontweight,form,frame,framespacing,groupalign,height,href,id,indentalign,indentalignfirst,indentalignlast,indentshift,indentshiftfirst,indentshiftlast,indextype,justify,largetop,largeop,lquote,lspace,mathbackground,mathcolor,mathsize,mathvariant,maxsize,minlabelspacing,mode,other,overflow,position,rowalign,rowlines,rowspan,rquote,rspace,scriptlevel,scriptminsize,scriptsizemultiplier,selection,separator,separators,shift,side,src,stackalign,stretchy,subscriptshift,superscriptshift,symmetric,voffset,width,widths,xlink:href,xlink:show,xlink:type,xmlns`);
function isRenderableAttrValue(value) {
    if (value == null) return false;
    const type = typeof value;
    return type === "string" || type === "number" || type === "boolean";
}
const escapeRE = /["'&<>]/;
function escapeHtml(string) {
    const str = "" + string;
    const match = escapeRE.exec(str);
    if (!match) return str;
    let html = "";
    let escaped;
    let index;
    let lastIndex = 0;
    for(index = match.index; index < str.length; index++){
        switch(str.charCodeAt(index)){
            case 34:
                escaped = "&quot;";
                break;
            case 38:
                escaped = "&amp;";
                break;
            case 39:
                escaped = "&#39;";
                break;
            case 60:
                escaped = "&lt;";
                break;
            case 62:
                escaped = "&gt;";
                break;
            default:
                continue;
        }
        if (lastIndex !== index) html += str.slice(lastIndex, index);
        lastIndex = index + 1;
        html += escaped;
    }
    return lastIndex !== index ? html + str.slice(lastIndex, index) : html;
}
const commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;
function escapeHtmlComment(src) {
    return src.replace(commentStripRE, "");
}
const cssVarNameEscapeSymbolsRE = /[ !"#$%&'()*+,./:;<=>?@[\\\]^`{|}~]/g;
function getEscapedCssVarName(key, doubleEscape) {
    return key.replace(cssVarNameEscapeSymbolsRE, (s)=>doubleEscape ? s === '"' ? '\\\\\\"' : `\\\\${s}` : `\\${s}`);
}
function looseCompareArrays(a, b) {
    if (a.length !== b.length) return false;
    let equal = true;
    for(let i = 0; equal && i < a.length; i++)equal = looseEqual(a[i], b[i]);
    return equal;
}
function looseEqual(a, b) {
    if (a === b) return true;
    let aValidType = isDate(a);
    let bValidType = isDate(b);
    if (aValidType || bValidType) return aValidType && bValidType ? a.getTime() === b.getTime() : false;
    aValidType = isSymbol(a);
    bValidType = isSymbol(b);
    if (aValidType || bValidType) return a === b;
    aValidType = isArray(a);
    bValidType = isArray(b);
    if (aValidType || bValidType) return aValidType && bValidType ? looseCompareArrays(a, b) : false;
    aValidType = isObject(a);
    bValidType = isObject(b);
    if (aValidType || bValidType) {
        if (!aValidType || !bValidType) return false;
        const aKeysCount = Object.keys(a).length;
        const bKeysCount = Object.keys(b).length;
        if (aKeysCount !== bKeysCount) return false;
        for(const key in a){
            const aHasKey = a.hasOwnProperty(key);
            const bHasKey = b.hasOwnProperty(key);
            if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) return false;
        }
    }
    return String(a) === String(b);
}
function looseIndexOf(arr, val) {
    return arr.findIndex((item)=>looseEqual(item, val));
}
const isRef = (val)=>{
    return !!(val && val["__v_isRef"] === true);
};
const toDisplayString = (val)=>{
    return isString(val) ? val : val == null ? "" : isArray(val) || isObject(val) && (val.toString === objectToString || !isFunction(val.toString)) ? isRef(val) ? toDisplayString(val.value) : JSON.stringify(val, replacer, 2) : String(val);
};
const replacer = (_key, val)=>{
    if (isRef(val)) return replacer(_key, val.value);
    else if (isMap(val)) return {
        [`Map(${val.size})`]: [
            ...val.entries()
        ].reduce((entries, [key, val2], i)=>{
            entries[stringifySymbol(key, i) + " =>"] = val2;
            return entries;
        }, {})
    };
    else if (isSet(val)) return {
        [`Set(${val.size})`]: [
            ...val.values()
        ].map((v)=>stringifySymbol(v))
    };
    else if (isSymbol(val)) return stringifySymbol(val);
    else if (isObject(val) && !isArray(val) && !isPlainObject(val)) return String(val);
    return val;
};
const stringifySymbol = (v, i = "")=>{
    var _a;
    return(// Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    isSymbol(v) ? `Symbol(${(_a = v.description) != null ? _a : i})` : v);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fVvIk"}],"fVvIk":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"lELYZ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheduler", ()=>scheduler);
parcelHelpers.export(exports, "queueJob", ()=>queueJob);
parcelHelpers.export(exports, "dequeueJob", ()=>dequeueJob);
parcelHelpers.export(exports, "flushJobs", ()=>flushJobs);
parcelHelpers.export(exports, "nextTick", ()=>nextTick);
parcelHelpers.export(exports, "releaseNextTicks", ()=>releaseNextTicks);
parcelHelpers.export(exports, "holdNextTicks", ()=>holdNextTicks);
let flushPending = false;
let flushing = false;
let queue = [];
let lastFlushedIndex = -1;
function scheduler(callback) {
    queueJob(callback);
}
function queueJob(job) {
    if (!queue.includes(job)) queue.push(job);
    queueFlush();
}
function dequeueJob(job) {
    let index = queue.indexOf(job);
    if (index !== -1 && index > lastFlushedIndex) queue.splice(index, 1);
}
function queueFlush() {
    if (!flushing && !flushPending) {
        flushPending = true;
        queueMicrotask(flushJobs);
    }
}
function flushJobs() {
    flushPending = false;
    flushing = true;
    for(let i = 0; i < queue.length; i++){
        queue[i]();
        lastFlushedIndex = i;
    }
    queue.length = 0;
    lastFlushedIndex = -1;
    flushing = false;
}
let tickStack = [];
let isHolding = false;
function nextTick(callback = ()=>{}) {
    queueMicrotask(()=>{
        isHolding || setTimeout(()=>{
            releaseNextTicks();
        });
    });
    return new Promise((res)=>{
        tickStack.push(()=>{
            callback();
            res();
        });
    });
}
function releaseNextTicks() {
    isHolding = false;
    while(tickStack.length)tickStack.shift()();
}
function holdNextTicks() {
    isHolding = true;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fVvIk"}],"cSFB8":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "modifier", ()=>modifier);
parcelHelpers.export(exports, "applyModifiers", ()=>applyModifiers);
const modifierHandlers = [];
function modifier(name, handler) {
    modifierHandlers.push({
        name,
        handler
    });
}
function applyModifiers(value, modifiers = []) {
    return modifiers.reduce((value, modifier)=>{
        if (modifierExists(modifier)) return applyModifier(modifier, value);
        else {
            console.error(`Unknown modifier '${modifier}'`);
            return value;
        }
    }, value);
}
function applyModifier(name, value) {
    return getModifier(name).handler(value);
}
function modifierExists(name) {
    return !!getModifier(name);
}
function getModifier(name) {
    return modifierHandlers.find((modifier)=>modifier.name === name);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fVvIk"}],"emuqh":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "directive", ()=>directive);
parcelHelpers.export(exports, "directiveExists", ()=>directiveExists);
parcelHelpers.export(exports, "directives", ()=>directives);
parcelHelpers.export(exports, "deferHandlingDirectives", ()=>deferHandlingDirectives);
parcelHelpers.export(exports, "getElementBoundUtilities", ()=>getElementBoundUtilities);
parcelHelpers.export(exports, "getDirectiveHandler", ()=>getDirectiveHandler);
var _dotProp = require("dot-prop");
var _mutation = require("./mutation");
var _reactivity = require("./reactivity");
var _modifiers = require("./modifiers");
let directiveHandlers = {};
let isDeferringHandlers = false;
let directiveHandlerStacks = new Map();
let currentHandlerStackKey = Symbol();
let attributePrefix = "data-bind-";
function directive(name, callback) {
    directiveHandlers[name] = callback;
}
function directiveExists(name) {
    return Object.keys(directiveHandlers).includes(name);
}
function directives(el, attributes) {
    const directives = Array.from(attributes).filter(isDirectiveAttribute).map(toParsedDirectives);
    return directives.flat().map((directive)=>getDirectiveHandler(el, directive));
}
function deferHandlingDirectives(callback) {
    isDeferringHandlers = true;
    let key = Symbol();
    currentHandlerStackKey = key;
    directiveHandlerStacks.set(key, []);
    let flushHandlers = ()=>{
        while(directiveHandlerStacks.get(key).length)directiveHandlerStacks.get(key).shift()();
        directiveHandlerStacks.delete(key);
    };
    let stopDeferring = ()=>{
        isDeferringHandlers = false;
        flushHandlers();
    };
    callback(flushHandlers);
    stopDeferring();
}
function getElementBoundUtilities(el) {
    let cleanups = [];
    let cleanup = (callback)=>cleanups.push(callback);
    let [effect, cleanupEffect] = (0, _reactivity.elementBoundEffect)(el);
    cleanups.push(cleanupEffect);
    let utilities = {
        effect,
        cleanup
    };
    let doCleanup = ()=>{
        cleanups.forEach((i)=>i());
    };
    return [
        utilities,
        doCleanup
    ];
}
function getDirectiveHandler(el, directive) {
    let handler = directiveHandlers[directive.type] || (()=>{});
    let [utilities, cleanup] = getElementBoundUtilities(el);
    (0, _mutation.onAttributeRemoved)(el, directive.attr, cleanup);
    let wrapperHandler = (application)=>{
        let controller = getClosestController(el, directive.identifier, application);
        if (controller) {
            handler = handler.bind(handler, el, directive, {
                ...utilities,
                evaluate: evaluator(controller, el),
                modify: (0, _modifiers.applyModifiers)
            });
            isDeferringHandlers ? directiveHandlerStacks.get(currentHandlerStackKey).push(handler) : handler();
        } else console.error(`Controller '${directive.indentifier}' not found`);
    };
    return wrapperHandler;
}
function evaluator(controller, el) {
    return (property)=>{
        let value = (0, _dotProp.getProperty)(controller, property);
        if (typeof value === "function") value = value(el);
        return value;
    };
}
function matchedAttributeRegex() {
    return new RegExp(`${attributePrefix}(${Object.keys(directiveHandlers).join("|")})$`);
}
function isDirectiveAttribute({ name }) {
    return matchedAttributeRegex().test(name);
}
function toParsedDirectives({ name, value }) {
    const type = name.match(matchedAttributeRegex())[1];
    const bindingExpressions = value.trim().split(" ").filter((e)=>e);
    return bindingExpressions.map((bindingExpression)=>{
        const subjectMatch = bindingExpression.match(/^([a-zA-Z0-9\-_]+)~/);
        const subject = subjectMatch ? subjectMatch[1] : null;
        let valueExpression = subject ? bindingExpression.replace(`${subject}~`, "") : bindingExpression;
        let modifiers = valueExpression.match(/\:[^:\]]+(?=[^\]]*$)/g) || [];
        modifiers = modifiers.map((i)=>i.replace(":", ""));
        if (valueExpression[0] === "!") {
            valueExpression = valueExpression.slice(1);
            modifiers.push("not");
        }
        valueExpression = valueExpression.split(":")[0];
        const identifierMatch = valueExpression.match(/^([a-zA-Z0-9\-_]+)#/);
        const identifier = identifierMatch ? identifierMatch[1] : null;
        const property = identifier ? valueExpression.replace(`${identifier}#`, "") : valueExpression;
        return {
            type,
            subject,
            modifiers,
            identifier,
            property,
            attr: name
        };
    });
}
function getClosestController(el, identifier, application) {
    const controllerElement = el.closest(`[data-controller~="${identifier}"]`);
    if (controllerElement) return application.getControllerForElementAndIdentifier(controllerElement, identifier);
}

},{"dot-prop":"kq6RH","./mutation":"hi7zN","./reactivity":"hIJen","./modifiers":"cSFB8","@parcel/transformer-js/src/esmodule-helpers.js":"fVvIk"}],"kq6RH":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getProperty", ()=>getProperty);
parcelHelpers.export(exports, "setProperty", ()=>setProperty);
parcelHelpers.export(exports, "deleteProperty", ()=>deleteProperty);
parcelHelpers.export(exports, "hasProperty", ()=>hasProperty);
// TODO: Backslashes with no effect should not be escaped
parcelHelpers.export(exports, "escapePath", ()=>escapePath);
parcelHelpers.export(exports, "deepKeys", ()=>deepKeys);
const isObject = (value)=>{
    const type = typeof value;
    return value !== null && (type === 'object' || type === 'function');
};
const isEmptyObject = (value)=>isObject(value) && Object.keys(value).length === 0;
const disallowedKeys = new Set([
    '__proto__',
    'prototype',
    'constructor'
]);
const digits = new Set('0123456789');
function getPathSegments(path) {
    const parts = [];
    let currentSegment = '';
    let currentPart = 'start';
    let isIgnoring = false;
    for (const character of path)switch(character){
        case '\\':
            if (currentPart === 'index') throw new Error('Invalid character in an index');
            if (currentPart === 'indexEnd') throw new Error('Invalid character after an index');
            if (isIgnoring) currentSegment += character;
            currentPart = 'property';
            isIgnoring = !isIgnoring;
            break;
        case '.':
            if (currentPart === 'index') throw new Error('Invalid character in an index');
            if (currentPart === 'indexEnd') {
                currentPart = 'property';
                break;
            }
            if (isIgnoring) {
                isIgnoring = false;
                currentSegment += character;
                break;
            }
            if (disallowedKeys.has(currentSegment)) return [];
            parts.push(currentSegment);
            currentSegment = '';
            currentPart = 'property';
            break;
        case '[':
            if (currentPart === 'index') throw new Error('Invalid character in an index');
            if (currentPart === 'indexEnd') {
                currentPart = 'index';
                break;
            }
            if (isIgnoring) {
                isIgnoring = false;
                currentSegment += character;
                break;
            }
            if (currentPart === 'property') {
                if (disallowedKeys.has(currentSegment)) return [];
                parts.push(currentSegment);
                currentSegment = '';
            }
            currentPart = 'index';
            break;
        case ']':
            if (currentPart === 'index') {
                parts.push(Number.parseInt(currentSegment, 10));
                currentSegment = '';
                currentPart = 'indexEnd';
                break;
            }
            if (currentPart === 'indexEnd') throw new Error('Invalid character after an index');
        default:
            if (currentPart === 'index' && !digits.has(character)) throw new Error('Invalid character in an index');
            if (currentPart === 'indexEnd') throw new Error('Invalid character after an index');
            if (currentPart === 'start') currentPart = 'property';
            if (isIgnoring) {
                isIgnoring = false;
                currentSegment += '\\';
            }
            currentSegment += character;
    }
    if (isIgnoring) currentSegment += '\\';
    switch(currentPart){
        case 'property':
            if (disallowedKeys.has(currentSegment)) return [];
            parts.push(currentSegment);
            break;
        case 'index':
            throw new Error('Index was not closed');
        case 'start':
            parts.push('');
            break;
    }
    return parts;
}
function isStringIndex(object, key) {
    if (typeof key !== 'number' && Array.isArray(object)) {
        const index = Number.parseInt(key, 10);
        return Number.isInteger(index) && object[index] === object[key];
    }
    return false;
}
function assertNotStringIndex(object, key) {
    if (isStringIndex(object, key)) throw new Error('Cannot use string index');
}
function getProperty(object, path, value) {
    if (!isObject(object) || typeof path !== 'string') return value === undefined ? object : value;
    const pathArray = getPathSegments(path);
    if (pathArray.length === 0) return value;
    for(let index = 0; index < pathArray.length; index++){
        const key = pathArray[index];
        if (isStringIndex(object, key)) object = index === pathArray.length - 1 ? undefined : null;
        else object = object[key];
        if (object === undefined || object === null) {
            // `object` is either `undefined` or `null` so we want to stop the loop, and
            // if this is not the last bit of the path, and
            // if it didn't return `undefined`
            // it would return `null` if `object` is `null`
            // but we want `get({foo: null}, 'foo.bar')` to equal `undefined`, or the supplied value, not `null`
            if (index !== pathArray.length - 1) return value;
            break;
        }
    }
    return object === undefined ? value : object;
}
function setProperty(object, path, value) {
    if (!isObject(object) || typeof path !== 'string') return object;
    const root = object;
    const pathArray = getPathSegments(path);
    for(let index = 0; index < pathArray.length; index++){
        const key = pathArray[index];
        assertNotStringIndex(object, key);
        if (index === pathArray.length - 1) object[key] = value;
        else if (!isObject(object[key])) object[key] = typeof pathArray[index + 1] === 'number' ? [] : {};
        object = object[key];
    }
    return root;
}
function deleteProperty(object, path) {
    if (!isObject(object) || typeof path !== 'string') return false;
    const pathArray = getPathSegments(path);
    for(let index = 0; index < pathArray.length; index++){
        const key = pathArray[index];
        assertNotStringIndex(object, key);
        if (index === pathArray.length - 1) {
            delete object[key];
            return true;
        }
        object = object[key];
        if (!isObject(object)) return false;
    }
}
function hasProperty(object, path) {
    if (!isObject(object) || typeof path !== 'string') return false;
    const pathArray = getPathSegments(path);
    if (pathArray.length === 0) return false;
    for (const key of pathArray){
        if (!isObject(object) || !(key in object) || isStringIndex(object, key)) return false;
        object = object[key];
    }
    return true;
}
function escapePath(path) {
    if (typeof path !== 'string') throw new TypeError('Expected a string');
    return path.replaceAll(/[\\.[]/g, '\\$&');
}
// The keys returned by Object.entries() for arrays are strings
function entries(value) {
    const result = Object.entries(value);
    if (Array.isArray(value)) return result.map(([key, value])=>[
            Number(key),
            value
        ]);
    return result;
}
function stringifyPath(pathSegments) {
    let result = '';
    for (let [index, segment] of entries(pathSegments))if (typeof segment === 'number') result += `[${segment}]`;
    else {
        segment = escapePath(segment);
        result += index === 0 ? segment : `.${segment}`;
    }
    return result;
}
function* deepKeysIterator(object, currentPath = []) {
    if (!isObject(object) || isEmptyObject(object)) {
        if (currentPath.length > 0) yield stringifyPath(currentPath);
        return;
    }
    for (const [key, value] of entries(object))yield* deepKeysIterator(value, [
        ...currentPath,
        key
    ]);
}
function deepKeys(object) {
    return [
        ...deepKeysIterator(object)
    ];
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fVvIk"}],"hi7zN":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "onElAdded", ()=>onElAdded);
parcelHelpers.export(exports, "onElRemoved", ()=>onElRemoved);
parcelHelpers.export(exports, "onAttributesAdded", ()=>onAttributesAdded);
parcelHelpers.export(exports, "onAttributeRemoved", ()=>onAttributeRemoved);
parcelHelpers.export(exports, "onValueAttributeChanged", ()=>onValueAttributeChanged);
parcelHelpers.export(exports, "cleanupAttributes", ()=>cleanupAttributes);
parcelHelpers.export(exports, "cleanupElement", ()=>cleanupElement);
parcelHelpers.export(exports, "startObservingMutations", ()=>startObservingMutations);
parcelHelpers.export(exports, "stopObservingMutations", ()=>stopObservingMutations);
parcelHelpers.export(exports, "flushObserver", ()=>flushObserver);
parcelHelpers.export(exports, "mutateDom", ()=>mutateDom);
parcelHelpers.export(exports, "deferMutations", ()=>deferMutations);
parcelHelpers.export(exports, "flushAndStopDeferringMutations", ()=>flushAndStopDeferringMutations);
var _scheduler = require("./scheduler");
let onAttributeAddeds = [];
let onElRemoveds = [];
let onElAddeds = [];
let onValueAttributeChangeds = [];
let currentlyObserving = false;
let isCollecting = false;
let deferredMutations = [];
let observer = new MutationObserver(onMutate);
function onElAdded(callback) {
    onElAddeds.push(callback);
}
function onElRemoved(el, callback) {
    if (typeof callback === "function") {
        if (!el.__stimulusX_cleanups) el.__stimulusX_cleanups = [];
        el.__stimulusX_cleanups.push(callback);
    } else {
        callback = el;
        onElRemoveds.push(callback);
    }
}
function onAttributesAdded(callback) {
    onAttributeAddeds.push(callback);
}
function onAttributeRemoved(el, name, callback) {
    if (!el.__stimulusX_attributeCleanups) el.__stimulusX_attributeCleanups = {};
    if (!el.__stimulusX_attributeCleanups[name]) el.__stimulusX_attributeCleanups[name] = [];
    el.__stimulusX_attributeCleanups[name].push(callback);
}
function onValueAttributeChanged(callback) {
    onValueAttributeChangeds.push(callback);
}
function cleanupAttributes(el, names) {
    if (!el.__stimulusX_attributeCleanups) return;
    Object.entries(el.__stimulusX_attributeCleanups).forEach(([name, value])=>{
        if (names === undefined || names.includes(name)) {
            value.forEach((i)=>i());
            delete el.__stimulusX_attributeCleanups[name];
        }
    });
}
function cleanupElement(el) {
    el._x_effects?.forEach((0, _scheduler.dequeueJob));
    while(el.__stimulusX_cleanups?.length)el.__stimulusX_cleanups.pop()();
}
function startObservingMutations() {
    observer.observe(document, {
        subtree: true,
        childList: true,
        attributes: true,
        attributeOldValue: true
    });
    currentlyObserving = true;
}
function stopObservingMutations() {
    flushObserver();
    observer.disconnect();
    currentlyObserving = false;
}
let queuedMutations = [];
function flushObserver() {
    let records = observer.takeRecords();
    queuedMutations.push(()=>records.length > 0 && onMutate(records));
    let queueLengthWhenTriggered = queuedMutations.length;
    queueMicrotask(()=>{
        // If these two lengths match, then we KNOW that this is the LAST
        // flush in the current event loop. This way, we can process
        // all mutations in one batch at the end of everything...
        if (queuedMutations.length === queueLengthWhenTriggered) // Now Alpine can process all the mutations...
        while(queuedMutations.length > 0)queuedMutations.shift()();
    });
}
function mutateDom(callback) {
    if (!currentlyObserving) return callback();
    stopObservingMutations();
    let result = callback();
    startObservingMutations();
    return result;
}
function deferMutations() {
    isCollecting = true;
}
function flushAndStopDeferringMutations() {
    isCollecting = false;
    onMutate(deferredMutations);
    deferredMutations = [];
}
function onMutate(mutations) {
    if (isCollecting) {
        deferredMutations = deferredMutations.concat(mutations);
        return;
    }
    let addedNodes = [];
    let removedNodes = new Set();
    let addedAttributes = new Map();
    let removedAttributes = new Map();
    for(let i = 0; i < mutations.length; i++){
        if (mutations[i].target.__stimulusX_ignoreMutationObserver) continue;
        if (mutations[i].type === "childList") {
            mutations[i].removedNodes.forEach((node)=>{
                if (node.nodeType !== 1) return;
                // No need to process removed nodes that haven't been initialized by Alpine...
                if (!node.__stimulusX_marker) return;
                removedNodes.add(node);
            });
            mutations[i].addedNodes.forEach((node)=>{
                if (node.nodeType !== 1) return;
                // If the node is a removal as well, that means it's a "move" operation and we'll leave it alone...
                if (removedNodes.has(node)) {
                    removedNodes.delete(node);
                    return;
                }
                // If the node has already been initialized, we'll leave it alone...
                if (node.__stimulusX_marker) return;
                addedNodes.push(node);
            });
        }
        if (mutations[i].type === "attributes") {
            let el = mutations[i].target;
            let name = mutations[i].attributeName;
            let oldValue = mutations[i].oldValue;
            let add = ()=>{
                if (!addedAttributes.has(el)) addedAttributes.set(el, []);
                addedAttributes.get(el).push({
                    name,
                    value: el.getAttribute(name)
                });
            };
            let remove = ()=>{
                if (!removedAttributes.has(el)) removedAttributes.set(el, []);
                removedAttributes.get(el).push(name);
            };
            // let valueAttributeChanged = () => {
            // };
            // New attribute.
            if (el.hasAttribute(name) && oldValue === null) add();
            else if (el.hasAttribute(name)) {
                remove();
                add();
            // Removed attribute.
            } else remove();
        }
    }
    removedAttributes.forEach((attrs, el)=>{
        cleanupAttributes(el, attrs);
    });
    addedAttributes.forEach((attrs, el)=>{
        onAttributeAddeds.forEach((i)=>i(el, attrs));
    });
    // There are two special scenarios we need to account for when using the mutation
    // observer to init and destroy elements. First, when a node is "moved" on the page,
    // it's registered as both an "add" and a "remove", so we want to skip those.
    // (This is handled above by the .__stimulusX_marker conditionals...)
    // Second, when a node is "wrapped", it gets registered as a "removal" and the wrapper
    // as an "addition". We don't want to remove, then re-initialize the node, so we look
    // and see if it's inside any added nodes (wrappers) and skip it.
    // (This is handled below by the .contains conditional...)
    for (let node of removedNodes){
        if (addedNodes.some((i)=>i.contains(node))) continue;
        onElRemoveds.forEach((i)=>i(node));
    }
    for (let node of addedNodes){
        if (!node.isConnected) continue;
        onElAddeds.forEach((i)=>i(node));
    }
    addedNodes = null;
    removedNodes = null;
    addedAttributes = null;
    removedAttributes = null;
}

},{"./scheduler":"lELYZ","@parcel/transformer-js/src/esmodule-helpers.js":"fVvIk"}],"9hZd4":[function(require,module,exports,__globalThis) {
var _modifiers = require("../modifiers");
(0, _modifiers.modifier)("downcase", (value)=>value.toString().toLowerCase());

},{"../modifiers":"cSFB8"}],"lCbmP":[function(require,module,exports,__globalThis) {
var _modifiers = require("../modifiers");
(0, _modifiers.modifier)("not", (value)=>!value);

},{"../modifiers":"cSFB8"}],"7mzKL":[function(require,module,exports,__globalThis) {
var _modifiers = require("../modifiers");
(0, _modifiers.modifier)("upcase", (value)=>value.toString().toUpperCase());

},{"../modifiers":"cSFB8"}],"9rQtf":[function(require,module,exports,__globalThis) {
var _directives = require("../directives");
var _mutation = require("../mutation");
var _bind = require("../bind");
(0, _directives.directive)("attr", (el, { property, subject, modifiers }, { effect, evaluate, modify })=>{
    effect(()=>{
        (0, _mutation.mutateDom)(()=>{
            const value = modify(evaluate(property), modifiers);
            (0, _bind.bind)(el, subject, value);
        });
    });
});

},{"../directives":"emuqh","../mutation":"hi7zN","../bind":"ifxMK"}],"ifxMK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bind", ()=>bind);
function bind(element, name, value) {
    switch(name){
        // case "class":
        //   bindClasses(element, value);
        //   break;
        case "checked":
        case "selected":
            bindAttributeAndProperty(element, name, value);
            break;
        default:
            bindAttribute(element, name, value);
            break;
    }
}
// function bindClasses(element, value) {
//   if (element.__value_bindings_undo_classes) element.__value_bindings_undo_classes();
//   element.__value_bindings_undo_classes = setClasses(element, value);
// }
function bindAttribute(el, name, value) {
    if ([
        null,
        undefined,
        false
    ].includes(value) && attributeShouldntBePreservedIfFalsy(name)) el.removeAttribute(name);
    else {
        if (isBooleanAttr(name)) value = name;
        setIfChanged(el, name, value);
    }
}
// function bindAll(element, obj) {
//   Object.keys(obj).forEach((name) => bind(element, name, getProperty(obj, name)));
// }
function bindAttributeAndProperty(el, name, value) {
    bindAttribute(el, name, value);
    setPropertyIfChanged(el, name, value);
}
function setIfChanged(el, attrName, value) {
    if (el.getAttribute(attrName) != value) el.setAttribute(attrName, value);
}
function setPropertyIfChanged(el, propName, value) {
    if (el[propName] !== value) el[propName] = value;
}
// As per HTML spec table https://html.spec.whatwg.org/multipage/indices.html#attributes-3:boolean-attribute
const booleanAttributes = new Set([
    "allowfullscreen",
    "async",
    "autofocus",
    "autoplay",
    "checked",
    "controls",
    "default",
    "defer",
    "disabled",
    "formnovalidate",
    "inert",
    "ismap",
    "itemscope",
    "loop",
    "multiple",
    "muted",
    "nomodule",
    "novalidate",
    "open",
    "playsinline",
    "readonly",
    "required",
    "reversed",
    "selected"
]);
function isBooleanAttr(attrName) {
    return booleanAttributes.has(attrName);
}
function attributeShouldntBePreservedIfFalsy(name) {
    return ![
        "aria-pressed",
        "aria-checked",
        "aria-expanded",
        "aria-selected"
    ].includes(name);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fVvIk"}],"2Vt7u":[function(require,module,exports,__globalThis) {
var _directives = require("../directives");
var _mutation = require("../mutation");
(0, _directives.directive)("text", (el, { property, modifiers }, { effect, evaluate, modify })=>{
    effect(()=>(0, _mutation.mutateDom)(()=>{
            const value = modify(evaluate(property), modifiers);
            el.textContent = value;
        }));
});

},{"../directives":"emuqh","../mutation":"hi7zN"}]},["j8mvb","fvuY1"], "fvuY1", "parcelRequiree522", {})

//# sourceMappingURL=cdn.js.map
