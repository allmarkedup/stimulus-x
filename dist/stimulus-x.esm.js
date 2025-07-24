
      var $parcel$global = globalThis;
    const $76daf8d022148001$var$modifierHandlers = [];
function $76daf8d022148001$export$cd4b50bb4e5c05a3(name, handler) {
    $76daf8d022148001$var$modifierHandlers.push({
        name: name,
        handler: handler
    });
}
function $76daf8d022148001$export$f1696300e8775372(value, modifiers = []) {
    return modifiers.reduce((value, modifier)=>{
        if ($76daf8d022148001$var$modifierExists(modifier)) return $76daf8d022148001$var$applyModifier(modifier, value);
        else {
            console.error(`Unknown modifier '${modifier}'`);
            return value;
        }
    }, value);
}
function $76daf8d022148001$var$applyModifier(name, value) {
    return $76daf8d022148001$var$getModifier(name).handler(value);
}
function $76daf8d022148001$var$modifierExists(name) {
    return !!$76daf8d022148001$var$getModifier(name);
}
function $76daf8d022148001$var$getModifier(name) {
    return $76daf8d022148001$var$modifierHandlers.find((modifier)=>modifier.name === name);
}


let $8d51fac66e0b4c1b$var$flushPending = false;
let $8d51fac66e0b4c1b$var$flushing = false;
let $8d51fac66e0b4c1b$var$queue = [];
let $8d51fac66e0b4c1b$var$lastFlushedIndex = -1;
let $8d51fac66e0b4c1b$var$tickStack = [];
let $8d51fac66e0b4c1b$var$isHolding = false;
function $8d51fac66e0b4c1b$export$d30788f2c20241cd(callback) {
    $8d51fac66e0b4c1b$export$fba1a0a20887772f(callback);
}
function $8d51fac66e0b4c1b$export$fba1a0a20887772f(job) {
    if (!$8d51fac66e0b4c1b$var$queue.includes(job)) $8d51fac66e0b4c1b$var$queue.push(job);
    $8d51fac66e0b4c1b$var$queueFlush();
}
function $8d51fac66e0b4c1b$export$edbe2d8b64bcb07c(job) {
    let index = $8d51fac66e0b4c1b$var$queue.indexOf(job);
    if (index !== -1 && index > $8d51fac66e0b4c1b$var$lastFlushedIndex) $8d51fac66e0b4c1b$var$queue.splice(index, 1);
}
function $8d51fac66e0b4c1b$var$queueFlush() {
    if (!$8d51fac66e0b4c1b$var$flushing && !$8d51fac66e0b4c1b$var$flushPending) {
        $8d51fac66e0b4c1b$var$flushPending = true;
        queueMicrotask($8d51fac66e0b4c1b$export$8ca066e62735a16c);
    }
}
function $8d51fac66e0b4c1b$export$8ca066e62735a16c() {
    $8d51fac66e0b4c1b$var$flushPending = false;
    $8d51fac66e0b4c1b$var$flushing = true;
    for(let i = 0; i < $8d51fac66e0b4c1b$var$queue.length; i++){
        $8d51fac66e0b4c1b$var$queue[i]();
        $8d51fac66e0b4c1b$var$lastFlushedIndex = i;
    }
    $8d51fac66e0b4c1b$var$queue.length = 0;
    $8d51fac66e0b4c1b$var$lastFlushedIndex = -1;
    $8d51fac66e0b4c1b$var$flushing = false;
}
function $8d51fac66e0b4c1b$export$bdd553fddd433dcb(callback = ()=>{}) {
    queueMicrotask(()=>{
        $8d51fac66e0b4c1b$var$isHolding || setTimeout(()=>{
            $8d51fac66e0b4c1b$export$d80ec80fb4bee1e6();
        });
    });
    return new Promise((res)=>{
        $8d51fac66e0b4c1b$var$tickStack.push(()=>{
            callback();
            res();
        });
    });
}
function $8d51fac66e0b4c1b$export$d80ec80fb4bee1e6() {
    $8d51fac66e0b4c1b$var$isHolding = false;
    while($8d51fac66e0b4c1b$var$tickStack.length)$8d51fac66e0b4c1b$var$tickStack.shift()();
}
function $8d51fac66e0b4c1b$export$e9a53d8785d6cfc9() {
    $8d51fac66e0b4c1b$var$isHolding = true;
}


let $46a1f2608b4b91f0$var$onAttributeAddeds = [];
let $46a1f2608b4b91f0$var$onElRemoveds = [];
let $46a1f2608b4b91f0$var$onElAddeds = [];
let $46a1f2608b4b91f0$var$onValueAttributeChangeds = [];
let $46a1f2608b4b91f0$var$currentlyObserving = false;
let $46a1f2608b4b91f0$var$isCollecting = false;
let $46a1f2608b4b91f0$var$deferredMutations = [];
let $46a1f2608b4b91f0$var$observer = new MutationObserver($46a1f2608b4b91f0$var$onMutate);
function $46a1f2608b4b91f0$export$c395e4fde41c37ff(callback) {
    $46a1f2608b4b91f0$var$onElAddeds.push(callback);
}
function $46a1f2608b4b91f0$export$bb8862ef847f5ec0(el, callback) {
    if (typeof callback === "function") {
        if (!el.__stimulusX_cleanups) el.__stimulusX_cleanups = [];
        el.__stimulusX_cleanups.push(callback);
    } else {
        callback = el;
        $46a1f2608b4b91f0$var$onElRemoveds.push(callback);
    }
}
function $46a1f2608b4b91f0$export$545f7104b1510552(callback) {
    $46a1f2608b4b91f0$var$onAttributeAddeds.push(callback);
}
function $46a1f2608b4b91f0$export$5d89a587b01747c6(el, name, callback) {
    if (!el.__stimulusX_attributeCleanups) el.__stimulusX_attributeCleanups = {};
    if (!el.__stimulusX_attributeCleanups[name]) el.__stimulusX_attributeCleanups[name] = [];
    el.__stimulusX_attributeCleanups[name].push(callback);
}
function $46a1f2608b4b91f0$export$309d6f15c1c4d36e(callback) {
    $46a1f2608b4b91f0$var$onValueAttributeChangeds.push(callback);
}
function $46a1f2608b4b91f0$export$2c8bfe603cc113da(el, names) {
    if (!el.__stimulusX_attributeCleanups) return;
    Object.entries(el.__stimulusX_attributeCleanups).forEach(([name, value])=>{
        if (names === undefined || names.includes(name)) {
            value.forEach((i)=>i());
            delete el.__stimulusX_attributeCleanups[name];
        }
    });
}
function $46a1f2608b4b91f0$export$21fc366069a4f56f(el) {
    el.__stimulusX_cleanups?.forEach((0, $8d51fac66e0b4c1b$export$edbe2d8b64bcb07c));
    while(el.__stimulusX_cleanups?.length)el.__stimulusX_cleanups.pop()();
}
function $46a1f2608b4b91f0$export$1a5ae5db40475a2d() {
    $46a1f2608b4b91f0$var$observer.observe(document, {
        subtree: true,
        childList: true,
        attributes: true,
        attributeOldValue: true
    });
    $46a1f2608b4b91f0$var$currentlyObserving = true;
}
function $46a1f2608b4b91f0$export$d4f6b05796af6998() {
    $46a1f2608b4b91f0$export$2f1f1886cd00d96e();
    $46a1f2608b4b91f0$var$observer.disconnect();
    $46a1f2608b4b91f0$var$currentlyObserving = false;
}
let $46a1f2608b4b91f0$var$queuedMutations = [];
function $46a1f2608b4b91f0$export$2f1f1886cd00d96e() {
    let records = $46a1f2608b4b91f0$var$observer.takeRecords();
    $46a1f2608b4b91f0$var$queuedMutations.push(()=>records.length > 0 && $46a1f2608b4b91f0$var$onMutate(records));
    let queueLengthWhenTriggered = $46a1f2608b4b91f0$var$queuedMutations.length;
    queueMicrotask(()=>{
        // If these two lengths match, then we KNOW that this is the LAST
        // flush in the current event loop. This way, we can process
        // all mutations in one batch at the end of everything...
        if ($46a1f2608b4b91f0$var$queuedMutations.length === queueLengthWhenTriggered) // Now Alpine can process all the mutations...
        while($46a1f2608b4b91f0$var$queuedMutations.length > 0)$46a1f2608b4b91f0$var$queuedMutations.shift()();
    });
}
function $46a1f2608b4b91f0$export$c98382a3d82f9519(callback) {
    if (!$46a1f2608b4b91f0$var$currentlyObserving) return callback();
    $46a1f2608b4b91f0$export$d4f6b05796af6998();
    let result = callback();
    $46a1f2608b4b91f0$export$1a5ae5db40475a2d();
    return result;
}
function $46a1f2608b4b91f0$export$9a7d8d7577dd8469() {
    $46a1f2608b4b91f0$var$isCollecting = true;
}
function $46a1f2608b4b91f0$export$47d46026c1b12c48() {
    $46a1f2608b4b91f0$var$isCollecting = false;
    $46a1f2608b4b91f0$var$onMutate($46a1f2608b4b91f0$var$deferredMutations);
    $46a1f2608b4b91f0$var$deferredMutations = [];
}
function $46a1f2608b4b91f0$var$onMutate(mutations) {
    if ($46a1f2608b4b91f0$var$isCollecting) {
        $46a1f2608b4b91f0$var$deferredMutations = $46a1f2608b4b91f0$var$deferredMutations.concat(mutations);
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
                    name: name,
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
        $46a1f2608b4b91f0$export$2c8bfe603cc113da(el, attrs);
    });
    addedAttributes.forEach((attrs, el)=>{
        $46a1f2608b4b91f0$var$onAttributeAddeds.forEach((i)=>i(el, attrs));
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
        $46a1f2608b4b91f0$var$onElRemoveds.forEach((i)=>i(node));
    }
    for (let node of addedNodes){
        if (!node.isConnected) continue;
        $46a1f2608b4b91f0$var$onElAddeds.forEach((i)=>i(node));
    }
    addedNodes = null;
    removedNodes = null;
    addedAttributes = null;
    removedAttributes = null;
}


/**
* @vue/reactivity v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/ /**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/ /*! #__NO_SIDE_EFFECTS__ */ // @__NO_SIDE_EFFECTS__
function $aba20d5db397affd$export$b41394a5437791c8(str) {
    const map = /* @__PURE__ */ Object.create(null);
    for (const key of str.split(","))map[key] = 1;
    return (val)=>val in map;
}
const $aba20d5db397affd$export$cf583d23ab39677c = !!(process.env.NODE_ENV !== "production") ? Object.freeze({}) : {};
const $aba20d5db397affd$export$6bd8558f433f1cc1 = !!(process.env.NODE_ENV !== "production") ? Object.freeze([]) : [];
const $aba20d5db397affd$export$5702a91a6f42969f = ()=>{};
const $aba20d5db397affd$export$c01351c0af048e39 = ()=>false;
const $aba20d5db397affd$export$1a2d97de39ecbb75 = (key)=>key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && // uppercase letter
    (key.charCodeAt(2) > 122 || key.charCodeAt(2) < 97);
const $aba20d5db397affd$export$793aa5469768d691 = (key)=>key.startsWith("onUpdate:");
const $aba20d5db397affd$export$8b58be045bf06082 = Object.assign;
const $aba20d5db397affd$export$cd7f480d6b8286c3 = (arr, el)=>{
    const i = arr.indexOf(el);
    if (i > -1) arr.splice(i, 1);
};
const $aba20d5db397affd$var$hasOwnProperty = Object.prototype.hasOwnProperty;
const $aba20d5db397affd$export$b5a638e9b3fff9f3 = (val, key)=>$aba20d5db397affd$var$hasOwnProperty.call(val, key);
const $aba20d5db397affd$export$43bee75e5e14138e = Array.isArray;
const $aba20d5db397affd$export$5c90113a285f2241 = (val)=>$aba20d5db397affd$export$1dccc787cc36538b(val) === "[object Map]";
const $aba20d5db397affd$export$6750766a7c7ec627 = (val)=>$aba20d5db397affd$export$1dccc787cc36538b(val) === "[object Set]";
const $aba20d5db397affd$export$871608497c498473 = (val)=>$aba20d5db397affd$export$1dccc787cc36538b(val) === "[object Date]";
const $aba20d5db397affd$export$49841c62b9eff15 = (val)=>$aba20d5db397affd$export$1dccc787cc36538b(val) === "[object RegExp]";
const $aba20d5db397affd$export$f6e2535fb5126e54 = (val)=>typeof val === "function";
const $aba20d5db397affd$export$844ec244b1367d54 = (val)=>typeof val === "string";
const $aba20d5db397affd$export$a244864fd9645c7f = (val)=>typeof val === "symbol";
const $aba20d5db397affd$export$a6cdc56e425d0d0a = (val)=>val !== null && typeof val === "object";
const $aba20d5db397affd$export$4369c812aac99591 = (val)=>{
    return ($aba20d5db397affd$export$a6cdc56e425d0d0a(val) || $aba20d5db397affd$export$f6e2535fb5126e54(val)) && $aba20d5db397affd$export$f6e2535fb5126e54(val.then) && $aba20d5db397affd$export$f6e2535fb5126e54(val.catch);
};
const $aba20d5db397affd$export$830c053460e5ddf6 = Object.prototype.toString;
const $aba20d5db397affd$export$1dccc787cc36538b = (value)=>$aba20d5db397affd$export$830c053460e5ddf6.call(value);
const $aba20d5db397affd$export$5ad0a3c360b8fbb5 = (value)=>{
    return $aba20d5db397affd$export$1dccc787cc36538b(value).slice(8, -1);
};
const $aba20d5db397affd$export$53b83ca8eaab0383 = (val)=>$aba20d5db397affd$export$1dccc787cc36538b(val) === "[object Object]";
const $aba20d5db397affd$export$e2a2b93446ec9fe = (key)=>$aba20d5db397affd$export$844ec244b1367d54(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
const $aba20d5db397affd$export$bf7d3c0236f0aa85 = /* @__PURE__ */ $aba20d5db397affd$export$b41394a5437791c8(// the leading comma is intentional so empty string "" is also included
",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
const $aba20d5db397affd$export$a9c1fdb3030c2a6b = /* @__PURE__ */ $aba20d5db397affd$export$b41394a5437791c8("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo");
const $aba20d5db397affd$var$cacheStringFunction = (fn)=>{
    const cache = /* @__PURE__ */ Object.create(null);
    return (str)=>{
        const hit = cache[str];
        return hit || (cache[str] = fn(str));
    };
};
const $aba20d5db397affd$var$camelizeRE = /-(\w)/g;
const $aba20d5db397affd$export$161d051f5dd25de7 = $aba20d5db397affd$var$cacheStringFunction((str)=>{
    return str.replace($aba20d5db397affd$var$camelizeRE, (_, c)=>c ? c.toUpperCase() : "");
});
const $aba20d5db397affd$var$hyphenateRE = /\B([A-Z])/g;
const $aba20d5db397affd$export$6e6a0a3676c4b8bb = $aba20d5db397affd$var$cacheStringFunction((str)=>str.replace($aba20d5db397affd$var$hyphenateRE, "-$1").toLowerCase());
const $aba20d5db397affd$export$9a00dee1beb8f576 = $aba20d5db397affd$var$cacheStringFunction((str)=>{
    return str.charAt(0).toUpperCase() + str.slice(1);
});
const $aba20d5db397affd$export$8c022799eeaaefcd = $aba20d5db397affd$var$cacheStringFunction((str)=>{
    const s = str ? `on${$aba20d5db397affd$export$9a00dee1beb8f576(str)}` : ``;
    return s;
});
const $aba20d5db397affd$export$f619eb8b89076d23 = (value, oldValue)=>!Object.is(value, oldValue);
const $aba20d5db397affd$export$39951422d618a9d3 = (fns, ...arg)=>{
    for(let i = 0; i < fns.length; i++)fns[i](...arg);
};
const $aba20d5db397affd$export$8afb76124cf08683 = (obj, key, value, writable = false)=>{
    Object.defineProperty(obj, key, {
        configurable: true,
        enumerable: false,
        writable: writable,
        value: value
    });
};
const $aba20d5db397affd$export$d3be7195bcc2f31b = (val)=>{
    const n = parseFloat(val);
    return isNaN(n) ? val : n;
};
const $aba20d5db397affd$export$a0a81dc3380ce7d3 = (val)=>{
    const n = $aba20d5db397affd$export$844ec244b1367d54(val) ? Number(val) : NaN;
    return isNaN(n) ? val : n;
};
let $aba20d5db397affd$var$_globalThis;
const $aba20d5db397affd$export$ff5f2eeb11fc7e14 = ()=>{
    return $aba20d5db397affd$var$_globalThis || ($aba20d5db397affd$var$_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof $parcel$global !== "undefined" ? $parcel$global : {});
};
const $aba20d5db397affd$var$identRE = /^[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*$/;
function $aba20d5db397affd$export$53d5e12f9a1d3cde(name) {
    return $aba20d5db397affd$var$identRE.test(name) ? `__props.${name}` : `__props[${JSON.stringify(name)}]`;
}
function $aba20d5db397affd$export$abc5374c10a73a04(source, options) {
    return source + JSON.stringify(options, (_, val)=>typeof val === "function" ? val.toString() : val);
}
const $aba20d5db397affd$export$4bcc674e2ac54ab0 = {
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
const $aba20d5db397affd$export$def7dc2c2e95a08a = {
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
const $aba20d5db397affd$export$ff27c1ebf2311072 = {
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
const $aba20d5db397affd$export$b1e6fe37bcdef5be = {
    "STABLE": 1,
    "1": "STABLE",
    "DYNAMIC": 2,
    "2": "DYNAMIC",
    "FORWARDED": 3,
    "3": "FORWARDED"
};
const $aba20d5db397affd$export$624972196ed3745f = {
    [1]: "STABLE",
    [2]: "DYNAMIC",
    [3]: "FORWARDED"
};
const $aba20d5db397affd$var$GLOBALS_ALLOWED = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol";
const $aba20d5db397affd$export$f73b8c13b7f97ebf = /* @__PURE__ */ $aba20d5db397affd$export$b41394a5437791c8($aba20d5db397affd$var$GLOBALS_ALLOWED);
const $aba20d5db397affd$export$d6571a1911e4f27e = $aba20d5db397affd$export$f73b8c13b7f97ebf;
const $aba20d5db397affd$var$range = 2;
function $aba20d5db397affd$export$f9c0d8b6684a279b(source, start = 0, end = source.length) {
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
            for(let j = i - $aba20d5db397affd$var$range; j <= i + $aba20d5db397affd$var$range || end > count; j++){
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
function $aba20d5db397affd$export$8756898546458274(value) {
    if ($aba20d5db397affd$export$43bee75e5e14138e(value)) {
        const res = {};
        for(let i = 0; i < value.length; i++){
            const item = value[i];
            const normalized = $aba20d5db397affd$export$844ec244b1367d54(item) ? $aba20d5db397affd$export$76a205ce979d066a(item) : $aba20d5db397affd$export$8756898546458274(item);
            if (normalized) for(const key in normalized)res[key] = normalized[key];
        }
        return res;
    } else if ($aba20d5db397affd$export$844ec244b1367d54(value) || $aba20d5db397affd$export$a6cdc56e425d0d0a(value)) return value;
}
const $aba20d5db397affd$var$listDelimiterRE = /;(?![^(]*\))/g;
const $aba20d5db397affd$var$propertyDelimiterRE = /:([^]+)/;
const $aba20d5db397affd$var$styleCommentRE = /\/\*[^]*?\*\//g;
function $aba20d5db397affd$export$76a205ce979d066a(cssText) {
    const ret = {};
    cssText.replace($aba20d5db397affd$var$styleCommentRE, "").split($aba20d5db397affd$var$listDelimiterRE).forEach((item)=>{
        if (item) {
            const tmp = item.split($aba20d5db397affd$var$propertyDelimiterRE);
            tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
        }
    });
    return ret;
}
function $aba20d5db397affd$export$9466a5a0ee6f1479(styles) {
    if (!styles) return "";
    if ($aba20d5db397affd$export$844ec244b1367d54(styles)) return styles;
    let ret = "";
    for(const key in styles){
        const value = styles[key];
        if ($aba20d5db397affd$export$844ec244b1367d54(value) || typeof value === "number") {
            const normalizedKey = key.startsWith(`--`) ? key : $aba20d5db397affd$export$6e6a0a3676c4b8bb(key);
            ret += `${normalizedKey}:${value};`;
        }
    }
    return ret;
}
function $aba20d5db397affd$export$4f7022d2d68e2c5a(value) {
    let res = "";
    if ($aba20d5db397affd$export$844ec244b1367d54(value)) res = value;
    else if ($aba20d5db397affd$export$43bee75e5e14138e(value)) for(let i = 0; i < value.length; i++){
        const normalized = $aba20d5db397affd$export$4f7022d2d68e2c5a(value[i]);
        if (normalized) res += normalized + " ";
    }
    else if ($aba20d5db397affd$export$a6cdc56e425d0d0a(value)) {
        for(const name in value)if (value[name]) res += name + " ";
    }
    return res.trim();
}
function $aba20d5db397affd$export$601abcd8103db5e4(props) {
    if (!props) return null;
    let { class: klass, style: style } = props;
    if (klass && !$aba20d5db397affd$export$844ec244b1367d54(klass)) props.class = $aba20d5db397affd$export$4f7022d2d68e2c5a(klass);
    if (style) props.style = $aba20d5db397affd$export$8756898546458274(style);
    return props;
}
const $aba20d5db397affd$var$HTML_TAGS = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
const $aba20d5db397affd$var$SVG_TAGS = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
const $aba20d5db397affd$var$MATH_TAGS = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics";
const $aba20d5db397affd$var$VOID_TAGS = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr";
const $aba20d5db397affd$export$1ccf854a0984f890 = /* @__PURE__ */ $aba20d5db397affd$export$b41394a5437791c8($aba20d5db397affd$var$HTML_TAGS);
const $aba20d5db397affd$export$6328ce7565ea1049 = /* @__PURE__ */ $aba20d5db397affd$export$b41394a5437791c8($aba20d5db397affd$var$SVG_TAGS);
const $aba20d5db397affd$export$4a46ca4c5be17b20 = /* @__PURE__ */ $aba20d5db397affd$export$b41394a5437791c8($aba20d5db397affd$var$MATH_TAGS);
const $aba20d5db397affd$export$e5f2d3d97d9367a4 = /* @__PURE__ */ $aba20d5db397affd$export$b41394a5437791c8($aba20d5db397affd$var$VOID_TAGS);
const $aba20d5db397affd$var$specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const $aba20d5db397affd$export$d186f5eb2e810715 = /* @__PURE__ */ $aba20d5db397affd$export$b41394a5437791c8($aba20d5db397affd$var$specialBooleanAttrs);
const $aba20d5db397affd$export$f763ba3b84e9cd8c = /* @__PURE__ */ $aba20d5db397affd$export$b41394a5437791c8($aba20d5db397affd$var$specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`);
function $aba20d5db397affd$export$e3f3cdb1390d56ce(value) {
    return !!value || value === "";
}
const $aba20d5db397affd$var$unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
const $aba20d5db397affd$var$attrValidationCache = {};
function $aba20d5db397affd$export$d55ef77660f30d12(name) {
    if ($aba20d5db397affd$var$attrValidationCache.hasOwnProperty(name)) return $aba20d5db397affd$var$attrValidationCache[name];
    const isUnsafe = $aba20d5db397affd$var$unsafeAttrCharRE.test(name);
    if (isUnsafe) console.error(`unsafe attribute name: ${name}`);
    return $aba20d5db397affd$var$attrValidationCache[name] = !isUnsafe;
}
const $aba20d5db397affd$export$b66fd0cae8dec3c8 = {
    acceptCharset: "accept-charset",
    className: "class",
    htmlFor: "for",
    httpEquiv: "http-equiv"
};
const $aba20d5db397affd$export$f7e7a1cc7da8d5e9 = /* @__PURE__ */ $aba20d5db397affd$export$b41394a5437791c8(`accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,inert,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap`);
const $aba20d5db397affd$export$80da416f43933831 = /* @__PURE__ */ $aba20d5db397affd$export$b41394a5437791c8(`xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xmlns:xlink,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan`);
const $aba20d5db397affd$export$fc0748a8e0014066 = /* @__PURE__ */ $aba20d5db397affd$export$b41394a5437791c8(`accent,accentunder,actiontype,align,alignmentscope,altimg,altimg-height,altimg-valign,altimg-width,alttext,bevelled,close,columnsalign,columnlines,columnspan,denomalign,depth,dir,display,displaystyle,encoding,equalcolumns,equalrows,fence,fontstyle,fontweight,form,frame,framespacing,groupalign,height,href,id,indentalign,indentalignfirst,indentalignlast,indentshift,indentshiftfirst,indentshiftlast,indextype,justify,largetop,largeop,lquote,lspace,mathbackground,mathcolor,mathsize,mathvariant,maxsize,minlabelspacing,mode,other,overflow,position,rowalign,rowlines,rowspan,rquote,rspace,scriptlevel,scriptminsize,scriptsizemultiplier,selection,separator,separators,shift,side,src,stackalign,stretchy,subscriptshift,superscriptshift,symmetric,voffset,width,widths,xlink:href,xlink:show,xlink:type,xmlns`);
function $aba20d5db397affd$export$921dd2acf0d386a3(value) {
    if (value == null) return false;
    const type = typeof value;
    return type === "string" || type === "number" || type === "boolean";
}
const $aba20d5db397affd$var$escapeRE = /["'&<>]/;
function $aba20d5db397affd$export$4cf11838cdc2a8a8(string) {
    const str = "" + string;
    const match = $aba20d5db397affd$var$escapeRE.exec(str);
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
const $aba20d5db397affd$var$commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;
function $aba20d5db397affd$export$7b105034a53bde5f(src) {
    return src.replace($aba20d5db397affd$var$commentStripRE, "");
}
const $aba20d5db397affd$export$9320a7246b331080 = /[ !"#$%&'()*+,./:;<=>?@[\\\]^`{|}~]/g;
function $aba20d5db397affd$export$ad9a320bfb7ba440(key, doubleEscape) {
    return key.replace($aba20d5db397affd$export$9320a7246b331080, (s)=>doubleEscape ? s === '"' ? '\\\\\\"' : `\\\\${s}` : `\\${s}`);
}
function $aba20d5db397affd$var$looseCompareArrays(a, b) {
    if (a.length !== b.length) return false;
    let equal = true;
    for(let i = 0; equal && i < a.length; i++)equal = $aba20d5db397affd$export$ae8015769846262c(a[i], b[i]);
    return equal;
}
function $aba20d5db397affd$export$ae8015769846262c(a, b) {
    if (a === b) return true;
    let aValidType = $aba20d5db397affd$export$871608497c498473(a);
    let bValidType = $aba20d5db397affd$export$871608497c498473(b);
    if (aValidType || bValidType) return aValidType && bValidType ? a.getTime() === b.getTime() : false;
    aValidType = $aba20d5db397affd$export$a244864fd9645c7f(a);
    bValidType = $aba20d5db397affd$export$a244864fd9645c7f(b);
    if (aValidType || bValidType) return a === b;
    aValidType = $aba20d5db397affd$export$43bee75e5e14138e(a);
    bValidType = $aba20d5db397affd$export$43bee75e5e14138e(b);
    if (aValidType || bValidType) return aValidType && bValidType ? $aba20d5db397affd$var$looseCompareArrays(a, b) : false;
    aValidType = $aba20d5db397affd$export$a6cdc56e425d0d0a(a);
    bValidType = $aba20d5db397affd$export$a6cdc56e425d0d0a(b);
    if (aValidType || bValidType) {
        if (!aValidType || !bValidType) return false;
        const aKeysCount = Object.keys(a).length;
        const bKeysCount = Object.keys(b).length;
        if (aKeysCount !== bKeysCount) return false;
        for(const key in a){
            const aHasKey = a.hasOwnProperty(key);
            const bHasKey = b.hasOwnProperty(key);
            if (aHasKey && !bHasKey || !aHasKey && bHasKey || !$aba20d5db397affd$export$ae8015769846262c(a[key], b[key])) return false;
        }
    }
    return String(a) === String(b);
}
function $aba20d5db397affd$export$42912a80cedb8bd4(arr, val) {
    return arr.findIndex((item)=>$aba20d5db397affd$export$ae8015769846262c(item, val));
}
const $aba20d5db397affd$var$isRef = (val)=>{
    return !!(val && val["__v_isRef"] === true);
};
const $aba20d5db397affd$export$b5b1545233b45293 = (val)=>{
    return $aba20d5db397affd$export$844ec244b1367d54(val) ? val : val == null ? "" : $aba20d5db397affd$export$43bee75e5e14138e(val) || $aba20d5db397affd$export$a6cdc56e425d0d0a(val) && (val.toString === $aba20d5db397affd$export$830c053460e5ddf6 || !$aba20d5db397affd$export$f6e2535fb5126e54(val.toString)) ? $aba20d5db397affd$var$isRef(val) ? $aba20d5db397affd$export$b5b1545233b45293(val.value) : JSON.stringify(val, $aba20d5db397affd$var$replacer, 2) : String(val);
};
const $aba20d5db397affd$var$replacer = (_key, val)=>{
    if ($aba20d5db397affd$var$isRef(val)) return $aba20d5db397affd$var$replacer(_key, val.value);
    else if ($aba20d5db397affd$export$5c90113a285f2241(val)) return {
        [`Map(${val.size})`]: [
            ...val.entries()
        ].reduce((entries, [key, val2], i)=>{
            entries[$aba20d5db397affd$var$stringifySymbol(key, i) + " =>"] = val2;
            return entries;
        }, {})
    };
    else if ($aba20d5db397affd$export$6750766a7c7ec627(val)) return {
        [`Set(${val.size})`]: [
            ...val.values()
        ].map((v)=>$aba20d5db397affd$var$stringifySymbol(v))
    };
    else if ($aba20d5db397affd$export$a244864fd9645c7f(val)) return $aba20d5db397affd$var$stringifySymbol(val);
    else if ($aba20d5db397affd$export$a6cdc56e425d0d0a(val) && !$aba20d5db397affd$export$43bee75e5e14138e(val) && !$aba20d5db397affd$export$53b83ca8eaab0383(val)) return String(val);
    return val;
};
const $aba20d5db397affd$var$stringifySymbol = (v, i = "")=>{
    var _a;
    return(// Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    $aba20d5db397affd$export$a244864fd9645c7f(v) ? `Symbol(${(_a = v.description) != null ? _a : i})` : v);
};
function $aba20d5db397affd$export$97fe3d6453ee2f5e(value) {
    if (value == null) return "initial";
    if (typeof value === "string") return value === "" ? " " : value;
    if (typeof value !== "number" || !Number.isFinite(value)) {
        if (!!(process.env.NODE_ENV !== "production")) console.warn("[Vue warn] Invalid value used for CSS binding. Expected a string or a finite number but received:", value);
    }
    return String(value);
}


function $ab22efe6fa499022$var$warn(msg, ...args) {
    console.warn(`[Vue warn] ${msg}`, ...args);
}
let $ab22efe6fa499022$var$activeEffectScope;
class $ab22efe6fa499022$export$1168ed9dbc71ddbd {
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
        this.parent = $ab22efe6fa499022$var$activeEffectScope;
        if (!detached && $ab22efe6fa499022$var$activeEffectScope) this.index = ($ab22efe6fa499022$var$activeEffectScope.scopes || ($ab22efe6fa499022$var$activeEffectScope.scopes = [])).push(this) - 1;
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
            const currentEffectScope = $ab22efe6fa499022$var$activeEffectScope;
            try {
                $ab22efe6fa499022$var$activeEffectScope = this;
                return fn();
            } finally{
                $ab22efe6fa499022$var$activeEffectScope = currentEffectScope;
            }
        } else if (!!(process.env.NODE_ENV !== "production")) $ab22efe6fa499022$var$warn(`cannot run an inactive effect scope.`);
    }
    /**
   * This should only be called on non-detached scopes
   * @internal
   */ on() {
        if (++this._on === 1) {
            this.prevScope = $ab22efe6fa499022$var$activeEffectScope;
            $ab22efe6fa499022$var$activeEffectScope = this;
        }
    }
    /**
   * This should only be called on non-detached scopes
   * @internal
   */ off() {
        if (this._on > 0 && --this._on === 0) {
            $ab22efe6fa499022$var$activeEffectScope = this.prevScope;
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
function $ab22efe6fa499022$export$7056603ea81600be(detached) {
    return new $ab22efe6fa499022$export$1168ed9dbc71ddbd(detached);
}
function $ab22efe6fa499022$export$c7be4b0125a10cba() {
    return $ab22efe6fa499022$var$activeEffectScope;
}
function $ab22efe6fa499022$export$a780418acd4762da(fn, failSilently = false) {
    if ($ab22efe6fa499022$var$activeEffectScope) $ab22efe6fa499022$var$activeEffectScope.cleanups.push(fn);
    else if (!!(process.env.NODE_ENV !== "production") && !failSilently) $ab22efe6fa499022$var$warn(`onScopeDispose() is called when there is no active effect scope to be associated with.`);
}
let $ab22efe6fa499022$var$activeSub;
const $ab22efe6fa499022$export$37ee493b2f34ee54 = {
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
const $ab22efe6fa499022$var$pausedQueueEffects = /* @__PURE__ */ new WeakSet();
class $ab22efe6fa499022$export$28352bb4dd362521 {
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
        if ($ab22efe6fa499022$var$activeEffectScope && $ab22efe6fa499022$var$activeEffectScope.active) $ab22efe6fa499022$var$activeEffectScope.effects.push(this);
    }
    pause() {
        this.flags |= 64;
    }
    resume() {
        if (this.flags & 64) {
            this.flags &= -65;
            if ($ab22efe6fa499022$var$pausedQueueEffects.has(this)) {
                $ab22efe6fa499022$var$pausedQueueEffects.delete(this);
                this.trigger();
            }
        }
    }
    /**
   * @internal
   */ notify() {
        if (this.flags & 2 && !(this.flags & 32)) return;
        if (!(this.flags & 8)) $ab22efe6fa499022$var$batch(this);
    }
    run() {
        if (!(this.flags & 1)) return this.fn();
        this.flags |= 2;
        $ab22efe6fa499022$var$cleanupEffect(this);
        $ab22efe6fa499022$var$prepareDeps(this);
        const prevEffect = $ab22efe6fa499022$var$activeSub;
        const prevShouldTrack = $ab22efe6fa499022$var$shouldTrack;
        $ab22efe6fa499022$var$activeSub = this;
        $ab22efe6fa499022$var$shouldTrack = true;
        try {
            return this.fn();
        } finally{
            if (!!(process.env.NODE_ENV !== "production") && $ab22efe6fa499022$var$activeSub !== this) $ab22efe6fa499022$var$warn("Active effect was not restored correctly - this is likely a Vue internal bug.");
            $ab22efe6fa499022$var$cleanupDeps(this);
            $ab22efe6fa499022$var$activeSub = prevEffect;
            $ab22efe6fa499022$var$shouldTrack = prevShouldTrack;
            this.flags &= -3;
        }
    }
    stop() {
        if (this.flags & 1) {
            for(let link = this.deps; link; link = link.nextDep)$ab22efe6fa499022$var$removeSub(link);
            this.deps = this.depsTail = void 0;
            $ab22efe6fa499022$var$cleanupEffect(this);
            this.onStop && this.onStop();
            this.flags &= -2;
        }
    }
    trigger() {
        if (this.flags & 64) $ab22efe6fa499022$var$pausedQueueEffects.add(this);
        else if (this.scheduler) this.scheduler();
        else this.runIfDirty();
    }
    /**
   * @internal
   */ runIfDirty() {
        if ($ab22efe6fa499022$var$isDirty(this)) this.run();
    }
    get dirty() {
        return $ab22efe6fa499022$var$isDirty(this);
    }
}
let $ab22efe6fa499022$var$batchDepth = 0;
let $ab22efe6fa499022$var$batchedSub;
let $ab22efe6fa499022$var$batchedComputed;
function $ab22efe6fa499022$var$batch(sub, isComputed = false) {
    sub.flags |= 8;
    if (isComputed) {
        sub.next = $ab22efe6fa499022$var$batchedComputed;
        $ab22efe6fa499022$var$batchedComputed = sub;
        return;
    }
    sub.next = $ab22efe6fa499022$var$batchedSub;
    $ab22efe6fa499022$var$batchedSub = sub;
}
function $ab22efe6fa499022$var$startBatch() {
    $ab22efe6fa499022$var$batchDepth++;
}
function $ab22efe6fa499022$var$endBatch() {
    if (--$ab22efe6fa499022$var$batchDepth > 0) return;
    if ($ab22efe6fa499022$var$batchedComputed) {
        let e = $ab22efe6fa499022$var$batchedComputed;
        $ab22efe6fa499022$var$batchedComputed = void 0;
        while(e){
            const next = e.next;
            e.next = void 0;
            e.flags &= -9;
            e = next;
        }
    }
    let error;
    while($ab22efe6fa499022$var$batchedSub){
        let e = $ab22efe6fa499022$var$batchedSub;
        $ab22efe6fa499022$var$batchedSub = void 0;
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
function $ab22efe6fa499022$var$prepareDeps(sub) {
    for(let link = sub.deps; link; link = link.nextDep){
        link.version = -1;
        link.prevActiveLink = link.dep.activeLink;
        link.dep.activeLink = link;
    }
}
function $ab22efe6fa499022$var$cleanupDeps(sub) {
    let head;
    let tail = sub.depsTail;
    let link = tail;
    while(link){
        const prev = link.prevDep;
        if (link.version === -1) {
            if (link === tail) tail = prev;
            $ab22efe6fa499022$var$removeSub(link);
            $ab22efe6fa499022$var$removeDep(link);
        } else head = link;
        link.dep.activeLink = link.prevActiveLink;
        link.prevActiveLink = void 0;
        link = prev;
    }
    sub.deps = head;
    sub.depsTail = tail;
}
function $ab22efe6fa499022$var$isDirty(sub) {
    for(let link = sub.deps; link; link = link.nextDep){
        if (link.dep.version !== link.version || link.dep.computed && ($ab22efe6fa499022$var$refreshComputed(link.dep.computed) || link.dep.version !== link.version)) return true;
    }
    if (sub._dirty) return true;
    return false;
}
function $ab22efe6fa499022$var$refreshComputed(computed) {
    if (computed.flags & 4 && !(computed.flags & 16)) return;
    computed.flags &= -17;
    if (computed.globalVersion === $ab22efe6fa499022$var$globalVersion) return;
    computed.globalVersion = $ab22efe6fa499022$var$globalVersion;
    if (!computed.isSSR && computed.flags & 128 && (!computed.deps && !computed._dirty || !$ab22efe6fa499022$var$isDirty(computed))) return;
    computed.flags |= 2;
    const dep = computed.dep;
    const prevSub = $ab22efe6fa499022$var$activeSub;
    const prevShouldTrack = $ab22efe6fa499022$var$shouldTrack;
    $ab22efe6fa499022$var$activeSub = computed;
    $ab22efe6fa499022$var$shouldTrack = true;
    try {
        $ab22efe6fa499022$var$prepareDeps(computed);
        const value = computed.fn(computed._value);
        if (dep.version === 0 || (0, $aba20d5db397affd$export$f619eb8b89076d23)(value, computed._value)) {
            computed.flags |= 128;
            computed._value = value;
            dep.version++;
        }
    } catch (err) {
        dep.version++;
        throw err;
    } finally{
        $ab22efe6fa499022$var$activeSub = prevSub;
        $ab22efe6fa499022$var$shouldTrack = prevShouldTrack;
        $ab22efe6fa499022$var$cleanupDeps(computed);
        computed.flags &= -3;
    }
}
function $ab22efe6fa499022$var$removeSub(link, soft = false) {
    const { dep: dep, prevSub: prevSub, nextSub: nextSub } = link;
    if (prevSub) {
        prevSub.nextSub = nextSub;
        link.prevSub = void 0;
    }
    if (nextSub) {
        nextSub.prevSub = prevSub;
        link.nextSub = void 0;
    }
    if (!!(process.env.NODE_ENV !== "production") && dep.subsHead === link) dep.subsHead = nextSub;
    if (dep.subs === link) {
        dep.subs = prevSub;
        if (!prevSub && dep.computed) {
            dep.computed.flags &= -5;
            for(let l = dep.computed.deps; l; l = l.nextDep)$ab22efe6fa499022$var$removeSub(l, true);
        }
    }
    if (!soft && !--dep.sc && dep.map) dep.map.delete(dep.key);
}
function $ab22efe6fa499022$var$removeDep(link) {
    const { prevDep: prevDep, nextDep: nextDep } = link;
    if (prevDep) {
        prevDep.nextDep = nextDep;
        link.prevDep = void 0;
    }
    if (nextDep) {
        nextDep.prevDep = prevDep;
        link.nextDep = void 0;
    }
}
function $ab22efe6fa499022$export$dc573d8a6576cdb3(fn, options) {
    if (fn.effect instanceof $ab22efe6fa499022$export$28352bb4dd362521) fn = fn.effect.fn;
    const e = new $ab22efe6fa499022$export$28352bb4dd362521(fn);
    if (options) (0, $aba20d5db397affd$export$8b58be045bf06082)(e, options);
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
function $ab22efe6fa499022$export$fa6813432f753b0d(runner) {
    runner.effect.stop();
}
let $ab22efe6fa499022$var$shouldTrack = true;
const $ab22efe6fa499022$var$trackStack = [];
function $ab22efe6fa499022$export$938a971395fef855() {
    $ab22efe6fa499022$var$trackStack.push($ab22efe6fa499022$var$shouldTrack);
    $ab22efe6fa499022$var$shouldTrack = false;
}
function $ab22efe6fa499022$export$1f8ffc6fd33b1d16() {
    $ab22efe6fa499022$var$trackStack.push($ab22efe6fa499022$var$shouldTrack);
    $ab22efe6fa499022$var$shouldTrack = true;
}
function $ab22efe6fa499022$export$c39176b1babaa8b8() {
    const last = $ab22efe6fa499022$var$trackStack.pop();
    $ab22efe6fa499022$var$shouldTrack = last === void 0 ? true : last;
}
function $ab22efe6fa499022$export$92b6a62b33d94031(fn, failSilently = false) {
    if ($ab22efe6fa499022$var$activeSub instanceof $ab22efe6fa499022$export$28352bb4dd362521) $ab22efe6fa499022$var$activeSub.cleanup = fn;
    else if (!!(process.env.NODE_ENV !== "production") && !failSilently) $ab22efe6fa499022$var$warn(`onEffectCleanup() was called when there was no active effect to associate with.`);
}
function $ab22efe6fa499022$var$cleanupEffect(e) {
    const { cleanup: cleanup } = e;
    e.cleanup = void 0;
    if (cleanup) {
        const prevSub = $ab22efe6fa499022$var$activeSub;
        $ab22efe6fa499022$var$activeSub = void 0;
        try {
            cleanup();
        } finally{
            $ab22efe6fa499022$var$activeSub = prevSub;
        }
    }
}
let $ab22efe6fa499022$var$globalVersion = 0;
class $ab22efe6fa499022$var$Link {
    constructor(sub, dep){
        this.sub = sub;
        this.dep = dep;
        this.version = dep.version;
        this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
    }
}
class $ab22efe6fa499022$var$Dep {
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
        if (!!(process.env.NODE_ENV !== "production")) this.subsHead = void 0;
    }
    track(debugInfo) {
        if (!$ab22efe6fa499022$var$activeSub || !$ab22efe6fa499022$var$shouldTrack || $ab22efe6fa499022$var$activeSub === this.computed) return;
        let link = this.activeLink;
        if (link === void 0 || link.sub !== $ab22efe6fa499022$var$activeSub) {
            link = this.activeLink = new $ab22efe6fa499022$var$Link($ab22efe6fa499022$var$activeSub, this);
            if (!$ab22efe6fa499022$var$activeSub.deps) $ab22efe6fa499022$var$activeSub.deps = $ab22efe6fa499022$var$activeSub.depsTail = link;
            else {
                link.prevDep = $ab22efe6fa499022$var$activeSub.depsTail;
                $ab22efe6fa499022$var$activeSub.depsTail.nextDep = link;
                $ab22efe6fa499022$var$activeSub.depsTail = link;
            }
            $ab22efe6fa499022$var$addSub(link);
        } else if (link.version === -1) {
            link.version = this.version;
            if (link.nextDep) {
                const next = link.nextDep;
                next.prevDep = link.prevDep;
                if (link.prevDep) link.prevDep.nextDep = next;
                link.prevDep = $ab22efe6fa499022$var$activeSub.depsTail;
                link.nextDep = void 0;
                $ab22efe6fa499022$var$activeSub.depsTail.nextDep = link;
                $ab22efe6fa499022$var$activeSub.depsTail = link;
                if ($ab22efe6fa499022$var$activeSub.deps === link) $ab22efe6fa499022$var$activeSub.deps = next;
            }
        }
        if (!!(process.env.NODE_ENV !== "production") && $ab22efe6fa499022$var$activeSub.onTrack) $ab22efe6fa499022$var$activeSub.onTrack((0, $aba20d5db397affd$export$8b58be045bf06082)({
            effect: $ab22efe6fa499022$var$activeSub
        }, debugInfo));
        return link;
    }
    trigger(debugInfo) {
        this.version++;
        $ab22efe6fa499022$var$globalVersion++;
        this.notify(debugInfo);
    }
    notify(debugInfo) {
        $ab22efe6fa499022$var$startBatch();
        try {
            if (!!(process.env.NODE_ENV !== "production")) {
                for(let head = this.subsHead; head; head = head.nextSub)if (head.sub.onTrigger && !(head.sub.flags & 8)) head.sub.onTrigger((0, $aba20d5db397affd$export$8b58be045bf06082)({
                    effect: head.sub
                }, debugInfo));
            }
            for(let link = this.subs; link; link = link.prevSub)if (link.sub.notify()) link.sub.dep.notify();
        } finally{
            $ab22efe6fa499022$var$endBatch();
        }
    }
}
function $ab22efe6fa499022$var$addSub(link) {
    link.dep.sc++;
    if (link.sub.flags & 4) {
        const computed = link.dep.computed;
        if (computed && !link.dep.subs) {
            computed.flags |= 20;
            for(let l = computed.deps; l; l = l.nextDep)$ab22efe6fa499022$var$addSub(l);
        }
        const currentTail = link.dep.subs;
        if (currentTail !== link) {
            link.prevSub = currentTail;
            if (currentTail) currentTail.nextSub = link;
        }
        if (!!(process.env.NODE_ENV !== "production") && link.dep.subsHead === void 0) link.dep.subsHead = link;
        link.dep.subs = link;
    }
}
const $ab22efe6fa499022$var$targetMap = /* @__PURE__ */ new WeakMap();
const $ab22efe6fa499022$export$3c41b1a4e06acc14 = Symbol(!!(process.env.NODE_ENV !== "production") ? "Object iterate" : "");
const $ab22efe6fa499022$export$49093fa1cddcb78d = Symbol(!!(process.env.NODE_ENV !== "production") ? "Map keys iterate" : "");
const $ab22efe6fa499022$export$4f926f0baab682cd = Symbol(!!(process.env.NODE_ENV !== "production") ? "Array iterate" : "");
function $ab22efe6fa499022$export$6b2a7d5132615086(target, type, key) {
    if ($ab22efe6fa499022$var$shouldTrack && $ab22efe6fa499022$var$activeSub) {
        let depsMap = $ab22efe6fa499022$var$targetMap.get(target);
        if (!depsMap) $ab22efe6fa499022$var$targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
        let dep = depsMap.get(key);
        if (!dep) {
            depsMap.set(key, dep = new $ab22efe6fa499022$var$Dep());
            dep.map = depsMap;
            dep.key = key;
        }
        if (!!(process.env.NODE_ENV !== "production")) dep.track({
            target: target,
            type: type,
            key: key
        });
        else dep.track();
    }
}
function $ab22efe6fa499022$export$e614dc9140f7ae71(target, type, key, newValue, oldValue, oldTarget) {
    const depsMap = $ab22efe6fa499022$var$targetMap.get(target);
    if (!depsMap) {
        $ab22efe6fa499022$var$globalVersion++;
        return;
    }
    const run = (dep)=>{
        if (dep) {
            if (!!(process.env.NODE_ENV !== "production")) dep.trigger({
                target: target,
                type: type,
                key: key,
                newValue: newValue,
                oldValue: oldValue,
                oldTarget: oldTarget
            });
            else dep.trigger();
        }
    };
    $ab22efe6fa499022$var$startBatch();
    if (type === "clear") depsMap.forEach(run);
    else {
        const targetIsArray = (0, $aba20d5db397affd$export$43bee75e5e14138e)(target);
        const isArrayIndex = targetIsArray && (0, $aba20d5db397affd$export$e2a2b93446ec9fe)(key);
        if (targetIsArray && key === "length") {
            const newLength = Number(newValue);
            depsMap.forEach((dep, key2)=>{
                if (key2 === "length" || key2 === $ab22efe6fa499022$export$4f926f0baab682cd || !(0, $aba20d5db397affd$export$a244864fd9645c7f)(key2) && key2 >= newLength) run(dep);
            });
        } else {
            if (key !== void 0 || depsMap.has(void 0)) run(depsMap.get(key));
            if (isArrayIndex) run(depsMap.get($ab22efe6fa499022$export$4f926f0baab682cd));
            switch(type){
                case "add":
                    if (!targetIsArray) {
                        run(depsMap.get($ab22efe6fa499022$export$3c41b1a4e06acc14));
                        if ((0, $aba20d5db397affd$export$5c90113a285f2241)(target)) run(depsMap.get($ab22efe6fa499022$export$49093fa1cddcb78d));
                    } else if (isArrayIndex) run(depsMap.get("length"));
                    break;
                case "delete":
                    if (!targetIsArray) {
                        run(depsMap.get($ab22efe6fa499022$export$3c41b1a4e06acc14));
                        if ((0, $aba20d5db397affd$export$5c90113a285f2241)(target)) run(depsMap.get($ab22efe6fa499022$export$49093fa1cddcb78d));
                    }
                    break;
                case "set":
                    if ((0, $aba20d5db397affd$export$5c90113a285f2241)(target)) run(depsMap.get($ab22efe6fa499022$export$3c41b1a4e06acc14));
                    break;
            }
        }
    }
    $ab22efe6fa499022$var$endBatch();
}
function $ab22efe6fa499022$var$getDepFromReactive(object, key) {
    const depMap = $ab22efe6fa499022$var$targetMap.get(object);
    return depMap && depMap.get(key);
}
function $ab22efe6fa499022$export$1544eab4943788e4(array) {
    const raw = $ab22efe6fa499022$export$ab18938b9fc5f28e(array);
    if (raw === array) return raw;
    $ab22efe6fa499022$export$6b2a7d5132615086(raw, "iterate", $ab22efe6fa499022$export$4f926f0baab682cd);
    return $ab22efe6fa499022$export$7f3fe6025abfa26e(array) ? raw : raw.map($ab22efe6fa499022$export$45c769cf449a508c);
}
function $ab22efe6fa499022$export$5eb48af14254449e(arr) {
    $ab22efe6fa499022$export$6b2a7d5132615086(arr = $ab22efe6fa499022$export$ab18938b9fc5f28e(arr), "iterate", $ab22efe6fa499022$export$4f926f0baab682cd);
    return arr;
}
const $ab22efe6fa499022$var$arrayInstrumentations = {
    __proto__: null,
    [Symbol.iterator] () {
        return $ab22efe6fa499022$var$iterator(this, Symbol.iterator, $ab22efe6fa499022$export$45c769cf449a508c);
    },
    concat (...args) {
        return $ab22efe6fa499022$export$1544eab4943788e4(this).concat(...args.map((x)=>(0, $aba20d5db397affd$export$43bee75e5e14138e)(x) ? $ab22efe6fa499022$export$1544eab4943788e4(x) : x));
    },
    entries () {
        return $ab22efe6fa499022$var$iterator(this, "entries", (value)=>{
            value[1] = $ab22efe6fa499022$export$45c769cf449a508c(value[1]);
            return value;
        });
    },
    every (fn, thisArg) {
        return $ab22efe6fa499022$var$apply(this, "every", fn, thisArg, void 0, arguments);
    },
    filter (fn, thisArg) {
        return $ab22efe6fa499022$var$apply(this, "filter", fn, thisArg, (v)=>v.map($ab22efe6fa499022$export$45c769cf449a508c), arguments);
    },
    find (fn, thisArg) {
        return $ab22efe6fa499022$var$apply(this, "find", fn, thisArg, $ab22efe6fa499022$export$45c769cf449a508c, arguments);
    },
    findIndex (fn, thisArg) {
        return $ab22efe6fa499022$var$apply(this, "findIndex", fn, thisArg, void 0, arguments);
    },
    findLast (fn, thisArg) {
        return $ab22efe6fa499022$var$apply(this, "findLast", fn, thisArg, $ab22efe6fa499022$export$45c769cf449a508c, arguments);
    },
    findLastIndex (fn, thisArg) {
        return $ab22efe6fa499022$var$apply(this, "findLastIndex", fn, thisArg, void 0, arguments);
    },
    // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
    forEach (fn, thisArg) {
        return $ab22efe6fa499022$var$apply(this, "forEach", fn, thisArg, void 0, arguments);
    },
    includes (...args) {
        return $ab22efe6fa499022$var$searchProxy(this, "includes", args);
    },
    indexOf (...args) {
        return $ab22efe6fa499022$var$searchProxy(this, "indexOf", args);
    },
    join (separator) {
        return $ab22efe6fa499022$export$1544eab4943788e4(this).join(separator);
    },
    // keys() iterator only reads `length`, no optimisation required
    lastIndexOf (...args) {
        return $ab22efe6fa499022$var$searchProxy(this, "lastIndexOf", args);
    },
    map (fn, thisArg) {
        return $ab22efe6fa499022$var$apply(this, "map", fn, thisArg, void 0, arguments);
    },
    pop () {
        return $ab22efe6fa499022$var$noTracking(this, "pop");
    },
    push (...args) {
        return $ab22efe6fa499022$var$noTracking(this, "push", args);
    },
    reduce (fn, ...args) {
        return $ab22efe6fa499022$var$reduce(this, "reduce", fn, args);
    },
    reduceRight (fn, ...args) {
        return $ab22efe6fa499022$var$reduce(this, "reduceRight", fn, args);
    },
    shift () {
        return $ab22efe6fa499022$var$noTracking(this, "shift");
    },
    // slice could use ARRAY_ITERATE but also seems to beg for range tracking
    some (fn, thisArg) {
        return $ab22efe6fa499022$var$apply(this, "some", fn, thisArg, void 0, arguments);
    },
    splice (...args) {
        return $ab22efe6fa499022$var$noTracking(this, "splice", args);
    },
    toReversed () {
        return $ab22efe6fa499022$export$1544eab4943788e4(this).toReversed();
    },
    toSorted (comparer) {
        return $ab22efe6fa499022$export$1544eab4943788e4(this).toSorted(comparer);
    },
    toSpliced (...args) {
        return $ab22efe6fa499022$export$1544eab4943788e4(this).toSpliced(...args);
    },
    unshift (...args) {
        return $ab22efe6fa499022$var$noTracking(this, "unshift", args);
    },
    values () {
        return $ab22efe6fa499022$var$iterator(this, "values", $ab22efe6fa499022$export$45c769cf449a508c);
    }
};
function $ab22efe6fa499022$var$iterator(self, method, wrapValue) {
    const arr = $ab22efe6fa499022$export$5eb48af14254449e(self);
    const iter = arr[method]();
    if (arr !== self && !$ab22efe6fa499022$export$7f3fe6025abfa26e(self)) {
        iter._next = iter.next;
        iter.next = ()=>{
            const result = iter._next();
            if (result.value) result.value = wrapValue(result.value);
            return result;
        };
    }
    return iter;
}
const $ab22efe6fa499022$var$arrayProto = Array.prototype;
function $ab22efe6fa499022$var$apply(self, method, fn, thisArg, wrappedRetFn, args) {
    const arr = $ab22efe6fa499022$export$5eb48af14254449e(self);
    const needsWrap = arr !== self && !$ab22efe6fa499022$export$7f3fe6025abfa26e(self);
    const methodFn = arr[method];
    if (methodFn !== $ab22efe6fa499022$var$arrayProto[method]) {
        const result2 = methodFn.apply(self, args);
        return needsWrap ? $ab22efe6fa499022$export$45c769cf449a508c(result2) : result2;
    }
    let wrappedFn = fn;
    if (arr !== self) {
        if (needsWrap) wrappedFn = function(item, index) {
            return fn.call(this, $ab22efe6fa499022$export$45c769cf449a508c(item), index, self);
        };
        else if (fn.length > 2) wrappedFn = function(item, index) {
            return fn.call(this, item, index, self);
        };
    }
    const result = methodFn.call(arr, wrappedFn, thisArg);
    return needsWrap && wrappedRetFn ? wrappedRetFn(result) : result;
}
function $ab22efe6fa499022$var$reduce(self, method, fn, args) {
    const arr = $ab22efe6fa499022$export$5eb48af14254449e(self);
    let wrappedFn = fn;
    if (arr !== self) {
        if (!$ab22efe6fa499022$export$7f3fe6025abfa26e(self)) wrappedFn = function(acc, item, index) {
            return fn.call(this, acc, $ab22efe6fa499022$export$45c769cf449a508c(item), index, self);
        };
        else if (fn.length > 3) wrappedFn = function(acc, item, index) {
            return fn.call(this, acc, item, index, self);
        };
    }
    return arr[method](wrappedFn, ...args);
}
function $ab22efe6fa499022$var$searchProxy(self, method, args) {
    const arr = $ab22efe6fa499022$export$ab18938b9fc5f28e(self);
    $ab22efe6fa499022$export$6b2a7d5132615086(arr, "iterate", $ab22efe6fa499022$export$4f926f0baab682cd);
    const res = arr[method](...args);
    if ((res === -1 || res === false) && $ab22efe6fa499022$export$5f3ca29d057519b3(args[0])) {
        args[0] = $ab22efe6fa499022$export$ab18938b9fc5f28e(args[0]);
        return arr[method](...args);
    }
    return res;
}
function $ab22efe6fa499022$var$noTracking(self, method, args = []) {
    $ab22efe6fa499022$export$938a971395fef855();
    $ab22efe6fa499022$var$startBatch();
    const res = $ab22efe6fa499022$export$ab18938b9fc5f28e(self)[method].apply(self, args);
    $ab22efe6fa499022$var$endBatch();
    $ab22efe6fa499022$export$c39176b1babaa8b8();
    return res;
}
const $ab22efe6fa499022$var$isNonTrackableKeys = /* @__PURE__ */ (0, $aba20d5db397affd$export$b41394a5437791c8)(`__proto__,__v_isRef,__isVue`);
const $ab22efe6fa499022$var$builtInSymbols = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((key)=>key !== "arguments" && key !== "caller").map((key)=>Symbol[key]).filter((0, $aba20d5db397affd$export$a244864fd9645c7f)));
function $ab22efe6fa499022$var$hasOwnProperty(key) {
    if (!(0, $aba20d5db397affd$export$a244864fd9645c7f)(key)) key = String(key);
    const obj = $ab22efe6fa499022$export$ab18938b9fc5f28e(this);
    $ab22efe6fa499022$export$6b2a7d5132615086(obj, "has", key);
    return obj.hasOwnProperty(key);
}
class $ab22efe6fa499022$var$BaseReactiveHandler {
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
            if (receiver === (isReadonly2 ? isShallow2 ? $ab22efe6fa499022$var$shallowReadonlyMap : $ab22efe6fa499022$var$readonlyMap : isShallow2 ? $ab22efe6fa499022$var$shallowReactiveMap : $ab22efe6fa499022$var$reactiveMap).get(target) || // receiver is not the reactive proxy, but has the same prototype
            // this means the receiver is a user proxy of the reactive proxy
            Object.getPrototypeOf(target) === Object.getPrototypeOf(receiver)) return target;
            return;
        }
        const targetIsArray = (0, $aba20d5db397affd$export$43bee75e5e14138e)(target);
        if (!isReadonly2) {
            let fn;
            if (targetIsArray && (fn = $ab22efe6fa499022$var$arrayInstrumentations[key])) return fn;
            if (key === "hasOwnProperty") return $ab22efe6fa499022$var$hasOwnProperty;
        }
        const res = Reflect.get(target, key, // if this is a proxy wrapping a ref, return methods using the raw ref
        // as receiver so that we don't have to call `toRaw` on the ref in all
        // its class methods
        $ab22efe6fa499022$export$4f9f5282de18fc69(target) ? target : receiver);
        if ((0, $aba20d5db397affd$export$a244864fd9645c7f)(key) ? $ab22efe6fa499022$var$builtInSymbols.has(key) : $ab22efe6fa499022$var$isNonTrackableKeys(key)) return res;
        if (!isReadonly2) $ab22efe6fa499022$export$6b2a7d5132615086(target, "get", key);
        if (isShallow2) return res;
        if ($ab22efe6fa499022$export$4f9f5282de18fc69(res)) return targetIsArray && (0, $aba20d5db397affd$export$e2a2b93446ec9fe)(key) ? res : res.value;
        if ((0, $aba20d5db397affd$export$a6cdc56e425d0d0a)(res)) return isReadonly2 ? $ab22efe6fa499022$export$6ec456bd5b7b3c51(res) : $ab22efe6fa499022$export$90a44edba14e47be(res);
        return res;
    }
}
class $ab22efe6fa499022$var$MutableReactiveHandler extends $ab22efe6fa499022$var$BaseReactiveHandler {
    constructor(isShallow2 = false){
        super(false, isShallow2);
    }
    set(target, key, value, receiver) {
        let oldValue = target[key];
        if (!this._isShallow) {
            const isOldValueReadonly = $ab22efe6fa499022$export$92d09b48637741e7(oldValue);
            if (!$ab22efe6fa499022$export$7f3fe6025abfa26e(value) && !$ab22efe6fa499022$export$92d09b48637741e7(value)) {
                oldValue = $ab22efe6fa499022$export$ab18938b9fc5f28e(oldValue);
                value = $ab22efe6fa499022$export$ab18938b9fc5f28e(value);
            }
            if (!(0, $aba20d5db397affd$export$43bee75e5e14138e)(target) && $ab22efe6fa499022$export$4f9f5282de18fc69(oldValue) && !$ab22efe6fa499022$export$4f9f5282de18fc69(value)) {
                if (isOldValueReadonly) return false;
                else {
                    oldValue.value = value;
                    return true;
                }
            }
        }
        const hadKey = (0, $aba20d5db397affd$export$43bee75e5e14138e)(target) && (0, $aba20d5db397affd$export$e2a2b93446ec9fe)(key) ? Number(key) < target.length : (0, $aba20d5db397affd$export$b5a638e9b3fff9f3)(target, key);
        const result = Reflect.set(target, key, value, $ab22efe6fa499022$export$4f9f5282de18fc69(target) ? target : receiver);
        if (target === $ab22efe6fa499022$export$ab18938b9fc5f28e(receiver)) {
            if (!hadKey) $ab22efe6fa499022$export$e614dc9140f7ae71(target, "add", key, value);
            else if ((0, $aba20d5db397affd$export$f619eb8b89076d23)(value, oldValue)) $ab22efe6fa499022$export$e614dc9140f7ae71(target, "set", key, value, oldValue);
        }
        return result;
    }
    deleteProperty(target, key) {
        const hadKey = (0, $aba20d5db397affd$export$b5a638e9b3fff9f3)(target, key);
        const oldValue = target[key];
        const result = Reflect.deleteProperty(target, key);
        if (result && hadKey) $ab22efe6fa499022$export$e614dc9140f7ae71(target, "delete", key, void 0, oldValue);
        return result;
    }
    has(target, key) {
        const result = Reflect.has(target, key);
        if (!(0, $aba20d5db397affd$export$a244864fd9645c7f)(key) || !$ab22efe6fa499022$var$builtInSymbols.has(key)) $ab22efe6fa499022$export$6b2a7d5132615086(target, "has", key);
        return result;
    }
    ownKeys(target) {
        $ab22efe6fa499022$export$6b2a7d5132615086(target, "iterate", (0, $aba20d5db397affd$export$43bee75e5e14138e)(target) ? "length" : $ab22efe6fa499022$export$3c41b1a4e06acc14);
        return Reflect.ownKeys(target);
    }
}
class $ab22efe6fa499022$var$ReadonlyReactiveHandler extends $ab22efe6fa499022$var$BaseReactiveHandler {
    constructor(isShallow2 = false){
        super(true, isShallow2);
    }
    set(target, key) {
        if (!!(process.env.NODE_ENV !== "production")) $ab22efe6fa499022$var$warn(`Set operation on key "${String(key)}" failed: target is readonly.`, target);
        return true;
    }
    deleteProperty(target, key) {
        if (!!(process.env.NODE_ENV !== "production")) $ab22efe6fa499022$var$warn(`Delete operation on key "${String(key)}" failed: target is readonly.`, target);
        return true;
    }
}
const $ab22efe6fa499022$var$mutableHandlers = /* @__PURE__ */ new $ab22efe6fa499022$var$MutableReactiveHandler();
const $ab22efe6fa499022$var$readonlyHandlers = /* @__PURE__ */ new $ab22efe6fa499022$var$ReadonlyReactiveHandler();
const $ab22efe6fa499022$var$shallowReactiveHandlers = /* @__PURE__ */ new $ab22efe6fa499022$var$MutableReactiveHandler(true);
const $ab22efe6fa499022$var$shallowReadonlyHandlers = /* @__PURE__ */ new $ab22efe6fa499022$var$ReadonlyReactiveHandler(true);
const $ab22efe6fa499022$var$toShallow = (value)=>value;
const $ab22efe6fa499022$var$getProto = (v)=>Reflect.getPrototypeOf(v);
function $ab22efe6fa499022$var$createIterableMethod(method, isReadonly2, isShallow2) {
    return function(...args) {
        const target = this["__v_raw"];
        const rawTarget = $ab22efe6fa499022$export$ab18938b9fc5f28e(target);
        const targetIsMap = (0, $aba20d5db397affd$export$5c90113a285f2241)(rawTarget);
        const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
        const isKeyOnly = method === "keys" && targetIsMap;
        const innerIterator = target[method](...args);
        const wrap = isShallow2 ? $ab22efe6fa499022$var$toShallow : isReadonly2 ? $ab22efe6fa499022$export$4a78e7a2a4fb689f : $ab22efe6fa499022$export$45c769cf449a508c;
        !isReadonly2 && $ab22efe6fa499022$export$6b2a7d5132615086(rawTarget, "iterate", isKeyOnly ? $ab22efe6fa499022$export$49093fa1cddcb78d : $ab22efe6fa499022$export$3c41b1a4e06acc14);
        return {
            // iterator protocol
            next () {
                const { value: value, done: done } = innerIterator.next();
                return done ? {
                    value: value,
                    done: done
                } : {
                    value: isPair ? [
                        wrap(value[0]),
                        wrap(value[1])
                    ] : wrap(value),
                    done: done
                };
            },
            // iterable protocol
            [Symbol.iterator] () {
                return this;
            }
        };
    };
}
function $ab22efe6fa499022$var$createReadonlyMethod(type) {
    return function(...args) {
        if (!!(process.env.NODE_ENV !== "production")) {
            const key = args[0] ? `on key "${args[0]}" ` : ``;
            $ab22efe6fa499022$var$warn(`${(0, $aba20d5db397affd$export$9a00dee1beb8f576)(type)} operation ${key}failed: target is readonly.`, $ab22efe6fa499022$export$ab18938b9fc5f28e(this));
        }
        return type === "delete" ? false : type === "clear" ? void 0 : this;
    };
}
function $ab22efe6fa499022$var$createInstrumentations(readonly, shallow) {
    const instrumentations = {
        get (key) {
            const target = this["__v_raw"];
            const rawTarget = $ab22efe6fa499022$export$ab18938b9fc5f28e(target);
            const rawKey = $ab22efe6fa499022$export$ab18938b9fc5f28e(key);
            if (!readonly) {
                if ((0, $aba20d5db397affd$export$f619eb8b89076d23)(key, rawKey)) $ab22efe6fa499022$export$6b2a7d5132615086(rawTarget, "get", key);
                $ab22efe6fa499022$export$6b2a7d5132615086(rawTarget, "get", rawKey);
            }
            const { has: has } = $ab22efe6fa499022$var$getProto(rawTarget);
            const wrap = shallow ? $ab22efe6fa499022$var$toShallow : readonly ? $ab22efe6fa499022$export$4a78e7a2a4fb689f : $ab22efe6fa499022$export$45c769cf449a508c;
            if (has.call(rawTarget, key)) return wrap(target.get(key));
            else if (has.call(rawTarget, rawKey)) return wrap(target.get(rawKey));
            else if (target !== rawTarget) target.get(key);
        },
        get size () {
            const target = this["__v_raw"];
            !readonly && $ab22efe6fa499022$export$6b2a7d5132615086($ab22efe6fa499022$export$ab18938b9fc5f28e(target), "iterate", $ab22efe6fa499022$export$3c41b1a4e06acc14);
            return Reflect.get(target, "size", target);
        },
        has (key) {
            const target = this["__v_raw"];
            const rawTarget = $ab22efe6fa499022$export$ab18938b9fc5f28e(target);
            const rawKey = $ab22efe6fa499022$export$ab18938b9fc5f28e(key);
            if (!readonly) {
                if ((0, $aba20d5db397affd$export$f619eb8b89076d23)(key, rawKey)) $ab22efe6fa499022$export$6b2a7d5132615086(rawTarget, "has", key);
                $ab22efe6fa499022$export$6b2a7d5132615086(rawTarget, "has", rawKey);
            }
            return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
        },
        forEach (callback, thisArg) {
            const observed = this;
            const target = observed["__v_raw"];
            const rawTarget = $ab22efe6fa499022$export$ab18938b9fc5f28e(target);
            const wrap = shallow ? $ab22efe6fa499022$var$toShallow : readonly ? $ab22efe6fa499022$export$4a78e7a2a4fb689f : $ab22efe6fa499022$export$45c769cf449a508c;
            !readonly && $ab22efe6fa499022$export$6b2a7d5132615086(rawTarget, "iterate", $ab22efe6fa499022$export$3c41b1a4e06acc14);
            return target.forEach((value, key)=>{
                return callback.call(thisArg, wrap(value), wrap(key), observed);
            });
        }
    };
    (0, $aba20d5db397affd$export$8b58be045bf06082)(instrumentations, readonly ? {
        add: $ab22efe6fa499022$var$createReadonlyMethod("add"),
        set: $ab22efe6fa499022$var$createReadonlyMethod("set"),
        delete: $ab22efe6fa499022$var$createReadonlyMethod("delete"),
        clear: $ab22efe6fa499022$var$createReadonlyMethod("clear")
    } : {
        add (value) {
            if (!shallow && !$ab22efe6fa499022$export$7f3fe6025abfa26e(value) && !$ab22efe6fa499022$export$92d09b48637741e7(value)) value = $ab22efe6fa499022$export$ab18938b9fc5f28e(value);
            const target = $ab22efe6fa499022$export$ab18938b9fc5f28e(this);
            const proto = $ab22efe6fa499022$var$getProto(target);
            const hadKey = proto.has.call(target, value);
            if (!hadKey) {
                target.add(value);
                $ab22efe6fa499022$export$e614dc9140f7ae71(target, "add", value, value);
            }
            return this;
        },
        set (key, value) {
            if (!shallow && !$ab22efe6fa499022$export$7f3fe6025abfa26e(value) && !$ab22efe6fa499022$export$92d09b48637741e7(value)) value = $ab22efe6fa499022$export$ab18938b9fc5f28e(value);
            const target = $ab22efe6fa499022$export$ab18938b9fc5f28e(this);
            const { has: has, get: get } = $ab22efe6fa499022$var$getProto(target);
            let hadKey = has.call(target, key);
            if (!hadKey) {
                key = $ab22efe6fa499022$export$ab18938b9fc5f28e(key);
                hadKey = has.call(target, key);
            } else if (!!(process.env.NODE_ENV !== "production")) $ab22efe6fa499022$var$checkIdentityKeys(target, has, key);
            const oldValue = get.call(target, key);
            target.set(key, value);
            if (!hadKey) $ab22efe6fa499022$export$e614dc9140f7ae71(target, "add", key, value);
            else if ((0, $aba20d5db397affd$export$f619eb8b89076d23)(value, oldValue)) $ab22efe6fa499022$export$e614dc9140f7ae71(target, "set", key, value, oldValue);
            return this;
        },
        delete (key) {
            const target = $ab22efe6fa499022$export$ab18938b9fc5f28e(this);
            const { has: has, get: get } = $ab22efe6fa499022$var$getProto(target);
            let hadKey = has.call(target, key);
            if (!hadKey) {
                key = $ab22efe6fa499022$export$ab18938b9fc5f28e(key);
                hadKey = has.call(target, key);
            } else if (!!(process.env.NODE_ENV !== "production")) $ab22efe6fa499022$var$checkIdentityKeys(target, has, key);
            const oldValue = get ? get.call(target, key) : void 0;
            const result = target.delete(key);
            if (hadKey) $ab22efe6fa499022$export$e614dc9140f7ae71(target, "delete", key, void 0, oldValue);
            return result;
        },
        clear () {
            const target = $ab22efe6fa499022$export$ab18938b9fc5f28e(this);
            const hadItems = target.size !== 0;
            const oldTarget = !!(process.env.NODE_ENV !== "production") ? (0, $aba20d5db397affd$export$5c90113a285f2241)(target) ? new Map(target) : new Set(target) : void 0;
            const result = target.clear();
            if (hadItems) $ab22efe6fa499022$export$e614dc9140f7ae71(target, "clear", void 0, void 0, oldTarget);
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
        instrumentations[method] = $ab22efe6fa499022$var$createIterableMethod(method, readonly, shallow);
    });
    return instrumentations;
}
function $ab22efe6fa499022$var$createInstrumentationGetter(isReadonly2, shallow) {
    const instrumentations = $ab22efe6fa499022$var$createInstrumentations(isReadonly2, shallow);
    return (target, key, receiver)=>{
        if (key === "__v_isReactive") return !isReadonly2;
        else if (key === "__v_isReadonly") return isReadonly2;
        else if (key === "__v_raw") return target;
        return Reflect.get((0, $aba20d5db397affd$export$b5a638e9b3fff9f3)(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
    };
}
const $ab22efe6fa499022$var$mutableCollectionHandlers = {
    get: /* @__PURE__ */ $ab22efe6fa499022$var$createInstrumentationGetter(false, false)
};
const $ab22efe6fa499022$var$shallowCollectionHandlers = {
    get: /* @__PURE__ */ $ab22efe6fa499022$var$createInstrumentationGetter(false, true)
};
const $ab22efe6fa499022$var$readonlyCollectionHandlers = {
    get: /* @__PURE__ */ $ab22efe6fa499022$var$createInstrumentationGetter(true, false)
};
const $ab22efe6fa499022$var$shallowReadonlyCollectionHandlers = {
    get: /* @__PURE__ */ $ab22efe6fa499022$var$createInstrumentationGetter(true, true)
};
function $ab22efe6fa499022$var$checkIdentityKeys(target, has, key) {
    const rawKey = $ab22efe6fa499022$export$ab18938b9fc5f28e(key);
    if (rawKey !== key && has.call(target, rawKey)) {
        const type = (0, $aba20d5db397affd$export$5ad0a3c360b8fbb5)(target);
        $ab22efe6fa499022$var$warn(`Reactive ${type} contains both the raw and reactive versions of the same object${type === `Map` ? ` as keys` : ``}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
    }
}
const $ab22efe6fa499022$var$reactiveMap = /* @__PURE__ */ new WeakMap();
const $ab22efe6fa499022$var$shallowReactiveMap = /* @__PURE__ */ new WeakMap();
const $ab22efe6fa499022$var$readonlyMap = /* @__PURE__ */ new WeakMap();
const $ab22efe6fa499022$var$shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
function $ab22efe6fa499022$var$targetTypeMap(rawType) {
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
function $ab22efe6fa499022$var$getTargetType(value) {
    return value["__v_skip"] || !Object.isExtensible(value) ? 0 /* INVALID */  : $ab22efe6fa499022$var$targetTypeMap((0, $aba20d5db397affd$export$5ad0a3c360b8fbb5)(value));
}
function $ab22efe6fa499022$export$90a44edba14e47be(target) {
    if ($ab22efe6fa499022$export$92d09b48637741e7(target)) return target;
    return $ab22efe6fa499022$var$createReactiveObject(target, false, $ab22efe6fa499022$var$mutableHandlers, $ab22efe6fa499022$var$mutableCollectionHandlers, $ab22efe6fa499022$var$reactiveMap);
}
function $ab22efe6fa499022$export$8d81cefd22d22260(target) {
    return $ab22efe6fa499022$var$createReactiveObject(target, false, $ab22efe6fa499022$var$shallowReactiveHandlers, $ab22efe6fa499022$var$shallowCollectionHandlers, $ab22efe6fa499022$var$shallowReactiveMap);
}
function $ab22efe6fa499022$export$6ec456bd5b7b3c51(target) {
    return $ab22efe6fa499022$var$createReactiveObject(target, true, $ab22efe6fa499022$var$readonlyHandlers, $ab22efe6fa499022$var$readonlyCollectionHandlers, $ab22efe6fa499022$var$readonlyMap);
}
function $ab22efe6fa499022$export$7c4b5f2b50f09f6b(target) {
    return $ab22efe6fa499022$var$createReactiveObject(target, true, $ab22efe6fa499022$var$shallowReadonlyHandlers, $ab22efe6fa499022$var$shallowReadonlyCollectionHandlers, $ab22efe6fa499022$var$shallowReadonlyMap);
}
function $ab22efe6fa499022$var$createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
    if (!(0, $aba20d5db397affd$export$a6cdc56e425d0d0a)(target)) {
        if (!!(process.env.NODE_ENV !== "production")) $ab22efe6fa499022$var$warn(`value cannot be made ${isReadonly2 ? "readonly" : "reactive"}: ${String(target)}`);
        return target;
    }
    if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) return target;
    const targetType = $ab22efe6fa499022$var$getTargetType(target);
    if (targetType === 0 /* INVALID */ ) return target;
    const existingProxy = proxyMap.get(target);
    if (existingProxy) return existingProxy;
    const proxy = new Proxy(target, targetType === 2 /* COLLECTION */  ? collectionHandlers : baseHandlers);
    proxyMap.set(target, proxy);
    return proxy;
}
function $ab22efe6fa499022$export$352205f445242f02(value) {
    if ($ab22efe6fa499022$export$92d09b48637741e7(value)) return $ab22efe6fa499022$export$352205f445242f02(value["__v_raw"]);
    return !!(value && value["__v_isReactive"]);
}
function $ab22efe6fa499022$export$92d09b48637741e7(value) {
    return !!(value && value["__v_isReadonly"]);
}
function $ab22efe6fa499022$export$7f3fe6025abfa26e(value) {
    return !!(value && value["__v_isShallow"]);
}
function $ab22efe6fa499022$export$5f3ca29d057519b3(value) {
    return value ? !!value["__v_raw"] : false;
}
function $ab22efe6fa499022$export$ab18938b9fc5f28e(observed) {
    const raw = observed && observed["__v_raw"];
    return raw ? $ab22efe6fa499022$export$ab18938b9fc5f28e(raw) : observed;
}
function $ab22efe6fa499022$export$995ab8b13ad7a9d0(value) {
    if (!(0, $aba20d5db397affd$export$b5a638e9b3fff9f3)(value, "__v_skip") && Object.isExtensible(value)) (0, $aba20d5db397affd$export$8afb76124cf08683)(value, "__v_skip", true);
    return value;
}
const $ab22efe6fa499022$export$45c769cf449a508c = (value)=>(0, $aba20d5db397affd$export$a6cdc56e425d0d0a)(value) ? $ab22efe6fa499022$export$90a44edba14e47be(value) : value;
const $ab22efe6fa499022$export$4a78e7a2a4fb689f = (value)=>(0, $aba20d5db397affd$export$a6cdc56e425d0d0a)(value) ? $ab22efe6fa499022$export$6ec456bd5b7b3c51(value) : value;
function $ab22efe6fa499022$export$4f9f5282de18fc69(r) {
    return r ? r["__v_isRef"] === true : false;
}
function $ab22efe6fa499022$export$eff4d24c3ff7876e(value) {
    return $ab22efe6fa499022$var$createRef(value, false);
}
function $ab22efe6fa499022$export$9b7bc5fe3b17c8b3(value) {
    return $ab22efe6fa499022$var$createRef(value, true);
}
function $ab22efe6fa499022$var$createRef(rawValue, shallow) {
    if ($ab22efe6fa499022$export$4f9f5282de18fc69(rawValue)) return rawValue;
    return new $ab22efe6fa499022$var$RefImpl(rawValue, shallow);
}
class $ab22efe6fa499022$var$RefImpl {
    constructor(value, isShallow2){
        this.dep = new $ab22efe6fa499022$var$Dep();
        this["__v_isRef"] = true;
        this["__v_isShallow"] = false;
        this._rawValue = isShallow2 ? value : $ab22efe6fa499022$export$ab18938b9fc5f28e(value);
        this._value = isShallow2 ? value : $ab22efe6fa499022$export$45c769cf449a508c(value);
        this["__v_isShallow"] = isShallow2;
    }
    get value() {
        if (!!(process.env.NODE_ENV !== "production")) this.dep.track({
            target: this,
            type: "get",
            key: "value"
        });
        else this.dep.track();
        return this._value;
    }
    set value(newValue) {
        const oldValue = this._rawValue;
        const useDirectValue = this["__v_isShallow"] || $ab22efe6fa499022$export$7f3fe6025abfa26e(newValue) || $ab22efe6fa499022$export$92d09b48637741e7(newValue);
        newValue = useDirectValue ? newValue : $ab22efe6fa499022$export$ab18938b9fc5f28e(newValue);
        if ((0, $aba20d5db397affd$export$f619eb8b89076d23)(newValue, oldValue)) {
            this._rawValue = newValue;
            this._value = useDirectValue ? newValue : $ab22efe6fa499022$export$45c769cf449a508c(newValue);
            if (!!(process.env.NODE_ENV !== "production")) this.dep.trigger({
                target: this,
                type: "set",
                key: "value",
                newValue: newValue,
                oldValue: oldValue
            });
            else this.dep.trigger();
        }
    }
}
function $ab22efe6fa499022$export$f402f86588575ccc(ref2) {
    if (ref2.dep) {
        if (!!(process.env.NODE_ENV !== "production")) ref2.dep.trigger({
            target: ref2,
            type: "set",
            key: "value",
            newValue: ref2._value
        });
        else ref2.dep.trigger();
    }
}
function $ab22efe6fa499022$export$a239a76781616204(ref2) {
    return $ab22efe6fa499022$export$4f9f5282de18fc69(ref2) ? ref2.value : ref2;
}
function $ab22efe6fa499022$export$30bdcc2218aa9458(source) {
    return (0, $aba20d5db397affd$export$f6e2535fb5126e54)(source) ? source() : $ab22efe6fa499022$export$a239a76781616204(source);
}
const $ab22efe6fa499022$var$shallowUnwrapHandlers = {
    get: (target, key, receiver)=>key === "__v_raw" ? target : $ab22efe6fa499022$export$a239a76781616204(Reflect.get(target, key, receiver)),
    set: (target, key, value, receiver)=>{
        const oldValue = target[key];
        if ($ab22efe6fa499022$export$4f9f5282de18fc69(oldValue) && !$ab22efe6fa499022$export$4f9f5282de18fc69(value)) {
            oldValue.value = value;
            return true;
        } else return Reflect.set(target, key, value, receiver);
    }
};
function $ab22efe6fa499022$export$f353fd1b97db3fa0(objectWithRefs) {
    return $ab22efe6fa499022$export$352205f445242f02(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, $ab22efe6fa499022$var$shallowUnwrapHandlers);
}
class $ab22efe6fa499022$var$CustomRefImpl {
    constructor(factory){
        this["__v_isRef"] = true;
        this._value = void 0;
        const dep = this.dep = new $ab22efe6fa499022$var$Dep();
        const { get: get, set: set } = factory(dep.track.bind(dep), dep.trigger.bind(dep));
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
function $ab22efe6fa499022$export$a20c2dd6199824cb(factory) {
    return new $ab22efe6fa499022$var$CustomRefImpl(factory);
}
function $ab22efe6fa499022$export$2e9533675e5e70e0(object) {
    if (!!(process.env.NODE_ENV !== "production") && !$ab22efe6fa499022$export$5f3ca29d057519b3(object)) $ab22efe6fa499022$var$warn(`toRefs() expects a reactive object but received a plain one.`);
    const ret = (0, $aba20d5db397affd$export$43bee75e5e14138e)(object) ? new Array(object.length) : {};
    for(const key in object)ret[key] = $ab22efe6fa499022$var$propertyToRef(object, key);
    return ret;
}
class $ab22efe6fa499022$var$ObjectRefImpl {
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
        return $ab22efe6fa499022$var$getDepFromReactive($ab22efe6fa499022$export$ab18938b9fc5f28e(this._object), this._key);
    }
}
class $ab22efe6fa499022$var$GetterRefImpl {
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
function $ab22efe6fa499022$export$1f60508e4f47b4b7(source, key, defaultValue) {
    if ($ab22efe6fa499022$export$4f9f5282de18fc69(source)) return source;
    else if ((0, $aba20d5db397affd$export$f6e2535fb5126e54)(source)) return new $ab22efe6fa499022$var$GetterRefImpl(source);
    else if ((0, $aba20d5db397affd$export$a6cdc56e425d0d0a)(source) && arguments.length > 1) return $ab22efe6fa499022$var$propertyToRef(source, key, defaultValue);
    else return $ab22efe6fa499022$export$eff4d24c3ff7876e(source);
}
function $ab22efe6fa499022$var$propertyToRef(source, key, defaultValue) {
    const val = source[key];
    return $ab22efe6fa499022$export$4f9f5282de18fc69(val) ? val : new $ab22efe6fa499022$var$ObjectRefImpl(source, key, defaultValue);
}
class $ab22efe6fa499022$var$ComputedRefImpl {
    constructor(fn, setter, isSSR){
        this.fn = fn;
        this.setter = setter;
        /**
     * @internal
     */ this._value = void 0;
        /**
     * @internal
     */ this.dep = new $ab22efe6fa499022$var$Dep(this);
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
     */ this.globalVersion = $ab22efe6fa499022$var$globalVersion - 1;
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
        $ab22efe6fa499022$var$activeSub !== this) {
            $ab22efe6fa499022$var$batch(this, true);
            return true;
        } else process.env.NODE_ENV;
    }
    get value() {
        const link = !!(process.env.NODE_ENV !== "production") ? this.dep.track({
            target: this,
            type: "get",
            key: "value"
        }) : this.dep.track();
        $ab22efe6fa499022$var$refreshComputed(this);
        if (link) link.version = this.dep.version;
        return this._value;
    }
    set value(newValue) {
        if (this.setter) this.setter(newValue);
        else if (!!(process.env.NODE_ENV !== "production")) $ab22efe6fa499022$var$warn("Write operation failed: computed value is readonly");
    }
}
function $ab22efe6fa499022$export$2983e091f1a1e8e2(getterOrOptions, debugOptions, isSSR = false) {
    let getter;
    let setter;
    if ((0, $aba20d5db397affd$export$f6e2535fb5126e54)(getterOrOptions)) getter = getterOrOptions;
    else {
        getter = getterOrOptions.get;
        setter = getterOrOptions.set;
    }
    const cRef = new $ab22efe6fa499022$var$ComputedRefImpl(getter, setter, isSSR);
    if (!!(process.env.NODE_ENV !== "production") && debugOptions && !isSSR) {
        cRef.onTrack = debugOptions.onTrack;
        cRef.onTrigger = debugOptions.onTrigger;
    }
    return cRef;
}
const $ab22efe6fa499022$export$2ac2bd0a56e04551 = {
    "GET": "get",
    "HAS": "has",
    "ITERATE": "iterate"
};
const $ab22efe6fa499022$export$1e8941c92696a26 = {
    "SET": "set",
    "ADD": "add",
    "DELETE": "delete",
    "CLEAR": "clear"
};
const $ab22efe6fa499022$export$e738ba173768902d = {
    "SKIP": "__v_skip",
    "IS_REACTIVE": "__v_isReactive",
    "IS_READONLY": "__v_isReadonly",
    "IS_SHALLOW": "__v_isShallow",
    "RAW": "__v_raw",
    "IS_REF": "__v_isRef"
};
const $ab22efe6fa499022$export$c54ef203cb79e75f = {
    "WATCH_GETTER": 2,
    "2": "WATCH_GETTER",
    "WATCH_CALLBACK": 3,
    "3": "WATCH_CALLBACK",
    "WATCH_CLEANUP": 4,
    "4": "WATCH_CLEANUP"
};
const $ab22efe6fa499022$var$INITIAL_WATCHER_VALUE = {};
const $ab22efe6fa499022$var$cleanupMap = /* @__PURE__ */ new WeakMap();
let $ab22efe6fa499022$var$activeWatcher = void 0;
function $ab22efe6fa499022$export$2532f7acfca7c82d() {
    return $ab22efe6fa499022$var$activeWatcher;
}
function $ab22efe6fa499022$export$8ddeeb083684a9d0(cleanupFn, failSilently = false, owner = $ab22efe6fa499022$var$activeWatcher) {
    if (owner) {
        let cleanups = $ab22efe6fa499022$var$cleanupMap.get(owner);
        if (!cleanups) $ab22efe6fa499022$var$cleanupMap.set(owner, cleanups = []);
        cleanups.push(cleanupFn);
    } else if (!!(process.env.NODE_ENV !== "production") && !failSilently) $ab22efe6fa499022$var$warn(`onWatcherCleanup() was called when there was no active watcher to associate with.`);
}
function $ab22efe6fa499022$export$3db5d71bdb2d5499(source, cb, options = (0, $aba20d5db397affd$export$cf583d23ab39677c)) {
    const { immediate: immediate, deep: deep, once: once, scheduler: scheduler, augmentJob: augmentJob, call: call } = options;
    const warnInvalidSource = (s)=>{
        (options.onWarn || $ab22efe6fa499022$var$warn)(`Invalid watch source: `, s, `A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.`);
    };
    const reactiveGetter = (source2)=>{
        if (deep) return source2;
        if ($ab22efe6fa499022$export$7f3fe6025abfa26e(source2) || deep === false || deep === 0) return $ab22efe6fa499022$export$df3f009e3d155b20(source2, 1);
        return $ab22efe6fa499022$export$df3f009e3d155b20(source2);
    };
    let effect;
    let getter;
    let cleanup;
    let boundCleanup;
    let forceTrigger = false;
    let isMultiSource = false;
    if ($ab22efe6fa499022$export$4f9f5282de18fc69(source)) {
        getter = ()=>source.value;
        forceTrigger = $ab22efe6fa499022$export$7f3fe6025abfa26e(source);
    } else if ($ab22efe6fa499022$export$352205f445242f02(source)) {
        getter = ()=>reactiveGetter(source);
        forceTrigger = true;
    } else if ((0, $aba20d5db397affd$export$43bee75e5e14138e)(source)) {
        isMultiSource = true;
        forceTrigger = source.some((s)=>$ab22efe6fa499022$export$352205f445242f02(s) || $ab22efe6fa499022$export$7f3fe6025abfa26e(s));
        getter = ()=>source.map((s)=>{
                if ($ab22efe6fa499022$export$4f9f5282de18fc69(s)) return s.value;
                else if ($ab22efe6fa499022$export$352205f445242f02(s)) return reactiveGetter(s);
                else if ((0, $aba20d5db397affd$export$f6e2535fb5126e54)(s)) return call ? call(s, 2) : s();
                else !!(process.env.NODE_ENV !== "production") && warnInvalidSource(s);
            });
    } else if ((0, $aba20d5db397affd$export$f6e2535fb5126e54)(source)) {
        if (cb) getter = call ? ()=>call(source, 2) : source;
        else getter = ()=>{
            if (cleanup) {
                $ab22efe6fa499022$export$938a971395fef855();
                try {
                    cleanup();
                } finally{
                    $ab22efe6fa499022$export$c39176b1babaa8b8();
                }
            }
            const currentEffect = $ab22efe6fa499022$var$activeWatcher;
            $ab22efe6fa499022$var$activeWatcher = effect;
            try {
                return call ? call(source, 3, [
                    boundCleanup
                ]) : source(boundCleanup);
            } finally{
                $ab22efe6fa499022$var$activeWatcher = currentEffect;
            }
        };
    } else {
        getter = (0, $aba20d5db397affd$export$5702a91a6f42969f);
        !!(process.env.NODE_ENV !== "production") && warnInvalidSource(source);
    }
    if (cb && deep) {
        const baseGetter = getter;
        const depth = deep === true ? Infinity : deep;
        getter = ()=>$ab22efe6fa499022$export$df3f009e3d155b20(baseGetter(), depth);
    }
    const scope = $ab22efe6fa499022$export$c7be4b0125a10cba();
    const watchHandle = ()=>{
        effect.stop();
        if (scope && scope.active) (0, $aba20d5db397affd$export$cd7f480d6b8286c3)(scope.effects, effect);
    };
    if (once && cb) {
        const _cb = cb;
        cb = (...args)=>{
            _cb(...args);
            watchHandle();
        };
    }
    let oldValue = isMultiSource ? new Array(source.length).fill($ab22efe6fa499022$var$INITIAL_WATCHER_VALUE) : $ab22efe6fa499022$var$INITIAL_WATCHER_VALUE;
    const job = (immediateFirstRun)=>{
        if (!(effect.flags & 1) || !effect.dirty && !immediateFirstRun) return;
        if (cb) {
            const newValue = effect.run();
            if (deep || forceTrigger || (isMultiSource ? newValue.some((v, i)=>(0, $aba20d5db397affd$export$f619eb8b89076d23)(v, oldValue[i])) : (0, $aba20d5db397affd$export$f619eb8b89076d23)(newValue, oldValue))) {
                if (cleanup) cleanup();
                const currentWatcher = $ab22efe6fa499022$var$activeWatcher;
                $ab22efe6fa499022$var$activeWatcher = effect;
                try {
                    const args = [
                        newValue,
                        // pass undefined as the old value when it's changed for the first time
                        oldValue === $ab22efe6fa499022$var$INITIAL_WATCHER_VALUE ? void 0 : isMultiSource && oldValue[0] === $ab22efe6fa499022$var$INITIAL_WATCHER_VALUE ? [] : oldValue,
                        boundCleanup
                    ];
                    oldValue = newValue;
                    call ? call(cb, 3, args) : // @ts-expect-error
                    cb(...args);
                } finally{
                    $ab22efe6fa499022$var$activeWatcher = currentWatcher;
                }
            }
        } else effect.run();
    };
    if (augmentJob) augmentJob(job);
    effect = new $ab22efe6fa499022$export$28352bb4dd362521(getter);
    effect.scheduler = scheduler ? ()=>scheduler(job, false) : job;
    boundCleanup = (fn)=>$ab22efe6fa499022$export$8ddeeb083684a9d0(fn, false, effect);
    cleanup = effect.onStop = ()=>{
        const cleanups = $ab22efe6fa499022$var$cleanupMap.get(effect);
        if (cleanups) {
            if (call) call(cleanups, 4);
            else for (const cleanup2 of cleanups)cleanup2();
            $ab22efe6fa499022$var$cleanupMap.delete(effect);
        }
    };
    if (!!(process.env.NODE_ENV !== "production")) {
        effect.onTrack = options.onTrack;
        effect.onTrigger = options.onTrigger;
    }
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
function $ab22efe6fa499022$export$df3f009e3d155b20(value, depth = Infinity, seen) {
    if (depth <= 0 || !(0, $aba20d5db397affd$export$a6cdc56e425d0d0a)(value) || value["__v_skip"]) return value;
    seen = seen || /* @__PURE__ */ new Set();
    if (seen.has(value)) return value;
    seen.add(value);
    depth--;
    if ($ab22efe6fa499022$export$4f9f5282de18fc69(value)) $ab22efe6fa499022$export$df3f009e3d155b20(value.value, depth, seen);
    else if ((0, $aba20d5db397affd$export$43bee75e5e14138e)(value)) for(let i = 0; i < value.length; i++)$ab22efe6fa499022$export$df3f009e3d155b20(value[i], depth, seen);
    else if ((0, $aba20d5db397affd$export$6750766a7c7ec627)(value) || (0, $aba20d5db397affd$export$5c90113a285f2241)(value)) value.forEach((v)=>{
        $ab22efe6fa499022$export$df3f009e3d155b20(v, depth, seen);
    });
    else if ((0, $aba20d5db397affd$export$53b83ca8eaab0383)(value)) {
        for(const key in value)$ab22efe6fa499022$export$df3f009e3d155b20(value[key], depth, seen);
        for (const key of Object.getOwnPropertySymbols(value))if (Object.prototype.propertyIsEnumerable.call(value, key)) $ab22efe6fa499022$export$df3f009e3d155b20(value[key], depth, seen);
    }
    return value;
}



const $370754aea5bc9e6a$export$dc573d8a6576cdb3 = (callback)=>(0, $ab22efe6fa499022$export$dc573d8a6576cdb3)(callback, {
        scheduler: (0, $8d51fac66e0b4c1b$export$d30788f2c20241cd)((task)=>task)
    });
function $370754aea5bc9e6a$export$1ecd3170301acce1(el) {
    let cleanup = ()=>{};
    let wrappedEffect = (callback)=>{
        let effectReference = $370754aea5bc9e6a$export$dc573d8a6576cdb3(callback);
        if (!el.__stimulusX_effects) el.__stimulusX_effects = new Set();
        el.__stimulusX_effects.add(effectReference);
        cleanup = ()=>{
            if (effectReference === undefined) return;
            el.__stimulusX_effects.delete(effectReference);
            (0, $ab22efe6fa499022$export$fa6813432f753b0d)(effectReference);
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
function $370754aea5bc9e6a$export$3db5d71bdb2d5499(getter, callback) {
    let firstTime = true;
    let oldValue;
    let effectReference = $370754aea5bc9e6a$export$dc573d8a6576cdb3(()=>{
        let value = getter();
        // JSON.stringify touches every single property at any level enabling deep watching
        JSON.stringify(value);
        if (!firstTime) // We have to queue this watcher as a microtask so that
        // the watcher doesn't pick up its own dependencies.
        queueMicrotask(()=>{
            callback(value, oldValue);
            oldValue = value;
        });
        else oldValue = value;
        firstTime = false;
    });
    return ()=>(0, $ab22efe6fa499022$export$fa6813432f753b0d)(effectReference);
}



const $331937ba118c934e$var$isObject = (value)=>{
    const type = typeof value;
    return value !== null && (type === 'object' || type === 'function');
};
const $331937ba118c934e$var$isEmptyObject = (value)=>$331937ba118c934e$var$isObject(value) && Object.keys(value).length === 0;
const $331937ba118c934e$var$disallowedKeys = new Set([
    '__proto__',
    'prototype',
    'constructor'
]);
const $331937ba118c934e$var$digits = new Set('0123456789');
function $331937ba118c934e$var$getPathSegments(path) {
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
            if ($331937ba118c934e$var$disallowedKeys.has(currentSegment)) return [];
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
                if ($331937ba118c934e$var$disallowedKeys.has(currentSegment)) return [];
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
            if (currentPart === 'index' && !$331937ba118c934e$var$digits.has(character)) throw new Error('Invalid character in an index');
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
            if ($331937ba118c934e$var$disallowedKeys.has(currentSegment)) return [];
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
function $331937ba118c934e$var$isStringIndex(object, key) {
    if (typeof key !== 'number' && Array.isArray(object)) {
        const index = Number.parseInt(key, 10);
        return Number.isInteger(index) && object[index] === object[key];
    }
    return false;
}
function $331937ba118c934e$var$assertNotStringIndex(object, key) {
    if ($331937ba118c934e$var$isStringIndex(object, key)) throw new Error('Cannot use string index');
}
function $331937ba118c934e$export$63ef76b19cf4a753(object, path, value) {
    if (!$331937ba118c934e$var$isObject(object) || typeof path !== 'string') return value === undefined ? object : value;
    const pathArray = $331937ba118c934e$var$getPathSegments(path);
    if (pathArray.length === 0) return value;
    for(let index = 0; index < pathArray.length; index++){
        const key = pathArray[index];
        if ($331937ba118c934e$var$isStringIndex(object, key)) object = index === pathArray.length - 1 ? undefined : null;
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
function $331937ba118c934e$export$a41c68a4eb5ff164(object, path, value) {
    if (!$331937ba118c934e$var$isObject(object) || typeof path !== 'string') return object;
    const root = object;
    const pathArray = $331937ba118c934e$var$getPathSegments(path);
    for(let index = 0; index < pathArray.length; index++){
        const key = pathArray[index];
        $331937ba118c934e$var$assertNotStringIndex(object, key);
        if (index === pathArray.length - 1) object[key] = value;
        else if (!$331937ba118c934e$var$isObject(object[key])) object[key] = typeof pathArray[index + 1] === 'number' ? [] : {};
        object = object[key];
    }
    return root;
}
function $331937ba118c934e$export$2fae62fb628b9c68(object, path) {
    if (!$331937ba118c934e$var$isObject(object) || typeof path !== 'string') return false;
    const pathArray = $331937ba118c934e$var$getPathSegments(path);
    for(let index = 0; index < pathArray.length; index++){
        const key = pathArray[index];
        $331937ba118c934e$var$assertNotStringIndex(object, key);
        if (index === pathArray.length - 1) {
            delete object[key];
            return true;
        }
        object = object[key];
        if (!$331937ba118c934e$var$isObject(object)) return false;
    }
}
function $331937ba118c934e$export$bf9617eaf5d2451(object, path) {
    if (!$331937ba118c934e$var$isObject(object) || typeof path !== 'string') return false;
    const pathArray = $331937ba118c934e$var$getPathSegments(path);
    if (pathArray.length === 0) return false;
    for (const key of pathArray){
        if (!$331937ba118c934e$var$isObject(object) || !(key in object) || $331937ba118c934e$var$isStringIndex(object, key)) return false;
        object = object[key];
    }
    return true;
}
function $331937ba118c934e$export$b36556ce4a09dde6(path) {
    if (typeof path !== 'string') throw new TypeError('Expected a string');
    return path.replaceAll(/[\\.[]/g, '\\$&');
}
// The keys returned by Object.entries() for arrays are strings
function $331937ba118c934e$var$entries(value) {
    const result = Object.entries(value);
    if (Array.isArray(value)) return result.map(([key, value])=>[
            Number(key),
            value
        ]);
    return result;
}
function $331937ba118c934e$var$stringifyPath(pathSegments) {
    let result = '';
    for (let [index, segment] of $331937ba118c934e$var$entries(pathSegments))if (typeof segment === 'number') result += `[${segment}]`;
    else {
        segment = $331937ba118c934e$export$b36556ce4a09dde6(segment);
        result += index === 0 ? segment : `.${segment}`;
    }
    return result;
}
function* $331937ba118c934e$var$deepKeysIterator(object, currentPath = []) {
    if (!$331937ba118c934e$var$isObject(object) || $331937ba118c934e$var$isEmptyObject(object)) {
        if (currentPath.length > 0) yield $331937ba118c934e$var$stringifyPath(currentPath);
        return;
    }
    for (const [key, value] of $331937ba118c934e$var$entries(object))yield* $331937ba118c934e$var$deepKeysIterator(value, [
        ...currentPath,
        key
    ]);
}
function $331937ba118c934e$export$13f626a1d0c23ea1(object) {
    return [
        ...$331937ba118c934e$var$deepKeysIterator(object)
    ];
}




function $175c8aaa8bb7371e$export$d56142fa17014959(ControllerClass) {
    return class extends ControllerClass {
        constructor(context){
            super(context);
            // Override the attribute setter so that our mutation observer doesn't pick up on changes
            // that are also already being handled directly by Stimulus.
            const setData = this.data.set;
            this.data.set = (key, value)=>{
                (0, $46a1f2608b4b91f0$export$c98382a3d82f9519)(()=>setData.call(this.data, key, value));
            };
            // Create a reactive controller object
            const self = (0, $ab22efe6fa499022$export$90a44edba14e47be)(this);
            // Initialize watched property callbacks
            const watchedProps = this.constructor.watch || [];
            watchedProps.forEach((prop)=>$175c8aaa8bb7371e$export$dcc3676fc96ef4c(self, prop));
            // Return the reactive controller instance
            return self;
        }
    };
}
function $175c8aaa8bb7371e$export$6d5f0ef1727b562e(el, identifier, application) {
    const controllerElement = el.closest(`[data-controller~="${identifier}"]`);
    if (controllerElement) return application.getControllerForElementAndIdentifier(controllerElement, identifier);
}
function $175c8aaa8bb7371e$export$121af9acc174ac93(controller, property) {
    let value = (0, $331937ba118c934e$export$63ef76b19cf4a753)(controller, property);
    if (typeof value === "function") value = value.apply(controller);
    return value;
}
function $175c8aaa8bb7371e$export$dcc3676fc96ef4c(controller, propertyRef) {
    const getter = ()=>$175c8aaa8bb7371e$export$121af9acc174ac93(controller, propertyRef);
    const cleanup = (0, $370754aea5bc9e6a$export$3db5d71bdb2d5499)(getter, (value, oldValue)=>{
        $175c8aaa8bb7371e$var$callCallbacks(controller, propertyRef, value, oldValue, false);
    });
    // Run once on creation
    $175c8aaa8bb7371e$var$callCallbacks(controller, propertyRef, getter(), undefined, true);
    const rootElement = controller.element;
    if (!rootElement.__stimulusX_cleanups) rootElement.__stimulusX_cleanups = [];
    rootElement.__stimulusX_cleanups.push(cleanup);
}
function $175c8aaa8bb7371e$var$callCallbacks(controller, propertyRef, value, oldValue, initial) {
    // Generic callback, called when _any_ watched property changes
    if (typeof controller.watchedPropertyChanged === "function") controller.watchedPropertyChanged(propertyRef, value, oldValue, {
        initial: initial
    });
    // Property-specific change callback
    const propertyWatcherCallback = controller[`${$175c8aaa8bb7371e$var$getCamelizedPropertyRef(propertyRef)}PropertyChanged`];
    if (typeof propertyWatcherCallback === "function") propertyWatcherCallback.call(controller, value, oldValue, {
        initial: initial
    });
}
function $175c8aaa8bb7371e$var$getCamelizedPropertyRef(propertyRef) {
    return $175c8aaa8bb7371e$var$camelCase(propertyRef.replace(".", " "));
}
function $175c8aaa8bb7371e$var$camelCase(subject) {
    return subject.toLowerCase().replace(/-(\w)/g, (match, char)=>char.toUpperCase());
}


let $d15872fa2e35871a$var$directiveHandlers = {};
let $d15872fa2e35871a$var$isDeferringHandlers = false;
let $d15872fa2e35871a$var$directiveHandlerStacks = new Map();
let $d15872fa2e35871a$var$currentHandlerStackKey = Symbol();
let $d15872fa2e35871a$var$attributePrefix = "data-bind-";
function $d15872fa2e35871a$export$99b43ad1ed32e735(name, callback) {
    $d15872fa2e35871a$var$directiveHandlers[name] = callback;
}
function $d15872fa2e35871a$export$19b57a1ea2e090cb(name) {
    return Object.keys($d15872fa2e35871a$var$directiveHandlers).includes(name);
}
function $d15872fa2e35871a$export$90a684c00f3df6ed(el, attributes) {
    const directives = Array.from(attributes).filter($d15872fa2e35871a$var$isDirectiveAttribute).map($d15872fa2e35871a$var$toParsedDirectives);
    return directives.flat().map((directive)=>$d15872fa2e35871a$export$1dd40105af141b08(el, directive));
}
function $d15872fa2e35871a$export$3d81bdeca067fd2d(callback) {
    $d15872fa2e35871a$var$isDeferringHandlers = true;
    let key = Symbol();
    $d15872fa2e35871a$var$currentHandlerStackKey = key;
    $d15872fa2e35871a$var$directiveHandlerStacks.set(key, []);
    let flushHandlers = ()=>{
        while($d15872fa2e35871a$var$directiveHandlerStacks.get(key).length)$d15872fa2e35871a$var$directiveHandlerStacks.get(key).shift()();
        $d15872fa2e35871a$var$directiveHandlerStacks.delete(key);
    };
    let stopDeferring = ()=>{
        $d15872fa2e35871a$var$isDeferringHandlers = false;
        flushHandlers();
    };
    callback(flushHandlers);
    stopDeferring();
}
function $d15872fa2e35871a$export$a51f92c9c1609d03(el) {
    let cleanups = [];
    let cleanup = (callback)=>cleanups.push(callback);
    let [effect, cleanupEffect] = (0, $370754aea5bc9e6a$export$1ecd3170301acce1)(el);
    cleanups.push(cleanupEffect);
    let utilities = {
        effect: effect,
        cleanup: cleanup
    };
    let doCleanup = ()=>{
        cleanups.forEach((i)=>i());
    };
    return [
        utilities,
        doCleanup
    ];
}
function $d15872fa2e35871a$export$1dd40105af141b08(el, directive) {
    let handler = $d15872fa2e35871a$var$directiveHandlers[directive.type] || (()=>{});
    let [utilities, cleanup] = $d15872fa2e35871a$export$a51f92c9c1609d03(el);
    (0, $46a1f2608b4b91f0$export$5d89a587b01747c6)(el, directive.attr, cleanup);
    let wrapperHandler = (application)=>{
        let controller = (0, $175c8aaa8bb7371e$export$6d5f0ef1727b562e)(el, directive.identifier, application);
        if (controller) {
            handler = handler.bind(handler, el, directive, {
                ...utilities,
                evaluate: $d15872fa2e35871a$var$evaluator(controller),
                modify: (0, $76daf8d022148001$export$f1696300e8775372)
            });
            $d15872fa2e35871a$var$isDeferringHandlers ? $d15872fa2e35871a$var$directiveHandlerStacks.get($d15872fa2e35871a$var$currentHandlerStackKey).push(handler) : handler();
        } else console.error(`Controller '${directive.indentifier}' not found`);
    };
    return wrapperHandler;
}
function $d15872fa2e35871a$var$evaluator(controller) {
    return (property)=>(0, $175c8aaa8bb7371e$export$121af9acc174ac93)(controller, property);
}
function $d15872fa2e35871a$var$matchedAttributeRegex() {
    return new RegExp(`${$d15872fa2e35871a$var$attributePrefix}(${Object.keys($d15872fa2e35871a$var$directiveHandlers).join("|")})$`);
}
function $d15872fa2e35871a$var$isDirectiveAttribute({ name: name }) {
    return $d15872fa2e35871a$var$matchedAttributeRegex().test(name);
}
function $d15872fa2e35871a$var$toParsedDirectives({ name: name, value: value }) {
    const type = name.match($d15872fa2e35871a$var$matchedAttributeRegex())[1];
    const bindingExpressions = value.trim().split(/\s+/).filter((e)=>e);
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
            type: type,
            subject: subject,
            modifiers: modifiers,
            identifier: identifier,
            property: property,
            attr: name
        };
    });
}




function $88fd31ba9313240f$export$8a7688a96d852767(subject) {
    return subject.replace(/:/g, "_").split("_").map((word, index)=>index === 0 ? word : word[0].toUpperCase() + word.slice(1)).join("");
}
function $88fd31ba9313240f$export$588732934346abbf(el, callback) {
    let skip = false;
    callback(el, ()=>skip = true);
    if (skip) return;
    let node = el.firstElementChild;
    while(node){
        $88fd31ba9313240f$export$588732934346abbf(node, callback, false);
        node = node.nextElementSibling;
    }
}



const $694a8ddd6f476c7f$var$StimulusX = {};
let $694a8ddd6f476c7f$var$markerCount = 1;
$694a8ddd6f476c7f$var$StimulusX.extend = function(application) {
    this.application = application;
    // Override controller registration to insert a reactive subclass instead of the original
    application.register = function(identifier, ControllerClass) {
        const controllerConstructor = (0, $175c8aaa8bb7371e$export$d56142fa17014959)(ControllerClass, application);
        application.load({
            identifier: identifier,
            controllerConstructor: controllerConstructor
        });
    };
    (0, $46a1f2608b4b91f0$export$1a5ae5db40475a2d)();
    (0, $46a1f2608b4b91f0$export$c395e4fde41c37ff)((el)=>$694a8ddd6f476c7f$var$initTree(el));
    (0, $46a1f2608b4b91f0$export$bb8862ef847f5ec0)((el)=>$694a8ddd6f476c7f$var$destroyTree(el));
    (0, $46a1f2608b4b91f0$export$545f7104b1510552)((el, attrs)=>{
        $694a8ddd6f476c7f$var$handleValueAttributes(el, attrs);
        (0, $d15872fa2e35871a$export$90a684c00f3df6ed)(el, attrs).forEach((handle)=>handle($694a8ddd6f476c7f$var$StimulusX.application));
    });
    (0, $8d51fac66e0b4c1b$export$bdd553fddd433dcb)(()=>{
        $694a8ddd6f476c7f$var$rootElements().forEach((el)=>$694a8ddd6f476c7f$var$initTree(el));
    });
};
$694a8ddd6f476c7f$var$StimulusX.modifier = (0, $76daf8d022148001$export$cd4b50bb4e5c05a3);
$694a8ddd6f476c7f$var$StimulusX.directive = (0, $d15872fa2e35871a$export$99b43ad1ed32e735);
function $694a8ddd6f476c7f$var$rootElements() {
    return Array.from(document.querySelectorAll("[data-controller]:not([data-controller] [data-controller])"));
}
function $694a8ddd6f476c7f$var$initTree(el) {
    (0, $d15872fa2e35871a$export$3d81bdeca067fd2d)(()=>{
        (0, $88fd31ba9313240f$export$588732934346abbf)(el, (el)=>{
            if (el.__stimulusX_marker) return;
            (0, $d15872fa2e35871a$export$90a684c00f3df6ed)(el, el.attributes).forEach((handle)=>handle($694a8ddd6f476c7f$var$StimulusX.application));
            el.__stimulusX_marker = $694a8ddd6f476c7f$var$markerCount++;
        });
    });
}
function $694a8ddd6f476c7f$var$destroyTree(root) {
    (0, $88fd31ba9313240f$export$588732934346abbf)(root, (el)=>{
        (0, $46a1f2608b4b91f0$export$21fc366069a4f56f)(el);
        (0, $46a1f2608b4b91f0$export$2c8bfe603cc113da)(el);
        delete el.__stimulusX_marker;
    });
}
// Changes to controller value attributes in the DOM do not call
// any properties on the controller so changes are not detected.
// To fix this any value attribute changes are registered by calling
// the value setter on the proxy with the current value - the value is
// unchanged but calling the getter triggers any related effects.
function $694a8ddd6f476c7f$var$handleValueAttributes(el, attrs) {
    if (!el.hasAttribute("data-controller")) return;
    const controllerNames = el.getAttribute("data-controller").trim().split(" ").filter((e)=>e);
    const valueAttributeMatcher = new RegExp(`^data-(${controllerNames.join("|")})-([a-zA-Z0-9\-_]+)-value$`);
    for(let i = 0; i < attrs.length; i++){
        const attr = attrs[i];
        const matches = attr.name.match(valueAttributeMatcher);
        if (matches && matches.length) {
            const identifier = matches[1];
            const valueName = matches[2];
            const controller = $694a8ddd6f476c7f$var$StimulusX.application.getControllerForElementAndIdentifier(el, identifier);
            (0, $46a1f2608b4b91f0$export$c98382a3d82f9519)(()=>{
                controller[`${valueName}Value`] = controller[`${valueName}Value`];
            });
        }
    }
}
var $694a8ddd6f476c7f$export$2e2bcd8739ae039 = $694a8ddd6f476c7f$var$StimulusX;



(0, $76daf8d022148001$export$cd4b50bb4e5c05a3)("downcase", (value)=>value.toString().toLowerCase());



(0, $76daf8d022148001$export$cd4b50bb4e5c05a3)("not", (value)=>!value);



(0, $76daf8d022148001$export$cd4b50bb4e5c05a3)("upcase", (value)=>value.toString().toUpperCase());




function $f420297d66a6359d$export$2706f8d45625eda6(el, value) {
    if (Array.isArray(value)) return $f420297d66a6359d$var$setClassesFromString(el, value.join(" "));
    else if (typeof value === "object" && value !== null) return $f420297d66a6359d$var$setClassesFromObject(el, value);
    return $f420297d66a6359d$var$setClassesFromString(el, value);
}
function $f420297d66a6359d$var$setClassesFromString(el, classString) {
    classString = classString || "";
    let missingClasses = (classString)=>classString.split(" ").filter((i)=>!el.classList.contains(i)).filter(Boolean);
    let classes = missingClasses(classString);
    el.classList.add(...classes);
    return ()=>el.classList.remove(...classes);
}
function $f420297d66a6359d$var$setClassesFromObject(el, classObject) {
    let split = (classString)=>classString.split(" ").filter(Boolean);
    let forAdd = Object.entries(classObject).flatMap(([classString, bool])=>bool ? split(classString) : false).filter(Boolean);
    let forRemove = Object.entries(classObject).flatMap(([classString, bool])=>!bool ? split(classString) : false).filter(Boolean);
    let added = [];
    let removed = [];
    forRemove.forEach((i)=>{
        if (el.classList.contains(i)) {
            el.classList.remove(i);
            removed.push(i);
        }
    });
    forAdd.forEach((i)=>{
        if (!el.classList.contains(i)) {
            el.classList.add(i);
            added.push(i);
        }
    });
    return ()=>{
        removed.forEach((i)=>el.classList.add(i));
        added.forEach((i)=>el.classList.remove(i));
    };
}


// As per HTML spec table https://html.spec.whatwg.org/multipage/indices.html#attributes-3:boolean-attribute
const $cb81467d4cb40cb5$var$booleanAttributes = new Set([
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
const $cb81467d4cb40cb5$var$preserveIfFalsey = [
    "aria-pressed",
    "aria-checked",
    "aria-expanded",
    "aria-selected"
];
function $cb81467d4cb40cb5$export$2385a24977818dd0(element, name, value) {
    switch(name){
        case "class":
            $cb81467d4cb40cb5$var$bindClasses(element, value);
            break;
        case "checked":
        case "selected":
            $cb81467d4cb40cb5$var$bindAttributeAndProperty(element, name, value);
            break;
        default:
            $cb81467d4cb40cb5$var$bindAttribute(element, name, value);
            break;
    }
}
function $cb81467d4cb40cb5$var$bindClasses(element, value) {
    if (element.__stimulusX_undoClasses) element.__stimulusX_undoClasses();
    element.__stimulusX_undoClasses = (0, $f420297d66a6359d$export$2706f8d45625eda6)(element, value);
}
function $cb81467d4cb40cb5$var$bindAttribute(el, name, value) {
    if ([
        null,
        undefined,
        false
    ].includes(value) && $cb81467d4cb40cb5$var$attributeShouldntBePreservedIfFalsy(name)) el.removeAttribute(name);
    else {
        if ($cb81467d4cb40cb5$var$isBooleanAttr(name)) value = name;
        $cb81467d4cb40cb5$var$setIfChanged(el, name, value);
    }
}
function $cb81467d4cb40cb5$var$bindAttributeAndProperty(el, name, value) {
    $cb81467d4cb40cb5$var$bindAttribute(el, name, value);
    $cb81467d4cb40cb5$var$setPropertyIfChanged(el, name, value);
}
function $cb81467d4cb40cb5$var$setIfChanged(el, attrName, value) {
    if (el.getAttribute(attrName) != value) el.setAttribute(attrName, value);
}
function $cb81467d4cb40cb5$var$setPropertyIfChanged(el, propName, value) {
    if (el[propName] !== value) el[propName] = value;
}
function $cb81467d4cb40cb5$var$isBooleanAttr(attrName) {
    return $cb81467d4cb40cb5$var$booleanAttributes.has(attrName);
}
function $cb81467d4cb40cb5$var$attributeShouldntBePreservedIfFalsy(name) {
    return !$cb81467d4cb40cb5$var$preserveIfFalsey.includes(name);
}


(0, $d15872fa2e35871a$export$99b43ad1ed32e735)("attr", (el, { property: property, subject: subject, modifiers: modifiers }, { effect: effect, evaluate: evaluate, modify: modify })=>{
    effect(()=>{
        (0, $46a1f2608b4b91f0$export$c98382a3d82f9519)(()=>{
            const value = modify(evaluate(property), modifiers);
            (0, $cb81467d4cb40cb5$export$2385a24977818dd0)(el, subject, value);
        });
    });
});




(0, $d15872fa2e35871a$export$99b43ad1ed32e735)("text", (el, { property: property, modifiers: modifiers }, { effect: effect, evaluate: evaluate, modify: modify })=>{
    effect(()=>(0, $46a1f2608b4b91f0$export$c98382a3d82f9519)(()=>{
            const value = modify(evaluate(property), modifiers);
            el.textContent = value;
        }));
});


var $d832f2ef8a5ce6ac$export$2e2bcd8739ae039 = (0, $694a8ddd6f476c7f$export$2e2bcd8739ae039);


export {$d832f2ef8a5ce6ac$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=stimulus-x.esm.js.map
